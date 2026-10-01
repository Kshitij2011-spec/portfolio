import React from 'react';
import { Trophy, Award, Zap, GraduationCap } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'trophy':
        return <Trophy className="w-8 h-8 text-text" strokeWidth={1.5} />;
      case 'award':
        return <Award className="w-8 h-8 text-text" strokeWidth={1.5} />;
      case 'zap':
        return <Zap className="w-8 h-8 text-text" strokeWidth={1.5} />;
      case 'academic':
      default:
        return <GraduationCap className="w-8 h-8 text-text" strokeWidth={1.5} />;
    }
  };

  return (
    <section id="achievements" className="w-full bg-bg py-16 md:py-24 border-b border-border overflow-hidden scroll-mt-20">
      <div className="w-full max-w-[1200px] mx-auto px-[clamp(1.5rem,5vw,3.5rem)]">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-[1px] bg-muted w-4" />
            <p className="font-mono text-[0.7rem] text-muted tracking-[0.2em] uppercase">
              // ACHIEVEMENTS
            </p>
          </div>
          <h2 className="font-body font-black text-[clamp(2.4rem,6vw,4rem)] leading-[1.1] text-text tracking-tight mb-2">
            Milestones &amp; Recognition
          </h2>
        </div>

        {/* 2-Column Grid of Milestone Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className="rounded-[16px] p-6 md:p-8 relative overflow-hidden group bg-bg-card/40 transition-transform duration-300 hover:-translate-y-1 shadow-xs"
              style={{
                border: `1px solid ${item.accentColor}`,
              }}
            >
              {/* Soft Pastel Background Tint */}
              <div
                className="absolute inset-0 opacity-[0.22] pointer-events-none transition-opacity group-hover:opacity-30"
                style={{ backgroundColor: item.accentColor }}
              />

              <div className="relative z-10">
                <div className="mb-4 text-text">{getIcon(item.icon)}</div>
                {item.roleOrContext && (
                  <p className="font-mono text-[0.7rem] text-muted uppercase tracking-wider mb-2">
                    {item.roleOrContext}
                  </p>
                )}
                <h3 className="font-body font-bold text-[1.2rem] text-text mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="font-body text-[0.93rem] text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
