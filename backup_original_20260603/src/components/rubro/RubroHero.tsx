import { ArrowRight, MessageCircle } from "lucide-react";
import type { RubroConfig } from "@/types/rubro";

interface RubroHeroProps {
  config: RubroConfig;
}

export default function RubroHero({ config }: RubroHeroProps) {
  const whatsappLink = `https://wa.me/${config.contact.whatsappNumber}?text=${encodeURIComponent(config.contact.whatsappMessage)}`;

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-40">
        <div className="backdrop-blur-xl bg-slate-950/90 border-b border-white/5">
          <div className="container">
            <div className="flex items-center justify-between h-16 py-4">
              <a href="/" className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: config.accentColorHex }}
                >
                  <span className="text-white font-bold text-lg">W</span>
                </div>
                <span className="text-white font-bold text-lg">webappimpulsor</span>
              </a>
              <a
                href={whatsappLink}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-full text-white transition-all hover:scale-105"
                style={{ backgroundColor: config.accentColorHex }}
              >
                {config.demo.ctaText}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={config.hero.backgroundImage} 
            alt={config.rubro} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container relative z-10 px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
              <span className="text-2xl">{config.emoji}</span>
              <span className="text-white font-medium">{config.hero.badge}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight text-white">
              {config.hero.title}
            </h1>

            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              {config.hero.subtitle}
            </p>

            <a
              href={whatsappLink}
              className="inline-flex items-center gap-3 px-10 py-5 text-xl font-bold rounded-2xl text-white shadow-2xl transition-all hover:scale-[1.02]"
              style={{ backgroundColor: config.accentColorHex, boxShadow: `0 20px 40px ${config.accentColorHex}40` }}
            >
              {config.hero.ctaText}
              <ArrowRight className="h-6 w-6" />
            </a>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-white/10">
              {config.hero.stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}