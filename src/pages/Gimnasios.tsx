import { MessageCircle, CheckCircle, ArrowRight, Dumbbell, Users, Flame, TrendingUp, Target, Zap, Play } from 'lucide-react';
import BeforeAfterSection from '@/components/landings/BeforeAfterSection';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web para Gimnasios | Página que convierte visitas en socios",
  description: "Creamos tu página web profesional para gimnasios. Tu web trabaja 24/7 inscribiendo socios.",
  keywords: ["web para gimnasio", "página web para gimnasio", "landing page para gimnasios"]
};

const FEATURES = [
  { 
    icon: Users, 
    title: "Inscripciones 24/7", 
    desc: "Tu web trabaja mientras vos descansás. Nuevos socios se anotan a cualquier hora.",
    highlight: "+40% inscripciones"
  },
  { 
    icon: Dumbbell, 
    title: "Tu espacio en fotos", 
    desc: "Mostrá cada rincón de tu gimnasio con imágenes profesionales que generan confianza.",
    highlight: "Primera impresión perfecta"
  },
  { 
    icon: TrendingUp, 
    title: "Precios sin misterio", 
    desc: "Planes y beneficios claros. El socio llega sabiendo qué incluye y se anota directo.",
    highlight: "0 preguntas por WhatsApp"
  },
  { 
    icon: Flame, 
    title: "Clases y horarios", 
    desc: "Yoga, spinning, funcional. Cada clase visible con su horario y descripción.",
    highlight: "Agenda siempre llena"
  },
];

const STATS = [
  { value: "20+", label: "Socios nuevos/mes" },
  { value: "100%", label: "Más inscripciones" },
  { value: "24/7", label: "Tu web trabaja" },
];

