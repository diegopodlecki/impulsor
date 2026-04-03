/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense, useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import type { RouteRecord } from "vite-react-ssg";

import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import PageTracking from "@/components/analytics/PageTracking";
import { SeoHead } from "@/components/SEO/SeoHead";
import ProtectedRoute from "@/components/ProtectedRoute.tsx";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
const LeadCaptureSystem = lazy(() =>
  import("@/components/leads/LeadCaptureSystem").then((mod) => ({ default: mod.LeadCaptureSystem })),
);
const ExitIntentPopup = lazy(() =>
  import("@/components/ui/ExitIntentPopup").then((mod) => ({ default: mod.default })),
);
import { Toaster } from "@/components/ui/sonner.tsx";
import { getSeoConfigForPath } from "@/lib/seo-routes";
import Admin from "./pages/Admin.tsx";
import Emprendedores from "./pages/Emprendedores.tsx";
import EsteticaCorporal from "./pages/EsteticaCorporal.tsx";
import Gimnasios from "./pages/Gimnasios.tsx";
import Index from "./pages/Index.tsx";
import IronFitness from "./pages/IronFitness.tsx";
import Faq from "./pages/Faq.tsx";
import Login from "./pages/Login.tsx";
import Nutricionistas from "./pages/Nutricionistas.tsx";
import PersonalTrainers from "./pages/PersonalTrainers.tsx";
import Psicologos from "./pages/Psicologos.tsx";
import WebRubro from "./pages/WebRubro";
import WebsIndex from "./pages/WebsIndex";
import Register from "./pages/Register.tsx";
import { AuthProvider } from "./contexts/AuthContext";

const clearDiagnosticHash = () => {
  if (typeof window === "undefined") return;

  if (window.location.hash === "#diagnostico") {
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
  }
};

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <SiteLayout />,
    children: [
      { index: true, element: <Index /> },
      { path: "gimnasios", element: <Gimnasios /> },
      { path: "entrenadores", element: <PersonalTrainers /> },
      { path: "personal-trainers", element: <Navigate to="/entrenadores" replace /> },
      { path: "nutricionistas", element: <Nutricionistas /> },
      { path: "psicologos", element: <Psicologos /> },
      { path: "estetica-corporal", element: <EsteticaCorporal /> },
      { path: "gimnasio", element: <IronFitness /> },
      { path: "iron-fitness", element: <Navigate to="/gimnasio" replace /> },
      { path: "emprendedores", element: <Emprendedores /> },
      { path: "webs", element: <WebsIndex /> },
      { path: "webs/:rubro", element: <WebRubro /> },
      { path: "faq", element: <Faq /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "dashboard", element: <Navigate to="/admin" replace /> },
      {
        path: "admin",
        element: <ProtectedRoute />,
        children: [{ index: true, element: <Admin /> }],
      },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
];

function SiteLayout() {
  const location = useLocation();
  const seo = getSeoConfigForPath(location.pathname);

  return (
    <AuthProvider>
      <SeoHead
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        ogImage={seo.ogImage}
        noIndex={seo.noIndex}
        schema={seo.schema}
      />
      <ScrollToTop />
      <HashCleanup />
      <Toaster position="top-right" />
      <GoogleAnalytics />
      <AnalyticsProvider />
      <PageTracking />
      <Suspense fallback={null}>
        <LeadCaptureSystem />
      </Suspense>
      <WhatsAppButton />
      <Suspense fallback={null}>
        <ExitIntentPopup />
      </Suspense>
      <div className="min-h-screen">
        <Outlet />
      </div>
    </AuthProvider>
  );
}

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const HashCleanup = () => {
  useEffect(() => {
    clearDiagnosticHash();

    window.addEventListener("hashchange", clearDiagnosticHash);
    window.addEventListener("popstate", clearDiagnosticHash);

    return () => {
      window.removeEventListener("hashchange", clearDiagnosticHash);
      window.removeEventListener("popstate", clearDiagnosticHash);
    };
  }, []);

  return null;
};

export default function App() {
  return null;
}
