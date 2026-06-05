import { LandingPageRenderer } from "@/components/landing/LandingPageRenderer";
import { landingConfigs } from "@/data/landingConfigs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web para Emprendedores | Página de delivery sin comisiones",
  description: "Creamos tu página web profesional para delivery propio. Tu propia app de pedidos sin las comisiones de PedidosYa o Rappi. El 100% es tuyo.",
  keywords: [
    "web para emprendedores",
    "página web para delivery",
    "web delivery sin comisiones",
    "sitio web para casas de comida",
    "landing page para viandas"
  ]
};

export default function Emprendedores() {
  const config = landingConfigs["casa-de-comidas"];
  return config ? <LandingPageRenderer config={config} /> : <div>Landing no encontrado</div>;
}
