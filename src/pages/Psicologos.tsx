import { LandingPageRenderer } from "@/components/landing/LandingPageRenderer";
import { landingConfigs } from "@/data/landingConfigs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web para Psicólogos | Página que genera consultas de pacientes",
  description: "Creamos tu página web profesional para psicólogos. Tu consultorio merece ser encontrado. Web que transmite confianza y convierte visitas en turnos de pacientes.",
  keywords: [
    "web para psicólogo",
    "página web para psicólogo",
    "web psicólogo que convierte",
    "sitio web para psicólogos",
    "landing page para psicólogos"
  ]
};

export default function Psicologos() {
  const config = landingConfigs.psicologo;
  return config ? <LandingPageRenderer config={config} /> : <div>Landing no encontrado</div>;
}
