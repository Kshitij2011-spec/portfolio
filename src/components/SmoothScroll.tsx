import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

interface SmoothScrollProps {
  children?: React.ReactNode;
}

export const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Single Lenis instance with standard fluid parameters
    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      stopInertiaOnNavigate: true,
      respectReducedMotion: true,
      smoothWheel: true,
      syncTouch: false, // Keep native touch behavior fluid on mobile devices
    });

    lenisRef.current = lenis;
    (window as any).__lenis = lenis;

    return () => {
      lenis.destroy();
      lenisRef.current = null;
      delete (window as any).__lenis;
    };
  }, []);

  return <>{children}</>;
};
