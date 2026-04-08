import { MessageCircle, CheckCircle, ArrowRight, Dumbbell, Users, Flame, TrendingUp, Target, Zap, Play } from 'lucide-react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web para Gimnasios | Página que convierte visitas en socios",
  description: "Creamos tu página web profesional para gimnasios. Tu web trabaja 24/7 inscribiendo socios.",
  keywords: ["web para gimnasio", "página web para gimnasio", "landing page para gimnasios"]
};

const FEATURES = [
  { icon: Dumbbell, title: "Máquinas y pesas", desc: "Mostrá tus instalaciones con fotos profesionales que generan confianza." },
  { icon: Target, title: "Clases dirigidas", desc: "Yoga, spinning, funcional. Cada clase con su horario y descripción." },
  { icon: Flame, title: "Zona de cardio", desc: "Cinta, bicis, elípticas. Tu espacio completo visible para todos." },
  { icon: TrendingUp, title: "Planes claros", desc: "Precios y beneficios sin misterio. El socio se anota sin preguntas." },
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

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-28 pb-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-red-950/10 to-slate-950" />
          <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-gradient-to-br from-orange-500/15 via-red-500/10 to-transparent rounded-full blur-[180px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-red-600/10 to-transparent rounded-full blur-[120px]" />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-orange-500/15 border border-orange-500/25 text-orange-400 text-sm font-semibold">
                <Dumbbell className="w-5 h-5" />
                Web para Gimnasios
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.02]">
                <span className="text-white">Tu gimnasio merece</span>
                <br />
                <span className="bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 bg-clip-text text-transparent">
                  más socios
                </span>
              </h1>

              <p className="text-xl text-slate-400 max-w-xl leading-relaxed">
                Tu web trabaja 24/7 inscribiendo gente. Mostrá tus clases, precios e instalaciones. 
                <span className="text-orange-400 font-medium"> Dejá que la web haga el trabajo pesado.</span>
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 py-4">
                {STATS.map((stat, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                      {stat.value}
                    </span>
                    <span className="text-base text-slate-500">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#contacto" className="inline-flex items-center justify-center gap-3 px-8 py-4.5 text-lg font-bold rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-2xl shadow-orange-500/25 hover:scale-[1.02] hover:shadow-orange-500/40 transition-all">
                  Quiero más socios <ArrowRight className="h-5 w-5" />
                </a>
                <a href="#ver-ejemplo" className="inline-flex items-center justify-center gap-3 px-8 py-4.5 text-lg font-semibold rounded-2xl border border-slate-700 text-slate-300 hover:border-orange-500/50 hover:bg-orange-500/10 transition-all">
                  <Play className="w-5 h-5" /> Ver ejemplo
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-red-500/20 border border-orange-500/10">
                <img 
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&h=1000&fit=crop&q=85" 
                  alt="Gimnasio con máquinas" 
                  className="w-full h-[550px] lg:h-[620px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex gap-4">
                    <div className="px-5 py-3 rounded-xl bg-orange-500/95 backdrop-blur-sm">
                      <p className="text-base font-bold">+20 socios/mes</p>
                    </div>
                    <div className="px-5 py-3 rounded-xl bg-slate-900/95 backdrop-blur-sm border border-slate-700">
                      <p className="text-base font-bold text-emerald-400">24/7 online</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -top-6 -left-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-5 shadow-2xl border border-orange-500/20">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/30 to-red-500/20 flex items-center justify-center">
                    <Dumbbell className="h-7 w-7 text-orange-400" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg">Área completa</p>
                    <p className="text-sm text-slate-400">Pesas y cardio</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-5 shadow-2xl border border-red-500/20">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500/30 to-orange-500/20 flex items-center justify-center">
                    <Users className="h-7 w-7 text-red-400" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg">+500 socios</p>
                    <p className="text-sm text-slate-400">Tu potencial</p>
                  </div>
                </div>
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

      {/* FEATURES */}
      <section className="relative py-32 lg:py-40">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
        <div className="container relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Tu web muestra <span className="text-orange-400">todo tu gimnasio</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Cada rincón de tu espacio, visible para futuros socios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="group p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 hover:border-orange-500/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-orange-500/20 transition-all">
                  <feature.icon className="h-8 w-8 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
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
