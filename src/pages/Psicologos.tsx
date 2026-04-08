import { MessageCircle, CheckCircle, ArrowRight, Brain, Heart, User, Clock, Shield, Sparkles, Play, Star, Award, MessageSquare } from 'lucide-react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web para Psicólogos | Página que genera consultas de pacientes",
  description: "Creamos tu página web profesional para psicólogos. Tu consultorio merece ser encontrado.",
  keywords: ["web para psicólogo", "página web para psicólogo", "web psicólogo"]
};

const APPROACHES = [
  { 
    icon: Brain, 
    title: "Resultados concretos", 
    desc: "Terapia Cognitivo-Conductual. Técnicas estructuradas con resultados que se miden.",
    highlight: "Cambio en 12 semanas"
  },
  { 
    icon: Heart, 
    title: "Entenderte a vos mismo", 
    desc: "Terapia Psicodinámica. Explorá patrones inconscientes que te limitan.",
    highlight: "Autoconocimiento profundo"
  },
  { 
    icon: Sparkles, 
    title: "Paz mental", 
    desc: "Mindfulness y ACT. Técnicas de aceptación para reducir el sufrimiento emocional.",
    highlight: "Reduce ansiedad 60%"
  },
  { 
    icon: Shield, 
    title: "Relaciones sanas", 
    desc: "Terapia Sistémica. Mejorá la comunicación en parejas y familias.",
    highlight: "Armonía familiar"
  },
];

const WHY_CHOOSE_US_PSICO = [
  { icon: Clock, title: "Web en 7 días", desc: "Tu presencia online lista rápidamente." },
  { icon: Shield, title: "Confidencialidad", desc: "Tu espacio seguro. Sin filtraciones ni riesgos." },
  { icon: Brain, title: "Especialización", desc: "Tu nicho destacado. Pacientes que buscan tu enfoque." },
  { icon: Star, title: "Imagen profesional", desc: "Tu consultorio se ve de alta gama." },
  { icon: MessageSquare, title: "Contacto directo", desc: "WhatsApp integrado para consultas rápidas." },
  { icon: Award, title: "Soporte continuo", desc: "Mantengo todo actualizado por vos." },
];

const STATS = [
  { value: "6", label: "Consultas nuevas/semana" },
  { value: "60 días", label: "Para agenda llena" },
  { value: "100%", label: "Más confianza" },
];

