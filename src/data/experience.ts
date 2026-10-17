import type { ExperienceItem, EducationItem, AchievementItem, OpenSourceRepo } from '../types';

export const educationData: EducationItem = {
  institution: "St. Peter's Engineering College",
  degree: 'Bachelor of Technology in Computer Science and Engineering (AI & ML)',
  graduationDate: 'May 2028 (Expected)',
  cgpa: '7.2 / 10',
  location: 'Hyderabad, Telangana',
  coursework: [
    'Data Structures & Algorithms',
    'Operating Systems',
    'Database Management Systems (DBMS)',
    'Computer Networks',
    'Object-Oriented Programming (OOP)'
  ],
  highlights: [
    'Specializing in Artificial Intelligence and Machine Learning curriculum',
    'Active focus on algorithmic problem solving in Java alongside web architecture',
    'Participating in campus technical hackathons and technical symposiums'
  ]
};

export const experienceData: ExperienceItem[] = [
  {
    id: 'ni-msme',
    role: 'AI & ML Jr Telecom Data Analyst',
    organization: 'Ni-MSME',
    period: 'Oct 2025 — Feb 2026',
    location: 'Yousufguda, Hyderabad (On-site)',
    type: 'Data Analyst',
    responsibilities: [
      'Data Preparation: Cleaned, formatted, and labelled high-volume raw telecom logs and usage data for modeling pipelines.',
      'Utilized Python, Pandas, NumPy, and Google Colab to build automated data transformation workflows.',
      'Analysed historical financial datasets and engineered machine learning models in Google Colab to forecast stock price movements based on technical indicators.'
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Google Colab', 'Machine Learning', 'Data Cleaning']
  },
  {
    id: 'frontend-intern',
    role: 'Front End Development Intern',
    organization: 'Web Application Internship',
    period: 'Jun 2025 — Jul 2025',
    location: 'Hyderabad, India',
    type: 'Internship',
    responsibilities: [
      'Leveraged HTML, CSS, and JavaScript to design, assemble, and deploy user interfaces for a small-scale web application.',
      'Expanded practical development knowledge across HTML, CSS, JavaScript, and the modern React component ecosystem.',
      'Ensured cross-browser responsive layouts and optimized UI performance for desktop and mobile clients.'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'Responsive Design']
  }
];

export const achievementsData: AchievementItem[] = [
  {
    id: 'gfg-hackathon',
    title: '1st Place Winner — GeeksforGeeks Hackathon',
    category: 'Hackathon',
    date: 'March 2026',
    description:
      'Awarded 1st Place for ideating, designing, and engineering VariFact AI — an AI-powered conversational data analytics dashboard built from scratch in 3 hours.',
    metric: 'Built in 3 Hours',
    badge: '🏆 Champion'
  },
  {
    id: 'ms-cert',
    title: 'Microsoft Certified: Foundations of Generative AI',
    category: 'Certification',
    date: 'Certified',
    description:
      'Demonstrated foundational proficiency in Generative AI architectures, prompt engineering patterns, LLM capabilities, and ethical AI deployment.',
    metric: 'Microsoft Certified',
    badge: 'Microsoft'
  },
  {
    id: 'tech-event-coordination',
    title: 'Technical Event Coordination',
    category: 'Leadership',
    date: 'Gradient Club',
    description:
      'Conducted and coordinated technical events as part of Gradient, the official technical club of the CSM Department at St. Peter’s Engineering College.',
    metric: 'Gradient Club · SPEC',
    badge: 'CSM Dept'
  },
  {
    id: 'techbrains',
    title: 'TechBrains',
    category: 'Engineering',
    date: 'Web Platform',
    description:
      'Built a web-based multiplayer investigation platform where users log in and progress through interactive game rounds.',
    metric: 'Multiplayer Platform',
    badge: 'Web App'
  }
];

export const openSourceRepos: OpenSourceRepo[] = [
  {
    name: 'Code-Liner',
    description: 'Codebase exploration platform parsing AST token trees, cyclomatic complexity metrics, and interactive React Flow DAGs.',
    url: 'https://github.com/Raky2007/Code-liner',
    language: 'TypeScript / React',
    tags: ['React Flow', 'Monaco', 'AST', 'Tailwind']
  },
  {
    name: 'GeeksForGeeks-dataset-project',
    description: 'Conversational analytics repository using Google Gemini API and Recharts for natural-language spreadsheet interrogation.',
    url: 'https://github.com/Raky2007/GeeksForGeeks-dataset-project',
    language: 'TypeScript / React',
    tags: ['Gemini API', 'Recharts', 'Express', 'Node.js']
  },
  {
    name: 'FlashMind',
    description: 'Offline-first study engine pairing local Ollama Phi-3 inference with PyMuPDF, EasyOCR, and Anki-compatible export.',
    url: 'https://github.com/Raky2007/FlashMind',
    language: 'Python / React',
    tags: ['FastAPI', 'React', 'Ollama', 'TypeScript']
  }
];
