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
    iniciales: "LP",
    colorAvatar: "bg-purple-600",
    texto:
      "La diferencia fue la claridad. Ahora llegan personas mejor informadas y con una decisión mucho más avanzada.",
    resultado: "Pasó de 1 a 6 consultas semanales por web en 8 semanas.",
    plan: "Plan Profesional",
    fecha: "2025-01",
    rating: 5,
  },
  {
    id: "2",
    nombre: "Dr. Martin Rivas",
    rubro: "Abogado laboralista · Córdoba",
    iniciales: "MR",
    colorAvatar: "bg-sky-600",
    texto:
      "El cambio real estuvo en cómo se presentó el estudio: más claro, más sólido y mucho más fácil de entender.",
    resultado: "Pasó de consultas esporádicas a 4 a 7 contactos por semana en 2 meses.",
    plan: "Plan Profesional",
    fecha: "2025-02",
    rating: 5,
  },
  {
    id: "3",
    nombre: "Micaela Torres",
    rubro: "Consultora de RRHH · Rosario",
    iniciales: "MT",
    colorAvatar: "bg-emerald-600",
    texto:
      "La web empezó a trabajar a favor de mi marca: mejor primera impresión, mejores reuniones y menos explicaciones repetidas.",
    resultado: "Sumó un flujo estable de 5 a 8 consultas mensuales de empresas en 90 días.",
    plan: "Plan Todo Incluido",
    fecha: "2025-03",
    rating: 5,
  },
  {
    id: "4",
    nombre: "Martín G.",
    rubro: "Socio · Buenos Aires",
    iniciales: "MG",
    colorAvatar: "bg-orange-600",
    texto: "Desde que entreno acá bajé 8 kilos en 3 meses. El equipo es increíble.",
    resultado: "Bajó 8 kilos en 3 meses.",
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
