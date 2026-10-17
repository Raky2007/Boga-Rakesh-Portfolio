import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { educationData } from '../data/experience';
import { TechBadge } from '../components/TechBadge';
import { GraduationCap, Award, BookOpen, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 sm:py-32 border-t border-[#D9DCD2] bg-[#EFEEE6]/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          label="06 / EDUCATION"
          title="Academic foundation."
          subtitle="Formal degree study in Computer Science and Engineering with specialization in Artificial Intelligence and Machine Learning."
        />

        <div className="bg-[#FFFFFF] border border-[#D9DCD2] rounded-2xl p-8 sm:p-10 shadow-sm max-w-5xl">
          {/* Top row: Degree title and graduation date */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-[#D9DCD2]">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-[#EFEEE6] text-[#183D32]">
                  <GraduationCap size={20} />
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-[#536259]">
                  Undergraduate Degree
                </span>
                <span className="text-[#D9DCD2]">/</span>
                <TechBadge variant="accent" dot>
                  In Progress
                </TechBadge>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#183D32] font-normal">
                {educationData.degree}
              </h3>

              <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-[#536259]">
                <span className="font-semibold text-[#183D32]">{educationData.institution}</span>
                <span className="text-[#D9DCD2]">·</span>
                <span className="flex items-center gap-1 font-mono text-xs text-[#788078]">
                  <MapPin size={13} /> {educationData.location}
                </span>
              </div>
            </div>

            {/* Score & Graduation Badge */}
            <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-3 shrink-0">
              <div className="p-3 rounded-xl bg-[#F7F6F0] border border-[#D9DCD2] flex flex-col sm:items-end font-mono">
                <span className="text-[10px] text-[#788078] uppercase tracking-wider">Cumulative GPA</span>
                <span className="text-lg font-bold text-[#183D32] mt-0.5">{educationData.cgpa}</span>
              </div>

              <div className="flex items-center gap-1.5 font-mono text-xs text-[#536259] bg-[#EFEEE6] px-3 py-1.5 rounded-lg border border-[#D9DCD2]">
                <Calendar size={13} className="text-[#183D32]" />
                <span>Graduation: {educationData.graduationDate}</span>
              </div>
            </div>
          </div>

          {/* Coursework & Foundations */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-6 space-y-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#183D32] font-interface">
                <BookOpen size={16} className="text-[#285443]" />
                <span>Relevant Core Coursework</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {educationData.coursework.map((course, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-[#F7F6F0] border border-[#D9DCD2] font-mono text-xs text-[#183D32] font-medium"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:col-span-6 space-y-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#183D32] font-interface">
                <Award size={16} className="text-[#285443]" />
                <span>Academic Scope &amp; Focus</span>
              </div>

              <ul className="space-y-2.5">
                {educationData.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#536259]">
                    <CheckCircle2 size={16} className="text-[#285443] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
