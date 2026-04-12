import { RubroLandingPage } from '@/components/rubro';
import { entrenadorConfig } from '@/data/rubros/entrenador';

export default function EntrenadoresPage() {
  return <RubroLandingPage config={entrenadorConfig} />;
}