'use client';

import { useEffect } from "react";

import { analytics } from "@/components/analytics/analytics";

export function useTimeOnPage(pageKey?: string) {
  useEffect(() => {
    if (!pageKey) return;

    const timers = [
      window.setTimeout(() => analytics.timeOnPage(30), 30_000),
      window.setTimeout(() => analytics.timeOnPage(60), 60_000),
      window.setTimeout(() => analytics.timeOnPage(120), 120_000),
    ];

    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [pageKey]);
}
