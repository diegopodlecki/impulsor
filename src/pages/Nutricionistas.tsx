import { NicheLandingPage } from "@/components/landing/NicheLandingPage";
import { landingPages } from "@/data/landings";

export default function Nutricionistas() {
  return <NicheLandingPage config={landingPages.nutricionista} />;
}
