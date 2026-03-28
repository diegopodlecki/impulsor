import { NicheLandingPage } from "@/components/landing/NicheLandingPage";
import { landingPages } from "@/data/landings";

export default function IronFitness() {
  return <NicheLandingPage config={landingPages["iron-fitness"]} />;
}
