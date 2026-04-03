import { NicheLandingPage } from "@/components/landing/NicheLandingPage";
import { landingPages } from "@/data/landings";

export default function Psicologos() {
  return <NicheLandingPage config={landingPages.psicologo} />;
}
