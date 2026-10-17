import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { achievementsData } from '../data/experience';
import { TechBadge } from '../components/TechBadge';
import { Trophy, Award, Users, CheckCircle2, Gamepad2 } from 'lucide-react';

export const Achievements: React.FC = () => {
  const getAchievementIcon = (category: string) => {
    switch (category) {
      case 'Hackathon':
        return <Trophy size={18} className="text-[#183D32]" />;
      case 'Certification':
        return <Award size={18} className="text-[#183D32]" />;
      case 'Leadership':
        return <Users size={18} className="text-[#183D32]" />;
      case 'Engineering':
      case 'Project':
        return <Gamepad2 size={18} className="text-[#183D32]" />;
      default:
        return <Users size={18} className="text-[#183D32]" />;
    }
  };

  return (
    <section id="achievements" className="py-24 sm:py-32 border-t border-[#D9DCD2]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          label="04 / ACHIEVEMENTS & CERTIFICATIONS"
          title="Milestones, hackathons & leadership."
          subtitle="Competitive hackathon results, technical credentials, and operational leadership verified from collegiate activities."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="bg-[#FFFFFF] border border-[#D9DCD2] rounded-2xl p-6 sm:p-7 shadow-xs hover:border-[#183D32]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="p-1 rounded bg-[#EFEEE6] text-[#183D32] shrink-0">
                      {getAchievementIcon(item.category)}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#788078] truncate">
                      {item.category}
                    </span>
                  </div>

                  {item.badge && (
                    <TechBadge variant={item.category === 'Hackathon' ? 'accent' : 'default'} dot className="shrink-0 text-[10px] px-2 py-0.5">
                      {item.badge}
                    </TechBadge>
                  )}
                </div>

                <h3 className="font-serif text-xl sm:text-[22px] text-[#183D32] font-normal leading-snug min-h-[3.25rem] flex items-start">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[#536259] leading-relaxed font-interface min-h-[5rem]">
                  {item.description}
                </p>
              </div>

              {item.metric && (
                <div className="mt-6 pt-3.5 border-t border-[#D9DCD2] flex items-center justify-between gap-2 font-mono text-xs">
                  <span className="text-[#788078] text-[11px] shrink-0 uppercase tracking-wider">Outcome</span>
                  <span
                    style={{ whiteSpace: 'nowrap' }}
                    className="text-[#183D32] font-semibold flex items-center gap-1.5 text-right shrink-0 whitespace-nowrap text-[11px] sm:text-xs"
                  >
                    <CheckCircle2 size={13} className="text-[#285443] shrink-0" />
                    <span>{item.metric}</span>
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
