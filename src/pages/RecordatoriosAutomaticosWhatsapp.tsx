import SeoLandingPage from "./SeoLandingPage";
import { getSeoLandingConfig } from "./seoLandingConfig";

export default function RecordatoriosAutomaticosWhatsapp() {
  const config = getSeoLandingConfig("/recordatorios-automaticos-whatsapp");
  if (!config) return null;
  return <SeoLandingPage config={config} />;
}

