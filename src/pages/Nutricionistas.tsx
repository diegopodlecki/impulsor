import { MessageCircle, CheckCircle, ArrowRight, Leaf, Salad, Apple, TrendingUp, Users, Play, Clock, Shield, Star, Award } from 'lucide-react';
import PricingSection from '@/components/landings/PricingSection';
import ClosingSection from '@/components/landings/ClosingSection';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web para Nutricionistas | Página que convierte visitas en pacientes",
  description: "Creamos tu página web profesional para nutricionistas. Tu consultorio online que trabaja 24/7.",
  keywords: ["web para nutricionista", "página web para nutricionista", "web nutricionista"]
};

const SERVICES = [
  { 
    icon: Apple, 
    title: "Plan a tu medida", 
    desc: "Consultas, controles y seguimiento. Cada paciente con su plan alimentario personalizado.",
    highlight: " -5kg en 8 semanas"
  },
  { 
    icon: Salad, 
    title: "Tu método, claro", 
    desc: "Paleo, keto, intuitivo. Mostrá tu enfoque y llegan pacientes que lo buscan.",
    highlight: "Pacientes calificados"
  },
  { 
    icon: TrendingUp, 
    title: "Logros que inspiran", 
    desc: "Testimonios de pacientes que lograron sus metas. Prueba social que convince.",
    highlight: "Resultados comprobados"
  },
  { 
    icon: Users, 
    title: "Agenda siempre llena", 
    desc: "Reservas online 24/7. Pacientes que se autogestionan, vos solo atendés.",
    highlight: "0 llamadas por turnos"
  },
];

const WHY_CHOOSE_US_NUTRI = [
  { icon: Clock, title: "Listo en 7 días", desc: "Tu web online rápidamente." },
  { icon: Leaf, title: "Enfoque personalizado", desc: "Tu método nutricional destacado." },
  { icon: Star, title: "Imagen premium", desc: "Tu consultorio se ve profesional." },
  { icon: Shield, title: "Sin costos ocultos", desc: "Precio claro, todo incluido." },
  { icon: TrendingUp, title: "Resultados visibles", desc: "Testimonios que convencen." },
  { icon: Award, title: "Soporte incluido", desc: "Mantengo todo actualizado." },
];

const STATS = [
  { value: "5", label: "Pacientes nuevos/mes" },
  { value: "45 días", label: "Para agenda llena" },
  { value: "100%", label: "Más visibilidad" },
];

