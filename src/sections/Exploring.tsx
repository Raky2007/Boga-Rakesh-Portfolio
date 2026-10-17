import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { exploringData } from '../data/exploring';
import { Compass } from 'lucide-react';

export const Exploring: React.FC = () => {
  return (
    <section id="exploring" className="py-20 sm:py-28 border-t border-[#D9DCD2]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          label="09 / CURRENTLY EXPLORING"
          title="Curiosity on the workbench."
          subtitle="Areas of ongoing technical study, prototyping, and algorithm practice. Ongoing experiments rather than finished products."
        />

        {/* Compact Grid with Restrained Lime Status Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {exploringData.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#FFFFFF] border border-[#D9DCD2] hover:border-[#183D32]/40 transition-all flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#788078] font-medium">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#183D32]">
                    <span className="w-2 h-2 rounded-full bg-[#C7F36B] border border-[#183D32] animate-pulse" />
                    <span>{item.status}</span>
                  </div>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-[#183D32] font-normal">
                  {item.topic}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-[#536259] leading-relaxed font-interface">
                  {item.focus}
                </p>
              </div>

              {/* Active experimentation log */}
              <div className="mt-5 pt-4 border-t border-[#D9DCD2] bg-[#F7F6F0] -mx-6 -mb-6 p-4 rounded-b-2xl border-x-0 border-b-0">
                <div className="flex items-start gap-2">
                  <Compass size={14} className="text-[#285443] shrink-0 mt-0.5" />
                  <div className="font-mono text-xs text-[#183D32] leading-relaxed">
                    <span className="text-[#788078] text-[10px] uppercase block tracking-wider">
                      Current Testbench:
                    </span>
                    {item.currentExperiment}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
