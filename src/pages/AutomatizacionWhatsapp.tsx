import SeoLandingPage from "./SeoLandingPage";
import { getSeoLandingConfig } from "./seoLandingConfig";

export default function AutomatizacionWhatsapp() {
  const config = getSeoLandingConfig("/automatizacion-whatsapp");
  if (!config) return null;
  return <SeoLandingPage config={config} />;
}