const GALLERY = [
  { img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop", title: "Alimentación sana" },
  { img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop", title: "Platos nutritivos" },
  { img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=600&fit=crop", title: "Tu metodología" },
  { img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop", title: "Testimonios" },
];

const TESTIMONIALS = [
  {
    quote: "Pasé de agenda vacía a lista de espera en 6 semanas. Ahora me encuentran por Google sin hacer nada.",
    author: "Ana Martínez",
    role: "Nutricionista · Recoleta",
    result: "Lista de espera",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop&q=80",
  },
  {
    quote: "Mis planes claros atraen pacientes decididos. Ya no gasto tiempo en consultas que no se animan.",
    author: "Diego Herrera",
    role: "Nutricionista · Palermo",
    result: "+60% conversiones",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80",
  },
  {
    quote: "Mis pacientes llegan sabiendo qué incluye cada plan. El onboarding es mucho más rápido.",
    author: "María López",
    role: "Nutricionista · Belgrano",
    result: "-70% tiempo admin",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&q=80",
  },
];

const PRICING_NUTRI = [
  {
    name: "Básico",
    price: "$247 USD",
    description: "Para comenzar",
    features: [
      "Perfil profesional",
      "Tu metodología",
      "Planes nutricionales",
      "WhatsApp integrado",
      "Galería de resultados",
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
      "SEO para nutricionistas",
      "Google Analytics",
      "Dominio propio",
      "Testimonios de pacientes",
      "6 meses de hosting",
    ],
    cta: "Elegir Profesional",
    popular: true,
  },
  {
    name: "Premium",
    price: "$647 USD",
    description: "Práctica completa",
    features: [
      "Todo lo de Profesional",
      "Sistema de citas",
      "Blog de recetas",
      "CRM de pacientes",
      "Copywriting especializado",
      "12 meses de hosting",
    ],
    cta: "Elegir Premium",
  },
];

const PROCESS = [
  { num: "01", title: "Conversamos", desc: "Primer contacto sin cargo. Entiendo tu enfoque nutricional y tu objetivo." },
  { num: "02", title: "Diseñamos", desc: "Creo tu web con tu metodología, planes y testimonios de pacientes." },
  { num: "03", title: "Publicamos", desc: "Tu web online en 7 días. Comenzás a recibir consultas automáticamente." },
];

export default function Nutricionistas() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50/50 via-white to-teal-50/30 text-slate-800 overflow-hidden">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="backdrop-blur-2xl bg-white/80 border-b border-slate-200/50">
          <div className="container">
            <div className="flex items-center justify-between h-20 py-5">
              <a href="/" className="flex items-center gap-3 group">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
                  <span className="text-white font-bold text-2xl">W</span>
                </div>
                <span className="text-slate-800 font-bold text-xl tracking-tight">webappimpulsor</span>
              </a>
              <a href="#contacto" className="px-6 py-3 text-sm font-semibold rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 transition-all">
                Quiero más pacientes
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* HERO - FRESH/ORGANIC STYLE: Light, natural, green theme */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Organic gradient background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-emerald-200/40 to-teal-200/20 rounded-full blur-[180px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-teal-200/30 to-emerald-100/20 rounded-full blur-[150px]" />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Content */}
            <div className="order-2 lg:order-1 space-y-8">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-sm font-bold">
                <Apple className="w-4 h-4" />
                Solución para Nutricionistas
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02]">
                <span className="text-slate-900">Tu conocimiento,</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  al alcance de todos
                </span>
              </h1>

              <p className="text-xl text-slate-600 max-w-xl leading-relaxed">
                Web profesional que muestra tu enfoque nutricional y genera confianza. 
                <span className="text-emerald-600 font-medium"> Pacientes que llegan decididos.</span>
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contacto" className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-xl shadow-emerald-500/20 hover:scale-[1.02] transition-all">
                  <TrendingUp className="h-5 w-5" />
                  Quiero más pacientes
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a href="#ver-ejemplo" className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold rounded-xl border-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50 transition-all">
                  <Play className="w-5 h-5" />
                  Ver ejemplo
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-6 pt-2">
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  Sin costo inicial
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  Online en 7 días
                </div>
              </div>
            </div>

            {/* Right - Visual */}
            <div className="relative order-1 lg:order-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-500/10 border border-emerald-100">
                <img 
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900&h=1000&fit=crop&q=85" 
                  alt="Nutrición saludable" 
                  className="w-full h-[450px] lg:h-[550px] object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=900&h=1000&fit=crop'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-2xl border border-emerald-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                    <Leaf className="w-7 h-7 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-emerald-600">{STATS[0].value}</p>
                    <p className="text-sm text-slate-500">{STATS[0].label}</p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl px-5 py-3 shadow-xl text-white">
                <div className="flex items-center gap-2">
                  <Apple className="h-5 w-5" />
                  <span className="font-bold">Método claro</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-6 bg-emerald-50/50 border-y border-emerald-100">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-10 text-slate-600 text-sm font-medium">
            <span className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-emerald-500" /> Sin costo inicial</span>
            <span className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-emerald-500" /> Soporte incluido</span>
            <span className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-emerald-500" /> Online en 7 días</span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-32 lg:py-40 bg-white">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Tu web genera <span className="text-emerald-600">resultados</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Cada servicio mostrado con el beneficio que el paciente busca
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, idx) => (
              <div key={idx} className="group relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-emerald-50/50 to-teal-50/30 border border-emerald-100 hover:border-emerald-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-500">
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-600 text-xs font-bold">
                    {service.highlight}
                  </span>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-emerald-500/20 transition-all">
                  <service.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-b from-emerald-50/20 via-white to-emerald-50/10">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-600 text-sm font-semibold mb-6">
              <Award className="w-4 h-4" />
              Por qué elegirnos
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              Tu práctica nutricional merece ser visible
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Construimos tu presencia online para que te encuentren pacientes que buscan tu ayuda
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            {WHY_CHOOSE_US_NUTRI.map((item, idx) => (
              <div key={idx} className="group text-center p-6 rounded-2xl bg-white border border-slate-100 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-emerald-500/20 transition-all">
                  <item.icon className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-bold text-slate-800 text-sm mb-2">{item.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Mid-page CTA */}
          <div className="mt-16 text-center max-w-2xl mx-auto p-8 rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 text-sm font-medium mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              Solo 4 lugares este mes
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              ¿Listo para llenar tu agenda?
            </h3>
            <p className="text-slate-600 mb-6">
              Primera consulta gratis. Pacientes calificados esperando.
            </p>
            <a href="#contacto" className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-xl shadow-emerald-500/20 hover:scale-105 transition-all">
              <MessageCircle className="h-5 w-5" />
              Quiero más pacientes
            </a>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative py-32 lg:py-40 bg-gradient-to-b from-emerald-50/30 to-white">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Cómo funciona
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {PROCESS.map((step, idx) => (
              <div key={idx} className="relative text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white text-2xl font-black flex items-center justify-center mx-auto mb-8 shadow-lg shadow-emerald-500/30">
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
      <section id="ver-ejemplo" className="relative py-32 lg:py-40 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Así se ve tu <span className="text-emerald-600">web</span>
            </h2>
          </div>

          <div className="flex gap-8 px-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            {GALLERY.map((item, idx) => (
              <div key={idx} className="flex-shrink-0 w-[340px] snap-center">
                <div className="rounded-3xl overflow-hidden shadow-xl border border-emerald-100 group">
                  <div className="relative overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2">
                        <Apple className="h-5 w-5 text-emerald-300" />
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
      <section className="relative py-32 lg:py-40 bg-gradient-to-b from-emerald-50/30 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Nutricionistas con <span className="text-emerald-600">resultados</span>
            </h2>
            <p className="text-xl text-slate-600">
              Profesionales que transformaron su consultorio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((item, idx) => (
              <div key={idx} className="group relative p-8 rounded-3xl bg-white shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/10 transition-all">
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-600 text-xs font-bold">
                    {item.result}
                  </span>
                </div>
                <p className="text-slate-700 text-lg leading-relaxed mb-8">&ldquo;{item.quote}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={item.avatar} 
                    alt={item.author} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-emerald-200"
                  />
                  <div>
                    <p className="font-bold text-slate-800">{item.author}</p>
                    <p className="text-slate-500 text-sm">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="planes">
        <PricingSection
          title="Planes para tu práctica"
          subtitle="Elegí el que mejor se adapte a tu consultorio"
          plans={PRICING_NUTRI}
          accentColor="emerald"
        />
      </section>

      <ClosingSection
        title="Tu práctica merece ser encontrada"
        subtitle="Pacientes que buscan un nutricionista van a encontrarte. Es hora de estar visible"
        ctaText="Empezar hoy"
        accentColor="emerald"
      />

      {/* FOOTER */}
      <footer className="py-12 border-t border-slate-200 bg-slate-50">
        <div className="container text-center text-slate-500">
          <p className="text-base">© 2024 webappimpulsor</p>
        </div>
      </footer>
    </main>
  );
}
