import React, { useEffect, useRef } from 'react';

interface Node {
  id: number;
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  type: 'core' | 'processing' | 'active-lime' | 'endpoint';
  label?: string;
  phase: number;
}

interface Edge {
  from: number;
  to: number;
  weight: number;
  packetProgress?: number;
  hasPacket?: boolean;
}

export const ConnectedSystemsCanvas: React.FC<{ className?: string }> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let dpr = window.devicePixelRatio || 1;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Architecture node structure representing connected software pipelines
    const rawNodesData: { xRel: number; yRel: number; type: Node['type']; label?: string; radius: number }[] = [
      { xRel: 0.16, yRel: 0.28, type: 'core', label: 'INGEST', radius: 6 },
      { xRel: 0.38, yRel: 0.18, type: 'processing', label: 'AST PARSE', radius: 4.5 },
      { xRel: 0.24, yRel: 0.54, type: 'active-lime', label: 'LOCAL LLM', radius: 7 },
      { xRel: 0.48, yRel: 0.44, type: 'core', label: 'GRAPH DAG', radius: 5 },
      { xRel: 0.68, yRel: 0.22, type: 'processing', label: 'SOCKET.IO', radius: 4 },
      { xRel: 0.62, yRel: 0.62, type: 'active-lime', label: 'SQLITE LEDGER', radius: 6.5 },
      { xRel: 0.82, yRel: 0.42, type: 'core', label: 'DISPATCH', radius: 5.5 },
      { xRel: 0.86, yRel: 0.72, type: 'endpoint', label: 'CLIENT UI', radius: 4.5 },
      { xRel: 0.36, yRel: 0.82, type: 'processing', label: 'OCR PIPELINE', radius: 4 },
      { xRel: 0.52, yRel: 0.86, type: 'endpoint', label: 'TELEMETRY', radius: 4 },
      { xRel: 0.18, yRel: 0.82, type: 'endpoint', label: 'AUDIO TOKENS', radius: 3.5 },
      { xRel: 0.78, yRel: 0.14, type: 'endpoint', label: 'REST API', radius: 4 }
    ];

    const edgesData: Edge[] = [
      { from: 0, to: 1, weight: 1, hasPacket: true, packetProgress: 0.2 },
      { from: 0, to: 2, weight: 1.5, hasPacket: true, packetProgress: 0.65 },
      { from: 1, to: 3, weight: 1, hasPacket: false },
      { from: 2, to: 3, weight: 1.5, hasPacket: true, packetProgress: 0.45 },
      { from: 3, to: 4, weight: 1, hasPacket: true, packetProgress: 0.1 },
      { from: 3, to: 5, weight: 1.5, hasPacket: true, packetProgress: 0.8 },
      { from: 4, to: 6, weight: 1, hasPacket: false },
      { from: 5, to: 6, weight: 1.5, hasPacket: true, packetProgress: 0.35 },
      { from: 6, to: 7, weight: 1.2, hasPacket: true, packetProgress: 0.9 },
      { from: 2, to: 8, weight: 1, hasPacket: false },
      { from: 8, to: 10, weight: 0.8, hasPacket: false },
      { from: 5, to: 9, weight: 1, hasPacket: false },
      { from: 4, to: 11, weight: 1, hasPacket: false },
      { from: 1, to: 4, weight: 0.8, hasPacket: false }
    ];

    let nodes: Node[] = [];

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = window.devicePixelRatio || 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      nodes = rawNodesData.map((d, index) => {
        const x = d.xRel * width;
        const y = d.yRel * height;
        return {
          id: index,
          x,
          y,
          baseX: x,
          baseY: y,
          vx: 0,
          vy: 0,
          radius: d.radius,
          type: d.type,
          label: d.label,
          phase: index * 0.8
        };
      });
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const handleCanvasClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      // Impart gentle outward pulse to nodes near click
      for (const node of nodes) {
        const dx = node.x - clickX;
        const dy = node.y - clickY;
        const dist = Math.hypot(dx, dy);
        if (dist < 180 && dist > 1) {
          const force = (180 - dist) / 180;
          node.vx += (dx / dist) * force * 4;
          node.vy += (dy / dist) * force * 4;
        }
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('click', handleCanvasClick);

    let time = 0;

    const render = () => {
      time += 0.016;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle background grid pattern in canvas coordinate system
      ctx.strokeStyle = 'rgba(217, 220, 210, 0.4)';
      ctx.lineWidth = 0.75;
      const step = 44;
      ctx.beginPath();
      for (let x = 0; x < width; x += step) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y < height; y += step) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Update node physics
      for (const node of nodes) {
        if (!prefersReducedMotion) {
          // Floating oscillation
          const floatX = Math.sin(time + node.phase) * 1.8;
          const floatY = Math.cos(time * 0.9 + node.phase) * 1.8;

          // Pointer interaction
          if (mouseRef.current.active) {
            const dx = node.x - mouseRef.current.x;
            const dy = node.y - mouseRef.current.y;
            const dist = Math.hypot(dx, dy);
            if (dist < 110 && dist > 0) {
              const repel = ((110 - dist) / 110) * 1.8;
              node.vx += (dx / dist) * repel;
              node.vy += (dy / dist) * repel;
            }
          }

          // Damping and return to base
          const targetX = node.baseX + floatX;
          const targetY = node.baseY + floatY;

          node.vx += (targetX - node.x) * 0.04;
          node.vy += (targetY - node.y) * 0.04;
          node.vx *= 0.88;
          node.vy *= 0.88;

          node.x += node.vx;
          node.y += node.vy;
        }
      }

      // Draw Edges (curved or straight architectural lines)
      for (const edge of edgesData) {
        const fromNode = nodes[edge.from];
        const toNode = nodes[edge.to];
        if (!fromNode || !toNode) continue;

        const isLimeEdge = fromNode.type === 'active-lime' || toNode.type === 'active-lime';

        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);

        if (isLimeEdge) {
          ctx.strokeStyle = 'rgba(24, 61, 50, 0.45)';
          ctx.lineWidth = 1.35;
        } else {
          ctx.strokeStyle = 'rgba(24, 61, 50, 0.2)';
          ctx.lineWidth = 1;
        }
        ctx.stroke();

        // Draw traveling packet pulse along edge
        if (edge.hasPacket && !prefersReducedMotion) {
          edge.packetProgress = ((edge.packetProgress || 0) + 0.007) % 1;
          const px = fromNode.x + (toNode.x - fromNode.x) * edge.packetProgress;
          const py = fromNode.y + (toNode.y - fromNode.y) * edge.packetProgress;

          ctx.beginPath();
          ctx.arc(px, py, isLimeEdge ? 2.5 : 2, 0, Math.PI * 2);
          ctx.fillStyle = isLimeEdge ? '#C7F36B' : '#183D32';
          ctx.fill();

          if (isLimeEdge) {
            ctx.beginPath();
            ctx.arc(px, py, 4.5, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(199, 243, 107, 0.35)';
            ctx.fill();
          }
        }
      }

      // Draw Nodes
      for (const node of nodes) {
        const isLime = node.type === 'active-lime';
        const isCore = node.type === 'core';

        // Outer glow/ring for active lime nodes
        if (isLime) {
          const pulse = (Math.sin(time * 2.5 + node.phase) + 1) / 2;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius + 5 + pulse * 4, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(199, 243, 107, 0.25)';
          ctx.fill();

          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius + 2, 0, Math.PI * 2);
          ctx.strokeStyle = '#183D32';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        // Main node body
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);

        if (isLime) {
          ctx.fillStyle = '#C7F36B';
        } else if (isCore) {
          ctx.fillStyle = '#183D32';
        } else {
          ctx.fillStyle = '#FFFFFF';
        }
        ctx.fill();

        ctx.strokeStyle = '#183D32';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Inner pip for white nodes
        if (!isLime && !isCore) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = '#183D32';
          ctx.fill();
        }

        // Monospaced label tag below node
        if (node.label) {
          ctx.font = '500 9.5px "Geist Mono", monospace';
          ctx.fillStyle = isLime ? '#183D32' : 'rgba(83, 98, 89, 0.85)';
          ctx.textAlign = 'center';
          ctx.fillText(node.label, node.x, node.y + node.radius + 12);
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('click', handleCanvasClick);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[380px] sm:min-h-[440px] lg:min-h-[500px] rounded-2xl border border-[#D9DCD2] bg-[#F7F6F0] overflow-hidden select-none ${className}`}
      aria-label="Connected Systems Network Interactive Topology"
    >
      <canvas ref={canvasRef} className="block w-full h-full cursor-crosshair" />

      {/* Technical annotation overlays */}
      <div className="absolute top-4 left-4 pointer-events-none flex items-center gap-2 px-2.5 py-1 rounded bg-[#EFEEE6]/90 border border-[#D9DCD2] backdrop-blur-xs">
        <span className="w-2 h-2 rounded-full bg-[#C7F36B] border border-[#183D32]" />
        <span className="font-mono text-[10px] uppercase tracking-wider text-[#183D32] font-semibold">
          SOFTWARE ARCHITECTURE // CONCEPT MAP
        </span>
      </div>
    </div>
  );
};
