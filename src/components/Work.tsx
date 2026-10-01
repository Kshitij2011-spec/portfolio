import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Terminal, Layers } from 'lucide-react';
import { PROJECTS, PINNED_REPOS } from '../data/portfolioData';
import { Project } from '../types';

export const Work: React.FC = () => {
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({});
  const [activeImageIndex, setActiveImageIndex] = useState<Record<string, number>>({
    polarops: 0,
    machineguard: 0,
  });

  const toggleExpand = (id: string) => {
    setExpandedProjects((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const nextImage = (projectId: string, max: number) => {
    setActiveImageIndex((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % max,
    }));
  };

  const prevImage = (projectId: string, max: number) => {
    setActiveImageIndex((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + max) % max,
    }));
  };

  return (
    <section id="work" className="w-full bg-bg-alt py-16 md:py-24 flex flex-col border-y border-border overflow-hidden scroll-mt-20">
      <div className="w-full max-w-[1200px] mx-auto px-[clamp(1.5rem,5vw,3.5rem)]">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-[1px] bg-muted w-4" />
            <p className="font-mono text-[0.7rem] text-muted tracking-[0.2em] uppercase">
              // SELECTED WORK
            </p>
          </div>
          <h2 className="font-body font-black text-[clamp(2.6rem,7vw,5rem)] leading-[1.05] text-text tracking-tight mb-2">
            Things I've Built
          </h2>
          <p className="font-mono text-[0.82rem] text-muted">
            Real products. Real engineering. Real impact.
          </p>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-8">
          {PROJECTS.map((project: Project) => {
            const isExpanded = !!expandedProjects[project.id];
            const currentImg = activeImageIndex[project.id] || 0;

            return (
              <div
                key={project.id}
                className="group relative bg-bg-card border border-border rounded-[16px] p-5 md:p-7 lg:p-[28px] transition-all duration-300 ease-out hover:-translate-y-1 shadow-[rgba(0,0,0,0.06)_0px_2px_12px_0px] overflow-hidden"
              >
                {/* Left Colored Hover Indicator Accent */}
                <div
                  className="absolute inset-y-0 left-0 w-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-[16px] hidden lg:block"
                  style={{ backgroundColor: project.accentColor }}
                />

                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 relative z-10">
                  {/* Left Column: Details */}
                  <div className="w-full lg:w-[54%] flex flex-col order-2 lg:order-1">
                    {/* Badge */}
                    <div className="flex items-center w-full">
                      <span
                        className="font-mono text-[0.68rem] rounded-full px-3 py-1 font-medium tracking-wide"
                        style={{
                          backgroundColor: project.tagBg,
                          color: project.tagColor,
                        }}
                      >
                        {project.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-body font-extrabold text-[clamp(1.5rem,3.2vw,2.4rem)] text-text mt-3 leading-tight tracking-tight">
                      {project.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="font-body font-medium text-[1.02rem] text-muted mt-1.5 leading-snug">
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="font-body font-normal text-[0.92rem] text-text/80 mt-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Extended Description / Highlights Accordion */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-border/60 flex flex-col gap-3 transition-all duration-300">
                        {project.extendedDescription && (
                          <p className="font-body text-[0.88rem] text-text/75 leading-relaxed">
                            {project.extendedDescription}
                          </p>
                        )}
                        {project.highlights && (
                          <ul className="flex flex-col gap-1.5 mt-1 font-mono text-[0.78rem] text-muted">
                            {project.highlights.map((h, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-text font-bold">›</span>
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}

                    {/* Read more toggle button */}
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="text-left font-body font-semibold text-[0.88rem] text-[#16a34a] mt-2 transition-opacity duration-200 inline-block w-max hover:opacity-80 cursor-pointer"
                      aria-expanded={isExpanded}
                    >
                      {isExpanded ? 'Show less ↑' : 'Read more ↓'}
                    </button>

                    {/* Metrics if available (Held-out Test Metrics strictly) */}
                    {project.metrics && (
                      <div className="grid grid-cols-3 gap-3 mt-4 p-3 bg-bg-alt/70 border border-border/60 rounded-[8px]">
                        {project.metrics.map((m, mi) => (
                          <div key={mi} className="flex flex-col">
                            <span className="font-mono text-[0.62rem] text-muted uppercase tracking-wider">{m.label}</span>
                            <span className="font-body font-bold text-[1.05rem] text-text">{m.value}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech stack pills */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies.map((t, ti) => (
                        <span
                          key={ti}
                          className="bg-bg-alt border border-border text-muted font-mono text-[0.72rem] rounded-[4px] px-2.5 py-1"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons (Only show when verified external link exists) */}
                    {(project.liveUrl || project.githubUrl || project.docsUrl) && (
                      <div className="flex flex-wrap items-center gap-5 mt-6 pt-3 border-t border-border/40">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-text font-mono text-[0.82rem] font-semibold hover:text-muted transition-colors"
                          >
                            Live Demo <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-muted hover:text-text font-mono text-[0.82rem] transition-colors"
                          >
                            GitHub →
                          </a>
                        )}
                        {project.docsUrl && (
                          <a
                            href={project.docsUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-muted hover:text-text font-mono text-[0.82rem] transition-colors"
                          >
                            API Docs ↗
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Right Column: Visual Component / Gallery */}
                  <div className="w-full lg:w-[46%] flex flex-col justify-center self-center order-1 lg:order-2">
                    {project.images && project.images.length > 0 ? (
                      <div className="w-full rounded-[10px] flex flex-col items-center justify-center overflow-hidden relative shadow-sm border border-border/60 group/carousel bg-bg-alt">
                        <div className="w-full relative overflow-hidden bg-bg aspect-[16/10]">
                          <img
                            src={project.images[currentImg]}
                            alt={`${project.title} visualization`}
                            className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                          />
                        </div>

                        {/* Carousel Prev/Next Buttons (only if multiple images) */}
                        {project.images.length > 1 && (
                          <>
                            <button
                              onClick={() => prevImage(project.id, project.images.length)}
                              className="hidden lg:flex absolute left-3 top-1/2 -translate-y-1/2 bg-bg/85 hover:bg-bg backdrop-blur-sm text-text p-2 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 shadow-sm z-10 cursor-pointer"
                              aria-label="Previous screenshot"
                            >
                              <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => nextImage(project.id, project.images.length)}
                              className="hidden lg:flex absolute right-3 top-1/2 -translate-y-1/2 bg-bg/85 hover:bg-bg backdrop-blur-sm text-text p-2 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 shadow-sm z-10 cursor-pointer"
                              aria-label="Next screenshot"
                            >
                              <ChevronRight className="w-4 h-4" />
                            </button>

                            {/* Dot Indicators */}
                            <div className="flex absolute bottom-2.5 left-1/2 -translate-x-1/2 gap-1.5 bg-bg/70 backdrop-blur-sm px-2.5 py-1 rounded-full z-10">
                              {project.images.map((_, dotIdx) => (
                                <button
                                  key={dotIdx}
                                  onClick={() =>
                                    setActiveImageIndex((prev) => ({
                                      ...prev,
                                      [project.id]: dotIdx,
                                    }))
                                  }
                                  className={`rounded-full transition-all duration-200 ${
                                    currentImg === dotIdx
                                      ? 'w-4 h-1.5 bg-text'
                                      : 'w-1.5 h-1.5 bg-text/40 hover:bg-text/70'
                                  }`}
                                  aria-label={`Slide ${dotIdx + 1}`}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    ) : project.id === 'smart-automation' ? (
                      /* Bespoke Agent Loop Visual Card */
                      <div className="w-full rounded-[10px] p-5 bg-bg border border-border/80 shadow-xs flex flex-col gap-3 font-mono text-[0.78rem]">
                        <div className="flex items-center justify-between pb-3 border-b border-border/60">
                          <span className="flex items-center gap-1.5 text-text font-bold">
                            <Terminal className="w-3.5 h-3.5 text-blue-600" />
                            Agent Loop Execution
                          </span>
                          <span className="text-[0.65rem] px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-semibold">Gemini API</span>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="p-2.5 bg-white rounded border border-border/50 text-text/90">
                            <span className="text-muted block text-[0.65rem] uppercase">Input Prompt</span>
                            "Summarize important emails, update task backlog, and generate sales report."
                          </div>
                          <div className="flex items-center gap-2 text-muted justify-center py-0.5">
                            <span>↓ Tool Selection Intent Dispatched</span>
                          </div>
                          <div className="p-2.5 bg-bg-alt rounded border border-border/50">
                            <span className="text-muted block text-[0.65rem] uppercase">Python Tools Dispatched</span>
                            <div className="flex flex-wrap gap-1.5 mt-1">
                              <span className="px-1.5 py-0.5 bg-white rounded text-[0.68rem] text-text border border-border">get_emails()</span>
                              <span className="px-1.5 py-0.5 bg-white rounded text-[0.68rem] text-text border border-border">create_task()</span>
                              <span className="px-1.5 py-0.5 bg-white rounded text-[0.68rem] text-text border border-border">analyze_csv()</span>
                              <span className="px-1.5 py-0.5 bg-white rounded text-[0.68rem] text-text border border-border">save_report()</span>
                            </div>
                          </div>
                          <div className="p-2 bg-emerald-50 rounded border border-emerald-200 text-emerald-900 text-[0.72rem]">
                            ✓ Tool loop executed &amp; structured markdown result synthesized.
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Layered Spring Boot Architecture Card for Aarogya */
                      <div className="w-full rounded-[10px] p-5 bg-bg border border-border/80 shadow-xs flex flex-col gap-3 font-mono text-[0.78rem]">
                        <div className="flex items-center justify-between pb-3 border-b border-border/60">
                          <span className="flex items-center gap-1.5 text-text font-bold">
                            <Layers className="w-3.5 h-3.5 text-orange-600" />
                            Modular Backend Architecture
                          </span>
                          <span className="text-[0.65rem] px-2 py-0.5 rounded bg-orange-100 text-orange-800 font-semibold">Java + Spring Boot</span>
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                          <div className="p-2 bg-white rounded border border-border/60 flex items-center justify-between">
                            <span className="font-semibold text-text">1. Controller Layer</span>
                            <span className="text-muted text-[0.68rem]">Request routing &amp; DTO validation</span>
                          </div>
                          <div className="p-2 bg-white rounded border border-border/60 flex items-center justify-between">
                            <span className="font-semibold text-text">2. Service Layer</span>
                            <span className="text-muted text-[0.68rem]">Workflow orchestration logic</span>
                          </div>
                          <div className="p-2 bg-white rounded border border-border/60 flex items-center justify-between">
                            <span className="font-semibold text-text">3. Analysis Layer</span>
                            <span className="text-muted text-[0.68rem]">Deterministic symptom evaluation</span>
                          </div>
                          <div className="p-2 bg-white rounded border border-border/60 flex items-center justify-between">
                            <span className="font-semibold text-text">4. Client REST Contract</span>
                            <span className="text-muted text-[0.68rem]">Decoupled for frontend integration</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verified Codebases & Pinned Repositories */}
        <div className="mt-20 pt-16 border-t border-border">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <div className="h-[1px] bg-muted w-4" />
              <h3 className="font-mono text-[0.7rem] text-muted tracking-[0.2em] uppercase">
                // CODEBASES &amp; REPOSITORIES
              </h3>
            </div>
            <a
              href="https://github.com/Kshitij2011-spec"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[0.72rem] text-text hover:text-muted transition-colors tracking-widest uppercase flex items-center gap-1"
            >
              18 Repos on GitHub →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PINNED_REPOS.map((repo, ri) => (
              <a
                key={ri}
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col p-5 bg-bg-card border border-border hover:border-text/40 rounded-[12px] transition-all shadow-xs h-full"
              >
                <span className="font-body font-bold text-[1.05rem] text-text mb-2 group-hover:underline decoration-1 underline-offset-2">
                  {repo.name}
                </span>
                <p className="font-body text-[0.85rem] text-muted mb-6 flex-grow leading-relaxed">
                  {repo.description}
                </p>
                <div className="flex items-center gap-4 text-[0.75rem] font-mono text-muted mt-auto pt-3 border-t border-border/40">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: repo.langColor }}
                    />
                    {repo.language}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
