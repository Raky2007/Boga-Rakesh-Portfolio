import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { experienceData } from '../data/experience';
import { TechBadge } from '../components/TechBadge';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 border-t border-[#D9DCD2]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          label="03 / EXPERIENCE"
          title="Practical industry roles."
          subtitle="Hands-on experience in telecom log telemetry, predictive machine learning modeling, and web user interface engineering."
        />

        <div className="space-y-8 max-w-4xl">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="bg-[#FFFFFF] border border-[#D9DCD2] rounded-2xl p-6 sm:p-8 shadow-xs hover:border-[#183D32]/40 transition-all"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 border-b border-[#D9DCD2] pb-4 mb-5">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="p-1 rounded bg-[#EFEEE6] text-[#183D32]">
                      <Briefcase size={14} />
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#536259]">
                      {exp.type}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#183D32] font-normal">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1.5 text-xs text-[#536259]">
                    <span className="font-semibold text-[#183D32]">{exp.organization}</span>
                    <span className="text-[#D9DCD2]">·</span>
                    <span className="flex items-center gap-1 font-mono text-[11px] text-[#788078]">
                      <MapPin size={12} /> {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 font-mono text-xs text-[#183D32] bg-[#EFEEE6] px-3 py-1.5 rounded-lg border border-[#D9DCD2] shrink-0 self-start sm:self-auto">
                  <Calendar size={13} className="text-[#536259]" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-3 mb-6">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#536259] leading-relaxed">
                    <CheckCircle2 size={16} className="text-[#285443] shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
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
    </section>
  );
};
