import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <nav className="hidden md:flex items-center gap-8">
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
            className="md:hidden text-text p-1 hover:opacity-75 transition-opacity"
            aria-label="Open mobile navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[200] bg-bg flex flex-col p-[clamp(1.5rem,5vw,3.5rem)] transition-opacity duration-300">
          <div className="flex justify-between items-center h-[64px] mb-12">
            <span className="font-body font-black text-[1.25rem] text-text flex tracking-tight">
              <span>K</span>
              <span>P</span>
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-muted hover:text-text p-1 transition-colors"
              aria-label="Close mobile navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-8 flex-grow justify-center">
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
            <span className="font-mono text-[0.8rem] text-muted">kshitijparkhe2011@gmail.com</span>
            <span className="font-mono text-[0.72rem] text-light">Mumbai, India</span>
          </div>
        </div>
      )}
    </>
  );
};
