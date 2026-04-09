import { MessageCircle, CheckCircle, ArrowRight, Sparkles, Droplet, Flower2, Star, Gem, Play, Clock, Shield, Award } from 'lucide-react';
import BeforeAfterSection from '@/components/landings/BeforeAfterSection';
import PricingSection from '@/components/landings/PricingSection';
import ClosingSection from '@/components/landings/ClosingSection';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web para Centros de Estética | Página que reserva turnos por WhatsApp",
  description: "Creamos tu página web profesional para centros de estética. Tu centro de belleza merece ser encontrado.",
  keywords: ["web para estética", "página web para centro de estética", "web estética"]
};

const TREATMENTS = [
  { 
    icon: Droplet, 
    title: "Cuerpo esculpido", 
    desc: "Lipoescultura y reducción de grasa localizada. Resultados que tus clientas quieren mostrar.",
    highlight: " -8cm en 4 semanas"
  },
  { 
    icon: Flower2, 
    title: "Piel radiante", 
    desc: "Limpieza, hidratación y rejuvenecimiento. Tratamientos que cambian cómo te sentís.",
    highlight: "Efecto glow inmediato"
  },
  { 
    icon: Sparkles, 
    title: "Firmeza visible", 
    desc: "Radiofrecuencia y tensado. Tu tecnología, visible para quien busca resultados.",
    highlight: "Piel 5 años más joven"
  },
  { 
    icon: Gem, 
    title: "Confianza plena", 
    desc: "Celulitis, estrías y tonificación. Tratamientos que tus clientas recomiendan.",
    highlight: "99% satisfacción"
  },
];

const WHY_CHOOSE_US_ESTETICA = [
  { icon: Clock, title: "Web en 7 días", desc: "Tu centro online rápidamente." },
  { icon: Sparkles, title: "Diseño premium", desc: "Tu centro se ve de lujo." },
  { icon: Shield, title: "Sin costos ocultos", desc: "Precio claro, todo incluido." },
  { icon: Star, title: "Galería stunning", desc: "Fotos de tratamientos que venden." },
  { icon: Gem, title: "Tratamientos claros", desc: "Cada servicio con resultado." },
  { icon: Award, title: "Soporte incluido", desc: "Mantengo todo actualizado." },
];

const STATS = [
  { value: "15", label: "Clientas nuevas/mes" },
  { value: "100%", label: "Más reservas" },
  { value: "30 días", label: "Para agenda llena" },
];

