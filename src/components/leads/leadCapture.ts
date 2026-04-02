import { landingPages } from "@/data/landings";

export const WHATSAPP_NUMBER = "541166448389";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const leadBusinessOptions = [
  "Psicólogo",
  "Abogado",
  "Consultor",
  "Coach",
  "Nutricionista",
  "Gimnasio",
  "Estética corporal",
  "Otro",
];

export const leadBudgetOptions = [
  "Menos de AR$ 500.000",
  "AR$ 500.000 a AR$ 1.000.000",
  "AR$ 1.000.000 a AR$ 2.000.000",
  "Más de AR$ 2.000.000",
];

export const leadMagnetOffer = {
  eyebrow: "Lead magnet",
  title: "Mini-guía: 5 errores que alejan clientes de tu web",
  description:
    "Un recurso corto y útil para detectar por qué tu web no convierte y qué ajustar primero para empezar a recibir mejores consultas.",
  bullets: [
    "Detectá los errores que frenan consultas",
    "Priorizá cambios rápidos con impacto real",
    "Recibí un resumen simple por email",
  ],
};

const homeSectionMessages: Record<string, string> = {
  hero: "Hola, vi la propuesta de WebAppImpulsor y quiero una web para mi negocio.",
  problema: "Hola, tengo una web que no convierte y quiero ordenarla para generar más consultas.",
  solucion: "Hola, quiero una web clara y profesional para captar más clientes.",
  rubros: "Hola, quiero ver una propuesta para mi rubro y entender qué me conviene.",
  pruebaSocial: "Hola, me interesó lo que muestran de resultados y quiero avanzar con una propuesta.",
  precios: "Hola, quiero conocer planes y precios para mi negocio.",
  "recurso-gratuito": "Hola, vi la mini-guía y quiero que revisen mi web.",
  contacto: "Hola, quiero que me envíen una propuesta concreta para mi negocio.",
  cierre: "Hola, quiero hablar y ver cómo sería mi web.",
};

const routeMessages: Record<string, string> = {
  "/gimnasios": landingPages.gimnasios.whatsappMessage,
  "/entrenadores": landingPages["personal-trainers"].whatsappMessage,
  "/personal-trainers": landingPages["personal-trainers"].whatsappMessage,
  "/nutricionistas": landingPages.nutricionistas.whatsappMessage,
  "/psicologos": landingPages.psicologos.whatsappMessage,
  "/estetica-corporal": landingPages["estetica-corporal"].whatsappMessage,
  "/gimnasio": landingPages["iron-fitness"].whatsappMessage,
  "/iron-fitness": landingPages["iron-fitness"].whatsappMessage,
  "/emprendedores": landingPages.emprendedores.whatsappMessage,
};

export function whatsappLink(message: string) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

export function getContextualWhatsappMessage(pathname: string, sectionId?: string) {
  if (routeMessages[pathname]) {
    return routeMessages[pathname];
  }

  if (pathname === "/" && sectionId && homeSectionMessages[sectionId]) {
    return homeSectionMessages[sectionId];
  }

  if (pathname === "/") {
    return "Hola, vi WebAppImpulsor y quiero una web que me ayude a conseguir más clientes.";
  }

  return "Hola, quiero una propuesta para mi web y necesito más consultas online.";
}

export function normalizeLeadSectionId(sectionId: string | null | undefined) {
  if (!sectionId) return undefined;

  const cleaned = sectionId.replace(/^#/, "");

  if (cleaned === "prueba-social") return "pruebaSocial";
  if (cleaned === "proceso") return "cierre";

  return cleaned;
}

export function formatBudgetLabel(value: string) {
  return value.replace(/^Más/, "Más").replace(/^Menos/, "Menos");
}
