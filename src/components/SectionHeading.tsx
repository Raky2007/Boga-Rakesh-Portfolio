import React from 'react';

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  subtitle,
  align = 'left',
  dark = false,
  className = ''
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {/* Editorial technical label */}
      <div className="flex items-center gap-3 mb-3">
        <span
          className={`font-mono text-xs font-semibold tracking-widest uppercase ${
            dark ? 'text-[#C7F36B]' : 'text-[#183D32]'
          }`}
        >
          {label}
        </span>
        <div
          className={`h-[1px] flex-1 max-w-[48px] ${
            dark ? 'bg-[#285443]' : 'bg-[#D9DCD2]'
          }`}
        />
      </div>

      {/* Main Editorial Headline */}
      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-[1.12] ${
          dark ? 'text-[#F7F6F0]' : 'text-[#183D32]'
        }`}
      >
        {title}
      </h2>

      {/* Supporting copy */}
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            dark ? 'text-[#D9DCD2]/90' : 'text-[#536259]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
