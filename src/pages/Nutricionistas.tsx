import { LandingPageRenderer } from "@/components/landing/LandingPageRenderer";
import { landingConfigs } from "@/data/landingConfigs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web para Nutricionistas | Página que convierte visitas en pacientes",
  description: "Creamos tu página web profesional para nutricionistas. Tu consultorio online que trabaja 24/7. Web profesional que te encuentran cuando buscan nutricionista en tu zona.",
  keywords: [
    "web para nutricionista",
    "página web para nutricionista",
    "web nutricionista que convierte",
    "sitio web para nutricionistas",
    "landing page para nutricionistas"
  ]
};

export default function Nutricionistas() {
  const config = landingConfigs.nutricionista;
  return config ? <LandingPageRenderer config={config} /> : <div>Landing no encontrado</div>;
}
