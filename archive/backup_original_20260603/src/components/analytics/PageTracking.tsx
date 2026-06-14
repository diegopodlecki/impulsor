'use client';

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { trackPageView } from "@/components/analytics/analytics";
import { useScrollDepth } from "@/hooks/useScrollDepth";
import { useTimeOnPage } from "@/hooks/useTimeOnPage";

const hiddenRoutes = ["/login", "/register", "/admin"];

export default function PageTracking() {
  const location = useLocation();
  const pageKey = `${location.pathname}${location.search}`;
  const isHiddenRoute = hiddenRoutes.some((route) => location.pathname.startsWith(route));

  useScrollDepth(isHiddenRoute ? undefined : pageKey);
  useTimeOnPage(isHiddenRoute ? undefined : pageKey);

  useEffect(() => {
    if (isHiddenRoute) return;

    trackPageView(pageKey, document.title);
  }, [isHiddenRoute, pageKey]);

  return null;
}
