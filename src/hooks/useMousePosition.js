import { useState, useEffect, useRef } from 'react';

/**
 * Tracks the global mouse position, throttled via requestAnimationFrame.
 * Returns { x, y } in viewport coordinates.
 */
export default function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const rafId = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (rafId.current) return;

      rafId.current = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        rafId.current = null;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return position;
}
