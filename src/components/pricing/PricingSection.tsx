import { CheckCircle2, HelpCircle, ShieldCheck, Sparkles } from "lucide-react";

import { analytics } from "@/components/analytics/analytics";
import { Button } from "@/components/ui/button";
import { pricingFaq, pricingGuarantee, pricingPlans } from "@/data/pricing";

export function PricingSection() {
  return (
    <section id="precios" data-price-section="true" className="container py-16 sm:py-20">
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

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {pricingPlans.map((plan, index) => {
          const recommended = index === 1;
          const pricingSource =
            index === 0 ? "pricing_basica" : index === 1 ? "pricing_profesional" : "pricing_completa";

          return (
            <article
              key={plan.name}
              className={`card-service relative p-6 sm:p-7 ${recommended ? "ring-1 ring-[#0EA5E9]/30" : ""}`}
            >
              {recommended ? (
                <div className="absolute -top-3 left-6 badge-chip border-transparent bg-[#0EA5E9] text-white">
                  <Sparkles className="h-3.5 w-3.5" />
                  Más elegido
                </div>
              ) : (
                <div className="absolute -top-3 left-6 badge-chip text-white/70">{plan.badge}</div>
              )}

              <div className="mt-3">
                <p className="text-label text-[#7dd3fc]">{plan.name}</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{plan.audience}</p>
                <p className="mt-5 text-3xl font-semibold tracking-tight text-white">{plan.price}</p>
                <p className="mt-1 text-sm text-muted-foreground">{plan.delivery}</p>
              </div>

              <div className="mt-6">
                <p className="text-h6 text-white">Incluye</p>
                <ul className="mt-4 space-y-3">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-small text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-h6 text-white">No incluye</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-white/70">
                  {plan.excludes.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

              <Button asChild size="lg" className="btn-primary mt-6 w-full">
                <a
                  href="#contacto"
                  data-analytics-cta={plan.cta}
                  onClick={() => analytics.pricingInterest(pricingSource)}
                >
                  {plan.cta}
                </a>
              </Button>
            </article>
          );
        })}
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="card-service">
          <div className="flex items-center gap-3">
            <HelpCircle className="h-5 w-5 text-[#0EA5E9]" />
            <h3 className="text-h4 text-white">Dudas frecuentes</h3>
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
                <summary className="cursor-pointer list-none text-h6 text-white outline-none">{item.question}</summary>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="card-service ring-1 ring-[#0EA5E9]/20">
          <div className="badge-chip border-emerald-500/20 bg-emerald-500/10 text-emerald-300">
            <ShieldCheck className="h-3.5 w-3.5" />
            Compromiso de claridad
          </div>
          <h3 className="mt-4 text-h3 text-white">{pricingGuarantee.title}</h3>
          <p className="mt-4 text-sm leading-7 text-white/70">{pricingGuarantee.body}</p>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-h6 text-white">Pensado para decidir con más criterio</p>
            <p className="mt-2 text-sm leading-6 text-white/70">
              Reduce el riesgo percibido sin abaratar la propuesta ni prometer resultados que dependen de variables
              externas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
