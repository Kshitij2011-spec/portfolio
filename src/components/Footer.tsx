import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-bg-dark border-t border-[#2c2825] py-6">
      <div className="w-full max-w-[1200px] mx-auto px-[clamp(1.5rem,5vw,3.5rem)] flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[0.72rem] text-center md:text-left text-stone-500">
          Designed &amp; Built by Kshitij Parkhe — 2026
        </p>
        <p className="font-mono text-[0.72rem] text-center md:text-right text-stone-500">
          Made with React + TypeScript
        </p>
      </div>
    </footer>
  );
};
