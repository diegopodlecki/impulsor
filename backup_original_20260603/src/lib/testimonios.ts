export interface Testimonio {
  id: string;
  nombre: string;
  rubro: string;
  foto?: string;
  iniciales: string;
  colorAvatar: string;
  texto: string;
  resultado?: string;
  plan: string;
  fecha: string;
  rating: 5;
}

export const TESTIMONIOS: Testimonio[] = [
  {
    id: "1",
    nombre: "Dra. Luciana Perez",
    rubro: "Psicóloga · CABA",
    foto: "/testimonios/luciana-perez.jpg",
    iniciales: "LP",
    colorAvatar: "bg-purple-600",
    texto:
      "Pasé de tener 1 consulta cada 2 semanas (casi todas de Instagram) a recibir 6 consultas semanales, la mayoría por WhatsApp directo desde Google. En 2 meses.",
    resultado: "De 1 consulta/2 semanas → 6 consultas/semana en 60 días",
    plan: "Plan Profesional",
    fecha: "2025-01",
    rating: 5,
  },
  {
    id: "2",
    nombre: "Coach Carlos Vega",
    rubro: "Personal Trainer · Palermo",
    foto: "/testimonios/carlos-vega.jpg",
    iniciales: "CV",
    colorAvatar: "bg-orange-600",
    texto:
      "No aparecía en Google y dependía 100% del boca a boca. En 30 días ya tenía 8 alumnos nuevos que me encontraron buscando 'personal trainer Palermo'. Mi agenda se llenó sola.",
    resultado: "De 0 presencia online → 8 alumnos nuevos en 30 días",
    plan: "Plan Profesional",
    fecha: "2025-02",
    rating: 5,
  },
  {
    id: "3",
    nombre: "Lic. Ana Martínez",
    rubro: "Nutricionista · Recoleta",
    foto: "/testimonios/ana-martinez.jpg",
    iniciales: "AM",
    colorAvatar: "bg-emerald-600",
    texto:
      "Tenía una web fea que nunca convertía. Me costaba explicar mis planes en cada consulta. Ahora los pacientes llegan sabiendo qué quiero y ya tienen confianza. Mi agenda se llenó en 6 semanas.",
    resultado: "De web que no convertía → agenda llena en 45 días",
    plan: "Plan Profesional",
    fecha: "2025-03",
    rating: 5,
  },
  {
    id: "4",
    nombre: "Patricia Solís",
    rubro: "Centro de Estética · Núñez",
    foto: "/testimonios/patricia-solis.jpg",
    iniciales: "PS",
    colorAvatar: "bg-pink-600",
    texto:
      "Dependía de Instagram y las recomendaciones. Un mes después de la web, ya tenía clientas nuevas que me escribían preguntando por tratamientos específicos. Sin esfuerzo mío.",
    resultado: "De 0 canales propios → clientas nuevas todos los días",
    plan: "Plan Profesional",
    fecha: "2025-04",
    rating: 5,
  },
];

export const RUBROS_ATENDIDOS = [
  { label: "💪 Personal Trainers", href: "/webs/personal-trainer" },
  { label: "🧠 Psicólogos", href: "/webs/psicologo" },
  { label: "🥗 Nutricionistas", href: "/webs/nutricionista" },
  { label: "🏋️ Gimnasios", href: "/webs/gimnasio" },
  { label: "🍱 Casas de Comidas", href: "/webs/casa-de-comidas" },
  { label: "✨ Centros de Estética", href: "/webs/estetica-corporal" },
];

export function getTestimonialsJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "WebAppImpulsor",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: String(TESTIMONIOS.length),
      bestRating: "5",
      worstRating: "5",
    },
    review: TESTIMONIOS.map((testimonial) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: testimonial.nombre,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(testimonial.rating),
      },
      reviewBody: testimonial.texto,
    })),
  };
}
