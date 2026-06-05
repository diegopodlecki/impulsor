import { CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

interface PricingSectionProps {
  title?: string;
  subtitle?: string;
  plans: PricingPlan[];
  accentColor?: string;
}

export default function PricingSection({
  title = "Planes simples, resultados reales",
  subtitle = "Elegí el plan que se ajuste a tu negocio",
  plans,
  accentColor = "orange"
}: PricingSectionProps) {
  const colorClasses = {
    orange: {
      gradient: "from-orange-500 to-red-600",
      text: "text-orange-400",
      bg: "bg-orange-500",
      border: "border-orange-500/30",
      hover: "hover:border-orange-500/50",
      badge: "bg-gradient-to-r from-orange-500 to-red-600",
    },
    cyan: {
      gradient: "from-cyan-400 to-blue-600",
      text: "text-cyan-400",
      bg: "bg-cyan-500",
      border: "border-cyan-500/30",
      hover: "hover:border-cyan-500/50",
      badge: "bg-gradient-to-r from-cyan-500 to-blue-600",
    },
    indigo: {
      gradient: "from-indigo-500 to-violet-600",
      text: "text-indigo-600",
      bg: "bg-indigo-500",
      border: "border-indigo-500/30",
      hover: "hover:border-indigo-500/50",
      badge: "bg-gradient-to-r from-indigo-500 to-violet-600",
    },
    emerald: {
      gradient: "from-emerald-500 to-teal-600",
      text: "text-emerald-600",
      bg: "bg-emerald-500",
      border: "border-emerald-500/30",
      hover: "hover:border-emerald-500/50",
      badge: "bg-gradient-to-r from-emerald-500 to-teal-600",
    },
    rose: {
      gradient: "from-rose-500 to-pink-600",
      text: "text-rose-500",
      bg: "bg-rose-500",
      border: "border-rose-500/30",
      hover: "hover:border-rose-500/50",
      badge: "bg-gradient-to-r from-rose-500 to-pink-600",
    },
  };

  const colors = colorClasses[accentColor as keyof typeof colorClasses] || colorClasses.orange;

  return (
    <section className="relative py-24 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900" />
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-r ${colors.text}/8 to-transparent rounded-full blur-[180px]`} />

      <div className="container relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`group relative rounded-3xl transition-all duration-500 hover:-translate-y-3 ${
                plan.popular
                  ? `bg-gradient-to-br from-slate-800/90 via-slate-900/80 to-slate-950/90 border-2 ${colors.border} scale-105 shadow-soft-xl shadow-${accentColor === 'orange' ? 'orange' : accentColor}-500/25 hover:shadow-${accentColor === 'orange' ? 'orange' : accentColor}-500/40`
                  : `glass-card hover:glass-card-hover bg-slate-800/40`
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full ${colors.badge} text-white text-sm font-bold shadow-soft-lg badge-shine`}>
                    <Sparkles className="w-4 h-4" />
                    Recomendado
                  </div>
                </div>
              )}

              <div className="p-8 lg:p-10">
                <h3 className={`text-2xl font-bold transition-colors duration-300 ${plan.popular ? 'text-white' : 'text-slate-200'} mb-2`}>
                  {plan.name}
                </h3>
                <p className="text-slate-400 text-base mb-8">
                  {plan.description}
                </p>

                <div className="mb-10">
                  <span className={`text-5xl font-black ${plan.popular ? 'text-white' : 'text-slate-100'}`}>
                    {plan.price}
                  </span>
                </div>

                <ul className="space-y-5 mb-10">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-4">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${colors.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-slate-300 text-base leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacto"
                  className={`block w-full py-5 px-6 text-center font-bold rounded-2xl transition-all duration-300 btn-premium ${
                    plan.popular
                      ? `bg-gradient-to-r ${colors.gradient} text-white shadow-soft-lg hover:shadow-soft-xl`
                      : `glass-card text-slate-200 hover:text-white hover:bg-white/10`
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-500 text-base mt-16">
          ¿No sabés qué plan elegir? <a href="#contacto" className={`${colors.text} font-semibold hover:underline`}>Hablamos sin cargo</a>
        </p>
      </div>
    </section>
  );
}
