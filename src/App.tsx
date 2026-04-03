import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import type { RouteRecord } from "vite-react-ssg";

import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
import { SeoHead } from "@/components/SEO/SeoHead";
import { generateServiceSchema } from "@/components/SEO/schemas";
import ProtectedRoute from "@/components/ProtectedRoute.tsx";
import { LeadCaptureSystem } from "@/components/leads/LeadCaptureSystem";
import { Toaster } from "@/components/ui/sonner.tsx";
import { landingPages } from "@/data/landings";
import {
  BASE_SCHEMA,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  DEFAULT_TITLE,
  SITE_URL,
} from "@/lib/seo-config";
import Admin from "./pages/Admin.tsx";
import Emprendedores from "./pages/Emprendedores.tsx";
import EsteticaCorporal from "./pages/EsteticaCorporal.tsx";
import Gimnasios from "./pages/Gimnasios.tsx";
import Index from "./pages/Index.tsx";
import IronFitness from "./pages/IronFitness.tsx";
import Login from "./pages/Login.tsx";
import Nutricionistas from "./pages/Nutricionistas.tsx";
import PersonalTrainers from "./pages/PersonalTrainers.tsx";
import Psicologos from "./pages/Psicologos.tsx";
import Register from "./pages/Register.tsx";
import { AuthProvider } from "./contexts/AuthContext";

type SeoConfig = {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  noIndex?: boolean;
  schema?: Record<string, unknown> | Record<string, unknown>[];
};

const clearDiagnosticHash = () => {
  if (typeof window === "undefined") return;

  if (window.location.hash === "#diagnostico") {
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
  }
};

const landingSeo: Record<string, SeoConfig> = {
  "/": {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    canonical: SITE_URL,
    ogImage: DEFAULT_OG_IMAGE,
    schema: BASE_SCHEMA,
  },
  "/gimnasios": {
    title: landingPages.gimnasios.title,
    description: landingPages.gimnasios.heroSubtitle,
    canonical: `${SITE_URL}/gimnasios`,
    ogImage: landingPages.gimnasios.heroImage,
    schema: generateServiceSchema(landingPages.gimnasios.title, landingPages.gimnasios.heroSubtitle),
  },
  "/entrenadores": {
    title: landingPages["personal-trainers"].title,
    description: landingPages["personal-trainers"].heroSubtitle,
    canonical: `${SITE_URL}/entrenadores`,
    ogImage: landingPages["personal-trainers"].heroImage,
    schema: generateServiceSchema(
      landingPages["personal-trainers"].title,
      landingPages["personal-trainers"].heroSubtitle,
    ),
  },
  "/nutricionistas": {
    title: landingPages.nutricionistas.title,
    description: landingPages.nutricionistas.heroSubtitle,
    canonical: `${SITE_URL}/nutricionistas`,
    ogImage: landingPages.nutricionistas.heroImage,
    schema: generateServiceSchema(landingPages.nutricionistas.title, landingPages.nutricionistas.heroSubtitle),
  },
  "/psicologos": {
    title: landingPages.psicologos.title,
    description: landingPages.psicologos.heroSubtitle,
    canonical: `${SITE_URL}/psicologos`,
    ogImage: landingPages.psicologos.heroImage,
    schema: generateServiceSchema(landingPages.psicologos.title, landingPages.psicologos.heroSubtitle),
  },
  "/estetica-corporal": {
    title: landingPages["estetica-corporal"].title,
    description: landingPages["estetica-corporal"].heroSubtitle,
    canonical: `${SITE_URL}/estetica-corporal`,
    ogImage: landingPages["estetica-corporal"].heroImage,
    schema: generateServiceSchema(
      landingPages["estetica-corporal"].title,
      landingPages["estetica-corporal"].heroSubtitle,
    ),
  },
  "/gimnasio": {
    title: landingPages["iron-fitness"].title,
    description: landingPages["iron-fitness"].heroSubtitle,
    canonical: `${SITE_URL}/gimnasio`,
    ogImage: landingPages["iron-fitness"].heroImage,
    schema: generateServiceSchema(landingPages["iron-fitness"].title, landingPages["iron-fitness"].heroSubtitle),
  },
  "/emprendedores": {
    title: landingPages.emprendedores.title,
    description: landingPages.emprendedores.heroSubtitle,
    canonical: `${SITE_URL}/emprendedores`,
    ogImage: landingPages.emprendedores.heroImage,
    schema: generateServiceSchema(landingPages.emprendedores.title, landingPages.emprendedores.heroSubtitle),
  },
  "/login": {
    title: "Acceso privado",
    description: DEFAULT_DESCRIPTION,
    canonical: `${SITE_URL}/login`,
    ogImage: DEFAULT_OG_IMAGE,
    noIndex: true,
  },
  "/register": {
    title: "Registro privado",
    description: DEFAULT_DESCRIPTION,
    canonical: `${SITE_URL}/register`,
    ogImage: DEFAULT_OG_IMAGE,
    noIndex: true,
  },
  "/admin": {
    title: "Panel privado",
    description: DEFAULT_DESCRIPTION,
    canonical: `${SITE_URL}/admin`,
    ogImage: DEFAULT_OG_IMAGE,
    noIndex: true,
  },
  "/personal-trainers": {
    title: landingPages["personal-trainers"].title,
    description: landingPages["personal-trainers"].heroSubtitle,
    canonical: `${SITE_URL}/entrenadores`,
    ogImage: landingPages["personal-trainers"].heroImage,
    noIndex: true,
    schema: generateServiceSchema(
      landingPages["personal-trainers"].title,
      landingPages["personal-trainers"].heroSubtitle,
    ),
  },
  "/iron-fitness": {
    title: landingPages["iron-fitness"].title,
    description: landingPages["iron-fitness"].heroSubtitle,
    canonical: `${SITE_URL}/gimnasio`,
    ogImage: landingPages["iron-fitness"].heroImage,
    noIndex: true,
    schema: generateServiceSchema(landingPages["iron-fitness"].title, landingPages["iron-fitness"].heroSubtitle),
  },
  "/dashboard": {
    title: "Panel privado",
    description: DEFAULT_DESCRIPTION,
    canonical: `${SITE_URL}/admin`,
    ogImage: DEFAULT_OG_IMAGE,
    noIndex: true,
  },
};

function normalizePath(pathname: string) {
  if (!pathname || pathname === "/") return "/";
  const stripped = pathname.replace(/\/+$/, "");
  return stripped || "/";
}

function getSeoConfig(pathname: string): SeoConfig {
  return landingSeo[normalizePath(pathname)] ?? {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    canonical: SITE_URL,
    ogImage: DEFAULT_OG_IMAGE,
    noIndex: true,
  };
}

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
  const seo = getSeoConfig(location.pathname);

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
      <AnalyticsProvider />
      <LeadCaptureSystem />
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
