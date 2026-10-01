import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="w-full bg-bg-alt py-16 md:py-24 border-b border-border overflow-hidden scroll-mt-20">
      <div className="w-full max-w-[1200px] mx-auto px-[clamp(1.5rem,5vw,3.5rem)]">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-[1px] bg-muted w-4" />
            <p className="font-mono text-[0.7rem] text-muted tracking-[0.2em] uppercase">
              // CAPABILITIES
            </p>
          </div>
          <h2 className="font-body font-black text-[clamp(2.6rem,7vw,4.8rem)] leading-[1.05] text-text tracking-tight mb-2">
            My Tech Stack
          </h2>
        </div>

        {/* 2-Column Grid of Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-10">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-bg border border-border rounded-[14px] p-6 shadow-xs"
            >
              <div className="mb-4">
                <h3 className="font-mono text-[0.72rem] text-muted uppercase tracking-widest font-semibold">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5 w-full">
                {category.skills.map((skill, si) => (
                  <span
                    key={si}
                    className="text-text font-mono text-[0.78rem] font-medium rounded-[6px] px-[13px] py-[6px] cursor-default transition-all duration-150 ease-in-out hover:opacity-85 hover:scale-105 shadow-2xs"
                    style={{ backgroundColor: skill.pastelColor }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
