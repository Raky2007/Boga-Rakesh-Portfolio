import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { openSourceRepos } from '../data/experience';
import { contactInfo } from '../data/socialLinks';
import { GithubIcon } from '../components/Icons';
import { TechBadge } from '../components/TechBadge';
import { ExternalLink, GitBranch, Terminal } from 'lucide-react';

export const OpenSource: React.FC = () => {
  return (
    <section id="opensource" className="py-24 sm:py-32 border-t border-[#D9DCD2] bg-[#EFEEE6]/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            label="08 / CODING & OPEN SOURCE"
            title="Public repositories & builds."
            subtitle="Explore honest codebases, commits, and open-source implementations directly on GitHub."
            className="mb-0 md:mb-0"
          />

          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#183D32] text-[#F7F6F0] hover:bg-[#285443] transition-all font-mono text-xs font-semibold shrink-0"
          >
            <GithubIcon size={16} />
            <span>github.com/{contactInfo.githubUsername}</span>
            <ExternalLink size={13} />
          </a>
        </div>

        {/* Repository Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {openSourceRepos.map((repo, idx) => (
            <a
              key={idx}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFFFFF] border border-[#D9DCD2] rounded-2xl p-6 sm:p-7 shadow-xs hover:border-[#183D32] transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 text-[#183D32]">
                    <GitBranch size={16} className="text-[#285443]" />
                    <span className="font-mono text-xs font-semibold truncate group-hover:text-[#285443]">
                      {repo.name}
                    </span>
                  </div>
                  <ExternalLink size={14} className="text-[#788078] group-hover:text-[#183D32] transition-colors shrink-0" />
                </div>

                <p className="text-xs sm:text-sm text-[#536259] leading-relaxed line-clamp-3 mb-6 font-interface">
                  {repo.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {repo.tags.map((tag) => (
                    <TechBadge key={tag} variant="default">
                      {tag}
                    </TechBadge>
                  ))}
                </div>

                <div className="pt-3 border-t border-[#D9DCD2] flex items-center justify-between font-mono text-[11px] text-[#788078]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#183D32]" />
                    {repo.language}
                  </span>
                  <span className="text-[#285443] group-hover:underline">View Source ↗</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Algorithmic Practice Footnote */}
        <div className="mt-8 p-4 rounded-xl bg-[#FFFFFF] border border-[#D9DCD2] flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs text-[#536259]">
          <div className="flex items-center gap-2.5">
            <Terminal size={15} className="text-[#183D32]" />
            <span>Problem-solving focus: Data Structures &amp; Algorithms practiced daily in Java &amp; Python.</span>
          </div>
          <span className="text-[#183D32] font-semibold">Strict Complexity Tracking (O(N), O(log N))</span>
        </div>
      </div>
    </section>
  );
};
