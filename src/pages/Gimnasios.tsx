import { MessageCircle, CheckCircle, ArrowRight, Dumbbell, Users, Flame, TrendingUp, Target, Zap, Play, Clock, Shield, Star, Award, Heart, Users2, Sparkles, Zap as Lightning, Activity, Flame as Fire } from 'lucide-react';
import BeforeAfterSection from '@/components/landings/BeforeAfterSection';
import PricingSection from '@/components/landings/PricingSection';
import ClosingSection from '@/components/landings/ClosingSection';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web para Gimnasios | Página que convierte visitas en socios",
  description: "Creamos tu página web profesional para gimnasios. Tu web trabaja 24/7 inscribiendo socios.",
  keywords: ["web para gimnasio", "página web para gimnasio", "landing page para gimnasios"]
};

const FEATURES = [
  { 
    icon: Users, 
    title: "Tu gimnasio disponible 24/7", 
    desc: "Captando clientes mientras dormís. Sin dependen de Instagram ni publicaciones.",
    highlight: "+20 socios nuevos/mes"
  },
  { 
    icon: MessageCircle, 
    title: "Leads por WhatsApp", 
    desc: "Cada visita se convierte en un mensaje directo a tu WhatsApp. Sin fricción.",
    highlight: "3x más consultas"
  },
  { 
    icon: Star, 
    title: "Imagen profesional", 
    desc: "Tu gimnasio se ve premium. Los clientes llegan sabiendo que sos serio.",
    highlight: "Primera impresión top"
  },
  { 
    icon: TrendingUp, 
    title: "Más consultas calificadas", 
    desc: "Gente que ya sabe precios y servicios. Cierras más rápido.",
    highlight: "0 preguntas repetitivas"
  },
];

const WHY_CHOOSE_US = [
  { icon: Clock, title: "Online en 7 días", desc: "Tu web lista para captar clientes desde el día 8." },
  { icon: Shield, title: "Sin sorpresas", desc: "Precio fijo. Sin costos ocultos ni letra pequeña." },
  { icon: Star, title: "Imagen premium", desc: "Tu gimnasio se ve de lujo, no genérico." },
  { icon: Award, title: "Soporte incluido", desc: "Mantengo todo actualizado. Vos entrenás." },
  { icon: TrendingUp, title: "Resultados medibles", desc: "Ve cuántos leads llegan por día." },
  { icon: MessageCircle, title: "WhatsApp directo", desc: "Cada lead te llega al bolsillo." },
];

const PRICING_GIMNASIOS = [
  {
    name: "Básico",
    price: "$297",
    description: "Ideal para empezar",
    features: [
      "Tu gimnasio disponible 24/7",
      "Leads por WhatsApp",
      "Galería de fotos profesional",
      "Precios y horarios claros",
      "1 mes de hosting",
    ],
    cta: "Elegir Básico",
  },
  {
    name: "Profesional",
    price: "$497",
    description: "El más elegido",
    features: [
      "Todo lo de Básico",
      "Aparecés en Google",
      "Estadísticas de visitas",
      "Dominio propio (tugym.com)",
      "6 meses de hosting",
    ],
    cta: "Elegir Profesional",
    popular: true,
  },
  {
    name: "Premium",
    price: "$797",
    description: "Máximo impacto",
    features: [
      "Todo lo de Profesional",
      "Sistema de reservas",
      "CRM de clientes",
      "Blog para SEO",
      "12 meses de hosting",
    ],
    cta: "Elegir Premium",
  },
];

const STATS = [
  { value: "20+", label: "Socios nuevos/mes" },
  { value: "100%", label: "Más inscripciones" },
  { value: "24/7", label: "Tu web trabaja" },
];

