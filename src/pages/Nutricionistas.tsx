import { MessageCircle, CheckCircle, ArrowRight, Leaf, Salad, Apple, TrendingUp, Users, Play, Clock, Shield, Star, Award } from 'lucide-react';
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
                  <span className="text-white font-bold text-xl">W</span>
                </div>
                <span className="text-slate-800 font-bold text-xl tracking-tight">Impulsor</span>
              </a>
              <a href="#contacto" className="px-6 py-3 text-sm font-semibold rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 transition-all">
                Quiero más pacientes
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-white to-teal-50/30" />
          <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-emerald-200/30 to-teal-200/20 rounded-full blur-[150px]" />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-500/10 border border-emerald-100">
                <img 
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900&h=1000&fit=crop&q=85" 
                  alt="Alimentación saludable" 
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>

              {/* Overlaid image */}
              <div className="absolute -bottom-10 -right-4 lg:-right-10 w-56 h-56 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=500&fit=crop&q=80" 
                  alt="Ensalada fresca" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute top-8 -left-4 lg:-left-8 bg-white rounded-2xl px-5 py-3 shadow-xl border border-emerald-100">
                <div className="flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-emerald-600" />
                  <p className="text-sm font-medium text-emerald-600">+5 pacientes/mes</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-8">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-semibold">
                <Salad className="w-5 h-5" />
                Web para Nutricionistas
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02]">
                <span className="text-slate-900">Tu consultorio</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  saludable y visible
                </span>
              </h1>

              <p className="text-xl text-slate-600 max-w-xl leading-relaxed">
                Web profesional que muestra tu metodología y genera confianza. 
                <span className="text-emerald-600 font-medium"> Pacientes que llegan sabiendo qué ofrecés.</span>
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-4 py-4">
                {STATS.map((stat, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-emerald-50 border border-emerald-100">
                    <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                      {stat.value}
                    </span>
                    <span className="text-sm text-slate-600">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#contacto" className="inline-flex items-center justify-center gap-3 px-8 py-4.5 text-lg font-semibold rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-xl shadow-emerald-500/25 hover:scale-[1.02] hover:shadow-emerald-500/40 transition-all">
                  Quiero más pacientes <ArrowRight className="h-5 w-5" />
                </a>
                <a href="#ver-ejemplo" className="inline-flex items-center justify-center gap-3 px-8 py-4.5 text-lg font-medium rounded-2xl border border-emerald-200 text-slate-700 hover:border-emerald-400 hover:bg-emerald-50 transition-all">
                  <Play className="w-5 h-5" /> Ver ejemplo
                </a>
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
      <section className="relative py-32 lg:py-40 bg-white">
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

      {/* CTA */}
      <section id="contacto" className="relative py-40 lg:py-52 bg-gradient-to-br from-emerald-500 via-teal-500 to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal-300/20 rounded-full blur-[100px]" />
        </div>

        <div className="container relative z-10 text-center max-w-3xl mx-auto space-y-8">
          <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-white">
            Empezá a recibir más consultas
          </h2>
          <p className="text-2xl text-white/80">
            Primera consulta sin cargo. Sin compromiso.
          </p>
          <a href="https://wa.me/5491234567890" className="inline-flex items-center gap-4 px-12 py-5 text-xl font-bold rounded-2xl bg-white text-emerald-600 shadow-2xl hover:scale-[1.02] transition-all">
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
