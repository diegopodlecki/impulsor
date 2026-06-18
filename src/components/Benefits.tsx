import { motion } from "framer-motion";
import { Clock, TrendingUp, DollarSign, Users } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "24/7",
    label: "Atención sin pausa",
    desc: "Tu negocio nunca cierra. El bot responde feriados, fines de semana y a las 3am.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: TrendingUp,
    value: "3.2x",
    label: "Más conversiones",
    desc: "Promedio de clientes que pasan de consulta a venta con respuesta inmediata.",
    color: "from-violet-500 to-indigo-600",
  },
  {
    icon: DollarSign,
    value: "65%",
    label: "Menos costo operativo",
    desc: "Reducí el costo por consulta atendida vs. un operador humano tradicional.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Users,
    value: "+120",
    label: "Profesionales activos",
    desc: "Odontólogos, abogados, inmobiliarias, gimnasios y más en toda la provincia.",
    color: "from-rose-500 to-pink-600",
  },
];

export default function Benefits() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 bg-ink-50 px-3 py-1 text-xs font-semibold text-ink-700">
            Por qué WebApp Impulsor
          </span>
          <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
            Números que hablan por sí solos
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-ink-200 bg-white p-6 transition hover:border-ink-300 hover:shadow-xl hover:shadow-ink-900/5"
              >
                <div className={`absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${s.color} opacity-10 blur-2xl transition group-hover:opacity-20`} />

                <div className={`relative grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${s.color} text-white shadow-lg`}>
                  <Icon className="h-5 w-5" strokeWidth={2.4} />
                </div>

                <div className="font-display mt-5 text-4xl font-extrabold tracking-tight text-ink-900">
                  {s.value}
                </div>
                <div className="mt-1 text-sm font-semibold text-ink-700">{s.label}</div>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
