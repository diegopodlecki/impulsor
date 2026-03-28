import { NicheLandingPage } from "@/components/landing/NicheLandingPage";
import { landingPages } from "@/data/landings";

export default function EsteticaCorporal() {
  return <NicheLandingPage config={landingPages["estetica-corporal"]} />;
}
