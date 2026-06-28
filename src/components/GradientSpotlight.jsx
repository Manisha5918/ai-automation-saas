import { useEffect, useRef } from 'react';

/**
 * A subtle radial gradient spotlight that follows the mouse cursor
 * across the entire page. Creates a flashlight-reveal effect.
 */
export default function GradientSpotlight() {
  const spotlightRef = useRef(null);
  const rafId = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const handleMouseMove = (e) => {
      if (rafId.current) return;

      rafId.current = requestAnimationFrame(() => {
        if (spotlightRef.current) {
          spotlightRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(255, 200, 1, 0.04), rgba(255, 153, 50, 0.02), transparent 70%)`;
        }
        rafId.current = null;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="fixed inset-0 pointer-events-none z-[1] hidden md:block"
      aria-hidden="true"
    />
  );
}
