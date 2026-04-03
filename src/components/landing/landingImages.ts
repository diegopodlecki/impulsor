import { previewSvg } from "@/components/landing/landingVisuals";

export type LandingImageSet = {
  heroImage: string;
  heroMockupImage: string;
  serviceImages: string[];
};

type ImageConfig = {
  heroTitle: string;
  heroSubtitle: string;
  mockupTitle: string;
  mockupSubtitle: string;
  services: Array<{ title: string; subtitle: string }>;
  accentA: string;
  accentB: string;
};

function makeImageSet(config: ImageConfig): LandingImageSet {
  return {
    heroImage: previewSvg(config.heroTitle, config.heroSubtitle, config.accentA, config.accentB),
    heroMockupImage: previewSvg(config.mockupTitle, config.mockupSubtitle, config.accentB, config.accentA),
    serviceImages: config.services.map((service, index) =>
      previewSvg(
        service.title,
        service.subtitle,
        index % 2 === 0 ? config.accentA : config.accentB,
        index % 2 === 0 ? config.accentB : config.accentA,
      ),
    ),
  };
}

const landingImages: Record<string, LandingImageSet> = {
  default: makeImageSet({
    heroTitle: "Presencia clara",
    heroSubtitle: "Consultas, confianza y WhatsApp",
    mockupTitle: "Sitio listo para vender",
    mockupSubtitle: "Lo esencial sin ruido visual",
    accentA: "#22c55e",
    accentB: "#3b82f6",
    services: [
      { title: "Mensaje principal", subtitle: "Tu propuesta en segundos" },
      { title: "Prueba social", subtitle: "Más confianza al decidir" },
      { title: "Contacto simple", subtitle: "Menos fricción, más consultas" },
      { title: "Conversión", subtitle: "CTA claro y visible" },
    ],
  }),
  gimnasios: makeImageSet({
    heroTitle: "Gimnasio con más alumnos",
    heroSubtitle: "Clases, horarios y reservas",
    mockupTitle: "Inscripciones desde la web",
    mockupSubtitle: "Entrenamiento con CTA claro",
    accentA: "#22c55e",
    accentB: "#06b6d4",
    services: [
      { title: "Hero impactante", subtitle: "Tu gimnasio en primer plano" },
      { title: "Clases y horarios", subtitle: "Todo en un vistazo" },
      { title: "Galería real", subtitle: "Instalaciones que generan confianza" },
      { title: "Formulario", subtitle: "Dejan sus datos sin fricción" },
      { title: "WhatsApp", subtitle: "Contacto inmediato" },
    ],
  }),
  "personal-trainers": makeImageSet({
    heroTitle: "Marca personal premium",
    heroSubtitle: "Resultados, método y disciplina",
    mockupTitle: "Entrenamiento que convierte",
    mockupSubtitle: "Sesiones, progreso y prueba social",
    accentA: "#f97316",
    accentB: "#ef4444",
    services: [
      { title: "Propuesta clara", subtitle: "Qué hacés y para quién" },
      { title: "Tu método", subtitle: "Cómo trabajás el progreso" },
      { title: "Resultados", subtitle: "Antes y después visibles" },
      { title: "Planes", subtitle: "Opciones fáciles de elegir" },
    ],
  }),
  nutricionistas: makeImageSet({
    heroTitle: "Consultorio que da confianza",
    heroSubtitle: "Orden, claridad y seguimiento",
    mockupTitle: "Atención más clara",
    mockupSubtitle: "Servicios, turnos y contacto",
    accentA: "#84cc16",
    accentB: "#22c55e",
    services: [
      { title: "Hero profesional", subtitle: "Tu enfoque en una frase" },
      { title: "Servicios", subtitle: "Consultas y tratamientos" },
      { title: "Sobre vos", subtitle: "Formación y experiencia" },
      { title: "Formulario", subtitle: "Turnos simples y ordenados" },
    ],
  }),
  psicologos: makeImageSet({
    heroTitle: "Espacio seguro y cálido",
    heroSubtitle: "Calma, empatía y contacto",
    mockupTitle: "Primer paso más humano",
    mockupSubtitle: "Claridad sin sobrecargar",
    accentA: "#8b5cf6",
    accentB: "#06b6d4",
    services: [
      { title: "Hero empático", subtitle: "Cercanía desde el inicio" },
      { title: "Tu enfoque", subtitle: "Cómo acompañás procesos" },
      { title: "FAQ útil", subtitle: "Resolvés dudas comunes" },
      { title: "Contacto simple", subtitle: "Menos fricción para consultar" },
    ],
  }),
  "estetica-corporal": makeImageSet({
    heroTitle: "Imagen premium y resultados",
    heroSubtitle: "Tratamientos, deseo y confianza",
    mockupTitle: "Consultas más elegantes",
    mockupSubtitle: "Antes y después con más impacto",
    accentA: "#ec4899",
    accentB: "#f59e0b",
    services: [
      { title: "Hero visual", subtitle: "Tu propuesta se ve premium" },
      { title: "Tratamientos", subtitle: "Servicios claros y ordenados" },
      { title: "Resultados", subtitle: "Prueba visual que convence" },
      { title: "CTA fuerte", subtitle: "Más consultas sin dudas" },
    ],
  }),
  emprendedores: makeImageSet({
    heroTitle: "Oferta clara y autoridad",
    heroSubtitle: "Menos ruido, más consultas",
    mockupTitle: "Negocio que convierte",
    mockupSubtitle: "Propuesta y prueba social",
    accentA: "#0ea5e9",
    accentB: "#10b981",
    services: [
      { title: "Propuesta", subtitle: "Qué hacés y por qué importa" },
      { title: "Autoridad", subtitle: "Casos y credibilidad" },
      { title: "Conversión", subtitle: "CTA visible y directo" },
      { title: "WhatsApp", subtitle: "Contacto simple" },
    ],
  }),
  "iron-fitness": makeImageSet({
    heroTitle: "La landing original",
    heroSubtitle: "Fitness, energía y acción",
    mockupTitle: "Versión completa",
    mockupSubtitle: "Un ejemplo real del sistema",
    accentA: "#22c55e",
    accentB: "#06b6d4",
    services: [
      { title: "Entrenamiento", subtitle: "Rutinas y resultados" },
      { title: "Horario", subtitle: "Clases en un vistazo" },
      { title: "Inscripción", subtitle: "Más socios en menos fricción" },
    ],
  }),
};

export function getLandingImages(slug: string) {
  return landingImages[slug] ?? landingImages.default;
}
