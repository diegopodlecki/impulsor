import { LandingPageRenderer } from "@/components/landing/LandingPageRenderer";
import { landingConfigs } from "@/data/landingConfigs";

export default function Nutricionistas() {
  const config = landingConfigs.nutricionista;
  return config ? <LandingPageRenderer config={config} /> : <div>Landing no encontrado</div>;
}
