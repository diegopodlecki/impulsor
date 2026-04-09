import { MessageCircle, CheckCircle, ArrowRight, Target, TrendingUp, Zap, Award, Dumbbell, Flame, Play, Clock, Shield, Star, Users, Heart, Users2, Sparkles } from 'lucide-react';
import BeforeAfterSection from '@/components/landings/BeforeAfterSection';
import PricingSection from '@/components/landings/PricingSection';
import ClosingSection from '@/components/landings/ClosingSection';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web para Personal Trainer | Página que convierte visitas en alumnos",
  description: "Creamos tu página web profesional para personal trainers. Tu web trabaja 24/7.",
  keywords: ["web para personal trainer", "página web para entrenador personal", "web personal trainer"]
};

const SERVICES = [
  { 
    icon: Target, 
    title: "Tu perfil, tu autoridad", 
    desc: "Credenciales, especialización y método. Los alumnos te eligen antes de contactarte.",
    highlight: "Profesionalismo visible"
  },
  { 
    icon: TrendingUp, 
    title: "Transformaciones que convencen", 
    desc: "Galería de antes/después con permiso. Prueba social que genera confianza.",
    highlight: "Resultados reales"
  },
  { 
    icon: Dumbbell, 
    title: "Plan de entrenamiento", 
    desc: "Mostrá tu método y programas. El alumno llega sabiendo qué esperar.",
    highlight: "Sin explicaciones"
  },
  { 
    icon: MessageCircle, 
    title: "Contacto directo", 
    desc: "Botón de WhatsApp visible. El alumno te escribe directo, sin rodeos.",
    highlight: "Conversiones inmediatas"
  },
];

const WHY_CHOOSE_US_PT = [
  { icon: Clock, title: "Listo en 7 días", desc: "Tu web online rápidamente. Sin esperas interminables." },
  { icon: Target, title: "Perfil especializado", desc: "Tu nicho y método destacados. Te diferencia de otros trainers." },
  { icon: TrendingUp, title: "Resultados visibles", desc: "Galería de transformaciones reales que convencen." },
  { icon: Shield, title: "Sin costos ocultos", desc: "Precio claro. Todo incluido, sin sorpresas." },
  { icon: Star, title: "Diseño que impacta", desc: "Tu autoridad profesional reflejada en cada pixel." },
  { icon: Users, title: "Alumnos calificados", desc: "Llegan sabiendo qué ofrecés. Cierras más rápido." },
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
    quote: "Llené mi agenda en 3 semanas. Pasé de 4 a 12 alumnos sin hacer publicidad.",
    author: "Carlos Vega",
    role: "Personal Trainer · Palermo",
    result: "12 alumnos nuevos",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80",
  },
  {
    quote: "Ahora me encuentran por Google. No sabia que podia aparecer en las busquedas de mi zona.",
    author: "Martín Díaz",
    role: "Coach Online · CABA",
    result: "#1 en Google local",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&q=80",
  },
  {
    quote: "Mis transformaciones hablan por mi. La gente llega convencida y se anotan directo.",
    author: "Laura Pérez",
    role: "Trainer Funcional · Zona Norte",
    result: "+80% conversiones",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80",
  },
];

