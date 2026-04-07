import { landingPages } from "@/data/landings";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/components/SEO/schemas";
import type { SeoHeadProps } from "@/components/SEO/SeoHead";
import { FAQ_ITEMS } from "@/lib/faq";
import { generateFAQSchema } from "@/components/SEO/schemas";
import { DEFAULT_DESCRIPTION, DEFAULT_OG_IMAGE, DEFAULT_TITLE, SITE_URL } from "@/lib/seo-config";

export type SeoRouteConfig = Pick<
  SeoHeadProps,
  "title" | "description" | "canonical" | "ogImage" | "ogType" | "noIndex" | "schema"
>;

type LandingSeoConfig = SeoRouteConfig & {
  canonical: string;
  ogImage: string;
};

function normalizePath(pathname: string) {
  if (!pathname || pathname === "/") return "/";
  const stripped = pathname.replace(/\/+$/, "");
  return stripped || "/";
}

function buildLandingSeoConfig(path: string, landingKey: keyof typeof landingPages): LandingSeoConfig {
  const landing = landingPages[landingKey];

  if (!landing) {
    console.error(`[SEO] Landing not found for key: ${landingKey} at path: ${path}`);
    return {
      title: "WebAppImpulsor",
      description: "Diseño web para profesionales",
      canonical: `${SITE_URL}${path}`,
      ogImage: DEFAULT_OG_IMAGE,
      schema: null,
    };
  }

  return {
    title: landing.title,
    description: landing.heroSubtitle,
    canonical: `${SITE_URL}${path}`,
    ogImage: landing.heroImage,
    schema: generateServiceSchema(landing.title, landing.heroSubtitle),
  };
}

function buildFaqSeoConfig(): SeoRouteConfig {
  return {
    title: "Preguntas Frecuentes | WebAppImpulsor",
    description:
      "Respondemos todas tus dudas sobre diseño web para profesionales en Argentina. Precios, plazos, proceso y garantías.",
    canonical: `${SITE_URL}/faq`,
    ogImage: DEFAULT_OG_IMAGE,
    schema: [
      generateBreadcrumbSchema([
        { name: "Inicio", url: SITE_URL },
        { name: "Preguntas frecuentes", url: `${SITE_URL}/faq` },
      ]),
      generateFAQSchema(FAQ_ITEMS),
    ],
  };
}

export const SEO_ROUTE_CONFIGS = {
  "/": {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    canonical: SITE_URL,
    ogImage: DEFAULT_OG_IMAGE,
    schema: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "WebAppImpulsor",
      url: SITE_URL,
    },
  },
  "/gimnasios": buildLandingSeoConfig("/gimnasios", "gimnasio"),
  "/entrenadores": buildLandingSeoConfig("/entrenadores", "personal-trainer"),
  "/nutricionistas": buildLandingSeoConfig("/nutricionistas", "nutricionista"),
  "/psicologos": buildLandingSeoConfig("/psicologos", "psicologo"),
  "/estetica-corporal": buildLandingSeoConfig("/estetica-corporal", "estetica-corporal"),
  "/emprendedores": buildLandingSeoConfig("/emprendedores", "emprendedor"),
  "/faq": buildFaqSeoConfig(),
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
  "/dashboard": {
    title: "Panel privado",
    description: DEFAULT_DESCRIPTION,
    canonical: `${SITE_URL}/admin`,
    ogImage: DEFAULT_OG_IMAGE,
    noIndex: true,
  },
} satisfies Record<string, SeoRouteConfig>;

export function getSeoConfigForPath(pathname: string): SeoRouteConfig {
  const normalized = normalizePath(pathname);
  return SEO_ROUTE_CONFIGS[normalized] ?? {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    canonical: SITE_URL,
    ogImage: DEFAULT_OG_IMAGE,
    noIndex: true,
  };
}
