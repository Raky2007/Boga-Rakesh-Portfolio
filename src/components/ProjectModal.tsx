import React, { useEffect } from 'react';
import type { Project } from '../types';
import { TechBadge } from './TechBadge';
import { Button } from './Button';
import { ExternalLink, X, CheckCircle2, Cpu, Layers, Workflow, Sparkles, Code2 } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#142A23]/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#F7F6F0] border border-[#D9DCD2] rounded-2xl shadow-2xl p-6 sm:p-8 text-[#183D32]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-start justify-between gap-4 border-b border-[#D9DCD2] pb-5">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#536259]">
                {project.category}
              </span>
              <span className="text-[#D9DCD2]">/</span>
              <TechBadge
                variant={project.status === 'Production' || project.status === 'Live Demo' ? 'accent' : 'default'}
                dot
              >
                {project.badgeText || project.status}
              </TechBadge>
            </div>
            <h3 id="modal-project-title" className="font-serif text-2xl sm:text-3xl font-normal text-[#183D32]">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-[#536259]">{project.tagline}</p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 text-[#536259] hover:text-[#183D32] hover:bg-[#EFEEE6] rounded-lg transition-colors cursor-pointer shrink-0"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal content body */}
        <div className="mt-6 space-y-6">
          {/* Key Stats Bar */}
          {project.stats && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-[#EFEEE6] border border-[#D9DCD2] rounded-xl font-mono text-xs">
              {project.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-[#788078] uppercase text-[10px] tracking-wider">{stat.label}</span>
                  <span className="font-semibold text-[#183D32] mt-0.5">{stat.value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Section 1: Overview */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#183D32] font-semibold mb-2 flex items-center gap-2">
              <Cpu size={14} className="text-[#285443]" /> Overview
            </h4>
            <p className="text-sm leading-relaxed text-[#536259]">
              {project.overview || project.longDescription || project.description}
            </p>
          </div>

          {/* Section 2: How It Works */}
          {project.howItWorks && project.howItWorks.length > 0 && (
            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#D9DCD2]">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#183D32] font-semibold mb-3 flex items-center gap-2">
                <Workflow size={14} className="text-[#285443]" /> How It Works
              </h4>
              <ol className="space-y-2.5">
                {project.howItWorks.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#536259] leading-relaxed">
                    <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-[#EFEEE6] text-[#183D32] border border-[#D9DCD2] shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Section 3: Key Features */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#183D32] font-semibold mb-3 flex items-center gap-2">
              <Layers size={14} className="text-[#285443]" /> Key Features
            </h4>
            <ul className="space-y-2.5">
              {(project.keyFeatures || project.highlights).map((feature, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#536259] leading-relaxed">
                  <CheckCircle2 size={16} className="text-[#285443] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: Built With (Grouped Technologies) */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#183D32] font-semibold mb-3 flex items-center gap-2">
              <Code2 size={14} className="text-[#285443]" /> Built With
            </h4>

            {project.builtWith && project.builtWith.length > 0 ? (
              <div className="space-y-3">
                {project.builtWith.map((group, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-[#EFEEE6]/60 border border-[#D9DCD2]">
                    <div className="font-mono text-[11px] uppercase tracking-wider text-[#788078] mb-1.5 font-medium">
                      {group.category}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {group.technologies.map((tech) => (
                        <TechBadge key={tech} variant="default">
                          {tech}
                        </TechBadge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <TechBadge key={tech} variant="default">
                    {tech}
                  </TechBadge>
                ))}
              </div>
            )}
          </div>

          {/* Section 5: Technical Highlights */}
          {project.technicalHighlights && project.technicalHighlights.length > 0 && (
            <div className="p-4 rounded-xl bg-[#F7F6F0] border border-[#D9DCD2]">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#183D32] font-semibold mb-2.5 flex items-center gap-2">
                <Sparkles size={14} className="text-[#285443]" /> Technical Highlights
              </h4>
              <ul className="space-y-2">
                {project.technicalHighlights.map((highlight, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-[#536259] leading-relaxed flex items-start gap-2">
                    <span className="text-[#183D32] font-bold shrink-0">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer actions: Consistent button row for every project */}
        <div className="mt-8 pt-5 border-t border-[#D9DCD2] flex flex-wrap items-center justify-between gap-3">
          <div className="font-mono text-[11px] text-[#788078]">
            Source: <span className="text-[#183D32] font-medium">Verified GitHub Repository &amp; Code</span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {project.liveUrl && (
              <Button
                asAnchor
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="sm"
                icon={<ExternalLink size={14} />}
              >
                Live Demo
              </Button>
            )}

            {project.repoUrl && (
              <Button
                asAnchor
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="sm"
                icon={<GithubIcon size={14} />}
              >
                GitHub Repo
              </Button>
            )}

            <Button variant="secondary" size="sm" onClick={onClose}>
              Close Deep Dive
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
