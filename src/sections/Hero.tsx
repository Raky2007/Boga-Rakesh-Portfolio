import React from 'react';
import { ArrowDown, ArrowUpRight, Mail, Download } from 'lucide-react';
import { Button } from '../components/Button';
import { ConnectedSystemsCanvas } from '../components/ConnectedSystemsCanvas';
import { contactInfo } from '../data/socialLinks';
import { GithubIcon, LinkedinIcon } from '../components/Icons';

interface HeroProps {
  onResumeClick?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = async (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/Boga_Rakesh_Resume.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Boga_Rakesh_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => window.URL.revokeObjectURL(url), 2000);
    } catch {
      // Fallback direct link trigger
      const link = document.createElement('a');
      link.href = '/Boga_Rakesh_Resume.pdf';
      link.download = 'Boga_Rakesh_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 sm:pt-36 sm:pb-24 flex flex-col justify-between overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex-1 flex flex-col justify-center">
        {/* Asymmetric Two-Column Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial & Identity */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Developer Identity Eyebrow */}
            <div className="flex flex-wrap items-center gap-2 mb-4 sm:mb-5">
              <span className="w-2 h-2 rounded-full bg-[#C7F36B] border border-[#183D32]" />
              <span className="font-mono text-xs font-semibold tracking-wider text-[#183D32] uppercase">
                BOGA RAKESH
              </span>
              <span className="text-[#D9DCD2]">/</span>
              <span className="font-mono text-xs text-[#536259]">
                B.Tech CSE (AI &amp; ML) · St. Peter's Engineering College
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-normal tracking-tight text-[#183D32] leading-[1.08]">
              Building ideas into{' '}
              <span className="italic font-serif font-normal text-[#285443]">things that work.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-6 sm:mt-7 text-base sm:text-lg text-[#536259] leading-relaxed max-w-xl font-interface">
              I'm Boga Rakesh — a software developer and AI engineer passionate about understanding how systems work under the hood, building full-stack applications, real-time architectures, and practical machine learning solutions.
            </p>

            {/* Prominent Action Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
              <Button
                variant="primary"
                size="md"
                onClick={() => scrollTo('work')}
                icon={<ArrowUpRight size={16} />}
              >
                Explore Projects
              </Button>

              <Button
                asAnchor
                href="/Boga_Rakesh_Resume.pdf"
                download="Boga_Rakesh_Resume.pdf"
                onClick={handleDownloadResume}
                variant="secondary"
                size="md"
                icon={<Download size={15} />}
                aria-label="Download Boga Rakesh Resume PDF"
              >
                Download Resume
              </Button>

              <Button
                variant="ghost"
                size="md"
                onClick={() => scrollTo('contact')}
              >
                Let's Connect
              </Button>
            </div>

            {/* Compact Technical Metadata & Accessible Social Links */}
            <div className="mt-10 sm:mt-12 pt-6 border-t border-[#D9DCD2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="font-mono text-xs font-medium text-[#183D32] tracking-wider uppercase">
                JAVA <span className="text-[#788078]">·</span> PYTHON <span className="text-[#788078]">·</span> REACT <span className="text-[#788078]">·</span> TYPESCRIPT <span className="text-[#788078]">·</span> AI/ML
              </div>

              {/* Accessible Social Links with tooltips and visible targets */}
              <div className="flex items-center gap-2">
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono text-[#536259] hover:text-[#183D32] hover:bg-[#EFEEE6] border border-[#D9DCD2]/60 transition-colors"
                  aria-label="GitHub Profile (github.com/Raky2007)"
                  title="GitHub Profile (github.com/Raky2007)"
                >
                  <GithubIcon size={15} />
                  <span className="hidden sm:inline">GitHub</span>
                </a>

                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono text-[#536259] hover:text-[#183D32] hover:bg-[#EFEEE6] border border-[#D9DCD2]/60 transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon size={15} />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>

                <a
                  href={`mailto:${contactInfo.email}`}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono text-[#536259] hover:text-[#183D32] hover:bg-[#EFEEE6] border border-[#D9DCD2]/60 transition-colors"
                  aria-label={`Email ${contactInfo.email}`}
                  title={`Email ${contactInfo.email}`}
                >
                  <Mail size={15} />
                  <span className="hidden sm:inline">Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Signature Connected Systems Visualization */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <ConnectedSystemsCanvas className="shadow-[0_8px_30px_rgba(24,61,50,0.06)]" />
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="mt-16 sm:mt-24 pb-2 flex justify-center">
        <button
          onClick={() => scrollTo('work')}
          className="group flex flex-col items-center gap-2 text-xs font-mono text-[#788078] hover:text-[#183D32] transition-colors cursor-pointer"
          aria-label="Scroll to Selected Work"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ArrowDown size={14} className="animate-bounce group-hover:text-[#183D32]" />
        </button>
      </div>
    </section>
  );
};
