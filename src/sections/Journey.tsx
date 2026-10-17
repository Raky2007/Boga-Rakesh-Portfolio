import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { journeyData } from '../data/journey';
import { TechBadge } from '../components/TechBadge';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-24 sm:py-32 border-t border-[#D9DCD2] bg-[#EFEEE6]/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          label="04 / JOURNEY"
          title="Progress, measured in things built."
          subtitle="A timeline of engineering milestones, academic grounding, and the systems built along the way."
        />

        {/* Editorial Timeline / Milestone List */}
        <div className="relative border-l border-[#D9DCD2] ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12 sm:space-y-16">
          {journeyData.map((milestone) => (
            <div key={milestone.id} className="relative group">
              {/* Timeline Node Marker */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#FFFFFF] border-2 border-[#183D32] group-hover:bg-[#C7F36B] transition-colors" />

              <div className="bg-[#FFFFFF] border border-[#D9DCD2] rounded-2xl p-6 sm:p-8 shadow-xs hover:border-[#183D32]/40 transition-all">
                {/* Meta header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#D9DCD2] pb-4 mb-4">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#183D32] font-normal">
                      {milestone.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 mt-1 text-xs text-[#536259]">
                      <span className="font-semibold text-[#183D32]">{milestone.institution}</span>
                      <span className="text-[#D9DCD2]">·</span>
                      <span className="flex items-center gap-1 font-mono text-[11px] text-[#788078]">
                        <MapPin size={12} /> {milestone.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-xs text-[#183D32] bg-[#EFEEE6] px-3 py-1 rounded-md border border-[#D9DCD2] shrink-0 self-start sm:self-auto">
                    <Calendar size={13} className="text-[#536259]" />
                    <span>{milestone.period}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm sm:text-base text-[#536259] leading-relaxed mb-6 font-interface">
                  {milestone.summary}
                </p>

                {/* Key Learnings & Outcomes */}
                <div className="space-y-2 mb-6">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#183D32] font-semibold block mb-2">
                    Key Outcomes &amp; Engineering Focus:
                  </span>
                  {milestone.learnings.map((learning: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#536259]">
                      <CheckCircle2 size={15} className="text-[#285443] shrink-0 mt-0.5" />
                      <span>{learning}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="pt-4 border-t border-[#D9DCD2] flex flex-wrap gap-1.5">
                  {milestone.tags.map((tag: string) => (
                    <TechBadge key={tag} variant="outline">
                      {tag}
                    </TechBadge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
