import { RubroLandingPage } from '@/components/rubro';
import { nutricionistaConfig } from '@/data/rubros/nutricionista';

export default function NutricionistasPage() {
  return <RubroLandingPage config={nutricionistaConfig} />;
}