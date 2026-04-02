import * as React from "react";
import { useLocation } from "react-router-dom";

import {
  getAnalyticsIds,
  installClarity,
  installGa4,
  installHotjar,
  installMetaPixel,
  trackCtaClick,
  trackEngagement60s,
  trackPageView,
  trackScrollDepth,
  trackWhatsAppClick,
} from "@/components/analytics/analytics";

const trackedDepths = [25, 50, 75, 100] as const;
const hiddenRoutes = ["/login", "/register", "/admin"];

type ClickTarget = HTMLElement & {
  dataset: DOMStringMap;
};

export function AnalyticsProvider() {
  const location = useLocation();
  const ids = React.useMemo(() => getAnalyticsIds(), []);
  const scrollStateRef = React.useRef<Record<number, boolean>>({ 25: false, 50: false, 75: false, 100: false });
  const timeSentRef = React.useRef(false);
  const isHiddenRoute = hiddenRoutes.some((route) => location.pathname.startsWith(route));

  React.useEffect(() => {
    if (isHiddenRoute) return;

    installGa4(ids.ga4Id);
    installMetaPixel(ids.metaPixelId);
    installClarity(ids.clarityId);
    installHotjar(ids.hotjarSiteId, ids.hotjarVersion);
  }, [ids, isHiddenRoute]);

  React.useEffect(() => {
    if (isHiddenRoute) return;

    trackPageView(location.pathname + location.search, document.title);
    scrollStateRef.current = { 25: false, 50: false, 75: false, 100: false };
    timeSentRef.current = false;

    const timer = window.setTimeout(() => {
      if (!timeSentRef.current) {
        trackEngagement60s(location.pathname + location.search);
        timeSentRef.current = true;
      }
    }, 60000);

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 1;

      trackedDepths.forEach((depth) => {
        if (!scrollStateRef.current[depth] && progress >= depth / 100) {
          scrollStateRef.current[depth] = true;
          trackScrollDepth(depth, location.pathname + location.search);
        }
      });

      if (!scrollStateRef.current[100] && scrollHeight > 0 && scrollTop + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        scrollStateRef.current[100] = true;
        trackScrollDepth(100, location.pathname + location.search);
      }
    };

    const handleClick = (event: MouseEvent) => {
      const target = (event.target as Element | null)?.closest<ClickTarget>("[data-analytics-cta], [data-whatsapp-origin], a[href]");
      if (!target) return;

      const label = target.dataset.analyticsCta?.trim() || target.textContent?.trim() || target.getAttribute("aria-label")?.trim() || "";
      const href = target.getAttribute("href") ?? "";
      const origin = target.dataset.whatsappOrigin?.trim() || "";

      if (origin || href.includes("wa.me")) {
        trackWhatsAppClick(origin || "unknown", label || "WhatsApp", href);
        return;
      }

      if (target.dataset.analyticsCta || href.startsWith("#") || target.tagName === "BUTTON") {
        trackCtaClick(label || "CTA", origin || "unknown", href);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("click", handleClick, true);
    handleScroll();

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClick, true);
    };
  }, [location.pathname, location.search, isHiddenRoute]);

  return null;
}
