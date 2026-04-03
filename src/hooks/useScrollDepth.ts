'use client';

import { useEffect, useRef } from "react";

import { analytics } from "@/components/analytics/analytics";

export function useScrollDepth(pageKey?: string) {
  const tracked = useRef<Set<number>>(new Set());

  useEffect(() => {
    if (!pageKey) return;

    tracked.current = new Set();

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 100;

      for (const threshold of [25, 50, 75, 100] as const) {
        if (pct >= threshold && !tracked.current.has(threshold)) {
          tracked.current.add(threshold);
          analytics.scrollDepth(threshold);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pageKey]);
}
