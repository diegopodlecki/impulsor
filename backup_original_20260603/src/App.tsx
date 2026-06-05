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

const GimnasiosPage = lazy(() => import("./pages/rubros/gimnasios").then(mod => ({ default: mod.default })));
const EntrenadoresPage = lazy(() => import("./pages/rubros/entrenadores").then(mod => ({ default: mod.default })));
const PsicologosPage = lazy(() => import("./pages/rubros/psicologos").then(mod => ({ default: mod.default })));
const NutricionistasPage = lazy(() => import("./pages/rubros/nutricionistas").then(mod => ({ default: mod.default })));
const EsteticaPage = lazy(() => import("./pages/rubros/estetica-corporal").then(mod => ({ default: mod.default })));

const clearDiagnosticHash = () => {
  if (typeof window === "undefined") return;

  if (window.location.hash === "#diagnostico") {
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
  }
};

import NicheLandingPage from "./pages/NicheLandingPage.tsx";

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="text-white/50">Cargando...</div>
    </div>
  );
}

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <SiteLayout />,
    children: [
      { index: true, element: <Index /> },
      
      // Páginas de rubros con lazy loading
      { path: "gimnasios", element: <Suspense fallback={<LoadingFallback />}><GimnasiosPage /></Suspense> },
      { path: "entrenadores", element: <Suspense fallback={<LoadingFallback />}><EntrenadoresPage /></Suspense> },
      { path: "nutricionistas", element: <Suspense fallback={<LoadingFallback />}><NutricionistasPage /></Suspense> },
      { path: "psicologos", element: <Suspense fallback={<LoadingFallback />}><PsicologosPage /></Suspense> },
      { path: "estetica-corporal", element: <Suspense fallback={<LoadingFallback />}><EsteticaPage /></Suspense> },
      { path: "emprendedores", element: <NicheLandingPage niche="casa-de-comidas" /> },
      
      // Redirecciones legacy
      { path: "gimnasio", element: <Navigate to="/gimnasios" replace /> },
      { path: "iron-fitness", element: <Navigate to="/gimnasios" replace /> },
      { path: "personal-trainers", element: <Navigate to="/entrenadores" replace /> },
      { path: "nutritionist", element: <Navigate to="/nutricionistas" replace /> },
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