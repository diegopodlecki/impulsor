import { previewSvg } from "@/components/landing/landingVisuals";

export type LandingImageSet = {
  heroImage: string;
  heroMockupImage: string;
  serviceImages: string[];
};

type ImageSpec = {
  heroTitle: string;
  heroSubtitle: string;
  heroAccentA: string;
  heroAccentB: string;
  mockupTitle: string;
  mockupSubtitle: string;
  mockupAccentA: string;
  mockupAccentB: string;
  serviceSpecs: Array<[string, string, string, string]>;
};

function buildImageSet(spec: ImageSpec): LandingImageSet {
  return {
    heroImage: previewSvg(spec.heroTitle, spec.heroSubtitle, spec.heroAccentA, spec.heroAccentB),
    heroMockupImage: previewSvg(spec.mockupTitle, spec.mockupSubtitle, spec.mockupAccentA, spec.mockupAccentB),
    serviceImages: spec.serviceSpecs.map(([title, subtitle, accentA, accentB]) =>
      previewSvg(title, subtitle, accentA, accentB),
    ),
  };
}

const landingImages: Record<string, LandingImageSet> = {
  default: buildImageSet({
    heroTitle: "Web que convierte",
    heroSubtitle: "Consultas, reservas y ventas",
    heroAccentA: "#0EA5E9",
    heroAccentB: "#10B981",
    mockupTitle: "Propuesta clara",
    mockupSubtitle: "Mensaje, confianza y contacto",
    mockupAccentA: "#0EA5E9",
    mockupAccentB: "#22C55E",
    serviceSpecs: [
      ["Autoridad visual", "Sitios más claros y profesionales", "#0EA5E9", "#10B981"],
      ["Contacto simple", "WhatsApp y formulario visibles", "#10B981", "#0EA5E9"],
      ["Prueba social", "Testimonios y credibilidad", "#22C55E", "#0EA5E9"],
      ["Conversión", "Más consultas y mejores cierres", "#0EA5E9", "#22C55E"],
    ],
  }),
  gimnasio: buildImageSet({
    heroTitle: "Gimnasio",
    heroSubtitle: "Clases, horarios y reservas",
    heroAccentA: "#22C55E",
    heroAccentB: "#06B6D4",
    mockupTitle: "Más socios",
    mockupSubtitle: "Inscripciones y horarios claros",
    mockupAccentA: "#22C55E",
    mockupAccentB: "#0EA5E9",
    serviceSpecs: [
      ["Clases grupales", "Explicá tu propuesta deportiva", "#22C55E", "#06B6D4"],
      ["Horarios claros", "Facilitá la decisión", "#16A34A", "#0EA5E9"],
      ["Instalaciones", "Mostrá el espacio real", "#0EA5E9", "#22C55E"],
      ["Inscripción", "Convertí visitas en alumnos", "#06B6D4", "#22C55E"],
      ["Entrenamiento", "Sumá autoridad y confianza", "#10B981", "#0EA5E9"],
    ],
  }),
  "personal-trainer": buildImageSet({
    heroTitle: "Personal Trainer",
    heroSubtitle: "Resultados y disciplina",
    heroAccentA: "#F97316",
    heroAccentB: "#EF4444",
    mockupTitle: "Marca personal",
    mockupSubtitle: "Sesiones, método y progreso",
    mockupAccentA: "#F97316",
    mockupAccentB: "#EC4899",
    serviceSpecs: [
      ["Método", "Explicá tu forma de entrenar", "#F97316", "#EF4444"],
      ["Resultados", "Mostrá progreso y evidencia", "#EF4444", "#F97316"],
      ["Testimonios", "Generá más confianza", "#F59E0B", "#F97316"],
      ["Planes", "Hacé simple la contratación", "#EC4899", "#F97316"],
    ],
  }),
  nutritionist: buildImageSet({
    heroTitle: "Nutricionista",
    heroSubtitle: "Planes, hábitos y seguimiento",
    heroAccentA: "#84CC16",
    heroAccentB: "#22C55E",
    mockupTitle: "Consulta clara",
    mockupSubtitle: "Turnos y seguimiento profesional",
    mockupAccentA: "#84CC16",
    mockupAccentB: "#10B981",
    serviceSpecs: [
      ["Consultas", "Ordená tu agenda", "#84CC16", "#22C55E"],
      ["Protocolos", "Explicá tu enfoque", "#22C55E", "#84CC16"],
      ["Seguimiento", "Hacé visible el acompañamiento", "#10B981", "#84CC16"],
      ["Contacto", "Convertí dudas en turnos", "#84CC16", "#10B981"],
    ],
  }),
  psicologo: buildImageSet({
    heroTitle: "Psicología",
    heroSubtitle: "Calma, empatía y turnos",
    heroAccentA: "#3B82F6",
    heroAccentB: "#0EA5E9",
    mockupTitle: "Espacio seguro",
    mockupSubtitle: "Cercanía y contacto simple",
    mockupAccentA: "#3B82F6",
    mockupAccentB: "#8B5CF6",
    serviceSpecs: [
      ["Calma visual", "Bajá la fricción", "#3B82F6", "#0EA5E9"],
      ["Acompañamiento", "Transmití contención", "#8B5CF6", "#3B82F6"],
      ["Turnos", "Hacé simple el primer paso", "#0EA5E9", "#3B82F6"],
      ["Confianza", "Mostrá claridad profesional", "#6366F1", "#0EA5E9"],
    ],
  }),
  "estetica-corporal": buildImageSet({
    heroTitle: "Estética corporal",
    heroSubtitle: "Premium, visual y elegante",
    heroAccentA: "#EC4899",
    heroAccentB: "#F97316",
    mockupTitle: "Tratamientos premium",
    mockupSubtitle: "Deseo visual y contacto directo",
    mockupAccentA: "#EC4899",
    mockupAccentB: "#F59E0B",
    serviceSpecs: [
      ["Imagen premium", "Subí la percepción de valor", "#EC4899", "#F97316"],
      ["Tratamientos", "Mostrá lo que hacés", "#F97316", "#EC4899"],
      ["Resultados", "Apoyate en la evidencia", "#F59E0B", "#EC4899"],
      ["Consultas", "Llevá al contacto", "#EC4899", "#F59E0B"],
    ],
  }),
  empreendedor: buildImageSet({
    heroTitle: "LaunchMe",
    heroSubtitle: "Autoridad, claridad y ventas",
    heroAccentA: "#F59E0B",
    heroAccentB: "#10B981",
    mockupTitle: "Oferta clara",
    mockupSubtitle: "Más claridad, más autoridad",
    mockupAccentA: "#F59E0B",
    mockupAccentB: "#0EA5E9",
    serviceSpecs: [
      ["Oferta", "Explicá tu propuesta rápido", "#F59E0B", "#10B981"],
      ["Autoridad", "Mostrá más solidez", "#10B981", "#F59E0B"],
      ["CTA", "Llevá al contacto", "#0EA5E9", "#F59E0B"],
      ["Ventas", "Convertí visitas en clientes", "#F97316", "#10B981"],
    ],
  }),
  "iron-fitness": buildImageSet({
    heroTitle: "Iron Fitness",
    heroSubtitle: "Transformá tu cuerpo",
    heroAccentA: "#111111",
    heroAccentB: "#F97316",
    mockupTitle: "Semana gratis",
    mockupSubtitle: "Clases, horarios y reservas",
    mockupAccentA: "#F97316",
    mockupAccentB: "#22C55E",
    serviceSpecs: [
      ["Musculación", "Equipamiento profesional", "#F97316", "#22C55E"],
      ["Clases", "Entrenamiento grupal", "#22C55E", "#F97316"],
      ["Cardio", "Zona completa para entrenar", "#06B6D4", "#F97316"],
    ],
  }),
};

export function getLandingImages(slug: string) {
  return landingImages[slug] ?? landingImages.default;
}
