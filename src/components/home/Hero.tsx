import { motion } from "framer-motion";
import { Suspense } from "react";
import { WhatsAppDemo, type WhatsAppDemoMessage } from "@/components/WhatsAppDemo";
import { ContactForm } from "./ContactForm";

type HeroProps = {
  messages: WhatsAppDemoMessage[];
  webhookUrl: string;
};

export function Hero({ messages, webhookUrl }: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.14),transparent_30%),radial-gradient(circle_at_left,rgba(14,165,233,0.08),transparent_28%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.25),rgba(2,6,23,0.55))]" />

      <div className="container relative z-10 flex min-h-[calc(100vh-5rem)] items-center py-16 sm:py-20">
        <div className="grid w-full gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8 pt-2"
          >
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-500/10 px-4 py-2 text-[11px] font-semibold tracking-[0.22em] text-emerald-200 uppercase shadow-[0_0_0_1px_rgba(16,185,129,0.04)]">
              MVP de automatización de WhatsApp
            </div>

            <div className="space-y-6">
              <h1 className="font-heading max-w-3xl text-balance text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-[4.6rem]">
                Automatizá WhatsApp y conseguí más clientes sin trabajar más horas
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
                Implementamos asistentes automáticos para profesionales y negocios de servicios que responden consultas, gestionan turnos y hacen seguimiento de clientes 24/7.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#contacto"
                className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-green-500 px-6 py-4 text-base font-bold text-white shadow-lg shadow-emerald-500/25 transition hover:translate-y-[-1px] hover:shadow-emerald-500/35"
              >
                Solicitar diagnóstico gratuito
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-4 text-base font-semibold text-white/85 transition hover:border-white/15 hover:bg-white/10"
              >
                Ver demostración
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {["Respuesta inmediata", "Turnos confirmados", "Seguimiento automático"].map((item) => (
                <div key={item} className="ds-card-soft px-4 py-3 text-sm font-medium text-white/75">
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-sm text-white/55">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(16,185,129,0.12)]" />
                Respuesta en menos de 10 segundos
              </div>
              <div className="hidden h-5 w-px bg-white/10 sm:block" />
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_0_6px_rgba(34,211,238,0.12)]" />
                Turnos, presupuestos y seguimiento
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.08 }}
            className="relative lg:sticky lg:top-8"
          >
            <WhatsAppDemo
              title="WebAppImpulsor"
              subtitle="en línea · respuesta automática"
              accentLabel="DEMO EN VIVO"
              messages={messages}
            />
            <Suspense fallback={null}>
              <ContactForm webhookUrl={webhookUrl} />
            </Suspense>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
