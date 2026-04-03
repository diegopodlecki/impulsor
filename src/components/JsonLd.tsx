const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "WebAppImpulsor",
  image: "https://webappimpulsor.com/og-image.png",
  url: "https://webappimpulsor.com",
  telephone: "+541166448389",
  address: {
    "@type": "PostalAddress",
    streetAddress: "",
    addressLocality: "Buenos Aires",
    addressRegion: "Ciudad Autónoma de Buenos Aires",
    postalCode: "",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -34.6037,
    longitude: -58.3816,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  currenciesAccepted: "ARS, USD",
  paymentAccepted: "Cash, Bank Transfer, Mercado Pago",
  areaServed: [
    { "@type": "City", name: "Buenos Aires" },
    { "@type": "State", name: "Buenos Aires" },
    { "@type": "Country", name: "Argentina" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de diseño web",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Presencia Básica",
          description: "Landing page profesional en 72 horas",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "149",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Profesional",
          description: "Web completa con hasta 5 secciones, SEO y formulario",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "249",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Todo Incluido",
          description: "Web completa con reservas, blog y 3 meses de soporte",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "399",
          priceCurrency: "USD",
        },
      },
    ],
  },
};

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function JsonLd({ data }: JsonLdProps) {
  const schemas = Array.isArray(data) ? [...data, LOCAL_BUSINESS_SCHEMA] : [data, LOCAL_BUSINESS_SCHEMA];

  return (
    <>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
    </>
  );
}
