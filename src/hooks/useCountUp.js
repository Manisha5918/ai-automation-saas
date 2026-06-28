import { useState, useEffect } from 'react';

/**
 * Animated number counter hook with easing.
 *
 * @param {number} target - Target number to count to.
 * @param {Object} options
 * @param {number} options.duration - Animation duration in ms. Default 1800.
 * @param {boolean} options.inView - Only animate when true. Default false.
 * @param {string} options.easing - Easing type: 'easeOutCubic' | 'easeOutExpo' | 'linear'. Default 'easeOutCubic'.
 * @param {number} options.startFrom - Starting value. Default 0.
 */
export default function useCountUp(
  target,
  { duration = 1800, inView = false, easing = 'easeOutCubic', startFrom = 0 } = {}
) {
  const [value, setValue] = useState(startFrom);

  useEffect(() => {
    if (!inView) return;

    const startTime = performance.now();
    const diff = target - startFrom;

    const easingFns = {
      easeOutCubic: (t) => 1 - Math.pow(1 - t, 3),
      easeOutExpo: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      linear: (t) => t,
    };

    const easeFn = easingFns[easing] || easingFns.easeOutCubic;

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeFn(progress);
      setValue(Math.round(startFrom + eased * diff));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [target, duration, inView, easing, startFrom]);

  return value;
}
