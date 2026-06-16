import { Suspense } from "react";
import { motion } from "framer-motion";

import { type WhatsAppDemoMessage } from "@/components/WhatsAppDemo";
import { FAQ } from "./FAQ";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { HowItWorks as HomeHowItWorks } from "./HowItWorks";
import { ProblemSolution } from "./ProblemSolution";
import { UseCases } from "./UseCases";

type HomePageProps = {
  webhookUrl: string;
  messages: WhatsAppDemoMessage[];
};

const testimonialCards = [
  {
    name: "Dra. Lucía Ferreyra",
    role: "Odontóloga",
    image: "/images/professional-woman.jpg",
    problem: "Respondía consultas manualmente después de cada turno y perdía pacientes por demora.",
    result:
      "Con la automatización, los mensajes entran, se responden y los turnos quedan preconfirmados sin perseguir cada chat.",
  },
  {
    name: "Martín Rivas",
    role: "Nutricionista",
    image: "/images/team-meeting.jpg",
    problem: "Gastaba demasiado tiempo repitiendo horarios, precios y seguimiento de controles por WhatsApp.",
    result:
      "Ahora recibe consultas, agenda controles y envía recordatorios automáticos sin tener que responder lo mismo todo el día.",
  },
  {
    name: "Sofía Castro",
    role: "Centro de estética",
    image: "/images/dashboard.jpg",
    problem: "Las reservas y reprogramaciones se le mezclaban con mensajes de interés que se enfriaban rápido.",
    result:
      "Con el flujo automatizado, cada consulta recibe respuesta inmediata y los turnos quedan más ordenados y confirmados.",
  },
];

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

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[0_24px_80px_-36px_rgba(0,0,0,0.75)]"
            >
              <img
                src="/images/hero-bg.jpg"
                alt="Fondo editorial de referencia para automatización de WhatsApp"
                width={1200}
                height={800}
                loading="lazy"
                className="h-[360px] w-full object-cover sm:h-[420px]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.18),rgba(2,6,23,0.78))]" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                  Atención 24/7
                </p>
                <p className="mt-2 max-w-md text-sm leading-7 text-white/80">
                  Un flujo más visual para mostrar respuestas rápidas, turnos confirmados y seguimiento automático.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.06 }}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111] shadow-[0_24px_80px_-32px_rgba(0,0,0,0.9)]"
            >
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
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400 text-[11px] font-black text-slate-950">
                      ✓
                    </span>
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
            </motion.div>
          </div>
        </div>
      </section>

      <UseCases />
      <ProblemSolution />

      <section className="border-t border-white/5 bg-[#070707]">
        <div className="container py-20 sm:py-24">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">Testimonios</p>
            <h2 className="font-heading mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Casos reales de automatización que liberan tiempo y venden más
            </h2>
            <div className="mt-5 h-px w-24 bg-gradient-to-r from-cyan-400/60 to-transparent" />
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {testimonialCards.map((item, index) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[0_20px_60px_-38px_rgba(0,0,0,0.75)] transition hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.05]"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.05),rgba(2,6,23,0.68))]" />
                  <div className="absolute left-4 top-4 inline-flex rounded-full border border-white/10 bg-gradient-to-br from-white/5 to-white/10 px-3 py-1 text-[11px] font-semibold text-white">
                    {item.role}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold tracking-tight text-white">{item.name}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">Problema</p>
                      <p className="mt-1 text-sm leading-7 text-white/60">{item.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
                        Resultado obtenido
                      </p>
                      <p className="mt-1 text-sm leading-7 text-white/60">{item.result}</p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-[#0a0a0a]">
        <div className="container py-20 sm:py-24">
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">Cómo funciona</p>
              <h2 className="font-heading mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Un proceso simple para automatizar sin incertidumbre
              </h2>
              <div className="mt-5 h-px w-24 bg-gradient-to-r from-cyan-400/60 to-transparent" />
            </div>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[0_20px_60px_-36px_rgba(0,0,0,0.75)]">
              <img
                src="/images/team-meeting.jpg"
                alt="Equipo revisando un flujo de automatización"
                loading="lazy"
                width={1200}
                height={800}
                className="h-56 w-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.08),rgba(2,6,23,0.7))]" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                  Diseño y operación
                </p>
                <p className="mt-2 max-w-lg text-sm leading-6 text-white/80">
                  Más cercano al proyecto de referencia: imágenes reales, contraste alto y sensación de sistema vivo.
                </p>
              </div>
            </div>
          </div>

          <HomeHowItWorks />
        </div>
      </section>

      <Suspense fallback={null}>
        <FAQ />
      </Suspense>
      <Footer />
    </>
  );
}
