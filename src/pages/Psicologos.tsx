import { LandingPageRenderer } from "@/components/landing/LandingPageRenderer";
import { landingConfigs } from "@/data/landingConfigs";

export default function Psicologos() {
  const config = landingConfigs.psicologo;
  return config ? <LandingPageRenderer config={config} /> : <div>Landing no encontrado</div>;
}
