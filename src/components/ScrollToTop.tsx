import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating button as soon as user leaves the hero section (past 200px)
      setVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToHero = () => {
    const heroEl = document.getElementById('hero');
    if (heroEl) {
      heroEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToHero}
      aria-label="Scroll back to hero section"
      title="Back to Hero"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999
      }}
      className={`w-12 h-12 rounded-full bg-[#183D32] hover:bg-[#285443] text-[#C7F36B] hover:text-[#FFFFFF] border-2 border-[#C7F36B]/60 hover:border-[#C7F36B] shadow-[0_8px_30px_rgba(24,61,50,0.35)] transition-all duration-300 flex items-center justify-center group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto scale-100'
          : 'opacity-0 translate-y-6 pointer-events-none scale-75'
      }`}
    >
      <ArrowUp size={22} className="transition-transform duration-200 group-hover:-translate-y-1 stroke-[2.5]" />
    </button>
  );
};
