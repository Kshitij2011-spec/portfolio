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
    { name: 'Work', href: '#work', id: 'work' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] h-[64px] transition-all duration-300 ease-in-out border-b ${
          isScrolled
            ? 'bg-bg/85 backdrop-blur-md border-border/80 shadow-xs'
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="w-full max-w-[1200px] mx-auto flex justify-between items-center h-full px-[clamp(1.5rem,5vw,3.5rem)]">
          {/* Logo Monogram */}
          <a
            href="#hero"
            className="font-body font-black text-[1.25rem] text-text group flex tracking-tight"
            aria-label="Kshitij Parkhe Home"
          >
            <span className="transition-transform duration-200 group-hover:-translate-x-[2px]">K</span>
            <span className="transition-transform duration-200 group-hover:translate-x-[2px]">P</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative font-mono text-[0.72rem] tracking-[0.18em] uppercase py-1 transition-all duration-200 ${
                    isActive ? 'text-text font-semibold' : 'text-text/60 hover:text-text'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-text rounded-full transition-transform duration-300" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-text p-1 hover:opacity-75 transition-opacity cursor-pointer"
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
          <div className="flex justify-between items-center h-[64px] mb-12">
            <span className="font-body font-black text-[1.25rem] text-text flex tracking-tight">
              <span>K</span>
              <span>P</span>
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-muted hover:text-text p-1 transition-colors cursor-pointer"
              aria-label="Close mobile navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-8 flex-grow justify-center" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-body text-[clamp(2.2rem,8vw,3.5rem)] uppercase transition-all duration-200 font-extrabold tracking-tight ${
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
