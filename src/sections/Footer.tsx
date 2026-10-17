import React from 'react';
import { contactInfo } from '../data/socialLinks';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../components/Icons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-[#0E1F1A] text-[#D9DCD2] border-t border-[#18332B] font-interface text-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Wordmark & Statement */}
        <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-3 text-center sm:text-left">
          <span className="font-mono text-sm font-bold text-[#F7F6F0] tracking-tight">
            RAKESH<span className="text-[#C7F36B]">.DEV</span>
          </span>
          <span className="hidden sm:inline text-[#285443]">/</span>
          <span className="text-[#788078] font-mono text-[11px]">
            Designed &amp; engineered by Boga Rakesh · Hyderabad, India
          </span>
        </div>

        {/* Center: Social links */}
        <div className="flex items-center gap-5 font-mono text-xs">
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C7F36B] transition-colors flex items-center gap-1.5"
          >
            <GithubIcon size={14} />
            <span>GitHub</span>
          </a>
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C7F36B] transition-colors flex items-center gap-1.5"
          >
            <LinkedinIcon size={14} />
            <span>LinkedIn</span>
          </a>
          <a
            href={contactInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C7F36B] transition-colors flex items-center gap-1.5"
          >
            <InstagramIcon size={14} />
            <span>Instagram</span>
          </a>
        </div>


        {/* Right: Copyright */}
        <div className="flex items-center gap-4">
          <span className="font-mono text-[11px] text-[#788078]">
            © {currentYear} Boga Rakesh
          </span>
        </div>
      </div>
    </footer>
  );
};
