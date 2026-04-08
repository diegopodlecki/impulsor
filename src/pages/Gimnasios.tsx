import { LandingPageRenderer } from "@/components/landing/LandingPageRenderer";
import { landingConfigs } from "@/data/landingConfigs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web para Gimnasios | Página que convierte visitas en socios",
  description: "Creamos tu página web profesional para gimnasios. Tu web trabaja 24/7 inscribiendo socios. Mostrá tus clases, horarios e instalaciones. Dejá que la web haga el trabajo.",
  keywords: [
    "web para gimnasio",
    "página web para gimnasio",
    "web gimnasio que convierte",
    "sitio web para gyms",
    "landing page para gimnasios"
  ]
};

export default function Gimnasios() {
  const config = landingConfigs.gimnasio;
  return config ? <LandingPageRenderer config={config} /> : <div>Landing no encontrado</div>;
}
