import SeoLandingPage from "./SeoLandingPage";
import { getSeoLandingConfig } from "./seoLandingConfig";

export default function TurnosPorWhatsapp() {
  const config = getSeoLandingConfig("/turnos-por-whatsapp");
  if (!config) return null;
  return <SeoLandingPage config={config} />;
}

