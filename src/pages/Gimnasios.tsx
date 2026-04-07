import { LandingPageRenderer } from "@/components/landing/LandingPageRenderer";
import { landingConfigs } from "@/data/landingConfigs";

export default function Gimnasios() {
  const config = landingConfigs.gimnasio;
  return config ? <LandingPageRenderer config={config} /> : <div>Landing no encontrado</div>;
}
