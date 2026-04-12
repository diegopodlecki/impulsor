import { MessageCircle, CheckCircle, ArrowRight, Target, TrendingUp, Zap, Award, Dumbbell, Flame, Play, Clock, Shield, Star, Users, Heart, Users2, Sparkles, AlertCircle } from 'lucide-react';
import BeforeAfterSection from '@/components/landings/BeforeAfterSection';
import PricingSection from '@/components/landings/PricingSection';
import ClosingSection from '@/components/landings/ClosingSection';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web para Personal Trainer | +12 alumnos/mes sin publicidad",
  description: "Creamos tu landing page que convierte visitas en alumnos. Tu web trabaja 24/7.",
  keywords: ["web para personal trainer", "página web para entrenador personal", "web personal trainer"]
};

const STATS = [
  { value: "12", label: "Alumnos nuevos" },
  { value: "30", label: "Días promedio" },
  { value: "0", label: "Publicidad paga" },
];

const PROBLEMS = [
  {
    emoji: "😞",
    title: "Sin alumnos nuevos",
    desc: "Dependés de referrals y redes sociales. Tu agenda nunca se llena sola."
  },
  {
    emoji: "📱",
    title: "Esclavo de Instagram",
    desc: "Publicás todos los días pero nadie te contacta. Tiempo perdido."
  },
  {
    emoji: "❓",
    title: "Preguntas repetitivas",
    desc: "Respondés las mismas dudas por WhatsApp. 'Cuánto sale?' 'Qué incluye?'"
  },
];

const SOLUTIONS = [
  {
    icon: Target,
    title: "Landing profesional",
    desc: "Tu perfil, credenciales y método. Los alumnos te eligen antes de escribirte.",
    highlight: "Primera impresión perfecta"
  },
  {
    icon: Zap,
    title: "WhatsApp automático",
    desc: "Botón visible. El alumno te escribe directo, listo para entrenar.",
    highlight: "Conversión instantánea"
  },
  {
    icon: TrendingUp,
    title: "Resultados que convencen",
    desc: "Tu galería de transformaciones. Prueba social que genera confianza.",
    highlight: "Leads calificados"
  },
];

const BENEFITS = [
  { 
    icon: Users,
    title: "+12 alumnos/mes",
    desc: "Sin gastar en ads",
    color: "from-cyan-400 to-blue-500"
  },
  { 
    icon: Clock,
    title: "Web trabaja 24/7",
    desc: "Mientrás dormís",
    color: "from-cyan-400 to-blue-500"
  },
  { 
    icon: Star,
    title: "Imagen premium",
    desc: "Te ven como experto",
    color: "from-cyan-400 to-blue-500"
  },
];

