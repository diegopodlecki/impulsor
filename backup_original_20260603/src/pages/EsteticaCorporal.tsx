import { MessageCircle, CheckCircle, ArrowRight, Sparkles, Droplet, Flower2, Star, Gem, Play, Clock, Shield, Award, AlertCircle, Calendar, Users, TrendingUp } from 'lucide-react';
import BeforeAfterSection from '@/components/landings/BeforeAfterSection';
import PricingSection from '@/components/landings/PricingSection';
import ClosingSection from '@/components/landings/ClosingSection';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web para Estética | +20 clientas/mes sin gastar en ads",
  description: "Tu centro de belleza merece ser encontrado. Landing que reserva turnos por WhatsApp.",
  keywords: ["web para estética", "página web para centro de estética", "web estética"]
};

const STATS = [
  { value: "20", label: "Clientas nuevas" },
  { value: "45", label: "Días promedio" },
  { value: "0", label: "Publicidad paga" },
];

const PROBLEMS = [
  {
    emoji: "😔",
    title: "Sillas vacías",
    desc: "Tu agenda tiene huecos. Clientas que cancelan y no se reemplazan."
  },
  {
    emoji: "📱",
    title: "Dependiente de Instagram",
    desc: "Publicás todos los días pero el alcance baja. Tiempo que no vuelve."
  },
  {
    emoji: "💬",
    title: "Consultas sin fin",
    desc: "Respondés las mismas preguntas: 'Cuánto cuesta?', 'Qué me recommendás?'"
  },
];

const SOLUTIONS = [
  {
    icon: Calendar,
    title: "Reservas automáticas",
    desc: "Tu landing page con botón de WhatsApp. La clienta reserva sola.",
    highlight: "0 llamadas para turnos"
  },
  {
    icon: Star,
    title: "Galería que vende",
    desc: "Fotos de tratamientos y resultados. Tu centro se ve premium.",
    highlight: "Primera impresión de lujo"
  },
  {
    icon: TrendingUp,
    title: "Tratamientos claros",
    desc: "Cada servicio con descripción y precio. Llegan informadas.",
    highlight: "Conversión instantánea"
  },
];

const BENEFITS = [
  { 
    icon: Users,
    title: "+20 clientas/mes",
    desc: "Sin gastar en ads",
    color: "from-rose-400 to-pink-500"
  },
  { 
    icon: Clock,
    title: "Agenda llena",
    desc: "Reservas automáticas",
    color: "from-rose-400 to-pink-500"
  },
  { 
    icon: Sparkles,
    title: "Imagen premium",
    desc: "Te ven como experta",
    color: "from-rose-400 to-pink-500"
  },
];

