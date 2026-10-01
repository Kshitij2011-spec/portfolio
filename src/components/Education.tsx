import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="w-full bg-bg py-16 md:py-24 border-b border-border overflow-hidden scroll-mt-20">
      <div className="w-full max-w-[1200px] mx-auto px-[clamp(1.5rem,5vw,3.5rem)]">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-[1px] bg-muted w-4" />
            <p className="font-mono text-[0.7rem] text-muted tracking-[0.2em] uppercase">
              // EDUCATION
            </p>
          </div>
          <h2 className="font-body font-black text-[clamp(2.4rem,6vw,4rem)] leading-[1.1] text-text tracking-tight mb-2">
            Academic Background
          </h2>
        </div>

        {/* 2-Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Degree Card */}
          <div
            className="rounded-[16px] p-6 md:p-8 relative overflow-hidden group bg-bg-card/40 transition-transform duration-300 hover:-translate-y-1 shadow-xs"
            style={{ border: '1px solid var(--pastel-blue)' }}
          >
            <div
              className="absolute inset-0 opacity-[0.22] pointer-events-none"
              style={{ backgroundColor: 'var(--pastel-blue)' }}
            />
            <div className="relative z-10">
              <div className="mb-4 text-text">
                <GraduationCap className="w-8 h-8 text-text" strokeWidth={1.5} />
              </div>
              <p className="font-mono text-[0.7rem] text-muted uppercase tracking-wider mb-2">
                {EDUCATION.university}
              </p>
              <h3 className="font-body font-bold text-[1.2rem] text-text mb-1 leading-snug">
                {EDUCATION.degree}
              </h3>
              <p className="font-body font-medium text-[0.98rem] text-muted mb-4">
                {EDUCATION.institution}
              </p>
              <div className="flex items-center gap-4 text-muted font-mono text-[0.78rem] pt-3 border-t border-border/50">
                <span>{EDUCATION.period}</span>
                <span>·</span>
                <span className="font-bold text-text bg-white/80 px-2 py-0.5 rounded border border-border/60">
                  CGPA: {EDUCATION.cgpa} ({EDUCATION.semester})
                </span>
              </div>
            </div>
          </div>

          {/* Academic Focus & Pillars */}
          <div
            className="rounded-[16px] p-6 md:p-8 relative overflow-hidden group bg-bg-card/40 transition-transform duration-300 hover:-translate-y-1 shadow-xs"
            style={{ border: '1px solid var(--pastel-peach)' }}
          >
            <div
              className="absolute inset-0 opacity-[0.22] pointer-events-none"
              style={{ backgroundColor: 'var(--pastel-peach)' }}
            />
            <div className="relative z-10">
              <div className="mb-4 text-text">
                <Award className="w-8 h-8 text-text" strokeWidth={1.5} />
              </div>
              <p className="font-mono text-[0.7rem] text-muted uppercase tracking-wider mb-2">
                Engineering Discipline
              </p>
              <h3 className="font-body font-bold text-[1.2rem] text-text mb-3 leading-snug">
                Applied AI/ML &amp; Systems Engineering
              </h3>
              <p className="font-body text-[0.92rem] text-muted leading-relaxed mb-4">
                Focus on translating theoretical computer science and machine learning concepts into deterministic production systems, resilient cloud APIs, and verifiable software.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="font-mono text-[0.72rem] bg-white/80 px-2.5 py-1 rounded text-text border border-border/60">
                  Data Structures &amp; Algorithms
                </span>
                <span className="font-mono text-[0.72rem] bg-white/80 px-2.5 py-1 rounded text-text border border-border/60">
                  Database Systems &amp; SQL
                </span>
                <span className="font-mono text-[0.72rem] bg-white/80 px-2.5 py-1 rounded text-text border border-border/60">
                  Applied Machine Learning
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
