import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { simplifiedSkillsData } from '../data/skills';
import { Code, Layout, Server, Database, TerminalSquare } from 'lucide-react';

export const Skills: React.FC = () => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'languages':
        return <Code size={18} className="text-[#183D32]" />;
      case 'frontend':
        return <Layout size={18} className="text-[#183D32]" />;
      case 'backend':
        return <Server size={18} className="text-[#183D32]" />;
      case 'databases':
        return <Database size={18} className="text-[#183D32]" />;
      case 'tools-concepts':
      default:
        return <TerminalSquare size={18} className="text-[#183D32]" />;
    }
  };

  return (
    <section id="skills" className="py-24 sm:py-32 border-t border-[#D9DCD2]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          label="05 / TECHNICAL SKILLS"
          title="Tools & core capabilities."
          subtitle="A focused overview of programming languages, frontend/backend engineering, database management, and computer science foundations."
        />

        {/* 5-Category Simplified High-Density Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {simplifiedSkillsData.map((category) => (
            <div
              key={category.id}
              className={`bg-[#FFFFFF] border border-[#D9DCD2] rounded-2xl p-6 sm:p-7 shadow-xs hover:border-[#183D32]/40 transition-all flex flex-col justify-between ${
                category.id === 'tools-concepts' ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#D9DCD2]">
                  <div className="flex items-center gap-2.5">
                    {getCategoryIcon(category.id)}
                    <h3 className="font-interface text-base font-semibold text-[#183D32]">
                      {category.title}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] text-[#788078] tracking-wider">
                    {category.code}
                  </span>
                </div>

                {/* Skills list */}
                <div className="space-y-2.5">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-[#F7F6F0] border border-[#D9DCD2]/60 hover:border-[#183D32]/30 transition-colors"
                    >
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-xs sm:text-sm font-semibold text-[#183D32] font-interface">
                          {skill.name}
                        </span>
                      </div>
                      {skill.detail && (
                        <p className="font-mono text-[11px] text-[#536259] mt-0.5 leading-normal">
                          {skill.detail}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#D9DCD2] flex items-center justify-between font-mono text-[10px] text-[#788078]">
                <span>{category.skills.length} VERIFIED CAPABILITIES</span>
                <span className="text-[#285443] font-medium">CURRICULAR &amp; PROJECTS</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
