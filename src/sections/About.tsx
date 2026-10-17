import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Terminal, Code2, Cpu, Database } from 'lucide-react';

export const About: React.FC = () => {
  const principles = [
    {
      title: 'Learning by building',
      description: 'Understanding concepts deeply by implementing them from scratch — whether that means parsing an AST or wiring up WebSocket packets.'
    },
    {
      title: 'Software beyond the interface',
      description: 'A great frontend is incomplete without solid backend foundations, resilient data stores, and well-thought-out error boundaries.'
    },
    {
      title: 'Connecting systems & AI',
      description: 'Moving beyond naive API wrappers to create genuine synergy between local machine learning models, persistent databases, and real-time user workflows.'
    },
    {
      title: 'Practical, verifiable outcomes',
      description: 'Focusing on reliable software that works on actual devices, in real classroom environments, or on production cloud providers.'
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 border-t border-[#D9DCD2] bg-[#EFEEE6]/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          label="07 / ABOUT ME"
          title="Curiosity gets it started. Engineering makes it real."
          subtitle="A perspective on software engineering rooted in curiosity, systems thinking, and iterative craftsmanship."
        />

        {/* Editorial Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Biography & Context */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#536259] leading-relaxed font-interface">
            <p className="font-serif text-xl sm:text-2xl text-[#183D32] font-normal leading-snug">
              I am Boga Rakesh, a Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning at <span className="underline decoration-[#C7F36B] decoration-2 underline-offset-4">St. Peter's Engineering College, Hyderabad</span> (Graduation: May 2028).
            </p>

            <p>
              My journey in computing started with a simple question: <em>what actually happens under the hood when code executes?</em> Rather than staying content with prefabricated templates, I gravitated toward understanding execution lifecycles, network handshakes, and how data traverses between clients, authoritative servers, and inference models.
            </p>

            <p>
              Across every system I build, my focus is bridging theoretical computer science with resilient, usable software — writing strict type contracts, designing clean data boundaries, and exploring local artificial intelligence models that respect user privacy.
            </p>

            <div className="pt-6 border-t border-[#D9DCD2] grid grid-cols-2 sm:grid-cols-3 gap-6 font-mono text-xs">
              <div>
                <span className="text-[#788078] uppercase text-[10px] tracking-wider block">Specialization</span>
                <span className="font-semibold text-[#183D32] mt-1 block">CSE (AI &amp; ML)</span>
              </div>
              <div>
                <span className="text-[#788078] uppercase text-[10px] tracking-wider block">Institution</span>
                <span className="font-semibold text-[#183D32] mt-1 block">St. Peter's, Hyd</span>
              </div>
              <div>
                <span className="text-[#788078] uppercase text-[10px] tracking-wider block">Focus Area</span>
                <span className="font-semibold text-[#183D32] mt-1 block">Full-Stack &amp; AI Systems</span>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Principles & Architectural Anatomy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FFFFFF] border border-[#D9DCD2] rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#D9DCD2]">
                <Terminal size={18} className="text-[#183D32]" />
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#183D32]">
                  ENGINEERING PHILOSOPHY
                </span>
              </div>

              <div className="space-y-6">
                {principles.map((p, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <span className="font-mono text-xs font-semibold text-[#285443] bg-[#EFEEE6] px-2 py-0.5 rounded border border-[#D9DCD2] shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="font-interface text-sm font-semibold text-[#183D32]">
                        {p.title}
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm text-[#536259] leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Architectural Breadth Card */}
            <div className="p-5 rounded-xl bg-[#F7F6F0] border border-[#D9DCD2] flex items-center justify-between font-mono text-xs text-[#183D32]">
              <div className="flex items-center gap-2">
                <Code2 size={16} className="text-[#285443]" />
                <span>Frontend</span>
              </div>
              <span className="text-[#788078]">⟷</span>
              <div className="flex items-center gap-2">
                <Database size={16} className="text-[#285443]" />
                <span>Backend/Data</span>
              </div>
              <span className="text-[#788078]">⟷</span>
              <div className="flex items-center gap-2">
                <Cpu size={16} className="text-[#285443]" />
                <span>AI Models</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
