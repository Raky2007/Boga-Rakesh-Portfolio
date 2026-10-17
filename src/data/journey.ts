import type { Milestone } from '../types';

export const journeyData: Milestone[] = [
  {
    id: 'btech-spec',
    period: '2022 — 2026',
    role: 'B.Tech in Computer Science & Engineering (AI & ML)',
    institution: "St. Peter's Engineering College",
    location: 'Hyderabad, India',
    summary:
      'Pursuing an engineering degree grounded in computer science fundamentals, artificial intelligence, and applied software engineering. Focusing on building tangible, working software alongside coursework.',
    learnings: [
      'Core theoretical grounding in Data Structures, Algorithms, DBMS, Operating Systems, and Machine Learning',
      'Architectural understanding of how high-level software interacts with memory, network protocols, and hardware runtimes',
      'Collaborative engineering through campus technical clubs, lab initiatives, and student hackathons'
    ],
    tags: ['CSE (AI & ML)', 'Algorithms', 'Distributed Systems', 'Academic Foundation']
  },
  {
    id: 'code-liner-milestone',
    period: '2024 — 2025',
    role: 'Software Architect & Frontend Engineer',
    institution: 'Code-Liner (Independent Build)',
    location: 'Live on Vercel & Render',
    summary:
      'Conceived, engineered, and launched Code-Liner, a web platform that parses full project ZIP archives (up to 500MB) to visualize architectural DAGs, dependency graphs, and AST complexity metrics.',
    learnings: [
      'Engineered an isolated backend pipeline that safely unzips codebases, tokenizes ASTs, and calculates cyclomatic risk scores',
      'Designed an intuitive UI with interactive Monaco Editor splits and topological architecture graphs',
      'Successfully deployed full-stack infrastructure across Vercel (Client) and Render (Analysis API)'
    ],
    tags: ['React', 'TypeScript', 'AST Analysis', 'System Architecture', 'Vercel']
  },
  {
    id: 'flashmind-milestone',
    period: '2024',
    role: 'Full Stack & AI Engineer',
    institution: 'FlashMind System',
    location: 'Independent Project',
    summary:
      'Developed an end-to-end multi-modal learning assistant that transforms raw lecture audio and lecture PDFs into active flashcard decks and practice quizzes using local offline-first models.',
    learnings: [
      'Overcame cloud API latency and cost barriers by orchestrating faster-whisper and Ollama local language models',
      'Implemented robust OCR pipelines using PyMuPDF and EasyOCR for noisy textbook snapshots',
      'Built a distraction-free, fluid study interface utilizing React, Ant Design, and Framer Motion'
    ],
    tags: ['FastAPI', 'PyMuPDF', 'EasyOCR', 'faster-whisper', 'Local LLMs']
  },
  {
    id: 'techbrains-milestone',
    period: '2024',
    role: 'Lead Systems Developer',
    institution: 'TechBrains Collegiate Investigation',
    location: 'Campus Event Deployment',
    summary:
      'Engineered a real-time multiplayer forensic platform for campus technical challenges, featuring local intranet synchronization, team scoring, and tamper-resistant administrative controls.',
    learnings: [
      'Implemented server-authoritative state synchronization using WebSockets (Socket.IO) to eliminate cheating vectors',
      'Leveraged SQLite with better-sqlite3 for atomic, fast transactions across high-frequency student team submissions',
      'Maintained 100% uptime throughout intense competition rounds on closed local-area networks'
    ],
    tags: ['Real-Time Systems', 'Socket.IO', 'SQLite', 'Node.js', 'Competitive Platform']
  }
];
