export function HowItWorks() {
  return (
    <section id="como-funciona" className="border-t border-white/5 bg-[#0a0a0a]">
      <div className="container py-20 sm:py-24">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
            Cómo funciona
          </p>
          <h2 className="font-heading mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Un proceso simple para automatizar sin incertidumbre
          </h2>
          <div className="mt-5 h-px w-24 bg-gradient-to-r from-cyan-400/60 to-transparent" />
        </div>

        <div className="grid gap-4 lg:grid-cols-4">
          {[
            { step: "01", icon: "?", title: "Diagnóstico", description: "Revisamos tu flujo actual y detectamos dónde se pierden consultas y turnos." },
            { step: "02", icon: "⚙", title: "Configuración", description: "Armamos mensajes, reglas y conexiones según tu negocio." },
            { step: "03", icon: "⚡", title: "Automatización", description: "El asistente responde, agenda y hace seguimiento por WhatsApp." },
            { step: "04", icon: "→", title: "Puesta en marcha", description: "Lo dejamos funcionando y listo para recibir consultas reales." },
          ].map((item) => (
            <article key={item.step} className="relative ds-card p-6 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05] sm:p-7">
              {item.step !== "04" ? (
                <div className="absolute right-[-0.75rem] top-10 hidden h-px w-4 bg-gradient-to-r from-emerald-400/60 to-transparent lg:block" />
              ) : null}
              <div className="mb-6 flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-500/10 text-sm font-bold text-emerald-200 shadow-[0_0_24px_-12px_rgba(52,211,153,0.8)]">
                  {item.icon}
                </div>
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-xs font-semibold tracking-[0.2em] text-white/35">{item.step}</span>
              </div>
              <div className="mb-5 h-px w-full bg-white/5 lg:hidden" />
              <h3 className="text-xl font-bold tracking-tight">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/60">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
