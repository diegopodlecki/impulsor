import { NicheLandingPage } from "@/components/landing/NicheLandingPage";
import { landingPages } from "@/data/landings";

export default function PersonalTrainers() {
  return <NicheLandingPage config={landingPages["personal-trainers"]} />;
}
