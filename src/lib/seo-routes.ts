import { landingPages } from "@/data/landings";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/components/SEO/schemas";
import type { SeoHeadProps } from "@/components/SEO/SeoHead";
import { FAQ_ITEMS } from "@/lib/faq";
import { findRubroBySlug } from "@/lib/rubros";
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

  return {
    title: landing.title,
    description: landing.heroSubtitle,
    canonical: `${SITE_URL}${path}`,
    ogImage: landing.heroImage,
    schema: generateServiceSchema(landing.title, landing.heroSubtitle),
  };
}

function buildWebsIndexSeoConfig(): SeoRouteConfig {
  return {
    title: "Webs profesionales para cada rubro",
    description:
      "Diseñadas específicamente para tu tipo de negocio y pensadas para rankear por búsquedas de rubro en Argentina.",
    canonical: `${SITE_URL}/webs`,
    ogImage: DEFAULT_OG_IMAGE,
    schema: generateBreadcrumbSchema([
      { name: "Inicio", url: SITE_URL },
      { name: "Webs por Rubro", url: `${SITE_URL}/webs` },
    ]),
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

function buildRubroSeoConfig(slug: string): SeoRouteConfig | undefined {
  const rubro = findRubroBySlug(slug);
  if (!rubro) return undefined;

  return {
    title: `Página web para ${rubro.nombrePlural} en Buenos Aires`,
    description: `${rubro.descripcion} Pensada para búsquedas como ${rubro.localKeywords[0]}.`,
    canonical: `${SITE_URL}/webs/${rubro.slug}`,
    ogImage: `${SITE_URL}/og-${rubro.slug}.png`,
    schema: [
      generateServiceSchema(`Página web para ${rubro.nombrePlural} en Buenos Aires`, rubro.descripcion),
      generateBreadcrumbSchema([
        { name: "Inicio", url: SITE_URL },
        { name: "Webs por Rubro", url: `${SITE_URL}/webs` },
        { name: rubro.nombrePlural, url: `${SITE_URL}/webs/${rubro.slug}` },
      ]),
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
  "/gimnasios": buildLandingSeoConfig("/gimnasios", "gimnasios"),
  "/entrenadores": buildLandingSeoConfig("/entrenadores", "personal-trainers"),
  "/nutricionistas": buildLandingSeoConfig("/nutricionistas", "nutricionistas"),
  "/psicologos": buildLandingSeoConfig("/psicologos", "psicologos"),
  "/estetica-corporal": buildLandingSeoConfig("/estetica-corporal", "estetica-corporal"),
  "/gimnasio": buildLandingSeoConfig("/gimnasio", "iron-fitness"),
  "/emprendedores": buildLandingSeoConfig("/emprendedores", "emprendedores"),
  "/webs": buildWebsIndexSeoConfig(),
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
  const normalized = normalizePath(pathname);
  const rubroMatch = normalized.match(/^\/webs\/([^/]+)$/);

  if (rubroMatch) {
    const rubroSeo = buildRubroSeoConfig(decodeURIComponent(rubroMatch[1]));
    if (rubroSeo) return rubroSeo;
  }

  return SEO_ROUTE_CONFIGS[normalized] ?? {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    canonical: SITE_URL,
    ogImage: DEFAULT_OG_IMAGE,
    noIndex: true,
  };
}
