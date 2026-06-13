/* eslint-disable react-refresh/only-export-components */
import { FormEvent, useState } from "react";
import type { RouteRecord } from "vite-react-ssg";

import { SeoHead } from "@/components/SEO/SeoHead";
import { Toaster } from "@/components/ui/sonner.tsx";

const webhookUrl = "TU_URL_DE_WEBHOOK_EN_MAKE";

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
          <div className="container relative z-10 flex min-h-screen items-center py-16">
            <div className="grid w-full gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-200 backdrop-blur">
                  MVP de Automatización de WhatsApp
                </div>

                <div className="space-y-5">
                  <h1 className="max-w-3xl text-balance text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
                    ¿Perdés clientes porque no llegás a responder WhatsApp?
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
                    Automatizá tus respuestas, enviá presupuestos y agendá clientes 24/7 sin mover un dedo.
                  </p>
                </div>

                <div className="grid max-w-2xl gap-3 sm:grid-cols-3">
                  {["Respuestas automáticas", "Presupuestos instantáneos", "Agenda sin fricción"].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75 backdrop-blur"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
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

                <form onSubmit={handleSubmit} className="space-y-4">
                  <label className="block space-y-2">
                    <span className="text-sm font-medium text-white/80">Nombre</span>
                    <input
                      type="text"
                      value={nombre}
                      onChange={(event) => setNombre(event.target.value)}
                      placeholder="Tu nombre completo"
                      className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-400/20"
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
                      className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-400/20"
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
      </main>
    </>
  );
}

export default function App() {
  return null;
}
