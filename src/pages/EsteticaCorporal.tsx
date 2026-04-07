import { LandingPageRenderer } from "@/components/landing/LandingPageRenderer";
import { landingConfigs } from "@/data/landingConfigs";

export default function EsteticaCorporal() {
  const config = landingConfigs["estetica-corporal"];
  return config ? <LandingPageRenderer config={config} /> : <div>Landing no encontrado</div>;
}
