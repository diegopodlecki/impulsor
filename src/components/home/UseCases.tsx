export function UseCases() {
  return (
    <section id="casos-de-uso" className="border-t border-white/5 bg-[#0a0a0a]">
      <div className="container py-20 sm:py-24">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
            Casos de uso
          </p>
          <h2 className="font-heading mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Cada rubro tiene un problema distinto
          </h2>
          <div className="mt-5 h-px w-24 bg-gradient-to-r from-emerald-400/60 to-transparent" />
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[
            {
              label: "Odontólogos",
              problem: "Consultas por turnos, urgencias y mensajes que llegan fuera de horario.",
              result: "Respuestas automáticas y confirmación de turnos sin fricción.",
              href: "/odontologos",
              accent: "from-cyan-500/20 to-sky-500/10",
            },
            {
              label: "Médicos",
              problem: "Consultas dispersas entre WhatsApp, llamados y agenda manual.",
              result: "Primer contacto claro, turnos simples y seguimiento automático.",
              href: "/medicos",
              accent: "from-violet-500/20 to-fuchsia-500/10",
            },
            {
              label: "Fonoaudiólogos",
              problem: "Consultas repetidas sobre horarios, modalidad y duración de las sesiones.",
              result: "Respuestas frecuentes automatizadas y agenda más ordenada.",
              href: "/fonoaudiologos",
              accent: "from-lime-500/20 to-emerald-500/10",
            },
            {
              label: "Abogados",
              problem: "Consultas legales que requieren una primera respuesta profesional y rápida.",
              result: "Filtrado inicial, contacto ordenado y seguimiento de prospectos.",
              href: "/abogados",
              accent: "from-blue-500/20 to-cyan-500/10",
            },
            {
              label: "Inmobiliarias",
              problem: "Consultas de propiedades que se enfrían si no respondés rápido.",
              result: "Más visitas agendadas y seguimiento automático de interesados.",
              href: "/inmobiliarias",
              accent: "from-pink-500/20 to-rose-500/10",
            },
          ].map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className="group block ds-card p-6 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05] sm:p-7"
            >
              <div className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br ${item.accent} text-sm font-bold text-white/80 transition-transform duration-300 group-hover:scale-105`}>
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-xl font-bold tracking-tight">{item.label}</h3>
              <div className="mt-4 space-y-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
                    Problema principal
                  </p>
                  <p className="mt-1 text-sm leading-7 text-white/60">{item.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
                    Resultado esperado
                  </p>
                  <p className="mt-1 text-sm leading-7 text-white/60">{item.result}</p>
                </div>
              </div>
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 transition-transform group-hover:translate-x-1">
                Ver solución
                <span aria-hidden="true">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