const GALLERY = [
  { img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&h=600&fit=crop", title: "Tratamientos" },
  { img: "https://images.unsplash.com/photo-1598524374912-6f40a6c4b22e?w=800&h=600&fit=crop", title: "Tu espacio" },
  { img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop", title: "Resultados" },
  { img: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=600&fit=crop", title: "Antes y después" },
];

const BEFORE_AFTER_ESTETICA = [
  {
    before: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=800&fit=crop&q=80",
    after: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=800&fit=crop&q=80",
    name: "Bella Piel Centro",
    result: "Doubled monthly appointments within 60 days of launching their new website",
    timeframe: "60 días",
  },
  {
    before: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=800&fit=crop&q=80",
    after: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=800&fit=crop&q=80",
    name: "Glow Estética",
    result: "Premium positioning increased average ticket value by 40%",
    timeframe: "45 días",
  },
  {
    before: "https://images.unsplash.com/photo-1598524374912-6f40a6c4b22e?w=600&h=800&fit=crop&q=80",
    after: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=800&fit=crop&q=80",
    name: "DermaCare Plus",
    result: "85% of new clients now come from Google searches",
    timeframe: "30 días",
  },
];

const TESTIMONIALS = [
  {
    quote: "Mi agenda se llenó en 8 semanas. Las clientas llegan sabiendo qué tratamiento quieren y se reservan directo.",
    author: "Patricia Solís",
    role: "Directora · Bella Piel",
    result: "+150% reservas",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&q=80",
  },
  {
    quote: "Mi centro se ve de lujo en las fotos. Las clientas llegan convencidas, no comparando precios.",
    author: "Valeria Moyano",
    role: "Esteticista · Núñez",
    result: "Ticket promedio +40%",
    avatar: "https://images.unsplash.com/photo-1541823709867-1b206113eafd?w=200&h=200&fit=crop&q=80",
  },
  {
    quote: "Cada tratamiento con su resultado visible. Las clientas eligen según lo que buscan y se animan más.",
    author: "Catalina Reyes",
    role: "Centro de Estética · Palermo",
    result: "+90% conversiones",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop&q=80",
  },
];

const PRICING_ESTETICA = [
  {
    name: "Básico",
    price: "$297 USD",
    description: "Para comenzar",
    features: [
      "Landing page elegante",
      "Tratamientos destacados",
      "Galería de resultados",
      "WhatsApp integrado",
      "Horarios de atención",
      "1 mes de hosting",
    ],
    cta: "Elegir Básico",
  },
  {
    name: "Profesional",
    price: "$497 USD",
    description: "El más elegido",
    features: [
      "Todo lo de Básico",
      "SEO para centros de estética",
      "Google Analytics",
      "Dominio propio",
      "Sistema de reservas",
      "6 meses de hosting",
    ],
    cta: "Elegir Profesional",
    popular: true,
  },
  {
    name: "Premium",
    price: "$797 USD",
    description: "Centro completo",
    features: [
      "Todo lo de Profesional",
      "Blog de tratamientos",
      "CRM de clientas",
      "Programa de fidelización",
      "Copywriting premium",
      "12 meses de hosting",
    ],
    cta: "Elegir Premium",
  },
];

const PROCESS = [
  { num: "01", title: "Conversamos", desc: "Primer contacto sin cargo. Entiendo tu centro y tu objetivo de clientas." },
  { num: "02", title: "Diseñamos", desc: "Creo tu web con tratamientos, precios y fotos profesionales." },
  { num: "03", title: "Publicamos", desc: "Tu web online en 7 días. Comenzás a recibir reservas automáticamente." },
];

export default function EsteticaCorporal() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50/30 via-white to-pink-50/20 text-slate-800 overflow-hidden">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="backdrop-blur-2xl bg-white/80 border-b border-slate-200/50">
          <div className="container">
            <div className="flex items-center justify-between h-20 py-5">
              <a href="/" className="flex items-center gap-3 group">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center shadow-lg shadow-rose-500/25 group-hover:scale-105 transition-transform">
                  <span className="text-white font-bold text-xl">W</span>
                </div>
                <span className="text-slate-800 font-bold text-xl tracking-tight">Impulsor</span>
              </a>
              <a href="#contacto" className="px-6 py-3 text-sm font-semibold rounded-full bg-gradient-to-r from-rose-400 to-pink-500 text-white hover:scale-105 hover:shadow-lg hover:shadow-rose-500/25 transition-all">
                Quiero más clientas
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* HERO - LUXURY/BEAUTY STYLE: Dark, elegant, rose theme */}
      <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
        {/* Luxury gradient background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-rose-950/50 to-slate-950" />
          <img 
            src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1200&h=800&fit=crop&q=85" 
            alt="Estética corporal" 
            className="w-full h-full object-cover opacity-30"
            onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=900&h=1000&fit=crop'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-rose-950/80 to-slate-950/90" />
        </div>

        {/* Luxury glow effects */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-rose-500/25 to-pink-500/10 rounded-full blur-[180px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-pink-400/20 to-rose-300/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '0.5s' }} />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-rose-500/15 border border-rose-500/25 text-rose-300 text-sm font-bold">
                <Gem className="w-4 h-4" />
                Solución para Centros de Estética
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02]">
                <span className="text-white">Tu centro,</span>
                <br />
                <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-rose-300 bg-clip-text text-transparent">
                  más radiante que nunca
                </span>
              </h1>

              <p className="text-xl text-white/70 max-w-xl leading-relaxed">
                Web premium que muestra tratamientos, genera confianza y reserva turnos. 
                <span className="text-rose-400 font-medium"> Clientas que llegan decididas.</span>
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contacto" className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold rounded-xl bg-gradient-to-r from-rose-400 to-pink-500 text-white shadow-2xl shadow-rose-500/25 hover:scale-[1.02] transition-all">
                  <Sparkles className="h-5 w-5" />
                  Quiero más clientas
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#ver-ejemplo" className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold rounded-xl bg-white/5 border border-white/15 text-white/80 hover:bg-white/10 transition-all">
                  <Play className="w-5 h-5" />
                  Ver ejemplo
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2 text-white/50 text-sm">
                  <CheckCircle className="h-4 w-4 text-rose-400" />
                  Sin costo inicial
                </div>
                <div className="flex items-center gap-2 text-white/50 text-sm">
                  <CheckCircle className="h-4 w-4 text-rose-400" />
                  Online en 7 días
                </div>
              </div>
            </div>

            {/* Right - Visual */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-rose-500/20 border border-rose-500/10">
                <img 
                  src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=900&h=1000&fit=crop&q=85" 
                  alt="Tratamientos de estética" 
                  className="w-full h-[450px] lg:h-[550px] object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=900&h=1000&fit=crop'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
              </div>

              {/* Floating stat cards */}
              <div className="absolute -top-6 -left-6 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl px-6 py-4 shadow-2xl text-white">
                <div className="text-3xl font-black">+150%</div>
                <div className="text-sm text-white/80">Reservas</div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-slate-900/90 backdrop-blur-xl rounded-2xl p-5 border border-rose-500/20 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center">
                    <Star className="w-6 h-6 text-rose-500" />
                  </div>
                  <div>
                    <p className="font-bold text-white">{STATS[0].value}</p>
                    <p className="text-sm text-white/60">{STATS[0].label}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-6 bg-rose-50/50 border-y border-rose-100">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-10 text-slate-600 text-sm font-medium">
            <span className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-rose-500" /> Sin costo inicial</span>
            <span className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-rose-500" /> Soporte incluido</span>
            <span className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-rose-500" /> Online en 7 días</span>
          </div>
        </div>
      </section>

      {/* TREATMENTS */}
      <section className="relative py-32 lg:py-40 bg-white">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Tratamientos que <span className="text-rose-500">venden solos</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Cada tratamiento mostrado con el resultado que tus clientas buscan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TREATMENTS.map((treatment, idx) => (
              <div key={idx} className="group relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-rose-50/50 to-pink-50/30 border border-rose-100 hover:border-rose-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-rose-500/10 transition-all duration-500">
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-600 text-xs font-bold">
                    {treatment.highlight}
                  </span>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500/20 to-pink-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-rose-500/20 transition-all">
                  <treatment.icon className="h-8 w-8 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{treatment.title}</h3>
                <p className="text-slate-600 leading-relaxed">{treatment.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-b from-rose-50/20 via-white to-rose-50/10">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 border border-rose-200 text-rose-600 text-sm font-semibold mb-6">
              <Award className="w-4 h-4" />
              Por qué elegirnos
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              Tu centro de belleza merece ser encontrado
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Construimos tu presencia online para que te encuentren clientas que buscan tus tratamientos
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            {WHY_CHOOSE_US_ESTETICA.map((item, idx) => (
              <div key={idx} className="group text-center p-6 rounded-2xl bg-white border border-slate-100 hover:border-rose-200 hover:shadow-lg hover:shadow-rose-500/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-rose-500/20 transition-all">
                  <item.icon className="h-6 w-6 text-rose-500" />
                </div>
                <h3 className="font-bold text-slate-800 text-sm mb-2">{item.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Mid-page CTA */}
          <div className="mt-16 text-center max-w-2xl mx-auto p-8 rounded-3xl bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-100">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 text-sm font-medium mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              Solo 3 lugares este mes
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              ¿Lista para llenar tu agenda?
            </h3>
            <p className="text-slate-600 mb-6">
              Primera consulta gratis. Clientas decididas te esperan.
            </p>
            <a href="#contacto" className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold rounded-xl bg-gradient-to-r from-rose-400 to-pink-500 text-white shadow-xl shadow-rose-500/20 hover:scale-105 transition-all">
              <MessageCircle className="h-5 w-5" />
              Quiero más clientas
            </a>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative py-32 lg:py-40 bg-gradient-to-b from-rose-50/30 to-white">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Cómo funciona
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {PROCESS.map((step, idx) => (
              <div key={idx} className="relative text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 text-white text-2xl font-black flex items-center justify-center mx-auto mb-8 shadow-lg shadow-rose-500/30">
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
              Así se ve tu <span className="text-rose-500">web</span>
            </h2>
          </div>

          <div className="flex gap-8 px-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            {GALLERY.map((item, idx) => (
              <div key={idx} className="flex-shrink-0 w-[340px] snap-center">
                <div className="rounded-3xl overflow-hidden shadow-xl border border-rose-100 group">
                  <div className="relative overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-rose-300" />
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
        title="Resultados que generan deseo"
        subtitle="Centros de estética que transformaron su presencia online"
        items={BEFORE_AFTER_ESTETICA}
        accentColor="rose"
      />

      {/* TESTIMONIALS */}
      <section className="relative py-32 lg:py-40 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Centros con <span className="text-rose-500">resultados</span>
            </h2>
            <p className="text-xl text-slate-600">
              Centros de estética que transformaron su negocio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((item, idx) => (
              <div key={idx} className="group relative p-8 rounded-3xl bg-gradient-to-br from-rose-50/50 to-pink-50/30 border border-rose-100 hover:border-rose-200 hover:shadow-xl hover:shadow-rose-500/10 transition-all">
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
                    className="w-12 h-12 rounded-full object-cover border-2 border-rose-200"
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
          title="Planes para tu centro"
          subtitle="Elegí el que mejor se adapte a tu estética"
          plans={PRICING_ESTETICA}
          accentColor="rose"
        />
      </section>

      <ClosingSection
        title="Tu centro merece ser encontrado"
        subtitle="Clientas que buscan tratamientos de estética van a encontrarte. Es hora de estar visible"
        ctaText="Empezar hoy"
        accentColor="rose"
      />

      {/* FOOTER */}
      <footer className="py-12 border-t border-slate-200 bg-slate-50">
        <div className="container text-center text-slate-500">
          <p className="text-base">© 2024 WebAppImpulsor</p>
        </div>
      </footer>
    </main>
  );
}
