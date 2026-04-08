import { MessageCircle, CheckCircle, ArrowRight, Target, TrendingUp, Zap, Award, Dumbbell, Flame, Play } from 'lucide-react';
import BeforeAfterSection from '@/components/landings/BeforeAfterSection';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web para Personal Trainer | Página que convierte visitas en alumnos",
  description: "Creamos tu página web profesional para personal trainers. Tu web trabaja 24/7.",
  keywords: ["web para personal trainer", "página web para entrenador personal", "web personal trainer"]
};

const SERVICES = [
  { icon: Target, title: "Tu perfil de entrenador", desc: "Credenciales, especialización y método. La gente te elige antes de contactarte." },
  { icon: TrendingUp, title: "Transformaciones reales", desc: "Galería de antes/después con permiso. Prueba social que convince." },
  { icon: Zap, title: "Planes claros", desc: "No más WhatsApps preguntando precios. Todo visible y claro." },
  { icon: Award, title: "WhatsApp directo", desc: "Botón de contacto visible. El alumno te escribe directo." },
];

const STATS = [
  { value: "8", label: "Alumnos nuevos/mes" },
  { value: "30 días", label: "Para primeros resultados" },
  { value: "100%", label: "Más consultas" },
];

const TRANSFORMATIONS = [
  { img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=400&fit=crop", name: "Transformación Carlos", result: "-8kg en 60 días" },
  { img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop", name: "Transformación María", result: "+5kg músculo" },
  { img: "https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=600&h=400&fit=crop", name: "Transformación Luca", result: "Bodyfat 18%" },
];

const BEFORE_AFTER_PT = [
  {
    before: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=800&fit=crop&q=80",
    after: "https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=600&h=800&fit=crop&q=80",
    name: "Carlos M.",
    result: "From zero online presence to 12 new clients in the first month",
    timeframe: "30 días",
  },
  {
    before: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=800&fit=crop&q=80",
    after: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=800&fit=crop&q=80",
    name: "María G.",
    result: "Transformed coaching business with 3x more qualified leads",
    timeframe: "45 días",
  },
  {
    before: "https://images.unsplash.com/photo-1550345332-09e3ac987658?w=600&h=800&fit=crop&q=80",
    after: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop&q=80",
    name: "Lucas R.",
    result: "Booked solid for 3 months with clients from Google searches",
    timeframe: "60 días",
  },
];

const TESTIMONIALS = [
  {
    quote: "Pasé de depender del boca a boca a recibir 8 consultas por semana. Mi agenda se llenó sola en 30 días.",
    author: "Carlos Vega",
    role: "Personal Trainer · Palermo",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80",
  },
  {
    quote: "No aparecía en Google cuando alguien buscaba trainer. Ahora sí. Y llegan solos.",
    author: "Martín Díaz",
    role: "Coach Online · CABA",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&q=80",
  },
  {
    quote: "Mi web explica mi método mejor que yo en un mensaje. Llegan sabiendo qué quiero.",
    author: "Laura Pérez",
    role: "Trainer Funcional · Zona Norte",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80",
  },
];

const PROCESS = [
  { num: "01", title: "Conversamos", desc: "Primer contacto sin cargo. Entiendo tu método y tu objetivo de alumnos." },
  { num: "02", title: "Diseñamos", desc: "Creo tu web con tu perfil, transformaciones y planes de entrenamiento." },
  { num: "03", title: "Publicamos", desc: "Tu web online en 7 días. Comenzás a recibir consultas automáticamente." },
];

export default function PersonalTrainers() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="backdrop-blur-2xl bg-slate-950/90 border-b border-white/5">
          <div className="container">
            <div className="flex items-center justify-between h-20 py-5">
              <a href="/" className="flex items-center gap-3 group">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-105 transition-transform">
                  <span className="text-white font-bold text-xl">W</span>
                </div>
                <span className="text-white font-bold text-xl tracking-tight">Impulsor</span>
              </a>
              <a href="#contacto" className="px-6 py-3 text-sm font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
                Quiero más alumnos
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen pt-28 pb-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
          <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-gradient-to-br from-cyan-500/15 to-transparent rounded-full blur-[180px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-blue-600/10 to-transparent rounded-full blur-[120px]" />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center min-h-[calc(100vh-140px)]">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/20 border border-cyan-500/10">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&h=1000&fit=crop&q=85" 
                  alt="Entrenamiento personal" 
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex gap-4">
                    <div className="px-5 py-3 rounded-xl bg-cyan-500/95 backdrop-blur-sm">
                      <p className="text-base font-bold">+8 alumnos/mes</p>
                    </div>
                    <div className="px-5 py-3 rounded-xl bg-slate-900/95 backdrop-blur-sm border border-slate-700">
                      <p className="text-base font-bold text-cyan-400">30 días resultados</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-5 shadow-2xl border border-cyan-500/20">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-500/20 flex items-center justify-center">
                    <Dumbbell className="h-7 w-7 text-cyan-400" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg">Tu perfil</p>
                    <p className="text-sm text-slate-400">Profesional</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-5 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                    <Flame className="h-7 w-7 text-white" />
                  </div>
                  <div className="text-white">
                    <p className="font-bold text-lg">Transformaciones</p>
                    <p className="text-sm text-white/80">Reales</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-8">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-cyan-500/15 border border-cyan-500/25 text-cyan-400 text-sm font-semibold">
                <Target className="w-5 h-5" />
                Web para Personal Trainers
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.02]">
                <span className="text-white">Tu entrenamiento</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  merece más alumnos
                </span>
              </h1>

              <p className="text-xl text-slate-400 max-w-xl leading-relaxed">
                Tu web trabaja 24/7 conseguiendo alumnos. Mostrá tu método, transformaciones y precios. 
                <span className="text-cyan-400 font-medium"> Mientras vos entrenás, la web trabaja.</span>
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 py-4">
                {STATS.map((stat, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                      {stat.value}
                    </span>
                    <span className="text-base text-slate-500">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#contacto" className="inline-flex items-center justify-center gap-3 px-8 py-4.5 text-lg font-bold rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-2xl shadow-cyan-500/25 hover:scale-[1.02] hover:shadow-cyan-500/40 transition-all">
                  Quiero más alumnos <ArrowRight className="h-5 w-5" />
                </a>
                <a href="#ver-ejemplo" className="inline-flex items-center justify-center gap-3 px-8 py-4.5 text-lg font-semibold rounded-2xl border border-slate-700 text-slate-300 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all">
                  <Play className="w-5 h-5" /> Ver ejemplo
                </a>
              </div>
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

      {/* SERVICES */}
      <section className="relative py-32 lg:py-40">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
        <div className="container relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Todo lo que necesitás en <span className="text-cyan-400">una web</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Tu entrenamiento, digitalizado y listo para captar alumnos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service, idx) => (
              <div key={idx} className="group p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 hover:border-cyan-500/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all">
                  <service.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.desc}</p>
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
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white text-2xl font-black flex items-center justify-center mx-auto mb-8 shadow-lg shadow-cyan-500/30">
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFORMATIONS */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
        <div className="container relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Transformaciones que <span className="text-cyan-400">impactan</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {TRANSFORMATIONS.map((item, idx) => (
              <div key={idx} className="group rounded-3xl overflow-hidden bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/20 transition-all">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-cyan-400" />
                        <p className="font-bold text-white">{item.name}</p>
                      </div>
                      <div className="px-3 py-1 rounded-full bg-emerald-500/90 backdrop-blur-sm">
                        <p className="text-xs font-bold text-white">{item.result}</p>
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
        title="Tu negocio también puede transformarse"
        subtitle="Casos reales de personal trainers que encontraron nuevos alumnos"
        items={BEFORE_AFTER_PT}
        accentColor="cyan"
      />

      {/* TESTIMONIALS */}
      <section className="relative py-32 lg:py-40">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
        <div className="container relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Trainers con agenda llena
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {TESTIMONIALS.map((item, idx) => (
              <div key={idx} className="p-10 rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 hover:border-cyan-500/20 transition-all">
                <p className="text-slate-300 text-lg italic leading-relaxed mb-8">&ldquo;{item.quote}&rdquo;</p>
                <div className="flex items-center gap-5">
                  <img 
                    src={item.avatar} 
                    alt={item.author} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-cyan-500/30"
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
      <section id="contacto" className="relative py-40 lg:py-52 bg-gradient-to-b from-slate-950 via-cyan-950/20 to-slate-950">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-cyan-500/15 to-transparent rounded-full blur-[180px]" />
        </div>

        <div className="container relative z-10 text-center max-w-3xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-cyan-500/15 border border-cyan-500/25 text-cyan-400 text-sm font-semibold">
            <Zap className="w-5 h-5" />
            Online en 7 días
          </div>
          <h2 className="text-5xl sm:text-6xl font-black tracking-tight">
            Tu web, <span className="text-cyan-400">lista en 7 días</span>
          </h2>
          <p className="text-2xl text-slate-400">
            Primera consulta sin cargo. Sin compromiso.
          </p>
          <a href="https://wa.me/5491234567890" className="inline-flex items-center gap-4 px-12 py-5 text-xl font-bold rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-2xl shadow-cyan-500/40 hover:scale-[1.02] hover:shadow-cyan-500/60 transition-all">
            <MessageCircle className="h-7 w-7" />
            Quiero más alumnos
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
