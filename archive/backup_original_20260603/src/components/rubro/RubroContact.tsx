import { MessageCircle } from "lucide-react";
import type { RubroConfig } from "@/types/rubro";

interface RubroContactProps {
  config: RubroConfig;
}

export default function RubroContact({ config }: RubroContactProps) {
  const whatsappLink = `https://wa.me/${config.contact.whatsappNumber}?text=${encodeURIComponent(config.contact.whatsappMessage)}`;

  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, #0f172a, #1e1b4b 50%, ${config.accentColorHex}10)`
      }}
    >
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {config.contact.title}
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            {config.contact.subtitle}
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <a
            href={whatsappLink}
            className="inline-flex items-center gap-3 px-12 py-5 text-xl font-bold rounded-2xl text-white shadow-2xl hover:scale-[1.02] transition-all"
            style={{ backgroundColor: "#25D366" }}
          >
            <MessageCircle className="h-7 w-7" />
            {config.contact.ctaText}
          </a>

          {config.contact.email && (
            <a 
              href={`mailto:${config.contact.email}`}
              className="text-white/70 hover:text-white underline"
            >
              {config.contact.email}
            </a>
          )}

          {config.contact.hours && (
            <p className="text-white/50">
              🕐 Horario: {config.contact.hours}
            </p>
          )}

          {config.contact.address && (
            <p className="text-white/50">
              📍 {config.contact.address}
            </p>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-white/10">
          <p className="text-white/30 text-sm">
            Demo creada por <span className="text-white font-medium">WebAppImpulsor</span> ·{' '}
            <a href="https://webappimpulsor.com" className="underline hover:text-white">
              webappimpulsor.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}