import { useRef, useCallback } from 'react';

/**
 * Provides 3D tilt effect for a card element.
 * Returns { ref, onMouseMove, onMouseLeave, style }.
 *
 * @param {Object} options
 * @param {number} options.maxRotation - Maximum degrees of tilt. Default 8.
 * @param {number} options.perspective - CSS perspective value in px. Default 1000.
 * @param {number} options.scale - Scale on hover. Default 1.02.
 * @param {number} options.speed - Transition speed in ms. Default 400.
 */
export default function useTilt({
  maxRotation = 8,
  perspective = 1000,
  scale = 1.02,
  speed = 400,
} = {}) {
  const ref = useRef(null);

  const onMouseMove = useCallback(
    (e) => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -maxRotation;
      const rotateY = ((x - centerX) / centerX) * maxRotation;

      el.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;
    },
    [maxRotation, perspective, scale]
  );

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  }, [perspective]);

  const style = {
    transition: `transform ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`,
    transformStyle: 'preserve-3d',
    willChange: 'transform',
  };

  return { ref, onMouseMove, onMouseLeave, style };
}
