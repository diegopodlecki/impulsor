import SeoLandingPage from "./SeoLandingPage";
import { getSeoLandingConfig } from "./seoLandingConfig";

export default function AsistenteVirtualWhatsapp() {
  const config = getSeoLandingConfig("/asistente-virtual-whatsapp");
  if (!config) return null;
  return <SeoLandingPage config={config} />;
}

