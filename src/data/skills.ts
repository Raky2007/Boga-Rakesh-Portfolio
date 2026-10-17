export interface SimplifiedSkillCategory {
  id: string;
  title: string;
  code: string;
  skills: {
    name: string;
    detail?: string;
  }[];
}

export const simplifiedSkillsData: SimplifiedSkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    code: '01 / CORE',
    skills: [
      { name: 'Java', detail: 'OOP, Collections, Multi-threading, Algorithms' },
      { name: 'Python', detail: 'Pandas, NumPy, FastAPI, Data Pipelines' },
      { name: 'JavaScript (ES6+)', detail: 'Asynchronous event loops, DOM, Runtimes' },
      { name: 'TypeScript', detail: 'Strict type safety, API contracts' },
      { name: 'C', detail: 'Pointers, memory management, procedural logic' },
      { name: 'SQL', detail: 'Relational queries, joins, schema design' },
      { name: 'HTML5 & CSS3', detail: 'Semantic layouts, CSS variables, a11y' }
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    code: '02 / INTERFACE',
    skills: [
      { name: 'React', detail: 'Component lifecycles, state hooks, virtual DOM' },
      { name: 'TypeScript', detail: 'Strict typed component interfaces' },
      { name: 'Tailwind CSS', detail: 'Design tokens, responsive grid layouts' },
      { name: 'Ant Design', detail: 'Enterprise UI systems, data tables, modals' },
      { name: 'Recharts', detail: 'Dynamic charts & analytics visualization' },
      { name: 'Vite', detail: 'Fast HMR build tooling & bundle optimization' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Engineering',
    code: '03 / SYSTEMS',
    skills: [
      { name: 'FastAPI', detail: 'Asynchronous Python endpoints & Pydantic schemas' },
      { name: 'Node.js', detail: 'Event-driven server runtime, I/O streaming' },
      { name: 'Express', detail: 'RESTful architecture, middleware routing' },
      { name: 'Spring Boot (Basics)', detail: 'Java enterprise service fundamentals' },
      { name: 'RESTful APIs', detail: 'Contract-first endpoint design & error handling' },
      { name: 'Socket.IO', detail: 'Bi-directional real-time WebSocket communication' }
    ]
  },
  {
    id: 'databases',
    title: 'Databases & Storage',
    code: '04 / DATA',
    skills: [
      { name: 'MySQL', detail: 'Normalized relational schemas & query optimization' },
      { name: 'SQLite (better-sqlite3)', detail: 'Atomic embedded persistence for local platforms' },
      { name: 'DBMS Principles', detail: 'ACID transactions, indexing, relational constraints' },
      { name: 'Data Preparation', detail: 'Telecom log cleaning & formatting in Google Colab' }
    ]
  },
  {
    id: 'tools-concepts',
    title: 'Tools & Core Concepts',
    code: '05 / FOUNDATIONS',
    skills: [
      { name: 'Data Structures & Algorithms', detail: 'Trees, Graphs, DP, Complexity Analysis' },
      { name: 'Object-Oriented Programming (OOP)', detail: 'Polymorphism, Encapsulation, Abstraction' },
      { name: 'Operating Systems', detail: 'Process scheduling, concurrency, memory allocation' },
      { name: 'Computer Networks', detail: 'TCP/IP, sockets, HTTP protocols, OSI stack' },
      { name: 'Git & GitHub', detail: 'Version control, branch management, collaborative PRs' },
      { name: 'VS Code & IntelliJ IDEA', detail: 'Primary development environments' },
      { name: 'Google Colab', detail: 'Cloud Jupyter notebooks & ML model experiments' },
      { name: 'Vercel & Render', detail: 'Edge deployment & containerized service hosting' }
    ]
  }
];