const TRANSFORMATIONS = [
  { img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=400&fit=crop", name: "Carlos", result: "-8kg/60 días" },
  { img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop", name: "María", result: "+5kg músculo" },
  { img: "https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=600&h=400&fit=crop", name: "Lucas", result: "Bodyfat 18%" },
];

const BEFORE_AFTER_PT = [
  {
    before: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=800&fit=crop&q=80",
    after: "https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=600&h=800&fit=crop&q=80",
    name: "Carlos M.",
    result: "De 0 a 12 alumnos en 30 días",
    timeframe: "30 días",
  },
  {
    before: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=800&fit=crop&q=80",
    after: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=800&fit=crop&q=80",
    name: "María G.",
    result: "Agenda llena por 3 meses",
    timeframe: "45 días",
  },
  {
    before: "https://images.unsplash.com/photo-1550345332-09e3ac987658?w=600&h=800&fit=crop&q=80",
    after: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop&q=80",
    name: "Lucas R.",
    result: "#1 en Google local",
    timeframe: "60 días",
  },
];

const TESTIMONIALS = [
  {
    quote: "Llené mi agenda en 3 semanas. Pasé de 4 a 12 alumnos sin hacer publicidad.",
    author: "Carlos Vega",
    role: "PT · Palermo",
    result: "+200%",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80",
  },
  {
    quote: "Ahora me encuentran por Google. No sabía que podía aparecer en las búsquedas.",
    author: "Martín Díaz",
    role: "Coach Online",
    result: "#1 Google",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&q=80",
  },
  {
    quote: "Mis transformaciones hablan por mí. La gente llega convencida.",
    author: "Laura Pérez",
    role: "Trainer Funcional",
    result: "+80%",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80",
  },
];

const PRICING_PT = [
  {
    name: "Básico",
    price: "$247",
    description: "Para empezar",
    features: [
      "Landing profesional",
      "Tu especialización",
      "Galería de resultados",
      "WhatsApp integrado",
      "1 mes hosting",
    ],
    cta: "Elegir Básico",
  },
  {
    name: "Profesional",
    price: "$397",
    description: "El más elegido",
    features: [
      "Todo lo de Básico",
      "SEO optimizado",
      "Google Analytics",
      "Dominio propio",
      "6 meses hosting",
    ],
    cta: "Elegir Profesional",
    popular: true,
  },
  {
    name: "Premium",
    price: "$647",
    description: "Máximo alcance",
    features: [
      "Todo lo de Profesional",
      "Blog de contenido",
      "Sistema de reservas",
      "12 meses hosting",
    ],
    cta: "Elegir Premium",
  },
];

export default function PersonalTrainers() {
  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="backdrop-blur-2xl bg-slate-950/90 border-b border-white/5">
          <div className="container">
            <div className="flex items-center justify-between h-20 py-5">
              <a href="/" className="flex items-center gap-3 group">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-105 transition-transform">
                  <span className="text-white font-bold text-2xl">W</span>
                </div>
                <span className="text-white font-bold text-xl tracking-tight">webappimpulsor</span>
              </a>
              <a href="#contacto" className="px-6 py-3 text-sm font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
                Quiero + alumnos
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* HERO - CONVERSION FOCUSED */}
      <section className="relative min-h-screen pt-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-cyan-500/25 via-blue-600/15 to-transparent rounded-full blur-[200px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/20 to-transparent rounded-full blur-[150px]" />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-140px)]">
            {/* LEFT - Direct value proposition */}
            <div className="space-y-8">
              {/* Urgency badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-sm font-bold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                Solo 4 lugares este mes
              </div>

              {/* Main headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95]">
                <span className="text-white">+12 alumnos/mes</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  sin publicidad
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl text-slate-300 max-w-xl leading-relaxed">
                Tu landing page que trabaja <span className="text-cyan-400 font-semibold">24/7</span> attracting qualified students. 
                Sin depender de Instagram ni recomendaciones.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contacto" className="group inline-flex items-center justify-center gap-3 px-8 py-5 text-lg font-bold rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-2xl shadow-cyan-500/30 hover:scale-[1.02] transition-all">
                  <TrendingUp className="h-6 w-6" />
                  Quiero + alumnos
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="https://wa.me/541166448389?text=Hola!%20Quiero%20mi%20web%20para%20PT" className="inline-flex items-center justify-center gap-3 px-8 py-5 text-lg font-semibold rounded-2xl bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 transition-all">
                  <MessageCircle className="h-6 w-6" />
                  WhatsApp
                </a>
              </div>

              {/* Trust */}
              <div className="flex flex-wrap gap-6 pt-2">
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                  Consulta gratis
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                  Online en 7 días
                </div>
              </div>
            </div>

            {/* RIGHT - Stats + Image */}
            <div className="relative">
              {/* Stats cards */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {STATS.map((stat, idx) => (
                  <div key={idx} className="text-center p-6 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-cyan-500/20">
                    <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/20 border border-cyan-500/10">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&h=600&fit=crop&q=85" 
                  alt="Entrenamiento personal" 
                  className="w-full h-[300px] lg:h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent" />
                
                {/* Floating testimonial */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-sm border border-white/10">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80" 
                      alt="Carlos" 
                      className="w-12 h-12 rounded-full object-cover border-2 border-cyan-500"
                    />
                    <div>
                      <p className="font-bold text-white">&ldquo;12 alumnos nuevos en 30 días&rdquo;</p>
                      <p className="text-sm text-slate-400">Carlos V. - PT en Palermo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BLOCK #1 */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-y border-cyan-500/20">
        <div className="container text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            ¿Cansado de esperar que lleguen alumnos?
          </h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Tu landing page hace el trabajo pesado. Vos solo atendés.
          </p>
          <a href="#contacto" className="inline-flex items-center gap-3 px-10 py-5 text-lg font-bold rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-2xl shadow-cyan-500/30 hover:scale-[1.02] transition-all">
            Quiero mi web
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* PROBLEM SECTION - PAIN POINTS */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
        
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-sm font-bold mb-6">
              <AlertCircle className="w-4 h-4" />
              Tu situación actual
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              ¿Te suena familiar?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {PROBLEMS.map((problem, idx) => (
              <div key={idx} className="text-center p-8 rounded-3xl bg-slate-800/50 border border-slate-700/50">
                <div className="text-6xl mb-6">{problem.emoji}</div>
                <h3 className="text-xl font-bold text-white mb-3">{problem.title}</h3>
                <p className="text-slate-400">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-cyan-500/15 to-transparent rounded-full blur-[200px]" />
        
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-sm font-bold mb-6">
              <Sparkles className="w-4 h-4" />
              La solución
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Tu máquina de alumnos
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Cada elemento diseñado para que te contacten y se inscriban
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {SOLUTIONS.map((solution, idx) => (
              <div key={idx} className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">
                    {solution.highlight}
                  </span>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 flex items-center justify-center mb-6">
                  <solution.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-slate-400">{solution.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BLOCK #2 */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-12 rounded-3xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-cyan-500/20">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">
                Lista en 7 días
              </h3>
              <p className="text-slate-400">
                Desde el primer contacto hasta tu web online
              </p>
            </div>
            <a href="#contacto" className="group inline-flex items-center gap-3 px-8 py-4 text-lg font-bold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all">
              Empezar ahora
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* BENEFITS - VISUAL GRID */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
        
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Lo que ganás
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {BENEFITS.map((benefit, idx) => (
              <div key={idx} className="relative p-10 rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 text-center">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${benefit.color} flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <benefit.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-400">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFORMATIONS PREVIEW */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
        
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Resultados reales
            </h2>
            <p className="text-slate-400 text-lg">
              Transformaciones que atraen nuevos alumnos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {TRANSFORMATIONS.map((item, idx) => (
              <div key={idx} className="group relative rounded-2xl overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-lg">{item.name}</span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500 text-white text-sm font-bold">{item.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE/AFTER SECTION */}
      <BeforeAfterSection
        title="Tu negocio puede transformarse"
        subtitle="Casos reales de trainers que encontraron nuevos alumnos"
        items={BEFORE_AFTER_PT}
        accentColor="cyan"
      />

      {/* TESTIMONIALS */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
        
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Lo que dicen los trainers
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((item, idx) => (
              <div key={idx} className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50">
                <div className="absolute top-6 right-6">
                  <span className="px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-bold">
                    {item.result}
                  </span>
                </div>
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-lg mb-8">&ldquo;{item.quote}&rdquo;</p>
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

      {/* CTA BLOCK #3 - PRICING */}
      <section id="planes" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
        
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-sm font-bold mb-6">
              <Clock className="w-4 h-4" />
              Solo 4 lugares disponibles
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Elegí tu plan
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {PRICING_PT.map((plan, idx) => (
              <div key={idx} className={`relative p-8 rounded-3xl border ${plan.popular ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border-cyan-500/40' : 'bg-slate-800/50 border-slate-700/50'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold">
                    Más elegido
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{plan.price}</span>
                  <span className="text-slate-400 ml-2">USD</span>
                </div>
                <p className="text-slate-400 mb-8">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#contacto" className={`block text-center py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 hover:scale-105' : 'bg-slate-700 text-white hover:bg-slate-600'}`}>
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA - URGENCY */}
      <section id="contacto" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-cyan-950/20 to-slate-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-cyan-500/20 to-transparent rounded-full blur-[200px]" />
        
        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-sm font-bold mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            Solo 4 lugares este mes
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            Tu agenda llena
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              empieza hoy
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Primera consulta gratis. Sin compromiso. 
            <br />
            Respondemos en menos de 2 horas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/541166448389?text=Hola!%20Quiero%20mi%20web%20para%20Personal%20Trainer" className="group inline-flex items-center gap-3 px-10 py-5 text-xl font-bold rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-2xl shadow-cyan-500/30 hover:scale-105 transition-all">
              <MessageCircle className="h-6 w-6" />
              Escribir por WhatsApp
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
            <div className="flex items-center gap-2 text-slate-400">
              <CheckCircle className="h-5 w-5 text-emerald-400" />
              Sin costo inicial
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <CheckCircle className="h-5 w-5 text-emerald-400" />
              Online en 7 días
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <CheckCircle className="h-5 w-5 text-emerald-400" />
              Soporte incluido
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-slate-800 bg-slate-950">
        <div className="container text-center text-slate-500">
          <p className="text-base">© {new Date().getFullYear()} webappimpulsor</p>
        </div>
      </footer>
    </main>
  );
}
