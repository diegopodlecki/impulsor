import SeoLandingPage from "./SeoLandingPage";
import { getSeoLandingConfig } from "./seoLandingConfig";

export default function SeguimientoDeClientes() {
  const config = getSeoLandingConfig("/seguimiento-de-clientes");
  if (!config) return null;
  return <SeoLandingPage config={config} />;
}
