import * as React from "react";
import { useLocation } from "react-router-dom";

import {
  getAnalyticsIds,
  installClarity,
  installHotjar,
  installMetaPixel,
} from "@/components/analytics/analytics";

const hiddenRoutes = ["/login", "/register", "/admin"];

export function AnalyticsProvider() {
  const location = useLocation();
  const ids = React.useMemo(() => getAnalyticsIds(), []);
  const isHiddenRoute = hiddenRoutes.some((route) => location.pathname.startsWith(route));

  React.useEffect(() => {
    if (isHiddenRoute) return;

    installMetaPixel(ids.metaPixelId);
    installClarity(ids.clarityId);
    installHotjar(ids.hotjarSiteId, ids.hotjarVersion);
  }, [ids, isHiddenRoute]);

  return null;
}

