import { MessageCircle, CheckCircle, ArrowRight, Sparkles, Droplet, Flower2, Star, Gem, Play } from 'lucide-react';
import BeforeAfterSection from '@/components/landings/BeforeAfterSection';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web para Centros de Estética | Página que reserva turnos por WhatsApp",
  description: "Creamos tu página web profesional para centros de estética. Tu centro de belleza merece ser encontrado.",
  keywords: ["web para estética", "página web para centro de estética", "web estética"]
};

const TREATMENTS = [
  { 
    icon: Droplet, 
    title: "Cuerpo esculpido", 
    desc: "Lipoescultura y reducción de grasa localizada. Resultados que tus clientas quieren mostrar.",
    highlight: " -8cm en 4 semanas"
  },
  { 
    icon: Flower2, 
    title: "Piel radiante", 
    desc: "Limpieza, hidratación y rejuvenecimiento. Tratamientos que cambian cómo te sentís.",
    highlight: "Efecto glow inmediato"
  },
  { 
    icon: Sparkles, 
    title: "Firmeza visible", 
    desc: "Radiofrecuencia y tensado. Tu tecnología, visible para quien busca resultados.",
    highlight: "Piel 5 años más joven"
  },
  { 
    icon: Gem, 
    title: "Confianza plena", 
    desc: "Celulitis, estrías y tonificación. Tratamientos que tus clientas recomiendan.",
    highlight: "99% satisfacción"
  },
];

const STATS = [
  { value: "15", label: "Clientas nuevas/mes" },
  { value: "100%", label: "Más reservas" },
  { value: "30 días", label: "Para agenda llena" },
];

