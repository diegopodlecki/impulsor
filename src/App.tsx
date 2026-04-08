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
import Gimnasios from "./pages/Gimnasios.tsx";
import Index from "./pages/Index.tsx";
import Faq from "./pages/Faq.tsx";
import Login from "./pages/Login.tsx";
import Nutricionistas from "./pages/Nutricionistas.tsx";
import PersonalTrainers from "./pages/PersonalTrainers.tsx";
import Psicologos from "./pages/Psicologos.tsx";
import EsteticaCorporal from "./pages/EsteticaCorporal.tsx";
import Emprendedores from "./pages/Emprendedores.tsx";
import Register from "./pages/Register.tsx";
import { AuthProvider } from "./contexts/AuthContext";

const clearDiagnosticHash = () => {
  if (typeof window === "undefined") return;

  if (window.location.hash === "#diagnostico") {
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
  }
};

import NicheLandingPage from "./pages/NicheLandingPage.tsx";
// ... (otros imports)

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <SiteLayout />,
    children: [
      { index: true, element: <Index /> },
      
      // Landings principales con componente genérico
      { path: "gimnasios", element: <NicheLandingPage niche="gimnasio" /> },
      { path: "entrenadores", element: <NicheLandingPage niche="personal-trainer" /> },
      { path: "nutritionist", element: <NicheLandingPage niche="nutritionist" /> },
      { path: "psicologos", element: <NicheLandingPage niche="psicologo" /> },
      { path: "estetica-corporal", element: <NicheLandingPage niche="estetica-corporal" /> },
      { path: "emprendedores", element: <NicheLandingPage niche="emprendedor" /> },
      
      // Redirecciones legacy
      { path: "gimnasio", element: <Navigate to="/gimnasios" replace /> },
      { path: "iron-fitness", element: <Navigate to="/gimnasios" replace /> },
      { path: "personal-trainers", element: <Navigate to="/entrenadores" replace /> },
      { path: "nutricionistas", element: <Navigate to="/nutritionist" replace /> },
      { path: "webs", element: <Navigate to="/" replace /> },
      
      // ... (resto de las rutas)
    ],
  },
];

function SiteLayout() {
  const location = useLocation();
  const seo = getSeoConfigForPath(location.pathname);

  return (
    <>
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
      <AuthProvider>
        <div className="min-h-screen">
          <Outlet />
        </div>
      </AuthProvider>
    </>
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