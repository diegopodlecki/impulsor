import { motion } from "framer-motion";
import { ArrowRight, Quote, Star } from "lucide-react";
import ChatLoop from "./ChatLoop";

const cases = [
  {
    sector: "Salud",
    title: "Clínica Dental Sonríe · Belgrano",
    image: "/images/professional-woman.jpg",
    avatar: "/images/avatar-2.jpg",
    stat: "+180%",
    statLabel: "turnos agendados",
    quote:
      "Pasamos de 60 a 170 turnos mensuales. El bot agenda, cobra la seña y manda el recordatorio. Mi recepcionista ahora se enfoca en atención.",
    person: "Dra. Laura Méndez",
    role: "Directora · Clínica Sonríe",
    points: [
      "Reserva de turnos 24/7 sin llamadas",
      "Cobro automático de seña por MP",
      "Recordatorios con menos no-shows",
    ],
    chat: {
      title: "Clínica Sonríe",
      initials: "CS",
      messages: [
        { from: "user" as const, text: "Hola, ¿tienen turno para limpieza?", delay: 1300 },
        { from: "bot" as const, text: "¡Hola! 😊 Tengo jueves 17 hs o viernes 16:30. ¿Cuál preferís?", delay: 1700 },
        { from: "user" as const, text: "Jueves 17", delay: 1200 },
        { from: "bot" as const, text: "¡Reservado! ✅ Te paso el link para la seña 💳", delay: 1700 },
      ],
    },
  },
  {
    sector: "Legal",
    title: "Estudio Pérez & Asoc. · La Plata",
    image: "/images/avatar-1.jpg",
    avatar: "/images/avatar-3.jpg",
    stat: "12hs/sem",
    statLabel: "ahorradas",
    quote:
      "Filtramos los 200 mensajes diarios que recibíamos. El bot responde dudas frecuentes, agenda reuniones y solo nos pasa lo importante.",
    person: "Dr. Martín Pérez",
    role: "Socio fundador",
    points: [
      "Calificación de leads por área legal",
      "Agenda de reuniones con secretarias",
      "Documentación inicial por WhatsApp",
    ],
    chat: {
      title: "Estudio Pérez",
      initials: "EP",
      messages: [
        { from: "user" as const, text: "Necesito asesoría por un despido", delay: 1400 },
        { from: "bot" as const, text: "Entiendo. ⚖️ Es un caso de derecho laboral. ¿Coordinamos consulta?", delay: 1800 },
        { from: "user" as const, text: "Sí, esta semana", delay: 1200 },
        { from: "bot" as const, text: "Te agendo con el Dr. Pérez el miércoles 11 hs. ✅", delay: 1800 },
      ],
    },
  },
];

export default function UseCases() {
  return (
    <section id="casos" className="relative bg-gradient-to-b from-transparent via-emerald-50/40 to-transparent py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
            <Star className="h-3 w-3 fill-current" />
            Casos reales
          </span>
          <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
            Pruebas reales de que{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
              la automatización vende
            </span>
          </h2>
          <p className="mt-4 text-lg text-ink-600">
            Vemos menos fricción, más turnos y más consultas calificadas en negocios como el tuyo.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-ink-200 bg-white shadow-lg shadow-ink-900/5 transition hover:shadow-2xl hover:shadow-ink-900/10"
            >
              <div className="relative h-72 overflow-hidden sm:h-80">
                <img
                  src={c.image}
                  alt={c.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/30 to-ink-900/10" />

                <div className="absolute left-5 top-5">
                  <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-ink-900 shadow-sm backdrop-blur">
                    {c.sector}
                  </span>
                </div>

                <div className="absolute left-5 top-16">
                  <div className="rounded-2xl bg-white/95 px-4 py-2 shadow-sm backdrop-blur">
                    <div className="font-display text-2xl font-extrabold leading-none text-emerald-600">
                      {c.stat}
                    </div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-ink-500">
                      {c.statLabel}
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="absolute right-4 top-4 w-52"
                >
                  <div className="mb-1.5 flex items-center justify-end gap-1.5">
                    <motion.span
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.2, repeat: Infinity }}
                      className="h-1.5 w-1.5 rounded-full bg-rose-500"
                    />
                    <span className="text-[9px] font-bold uppercase tracking-wider text-white">
                      Demo en vivo
                    </span>
                  </div>
                  <ChatLoop title={c.chat.title} initials={c.chat.initials} messages={c.chat.messages} />
                </motion.div>

                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="font-display text-xl font-bold text-white drop-shadow sm:text-2xl">
                    {c.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <div className="relative">
                  <Quote className="absolute -left-1 -top-1 h-6 w-6 text-emerald-200" />
                  <p className="pl-7 text-sm leading-relaxed text-ink-700 sm:text-base">"{c.quote}"</p>
                </div>

                <div className="mt-5 flex items-center gap-3 border-t border-ink-100 pt-5">
                  <img src={c.avatar} alt={c.person} className="h-11 w-11 rounded-full object-cover ring-2 ring-emerald-100" />
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-ink-900">{c.person}</div>
                    <div className="text-xs text-ink-500">{c.role}</div>
                  </div>
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(5)].map((_, k) => (
                      <Star key={k} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <ul className="mt-5 space-y-2">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-ink-700">
                      <span className="mt-0.5 grid h-4 w-4 flex-shrink-0 place-items-center rounded-full bg-emerald-100">
                        <svg viewBox="0 0 24 24" className="h-2.5 w-2.5 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacto"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 transition hover:gap-2.5 hover:text-emerald-700"
                >
                  Quiero un resultado así
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
