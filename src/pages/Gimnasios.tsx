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
    desc: "Leads llegan solos mientras dormís.",
    highlight: "+20 socios/mes"
  },
  { 
    icon: MessageCircle, 
    title: "Leads por WhatsApp", 
    desc: "Cada visita se convierte en contacto directo.",
    highlight: "3x más consultas"
  },
  { 
    icon: Star, 
    title: "Imagen profesional", 
    desc: "Tu gimnasio se ve premium desde el primer click.",
    highlight: "Top 3 Google"
  },
  { 
    icon: TrendingUp, 
    title: "Más consultas calificadas", 
    desc: "Gente que ya sabe precios. Cierras más rápido.",
    highlight: "0 preguntas"
  },
];

const WHY_CHOOSE_US = [
  { icon: Clock, title: "Online en 7 días", desc: "Tu web lista desde el día 8." },
  { icon: Shield, title: "Sin sorpresas", desc: "Precio fijo. Sin costos ocultos." },
  { icon: Star, title: "Imagen premium", desc: "Tu gimnasio se ve de lujo." },
  { icon: Award, title: "Soporte incluido", desc: "Todo actualizado. Vos entrenás." },
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

      {/* HERO - AGGRESSIVE & OUTCOME-DRIVEN */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop&q=85" 
            alt="Gimnasio moderno con equipamiento de entrenamiento" 
            className="w-full h-full object-cover opacity-25"
            onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&h=1080&fit=crop'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />
          {/* Energy glows - green theme */}
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-green-500/30 to-emerald-600/10 rounded-full blur-[180px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-emerald-500/20 to-transparent rounded-full blur-[120px]" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Problem headline - creates tension */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.1] mb-8">
              <span className="text-white">Si tu gimnasio no consigue clientes todos los días,</span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                estás perdiendo dinero
              </span>
            </h1>

            {/* Solution subheadline */}
            <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Creamos sistemas simples que convierten visitas en alumnos usando landing pages + WhatsApp automatizado
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a href="#contacto" className="group inline-flex items-center justify-center gap-3 px-12 py-5 text-lg font-bold rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-2xl shadow-green-500/40 hover:scale-[1.02] transition-all">
                <TrendingUp className="h-6 w-6" />
                Quiero más alumnos
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://wa.me/5491234567890?text=Hola!%20Quiero%20más%20alumnos%20para%20mi%20gimnasio" className="inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-semibold rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all">
                <MessageCircle className="h-6 w-6" />
                Hablar por WhatsApp
              </a>
            </div>

            {/* Reassurance line */}
            <p className="text-slate-400 text-base flex items-center justify-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              Sin sistemas complicados. Sin perder tiempo.
            </p>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA - SYSTEM OVERVIEW */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-green-500/10 to-transparent rounded-full blur-[150px]" />
        
        <div className="container relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/15 border border-green-500/25 text-green-400 text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              El sistema
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              Cómo funciona el <span className="text-green-400">sistema</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              3 pasos para conseguir alumnos en piloto automático
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 hover:border-green-500/30 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/30">
                    <span className="text-white font-black text-xl">1</span>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <Target className="w-6 h-6 text-green-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-black text-white mb-3">Atraes visitas</h3>
                <p className="text-slate-400 leading-relaxed">
                  Landing optimizada para Google. Sin depender de redes sociales.
                </p>
                <div className="mt-6 pt-6 border-t border-slate-700/50">
                  <div className="flex items-center gap-2 text-green-400 text-sm font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    <span>Tu gimnasio visible 24/7</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Connector arrow */}
            <div className="hidden md:flex absolute top-1/2 left-1/3 items-center justify-center z-10">
              <div className="w-24 h-0.5 bg-gradient-to-r from-green-500/50 to-transparent" />
            </div>

            {/* Step 2 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 hover:border-green-500/30 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/30">
                    <span className="text-white font-black text-xl">2</span>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-green-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-black text-white mb-3">Captas contactos</h3>
                <p className="text-slate-400 leading-relaxed">
                  Cada visita se convierte en mensaje directo a tu WhatsApp.
                </p>
                <div className="mt-6 pt-6 border-t border-slate-700/50">
                  <div className="flex items-center gap-2 text-green-400 text-sm font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    <span>Leads llegan solos</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 hover:border-green-500/30 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/30">
                    <span className="text-white font-black text-xl">3</span>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-black text-white mb-3">Conviertes en alumnos</h3>
                <p className="text-slate-400 leading-relaxed">
                  Seguimiento simple. Cada lead tiene la info para anotarse.
                </p>
                <div className="mt-6 pt-6 border-t border-slate-700/50">
                  <div className="flex items-center gap-2 text-green-400 text-sm font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    <span>Más inscriptos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Result highlight */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-slate-800/60 border border-slate-700/50">
              <div className="text-3xl font-black text-green-400">+167%</div>
              <div className="text-left">
                <div className="text-white font-bold">socios nuevos en 6 meses</div>
                <div className="text-slate-400 text-sm">Promedio de nuestros clientes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN POINTS - Deep identification */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-red-500/10 to-transparent rounded-full blur-[100px]" />
        
        <div className="container relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              El problema real
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              ¿Te suena <span className="text-red-400">demasiado familiar</span>?
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Problemas que vemos todos los días en gimnasios sin sistema
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Pain 1 */}
            <div className="flex items-start gap-5 p-8 rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-red-500/20 hover:border-red-500/40 transition-all">
              <div className="w-14 h-14 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-black text-white mb-2">Dependes de Instagram para clientes</h3>
                <p className="text-slate-400">El algoritmo decide. Tu competencia sigue creciendo.</p>
              </div>
            </div>

            {/* Pain 2 */}
            <div className="flex items-start gap-5 p-8 rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-red-500/20 hover:border-red-500/40 transition-all">
              <div className="w-14 h-14 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-black text-white mb-2">Respondes mensajes todo el día</h3>
                <p className="text-slate-400">"Cuánto sale?", "Qué horarios?". Todos los días.</p>
              </div>
            </div>

            {/* Pain 3 */}
            <div className="flex items-start gap-5 p-8 rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-red-500/20 hover:border-red-500/40 transition-all">
              <div className="w-14 h-14 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-black text-white mb-2">Pierdes alumnos por no responder rápido</h3>
                <p className="text-slate-400">Contestás 2 horas después. Ya se anotaron en otro lado.</p>
              </div>
            </div>

            {/* Pain 4 */}
            <div className="flex items-start gap-5 p-8 rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-red-500/20 hover:border-red-500/40 transition-all">
              <div className="w-14 h-14 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-black text-white mb-2">Sin presencia profesional online</h3>
                <p className="text-slate-400">No aparecés en Google. Tu negocio no se encuentra.</p>
              </div>
            </div>
          </div>

          {/* Emotional hook */}
          <div className="mt-16 text-center">
            <p className="text-2xl font-black text-slate-200">
              Mientras más tiempo pasa, <span className="text-red-400">más dinero dejás de ganar</span>.
            </p>
          </div>
        </div>
      </section>

      {/* TRANSFORMATION - BEFORE / AFTER */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-green-500/10 to-transparent rounded-full blur-[150px]" />
        
        <div className="container relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/15 border border-green-500/25 text-green-400 text-sm font-semibold mb-6">
              <TrendingUp className="w-4 h-4" />
              La transformación
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              De <span className="text-red-400 line-through">cazar clientes</span> a <span className="text-green-400">recibirlos</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              De luchar por clientes a que vengan solos
            </p>
          </div>

          {/* Before / After Split */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* BEFORE */}
            <div className="relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-sm font-bold">
                ANTES
              </div>
              <div className="pt-8 p-8 rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-red-500/20">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-black text-white mb-1">Pocos clientes</h4>
                      <p className="text-slate-400 text-sm">Dependés de recomendaciones</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-black text-white mb-1">Desorden total</h4>
                      <p className="text-slate-400 text-sm">Sin sistema ni seguimiento</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-black text-white mb-1">WhatsApp saturado</h4>
                      <p className="text-slate-400 text-sm">Mensajes repetitivos todo el día</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-black text-white mb-1">Sin presencia online</h4>
                      <p className="text-slate-400 text-sm">No existís en Google</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AFTER */}
            <div className="relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-bold">
                DESPUÉS
              </div>
              <div className="pt-8 p-8 rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-green-500/30">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-black text-white mb-1">Flujo constante de consultas</h4>
                      <p className="text-slate-400 text-sm">Leads llegan solos todos los días</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-black text-white mb-1">Sistema organizado</h4>
                      <p className="text-slate-400 text-sm">Todo fluye solo</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-black text-white mb-1">Leads directos al WhatsApp</h4>
                      <p className="text-slate-400 text-sm">Gente que ya sabe precios</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-black text-white mb-1">Imagen profesional</h4>
                      <p className="text-slate-400 text-sm">Tu gimnasio se ve premium</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow indicator */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-3 text-green-400 font-semibold">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <span>La transformación completa</span>
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

      {/* PRICING ANCHOR - Reduce friction */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Pricing anchor */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-semibold mb-6">
                <TrendingUp className="w-4 h-4" />
                Inversión que se paga sola
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6">
                <span className="text-slate-300">Planes desde</span>
                <br />
                <span className="text-green-400">$297 USD</span>
              </h2>
              
              <p className="text-xl text-slate-400 mb-6">
                Menos de lo que te cuesta perder <span className="text-white font-bold">1 solo cliente</span> por semana
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>1 cliente nuevo = ~$50/mes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Con 6 socios pagás la web</span>
                </div>
              </div>
            </div>

            {/* ROI calculator hint */}
            <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50">
              <p className="text-slate-300">
                <span className="text-green-400 font-bold">1 alumno nuevo al mes</span> = la inversión de tu plan básico se paga sola
              </p>
            </div>
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