const GALLERY = [
  { img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop", title: "Tu perfil profesional" },
  { img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop", title: "Tu consultorio" },
  { img: "https://images.unsplash.com/photo-1506812574058-fc75fa93fead?w=800&h=600&fit=crop", title: "Terapia online" },
  { img: "https://images.unsplash.com/photo-1582750433449-648b12736484?w=800&h=600&fit=crop", title: "Contacto simple" },
];

const TESTIMONIALS = [
  {
    quote: "Pasé de 1 consulta cada 2 semanas a recibir 6 semanales. La mayoría llegan por Google buscando terapia.",
    author: "Luciana Pérez",
    role: "Psicóloga · CABA",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&q=80",
  },
  {
    quote: "Mi web transmite la confianza que mis pacientes necesitan. Ya no explico todo en el primer mensaje de WhatsApp.",
    author: "Roberto Sánchez",
    role: "Psicoterapeuta · Recoleta",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&q=80",
  },
  {
    quote: "El tema de modalidad presencial/online lo tengo clarísimo en la web. Pacientes que llegan sabiendo qué ofrezco.",
    author: "Ana García",
    role: "Psicóloga · Belgrano",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&q=80",
  },
];

const PROCESS = [
  { num: "01", title: "Conversamos", desc: "Primer contacto sin cargo. Entiendo tu enfoque terapéutico y tu objetivo." },
  { num: "02", title: "Diseñamos", desc: "Creo tu web con tu perfil, enfoques y modalidades de atención." },
  { num: "03", title: "Publicamos", desc: "Tu web online en 7 días. Comenzás a recibir consultas automáticamente." },
];

export default function Psicologos() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50/50 via-white to-violet-50/30 text-slate-800 overflow-hidden">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="backdrop-blur-2xl bg-white/80 border-b border-slate-200/50">
          <div className="container">
            <div className="flex items-center justify-between h-20 py-5">
              <a href="/" className="flex items-center gap-3 group">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                  <span className="text-white font-bold text-xl">W</span>
                </div>
                <span className="text-slate-800 font-bold text-xl tracking-tight">Impulsor</span>
              </a>
              <a href="#contacto" className="px-6 py-3 text-sm font-semibold rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 text-white hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 transition-all">
                Quiero más pacientes
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 via-white to-violet-50/30" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-gradient-to-b from-indigo-100/30 to-transparent rounded-full blur-[180px]" />
        </div>

        {/* Floating elements */}
        <div className="absolute top-48 left-16 w-24 h-24 bg-gradient-to-br from-indigo-200/40 to-violet-200/30 rounded-3xl rotate-12 blur-sm animate-pulse" />
        <div className="absolute top-64 right-20 w-40 h-40 bg-gradient-to-br from-violet-200/35 to-purple-200/25 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.5s' }} />

        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-600 text-sm font-semibold">
              <Brain className="w-5 h-5" />
              Web para Psicólogos
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              <span className="text-slate-900">Tu consultorio</span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                merece ser encontrado
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Web profesional que transmite confianza. Pacientes que llegan sabiendo qué ofrecés, 
              <span className="text-indigo-600 font-medium"> con turno ya agendado.</span>
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 py-4">
              {STATS.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white shadow-lg shadow-slate-200/50 border border-slate-100">
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <a href="#contacto" className="inline-flex items-center justify-center gap-3 px-8 py-4.5 text-lg font-semibold rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-xl shadow-indigo-500/25 hover:scale-[1.02] hover:shadow-indigo-500/40 transition-all">
                Quiero más pacientes <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#ver-ejemplo" className="inline-flex items-center justify-center gap-3 px-8 py-4.5 text-lg font-medium rounded-2xl border border-slate-300 text-slate-700 hover:border-indigo-300 hover:bg-indigo-50 transition-all">
                <Play className="w-5 h-5" /> Ver ejemplo
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-20 relative max-w-5xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/10 border border-indigo-100">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1400&h=800&fit=crop&q=85" 
                alt="Psicóloga profesional" 
                className="w-full h-[450px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
            </div>

            {/* Floating cards */}
            <div className="absolute -top-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-lg">+60%</p>
                  <p className="text-sm text-slate-500">Consultas nuevas</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-2xl border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-100 to-violet-100 flex items-center justify-center">
                  <Brain className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-lg">Agenda llena</p>
                  <p className="text-sm text-slate-500">En 60 días</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-6 bg-indigo-50/50 border-y border-indigo-100">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-10 text-slate-600 text-sm font-medium">
            <span className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-indigo-500" /> Sin costo inicial</span>
            <span className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-indigo-500" /> Soporte incluido</span>
            <span className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-indigo-500" /> Online en 7 días</span>
          </div>
        </div>
      </section>

      {/* APPROACHES */}
      <section className="relative py-32 lg:py-40 bg-white">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Lo que tus pacientes <span className="text-indigo-600">buscan</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Mostrá cómo los vas a ayudar con cada enfoque terapéutico
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {APPROACHES.map((approach, idx) => (
              <div key={idx} className="group relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-indigo-50/50 to-violet-50/30 border border-indigo-100 hover:border-indigo-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-500">
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-600 text-xs font-bold">
                    {approach.highlight}
                  </span>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-indigo-500/20 transition-all">
                  <approach.icon className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{approach.title}</h3>
                <p className="text-slate-600 leading-relaxed">{approach.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-b from-indigo-50/20 via-white to-indigo-50/10">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-600 text-sm font-semibold mb-6">
              <Award className="w-4 h-4" />
              Por qué elegirnos
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              Tu consultorio merece ser encontrado
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Construimos tu presencia online para que te encuentren pacientes que buscan ayuda
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            {WHY_CHOOSE_US_PSICO.map((item, idx) => (
              <div key={idx} className="group text-center p-6 rounded-2xl bg-white border border-slate-100 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-100 to-violet-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-indigo-500/20 transition-all">
                  <item.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="font-bold text-slate-800 text-sm mb-2">{item.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative py-32 lg:py-40 bg-gradient-to-b from-indigo-50/30 to-white">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Cómo funciona
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {PROCESS.map((step, idx) => (
              <div key={idx} className="relative text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-white text-2xl font-black flex items-center justify-center mx-auto mb-8 shadow-lg shadow-indigo-500/30">
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
              Así se ve tu <span className="text-indigo-600">web</span>
            </h2>
          </div>

          <div className="flex gap-8 px-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            {GALLERY.map((item, idx) => (
              <div key={idx} className="flex-shrink-0 w-[340px] snap-center">
                <div className="rounded-3xl overflow-hidden shadow-xl border border-indigo-100 group">
                  <div className="relative overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2">
                        <Brain className="h-5 w-5 text-indigo-300" />
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
      <section className="relative py-32 lg:py-40 bg-gradient-to-b from-indigo-50/30 to-white">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Psicólogos con agenda llena
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {TESTIMONIALS.map((item, idx) => (
              <div key={idx} className="p-10 rounded-3xl bg-white shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/10 transition-all">
                <p className="text-slate-700 text-lg italic leading-relaxed mb-8">&ldquo;{item.quote}&rdquo;</p>
                <div className="flex items-center gap-5">
                  <img 
                    src={item.avatar} 
                    alt={item.author} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-indigo-200"
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
      <section id="contacto" className="relative py-40 lg:py-52 bg-gradient-to-br from-indigo-600 via-violet-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-400/20 rounded-full blur-[100px]" />
        </div>

        <div className="container relative z-10 text-center max-w-3xl mx-auto space-y-8">
          <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-white">
            Empezá a recibir consultas
          </h2>
          <p className="text-2xl text-white/80">
            Primera consulta sin cargo. Sin compromiso.
          </p>
          <a href="https://wa.me/5491234567890" className="inline-flex items-center gap-4 px-12 py-5 text-xl font-bold rounded-2xl bg-white text-indigo-600 shadow-2xl hover:scale-[1.02] transition-all">
            <MessageCircle className="h-7 w-7" />
            Quiero más pacientes
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
