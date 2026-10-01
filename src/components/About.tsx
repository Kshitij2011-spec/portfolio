import React from 'react';
import { ABOUT_INFO, PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="w-full bg-bg py-16 md:py-24 flex flex-col overflow-hidden border-t border-border/50 scroll-mt-20">
      <div className="w-full max-w-[1200px] mx-auto px-[clamp(1.5rem,5vw,3.5rem)]">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-[1px] bg-muted w-4" />
            <p className="font-mono text-[0.7rem] text-muted tracking-[0.2em] uppercase">
              {ABOUT_INFO.tag}
            </p>
          </div>
          <h2 className="font-body font-black text-[clamp(2.4rem,6vw,4rem)] leading-[1.1] text-text tracking-tight mb-2">
            {ABOUT_INFO.heading}
          </h2>
        </div>

        {/* Narrative Content */}
        <div className="flex flex-col gap-6 max-w-[760px]">
          {ABOUT_INFO.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="font-body text-[1.05rem] md:text-[1.12rem] text-text/85 leading-relaxed font-normal"
            >
              {paragraph}
            </p>
          ))}

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-8 mt-4 font-body text-[0.95rem]">
            <a
              href="#work"
              className="text-text font-medium border-b-[1.5px] border-text pb-0.5 hover:text-muted hover:border-muted transition-colors"
            >
              View my work →
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="text-muted font-mono text-[0.88rem] border-b border-border pb-0.5 hover:text-text hover:border-text transition-colors"
            >
              github.com/Kshitij2011-spec →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
