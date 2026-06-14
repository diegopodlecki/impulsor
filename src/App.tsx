/* eslint-disable react-refresh/only-export-components */
import { FormEvent, useState } from "react";
import type { RouteRecord } from "vite-react-ssg";

import { SeoHead } from "@/components/SEO/SeoHead";
import { Toaster } from "@/components/ui/sonner.tsx";

const webhookUrl = "https://hook.us2.make.com/5c7xu0k7crcpkg1eeclb395duigmvn14";

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <WhatsAppAutomationLanding />,
  },
];

function WhatsAppAutomationLanding() {
  const [nombre, setNombre] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: nombre.trim(),
          whatsapp: whatsapp.trim(),
          origen: "landing_principal",
        }),
      });

      if (!response.ok) {
        throw new Error("No pudimos enviar tu solicitud.");
      }

      setMessage("Listo. Recibimos tu solicitud y te contactaremos pronto para coordinar la demo.");
      setNombre("");
      setWhatsapp("");
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Ocurrió un error inesperado.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <SeoHead
        title="Automatización de WhatsApp y turnos"
        description="Automatizá tus respuestas, enviá presupuestos y agendá clientes 24/7 sin mover un dedo."
      />
      <Toaster position="top-right" />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.16),transparent_30%)]" />
          <header className="relative z-20 border-b border-white/5 bg-slate-950/75 backdrop-blur-2xl">
            <div className="container">
              <div className="flex h-18 items-center justify-between gap-3 py-3 sm:h-20 sm:gap-4 sm:py-0">
                <a href="/" className="inline-flex items-center gap-3">
                  <div className="h-10 w-10 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 shadow-[0_0_30px_-18px_rgba(16,185,129,0.9)]" />
                  <span className="text-xs font-semibold tracking-[0.18em] text-white/90 uppercase sm:text-sm">
                    WebAppImpulsor
                  </span>
                </a>

                <nav className="hidden items-center gap-6 text-sm text-white/60 lg:flex xl:gap-8">
                  <a href="#como-funciona" className="transition hover:text-white">
                    Cómo funciona
                  </a>
                  <a href="#casos-de-uso" className="transition hover:text-white">
                    Casos de uso
                  </a>
                  <a href="#contacto" className="transition hover:text-white">
                    Contacto
                  </a>
                </nav>

                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center rounded-full border border-emerald-300/20 bg-gradient-to-r from-emerald-500 to-green-500 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition hover:scale-[1.01] hover:shadow-emerald-500/30 sm:px-5"
                >
                  Solicitar diagnóstico gratuito
                </a>
              </div>
            </div>
          </header>

          <div className="container relative z-10 flex min-h-[calc(100vh-5rem)] items-center py-16">
            <div className="grid w-full gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
              <div className="space-y-8">
                <div className="space-y-5">
                  <h1 className="max-w-3xl text-balance text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
                    Automatizá WhatsApp y conseguí más clientes sin trabajar más horas
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
                    Implementamos asistentes automáticos para profesionales y negocios que responden consultas, gestionan turnos y hacen seguimiento de clientes.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#contacto"
                    className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 px-6 py-4 text-base font-bold text-white shadow-lg shadow-emerald-500/25 transition hover:scale-[1.01] hover:shadow-emerald-500/35"
                  >
                    Solicitar diagnóstico gratuito
                  </a>
                  <a
                    href="#como-funciona"
                    className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-base font-semibold text-white/85 transition hover:border-white/15 hover:bg-white/10"
                  >
                    Ver demostración
                  </a>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8">
                <div className="mb-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
                    Solicitar diagnóstico gratuito
                  </p>
                  <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
                    Completá tus datos y te mostramos cómo automatizar tu WhatsApp
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/60">
                    Te enviamos una revisión breve para detectar oportunidades de automatización, seguimiento y agenda.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4" id="contacto">
                  <label className="block space-y-2">
                    <span className="text-sm font-medium text-white/80">Nombre</span>
                    <input
                      type="text"
                      value={nombre}
                      onChange={(event) => setNombre(event.target.value)}
                      placeholder="Tu nombre completo"
                      className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-400/20"
                      required
                    />
                  </label>

                  <label className="block space-y-2">
                    <span className="text-sm font-medium text-white/80">WhatsApp</span>
                    <input
                      type="tel"
                      value={whatsapp}
                      onChange={(event) => setWhatsapp(event.target.value)}
                      placeholder="+54 11 1234 5678"
                      className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-400/20"
                      required
                    />
                    <span className="text-xs text-white/45">Incluí el código de país y tu característica de área.</span>
                  </label>

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 px-5 py-4 text-base font-bold text-white shadow-lg shadow-emerald-500/25 transition hover:scale-[1.01] hover:shadow-emerald-500/35 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {loading ? "Enviando..." : "Solicitá una Demo Gratuita"}
                  </button>

                  {message ? (
                    <p className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
                      {message}
                    </p>
                  ) : null}

                  {error ? (
                    <p className="rounded-2xl border border-rose-400/20 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
                      {error}
                    </p>
                  ) : null}

                  <p className="text-xs leading-5 text-white/45">
                    Sin spam. Solo usamos tus datos para coordinar el diagnóstico.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section id="casos-de-uso" className="border-t border-white/5 bg-[#0a0a0a]">
          <div className="container py-16 sm:py-20">
            <div className="mb-10 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
                Problemas reales
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Lo que te hace perder consultas todos los días
              </h2>
              <div className="mt-5 h-px w-24 bg-gradient-to-r from-emerald-400/60 to-transparent" />
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "El cliente no espera",
                  description:
                    "Si tardás más de 5 minutos en responder por WhatsApp, muchas veces la consulta ya terminó en manos de la competencia.",
                  icon: "01",
                },
                {
                  title: "Respuestas repetitivas",
                  description:
                    "Perdés tiempo contestando siempre los mismos precios, horarios, ubicaciones y dudas básicas que podrían automatizarse.",
                  icon: "02",
                },
                {
                  title: "Pérdida de control",
                  description:
                    "Olvidar responder un chat o dejar una consulta para después puede hacerte perder ventas que ya estaban casi cerradas.",
                  icon: "03",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="group rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-6 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05] sm:p-7"
                >
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-bold text-white/60 transition-transform duration-300 group-hover:scale-105">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/60">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 bg-[#0a0a0a]">
          <div className="container py-16 sm:py-20">
            <div className="mb-10 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
                Problema vs solución
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                De responder tarde a atender 24/7
              </h2>
              <div className="mt-5 h-px w-24 bg-gradient-to-r from-emerald-400/60 to-transparent" />
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <div className="rounded-[1.75rem] border border-rose-500/15 bg-rose-500/[0.04] p-6 sm:p-7">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-400/20 bg-rose-500/10 px-3 py-1.5 text-sm font-semibold text-rose-200">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-rose-400" />
                  Problemas actuales del negocio
                </div>

                <div className="space-y-4">
                  {[
                    {
                      icon: "✕",
                      title: "Consultas que se enfrían",
                      text: "La persona escribe, espera y termina comprándole a quien responde primero.",
                    },
                    {
                      icon: "✕",
                      title: "Tiempo perdido repitiendo lo mismo",
                      text: "Precios, horarios, ubicación y disponibilidad una y otra vez por WhatsApp.",
                    },
                    {
                      icon: "✕",
                      title: "Seguimiento manual y desordenado",
                      text: "Chats olvidados, turnos sin confirmar y ventas que se caen antes de cerrar.",
                    },
                  ].map((item) => (
                    <article key={item.title} className="flex gap-4 rounded-2xl border border-white/5 bg-black/20 p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-rose-400/20 bg-rose-500/10 text-sm font-black text-rose-200">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-base font-bold">{item.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-white/60">{item.text}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-emerald-500/15 bg-emerald-500/[0.04] p-6 sm:p-7">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1.5 text-sm font-semibold text-emerald-200">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  Resultados con automatización
                </div>

                <div className="space-y-4">
                  {[
                    {
                      icon: "✓",
                      title: "Respuestas inmediatas",
                      text: "Cada consulta recibe atención al instante, incluso fuera de horario.",
                    },
                    {
                      icon: "✓",
                      title: "Agenda y presupuestos automáticos",
                      text: "El sistema responde, propone turnos y envía presupuestos sin fricción.",
                    },
                    {
                      icon: "✓",
                      title: "Seguimiento que no se olvida",
                      text: "Recordatorios y seguimiento para cerrar más citas con menos esfuerzo.",
                    },
                  ].map((item) => (
                    <article key={item.title} className="flex gap-4 rounded-2xl border border-white/5 bg-black/20 p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-500/10 text-sm font-black text-emerald-200">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-base font-bold">{item.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-white/60">{item.text}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="border-t border-white/5 bg-[#0a0a0a]">
          <div className="container py-16 sm:py-20">
            <div className="mb-10 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
                Cómo funciona la demo
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Tres pasos para ver el sistema en acción
              </h2>
              <div className="mt-5 h-px w-24 bg-gradient-to-r from-cyan-400/60 to-transparent" />
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Completás el formulario",
                  description: "Dejás tu nombre y WhatsApp arriba para pedir el diagnóstico.",
                },
                {
                  step: "02",
                  title: "Recibís el mensaje",
                  description: "Nuestro asistente te contacta automáticamente en menos de 10 segundos.",
                },
                {
                  step: "03",
                  title: "Probás el sistema",
                  description: "Experimentás en vivo cómo atenderíamos a tus propios clientes las 24 horas.",
                },
              ].map((item) => (
                <article
                  key={item.step}
                  className="rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-6 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05] sm:p-7"
                >
                  <div className="mb-6 flex items-center gap-3">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-500/10 text-sm font-bold text-emerald-200 shadow-[0_0_24px_-12px_rgba(52,211,153,0.8)]">
                      {item.step}
                    </div>
                    <div className="h-px flex-1 bg-white/10" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/60">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-6 sm:p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
                  Vista previa
                </p>
                <h3 className="mt-3 text-2xl font-black tracking-tight">
                  Tu agenda confirmada en automático
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-white/60">
                  Esta demo muestra el flujo ideal: el cliente pregunta, el sistema responde, propone horarios y deja la cita confirmada sin fricción.
                </p>
              </div>

              <div className="relative mx-auto w-full max-w-sm">
                <div className="absolute -inset-6 rounded-full bg-emerald-500/10 blur-3xl" />
                <div className="absolute -right-2 top-6 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl" />
                <div className="group relative animate-float rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-transform duration-500 ease-out hover:-translate-y-2 hover:rotate-[-1deg] hover:scale-[1.01]">
                  <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_30%,transparent_70%,rgba(16,185,129,0.08))] opacity-60" />
                  <img
                    src="/assets/whatsapp-demo-bot.png"
                    alt="Demo de automatización de WhatsApp con agenda confirmada"
                    className="relative z-10 h-auto w-full rounded-[1.5rem] object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default function App() {
  return null;
}
