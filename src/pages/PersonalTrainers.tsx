import { LandingPageRenderer } from "@/components/landing/LandingPageRenderer";
import { landingConfigs } from "@/data/landingConfigs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web para Personal Trainer | Página que convierte visitas en alumnos",
  description: "Creamos tu página web profesional para personal trainers. Tu web trabaja 24/7 para conseguir alumnos mientras vos entrenás. Diseños que generan consultas reales.",
  keywords: [
    "web para personal trainer",
    "página web para entrenador personal",
    "web personal trainer que convierte",
    "sitio web para trainers",
    "landing page para personal trainer"
  ]
};

export default function PersonalTrainers() {
  const config = landingConfigs["personal-trainer"];
  return config ? <LandingPageRenderer config={config} /> : <div>Landing no encontrado</div>;
}
