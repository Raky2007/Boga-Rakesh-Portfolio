import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'code-liner',
    title: 'Code-Liner',
    tagline: 'Codebase exploration platform for unpacking unfamiliar repositories, mapping dependencies, and assessing code health.',
    category: 'Software Intelligence & Web Platform',
    badgeText: 'Verified Live App',
    description:
      'Upload a repository ZIP archive to explore file hierarchies, parse Abstract Syntax Trees across languages, inspect cyclomatic complexity and maintainability hotspots, and browse source code with an integrated Monaco editor.',
    overview:
      'Code-Liner is an automated codebase exploration platform designed to help developers, students, and engineering leads quickly understand unfamiliar repositories. Instead of spending hours reading through nested folders manually, users can upload an archive to generate a visual architectural map, identify structural code smells, and inspect code logic in one workspace.',
    howItWorks: [
      'Upload a software repository as a ZIP archive through the web client.',
      'The engine unpacks the project and parses Abstract Syntax Trees (AST) to extract functions, classes, and file dependencies.',
      'A quality analyzer evaluates complexity metrics to calculate an explainable Code Health Index.',
      'Users explore the architecture map rendered with React Flow, browse files in Monaco Editor, and request AI-assisted walkthroughs for complex methods.'
    ],
    keyFeatures: [
      'Archive Ingestion & Unpacking: Safely extracts and analyzes multi-file software projects in the browser.',
      'Code Health Index: Calculates explainable maintainability scores evaluating module smells (large functions, low cohesion) and cyclomatic complexity.',
      'Interactive Architecture Topology: Renders dependencies and call relationships visually using React Flow.',
      'Integrated Monaco Editor: Full-featured code browsing experience with syntax highlighting and symbol navigation.',
      'AI Code Explanations: Integrates with OpenRouter AI models to summarize complex functions and execution flow on demand.'
    ],
    builtWith: [
      { category: 'Frontend', technologies: ['React 18', 'TypeScript', 'Vite', 'React Flow', 'Monaco Editor', 'Tailwind CSS'] },
      { category: 'Backend & Analysis', technologies: ['Node.js', 'Express', 'AST Tokenization'] },
      { category: 'AI & Hosting', technologies: ['OpenRouter API', 'Vercel'] }
    ],
    technicalHighlights: [
      'Explainable Health Model: Isolates measured dimensions (such as cyclomatic complexity and function length) from unmeasured factors rather than presenting unverified healthy scores for missing data.',
      'Topological Call Graphing: Generates node-link DAGs that help developers trace dependencies across components and services.'
    ],
    highlights: [
      'Extracts and explores multi-file repository archives directly in the browser',
      'Calculates an explainable Code Health Index evaluating cyclomatic complexity and function smells',
      'Interactive architecture topology visualizer mapping subsystem relationships with React Flow',
      'Integrated Monaco Editor with syntax highlighting, symbol navigation, and AI code walkthroughs'
    ],
    architectureOverview:
      'Frontend: React 18, TypeScript, Vite, React Flow, Tailwind CSS, Monaco Editor deployed on Vercel. Backend API: Node.js, Express, AST tokenization, OpenRouter AI integration.',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'React Flow',
      'Monaco Editor',
      'OpenRouter AI',
      'Vercel'
    ],
    liveUrl: 'https://code-liner.vercel.app/',
    repoUrl: 'https://github.com/Raky2007/Code-liner',
    featured: true,
    status: 'Live Demo',
    visualType: 'codeliner',
    stats: [
      { label: 'Analysis Engine', value: 'AST + Cyclomatic' },
      { label: 'Architecture View', value: 'React Flow DAG' },
      { label: 'Hosting', value: 'Vercel Deployed' }
    ]
  },
  {
    id: 'varifact-ai',
    title: 'VariFact AI',
    tagline: 'Conversational data analytics application converting natural-language questions into instant charts and tables.',
    category: 'AI & Data Analytics',
    badgeText: '🏆 1st Place GFG Hackathon',
    date: 'March 2026',
    description:
      'Upload CSV or XLSX spreadsheets, inspect dataset schemas and row previews, and ask questions in plain English to automatically generate dynamic Recharts visualizations and exportable summary tables.',
    overview:
      'VariFact AI is a conversational data analytics application that enables analysts and business stakeholders to interrogate spreadsheets in plain English. Users upload CSV or XLSX datasets and ask questions to immediately view interactive charts, data tables, and key takeaways without writing SQL queries or spreadsheet formulas.',
    howItWorks: [
      'Upload one or more CSV or Excel (XLSX) spreadsheets through the web dashboard.',
      'The server parses rows and headers using PapaParse and SheetJS, displaying column data types and live row previews.',
      'Enter an analytical question in plain English (e.g., comparing metric distributions across categories).',
      'Google Gemini processes the schema and question, returning structured chart configurations and bulleted analytical takeaways rendered with Recharts.'
    ],
    keyFeatures: [
      'Multi-Dataset Management: Upload, switch between, and manage multiple CSV and XLSX files with live row count and column inspection.',
      'Conversational Querying: Interrogate uploaded datasets using natural-language questions powered by Google Gemini.',
      'Dynamic Recharts Visualizations: Automatically renders responsive bar charts based on query results and data aggregations.',
      'Dual Views (Charts & Tables): Easily toggle between graphical charts and detailed tabular views of query results.',
      'One-Click Export: Download generated summary tables or full datasets directly from the interface.'
    ],
    builtWith: [
      { category: 'Frontend', technologies: ['React', 'TypeScript', 'Recharts', 'Lucide React', 'Tailwind CSS', 'Vite'] },
      { category: 'Backend & Parsing', technologies: ['Node.js', 'Express', 'Multer (memory storage)', 'PapaParse', 'SheetJS (XLSX)'] },
      { category: 'AI & Hosting', technologies: ['Google Gemini API (@google/genai)', 'Vercel'] }
    ],
    technicalHighlights: [
      'In-Memory Dataset Store: Implements an in-memory dataset manager with schema inference, enabling users to preview rows immediately while streaming only schema context and relevant samples to Gemini to conserve token budgets.',
      'Structured Chart Generation: Prompts Gemini to return structured JSON containing both visual chart configurations and key analytical takeaways in a single response.'
    ],
    highlights: [
      'Awarded 1st Place at the GeeksforGeeks hackathon prototype sprint',
      'Multi-dataset switcher supporting CSV and XLSX files with automatic schema validation',
      'Natural-language querying powered by Google Gemini API (@google/genai)',
      'Dynamic output rendering with Recharts bar graphs, data tables, and one-click data export'
    ],
    architectureOverview:
      'Frontend: React, TypeScript, Recharts, Tailwind CSS, Vite deployed on Vercel. Backend: Node.js, Express, Multer in-memory parsing, PapaParse, SheetJS, and Google Gemini API integration.',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'Gemini API',
      'Recharts',
      'PapaParse',
      'SheetJS'
    ],
    liveUrl: 'https://geeks-for-geeks-dataset-project.vercel.app/',
    repoUrl: 'https://github.com/Raky2007/GeeksForGeeks-dataset-project',
    featured: true,
    status: 'Hackathon Winner',
    visualType: 'varifact',
    stats: [
      { label: 'Award', value: '1st Place GFG Hackathon' },
      { label: 'Input Formats', value: 'CSV & XLSX' },
      { label: 'Visual Output', value: 'Recharts & Tables' }
    ]
  },
  {
    id: 'flashmind',
    title: 'FlashMind',
    tagline: 'Offline-first AI learning platform converting multi-modal notes into active-recall flashcard decks and quizzes.',
    category: 'AI & Learning System',
    badgeText: 'Local AI · 100% Privacy',
    date: 'Feb 2026',
    description:
      'Ingests PDFs, handwritten notes via EasyOCR, and voice memos via faster-whisper to generate active-recall flashcards, timed quizzes, and streak analytics powered by local Ollama models with zero external API fees.',
    overview:
      'FlashMind is an offline-first learning platform built for students who want to study efficiently from their lecture notes without paying subscription fees or uploading private course materials to cloud AI servers. It converts lecture slides, textbook photos, and audio voice memos into structured active-recall study decks and diagnostic quizzes.',
    howItWorks: [
      'Provide study materials by uploading a PDF, uploading textbook/handwriting images, recording a voice note, or pasting text.',
      'PyMuPDF extracts document text, EasyOCR extracts photographed handwriting, and faster-whisper transcribes audio locally.',
      'A local Ollama daemon running Phi-3 (3.8B model) synthesizes Q&A flashcards, cloze cards, and multiple-choice questions.',
      'Review generated decks in timed quiz sessions with fuzzy-matching auto-grading, track progress on the dashboard, and export to Anki.'
    ],
    keyFeatures: [
      'Multi-Input Processing: Ingests multi-page PDFs, camera photos of textbooks/notes via EasyOCR, and voice recordings via faster-whisper.',
      'Local Ollama Inference: Generates flashcards and quizzes entirely on local CPU/GPU using the Phi-3 3.8B model with zero API subscription costs.',
      'Smart Quiz Engine: Conducts timed quiz sessions with fuzzy-matching auto-grading, confidence ratings, and streak tracking.',
      'Learning Dashboard: Visualizes study momentum, mastery trends, and historical quiz attempts.',
      'Standardized Deck Export: Exports study materials into Anki-compatible decks, structured JSON, and CSV.'
    ],
    builtWith: [
      { category: 'Frontend', technologies: ['React 18', 'TypeScript', 'Ant Design 5', 'Framer Motion', 'Chart.js', 'Vite'] },
      { category: 'Backend & Extractors', technologies: ['Python 3.11+', 'FastAPI', 'PyMuPDF', 'EasyOCR', 'faster-whisper', 'Uvicorn'] },
      { category: 'Local AI Engine', technologies: ['Ollama Daemon (Phi-3 3.8B Model)'] }
    ],
    technicalHighlights: [
      '100% Local AI Pipeline: Built to run entirely on user hardware via Ollama, guaranteeing student notes and audio recordings never leave the machine while avoiding third-party API rate limits.',
      'Multi-Modal Parsing Pipeline: Combines dedicated Python document and audio processing libraries (PyMuPDF, EasyOCR, whisper) behind a unified FastAPI asynchronous interface.'
    ],
    highlights: [
      'Multi-modal input support across multi-page PDFs, camera textbook snapshots, raw text, and voice notes',
      'Local LLM inference via Ollama (Phi-3 3.8B) optimized for CPU execution with 100% data privacy',
      'Adaptive timed quiz engine with fuzzy-matching auto-grading and streak tracking',
      'Study dashboard with learning momentum charts, quiz history, and Anki-compatible export'
    ],
    architectureOverview:
      'Frontend: React 18, TypeScript, Ant Design 5, Framer Motion, Chart.js, Vite. Backend: Python 3.11+, FastAPI, PyMuPDF, EasyOCR, faster-whisper, and Ollama local daemon endpoints.',
    technologies: [
      'Python',
      'FastAPI',
      'React',
      'TypeScript',
      'Ollama (Phi-3)',
      'PyMuPDF',
      'EasyOCR',
      'Ant Design'
    ],
    repoUrl: 'https://github.com/Raky2007/FlashMind',
    featured: false,
    status: 'Active Development',
    visualType: 'flashmind',
    stats: [
      { label: 'Ingestion Formats', value: 'PDF · OCR · Audio · Text' },
      { label: 'Inference Engine', value: 'Ollama (Phi-3 3.8B)' },
      { label: 'Data Privacy', value: '100% Local / Zero API Cost' }
    ]
  },
  {
    id: 'techbrains',
    title: 'TechBrains',
    tagline: 'Authoritative LAN-based multiplayer forensic investigation platform for collegiate competitions.',
    category: 'Real-Time LAN Platform',
    badgeText: 'LAN Intranet Platform',
    description:
      'A self-hosted, offline-ready forensic investigation platform coordinating 30+ concurrent team workstations over a local college LAN switch with live Socket.IO leaderboards, authoritative timers, and atomic SQLite persistence.',
    overview:
      'TechBrains is an authoritative, self-hosted multiplayer forensic investigation game platform designed for collegiate technical symposiums. Running entirely on a local network from a single host machine, it enables 30+ competing student teams to solve sequential investigative puzzles concurrently without relying on external internet connectivity or cloud servers.',
    howItWorks: [
      'Host Server Launch: The coordinator starts the server on a host laptop bound to 0.0.0.0:3000, which automatically initializes an embedded SQLite database (nexus.db).',
      'Workstation Access: 30+ team laptops connect over local Wi-Fi or Ethernet switch to the host IP without needing internet.',
      'Two-Stage Investigation: Teams solve Level 1 technical quiz questions to earn credits, then unlock Level 2 forensic evidence cases (purchasing hints with strategic point deductions).',
      'Authoritative Sync: Authenticated Socket.IO rooms broadcast score changes, clue unlock events, and countdown timers to an auditorium leaderboard.'
    ],
    keyFeatures: [
      'Zero-Cloud LAN Architecture: Runs fully self-contained on a local network, eliminating campus internet outage risks during live competitions.',
      'Two-Stage Competition Flow: Sequential progression from Level 1 technical quiz challenges to Level 2 forensic case files.',
      'Clue-Credit Economy: Strategic in-game economy where purchasing hints deducts investigation credits and dynamically affects rankings.',
      'Server-Authoritative Timers: Countdown timers enforced on the server with pause-time freezing, submission deadline checks, and reboot recovery.',
      'Organizer Control Center: Administrative portal for real-time team monitoring, broadcast announcements, manual overrides, and point-in-time database backups.'
    ],
    builtWith: [
      { category: 'Frontend', technologies: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Lucide React', 'Framer Motion'] },
      { category: 'Backend & Real-Time', technologies: ['Node.js', 'Express', 'Socket.IO (authenticated rooms)'] },
      { category: 'Database & Security', technologies: ['SQLite (better-sqlite3 WAL mode)', 'Zod validation', 'bcryptjs'] }
    ],
    technicalHighlights: [
      'Write-Ahead Logging SQLite Engine: Employs better-sqlite3 with Write-Ahead Logging (WAL) and atomic transactions to handle concurrent score submissions with microsecond response times and complete crash resilience.',
      'Anti-Cheating State Authority: Game state, timers, and answer validation remain strictly on the host server, preventing inspect-element timing tampering or answer sniffing over the network.'
    ],
    highlights: [
      'Runs on a single host machine supporting 30+ concurrent team workstations over local college LAN switches with zero internet reliance',
      'Low-latency full-duplex synchronization between competing student teams and admin room using authenticated Socket.IO',
      'Server-authoritative timers with pause-time freezing, reboot recovery, and deadline verification on every submission',
      'Atomic credit, hint, and penalty ledger backed by embedded SQLite with Write-Ahead Logging (WAL) and Zod schema validation'
    ],
    architectureOverview:
      'Frontend: React 18, TypeScript, Vite, Tailwind CSS, Lucide React, Framer Motion. Backend: Node.js, Express, Socket.IO bound to 0.0.0.0:3000. Database: SQLite via better-sqlite3 with WAL enabled.',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'Socket.IO',
      'SQLite',
      'better-sqlite3',
      'Tailwind CSS'
    ],
    repoUrl: 'https://github.com/Raky2007/TechBrains',
    featured: false,
    status: 'Production',
    visualType: 'techbrains',
    stats: [
      { label: 'Topology', value: 'Local LAN / Zero Cloud' },
      { label: 'Workstations', value: '30+ Concurrent Teams' },
      { label: 'Persistence', value: 'SQLite Atomic (WAL)' }
    ]
  },
  {
    id: 'wexa-ai',
    title: 'Wexa AI',
    tagline: 'Graph-powered hackathon team discovery and candidate recommendation engine built on Neo4j/CognoDB.',
    category: 'Graph Intelligence',
    badgeText: 'Graph Database · Live Demo',
    description:
      'Traverses multidimensional graph relations in CognoDB to match hackathon candidates by skill alignment, domain track record, and previous collaboration networks, complete with interactive React Flow sub-graph explanations.',
    overview:
      'Wexa AI (Forge) is a graph-powered teammate discovery platform that helps developers assemble balanced hackathon teams. Instead of flat keyword filtering, it traverses a live graph database in CognoDB to discover candidates who have complementary technical skills, domain expertise, and prior collaborative track records.',
    howItWorks: [
      'Define Project Idea: Enter your hackathon project description, choose a target industry domain (e.g. Healthcare, FinTech), select required skills, and pick a team size.',
      'Multi-Hop Graph Traversal: The backend runs parameterized Cypher queries against CognoDB to traverse Person, Skill, Technology, Project, and Domain nodes.',
      'Heuristic Candidate Ranking: Candidates are ranked out of 100% using a documented formula: 40% skill alignment + 40% domain experience + 10% graph connectivity + 10% seniority.',
      'Interactive Path Explanations: Click "Why this person?" to inspect visual sub-graphs rendered with React Flow, showing the candidate\'s direct skills, shared projects, and collaboration links.'
    ],
    keyFeatures: [
      'Graph-Powered Team Recommendations: Matches candidates through multi-hop relationship traversals rather than isolated table joins.',
      'Complementary Expertise Discovery: Identifies non-redundant teammates who bring cross-functional skills based on previous collaborative project history.',
      'Match Explanation Sub-Graphs: Visualizes the exact connection paths justifying why a candidate was recommended using @xyflow/react (React Flow).',
      'Global Graph Explorer: Interactive network visualization tool with an inspector sidebar to explore the full developer and technology community.',
      'Transparent Weighted Scoring: Clear match breakdown evaluating skill match, domain background, collaboration ties, and seniority level.'
    ],
    builtWith: [
      { category: 'Frontend', technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Framer Motion', '@xyflow/react (React Flow)'] },
      { category: 'Backend & Graph Cloud', technologies: ['Node.js', 'Express', 'CognoDB (Graph Database via neo4j-driver Bolt)', 'Zod'] },
      { category: 'Hosting', technologies: ['Vercel Deployed'] }
    ],
    technicalHighlights: [
      'Native Cypher Path Traversal: Replaces 9-table relational SQL joins with native Cypher path matching, evaluating multi-hop developer collaborations and domain intersections in a single query transaction.',
      'Interactive Sub-Graph Visualization: Transforms graph query result paths into interactive React Flow nodes and edges so users understand the rationale behind recommendations.'
    ],
    highlights: [
      'Multi-hop graph database traversal across Person, Skill, Technology, Project, and Domain nodes in CognoDB',
      'Weighted heuristic recommendation algorithm balancing skill alignment, domain track record, collaboration history, and seniority',
      'Complementary team assembly uncovering non-redundant candidates who bring cross-functional skills based on past project partnerships',
      'Interactive match explanation sub-graphs and global developer network visualization powered by React Flow (@xyflow/react)'
    ],
    architectureOverview:
      'Frontend: React, TypeScript, Vite, Tailwind CSS v4, Framer Motion, @xyflow/react (React Flow) deployed on Vercel. Backend API: Node.js, Express, neo4j-driver Bolt protocol, CognoDB Graph Cloud, Zod.',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'CognoDB (Graph)',
      'neo4j-driver',
      'React Flow',
      'Tailwind CSS'
    ],
    liveUrl: 'https://frontend-nine-flax-32.vercel.app/',
    repoUrl: 'https://github.com/Raky2007/Wexa-AI',
    featured: false,
    status: 'Live Demo',
    visualType: 'wexa',
    stats: [
      { label: 'Database', value: 'CognoDB / Cypher' },
      { label: 'Visual Explainer', value: 'React Flow Sub-Graphs' },
      { label: 'Deployment', value: 'Vercel Deployed' }
    ]
  }
];