const RESULTS = [
  { img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=600&fit=crop", title: "Tratamientos faciales", result: "+40% clientas" },
  { img: "https://images.unsplash.com/photo-1598524374912-6f40a6c4b22e?w=600&h=600&fit=crop", title: "Tu espacio", result: "Fotos premium" },
  { img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=600&fit=crop", title: "Resultados", result: "Antes/después" },
];

const BEFORE_AFTER_ESTETICA = [
  {
    before: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=800&fit=crop&q=80",
    after: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=800&fit=crop&q=80",
    name: "Bella Piel",
    result: "De 3 a 18 clientas por semana",
    timeframe: "60 días",
  },
  {
    before: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=800&fit=crop&q=80",
    after: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=800&fit=crop&q=80",
    name: "Glow Estética",
    result: "Ticket promedio +40%",
    timeframe: "45 días",
  },
  {
    before: "https://images.unsplash.com/photo-1598524374912-6f40a6c4b22e?w=600&h=800&fit=crop&q=80",
    after: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=800&fit=crop&q=80",
    name: "DermaCare Plus",
    result: "#1 en búsquedas locales",
    timeframe: "30 días",
  },
];

const TESTIMONIALS = [
  {
    quote: "Mi agenda se llenó en 8 semanas. Las clientas llegan sabiendo qué tratamiento quieren.",
    author: "Patricia S.",
    role: "Directora · Bella Piel",
    result: "+150%",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&q=80",
  },
  {
    quote: "Mi centro se ve de lujo. Las clientas llegan convencidas, no comparando precios.",
    author: "Valeria M.",
    role: "Esteticista · Núñez",
    result: "+40%",
    avatar: "https://images.unsplash.com/photo-1541823709867-1b206113eafd?w=200&h=200&fit=crop&q=80",
  },
  {
    quote: "Las fotos de los tratamientos venden solas. Ya no explico cada servicio.",
    author: "Ana G.",
    role: "Centro · Belgrano",
    result: "+80%",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&q=80",
  },
];

const PRICING = [
  {
    name: "Básico",
    price: "$247",
    description: "Para empezar",
    features: [
      "Landing profesional",
      "Galería de tratamientos",
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
      "Precios claros",
      "6 meses hosting",
    ],
    cta: "Elegir Profesional",
    popular: true,
  },
  {
    name: "Premium",
    price: "$647",
    description: "Máximo impacto",
    features: [
      "Todo lo de Profesional",
      "Sistema de reservas",
      "CRM de clientas",
      "12 meses hosting",
    ],
    cta: "Elegir Premium",
  },
];

export default function EsteticaCorporal() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-rose-950/30 to-slate-950 text-white overflow-hidden">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="backdrop-blur-2xl bg-slate-950/90 border-b border-white/5">
          <div className="container">
            <div className="flex items-center justify-between h-20 py-5">
              <a href="/" className="flex items-center gap-3 group">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center shadow-lg shadow-rose-500/30 group-hover:scale-105 transition-transform">
                  <span className="text-white font-bold text-2xl">W</span>
                </div>
                <span className="text-white font-bold text-xl tracking-tight">webappimpulsor</span>
              </a>
              <a href="#contacto" className="px-6 py-3 text-sm font-semibold rounded-full bg-gradient-to-r from-rose-400 to-pink-500 text-white hover:scale-105 hover:shadow-lg hover:shadow-rose-500/30 transition-all">
                Quiero + clientas
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* HERO - CENTER ALIGNED VARIATION */}
      <section className="relative min-h-screen pt-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-rose-950/50 to-slate-950" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-rose-500/20 via-pink-500/10 to-transparent rounded-full blur-[250px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-pink-500/15 to-transparent rounded-full blur-[200px]" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-400 text-sm font-bold mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
              </span>
              Solo 3 lugares este mes
            </div>

            {/* Headline - Center aligned */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] mb-6">
              <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-rose-300 bg-clip-text text-transparent">
                +20 clientas/mes
              </span>
              <br />
              <span className="text-white">sin publicidad</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Tu centro de belleza merece ser encontrado. 
              <span className="text-rose-400 font-medium"> Landing que reserva turnos.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a href="#contacto" className="group inline-flex items-center gap-3 px-10 py-5 text-lg font-bold rounded-2xl bg-gradient-to-r from-rose-400 to-pink-500 text-white shadow-2xl shadow-rose-500/30 hover:scale-[1.02] transition-all">
                <Sparkles className="h-6 w-6" />
                Quiero + clientas
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://wa.me/541166448389?text=Hola!%20Quiero%20mi%20web%20para%20estetica" className="inline-flex items-center gap-3 px-10 py-5 text-lg font-semibold rounded-2xl bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 transition-all">
                <MessageCircle className="h-6 w-6" />
                WhatsApp
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              {STATS.map((stat, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-rose-500/20">
                  <div className="text-4xl font-black bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION - DIFFERENT ORDER (before CTA) */}
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
              <div key={idx} className="text-center p-8 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50">
                <div className="text-6xl mb-6">{problem.emoji}</div>
                <h3 className="text-xl font-bold text-white mb-3">{problem.title}</h3>
                <p className="text-slate-400">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BLOCK #1 */}
      <section className="py-20 bg-gradient-to-r from-rose-500/10 to-pink-500/10 border-y border-rose-500/20">
        <div className="container text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            ¿Sillas vacías que no se llenan?
          </h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Tu landing hace el trabajo. Clientas que reservan, vos solo atendés.
          </p>
          <a href="#contacto" className="inline-flex items-center gap-3 px-10 py-5 text-lg font-bold rounded-2xl bg-gradient-to-r from-rose-400 to-pink-500 text-white shadow-2xl shadow-rose-500/30 hover:scale-[1.02] transition-all">
            Quiero mi web
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* SOLUTION - REORDERED */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-rose-500/15 to-transparent rounded-full blur-[200px]" />
        
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-sm font-bold mb-6">
              <Sparkles className="w-4 h-4" />
              La solución
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Tu centro, siempre lleno
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Cada elemento diseñado para que reserven
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {SOLUTIONS.map((solution, idx) => (
              <div key={idx} className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-rose-500/20 hover:border-rose-500/40 transition-all">
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">
                    {solution.highlight}
                  </span>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500/20 to-pink-500/10 flex items-center justify-center mb-6">
                  <solution.icon className="h-8 w-8 text-rose-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-slate-400">{solution.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS GALLERY */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
        
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Resultados que atraen
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {RESULTS.map((item, idx) => (
              <div key={idx} className="group relative rounded-2xl overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-bold text-white text-lg mb-2">{item.title}</p>
                  <span className="px-3 py-1 rounded-full bg-rose-500 text-white text-sm font-bold">{item.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS - VISUAL CARDS */}
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

      {/* CTA BLOCK #2 */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-12 rounded-3xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-rose-500/20">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">
                Lista en 7 días
              </h3>
              <p className="text-slate-400">
                Tu centro online rápidamente
              </p>
            </div>
            <a href="#contacto" className="group inline-flex items-center gap-3 px-8 py-4 text-lg font-bold rounded-xl bg-gradient-to-r from-rose-400 to-pink-500 text-white shadow-lg shadow-rose-500/20 hover:scale-105 transition-all">
              Empezar ahora
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* BEFORE/AFTER */}
      <BeforeAfterSection
        title="Tu centro puede transformarse"
        subtitle="Casos reales de centros de estética"
        items={BEFORE_AFTER_ESTETICA}
        accentColor="rose"
      />

      {/* TESTIMONIALS */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
        
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Lo que dicen las esteticistas
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
                    className="w-12 h-12 rounded-full object-cover border-2 border-rose-500/30"
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
              Solo 3 lugares disponibles
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Elegí tu plan
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {PRICING.map((plan, idx) => (
              <div key={idx} className={`relative p-8 rounded-3xl ${plan.popular ? 'bg-gradient-to-br from-rose-500/20 to-pink-500/10 border border-rose-500/40' : 'bg-slate-800/50 border border-slate-700/50'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-rose-400 to-pink-500 text-white text-sm font-bold">
                    Más elegido
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-black bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">{plan.price}</span>
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
                <a href="#contacto" className={`block text-center py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-gradient-to-r from-rose-400 to-pink-500 text-white shadow-lg shadow-rose-500/30 hover:scale-105' : 'bg-slate-700 text-white hover:bg-slate-600'}`}>
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA - URGENCY */}
      <section id="contacto" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-rose-950/20 to-slate-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-rose-500/20 to-transparent rounded-full blur-[200px]" />
        
        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-sm font-bold mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            Solo 3 lugares este mes
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            Tu agenda llena
            <br />
            <span className="bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
              empieza hoy
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Primera consulta gratis. Sin compromiso.
            <br />
            Respondemos en menos de 2 horas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/541166448389?text=Hola!%20Quiero%20mi%20web%20para%20centro%20de%20estetica" className="group inline-flex items-center gap-3 px-10 py-5 text-xl font-bold rounded-2xl bg-gradient-to-r from-rose-400 to-pink-500 text-white shadow-2xl shadow-rose-500/30 hover:scale-105 transition-all">
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
