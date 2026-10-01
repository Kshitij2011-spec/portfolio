import React, { useState, useEffect } from 'react';
import { SmoothScroll } from './components/SmoothScroll';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Work } from './components/Work';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'work', 'experience', 'achievements', 'skills', 'education', 'contact'];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-bg text-text font-body selection:bg-pastel-purple selection:text-text">
        <Navbar activeSection={activeSection} />
        <main>
          <Hero />
          <About />
          <Work />
          <Experience />
          <Achievements />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default App;
