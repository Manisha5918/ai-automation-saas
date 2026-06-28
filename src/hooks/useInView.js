import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook that uses IntersectionObserver to detect when an element
 * enters the viewport. Returns a ref to attach and a boolean `inView`.
 *
 * @param {Object} options
 * @param {number} options.threshold - Visibility threshold (0 to 1). Default 0.15.
 * @param {string} options.rootMargin - Root margin. Default '0px'.
 * @param {boolean} options.triggerOnce - If true, stays `true` after first intersection. Default true.
 */
export default function useInView({
  threshold = 0.15,
  rootMargin = '0px',
  triggerOnce = true,
} = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (triggerOnce) {
            observer.unobserve(node);
          }
        } else if (!triggerOnce) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, inView];
}
