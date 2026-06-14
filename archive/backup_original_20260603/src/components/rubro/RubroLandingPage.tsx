import type { RubroConfig } from "@/types/rubro";
import DemoBanner from "./DemoBanner";
import RubroHero from "./RubroHero";
import RubroServices from "./RubroServices";
import RubroHowItWorks from "./RubroHowItWorks";
import RubroPricing from "./RubroPricing";
import RubroTestimonials from "./RubroTestimonials";
import RubroFaq from "./RubroFaq";
import RubroContact from "./RubroContact";

interface RubroLandingPageProps {
  config: RubroConfig;
}

export default function RubroLandingPage({ config }: RubroLandingPageProps) {
  return (
    <main className="min-h-screen bg-white">
      <DemoBanner 
        ctaText={config.demo.ctaText}
        whatsappMessage={config.demo.whatsappMessage}
        whatsappNumber={config.demo.whatsappNumber}
      />
      
      <RubroHero config={config} />
      <RubroServices config={config} />
      <RubroHowItWorks config={config} />
      <RubroPricing config={config} />
      <RubroTestimonials config={config} />
      <RubroFaq config={config} />
      <RubroContact config={config} />
    </main>
  );
}