import { CheckCircle2, HelpCircle, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import { analytics } from "@/components/analytics/analytics";
import { Button } from "@/components/ui/button";
import { pricingFaq, pricingGuarantee, pricingPlans } from "@/data/pricing";

export function PricingSection() {
  const handlePricingHover = () => {
    if (typeof window === "undefined") return;
    window.dispatchEvent(new Event("webappimpulsor:pricing-hover"));
  };

  return (
    <section
      id="precios"
      data-price-section="true"
      className="container py-16 sm:py-20"
      onMouseEnter={handlePricingHover}
      onFocusCapture={handlePricingHover}
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
          Servicios y planes
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Inversión clara. Valor antes que precio.
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          Primero entendés el alcance, después el criterio y al final el precio. Así la decisión se toma con más
          contexto y menos fricción.
        </p>
      </div>

      <div className="mt-12 container-cards">
        {pricingPlans.map((plan, index) => {
          const recommended = index === 1;
          const pricingSource =
            index === 0 ? "pricing_basica" : index === 1 ? "pricing_profesional" : "pricing_completa";

          return (
            <a href="#contacto" key={plan.name} className="card-link">
              <article className="card shadow-lg ring-1 ring-slate-100 h-full p-0">
                <div className="card-image flex flex-col justify-center p-6 bg-slate-50 border-b border-slate-100">
                  {recommended && (
                    <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#0EA5E9] px-2.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider w-fit">
                      <Sparkles className="h-3 w-3" />
                      Más elegido
                    </div>
                  )}
                  {!recommended && (
                    <div className="mb-3 inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-[10px] font-bold text-slate-500 uppercase tracking-wider w-fit">
                      {plan.badge}
                    </div>
                  )}
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-slate-900">{plan.price}</span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-[#0EA5E9]">{plan.name}</p>
                </div>

                <div className="card-content p-6 flex-1">
                  <h3 className="card-title text-base">{plan.audience}</h3>
                  <div className="mt-4 space-y-3">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-widest">Incluye:</p>
                    <ul className="space-y-2">
                      {plan.includes.slice(0, 3).map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                      {plan.includes.length > 3 && (
                        <li className="text-[10px] text-slate-400 italic text-center pt-1">+ y mucho más</li>
                      )}
                    </ul>
                  </div>
                </div>

                <div className="card-footer flex flex-col gap-3 p-6 border-t border-slate-100 bg-slate-50/50">
                  <p className="text-[10px] text-center text-slate-500">{plan.delivery}</p>
                  <div 
                    className="btn-primary w-full py-2.5 text-xs text-center rounded-xl font-bold"
                    onClick={() => analytics.pricingInterest(pricingSource)}
                  >
                    {plan.cta}
                  </div>
                </div>
              </article>
            </a>
          );
        })}
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="card-service">
          <div className="flex items-center gap-3">
            <HelpCircle className="h-5 w-5 text-[#0EA5E9]" />
            <h3 className="text-h4 text-slate-900">Dudas frecuentes</h3>
          </div>

          <div className="mt-6 space-y-4">
            {pricingFaq.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-white/10 bg-black/20 p-4"
                onToggle={(event) => {
                  if (event.currentTarget.open) {
                    analytics.faqOpen(item.question);
                  }
                }}
              >
                <summary className="cursor-pointer list-none text-h6 text-slate-900 outline-none">{item.question}</summary>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.answer}</p>
              </details>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
            <p className="text-sm text-white/70">¿Querés ver todas las preguntas con más detalle?</p>
            <Link className="text-sm font-semibold text-cyan-300 transition-colors hover:text-cyan-200" to="/faq">
              Ver todas las preguntas →
            </Link>
          </div>
        </div>

        <div className="card-service ring-1 ring-[#0EA5E9]/20">
          <div className="badge-chip border-slate-200 bg-slate-100 text-slate-600">
            <ShieldCheck className="h-3.5 w-3.5 text-[#0EA5E9]" />
            Compromiso de claridad
          </div>
          <h3 className="mt-4 text-h3 text-slate-900">{pricingGuarantee.title}</h3>
          <p className="mt-4 text-sm leading-7 text-slate-600">{pricingGuarantee.body}</p>

          <div className="mt-8 rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <p className="text-h6 text-slate-900">Pensado para decidir con más criterio</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Reduce el riesgo percibido sin abaratar la propuesta ni prometer resultados que dependen de variables
              externas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
