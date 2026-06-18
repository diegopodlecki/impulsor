import { motion } from "framer-motion";
import { Bot, CalendarClock, CreditCard, Users, Workflow, Sparkles } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Asistentes de IA conversacional",
    desc: "Responden como vos, pero sin pausa. Califican consultas, ordenan oportunidades y sacan trabajo repetido de encima.",
    tag: "Más pedido",
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50",
    text: "text-emerald-700",
  },
  {
    icon: CalendarClock,
    title: "Agenda automática de turnos",
    desc: "El cliente reserva solo, recibe confirmación y recordatorio. Menos mensajes manuales, menos ausencias.",
    tag: "Anti no-show",
    color: "from-violet-500 to-indigo-600",
    bg: "bg-violet-50",
    text: "text-violet-700",
  },
  {
    icon: CreditCard,
    title: "Cobro de señas por WhatsApp",
    desc: "Cobrás sin sacar al cliente del chat. Ideal para filtrar curiosos y convertir interés en compromiso.",
    tag: "Convierte mejor",
    color: "from-sky-500 to-cyan-600",
    bg: "bg-sky-50",
    text: "text-sky-700",
  },
  {
    icon: Users,
    title: "CRM y seguimiento de leads",
    desc: "Cada conversación queda registrada para que tu equipo sepa a quién llamar, cuándo y con qué propuesta.",
    tag: "Orden comercial",
    color: "from-amber-500 to-orange-600",
    bg: "bg-amber-50",
    text: "text-amber-700",
  },
  {
    icon: Workflow,
    title: "Automatizaciones a medida",
    desc: "Conectamos WhatsApp con tu agenda, planillas y procesos para que la operación se mueva sola.",
    tag: "A medida",
    color: "from-rose-500 to-pink-600",
    bg: "bg-rose-50",
    text: "text-rose-700",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            <Sparkles className="h-3 w-3" />
            Soluciones
          </span>
          <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
            Soluciones que te ayudan a vender y atender mejor{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
              sin fricción
            </span>
          </h2>
          <p className="mt-4 text-lg text-ink-600">
            Elegís el punto de entrada que más te conviene. Nosotros nos encargamos de que tu WhatsApp empiece a trabajar mejor.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-2xl border border-ink-200 bg-white p-6 transition hover:border-ink-300 hover:shadow-xl hover:shadow-ink-900/5"
              >
                <div className={`absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${s.color} opacity-10 blur-2xl transition group-hover:opacity-20`} />

                <div className="relative flex items-start justify-between">
                  <div className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${s.color} text-white shadow-lg`}>
                    <Icon className="h-6 w-6" strokeWidth={2.2} />
                  </div>
                  <span className={`rounded-full ${s.bg} px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${s.text}`}>
                    {s.tag}
                  </span>
                </div>

                <h3 className="font-display mt-5 text-lg font-bold text-ink-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{s.desc}</p>

                <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-ink-900 transition group-hover:gap-2.5">
                  Quiero automatizar esto
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
