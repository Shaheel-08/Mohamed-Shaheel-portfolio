import { useState, useEffect } from 'react';

export function useInView(options = { threshold: 0.1, triggerOnce: true }) {
  const [ref, setRef] = useState(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (options.triggerOnce) {
          observer.unobserve(ref);
        }
      } else if (!options.triggerOnce) {
        setInView(false);
      }
    }, options);

    observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, options.threshold, options.triggerOnce]);

  return [setRef, inView];
}