const GALLERY = [
  { img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&h=600&fit=crop", title: "Tratamientos" },
  { img: "https://images.unsplash.com/photo-1598524374912-6f40a6c4b22e?w=800&h=600&fit=crop", title: "Tu espacio" },
  { img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop", title: "Resultados" },
  { img: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=600&fit=crop", title: "Antes y después" },
];

const BEFORE_AFTER_ESTETICA = [
  {
    before: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=800&fit=crop&q=80",
    after: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=800&fit=crop&q=80",
    name: "Bella Piel Centro",
    result: "Doubled monthly appointments within 60 days of launching their new website",
    timeframe: "60 días",
  },
  {
    before: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=800&fit=crop&q=80",
    after: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=800&fit=crop&q=80",
    name: "Glow Estética",
    result: "Premium positioning increased average ticket value by 40%",
    timeframe: "45 días",
  },
  {
    before: "https://images.unsplash.com/photo-1598524374912-6f40a6c4b22e?w=600&h=800&fit=crop&q=80",
    after: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=800&fit=crop&q=80",
    name: "DermaCare Plus",
    result: "85% of new clients now come from Google searches",
    timeframe: "30 días",
  },
];

const TESTIMONIALS = [
  {
    quote: "Las clientas llegan sabiendo qué tratamiento quieren. Ya no explico todo desde cero por WhatsApp.",
    author: "Patricia Solís",
    role: "Directora · Bella Piel",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&q=80",
  },
  {
    quote: "Mi centro se ve premium. Las clientas llegan convencidas, no comparando precios.",
    author: "Valeria Moyano",
    role: "Esteticista · Núñez",
    avatar: "https://images.unsplash.com/photo-1541823709867-1b206113eafd?w=200&h=200&fit=crop&q=80",
  },
  {
    quote: "Mis tratamientos están clarísimos en la web. Las clientas reservan directo por WhatsApp.",
    author: "Catalina Reyes",
    role: "Centro de Estética · Palermo",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop&q=80",
  },
];

const PROCESS = [
  { num: "01", title: "Conversamos", desc: "Primer contacto sin cargo. Entiendo tu centro y tu objetivo de clientas." },
  { num: "02", title: "Diseñamos", desc: "Creo tu web con tratamientos, precios y fotos profesionales." },
  { num: "03", title: "Publicamos", desc: "Tu web online en 7 días. Comenzás a recibir reservas automáticamente." },
];

export default function EsteticaCorporal() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50/30 via-white to-pink-50/20 text-slate-800 overflow-hidden">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="backdrop-blur-2xl bg-white/80 border-b border-slate-200/50">
          <div className="container">
            <div className="flex items-center justify-between h-20 py-5">
              <a href="/" className="flex items-center gap-3 group">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center shadow-lg shadow-rose-500/25 group-hover:scale-105 transition-transform">
                  <span className="text-white font-bold text-xl">W</span>
                </div>
                <span className="text-slate-800 font-bold text-xl tracking-tight">Impulsor</span>
              </a>
              <a href="#contacto" className="px-6 py-3 text-sm font-semibold rounded-full bg-gradient-to-r from-rose-400 to-pink-500 text-white hover:scale-105 hover:shadow-lg hover:shadow-rose-500/25 transition-all">
                Quiero más clientas
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1920&h=1080&fit=crop&q=85" 
            alt="Centro de estética" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-rose-950/90 via-pink-950/80 to-slate-950/90" />
        </div>

        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-rose-500/20 to-pink-500/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-pink-400/15 to-rose-300/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '0.5s' }} />

        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-rose-300 text-sm font-semibold backdrop-blur-sm">
              <Sparkles className="w-5 h-5" />
              Web para Centros de Estética
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              <span className="text-white">Tu centro de belleza</span>
              <br />
              <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                merece ser encontrado
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Web premium que muestra tratamientos y genera reservas directo. 
              <span className="text-rose-400 font-medium"> Clientas que llegan sabiendo qué quieren.</span>
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 py-4">
              {STATS.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <a href="#contacto" className="inline-flex items-center justify-center gap-3 px-8 py-4.5 text-lg font-semibold rounded-2xl bg-gradient-to-r from-rose-400 to-pink-500 text-white shadow-2xl shadow-rose-500/30 hover:scale-[1.02] hover:shadow-rose-500/50 transition-all">
                Quiero más clientas <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#ver-ejemplo" className="inline-flex items-center justify-center gap-3 px-8 py-4.5 text-lg font-medium rounded-2xl border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all">
                <Play className="w-5 h-5" /> Ver ejemplo
              </a>
            </div>

            {/* Floating testimonial */}
            <div className="mt-12 max-w-lg mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <div className="flex items-center gap-5 mb-5">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&q=80" 
                    alt="Cliente" 
                    className="w-14 h-14 rounded-full object-cover border-2 border-rose-400"
                  />
                  <div>
                    <p className="font-semibold text-white text-lg">Patricia Solís</p>
                    <p className="text-sm text-white/60">Directora · Bella Piel</p>
                  </div>
                </div>
                <p className="text-white/80 italic text-lg leading-relaxed">&ldquo;Las clientas llegan sabiendo qué tratamiento quieren. Ya no explico todo desde cero.&rdquo;</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center pt-3">
            <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-6 bg-rose-50/50 border-y border-rose-100">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-10 text-slate-600 text-sm font-medium">
            <span className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-rose-500" /> Sin costo inicial</span>
            <span className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-rose-500" /> Soporte incluido</span>
            <span className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-rose-500" /> Online en 7 días</span>
          </div>
        </div>
      </section>

      {/* TREATMENTS */}
      <section className="relative py-32 lg:py-40 bg-white">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Tratamientos que <span className="text-rose-500">venden solos</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Cada tratamiento mostrado con el resultado que tus clientas buscan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TREATMENTS.map((treatment, idx) => (
              <div key={idx} className="group relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-rose-50/50 to-pink-50/30 border border-rose-100 hover:border-rose-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-rose-500/10 transition-all duration-500">
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-600 text-xs font-bold">
                    {treatment.highlight}
                  </span>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500/20 to-pink-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-rose-500/20 transition-all">
                  <treatment.icon className="h-8 w-8 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{treatment.title}</h3>
                <p className="text-slate-600 leading-relaxed">{treatment.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative py-32 lg:py-40 bg-gradient-to-b from-rose-50/30 to-white">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Cómo funciona
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {PROCESS.map((step, idx) => (
              <div key={idx} className="relative text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 text-white text-2xl font-black flex items-center justify-center mx-auto mb-8 shadow-lg shadow-rose-500/30">
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{step.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="relative py-32 lg:py-40 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Así se ve tu <span className="text-rose-500">web</span>
            </h2>
          </div>

          <div className="flex gap-8 px-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            {GALLERY.map((item, idx) => (
              <div key={idx} className="flex-shrink-0 w-[340px] snap-center">
                <div className="rounded-3xl overflow-hidden shadow-xl border border-rose-100 group">
                  <div className="relative overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-rose-300" />
                        <p className="font-semibold text-white text-lg">{item.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BeforeAfterSection
        title="Resultados que generan deseo"
        subtitle="Centros de estética que transformaron su presencia online"
        items={BEFORE_AFTER_ESTETICA}
        accentColor="rose"
      />

      {/* TESTIMONIALS */}
      <section className="relative py-32 lg:py-40 bg-white">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Centros con agenda llena
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {TESTIMONIALS.map((item, idx) => (
              <div key={idx} className="p-10 rounded-3xl bg-gradient-to-br from-rose-50/50 to-pink-50/30 border border-rose-100 hover:border-rose-200 hover:shadow-xl hover:shadow-rose-500/10 transition-all">
                <p className="text-slate-700 text-lg italic leading-relaxed mb-8">&ldquo;{item.quote}&rdquo;</p>
                <div className="flex items-center gap-5">
                  <img 
                    src={item.avatar} 
                    alt={item.author} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-rose-200"
                  />
                  <div>
                    <p className="font-bold text-slate-800 text-lg">{item.author}</p>
                    <p className="text-slate-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="relative py-40 lg:py-52 bg-gradient-to-br from-rose-400 via-pink-500 to-rose-500 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amber-300/20 rounded-full blur-[100px]" />
        </div>

        <div className="container relative z-10 text-center max-w-3xl mx-auto space-y-8">
          <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-white">
            Empezá a recibir más reservas
          </h2>
          <p className="text-2xl text-white/80">
            Primera consulta sin cargo. Sin compromiso.
          </p>
          <a href="https://wa.me/5491234567890" className="inline-flex items-center gap-4 px-12 py-5 text-xl font-bold rounded-2xl bg-white text-rose-500 shadow-2xl hover:scale-[1.02] transition-all">
            <MessageCircle className="h-7 w-7" />
            Quiero más clientas
          </a>
          <div className="flex items-center justify-center gap-8 pt-6 text-white/60">
            <div className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-white/80" /> Sin costo inicial</div>
            <div className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-white/80" /> Soporte incluido</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-slate-200 bg-slate-50">
        <div className="container text-center text-slate-500">
          <p className="text-base">© 2024 WebAppImpulsor</p>
        </div>
      </footer>
    </main>
  );
}
