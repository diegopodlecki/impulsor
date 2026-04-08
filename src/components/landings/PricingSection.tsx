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
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900" />
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r ${colors.text}/5 to-transparent rounded-full blur-[150px]`} />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`group relative rounded-3xl transition-all duration-500 hover:-translate-y-2 ${
                plan.popular
                  ? `bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-2 ${colors.border} scale-105 shadow-2xl shadow-${accentColor === 'orange' ? 'orange' : accentColor}-500/20 hover:shadow-${accentColor === 'orange' ? 'orange' : accentColor}-500/30`
                  : `bg-slate-800/50 border border-slate-700/30 hover:border-slate-600/50 hover:bg-slate-800/70 hover:shadow-xl hover:shadow-${accentColor === 'orange' ? 'orange' : accentColor}-500/10`
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${colors.badge} text-white text-sm font-bold shadow-lg badge-shine`}>
                    <Sparkles className="w-4 h-4 animate-pulse" />
                    Recomendado
                  </div>
                </div>
              )}

              <div className="p-8">
                <h3 className={`text-xl font-bold transition-colors duration-300 ${plan.popular ? 'text-white group-hover:text-orange-200' : 'text-slate-300 group-hover:text-white'} mb-2`}>
                  {plan.name}
                </h3>
                <p className="text-slate-400 text-sm mb-6 transition-colors duration-300 group-hover:text-slate-300">
                  {plan.description}
                </p>

                <div className="mb-8">
                  <span className={`text-4xl font-black transition-all duration-300 ${plan.popular ? 'text-white group-hover:text-orange-100' : 'text-slate-200 group-hover:text-white'}`}>
                    {plan.price}
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110`} />
                      <span className="text-slate-300 text-sm leading-relaxed transition-colors duration-300 group-hover:text-slate-200">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacto"
                  className={`block w-full py-4 px-6 text-center font-bold rounded-xl transition-all duration-300 btn-premium ${
                    plan.popular
                      ? `bg-gradient-to-r ${colors.gradient} text-white shadow-lg shadow-${accentColor === 'orange' ? 'orange' : accentColor}-500/30 hover:shadow-${accentColor === 'orange' ? 'orange' : accentColor}-500/50`
                      : `bg-slate-700/50 text-slate-200 hover:bg-slate-700 hover:text-white hover:shadow-lg hover:shadow-slate-900/20`
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-500 text-sm mt-12">
          ¿No sabés qué plan elegir? <a href="#contacto" className={`${colors.text} font-semibold hover:underline`}>Hablamos sin cargo</a>
        </p>
      </div>
    </section>
  );
}
