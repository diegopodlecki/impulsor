import { LandingPageRenderer } from "@/components/landing/LandingPageRenderer";
import { landingConfigs } from "@/data/landingConfigs";

export default function Emprendedores() {
  const config = landingConfigs["casa-de-comidas"];
  return config ? <LandingPageRenderer config={config} /> : <div>Landing no encontrado</div>;
}
