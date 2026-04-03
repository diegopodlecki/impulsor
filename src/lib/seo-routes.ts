import { landingPages } from "@/data/landings";
import { generateServiceSchema } from "@/components/SEO/schemas";
import type { SeoHeadProps } from "@/components/SEO/SeoHead";
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

  return {
    title: landing.title,
    description: landing.heroSubtitle,
    canonical: `${SITE_URL}${path}`,
    ogImage: landing.heroImage,
    schema: generateServiceSchema(landing.title, landing.heroSubtitle),
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
  "/gimnasios": buildLandingSeoConfig("/gimnasios", "gimnasios"),
  "/entrenadores": buildLandingSeoConfig("/entrenadores", "personal-trainers"),
  "/nutricionistas": buildLandingSeoConfig("/nutricionistas", "nutricionistas"),
  "/psicologos": buildLandingSeoConfig("/psicologos", "psicologos"),
  "/estetica-corporal": buildLandingSeoConfig("/estetica-corporal", "estetica-corporal"),
  "/gimnasio": buildLandingSeoConfig("/gimnasio", "iron-fitness"),
  "/emprendedores": buildLandingSeoConfig("/emprendedores", "emprendedores"),
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
} satisfies Record<string, SeoRouteConfig>;

export function getSeoConfigForPath(pathname: string): SeoRouteConfig {
  return SEO_ROUTE_CONFIGS[normalizePath(pathname)] ?? {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    canonical: SITE_URL,
    ogImage: DEFAULT_OG_IMAGE,
    noIndex: true,
  };
}

