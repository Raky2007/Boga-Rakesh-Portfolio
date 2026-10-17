import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onResumeClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const navLinks = [
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Achievements', href: '#achievements', id: 'achievements' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // If at or near top / in hero section, clear active section
      const workEl = document.getElementById('work');
      if (workEl && window.scrollY + 160 < workEl.offsetTop) {
        setActiveSection('');
        return;
      }

      const sections = ['work', 'experience', 'achievements', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 160;

      let found = false;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            found = true;
            break;
          }
        }
      }
      if (!found && window.scrollY < 400) {
        setActiveSection('');
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F7F6F0]/92 backdrop-blur-md border-b border-[#D9DCD2] shadow-[0_2px_12px_rgba(24,61,50,0.04)]'
          : 'bg-transparent border-b border-[#D9DCD2]/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-18 sm:h-20 flex items-center justify-between">
        {/* Left: Brand Identity */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="group flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2"
          aria-label="RAKESH.DEV Home"
        >
          <span className="font-mono text-sm tracking-tight font-bold text-[#183D32] group-hover:text-[#285443] transition-colors">
            RAKESH<span className="text-[#285443]">.DEV</span>
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C7F36B] border border-[#183D32] transition-transform group-hover:scale-125" />
        </a>

        {/* Right Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors rounded-md ${
                  isActive
                    ? 'text-[#183D32] font-semibold'
                    : 'text-[#536259] hover:text-[#183D32] hover:bg-[#EFEEE6]/60'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#183D32] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 text-[#183D32] hover:bg-[#EFEEE6] rounded-lg transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F7F6F0] border-b border-[#D9DCD2] px-6 py-4 shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors flex items-center justify-between ${
                  activeSection === link.id
                    ? 'bg-[#EFEEE6] text-[#183D32] font-semibold'
                    : 'text-[#536259] hover:text-[#183D32]'
                }`}
              >
                <span>{link.label}</span>
                {activeSection === link.id && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#183D32]" />
                )}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
