import { Head } from "vite-react-ssg";

import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  DEFAULT_TITLE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo-config";

type SeoSchema = Record<string, unknown>;

export type SeoHeadProps = {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  noIndex?: boolean;
  schema?: SeoSchema | SeoSchema[];
};

function normalizeDescription(description: string) {
  const trimmed = description.trim();
  if (trimmed.length <= 160) return trimmed;
  return `${trimmed.slice(0, 157).trimEnd()}...`;
}

function normalizeCanonical(canonical?: string) {
  if (!canonical) return SITE_URL;
  if (/^https?:\/\//i.test(canonical)) return canonical;
  return new URL(canonical, SITE_URL).toString();
}

function buildTitle(title: string) {
  const trimmed = title.trim();
  if (!trimmed) return DEFAULT_TITLE;
  if (trimmed === DEFAULT_TITLE || trimmed.includes(SITE_NAME)) return trimmed;
  return `${trimmed} | ${SITE_NAME}`;
}

function toSchemaArray(schema?: SeoSchema | SeoSchema[]) {
  if (!schema) return [];
  return Array.isArray(schema) ? schema : [schema];
}

export function SeoHead({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  noIndex = false,
  schema,
}: SeoHeadProps) {
  const pageTitle = buildTitle(title);
  const pageDescription = normalizeDescription(description || DEFAULT_DESCRIPTION);
  const pageCanonical = normalizeCanonical(canonical);
  const robotsContent = noIndex ? "noindex,nofollow" : "index,follow";
  const schemas = toSchemaArray(schema);

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content="diseño web argentina, landing page gimnasio, web para psicólogo, web para nutricionista, landing page servicios, web profesional rápida" />
      <meta name="author" content="WebAppImpulsor" />
      <link rel="canonical" href={pageCanonical} />

      <meta property="og:title" content="WebAppImpulsor | Tu web en 7 días" />
      <meta property="og:description" content="Landing pages para negocios de servicios en Argentina. Más clientes desde el primer mes." />
      <meta property="og:url" content={pageCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content="es_AR" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image:alt" content={pageTitle} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={pageTitle} />

      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />

      {schemas.map((item, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </Head>
  );
}
