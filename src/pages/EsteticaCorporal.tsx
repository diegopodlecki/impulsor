import { LandingPageRenderer } from "@/components/landing/LandingPageRenderer";
import { landingConfigs } from "@/data/landingConfigs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web para Centros de Estética | Página que reserva turnos por WhatsApp",
  description: "Creamos tu página web profesional para centros de estética. Tu centro de belleza merece ser encontrado. Web premium que muestra tratamientos y genera reservas directo.",
  keywords: [
    "web para estética",
    "página web para centro de estética",
    "web estética que reserva",
    "sitio web para esteticistas",
    "landing page para centros de belleza"
  ]
};

export default function EsteticaCorporal() {
  const config = landingConfigs["estetica-corporal"];
  return config ? <LandingPageRenderer config={config} /> : <div>Landing no encontrado</div>;
}
