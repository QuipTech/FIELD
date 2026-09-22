"use client";

import { useEffect, useRef, useState } from "react";

export const useCountUp = (target: number, suffix: string, decimals: number) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(`0${suffix}`);

  useEffect(() => {
    const node = ref.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(`${target.toFixed(decimals)}${suffix}`);
      return;
    }

    const runCountUp = () => {
      const start = performance.now();
      const duration = 1100;
      const tick = (now: number) => {
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(`${(target * eased).toFixed(decimals)}${suffix}`);
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runCountUp();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [target, suffix, decimals]);

  return { ref, display };
};
