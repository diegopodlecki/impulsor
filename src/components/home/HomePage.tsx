import { Suspense } from "react";
import { Hero } from "./Hero";
import { Header } from "./Header";
import { HowItWorks as HomeHowItWorks } from "./HowItWorks";
import { ProblemSolution } from "./ProblemSolution";
import { UseCases } from "./UseCases";
import { Footer } from "./Footer";
import { type WhatsAppDemoMessage } from "@/components/WhatsAppDemo";
import { FAQ } from "./FAQ";

type HomePageProps = {
  webhookUrl: string;
  messages: WhatsAppDemoMessage[];
};

export function HomePage({ webhookUrl, messages }: HomePageProps) {
  return (
    <>
      <Header />
      <Hero webhookUrl={webhookUrl} messages={messages} />

      <section className="border-t border-white/5 bg-[#090909]">
        <div className="container py-20 sm:py-24">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
              Ver una conversación real
            </p>
            <h2 className="font-heading mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Así se ve una atención automática en WhatsApp con IA
            </h2>
            <div className="mt-5 h-px w-24 bg-gradient-to-r from-emerald-400/60 to-transparent" />
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="overflow-hidden rounded-[2.25rem] border border-white/10 bg-[#111111] shadow-[0_24px_80px_-32px_rgba(0,0,0,0.9)]">
              <div className="flex items-center gap-3 border-b border-white/5 bg-[#111827] px-5 py-4">
                <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                  <span className="text-sm font-black">WA</span>
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#111827] bg-emerald-400" />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-white">Asistente de WhatsApp</p>
                  <p className="text-xs text-emerald-300/80">en línea ahora · respuesta automática</p>
                </div>
                <div className="ml-auto flex items-center gap-2 text-white/30">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                </div>
              </div>
              <div className="bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.08),transparent_40%)] p-4 sm:p-6">
                <div className="space-y-4">
                  <div className="rounded-[1.25rem] rounded-bl-md border border-white/5 bg-white/10 px-4 py-3 text-sm leading-6 text-white/90">
                    Hola, vi su landing y quiero saber si tienen turnos para esta semana.
                  </div>
                  <div className="ml-auto max-w-[85%] rounded-[1.25rem] rounded-br-md border border-emerald-400/20 bg-emerald-500/15 px-4 py-3 text-sm leading-6 text-white/90">
                    ¡Hola! Sí, claro. Te comparto los turnos disponibles y te ayudo a reservar el que mejor te quede.
                  </div>
                  <div className="ml-auto max-w-[85%] rounded-[1.25rem] rounded-br-md border border-emerald-400/20 bg-emerald-500/15 px-4 py-3 text-sm leading-6 text-white/90">
                    Tengo disponibles el martes 10:00, miércoles 14:30 y viernes 18:00. ¿Cuál preferís?
                  </div>
                  <div className="rounded-[1.25rem] rounded-bl-md border border-white/5 bg-white/10 px-4 py-3 text-sm leading-6 text-white/90">
                    El miércoles a las 14:30 me sirve.
                  </div>
                  <div className="ml-auto max-w-[85%] rounded-[1.25rem] rounded-br-md border border-emerald-400/20 bg-emerald-500/15 px-4 py-3 text-sm leading-6 text-white/90">
                    Perfecto. Ya te lo dejé reservado para el miércoles a las 14:30 y te envío un recordatorio antes del turno.
                  </div>
                  <div className="ml-auto inline-flex items-center gap-3 rounded-[1.25rem] rounded-br-md border border-emerald-400/20 bg-emerald-500/15 px-4 py-3 text-sm leading-6 text-white/90">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400 text-[11px] font-black text-slate-950">✓</span>
                    <span>
                      Confirmación enviada
                      <span className="ml-2 text-white/45">· calendario actualizado</span>
                    </span>
                  </div>
                  <div className="rounded-[1.25rem] rounded-bl-md border border-white/5 bg-white/10 px-4 py-3 text-sm leading-6 text-white/90">
                    Genial, así no tengo que estar pendiente de responder yo mismo.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <UseCases />
      <ProblemSolution />
      <section className="border-t border-white/5 bg-[#090909]">
        <div className="container py-20 sm:py-24">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">Testimonios</p>
            <h2 className="font-heading mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Casos reales de automatización que liberan tiempo y venden más
            </h2>
            <div className="mt-5 h-px w-24 bg-gradient-to-r from-cyan-400/60 to-transparent" />
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {[
              {
                name: "Dra. Lucía Ferreyra",
                role: "Odontóloga",
                problem: "Respondía consultas manualmente después de cada turno y perdía pacientes por demora.",
                result: "Con la automatización, los mensajes entran, se responden y los turnos quedan preconfirmados sin perseguir cada chat.",
                initials: "LF",
                accent: "from-cyan-500/20 to-sky-500/10",
              },
              {
                name: "Martín Rivas",
                role: "Nutricionista",
                problem: "Gastaba demasiado tiempo repitiendo horarios, precios y seguimiento de controles por WhatsApp.",
                result: "Ahora recibe consultas, agenda controles y envía recordatorios automáticos sin tener que responder lo mismo todo el día.",
                initials: "MR",
                accent: "from-emerald-500/20 to-green-500/10",
              },
              {
                name: "Sofía Castro",
                role: "Centro de estética",
                problem: "Las reservas y reprogramaciones se le mezclaban con mensajes de interés que se enfriaban rápido.",
                result: "Con el flujo automatizado, cada consulta recibe respuesta inmediata y los turnos quedan más ordenados y confirmados.",
                initials: "SC",
                accent: "from-pink-500/20 to-rose-500/10",
              },
            ].map((item) => (
              <article key={item.name} className="ds-card p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br ${item.accent} text-sm font-black text-white/80`}>
                    {item.initials}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold tracking-tight">{item.name}</h3>
                    <p className="text-sm text-emerald-200/80">{item.role}</p>
                  </div>
                </div>
                <div className="mt-5 space-y-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">Problema</p>
                    <p className="mt-1 text-sm leading-7 text-white/60">{item.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">Resultado obtenido</p>
                    <p className="mt-1 text-sm leading-7 text-white/60">{item.result}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <HomeHowItWorks />
      <Suspense fallback={null}>
        <FAQ />
      </Suspense>
      <Footer />
    </>
  );
}
