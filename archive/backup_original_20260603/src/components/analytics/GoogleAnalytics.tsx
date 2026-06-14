'use client';

import { useEffect } from "react";

import { injectExternalScript } from "@/components/analytics/analytics";

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA4_ID as string | undefined;

export default function GoogleAnalytics() {
  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    if (!window.dataLayer) {
      window.dataLayer = [];
    }

    if (!window.gtag) {
      window.gtag = function gtag(...args: unknown[]) {
        window.dataLayer.push(args);
      };
    }

    injectExternalScript(
      `ga4-${GA_MEASUREMENT_ID}`,
      `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`,
    );

    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID, {
      send_page_view: false,
      anonymize_ip: true,
    });
  }, []);

  return null;
}

