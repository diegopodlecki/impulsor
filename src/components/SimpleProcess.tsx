import { motion } from "framer-motion";
import { MessageCircle, Settings2, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "1. Diagnóstico gratuito",
    desc: "Agendás una consulta corta y vemos dónde estás perdiendo tiempo o ventas.",
  },
  {
    icon: Settings2,
    title: "2. Creamos tu flujo a medida",
    desc: "Diseñamos tu asistente y automatizaciones según tu negocio y tu forma de trabajar.",
  },
  {
    icon: Rocket,
    title: "3. Disfrutás tu negocio automatizado",
    desc: "Lo dejamos funcionando y empezás a atender más sin sumar carga operativa.",
  },
];

export default function SimpleProcess() {
  return (
    <section id="como-funciona" className="relative overflow-hidden bg-ink-950 py-24 text-white sm:py-32">
      <div className="absolute inset-0 bg-grid-dark opacity-40" />
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-200">
            Proceso simple
          </span>
          <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Sin vueltas, sin miedo al cambio
          </h2>
          <p className="mt-4 text-lg text-ink-300">
            Un flujo claro en 3 pasos para que entiendas qué pasa antes, durante y después de automatizar.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/10"
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/25">
                    <Icon className="h-6 w-6" strokeWidth={2.2} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-300">{step.desc}</p>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="absolute right-[-14px] top-10 hidden h-px w-8 bg-gradient-to-r from-emerald-400/70 to-transparent lg:block" />
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-full border border-emerald-400/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-300/40 hover:bg-white/10"
          >
            Solicitar diagnóstico gratis
          </a>
        </div>
      </div>
    </section>
  );
}
