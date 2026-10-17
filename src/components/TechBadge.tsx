import React from 'react';

interface TechBadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'dark' | 'outline';
  dot?: boolean;
  className?: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({
  children,
  variant = 'default',
  dot = false,
  className = ''
}) => {
  const variantStyles = {
    default: 'bg-[#EFEEE6] text-[#183D32] border-[#D9DCD2]',
    accent: 'bg-[#C7F36B]/25 text-[#183D32] border-[#183D32]/25 font-semibold',
    dark: 'bg-[#18332B] text-[#F7F6F0] border-[#285443]',
    outline: 'bg-transparent text-[#536259] border-[#D9DCD2]'
  }[variant];

  return (
    <span
      style={{ whiteSpace: 'nowrap' }}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono tracking-wide border transition-colors whitespace-nowrap shrink-0 ${variantStyles} ${className}`}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            variant === 'accent' ? 'bg-[#183D32]' : variant === 'dark' ? 'bg-[#C7F36B]' : 'bg-[#183D32]'
          }`}
        />
      )}
      <span>{children}</span>
    </span>
  );
};
