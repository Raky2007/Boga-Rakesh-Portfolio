import React from 'react';
import type { Project } from '../types';
import { SectionHeading } from '../components/SectionHeading';
import { TechBadge } from '../components/TechBadge';
import { Button } from '../components/Button';
import {
  ExternalLink,
  ArrowUpRight,
  Cpu,
  Network,
  FileCode,
  CheckCircle2,
  BarChart3,
  Sparkles,
  Share2,
  Activity
} from 'lucide-react';
import { GithubIcon } from '../components/Icons';

interface ProjectsSectionProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsSectionProps> = ({ projects, onSelectProject }) => {
  const codeliner = projects.find((p) => p.id === 'code-liner') || projects[0];
  const varifact = projects.find((p) => p.id === 'varifact-ai') || projects[1];
  const flashmind = projects.find((p) => p.id === 'flashmind') || projects[2];
  const techbrains = projects.find((p) => p.id === 'techbrains') || projects[3];
  const wexa = projects.find((p) => p.id === 'wexa-ai') || projects[4];

  return (
    <section id="work" className="py-24 sm:py-32 border-t border-[#D9DCD2]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          label="02 / FEATURED PROJECTS"
          title="Things I've built."
          subtitle="Real-world software exploration tools, conversational data analytics, offline learning platforms, and real-time multiplayer systems engineered with verified technical depth."
        />

        <div className="space-y-16 sm:space-y-24">
          {/* ========================================================= */}
          {/* FEATURED PROJECT 01: Code-Liner (Software Intelligence)   */}
          {/* ========================================================= */}
          <div className="bg-[#FFFFFF] border border-[#D9DCD2] rounded-2xl overflow-hidden shadow-sm hover:border-[#183D32]/40 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Left Column: Context, Features & Actions */}
              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#D9DCD2]">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#536259]">
                      {codeliner.category}
                    </span>
                    <span className="text-[#D9DCD2]">/</span>
                    <TechBadge variant="accent" dot>
                      Live on Vercel
                    </TechBadge>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl text-[#183D32] font-normal">
                    {codeliner.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-[#536259] leading-relaxed">
                    {codeliner.description}
                  </p>

                  {/* Highlights list */}
                  <ul className="mt-6 space-y-2.5">
                    {codeliner.highlights.slice(0, 4).map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#536259]">
                        <CheckCircle2 size={15} className="text-[#183D32] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="mt-6">
                    <div className="font-mono text-[11px] uppercase tracking-wider text-[#788078] mb-2 font-medium">
                      Built With
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {codeliner.technologies.slice(0, 6).map((tech) => (
                        <TechBadge key={tech} variant="default">
                          {tech}
                        </TechBadge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card actions: Consistent button row */}
                <div className="mt-8 pt-6 border-t border-[#D9DCD2] flex flex-wrap items-center gap-2.5">
                  {codeliner.liveUrl && (
                    <Button
                      asAnchor
                      href={codeliner.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      size="sm"
                      icon={<ExternalLink size={14} />}
                    >
                      Live Demo
                    </Button>
                  )}

                  {codeliner.repoUrl && (
                    <Button
                      asAnchor
                      href={codeliner.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                      size="sm"
                      icon={<GithubIcon size={14} />}
                    >
                      GitHub Repo
                    </Button>
                  )}

                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => onSelectProject(codeliner)}
                    icon={<ArrowUpRight size={14} />}
                  >
                    Examine Architecture
                  </Button>
                </div>
              </div>

              {/* Right Column: Code-Liner Architecture Interface Preview */}
              <div className="lg:col-span-7 bg-[#F7F6F0] p-6 sm:p-10 flex flex-col justify-center">
                <div className="bg-[#FFFFFF] border border-[#D9DCD2] rounded-xl shadow-md overflow-hidden font-mono">
                  {/* Window Bar */}
                  <div className="bg-[#EFEEE6] border-b border-[#D9DCD2] px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Cpu size={16} className="text-[#183D32]" />
                      <span className="text-xs text-[#183D32] font-semibold">code-liner // architecture-preview</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-[#285443]">
                      <span className="w-2 h-2 rounded-full bg-[#C7F36B] border border-[#183D32]" />
                      <span>Interface Illustration</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 space-y-4">
                    {/* Top Stats Banner */}
                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="p-2.5 rounded-lg bg-[#EFEEE6] border border-[#D9DCD2]">
                        <div className="text-[10px] text-[#788078] uppercase">Input Format</div>
                        <div className="font-semibold text-[#183D32] mt-0.5">ZIP Archive</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#EFEEE6] border border-[#D9DCD2]">
                        <div className="text-[10px] text-[#788078] uppercase">Health Index</div>
                        <div className="font-semibold text-[#183D32] mt-0.5">Multi-Factor</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#C7F36B]/25 border border-[#183D32]/30">
                        <div className="text-[10px] text-[#285443] uppercase">Quality Focus</div>
                        <div className="font-semibold text-[#183D32] mt-0.5">Complexity &amp; Smells</div>
                      </div>
                    </div>

                    {/* Interactive Pipeline Schematic */}
                    <div className="p-4 rounded-xl bg-[#F7F6F0] border border-[#D9DCD2] space-y-3 text-xs">
                      <div className="flex items-center justify-between border-b border-[#D9DCD2] pb-2">
                        <span className="text-[#183D32] font-semibold flex items-center gap-1.5">
                          <Activity size={14} className="text-[#285443]" />
                          AST Metric Analysis (Representative Flow)
                        </span>
                        <span className="text-[10px] text-[#788078]">Code Health Dimensions</span>
                      </div>

                      {/* Health Dimensions breakdown */}
                      <div className="space-y-2 pt-1 text-[11px]">
                        <div>
                          <div className="flex justify-between text-[#536259] mb-1">
                            <span>Module &amp; Function Smells</span>
                            <span className="font-semibold text-[#183D32]">Large Methods &amp; Low Cohesion</span>
                          </div>
                          <div className="h-2.5 w-full bg-[#EFEEE6] rounded-full overflow-hidden">
                            <div className="h-full bg-[#183D32] rounded-full" style={{ width: '75%' }} />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-[#536259] mb-1">
                            <span>Cyclomatic Complexity</span>
                            <span className="font-semibold text-[#183D32]">Branching &amp; Convoluted Paths</span>
                          </div>
                          <div className="h-2.5 w-full bg-[#EFEEE6] rounded-full overflow-hidden">
                            <div className="h-full bg-[#285443] rounded-full" style={{ width: '80%' }} />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-[#536259] mb-1">
                            <span>Interactive Architecture Map</span>
                            <span className="font-semibold text-[#183D32]">React Flow + Monaco Editor</span>
                          </div>
                          <div className="h-2.5 w-full bg-[#EFEEE6] rounded-full overflow-hidden">
                            <div className="h-full bg-[#C7F36B] border border-[#183D32]/30 rounded-full" style={{ width: '100%' }} />
                          </div>
                        </div>
                      </div>

                      <div className="pt-2 flex items-center justify-between text-[11px] text-[#788078] border-t border-[#D9DCD2]">
                        <span>Deployment: Vercel (Client)</span>
                        <span className="text-[#183D32] font-medium">OpenRouter AI Ready</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* FEATURED PROJECT 02: VariFact AI (GFG 1st Place Champion) */}
          {/* ========================================================= */}
          <div className="bg-[#FFFFFF] border border-[#D9DCD2] rounded-2xl overflow-hidden shadow-sm hover:border-[#183D32]/40 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Visual Mockup Column (Left for editorial cadence) */}
              <div className="lg:col-span-7 bg-[#EFEEE6]/60 p-6 sm:p-10 flex flex-col justify-center order-2 lg:order-1 border-t lg:border-t-0 lg:border-r border-[#D9DCD2]">
                <div className="bg-[#FFFFFF] border border-[#D9DCD2] rounded-xl shadow-md overflow-hidden">
                  <div className="bg-[#EFEEE6] border-b border-[#D9DCD2] px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <BarChart3 size={16} className="text-[#183D32]" />
                      <span className="font-mono text-xs text-[#183D32] font-semibold">varifact-ai // conversational-preview</span>
                    </div>
                    <span className="font-mono text-[10px] px-2.5 py-0.5 rounded bg-[#C7F36B] text-[#183D32] font-semibold border border-[#183D32]/25">
                      🏆 1ST PLACE WINNER
                    </span>
                  </div>

                  <div className="p-5 sm:p-6 space-y-4">
                    {/* Natural language query box */}
                    <div className="p-3 rounded-lg bg-[#F7F6F0] border border-[#D9DCD2] flex items-center gap-2.5 font-mono text-xs text-[#183D32]">
                      <Sparkles size={14} className="text-[#285443] shrink-0" />
                      <span className="text-[#536259]">Prompt:</span>
                      <span className="font-medium text-[#183D32] truncate">"Compare quarterly customer churn vs data usage tiers"</span>
                    </div>

                    {/* Simulated Recharts bar graph */}
                    <div className="p-4 rounded-xl bg-[#F7F6F0] border border-[#D9DCD2] space-y-3 font-mono">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#788078] text-[10px] uppercase tracking-wider">Dynamic Recharts Output</span>
                        <span className="text-[#183D32] font-semibold text-[11px]">Gemini Query Parsing</span>
                      </div>

                      {/* Bar chart representation */}
                      <div className="space-y-2 pt-1">
                        <div>
                          <div className="flex justify-between text-[11px] text-[#536259] mb-1">
                            <span>High Usage Tier (&gt;100GB)</span>
                            <span className="font-semibold text-[#183D32]">4.2% Churn</span>
                          </div>
                          <div className="h-3 w-full bg-[#EFEEE6] rounded-full overflow-hidden">
                            <div className="h-full bg-[#183D32] rounded-full" style={{ width: '35%' }} />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-[11px] text-[#536259] mb-1">
                            <span>Standard Tier (25-100GB)</span>
                            <span className="font-semibold text-[#183D32]">8.6% Churn</span>
                          </div>
                          <div className="h-3 w-full bg-[#EFEEE6] rounded-full overflow-hidden">
                            <div className="h-full bg-[#285443]" style={{ width: '60%' }} />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-[11px] text-[#536259] mb-1">
                            <span>Low Usage Tier (&lt;25GB)</span>
                            <span className="font-semibold text-[#183D32]">14.1% Churn</span>
                          </div>
                          <div className="h-3 w-full bg-[#EFEEE6] rounded-full overflow-hidden">
                            <div className="h-full bg-[#C7F36B] border border-[#183D32]/30 rounded-full" style={{ width: '85%' }} />
                          </div>
                        </div>
                      </div>

                      <div className="pt-2 flex items-center justify-between text-[11px] text-[#788078]">
                        <span>Input: CSV &amp; XLSX Support</span>
                        <span className="text-[#183D32] font-medium">Export: Tables &amp; CSV Ready</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Details Column (Right) */}
              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between order-1 lg:order-2">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#536259]">
                      {varifact.category}
                    </span>
                    <span className="text-[#D9DCD2]">/</span>
                    <TechBadge variant="accent" dot>
                      GFG Hackathon Champion
                    </TechBadge>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl text-[#183D32] font-normal">
                    {varifact.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-[#536259] leading-relaxed">
                    {varifact.description}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {varifact.highlights.slice(0, 4).map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#536259]">
                        <CheckCircle2 size={15} className="text-[#183D32] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <div className="font-mono text-[11px] uppercase tracking-wider text-[#788078] mb-2 font-medium">
                      Built With
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {varifact.technologies.slice(0, 6).map((tech) => (
                        <TechBadge key={tech} variant="default">
                          {tech}
                        </TechBadge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card actions: Consistent button row */}
                <div className="mt-8 pt-6 border-t border-[#D9DCD2] flex flex-wrap items-center gap-2.5">
                  {varifact.liveUrl && (
                    <Button
                      asAnchor
                      href={varifact.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      size="sm"
                      icon={<ExternalLink size={14} />}
                    >
                      Live Demo
                    </Button>
                  )}

                  {varifact.repoUrl && (
                    <Button
                      asAnchor
                      href={varifact.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                      size="sm"
                      icon={<GithubIcon size={14} />}
                    >
                      GitHub Repo
                    </Button>
                  )}

                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => onSelectProject(varifact)}
                    icon={<ArrowUpRight size={14} />}
                  >
                    Examine Architecture
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* SUPPORTING TRIO GRID: FlashMind · TechBrains · Wexa AI     */}
          {/* ========================================================= */}
          <div className="pt-4">
            <div className="flex items-center gap-3 mb-8">
              <span className="font-mono text-xs uppercase tracking-widest text-[#788078]">
                SUPPORTING SPECIALIZED SYSTEMS &amp; ARCHITECTURES
              </span>
              <div className="flex-1 h-[1px] bg-[#D9DCD2]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 03: FlashMind (Local AI Learning Platform) */}
              <div className="bg-[#FFFFFF] border border-[#D9DCD2] rounded-2xl p-7 flex flex-col justify-between shadow-sm hover:border-[#183D32]/40 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#536259] truncate min-w-0">
                      {flashmind.category}
                    </span>
                    <TechBadge variant="accent" dot className="shrink-0">
                      Local AI (Phi-3)
                    </TechBadge>
                  </div>

                  <h3 className="font-serif text-2xl text-[#183D32] font-normal min-h-[2rem] flex items-center">
                    {flashmind.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#536259] leading-relaxed min-h-[4.75rem]">
                    {flashmind.description}
                  </p>

                  {/* Technical schematic box */}
                  <div className="my-5 p-4 rounded-xl bg-[#F7F6F0] border border-[#D9DCD2] font-mono text-xs space-y-2">
                    <div className="flex items-center justify-between text-[#183D32] font-semibold border-b border-[#D9DCD2] pb-1.5">
                      <span className="flex items-center gap-1.5">
                        <FileCode size={14} /> Multi-Modal Ingestion
                      </span>
                      <span className="text-[10px] text-[#285443]">100% Local Privacy</span>
                    </div>
                    <div className="flex items-center justify-between text-[#536259] text-[11px]">
                      <span>Extractors</span>
                      <span>→ PyMuPDF · EasyOCR · Whisper</span>
                    </div>
                    <div className="flex items-center justify-between text-[#536259] text-[11px]">
                      <span>Local Inference</span>
                      <span>→ Ollama (Phi-3 3.8B CPU)</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-3 min-h-[3.25rem] content-start">
                    {flashmind.technologies.slice(0, 5).map((tech) => (
                      <TechBadge key={tech} variant="default">
                        {tech}
                      </TechBadge>
                    ))}
                  </div>
                </div>

                {/* Symmetrical Action Button Row */}
                <div className="mt-7 pt-5 border-t border-[#D9DCD2] flex items-center justify-between gap-2.5">
                  {flashmind.repoUrl && (
                    <Button
                      asAnchor
                      href={flashmind.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                      size="sm"
                      icon={<GithubIcon size={14} />}
                    >
                      GitHub Repo
                    </Button>
                  )}

                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => onSelectProject(flashmind)}
                    icon={<ArrowUpRight size={14} />}
                  >
                    Examine Architecture
                  </Button>
                </div>
              </div>

              {/* Project 04: TechBrains (Real-Time Forensic LAN Platform) */}
              <div className="bg-[#FFFFFF] border border-[#D9DCD2] rounded-2xl p-7 flex flex-col justify-between shadow-sm hover:border-[#183D32]/40 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#536259] truncate min-w-0">
                      {techbrains.category}
                    </span>
                    <TechBadge variant="default" dot className="shrink-0">
                      LAN Intranet
                    </TechBadge>
                  </div>

                  <h3 className="font-serif text-2xl text-[#183D32] font-normal min-h-[2rem] flex items-center">
                    {techbrains.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#536259] leading-relaxed min-h-[4.75rem]">
                    {techbrains.description}
                  </p>

                  {/* Technical schematic box */}
                  <div className="my-5 p-4 rounded-xl bg-[#F7F6F0] border border-[#D9DCD2] font-mono text-xs space-y-2">
                    <div className="flex items-center justify-between text-[#183D32] font-semibold border-b border-[#D9DCD2] pb-1.5">
                      <span className="flex items-center gap-1.5">
                        <Network size={14} /> Socket.IO Duplex Mesh
                      </span>
                      <span className="text-[10px] text-[#285443]">30+ Workstations</span>
                    </div>
                    <div className="flex items-center justify-between text-[#536259] text-[11px]">
                      <span>Host Server</span>
                      <span>→ Node.js @ 0.0.0.0:3000</span>
                    </div>
                    <div className="flex items-center justify-between text-[#536259] text-[11px]">
                      <span>Audit Ledger</span>
                      <span>→ SQLite WAL Atomic Store</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-3 min-h-[3.25rem] content-start">
                    {techbrains.technologies.slice(0, 5).map((tech) => (
                      <TechBadge key={tech} variant="default">
                        {tech}
                      </TechBadge>
                    ))}
                  </div>
                </div>

                {/* Symmetrical Action Button Row */}
                <div className="mt-7 pt-5 border-t border-[#D9DCD2] flex items-center justify-between gap-2.5">
                  {techbrains.repoUrl && (
                    <Button
                      asAnchor
                      href={techbrains.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                      size="sm"
                      icon={<GithubIcon size={14} />}
                    >
                      GitHub Repo
                    </Button>
                  )}

                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => onSelectProject(techbrains)}
                    icon={<ArrowUpRight size={14} />}
                  >
                    Examine Architecture
                  </Button>
                </div>
              </div>

              {/* Project 05: Wexa AI (Graph-Powered Team Discovery) */}
              <div className="bg-[#FFFFFF] border border-[#D9DCD2] rounded-2xl p-7 flex flex-col justify-between shadow-sm hover:border-[#183D32]/40 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#536259] truncate min-w-0">
                      {wexa.category}
                    </span>
                    {wexa.liveUrl ? (
                      <a
                        href={wexa.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center group cursor-pointer shrink-0"
                        title="Open Live Vercel Demo"
                      >
                        <TechBadge variant="accent" dot className="group-hover:bg-[#C7F36B]/40 transition-colors">
                          <span>Live on Vercel</span>
                          <ArrowUpRight size={11} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </TechBadge>
                      </a>
                    ) : (
                      <TechBadge variant="accent" dot className="shrink-0">
                        Live on Vercel
                      </TechBadge>
                    )}
                  </div>

                  <h3 className="font-serif text-2xl text-[#183D32] font-normal min-h-[2rem] flex items-center">
                    {wexa.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#536259] leading-relaxed min-h-[4.75rem]">
                    {wexa.description}
                  </p>

                  {/* Technical schematic box */}
                  <div className="my-5 p-4 rounded-xl bg-[#F7F6F0] border border-[#D9DCD2] font-mono text-xs space-y-2">
                    <div className="flex items-center justify-between text-[#183D32] font-semibold border-b border-[#D9DCD2] pb-1.5">
                      <span className="flex items-center gap-1.5">
                        <Share2 size={14} /> CognoDB Graph Cloud
                      </span>
                      <span className="text-[10px] text-[#285443]">Neo4j Cypher</span>
                    </div>
                    <div className="flex items-center justify-between text-[#536259] text-[11px]">
                      <span>Recommendation</span>
                      <span>→ Multi-Hop Traversal (40/40/10)</span>
                    </div>
                    <div className="flex items-center justify-between text-[#536259] text-[11px]">
                      <span>Path Explainer</span>
                      <span>→ React Flow (@xyflow)</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-3 min-h-[3.25rem] content-start">
                    {wexa.technologies.slice(0, 5).map((tech) => (
                      <TechBadge key={tech} variant="default">
                        {tech}
                      </TechBadge>
                    ))}
                  </div>
                </div>

                {/* Symmetrical Action Button Row */}
                <div className="mt-7 pt-5 border-t border-[#D9DCD2] flex items-center justify-between gap-2.5">
                  {wexa.repoUrl && (
                    <Button
                      asAnchor
                      href={wexa.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                      size="sm"
                      icon={<GithubIcon size={14} />}
                    >
                      GitHub Repo
                    </Button>
                  )}

                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => onSelectProject(wexa)}
                    icon={<ArrowUpRight size={14} />}
                  >
                    Examine Architecture
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
