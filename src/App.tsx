import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Education } from './sections/Education';
import { Achievements } from './sections/Achievements';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { ScrollToTop } from './components/ScrollToTop';
import { projectsData } from './data/projects';
import type { Project } from './types';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#F7F6F0] text-[#183D32] flex flex-col font-sans selection:bg-[#C7F36B] selection:text-[#183D32]">
      {/* Sticky Navigation */}
      <Navbar onResumeClick={() => setResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 01 — Hero */}
        <Hero onResumeClick={() => setResumeOpen(true)} />

        {/* 02 — Featured Projects */}
        <Projects projects={projectsData} onSelectProject={(p) => setSelectedProject(p)} />

        {/* 03 — Experience (Ni-MSME Data Analyst & Frontend Internship) */}
        <Experience />

        {/* 04 — Achievements (GFG Hackathon 1st Place, Microsoft Certified, Event Lead) */}
        <Achievements />

        {/* 05 — Technical Skills (Simplified 5-Domain Architecture) */}
        <Skills />

        {/* 06 — Education (St. Peter's B.Tech CSE AI & ML, May 2028, CGPA 7.2) */}
        <Education />

        {/* 07 — Contact */}
        <Contact onResumeClick={() => setResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Architectural Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Authoritative Resume Viewer / Print Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* Floating Scroll to Top Action Button */}
      <ScrollToTop />
    </div>
  );
};

export default App;
