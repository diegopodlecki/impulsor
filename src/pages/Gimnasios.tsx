import { MessageCircle, CheckCircle, ArrowRight, Dumbbell, Users, TrendingUp, Target, Zap, Clock, Shield, Star, Award, Heart, Users2, Sparkles, Phone, Mail, Rocket, DollarSign, BarChart3, Zap as Lightning } from 'lucide-react';
import PricingSection from '@/components/landings/PricingSection';
import ClosingSection from '@/components/landings/ClosingSection';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web para Gimnasios | Sistema que convierte visitas en socios",
  description: "Creamos tu sistema de captación para gimnasios. Tu web trabaja 24/7 inscribiendo socios.",
  keywords: ["web para gimnasio", "sistema para gimnasios", "landing page gimnasios"]
};

const BENEFITS = [
  { 
    icon: Users, 
    title: "Tu gimnasio trabaja 24/7",
    desc: "Visitantes se convierten en leads mientras dormís",
    stat: "+20 socios/mes"
  },
  { 
    icon: MessageCircle, 
    title: "Leads caen directo a WhatsApp",
    desc: "Cada consulta llega a tu bolsillo, sin fricción",
    stat: "3x más consultas"
  },
  { 
    icon: Star, 
    title: "Imagen que cierra ventas",
    desc: "Tu gimnasio se ve premium desde el primer click",
    stat: "Top 3 Google"
  },
  { 
    icon: TrendingUp, 
    title: "Gente que ya quiere anotarse",
    desc: "Llegan sabiendo precios. Cierras en el primer mensaje",
    stat: "0 preguntas"
  },
];

const PAIN_POINTS = [
  {
    icon: Target,
    title: "Dependés de Instagram para conseguir clientes",
    desc: "El algoritmo decide quién ve tu negocio. Tu competencia sigue creciendo."
  },
  {
    icon: Phone,
    title: "Respondes mensajes todo el día",
    desc: "\"Cuánto sale?\" \"Qué horarios tienen?\" Una y otra vez. Todos los días."
  },
  {
    icon: Mail,
    title: "Pierdes alumnos por no responder rápido",
    desc: "Contestás 2 horas después. Ya se anotaron en otro gimnasio."
  },
  {
    icon: Shield,
    title: "Tu gimnasio no transmite profesionalismo online",
    desc: "No aparecés en Google. Tu negocio no se encuentra."
  },
];

const STEPS = [
  {
    num: "01",
    icon: Rocket,
    title: "Atraés",
    subtitle: "Visitas a tu landing",
    desc: "Tu página aparece en Google cuando buscan \"gimnasio\" cerca."
  },
  {
    num: "02",
    icon: MessageCircle,
    title: "Captás",
    subtitle: "WhatsApp + Formulario",
    desc: "Cada visita se convierte en contacto directo a tu WhatsApp."
  },
  {
    num: "03",
    icon: Users,
    title: "Convertís",
    subtitle: "Leads se vuelven socios",
    desc: "Gente interesada. Vos solo cerrás la venta."
  },
];

const WHY_US = [
  { icon: Clock, stat: "7 días", title: "Online rápido" },
  { icon: Shield, stat: "100%", title: "Precio fijo" },
  { icon: Award, stat: "24/7", title: "Soporte incluido" },
  { icon: BarChart3, stat: "+167%", title: "Socios nuevos" },
];

const PRICING = [
  {
    name: "Básico",
    price: "$297",
    features: [
      "Landing optimizada para tu gimnasio",
      "Sistema de leads por WhatsApp",
      "Diseño profesional",
      "1 mes de hosting",
    ],
    cta: "Elegir Básico",
  },
  {
    name: "Profesional",
    price: "$497",
    popular: true,
    features: [
      "Todo lo de Básico",
      "Posicionamiento en Google",
      "Dominio propio (tugym.com)",
      "6 meses de hosting",
    ],
    cta: "Elegir Profesional",
  },
  {
    name: "Premium",
    price: "$797",
    features: [
      "Todo lo de Profesional",
      "Sistema de reservas",
      "CRM de clientes",
      "12 meses de hosting",
    ],
    cta: "Elegir Premium",
  },
];

