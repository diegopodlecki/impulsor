import { NicheLandingPage } from "@/components/landing/NicheLandingPage";
import { landingPages } from "@/data/landings";

export default function Gimnasios() {
  return <NicheLandingPage config={landingPages.gimnasios} />;
}