const GALLERY = [
  { img: "https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=800&h=600&fit=crop", title: "Área de pesas" },
  { img: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?w=800&h=600&fit=crop", title: "Entrenamiento funcional" },
  { img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop", title: "Clases grupales" },
  { img: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&h=600&fit=crop", title: "Zona cardio" },
];

const BEFORE_AFTER = [
  {
    before: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=800&fit=crop&q=80",
    after: "https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=600&h=800&fit=crop&q=80",
    name: "FitLife Centro Fitness",
    result: "+180% más consultas de nuevos socios",
    timeframe: "30 días",
  },
  {
    before: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=800&fit=crop&q=80",
    after: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?w=600&h=800&fit=crop&q=80",
    name: "Iron Club Gym",
    result: "Web se convirtió en la #1 fuente de nuevos socios",
    timeframe: "60 días",
  },
  {
    before: "https://images.unsplash.com/photo-1517960019194-c5c2e6e2e9b5?w=600&h=800&fit=crop&q=80",
    after: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=600&h=800&fit=crop&q=80",
    name: "PowerFlex Academia",
    result: "Reducimos consultas repetitivas un 60%",
    timeframe: "45 días",
  },
];

const TESTIMONIALS = [
  {
    quote: "Pasé de 45 a 120 socios en 6 meses. La web trajo gente que buscaba exactamente lo que ofrezco.",
    author: "Marcelo Gómez",
    role: "Dueño · Gym Zone",
    result: "+167% socios",
    metric: "De 45 a 120 socios",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&q=80",
  },
  {
    quote: "Dejé de responder WhatsApps preguntando precios. Ahora llegan sabiendo cuánto sale y se inscriben.",
    author: "Carlos Ruiz",
    role: "Gerente · Fit Center",
    result: "-60% consultas",
    metric: "0 preguntas repetitivas",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&q=80",
  },
  {
    quote: "Mi web tiene mejores fotos que las de mi competencia. La primera impresión cuenta y se nota.",
    author: "Ana Martínez",
    role: "Propietaria · Pulse Fitness",
    result: "Top 3 en Google",
    metric: "1er lugar local",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&q=80",
  },
];

const TRUST_BADGES = [
  { value: "50+", label: "Gimnasios confían en nosotros" },
  { value: "4.9", label: "Calificación promedio" },
  { value: "24h", label: "Soporte respuesta" },
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
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/30 group-hover:scale-105 transition-transform">
                  <Dumbbell className="h-6 w-6 text-white" />
                </div>
                <span className="text-white font-bold text-xl tracking-tight">webappimpulsor</span>
              </a>
              <a href="#contacto" className="px-6 py-3 text-sm font-semibold rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 transition-all">
                Quiero mi web
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* HERO - CLIENT ACQUISITION FOCUS */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop&q=85" 
            alt="Gimnasio moderno con equipamiento de entrenamiento" 
            className="w-full h-full object-cover opacity-30"
            onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&h=1080&fit=crop'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />
          {/* Energy glow effects - green theme */}
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-green-500/30 to-emerald-600/10 rounded-full blur-[180px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-emerald-500/20 to-transparent rounded-full blur-[120px]" />
          <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-gradient-to-br from-lime-500/10 to-transparent rounded-full blur-[100px]" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Urgency badge - green style */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-bold mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Solo 3 lugares este mes
            </div>

            {/* Headline - Client acquisition focus */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-6">
              <span className="text-white">Consigue más clientes para tu gimnasio</span>
              <br />
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 bg-clip-text text-transparent">
                sin depender de Instagram
              </span>
            </h1>

            {/* Subheadline - Clear value prop */}
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Landing profesional + sistema de contacto automático por WhatsApp diseñado para convertir visitas en alumnos.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a href="#contacto" className="group inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-2xl shadow-green-500/30 hover:scale-[1.02] transition-all">
                <TrendingUp className="h-6 w-6" />
                Quiero más clientes
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://wa.me/5491234567890?text=Hola!%20Quiero%20más%20clientes%20para%20mi%20gimnasio" className="inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-semibold rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all">
                <MessageCircle className="h-6 w-6" />
                Hablar por WhatsApp
              </a>
            </div>

            {/* Trust line */}
            <p className="text-slate-400 text-sm flex items-center justify-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              Configuración rápida, sin conocimientos técnicos
            </p>
          </div>
        </div>
      </section>

      {/* PAIN POINTS - Owner problems */}
      <section className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              ¿Te suena familiar?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-white mb-2">Publicas en Instagram pero no llegan clientes</h3>
                <p className="text-slate-400 text-sm">El alcance baja, el algoritmo cambia. Tiempo perdido.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-white mb-2">Dependes de mensajes manuales</h3>
                <p className="text-slate-400 text-sm">Respuestas una y otra vez. "Cuánto cuesta?", "Qué incluye?"</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-white mb-2">No tienes presencia profesional</h3>
                <p className="text-slate-400 text-sm">Tu negocio existe pero nadie te encuentra en Google.</p>
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

      {/* CTA #1 - After Pain Points */}
      <section className="py-16 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-y border-green-500/20">
        <div className="container text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            Tu gimnasio merece ser encontrado
          </h3>
          <p className="text-slate-300 mb-6">Empezá hoy, tenés web mañana</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contacto" className="group inline-flex items-center justify-center gap-3 px-10 py-4 text-lg font-bold rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-xl shadow-green-500/30 hover:scale-[1.02] transition-all">
              Quiero más clientes
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://wa.me/5491234567890?text=Hola!%20Quiero%20mi%20web%20para%20gimnasio" className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all">
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATOR */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-green-500/10 to-transparent rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-emerald-600/10 to-transparent rounded-full blur-[150px]" />

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-400 text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Lo que nos diferencia
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
              Esto no es <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">un gimnasio más</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Cada gimnasio tiene su historia. Tu web debe contar la tuya y atraer a quienes buscan exactamente lo que ofrecés.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-5xl mx-auto">
            <div className="group text-center p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/30 hover:border-green-500/30 transition-all duration-500 hover:-translate-y-2">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-green-500/20 transition-all">
                <Target className="h-10 w-10 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enfoque personalizado</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                No vendés horas en una máquina. Ofrecés transformación. Mostrá tu método y atraé socios que lo buscan.
              </p>
            </div>

            <div className="group text-center p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/30 hover:border-green-500/30 transition-all duration-500 hover:-translate-y-2">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-green-500/20 transition-all">
                <Users2 className="h-10 w-10 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Seguimiento real</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Tus trainers, tu método de evaluación, tus controles. Todo visible para generar confianza antes de que lleguen.
              </p>
            </div>

            <div className="group text-center p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/30 hover:border-green-500/30 transition-all duration-500 hover:-translate-y-2">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-green-500/20 transition-all">
                <Heart className="h-10 w-10 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Comunidad</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Más que pesas, construís comunidad. Tu web debe transmitir la energía y el ambiente que tus socios viven.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA #2 - After Differentiator */}
      <section className="py-16 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-y border-green-500/20">
        <div className="container text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            Tu web, tu forma de captar clientes
          </h3>
          <p className="text-slate-300 mb-6">Sin depender de algoritmos ni publicaciones</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contacto" className="group inline-flex items-center justify-center gap-3 px-10 py-4 text-lg font-bold rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-xl shadow-green-500/30 hover:scale-[1.02] transition-all">
              Quiero mi web
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://wa.me/5491234567890?text=Hola!%20Quiero%20mi%20web%20para%20gimnasio" className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all">
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative py-32 lg:py-40">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
        <div className="container relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Resultados que <span className="text-green-400">tu web genera</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Cada feature está diseñada para atraer y convertir socios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="group relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 hover:border-green-500/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500">
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1.5 rounded-full bg-green-500/20 text-green-400 text-xs font-bold">
                    {feature.highlight}
                  </span>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-green-500/20 transition-all">
                  <feature.icon className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA #3 - After Features */}
      <section className="py-16 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-y border-green-500/20">
        <div className="container text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            Empezá a captar socios automáticamente
          </h3>
          <p className="text-slate-300 mb-6">Tu web trabaja 24/7 mientras vos entrenás</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contacto" className="group inline-flex items-center justify-center gap-3 px-10 py-4 text-lg font-bold rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-xl shadow-green-500/30 hover:scale-[1.02] transition-all">
              Quiero más clientes
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://wa.me/5491234567890?text=Hola!%20Quiero%20información%20para%20mi%20gimnasio" className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all">
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-green-500/10 to-emerald-500/5 rounded-full blur-[150px]" />
        </div>
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/15 border border-green-500/25 text-green-400 text-sm font-semibold mb-6">
              <Award className="w-4 h-4" />
              Por qué elegirnos
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              Tu éxito es nuestro objetivo
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Más que una web, construimos una máquina de generar socios
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div key={idx} className="group text-center p-6 rounded-2xl bg-slate-800/40 border border-slate-700/30 hover:border-green-500/30 hover:bg-slate-800/60 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-green-500/20 transition-all">
                  <item.icon className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="font-bold text-white text-sm mb-2">{item.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Mid-page CTA */}
          <div className="mt-16 text-center max-w-2xl mx-auto p-8 rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-green-500/20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Solo 3 lugares este mes
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              ¿Listo para llenar tu gimnasio?
            </h3>
            <p className="text-white/60 mb-6">
              Primera consulta gratis. Sin compromiso. Respondemos en menos de 2 horas.
            </p>
            <a href="#contacto" className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-xl shadow-green-500/25 hover:scale-105 transition-all">
              <MessageCircle className="h-5 w-5" />
              Quiero mi web
            </a>
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
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white text-2xl font-black flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-500/30">
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
              Así se ve tu <span className="text-green-400">web</span>
            </h2>
          </div>

          <div className="flex gap-8 px-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            {GALLERY.map((item, idx) => (
              <div key={idx} className="flex-shrink-0 w-[380px] snap-center">
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50 group">
                  <div className="relative overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700" onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop'; }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2">
                        <Dumbbell className="h-5 w-5 text-green-400" />
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
        accentColor="green"
      />

      {/* CTA #4 - After Before/After */}
      <section className="py-16 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-y border-green-500/20">
        <div className="container text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            Tu gimnasio puede ser el siguiente
          </h3>
          <p className="text-slate-300 mb-6">Ve los resultados de otros gimansios como el tuyo</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contacto" className="group inline-flex items-center justify-center gap-3 px-10 py-4 text-lg font-bold rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-xl shadow-green-500/30 hover:scale-[1.02] transition-all">
              Quiero resultados
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://wa.me/5491234567890?text=Hola!%20Quiero%20mi%20web%20para%20gimnasio" className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all">
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-green-500/5 to-transparent rounded-full blur-[100px]" />
        
        <div className="container relative">
          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16 mb-16">
            {TRUST_BADGES.map((badge, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl lg:text-5xl font-black text-green-400 mb-1">{badge.value}</div>
                <div className="text-sm text-slate-400">{badge.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Lo que dicen nuestros <span className="text-green-400">clientes</span>
            </h2>
            <p className="text-xl text-slate-400">
              Dueños de gimnasios que ya transformaron su negocio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((item, idx) => (
              <div key={idx} className="group relative p-8 rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 hover:border-green-500/30 hover:-translate-y-1 transition-all">
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-20">
                  <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>

                {/* Result badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/20 text-green-400 text-xs font-bold mb-4">
                  <TrendingUp className="w-3 h-3" />
                  {item.metric}
                </div>

                {/* Quote */}
                <p className="text-slate-300 text-lg leading-relaxed mb-6">&ldquo;{item.quote}&rdquo;</p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-700/50">
                  <img 
                    src={item.avatar} 
                    alt={item.author} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-green-500/30"
                  />
                  <div>
                    <p className="font-bold text-white">{item.author}</p>
                    <p className="text-slate-400 text-sm">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social proof line */}
          <div className="mt-12 text-center">
            <p className="text-slate-500 text-sm">
              <span className="text-green-400 font-semibold">+50 gimnasios</span> en Latinoamérica ya confían en webappimpulsor
            </p>
          </div>
        </div>
      </section>

      {/* CTA #5 - After Testimonials */}
      <section className="py-16 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-y border-green-500/20">
        <div className="container text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            Unite a gimansios que ya están llenando
          </h3>
          <p className="text-slate-300 mb-6">+20 socios nuevos por mes es posible</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#planes" className="group inline-flex items-center justify-center gap-3 px-10 py-4 text-lg font-bold rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-xl shadow-green-500/30 hover:scale-[1.02] transition-all">
              Ver planes
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://wa.me/5491234567890?text=Hola!%20Quiero%20empezar%20con%20mi%20web" className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all">
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section id="planes">
        <PricingSection
          title="Planes simples para tu gimnasio"
          subtitle="Elegí el que mejor se adapte a tus necesidades"
          plans={PRICING_GIMNASIOS}
          accentColor="green"
        />
      </section>

      <ClosingSection
        title="No esperes más para llenar tu gimnasio"
        subtitle="Tu web trabaja 24/7 inscribiendo socios mientras vos te enfocas en entrenar"
        ctaText="Empezar hoy"
        accentColor="green"
      />

      {/* FOOTER */}
      <footer className="py-12 border-t border-slate-800 bg-slate-950">
        <div className="container text-center text-slate-500">
          <p className="text-base">© 2024 webappimpulsor</p>
        </div>
      </footer>
    </main>
  );
}
