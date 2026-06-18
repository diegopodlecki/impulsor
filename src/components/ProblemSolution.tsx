import { motion } from "framer-motion";
import { AlertTriangle, ArrowRight, Check, CheckCircle2, Sparkles } from "lucide-react";

const pains = [
  "Perdés ventas por responder tarde",
  "Te pasás el día agendando turnos a mano",
  "Tu equipo se satura con preguntas repetidas",
];

const solutions = [
  "Respondés 24/7 con un asistente que califica y deriva al instante",
  "La agenda queda automatizada y el cliente reserva solo",
  "El bot resuelve lo repetitivo y tu equipo se enfoca en cerrar",
];

export default function ProblemSolution() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 text-white sm:py-32">
      <div className="absolute inset-0 bg-grid-dark opacity-40" />
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-rose-500/15 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-400/20 bg-rose-500/10 px-3 py-1 text-xs font-semibold text-rose-200">
            <Sparkles className="h-3 w-3" />
            Problema vs Solución
          </span>
          <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Menos fricción. Más consultas que avanzan.
          </h2>
          <p className="mt-4 text-lg text-ink-300">
            Mostramos el dolor de negocio, no la jerga técnica. La automatización entra para sacar peso del día a día.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/10"
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-rose-200">
              <AlertTriangle className="h-4 w-4" />
              Problemas que frenan ventas
            </div>
            <div className="mt-6 space-y-3">
              {pains.map((pain) => (
                <div key={pain} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-rose-500/20 text-rose-200">
                    !
                  </span>
                  <p className="text-sm leading-relaxed text-ink-100">{pain}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="relative rounded-3xl border border-emerald-400/20 bg-white/5 p-6 shadow-2xl shadow-black/10"
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-200">
              <CheckCircle2 className="h-4 w-4" />
              Cómo lo resolvemos en piloto automático
            </div>
            <div className="mt-6 space-y-3">
              {solutions.map((solution) => (
                <div key={solution} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-emerald-500/20 text-emerald-200">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm leading-relaxed text-ink-100">{solution}</p>
                </div>
              ))}
            </div>

            <a
              href="#contacto"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:shadow-xl hover:shadow-emerald-500/40"
            >
              Quiero automatizar mi negocio
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