const GALLERY = [
  { img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop", title: "Área de pesas" },
  { img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop", title: "Zona cardio" },
  { img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop", title: "Clases grupales" },
  { img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop", title: "Entrenamiento" },
];

const BEFORE_AFTER = [
  {
    before: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=800&fit=crop&q=80",
    after: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=800&fit=crop&q=80",
    name: "FitLife Centro Fitness",
    result: "+180% increase in membership inquiries within 30 days of launch",
    timeframe: "30 días",
  },
  {
    before: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=800&fit=crop&q=80",
    after: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop&q=80",
    name: "Iron Club Gym",
    result: "Website became the #1 source of new member acquisition",
    timeframe: "60 días",
  },
  {
    before: "https://images.unsplash.com/photo-1517960019194-c5c2e6e2e9b5?w=600&h=800&fit=crop&q=80",
    after: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=800&fit=crop&q=80",
    name: "PowerFlex Academia",
    result: "Reduced phone inquiries by 60% while doubling overall leads",
    timeframe: "45 días",
  },
];

const TESTIMONIALS = [
  {
    quote: "Pasé de que me pregunten todo por Instagram a que se inscriban solos. Mi web hace el trabajo mientras yo entreno a mis socios.",
    author: "Marcelo Gómez",
    role: "Dueño · Gym Zone",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&q=80",
  },
  {
    quote: "Mis horarios y precios son claros en la web. Ya no respondo 50 mensajes por día preguntando lo mismo.",
    author: "Carlos Ruiz",
    role: "Gerente · Fit Center",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&q=80",
  },
];

const PROCESS = [
  { num: "01", title: "Conversamos", desc: "Primer contacto sin cargo. Entiendo tu gimnasio y tu objetivo de inscripciones." },
  { num: "02", title: "Diseñamos", desc: "Creo tu web con fotos de tu espacio, horarios de clases y planes de precios." },
  { num: "03", title: "Publicamos", desc: "Tu web online en 7 días. Comenzás a recibir inscripciones automáticamente." },
];

export default function Gimnasios() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="backdrop-blur-2xl bg-slate-950/90 border-b border-white/5">
          <div className="container">
            <div className="flex items-center justify-between h-20 py-5">
              <a href="/" className="flex items-center gap-3 group">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:scale-105 transition-transform">
                  <span className="text-white font-bold text-xl">W</span>
                </div>
                <span className="text-white font-bold text-xl tracking-tight">Impulsor</span>
              </a>
              <a href="#contacto" className="px-6 py-3 text-sm font-semibold rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 transition-all">
                Quiero mi web
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* HERO - FULLSCREEN IMPACTANTE */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop&q=85" 
            alt="Gimnasio" 
            className="w-full h-full object-cover"
          />
          {/* Multiple overlays for contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />
          {/* Accent glow */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-orange-500/20 to-red-600/10 rounded-full blur-[200px]" />
          <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-red-600/15 to-transparent rounded-full blur-[150px]" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            {/* Badge superior */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 text-sm font-bold mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              Web para Gimnasios
            </div>

            {/* Título impactante */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.95] mb-6">
              <span className="text-white">Tu gimnasio,</span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 bg-clip-text text-transparent">
                más fuerte que nunca
              </span>
            </h1>

            {/* Subtítulo con beneficio */}
            <p className="text-xl sm:text-2xl text-slate-300 max-w-xl mb-10 leading-relaxed">
              Tu web trabaja <span className="text-orange-400 font-bold">24/7</span> inscribiendo socios. 
              <br className="hidden sm:block" />
              Mostrá tu espacio, clases y precios. 
              <span className="text-white font-semibold"> La web hace el trabajo pesado.</span>
            </p>

            {/* Stats badges */}
            <div className="flex flex-wrap gap-4 mb-10">
              {STATS.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-900/60 backdrop-blur-sm border border-white/10">
                  <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                    {stat.value}
                  </span>
                  <span className="text-sm text-slate-400">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#contacto" className="group inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-2xl shadow-orange-500/30 hover:scale-[1.02] hover:shadow-orange-500/50 transition-all">
                Empezar ahora
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#planes" className="inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all">
                Ver planes
              </a>
            </div>

            {/* Mini prueba social */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop",
                  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
                ].map((src, idx) => (
                  <img 
                    key={idx}
                    src={src}
                    alt="Cliente"
                    className="w-12 h-12 rounded-full border-2 border-slate-950 object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-orange-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-slate-400">+100 gimnasios nos eligieron</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-slate-500 uppercase tracking-wider">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
              <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-6 border-y border-white/5 bg-slate-900/50">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-10 text-slate-400 text-sm font-medium">
            <span className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-emerald-500" /> Sin costo inicial</span>
            <span className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-emerald-500" /> Soporte incluido</span>
            <span className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-emerald-500" /> Online en 7 días</span>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative py-32 lg:py-40">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
        <div className="container relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Resultados que <span className="text-orange-400">tu web genera</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Cada feature está diseñada para atraer y convertir socios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="group relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 hover:border-orange-500/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500">
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">
                    {feature.highlight}
                  </span>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-orange-500/20 transition-all">
                  <feature.icon className="h-8 w-8 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative py-32 lg:py-40 bg-slate-900/50">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Cómo funciona
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {PROCESS.map((step, idx) => (
              <div key={idx} className="relative text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-red-600 text-white text-2xl font-black flex items-center justify-center mx-auto mb-8 shadow-lg shadow-orange-500/30">
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
        <div className="container relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Así se ve tu <span className="text-orange-400">web</span>
            </h2>
          </div>

          <div className="flex gap-8 px-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            {GALLERY.map((item, idx) => (
              <div key={idx} className="flex-shrink-0 w-[380px] snap-center">
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50 group">
                  <div className="relative overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2">
                        <Dumbbell className="h-5 w-5 text-orange-400" />
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
        title="Resultados que hablan por sí solos"
        subtitle="Negocios como el tuyo que ya transformaron su presencia online"
        items={BEFORE_AFTER}
        accentColor="orange"
      />

      {/* TESTIMONIALS */}
      <section className="relative py-32 lg:py-40">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
        <div className="container relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Propietarios que ya lo usan
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {TESTIMONIALS.map((item, idx) => (
              <div key={idx} className="p-10 rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 hover:border-orange-500/20 transition-all">
                <p className="text-slate-300 text-lg italic leading-relaxed mb-8">&ldquo;{item.quote}&rdquo;</p>
                <div className="flex items-center gap-5">
                  <img 
                    src={item.avatar} 
                    alt={item.author} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-orange-500/30"
                  />
                  <div>
                    <p className="font-bold text-white text-lg">{item.author}</p>
                    <p className="text-slate-400">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="relative py-40 lg:py-52 bg-gradient-to-b from-slate-950 via-red-950/15 to-slate-950">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-orange-500/15 to-red-500/10 rounded-full blur-[180px]" />
        </div>

        <div className="container relative z-10 text-center max-w-3xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-orange-500/15 border border-orange-500/25 text-orange-400 text-sm font-semibold">
            <Zap className="w-5 h-5" />
            Online en 7 días
          </div>
          <h2 className="text-5xl sm:text-6xl font-black tracking-tight">
            Tu web, <span className="text-orange-400">lista en 7 días</span>
          </h2>
          <p className="text-2xl text-slate-400">
            Primera consulta sin cargo. Sin compromiso.
          </p>
          <a href="https://wa.me/5491234567890" className="inline-flex items-center gap-4 px-12 py-5 text-xl font-bold rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-2xl shadow-orange-500/40 hover:scale-[1.02] hover:shadow-orange-500/60 transition-all">
            <MessageCircle className="h-7 w-7" />
            Quiero mi web para gimnasio
          </a>
          <div className="flex items-center justify-center gap-8 pt-6 text-slate-500">
            <div className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-emerald-500" /> Sin costo inicial</div>
            <div className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-emerald-500" /> Soporte incluido</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-slate-800 bg-slate-950">
        <div className="container text-center text-slate-500">
          <p className="text-base">© 2024 WebAppImpulsor</p>
        </div>
      </footer>
    </main>
  );
}
