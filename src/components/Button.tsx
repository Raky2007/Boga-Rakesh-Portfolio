import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  asAnchor?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  download?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  asAnchor = false,
  href,
  target,
  rel,
  download,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-interface font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group focus-visible:outline-2 focus-visible:outline-offset-2';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 rounded-md gap-1.5',
    md: 'text-sm px-5 py-2.5 rounded-lg gap-2',
    lg: 'text-base px-6 py-3.5 rounded-lg gap-2.5 font-semibold'
  }[size];

  const variantStyles = {
    primary:
      'bg-[#183D32] text-[#F7F6F0] hover:bg-[#285443] active:bg-[#142A23] border border-[#183D32] shadow-sm',
    secondary:
      'bg-[#EFEEE6] text-[#183D32] hover:bg-[#FFFFFF] active:bg-[#D9DCD2] border border-[#D9DCD2]',
    accent:
      'bg-[#C7F36B] text-[#183D32] hover:bg-[#bcf054] active:bg-[#aee642] font-semibold border border-[#183D32]',
    ghost:
      'bg-transparent text-[#183D32] hover:bg-[#EFEEE6] border border-transparent'
  }[variant];

  const combinedClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`;

  if (asAnchor && href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        download={download}
        onClick={props.onClick as any}
        className={combinedClasses}
      >
        <span>{children}</span>
        {icon && <span className="transition-transform group-hover:translate-x-0.5">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      <span>{children}</span>
      {icon && <span className="transition-transform group-hover:translate-x-0.5">{icon}</span>}
    </button>
  );
};
