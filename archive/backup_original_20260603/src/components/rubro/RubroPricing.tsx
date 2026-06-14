import { Check, X, ArrowRight } from "lucide-react";
import type { RubroConfig } from "@/types/rubro";

interface RubroPricingProps {
  config: RubroConfig;
}

export default function RubroPricing({ config }: RubroPricingProps) {
  const handleCta = (ctaText: string) => {
    const message = `Hola! Me interesa el plan ${ctaText}`;
    const link = `https://wa.me/${config.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(link, "_blank");
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            {config.pricing.title}
          </h2>
          <p className="text-slate-600 text-lg max-w-xl mx-auto mb-4">
            {config.pricing.subtitle}
          </p>
          <p className="text-slate-400 text-sm italic">
            {config.pricing.note}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {config.pricing.plans.map((plan, idx) => (
            <div 
              key={idx}
              className={`relative p-8 rounded-2xl border ${
                plan.highlighted 
                  ? "bg-white border-2 shadow-xl" 
                  : "bg-white border-slate-200"
              }`}
              style={plan.highlighted ? { borderColor: config.accentColorHex } : {}}
            >
              {plan.highlighted && plan.badge && (
                <div 
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: config.accentColorHex }}
                >
                  {plan.badge}
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-black text-slate-900">{plan.price}</span>
                  <span className="text-slate-500">/ {plan.period}</span>
                </div>
                <p className="text-slate-600 mt-3">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-slate-700">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
                {plan.excluded?.map((excluded, eIdx) => (
                  <li key={eIdx} className="flex items-center gap-3 text-slate-400 line-through">
                    <X className="h-5 w-5 text-slate-300 flex-shrink-0" />
                    {excluded}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleCta(plan.ctaText)}
                className={`w-full py-4 rounded-xl font-bold text-white transition-all hover:scale-[1.02] flex items-center justify-center gap-2 ${
                  plan.highlighted ? "shadow-lg" : ""
                }`}
                style={{ 
                  backgroundColor: plan.highlighted ? config.accentColorHex : "#64748b",
                  boxShadow: plan.highlighted ? `0 10px 20px ${config.accentColorHex}40` : undefined
                }}
              >
                {plan.ctaText}
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-sm mt-8">
          * Los precios son de referencia. Consultá disponibilidad.
        </p>
      </div>
    </section>
  );
}