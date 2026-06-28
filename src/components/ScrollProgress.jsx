import { useState, useEffect } from 'react';

/**
 * A thin gradient progress bar fixed at the very top of the viewport
 * that fills left-to-right as the user scrolls down the page.
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId;

    const handleScroll = () => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        setProgress(scrollPercent);
        rafId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[60] pointer-events-none" aria-hidden="true">
      <div
        className="h-full bg-gradient-to-r from-forsythia via-saffron to-forsythia rounded-r-full shadow-[0_0_10px_rgba(255,200,1,0.5)]"
        style={{
          width: `${progress}%`,
          transition: 'width 0.05s linear',
        }}
      />
    </div>
  );
}
