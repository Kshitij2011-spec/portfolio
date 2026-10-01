import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Escape key handler to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Body scroll locking and Lenis pausing when drawer is open
  useEffect(() => {
    const lenis = (window as any).__lenis;
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      if (lenis) lenis.stop();
    } else {
      document.body.style.overflow = '';
      if (lenis) lenis.start();
    }
    return () => {
      document.body.style.overflow = '';
      if (lenis) lenis.start();
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Work', href: '#work', id: 'work' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Achievements', href: '#achievements', id: 'achievements' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] h-[72px] transition-all duration-300 ease-in-out border-b ${
          isScrolled
            ? 'bg-bg/95 backdrop-blur-md border-border shadow-[0_4px_16px_rgba(0,0,0,0.06)]'
            : 'bg-bg/90 backdrop-blur-md border-border/80 shadow-[0_1px_3px_rgba(0,0,0,0.03)]'
        }`}
      >
        <div className="w-full max-w-[1200px] mx-auto flex justify-between items-center h-full px-[clamp(1.5rem,5vw,3.5rem)]">
          {/* Logo Monogram sitting flush at the left content edge */}
          <a
            href="#hero"
            className="font-body font-black text-[1.35rem] text-text group flex items-center tracking-tight transition-opacity duration-200 hover:opacity-85 select-none"
            aria-label="Kshitij Parkhe Home"
          >
            <span className="inline-block transition-transform duration-200 ease-out group-hover:-translate-x-[2px]">K</span>
            <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-[2px]">P</span>
          </a>

          {/* Desktop Nav with elevated typography and refined micro-interactions */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              const isContact = link.id === 'contact';
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`group relative font-mono text-[0.82rem] tracking-[0.12em] uppercase py-1.5 transition-all duration-200 inline-flex items-center gap-1 ${
                    isActive
                      ? 'text-text font-bold'
                      : 'text-text/65 hover:text-text font-medium'
                  }`}
                >
                  <span>{link.name}</span>
                  {isContact && (
                    <span className="inline-block text-[0.7rem] transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  )}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-text transition-all duration-200 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full opacity-60'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden text-text p-2 hover:opacity-75 transition-opacity cursor-pointer rounded-[6px] border border-border/60 bg-bg-card shadow-xs"
            aria-label="Open mobile navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          className="fixed inset-0 z-[200] bg-bg flex flex-col p-[clamp(1.5rem,5vw,3.5rem)] transition-opacity duration-300"
        >
          <div className="flex justify-between items-center h-[72px] mb-8">
            <span className="font-body font-black text-[1.35rem] text-text flex tracking-tight">
              <span>K</span>
              <span>P</span>
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-muted hover:text-text p-2 transition-colors cursor-pointer rounded-[6px] border border-border/60 bg-bg-card shadow-xs"
              aria-label="Close mobile navigation menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-5 flex-grow justify-center overflow-y-auto py-4" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-body text-[clamp(1.8rem,6vw,2.8rem)] uppercase transition-all duration-200 font-extrabold tracking-tight ${
                  activeSection === link.id ? 'text-text' : 'text-text/45 hover:text-text'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pb-8 border-t border-border pt-6 flex flex-col gap-2">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="font-mono text-[0.82rem] text-muted hover:text-text transition-colors"
            >
              {PERSONAL_INFO.email}
            </a>
            <span className="font-mono text-[0.72rem] text-light">{PERSONAL_INFO.location}</span>
          </div>
        </div>
      )}
    </>
  );
};
