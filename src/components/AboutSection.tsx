export default function AboutSection() {
  return (
    <section id="nosotros" className="relative py-24 bg-slate-900/50">
      <div className="container">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left - Text Content */}
          <div className="lg:col-span-3 space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
                ¿Quién está detrás de WebAppImpulsor?
              </h2>
              <div className="space-y-4 text-lg text-white/60 leading-relaxed">
                <p>
                  Somos un equipo especializado en diseño web para negocios de servicios en Argentina. 
                  No hacemos webs genéricas: cada landing está pensada para el rubro de nuestro cliente, 
                  con foco en generar consultas reales.
                </p>
                <p>
                  Trabajamos con gimnasios, profesionales de la salud, entrenadores y emprendedores que 
                  necesitan una presencia digital que funcione, no una tarjeta personal online.
                </p>
              </div>
            </div>
          </div>

          {/* Right - Value Cards */}
          <div className="lg:col-span-2 space-y-4">
            <div className="p-5 rounded-xl bg-slate-800/40 border border-slate-700/50">
              <div className="flex items-start gap-4">
                <span className="text-2xl">🎯</span>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Foco en resultados</h3>
                  <p className="text-sm text-white/50">
                    Cada decisión de diseño apunta a convertir visitantes en consultas. Nada es decorativo.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-800/40 border border-slate-700/50">
              <div className="flex items-start gap-4">
                <span className="text-2xl">⚡</span>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Velocidad real</h3>
                  <p className="text-sm text-white/50">
                    7 días desde el primer contacto hasta tu web online. Sin burocracia ni esperas.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-800/40 border border-slate-700/50">
              <div className="flex items-start gap-4">
                <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="28" height="6.67" fill="#74ACDF"/>
                  <rect y="6.67" width="28" height="6.67" fill="white"/>
                  <rect y="13.33" width="28" height="6.67" fill="#74ACDF"/>
                  <circle cx="14" cy="10" r="2.5" fill="#F6B40E"/>
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">100% local</h3>
                  <p className="text-sm text-white/50">
                    Entendemos el mercado argentino, los precios locales y la forma en que tus clientes buscan servicios.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}