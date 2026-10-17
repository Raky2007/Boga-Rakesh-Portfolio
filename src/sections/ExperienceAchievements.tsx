import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { experienceData, achievementsData } from '../data/experience';
import { TechBadge } from '../components/TechBadge';
import { Briefcase, Trophy, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceAchievements: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 border-t border-[#D9DCD2]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          label="06 / EXPERIENCE & ACHIEVEMENTS"
          title="Practical industry work & milestones."
          subtitle="Real-world internships, verified hackathon results, technical event leadership, and official certifications."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Professional Experience */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-2 pb-3 border-b border-[#D9DCD2]">
              <Briefcase size={18} className="text-[#183D32]" />
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#183D32] font-semibold">
                Professional Experience
              </h3>
            </div>

            <div className="space-y-8">
              {experienceData.map((exp) => (
                <div
                  key={exp.id}
                  className="bg-[#FFFFFF] border border-[#D9DCD2] rounded-2xl p-6 sm:p-8 shadow-xs hover:border-[#183D32]/40 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#D9DCD2] pb-4 mb-4">
                    <div>
                      <h4 className="font-serif text-xl sm:text-2xl text-[#183D32] font-normal">
                        {exp.role}
                      </h4>
                      <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-[#536259]">
                        <span className="font-semibold text-[#183D32]">{exp.organization}</span>
                        <span className="text-[#D9DCD2]">·</span>
                        <span className="flex items-center gap-1 font-mono text-[11px] text-[#788078]">
                          <MapPin size={12} /> {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 font-mono text-xs text-[#183D32] bg-[#EFEEE6] px-3 py-1 rounded-md border border-[#D9DCD2] shrink-0 self-start sm:self-auto">
                      <Calendar size={13} className="text-[#536259]" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-6">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#536259] leading-relaxed">
                        <CheckCircle2 size={16} className="text-[#285443] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-[#D9DCD2] flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <TechBadge key={tech} variant="default">
                        {tech}
                      </TechBadge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Achievements, Hackathons & Leadership */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-2 pb-3 border-b border-[#D9DCD2]">
              <Trophy size={18} className="text-[#183D32]" />
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#183D32] font-semibold">
                Achievements &amp; Leadership
              </h3>
            </div>

            <div className="space-y-6">
              {achievementsData.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#FFFFFF] border border-[#D9DCD2] rounded-2xl p-6 shadow-xs hover:border-[#183D32]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#788078]">
                        {item.category}
                      </span>
                      {item.badge && (
                        <TechBadge variant={item.category === 'Hackathon' ? 'accent' : 'default'} dot>
                          {item.badge}
                        </TechBadge>
                      )}
                    </div>

                    <h4 className="font-serif text-lg sm:text-xl text-[#183D32] font-normal">
                      {item.title}
                    </h4>

                    <p className="mt-2.5 text-xs sm:text-sm text-[#536259] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {item.metric && (
                    <div className="mt-5 pt-3 border-t border-[#D9DCD2] flex items-center justify-between font-mono text-xs">
                      <span className="text-[#788078]">Verified Milestone</span>
                      <span className="text-[#183D32] font-semibold">{item.metric}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