const PRICING_PT = [
  {
    name: "Básico",
    price: "$247 USD",
    description: "Para empezar",
    features: [
      "Perfil profesional",
      "Tu especialización",
      "Galería de resultados",
      "Planes de entrenamiento",
      "WhatsApp integrado",
      "1 mes de hosting",
    ],
    cta: "Elegir Básico",
  },
  {
    name: "Profesional",
    price: "$397 USD",
    description: "El más elegido",
    features: [
      "Todo lo de Básico",
      "SEO optimizado",
      "Google Analytics",
      "Dominio propio",
      "Testimonios destacados",
      "6 meses de hosting",
    ],
    cta: "Elegir Profesional",
    popular: true,
  },
  {
    name: "Premium",
    price: "$647 USD",
    description: "Máximo alcance",
    features: [
      "Todo lo de Profesional",
      "Blog de contenido",
      "Sistema de reservas",
      "Programa de referidos",
      "Copywriting especializado",
      "12 meses de hosting",
    ],
    cta: "Elegir Premium",
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

      {/* HERO - ATHLETIC STYLE: Split layout, cyan theme */}
      <section className="relative min-h-screen pt-28 pb-20 overflow-hidden">
        {/* Athletic gradient background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/20 via-blue-600/10 to-transparent rounded-full blur-[200px] animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-blue-600/15 to-transparent rounded-full blur-[150px]" />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Content */}
            <div className="order-2 lg:order-1 space-y-8">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 text-sm font-bold">
                <Award className="w-4 h-4" />
                Solución para Personal Trainers
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.02]">
                <span className="text-white">Tu método,</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
                  más visibilidad
                </span>
              </h1>

              <p className="text-xl text-slate-300 max-w-xl leading-relaxed">
                Web profesional que muestra tu especialización y atrae alumnos calificados. 
                <span className="text-cyan-400 font-medium"> Tu reputación, visible las 24 horas.</span>
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contacto" className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-2xl shadow-cyan-500/25 hover:scale-[1.02] transition-all">
                  <TrendingUp className="h-5 w-5" />
                  Quiero más alumnos
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#ver-ejemplo" className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold rounded-xl bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 transition-all">
                  <Play className="h-5 w-5" />
                  Ver ejemplo
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                  Sin costo inicial
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                  Online en 7 días
                </div>
              </div>
            </div>

            {/* Right - Visual */}
            <div className="relative order-1 lg:order-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/20 border border-cyan-500/10">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&h=1000&fit=crop&q=85" 
                  alt="Entrenamiento personal" 
                  className="w-full h-[450px] lg:h-[550px] object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900&h=1000&fit=crop'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Overlay stats */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="grid grid-cols-3 gap-3">
                    {STATS.map((stat, idx) => (
                      <div key={idx} className="text-center p-3 rounded-xl bg-slate-900/80 backdrop-blur-sm border border-white/10">
                        <div className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                          {stat.value}
                        </div>
                        <div className="text-xs text-slate-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl px-5 py-3 shadow-2xl shadow-cyan-500/30">
                <div className="flex items-center gap-2 text-white">
                  <Zap className="h-5 w-5" />
                  <span className="font-bold">Nuevos alumnos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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

      {/* DIFFERENTIATOR */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-blue-600/10 to-transparent rounded-full blur-[150px]" />

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Tu diferenciación
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
              No sos <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">un trainer más</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Tu método, tu especialización, tu estilo. Tu web debe mostrar lo que te hace único y atraer a quienes buscan exactamente eso.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-5xl mx-auto">
            <div className="group text-center p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/30 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-2">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all">
                <Target className="h-10 w-10 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Tu método único</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Mostrá tu especialización. Paleo, funcional, hiit, bodybuilding. Los alumnos que buscan tu enfoque te van a encontrar.
              </p>
            </div>

            <div className="group text-center p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/30 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-2">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all">
                <TrendingUp className="h-10 w-10 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Resultados comprobados</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Transformaciones reales con permiso. Tu galería de antes/después habla por vos y genera confianza.
              </p>
            </div>

            <div className="group text-center p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/30 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-2">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all">
                <Heart className="h-10 w-10 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Tu comunidad</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Tu estilo de entrenamiento, tu energía, tu filosofía. Los alumnos que conectan con tu vibe se quedan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-32 lg:py-40">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
        <div className="container relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Tu web, <span className="text-cyan-400">tu máquina de alumnos</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Cada feature diseñada para que te contacten, no que te pregunten
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((service, idx) => (
              <div key={idx} className="group relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 hover:border-cyan-500/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500">
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">
                    {service.highlight}
                  </span>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all">
                  <service.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-cyan-500/10 to-blue-500/5 rounded-full blur-[150px]" />
        </div>
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/15 border border-cyan-500/25 text-cyan-400 text-sm font-semibold mb-6">
              <Award className="w-4 h-4" />
              Por qué elegirnos
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              Tu carrera profesional merece una web profesional
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Construimos tu presencia online para que te encuentren y confíen
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            {WHY_CHOOSE_US_PT.map((item, idx) => (
              <div key={idx} className="group text-center p-6 rounded-2xl bg-slate-800/40 border border-slate-700/30 hover:border-cyan-500/30 hover:bg-slate-800/60 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all">
                  <item.icon className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="font-bold text-white text-sm mb-2">{item.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
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
      <section id="ver-ejemplo" className="relative py-32 lg:py-40 overflow-hidden">
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
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Entrenadores con <span className="text-cyan-400">resultados</span>
            </h2>
            <p className="text-xl text-slate-400">
              Personal trainers que transformaron su carrera
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((item, idx) => (
              <div key={idx} className="group relative p-8 rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 hover:border-cyan-500/30 hover:-translate-y-1 transition-all">
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">
                    {item.result}
                  </span>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">&ldquo;{item.quote}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={item.avatar} 
                    alt={item.author} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-cyan-500/30"
                  />
                  <div>
                    <p className="font-bold text-white">{item.author}</p>
                    <p className="text-slate-400 text-sm">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="planes">
        <PricingSection
          title="Planes para tu carrera"
          subtitle="Elegí el que mejor se adapte a tu perfil"
          plans={PRICING_PT}
          accentColor="cyan"
        />
      </section>

      <ClosingSection
        title="Tu carrera merece ser visible"
        subtitle="Dejá de depender del boca a boca. Una web profesional te trae alumnos constantemente"
        ctaText="Empezar hoy"
        accentColor="cyan"
      />

      {/* FOOTER */}
      <footer className="py-12 border-t border-slate-800 bg-slate-950">
        <div className="container text-center text-slate-500">
          <p className="text-base">© 2024 WebAppImpulsor</p>
        </div>
      </footer>
    </main>
  );
}
