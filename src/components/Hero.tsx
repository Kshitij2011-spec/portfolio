import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative w-full bg-bg flex flex-col overflow-hidden pt-[110px] pb-16 md:pb-24 min-h-[92vh] justify-between scroll-mt-20"
    >
      {/* Background Soft Pastel Glow */}
      <div
        className="absolute top-[-15%] right-[-5%] w-[480px] h-[480px] rounded-full opacity-60 pointer-events-none z-0 blur-[70px]"
        style={{
          background: 'radial-gradient(circle, var(--pastel-blue) 0%, transparent 70%)',
        }}
      />

      {/* Floating Corner Annotations */}
      <div className="absolute bottom-[28px] left-[32px] font-mono text-[0.68rem] text-muted z-10 hidden md:block tracking-wider">
        {PERSONAL_INFO.location}
      </div>
      <div className="absolute bottom-[28px] right-[32px] font-mono text-[0.68rem] text-muted z-10 hidden md:block animate-float-subtle tracking-wider">
        Scroll to explore ↓
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-[clamp(1.5rem,5vw,3.5rem)] relative z-10 flex flex-col flex-grow justify-center">
        {/* Desktop Polaroid Portrait Frame */}
        <div className="hidden lg:block absolute right-[clamp(1.5rem,5vw,3.5rem)] top-2 w-[290px] perspective-[1000px] z-10">
          <div className="relative bg-white rounded-[12px] p-2 transition-all duration-300 ease-out hover:rotate-1 hover:scale-[1.02] shadow-[rgba(0,0,0,0.12)_0px_8px_32px] border border-border/40">
            <img
              src="/Kshitijpic.png"
              alt="Kshitij Parkhe"
              className="w-full aspect-[3/4] object-cover object-[center_top] rounded-[8px]"
            />
          </div>
        </div>

        {/* Content Column */}
        <div className="w-full flex flex-col relative z-20">
          {/* Mobile/Tablet Avatar + Headline */}
          <div className="flex flex-row items-center gap-4 sm:gap-6 origin-left">
            <div className="lg:hidden w-[90px] h-[90px] sm:w-[130px] sm:h-[130px] rounded-full overflow-hidden border border-border/50 shadow-sm flex-shrink-0 bg-white">
              <img
                src="/Kshitijpic.png"
                alt="Kshitij Parkhe"
                className="w-full h-full object-cover object-[center_top]"
              />
            </div>

            <div className="flex flex-col">
              <h1 className="font-body font-black text-[clamp(2.6rem,9vw,9.5rem)] md:text-[clamp(4.2rem,10vw,9.5rem)] lg:text-[clamp(4.8rem,8.5vw,7.8rem)] leading-[0.9] text-text tracking-tight uppercase">
                {PERSONAL_INFO.firstName}
              </h1>
              <h1 className="font-body font-black text-[clamp(2.6rem,9vw,9.5rem)] md:text-[clamp(4.2rem,10vw,9.5rem)] lg:text-[clamp(4.8rem,8.5vw,7.8rem)] leading-[0.9] tracking-tight uppercase outline-text">
                {PERSONAL_INFO.lastName}
              </h1>
            </div>
          </div>

          {/* Subtitle / Role */}
          <p className="font-body font-medium text-[1.1rem] sm:text-[1.2rem] text-muted mt-6 max-w-[550px]">
            {PERSONAL_INFO.headline}
          </p>

          {/* Tagline / Supporting Statement */}
          <p className="font-body font-normal text-[1rem] sm:text-[1.05rem] text-light mt-2 max-w-[560px] leading-relaxed">
            {PERSONAL_INFO.statement}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 mt-8 font-body text-[0.95rem]">
            <a
              href="#work"
              className="group inline-flex items-center gap-1.5 text-text font-semibold border-b-[1.5px] border-text pb-0.5 hover:text-muted hover:border-muted transition-all duration-200"
            >
              <span>View My Work</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1 text-muted font-mono text-[0.88rem] border-b border-border pb-0.5 hover:text-text hover:border-text transition-all duration-200"
            >
              <span>GitHub</span>
              <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-1 text-muted font-mono text-[0.88rem] border-b border-border pb-0.5 hover:text-text hover:border-text transition-all duration-200"
            >
              <span>Contact</span>
              <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </a>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:flex md:flex-wrap items-center gap-y-6 gap-x-4 md:gap-x-0 pt-8 border-t border-border mt-10 w-full max-w-[620px]">
            {PERSONAL_INFO.stats.map((stat, idx) => (
              <div key={idx} className="flex items-center">
                <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-2">
                  <span className="font-body font-extrabold text-[1.5rem] md:text-[1.35rem] text-text leading-none">
                    {stat.value}
                  </span>
                  <span className="font-mono font-normal text-[0.65rem] md:text-[0.7rem] text-muted uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
                {idx < PERSONAL_INFO.stats.length - 1 && (
                  <span className="hidden md:inline mx-4 md:mx-6 text-[1.3rem] text-border">·</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
