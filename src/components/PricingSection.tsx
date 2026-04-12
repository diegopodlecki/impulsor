import { Check, X, ArrowRight, MessageCircle } from "lucide-react";

const PLANS = [
  {
    name: "Starter",
    badge: "Más elegido",
    description: "Ideal para profesionales independientes que quieren empezar a recibir consultas online",
    features: [
      { text: "Landing page diseñada para tu rubro", included: true },
      { text: "Formulario de contacto + botón WhatsApp", included: true },
      { text: "Optimizada para celular", included: true },
      { text: "Carga rápida y SEO básico", included: true },
      { text: "Online en 7 días", included: true },
      { text: "Panel de administración", included: false },
      { text: "Blog o contenido dinámico", included: false },
    ],
    cta: "Quiero este plan",
    ctaLink: "https://wa.me/541166448389?text=Hola!%20Me%20interesa%20el%20plan%20Starter",
    accent: "from-green-500 to-emerald-600",
    popular: true,
  },
  {
    name: "Pro",
    badge: "Para crecer",
    description: "Para negocios que querem escalar con más funcionalidades y presencia digital completa",
    features: [
      { text: "Todo lo del plan Starter", included: true },
      { text: "Sección de testimonios editable", included: true },
      { text: "Integración con Google Analytics", included: true },
      { text: "Dominio incluido el primer año", included: true },
      { text: "Soporte por 30 días post-entrega", included: true },
      { text: "2 revisiones de diseño incluidas", included: true },
      { text: "Blog o contenido dinámico", included: false },
    ],
    cta: "Quiero este plan",
    ctaLink: "https://wa.me/541166448389?text=Hola!%20Me%20interesa%20el%20plan%20Pro",
    accent: "from-purple-500 to-indigo-600",
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section id="precios" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-white/50 mb-4">Planes diseñados para tu necesidad</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Elegí tu plan
          </h2>
          <p className="text-white/40 mt-4 text-lg">
            Primera consulta siempre gratis. Sin compromiso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PLANS.map((plan, idx) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl overflow-hidden border ${
                plan.popular
                  ? "border-green-500/30 bg-gradient-to-br from-slate-800/80 to-slate-900/80"
                  : "border-slate-700/50 bg-slate-900/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-600" />
              )}

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                      plan.popular
                        ? "bg-green-500/20 text-green-400"
                        : "bg-purple-500/20 text-purple-400"
                    }`}
                  >
                    {plan.badge}
                  </span>
                  <span className="text-3xl font-bold text-white">{plan.name}</span>
                </div>

                <p className="text-white/60 mb-8">{plan.description}</p>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-slate-600 flex-shrink-0" />
                      )}
                      <span className={feature.included ? "text-white" : "text-slate-500"}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href={plan.ctaLink}
                  className={`inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-white transition-all hover:scale-[1.02] ${
                    plan.popular
                      ? "bg-gradient-to-r from-green-500 to-emerald-600 shadow-lg shadow-green-500/30"
                      : "bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg shadow-purple-500/30"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}