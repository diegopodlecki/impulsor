import { LandingPageRenderer } from "@/components/landing/LandingPageRenderer";
import { landingConfigs } from "@/data/landingConfigs";

export default function PersonalTrainers() {
  const config = landingConfigs["personal-trainer"];
  return config ? <LandingPageRenderer config={config} /> : <div>Landing no encontrado</div>;
}