const TESTIMONIALS = [
  {
    quote: "Pasé de 45 a 120 socios en 6 meses. La web trajo gente que buscaba exactamente lo que ofrezco.",
    author: "Marcelo G.",
    role: "Dueño de Gym Zone",
    result: "+167%"
  },
  {
    quote: "Dejé de responder WhatsApps preguntando precios. Ahora llegan sabiendo cuánto sale.",
    author: "Carlos R.",
    role: "Gerente de Fit Center",
    result: "-60%"
  },
  {
    quote: "Mi web tiene mejores fotos que la competencia. La primera impresión cuenta.",
    author: "Ana M.",
    role: "Propietaria de Pulse",
    result: "Top 3"
  },
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
              <a href="#planes" className="px-6 py-3 text-sm font-semibold rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 transition-all">
                Ver planes
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* HERO - MAXIMUM URGENCY */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop&q=85" 
            alt="Gimnasio" 
            className="w-full h-full object-cover opacity-10"
            onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&h=1080&fit=crop'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-green-500/20 to-emerald-600/10 rounded-full blur-[200px]" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.95] mb-10">
              <span className="text-white">Si tu gimnasio no consigue clientes todos los días,</span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                estás perdiendo dinero
              </span>
            </h1>

            <p className="text-2xl sm:text-3xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              No necesitas más seguidores. Necesitas un sistema que convierta visitas en alumnos automáticamente.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10">
              <a href="#planes" className="group inline-flex items-center justify-center gap-4 px-16 py-6 text-2xl font-bold rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-2xl shadow-green-500/50 hover:scale-[1.02] transition-all">
                Quiero más alumnos
                <ArrowRight className="h-7 w-7 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://wa.me/541166448389?text=Hola!%20Quiero%20más%20alumnos%20para%20mi%20gimnasio" className="inline-flex items-center justify-center gap-3 px-12 py-6 text-xl font-semibold rounded-2xl bg-white/5 border-2 border-white/15 text-white hover:bg-white/10 transition-all">
                <MessageCircle className="h-6 w-6" />
                Hablar por WhatsApp
              </a>
            </div>

            <p className="text-lg text-green-400/80 font-medium">
              Funciona incluso si hoy dependés solo de Instagram
            </p>
          </div>
        </div>
      </section>

      {/* REALITY CHECK */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="absolute inset-0" />
        
        <div className="container relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white text-center mb-16">
            La realidad de la mayoría de los gimnasios
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 text-center">
              <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>
              <p className="text-xl font-bold text-white">Publicas contenido pero no llegan clientes</p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 text-center">
              <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-xl font-bold text-white">Pierdes consultas por no responder a tiempo</p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 text-center">
              <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-red-400" />
              </div>
              <p className="text-xl font-bold text-white">Tu WhatsApp es un caos</p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 text-center">
              <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-xl font-bold text-white">Tu negocio depende de tu tiempo</p>
            </div>
          </div>
        </div>
      </section>

      {/* NOT JUST A WEBSITE */}
      <section className="relative py-32 lg:py-40 overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="absolute inset-0" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-green-500/15 to-transparent rounded-full blur-[150px]" />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-8">
              Esto <span className="text-green-400">no es una web más</span>
            </h2>
            <p className="text-xl sm:text-2xl text-slate-300 mb-16 max-w-2xl mx-auto">
              No te vendemos una página bonita. Te damos un sistema que trabaja para conseguirte socios.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">No es solo diseño</h3>
                <p className="text-slate-400">Tu web se ve profesional, pero eso es lo menos importante. Lo que importa es que <span className="text-white font-semibold">convierte visitas en leads</span>.</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Es un sistema para conseguir clientes</h3>
                <p className="text-slate-400">Landing optimizada + WhatsApp directo + posicionamiento en Google. <span className="text-green-400 font-semibold">Un sistema completo</span>, no piezas sueltas.</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center mx-auto mb-6">
                  <Dumbbell className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Pensado para gimnasios</h3>
                <p className="text-slate-400">No es una plantilla genérica. <span className="text-white font-semibold">Tu landing habla el idioma de tu cliente</span>: resultados, horarios, precios, ubicación.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-red-500/10 to-transparent rounded-full blur-[100px]" />
        
        <div className="container relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              El problema
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              ¿Te suena <span className="text-red-400">familiar</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {PAIN_POINTS.map((pain, idx) => (
              <div key={idx} className="flex items-start gap-5 p-8 rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-red-500/20 hover:border-red-500/40 transition-all">
                <div className="w-14 h-14 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0">
                  <pain.icon className="w-7 h-7 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white mb-2">{pain.title}</h3>
                  <p className="text-slate-400">{pain.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-green-500/10 to-transparent rounded-full blur-[150px]" />
        
        <div className="container relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/15 border border-green-500/25 text-green-400 text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              El sistema
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              Cómo funciona
            </h2>
            <p className="text-xl text-slate-400">
              Sistema simple en 3 pasos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {STEPS.map((step, idx) => (
              <div key={idx} className="relative text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white text-2xl font-black flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
                  {step.num}
                </div>
                <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2">{step.title}</h3>
                <p className="text-green-400 font-semibold mb-4">{step.subtitle}</p>
                <p className="text-slate-400">{step.desc}</p>
                
                {idx < 2 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-green-500/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA #2 */}
      <section className="py-20 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-y border-green-500/20">
        <div className="container text-center">
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
            Atraé, captá, convertí
          </h3>
          <p className="text-slate-300 mb-8">El sistema completo para tu gimnasio</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#planes" className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-12 py-5 text-xl font-bold rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-2xl shadow-green-500/40 hover:scale-[1.02] transition-all">
              Quiero más alumnos
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://wa.me/541166448389" className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 text-lg font-semibold rounded-xl bg-white/5 border-2 border-white/20 text-white hover:bg-white/10 transition-all">
              <MessageCircle className="h-6 w-6" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
        
        <div className="container relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/15 border border-green-500/25 text-green-400 text-sm font-semibold mb-6">
              <TrendingUp className="w-4 h-4" />
              Resultados
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              Lo que obtenés
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((benefit, idx) => (
              <div key={idx} className="group relative p-8 rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 hover:border-green-500/30 hover:-translate-y-2 transition-all duration-500">
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1.5 rounded-full bg-green-500/20 text-green-400 text-xs font-bold">
                    {benefit.stat}
                  </span>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-7 h-7 text-green-400" />
                </div>
                <h3 className="text-xl font-black text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-400">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA #3 */}
      <section className="py-20 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-y border-green-500/20">
        <div className="container text-center">
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
            +167% más socios en 6 meses
          </h3>
          <p className="text-slate-300 mb-8">El promedio de nuestros clientes</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#planes" className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-12 py-5 text-xl font-bold rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-2xl shadow-green-500/40 hover:scale-[1.02] transition-all">
              Quiero más alumnos
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://wa.me/541166448389" className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 text-lg font-semibold rounded-xl bg-white/5 border-2 border-white/20 text-white hover:bg-white/10 transition-all">
              <MessageCircle className="h-6 w-6" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
        
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
              Por qué <span className="text-green-400">nos eligen</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {WHY_US.map((item, idx) => (
              <div key={idx} className="text-center p-6 rounded-2xl bg-slate-800/40 border border-slate-700/30">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-green-400" />
                </div>
                <div className="text-3xl font-black text-green-400 mb-1">{item.stat}</div>
                <div className="text-white font-semibold">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-green-500/5 to-transparent rounded-full blur-[100px]" />
        
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
              Lo que dicen <span className="text-green-400">nuestros clientes</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/20 text-green-400 text-xs font-bold mb-4">
                  {item.result}
                </div>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">&ldquo;{item.quote}&rdquo;</p>
                <div className="pt-4 border-t border-slate-700/50">
                  <p className="font-bold text-white">{item.author}</p>
                  <p className="text-slate-400 text-sm">{item.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-500">
              <span className="text-green-400 font-semibold">+50 gimnasios</span> ya confían en webappimpulsor
            </p>
          </div>
        </div>
      </section>

      {/* CTA #4 */}
      <section className="py-20 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-y border-green-500/20">
        <div className="container text-center">
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
            Unite a gimnasios que ya están llenando
          </h3>
          <p className="text-slate-300 mb-8">+20 socios nuevos por mes es posible</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#planes" className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-12 py-5 text-xl font-bold rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-2xl shadow-green-500/40 hover:scale-[1.02] transition-all">
              Quiero más alumnos
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://wa.me/541166448389" className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 text-lg font-semibold rounded-xl bg-white/5 border-2 border-white/20 text-white hover:bg-white/10 transition-all">
              <MessageCircle className="h-6 w-6" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* PRICING ANCHOR */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6">
              <span className="text-slate-300">Planes desde</span>
              <br />
              <span className="text-green-400">$297 USD</span>
            </h2>
            <p className="text-xl text-slate-400">
              Menos de lo que te cuesta perder <span className="text-white font-bold">1 solo cliente</span> por semana
            </p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="planes">
        <PricingSection
          title=""
          subtitle=""
          plans={PRICING}
          accentColor="green"
        />
      </section>

      {/* FINAL CLOSE */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-green-500/10 to-transparent rounded-full blur-[150px]" />
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-8">
              No necesitás más seguidores.
              <br />
              <span className="text-green-400">Necesitás un sistema que convierte.</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12">
              Empezá hoy. En 7 días tenés tu sistema funcionando.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#planes" className="group inline-flex items-center justify-center gap-3 px-12 py-5 text-xl font-bold rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-2xl shadow-green-500/40 hover:scale-[1.02] transition-all">
                Empezar ahora
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://wa.me/541166448389?text=Hola!%20Quiero%20empezar%20con%20mi%20web%20para%20gimnasio" className="inline-flex items-center justify-center gap-3 px-10 py-5 text-xl font-semibold rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all">
                <MessageCircle className="h-6 w-6" />
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <ClosingSection
        title="Tu sistema de captación, funcionando"
        subtitle="webappimpulsor - Tu web trabaja 24/7 inscribiendo socios"
        ctaText="Empezar ahora"
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
