import { NicheLandingPage } from "@/components/landing/NicheLandingPage";
import { landingPages } from "@/data/landings";

export default function Emprendedores() {
  return <NicheLandingPage config={landingPages.emprendedores} />;
}
