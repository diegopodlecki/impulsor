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
          name: "Web que convierte clientes",
          description: "Página web profesional optimizada para convertir visitas en consultas y clientes",
        },
      },
    ],
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuesta una página web que convierte clientes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende del rubro y funcionalidades. La mayoría de nuestros clientes arrancan con planes desde $XXX. Primera consulta sin cargo para darte un presupuesto exacto."
      }
    },
    {
      "@type": "Question",
      name: "¿En cuánto tiempo mi web profesional está funcionando?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Entre 5 y 10 días hábiles, dependiendo de la complejidad. Muchas webs están funcionando en menos de una semana."
      }
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si mi web no me trae consultas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trabajamos con vos para optimizarla. Si después de 30 días no ves resultados, ajustamos sin costo adicional."
      }
    },
    {
      "@type": "Question",
      name: "¿Necesito conocimientos técnicos para mantener mi web?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Nosotros manejamos todo: hosting, dominio, configuración. Vos solo tenés que revisar tu WhatsApp."
      }
    }
  ]
};

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function JsonLd({ data }: JsonLdProps) {
  const schemas = Array.isArray(data) ? [...data, LOCAL_BUSINESS_SCHEMA, FAQ_SCHEMA] : [data, LOCAL_BUSINESS_SCHEMA, FAQ_SCHEMA];

  return (
    <>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
    </>
  );
}
