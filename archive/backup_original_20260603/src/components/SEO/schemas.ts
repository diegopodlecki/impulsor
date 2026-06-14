import { BASE_SCHEMA, SITE_NAME, SITE_URL } from "@/lib/seo-config";

export type FAQItem = {
  q: string;
  a: string;
};

export type BreadcrumbItem = {
  name: string;
  url: string;
};

type SchemaObject = Record<string, unknown>;

type ServiceSchema = SchemaObject & {
  "@context": "https://schema.org";
  "@type": "Service";
  name: string;
  description: string;
  serviceType: string;
  provider: {
    "@type": "ProfessionalService";
    name: string;
    url: string;
  };
};

type FAQPageSchema = SchemaObject & {
  "@context": "https://schema.org";
  "@type": "FAQPage";
  mainEntity: Array<{
    "@type": "Question";
    name: string;
    acceptedAnswer: {
      "@type": "Answer";
      text: string;
    };
  }>;
};

type BreadcrumbListSchema = SchemaObject & {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }>;
};

export function generateServiceSchema(serviceName: string, description: string): ServiceSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description,
    serviceType: serviceName,
    provider: {
      "@type": "ProfessionalService",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function generateFAQSchema(faqs: FAQItem[]): FAQPageSchema {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]): BreadcrumbListSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getBaseSchema(): typeof BASE_SCHEMA {
  return BASE_SCHEMA;
}
