export function ProblemSolution() {
  return (
    <section className="border-t border-white/5 bg-[#0a0a0a]">
      <div className="container py-20 sm:py-24">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">Problema vs solución</p>
          <h2 className="font-heading mt-3 text-3xl font-black tracking-tight sm:text-4xl">De responder tarde a atender 24/7</h2>
          <div className="mt-5 h-px w-24 bg-gradient-to-r from-emerald-400/60 to-transparent" />
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="ds-card border-rose-500/15 bg-rose-500/[0.04] p-6 sm:p-7">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-400/20 bg-rose-500/10 px-3 py-1.5 text-sm font-semibold text-rose-200">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-rose-400" />
              Problemas actuales del negocio
            </div>
            <div className="space-y-4">
              {[
                { icon: "✕", title: "Consultas que se enfrían", text: "La persona escribe, espera y termina comprándole a quien responde primero." },
                { icon: "✕", title: "Tiempo perdido repitiendo lo mismo", text: "Precios, horarios, ubicación y disponibilidad una y otra vez por WhatsApp." },
                { icon: "✕", title: "Seguimiento manual y desordenado", text: "Chats olvidados, turnos sin confirmar y ventas que se caen antes de cerrar." },
              ].map((item) => (
                <article key={item.title} className="flex gap-4 rounded-2xl border border-white/5 bg-black/20 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-rose-400/20 bg-rose-500/10 text-sm font-black text-rose-200">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-white/60">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="ds-card border-emerald-400/20 bg-white/[0.04] p-6 sm:p-7">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1.5 text-sm font-semibold text-emerald-200">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              Resultados con automatización
            </div>
            <div className="space-y-4">
              {[
                { icon: "✓", title: "Respuestas inmediatas", text: "Cada consulta recibe atención al instante, incluso fuera de horario." },
                { icon: "✓", title: "Agenda y presupuestos automáticos", text: "El sistema responde, propone turnos y envía presupuestos sin fricción." },
                { icon: "✓", title: "Seguimiento que no se olvida", text: "Recordatorios y seguimiento para cerrar más citas con menos esfuerzo." },
              ].map((item) => (
                <article key={item.title} className="flex gap-4 rounded-2xl border border-white/5 bg-black/20 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-500/10 text-sm font-black text-emerald-200">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-white/60">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
