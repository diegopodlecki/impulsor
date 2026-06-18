const siteUrl = "https://webappimpulsor.com.ar";
const logoUrl = `${siteUrl}/favicon.svg`;
const contactUrl = `${siteUrl}/#contacto`;

const faqQuestions = [
  {
    question: "¿Necesito tener una cuenta de WhatsApp Business?",
    answer:
      "Sí, necesitás una cuenta de WhatsApp Business API. Te ayudamos a gestionarla con Meta y a dejarla lista para trabajar con tu negocio.",
  },
  {
    question: "¿Cuánto tarda en estar listo mi bot?",
    answer:
      "El promedio es de 5 a 7 días hábiles. En la primera semana hacemos la configuración, cargamos tus servicios y probamos el flujo.",
  },
  {
    question: "¿El bot reemplaza a mis empleados?",
    answer:
      "No, los potencia. Atiende las consultas repetitivas y los agendados para que tu equipo se enfoque en tareas de más valor.",
  },
  {
    question: "¿Puedo ver las conversaciones que tiene el bot?",
    answer:
      "Sí, tenés acceso a un panel con las conversaciones, etiquetas, métricas y la posibilidad de intervenir manualmente en cualquier chat.",
  },
  {
    question: "¿Cómo es la forma de pago?",
    answer:
      "Aceptamos transferencia bancaria, Mercado Pago y tarjeta. Facturamos en pesos argentinos según tu condición frente al IVA.",
  },
  {
    question: "¿Qué pasa si la IA no sabe responder?",
    answer:
      "El bot detecta cuándo no sabe algo y deriva la conversación a un humano con todo el contexto de lo que ya se habló.",
  },
  {
    question: "¿Atienden en zonas de CABA y GBA?",
    answer:
      "Sí, trabajamos con profesionales de Buenos Aires y también de forma remota para el resto del país.",
  },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WebApp Impulsor",
  url: siteUrl,
  logo: logoUrl,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      areaServed: "AR",
      availableLanguage: ["es"],
      url: contactUrl,
    },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "WebApp Impulsor",
  url: siteUrl,
  logo: logoUrl,
  image: `${siteUrl}/og-image.png`,
  telephone: "+54 9 11 0000-0000",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Buenos Aires",
    addressRegion: "Buenos Aires",
    addressCountry: "AR",
  },
  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Buenos Aires",
    },
    {
      "@type": "AdministrativeArea",
      name: "CABA",
    },
    {
      "@type": "AdministrativeArea",
      name: "GBA",
    },
    {
      "@type": "AdministrativeArea",
      name: "Zona Sur",
    },
    "Argentina",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqQuestions.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "WebApp Impulsor",
  url: siteUrl,
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function StructuredData() {
  return (
    <>
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
    </>
  );
}
