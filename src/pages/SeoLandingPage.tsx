import { ArrowRight, CheckCircle2, MessageCircle, Sparkles } from "lucide-react";
import SeoHead from "../components/SeoHead";
import type { SeoLandingConfig } from "./seoLandingConfig";

type SeoLandingPageProps = {
  config: SeoLandingConfig;
};

export default function SeoLandingPage({ config }: SeoLandingPageProps) {
  return (
    <div className="relative min-h-screen text-ink-900 antialiased">
      <SeoHead title={config.title} description={config.description} canonical={`https://webappimpulsor.com.ar${config.path}`} />

      <main>
        <section className="relative overflow-hidden py-24 sm:py-32">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/80 via-white to-transparent" />
            <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
            <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl" />
          </div>

          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1 text-xs font-semibold text-emerald-700 shadow-sm">
              <Sparkles className="h-3 w-3" />
              SEO Argentina
            </div>
            <h1 className="font-display mt-5 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
              {config.h1}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-600">{config.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/#contacto"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25"
              >
                Solicitar diagnóstico gratis
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/#servicios"
                className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-5 py-3 text-sm font-semibold text-ink-700 transition hover:border-ink-300 hover:bg-ink-50"
              >
                Ver soluciones
              </a>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <article className="rounded-3xl border border-ink-200 bg-white p-7 shadow-sm sm:p-9">
              <h2 className="font-display text-2xl font-extrabold text-ink-900 sm:text-3xl">
                Qué es la automatización de WhatsApp
              </h2>
              <div className="mt-5 space-y-4 text-base leading-8 text-ink-600">
                <p dangerouslySetInnerHTML={{ __html: config.overview }} />
                <p>
                  Para revisar la propuesta general del servicio, podés volver a la{" "}
                  <a href="/#servicios" className="font-semibold text-emerald-600 underline decoration-emerald-300/50 underline-offset-4">
                    sección de soluciones
                  </a>{" "}
                  o ir directo al{" "}
                  <a href="/#contacto" className="font-semibold text-emerald-600 underline decoration-emerald-300/50 underline-offset-4">
                    formulario de contacto
                  </a>
                  .
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-transparent via-white/40 to-transparent">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <h2 className="font-display text-2xl font-extrabold text-ink-900 sm:text-3xl">Beneficios</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {config.benefits.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-ink-200 bg-white p-5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-500" />
                  <p className="text-sm leading-6 text-ink-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <h2 className="font-display text-2xl font-extrabold text-ink-900 sm:text-3xl">Cómo funciona</h2>
            <div className="mt-6 rounded-3xl border border-ink-200 bg-white p-7 shadow-sm sm:p-9">
              <ol className="space-y-4 text-base leading-8 text-ink-600">
                <li>
                  1. Partimos de un diagnóstico para entender qué consultas querés automatizar y qué resultado buscás.
                </li>
                <li>
                  2. Diseñamos el flujo con respuestas, reglas y derivaciones según tu negocio y tu zona.
                </li>
                <li>
                  3. Integramos WhatsApp con tu agenda, CRM o cobros y lo dejamos listo para producir.
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <h2 className="font-display text-2xl font-extrabold text-ink-900 sm:text-3xl">Casos de uso</h2>
            <div className="mt-8 space-y-4 rounded-3xl border border-ink-200 bg-white p-7 shadow-sm sm:p-9">
              {config.useCases.map((item) => (
                <p key={item} className="text-base leading-8 text-ink-600">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <h2 className="font-display text-2xl font-extrabold text-ink-900 sm:text-3xl">Preguntas frecuentes</h2>
            <div className="mt-8 space-y-4">
              {config.faqs.map((faq) => (
                <div key={faq.q} className="rounded-2xl border border-ink-200 bg-white p-5 shadow-sm">
                  <h3 className="font-display text-lg font-bold text-ink-900">{faq.q}</h3>
                  <p className="mt-2 text-sm leading-7 text-ink-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <div className="rounded-3xl bg-ink-950 px-7 py-10 text-white shadow-2xl sm:px-10">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
                    Empezá a automatizar tu WhatsApp hoy
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-ink-300">
                    Si querés una propuesta pensada para Argentina y adaptada a tu operación, podemos ayudarte a definir el flujo correcto para tu negocio.
                    {" "}
                    <a
                      href="/#contacto"
                      className="font-semibold text-emerald-300 underline decoration-emerald-300/40 underline-offset-4"
                    >
                      Contactanos acá
                    </a>
                    .
                  </p>
                  <div className="mt-6">
                    <a
                      href="/#contacto"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink-900 transition hover:bg-ink-100"
                    >
                      Solicitar diagnóstico gratis
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
