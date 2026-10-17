export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  badgeText?: string;
  date?: string;
  description: string;
  longDescription?: string;
  problemSolution?: {
    problem: string;
    solution: string;
  };
  highlights: string[];
  architectureOverview: string;
  technologies: string[];
  overview?: string;
  howItWorks?: string[];
  keyFeatures?: string[];
  builtWith?: { category: string; technologies: string[] }[];
  technicalHighlights?: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
  status: 'Production' | 'Live Demo' | 'Active Development' | 'Hackathon Winner' | 'Concept & Architecture';
  visualType: 'flashmind' | 'varifact' | 'codeliner' | 'techbrains' | 'buildwise' | 'wexa';
  stats?: { label: string; value: string }[];
}

export interface SkillCategory {
  id: string;
  title: string;
  code: string;
  description: string;
  skills: {
    name: string;
    level: 'Active' | 'Proficient' | 'Basics' | 'Exploring';
    context?: string;
  }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  graduationDate: string;
  cgpa: string;
  location: string;
  coursework: string[];
  highlights: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: 'Internship' | 'Data Analyst';
  responsibilities: string[];
  technologies: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'Hackathon' | 'Certification' | 'Leadership' | 'Engineering' | 'Project';
  date?: string;
  description: string;
  metric?: string;
  badge?: string;
}

export interface OpenSourceRepo {
  name: string;
  description: string;
  url: string;
  stars?: number;
  forks?: number;
  language: string;
  tags: string[];
}

export interface Milestone {
  id: string;
  period: string;
  role: string;
  institution: string;
  location: string;
  summary: string;
  learnings: string[];
  tags: string[];
}

export interface ExploringItem {
  id: string;
  topic: string;
  category: string;
  focus: string;
  currentExperiment: string;
  status: 'In Progress' | 'Active Practice' | 'Researching';
}
