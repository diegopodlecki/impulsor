export const SITE_URL = "https://www.webappimpulsor.com";
export const SITE_NAME = "WebAppImpulsor";
export const DEFAULT_TITLE = "WebAppImpulsor | Diseño web para gimnasios, psicólogos y servicios en Argentina";
export const DEFAULT_DESCRIPTION =
  "Creamos landing pages profesionales para gimnasios, personal trainers, psicólogos, nutricionistas y más. Tu web online en 7 días. Primera consulta gratis. Argentina.";
export const DEFAULT_OG_IMAGE = "https://webappimpulsor.com/og-image.png";
export const WHATSAPP_NUMBER = "541166448389";

export type SchemaDayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export interface OpeningHoursSpecification {
  "@type": "OpeningHoursSpecification";
  dayOfWeek: SchemaDayOfWeek[];
  opens: string;
  closes: string;
}

export interface PostalAddressSchema {
  "@type": "PostalAddress";
  addressLocality: string;
  addressRegion: string;
  addressCountry: string;
}

export interface ContactPointSchema {
  "@type": "ContactPoint";
  contactType: string;
  telephone: string;
  availableLanguage: string;
}

export interface CountrySchema {
  "@type": "Country";
  name: string;
}

export interface ProfessionalServiceSchema {
  "@context": "https://schema.org";
  "@type": "ProfessionalService";
  name: string;
  url: string;
  logo: string;
  description: string;
  address: PostalAddressSchema;
  telephone: string;
  contactPoint: ContactPointSchema;
  areaServed: CountrySchema;
  serviceType: string[];
  priceRange: string;
  openingHoursSpecification: OpeningHoursSpecification[];
  sameAs: string[];
}

export const BASE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.svg`,
  description:
    "Creación de páginas web profesionales para entrenadores, psicólogos, nutricionistas y profesionales independientes en Argentina. Webs diseñadas para recibir consultas por WhatsApp.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Buenos Aires",
    addressRegion: "CABA",
    addressCountry: "AR",
  },
  telephone: `+${WHATSAPP_NUMBER}`,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: `+${WHATSAPP_NUMBER}`,
    availableLanguage: "Spanish",
  },
  areaServed: {
    "@type": "Country",
    name: "Argentina",
  },
  serviceType: [
    "Diseño web",
    "Desarrollo web",
    "Páginas web para profesionales",
    "Integración con WhatsApp",
  ],
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  sameAs: [],
} satisfies ProfessionalServiceSchema;

export type SeoConfig = {
  siteUrl: string;
  siteName: string;
  defaultTitle: string;
  defaultDescription: string;
  defaultOgImage: string;
  whatsappNumber: string;
  baseSchema: ProfessionalServiceSchema;
};

export const SITE_CONFIG: SeoConfig = {
  siteUrl: SITE_URL,
  siteName: SITE_NAME,
  defaultTitle: DEFAULT_TITLE,
  defaultDescription: DEFAULT_DESCRIPTION,
  defaultOgImage: DEFAULT_OG_IMAGE,
  whatsappNumber: WHATSAPP_NUMBER,
  baseSchema: BASE_SCHEMA,
};
