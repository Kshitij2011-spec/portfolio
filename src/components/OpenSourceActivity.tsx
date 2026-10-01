import React, { useState } from 'react';
import { GITHUB_ACTIVITY, ContributionDay } from '../data/githubActivity';

export const OpenSourceActivity: React.FC = () => {
  const [hoveredDay, setHoveredDay] = useState<ContributionDay | null>(null);

  // Month formatting helper
  const formatDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
    } catch {
      return dateStr;
    }
  };

  const getCellColor = (level: 0 | 1 | 2 | 3 | 4) => {
    switch (level) {
      case 1:
        return 'bg-[#b8e0c8] border-[#9fd4b2]';
      case 2:
        return 'bg-[#68c48e] border-[#52af78]';
      case 3:
        return 'bg-[#2e9e5b] border-[#228348]';
      case 4:
        return 'bg-[#166534] border-[#104f28]';
      case 0:
      default:
        return 'bg-[#ede8e3] border-[#e0d9d2]';
    }
  };

  const levelLegend: (0 | 1 | 2 | 3 | 4)[] = [0, 1, 2, 3, 4];

  return (
    <section
      id="activity"
      className="w-full bg-bg py-16 md:py-24 border-b border-border overflow-hidden scroll-mt-20"
    >
      <div className="w-full max-w-[1200px] mx-auto px-[clamp(1.5rem,5vw,3.5rem)]">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-[1px] bg-muted w-4" />
            <p className="font-mono text-[0.7rem] text-muted tracking-[0.2em] uppercase">
              // OPEN SOURCE ACTIVITY
            </p>
          </div>
          <h2 className="font-body font-black text-[clamp(2.4rem,6vw,4rem)] leading-[1.1] text-text tracking-tight mb-2">
            Public Contributions
          </h2>
          <p className="font-mono text-[0.82rem] text-muted">
            Verifiable commit cadence, repository development, and open-source activity.
          </p>
        </div>

        {/* Required 4 Summary Values */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 p-6 md:p-8 bg-bg-card border border-border rounded-[16px] mb-8 shadow-xs">
          <div className="flex flex-col">
            <span className="font-body font-black text-[clamp(1.8rem,4vw,2.5rem)] text-text leading-none mb-1.5">
              {GITHUB_ACTIVITY.totalContributions}
            </span>
            <span className="font-mono text-[0.68rem] text-muted uppercase tracking-widest font-medium">
              TOTAL CONTRIBUTIONS
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-body font-black text-[clamp(1.8rem,4vw,2.5rem)] text-text leading-none mb-1.5">
              {GITHUB_ACTIVITY.longestStreak}
            </span>
            <span className="font-mono text-[0.68rem] text-muted uppercase tracking-widest font-medium">
              LONGEST STREAK
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-body font-black text-[clamp(1.8rem,4vw,2.5rem)] text-text leading-none mb-1.5">
              {GITHUB_ACTIVITY.mostActiveMonth}
            </span>
            <span className="font-mono text-[0.68rem] text-muted uppercase tracking-widest font-medium">
              MOST ACTIVE MONTH
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-body font-black text-[clamp(1.8rem,4vw,2.5rem)] text-text leading-none mb-1.5">
              {GITHUB_ACTIVITY.totalPublicRepos}
            </span>
            <span className="font-mono text-[0.68rem] text-muted uppercase tracking-widest font-medium">
              TOTAL PUBLIC REPOS
            </span>
          </div>
        </div>

        {/* GitHub-style Contribution Heatmap Matrix Card */}
        <div className="p-6 md:p-8 bg-bg-card border border-border rounded-[16px] shadow-xs">
          {/* Top header row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-4 border-b border-border/50 gap-2">
            <span className="font-body font-bold text-[1.05rem] text-text">
              {GITHUB_ACTIVITY.totalContributions} contributions in the last year
            </span>
            <span className="font-mono text-[0.72rem] text-muted">
              {hoveredDay
                ? `${hoveredDay.count} contribution${hoveredDay.count === 1 ? '' : 's'} on ${formatDate(
                    hoveredDay.date
                  )}`
                : 'Hover or tap any cell for details'}
            </span>
          </div>

          {/* Internal scroll container for mobile guarantee of 0 page overflow */}
          <div className="w-full overflow-x-auto pb-3 pt-1">
            <div className="min-w-[760px] flex flex-col gap-1 select-none">
              {/* Month Labels */}
              <div className="flex pl-8 text-[0.7rem] font-mono text-muted relative h-5">
                {GITHUB_ACTIVITY.months
                  .reduce<typeof GITHUB_ACTIVITY.months>((acc, m) => {
                    const lastWeek = acc.length > 0 ? acc[acc.length - 1].weekIndex : -99;
                    if (m.weekIndex - lastWeek >= 3) {
                      acc.push(m);
                    }
                    return acc;
                  }, [])
                  .map((m, mi) => (
                    <span
                      key={mi}
                      className="absolute"
                      style={{
                        left: `calc(2rem + ${m.weekIndex * 14}px)`,
                      }}
                    >
                      {m.name}
                    </span>
                  ))}
              </div>

              {/* Matrix with Day Labels on Left */}
              <div className="flex gap-2">
                {/* Weekday indicators (Mon, Wed, Fri) */}
                <div className="flex flex-col justify-between py-[2px] w-6 text-[0.65rem] font-mono text-muted text-right pr-1">
                  <span className="h-[11px] leading-[11px]"></span>
                  <span className="h-[11px] leading-[11px]">Mon</span>
                  <span className="h-[11px] leading-[11px]"></span>
                  <span className="h-[11px] leading-[11px]">Wed</span>
                  <span className="h-[11px] leading-[11px]"></span>
                  <span className="h-[11px] leading-[11px]">Fri</span>
                  <span className="h-[11px] leading-[11px]"></span>
                </div>

                {/* 53 Columns of 7 Days */}
                <div className="flex gap-[3px]">
                  {GITHUB_ACTIVITY.weeks.map((week, wi) => (
                    <div key={wi} className="flex flex-col gap-[3px]">
                      {week.days.map((day, di) => (
                        <div
                          key={di}
                          tabIndex={0}
                          aria-label={`${formatDate(day.date)}: ${day.count} contributions`}
                          onMouseEnter={() => setHoveredDay(day)}
                          onMouseLeave={() => setHoveredDay(null)}
                          onFocus={() => setHoveredDay(day)}
                          onBlur={() => setHoveredDay(null)}
                          className={`w-[11px] h-[11px] rounded-[2px] border ${getCellColor(
                            day.level
                          )} transition-all duration-150 cursor-pointer hover:scale-125 hover:z-20 hover:shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Legend */}
          <div className="flex items-center justify-between pt-4 mt-2 border-t border-border/40 text-[0.72rem] font-mono text-muted flex-wrap gap-3">
            <span className="text-[0.7rem] text-light">
              Authenticated GitHub Activity · @Kshitij2011-spec
            </span>
            <div className="flex items-center gap-1.5 ml-auto">
              <span>Less</span>
              {levelLegend.map((lvl) => (
                <span
                  key={lvl}
                  className={`w-[11px] h-[11px] rounded-[2px] border ${getCellColor(lvl)}`}
                />
              ))}
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
