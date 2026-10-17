import type { ExploringItem } from '../types';

export const exploringData: ExploringItem[] = [
  {
    id: 'java-dsa',
    category: 'ALGORITHMS & OPTIMIZATION',
    topic: 'Advanced Java & Competitive DSA',
    focus: 'Graph traversals, dynamic programming patterns, and memory-conscious data structure design.',
    currentExperiment: 'Daily problem-solving practice in Java with benchmarked time and space complexities.',
    status: 'Active Practice'
  },
  {
    id: 'backend-architecture',
    category: 'DISTRIBUTED ARCHITECTURE',
    topic: 'Scalable Backend Services & Microservices',
    focus: 'Event-driven systems, message queues, rate-limiting algorithms, and resilient database indexing.',
    currentExperiment: 'Designing robust API gateway patterns and cache invalidation strategies using Redis and Node.js.',
    status: 'In Progress'
  },
  {
    id: 'local-ai-agents',
    category: 'MACHINE LEARNING & AGENTS',
    topic: 'Local AI RAG & Autonomous Tool Calling',
    focus: 'Small language models (Llama 3 / Mistral) running locally on consumer hardware via Ollama for code indexing.',
    currentExperiment: 'Building an on-device contextual retrieval-augmented generation engine for local documentation.',
    status: 'Researching'
  },
  {
    id: 'realtime-systems',
    category: 'NETWORKING & PROTOCOLS',
    topic: 'Real-Time Systems & WebRTC / WebSockets',
    focus: 'Low-latency state synchronization, conflict-free replicated data types (CRDTs), and peer-to-peer data channels.',
    currentExperiment: 'Benchmarking WebSocket connection pools against SSE for multi-client collaborative canvases.',
    status: 'In Progress'
  }
];
