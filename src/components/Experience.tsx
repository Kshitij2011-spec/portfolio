import React from 'react';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="w-full bg-bg py-16 md:py-24 border-b border-border overflow-hidden scroll-mt-20">
      <div className="w-full max-w-[1200px] mx-auto px-[clamp(1.5rem,5vw,3.5rem)]">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-[1px] bg-muted w-4" />
            <p className="font-mono text-[0.7rem] text-muted tracking-[0.2em] uppercase">
              // EXPERIENCE
            </p>
          </div>
          <h2 className="font-body font-black text-[clamp(2.6rem,7vw,4.8rem)] leading-[1.05] text-text tracking-tight mb-2">
            Where I've Worked
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative ml-4 pl-4 md:pl-8">
          {/* Vertical Track Line */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-border" />

          {EXPERIENCE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="relative pt-4 pb-8 border-b border-border last:border-0"
            >
              {/* Timeline Dot */}
              <div
                className="absolute left-[calc(-1rem-14px)] md:left-[calc(-2rem-14px)] top-[26px] w-[10px] h-[10px] rounded-full bg-text z-10"
                style={{
                  boxShadow: '0 0 0 4px var(--bg), 0 0 0 5px var(--border)',
                }}
              />

              <div className="transition-all duration-300 border-l-[3px] border-pastel-purple pl-[1rem] -ml-[1rem]">
                {/* Header row: Company & Role */}
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4 gap-1">
                  <h3 className="font-body font-bold text-[1.25rem] text-text">
                    {item.company}
                  </h3>
                  <div className="flex flex-col md:items-end">
                    <span className="font-mono text-[0.82rem] text-muted font-medium">
                      {item.role}
                    </span>
                    <span className="font-mono text-[0.74rem] text-light mt-0.5">
                      {item.period} · {item.location}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="flex flex-col gap-3 mt-4">
                  {item.bullets.map((bullet, bi) => (
                    <li
                      key={bi}
                      className="font-body text-[0.92rem] text-text/80 leading-relaxed flex items-start gap-3"
                    >
                      <span className="text-muted font-mono select-none">—</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
