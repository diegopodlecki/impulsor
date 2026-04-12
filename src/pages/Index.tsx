import React from 'react';
import { MessageCircle, CheckCircle, ArrowRight, Zap, TrendingUp, Users, Clock, Star } from 'lucide-react';
import { RUBROS } from '@/lib/rubros';
import { cn } from '@/lib/utils';
import { ScrollReveal, StaggeredReveal } from '@/components/ScrollReveal';

const RUBROS_ORDER = [
  'gimnasio',
  'personal-trainer', 
  'psicologo',
  'nutricionista',
  'estetica-corporal',
];

const TRUST_INDICATORS = [
  { icon: Users, text: '+50 negocios creados' },
  { icon: TrendingUp, text: 'Leads en 7 días' },
  { icon: Zap, text: 'Setup en 48hs' },
];

export default function Index() {
  const orderedRubros = RUBROS_ORDER.map(slug => RUBROS.find(r => r.slug === slug)).filter(Boolean);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="backdrop-blur-2xl bg-slate-950/80 border-b border-white/5">
          <div className="container">
            <div className="flex items-center justify-between h-18 py-4">
              <a href="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-purple-500 to-blue-600 flex items-center justify-center shadow-lg shadow-primary/30">
                  <span className="text-white font-bold text-lg">W</span>
                </div>
                <span className="text-white font-bold text-xl tracking-tight hidden sm:block">webappimpulsor</span>
              </a>

              <nav className="hidden md:flex items-center gap-10">
                <a href="#catalogo" className="text-sm font-medium text-white/60 hover:text-white transition-colors">
                  Soluciones
                </a>
                <a href="#proceso" className="text-sm font-medium text-white/60 hover:text-white transition-colors">
                  Cómo funciona
                </a>
                <a href="#cta" className="text-sm font-medium text-white/60 hover:text-white transition-colors">
                  Empezar
                </a>
              </nav>

              <a
                href="https://wa.me/541166448389"
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="hidden sm:inline">Hablar por WhatsApp</span>
                <span className="sm:hidden">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* HERO - Premium SaaS Layout */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900/95 to-slate-950">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-transparent rounded-full blur-[200px]" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-purple-600/15 via-blue-600/5 to-transparent rounded-full blur-[180px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-t from-blue-600/5 to-transparent rounded-full blur-[250px]" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />

        <div className="container relative z-10 px-4 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* LEFT - Text Content */}
            <div className="space-y-8">
              <ScrollReveal direction="left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-sm font-medium text-white/80">Nueva versión disponible</span>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={100}>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95]">
                  <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                    Tu negocio
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    merece ser visto
                  </span>
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={200}>
                <p className="text-xl lg:text-2xl text-white/60 leading-relaxed max-w-xl">
                  Landing pages profesionales para tu rubro. 
                  <span className="text-white/80 font-medium"> Atrae clientes, genera leads, escala tu negocio.</span>
                </p>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={300}>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href="#cta"
                    className="group inline-flex items-center justify-center gap-3 px-8 py-5 text-lg font-bold rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] transition-all duration-300"
                  >
                    Comenzar ahora
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#catalogo"
                    className="inline-flex items-center justify-center gap-3 px-8 py-5 text-lg font-semibold rounded-2xl bg-white/5 border border-white/10 text-white/90 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-300"
                  >
                    Ver ejemplos
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={400}>
                <div className="flex flex-wrap items-center gap-8 pt-4">
                  {TRUST_INDICATORS.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/10 flex items-center justify-center border border-blue-500/20">
                        <item.icon className="h-5 w-5 text-blue-400" />
                      </div>
                      <span className="text-sm font-medium text-white/70">{item.text}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* RIGHT - Visual Mockup */}
            <ScrollReveal direction="right" delay={200}>
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-50" />
                
                {/* Main Mockup Container */}
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-xl shadow-2xl">
                  {/* Browser Header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/80 border-b border-white/5">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="px-4 py-1.5 rounded-lg bg-slate-700/50 text-xs text-white/40 text-center">
                        webappimpulsor.com/gimnasios
                      </div>
                    </div>
                  </div>
                  
                  {/* Mockup Image */}
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img 
                      src="/mockup-gimnasio.png" 
                      alt="Dashboard Preview" 
                      className="w-full h-full object-cover"
                      onError={(e) => { 
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `
                            <div class="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                              <div class="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-4">
                                <span class="text-4xl">🏋️</span>
                              </div>
                              <p class="text-white/60 text-sm">Vista previa del dashboard</p>
                              <div class="flex gap-2 mt-4">
                                <div class="w-24 h-4 rounded bg-white/5"></div>
                                <div class="w-16 h-4 rounded bg-white/5"></div>
                              </div>
                            </div>
                          `;
                        }
                      }}
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none" />
                  </div>
                  
                  {/* Stats Bar */}
                  <div className="grid grid-cols-3 gap-4 p-4 bg-slate-800/50 border-t border-white/5">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-400">+127</div>
                      <div className="text-xs text-white/40">Leads nuevos</div>
                    </div>
                    <div className="text-center border-x border-white/5">
                      <div className="text-2xl font-bold text-blue-400">89%</div>
                      <div className="text-xs text-white/40">Tasa conversión</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">7 días</div>
                      <div className="text-xs text-white/40">Tiempo online</div>
                    </div>
                  </div>
                </div>

                {/* Floating Cards */}
                <div className="absolute -top-4 -right-4 p-4 rounded-xl bg-slate-800/90 backdrop-blur-xl border border-white/10 shadow-xl animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">+340%</div>
                      <div className="text-xs text-white/40">Leads este mes</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 p-3 rounded-xl bg-slate-800/90 backdrop-blur-xl border border-white/10 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    <span className="text-xs font-medium text-white">Pagado por cliente</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
      </section>

      {/* CATÁLOGO VISUAL - Grid de Previews */}
      <section id="catalogo" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900/50">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                Elegí tu solución
              </h2>
              <p className="text-white/50 text-lg">
                Cada landing diseñada para tu rubro específico
              </p>
            </div>
          </ScrollReveal>

          {/* Grid Principal - 2 columnas grandes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-8">
            {/* Gimnasio - Destacado */}
            {orderedRubros[0] && (
              <ScrollReveal direction="up">
                <a
                  href={orderedRubros[0].demoUrl}
                  className="group block relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 hover:border-orange-500/30 transition-all duration-500 hover:scale-[1.02]"
                >
                  <div className="aspect-[16/10] relative">
                    <img
                      src={orderedRubros[0].previewImage}
                      alt={orderedRubros[0].nombre}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg">
                        Más elegido
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <span className="text-4xl mb-3 block">{orderedRubros[0].emoji}</span>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        Landing para {orderedRubros[0].nombre}
                      </h3>
                      <p className="text-white/70 text-lg mb-4">
                        {orderedRubros[0].cardDescription}
                      </p>
                      <div className="flex items-center gap-2 text-orange-400 font-semibold">
                        Ver demo
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            )}

            {/* Personal Trainer */}
            {orderedRubros[1] && (
              <ScrollReveal direction="up" delay={100}>
                <a
                  href={orderedRubros[1].demoUrl}
                  className="group block relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 hover:border-blue-500/30 transition-all duration-500 hover:scale-[1.02]"
                >
                  <div className="aspect-[16/10] relative">
                    <img
                      src={orderedRubros[1].previewImage}
                      alt={orderedRubros[1].nombre}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <span className="text-4xl mb-3 block">{orderedRubros[1].emoji}</span>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Landing para {orderedRubros[1].nombre}
                      </h3>
                      <p className="text-white/60 mb-4 line-clamp-2">
                        {orderedRubros[1].cardDescription}
                      </p>
                      <div className="flex items-center gap-2 text-blue-400 font-semibold">
                        Ver demo
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            )}
          </div>

          {/* Grid Secundario - 3 columnas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {orderedRubros.slice(2).map((rubro, idx) => rubro && (
              <ScrollReveal key={rubro.slug} direction="up" delay={(idx + 2) * 100}>
                <a
                  href={rubro.demoUrl}
                  className="group block relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 hover:border-primary/30 transition-all duration-500 hover:scale-[1.02]"
                >
                  <div className="aspect-[16/12] relative">
                    <img
                      src={rubro.previewImage}
                      alt={rubro.nombre}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                    
                    {rubro.badge && (
                      <div className="absolute top-3 left-3">
                        <span className={cn(
                          "px-3 py-1.5 rounded-full text-xs font-bold",
                          rubro.badge === "Nuevo" && "bg-emerald-500 text-white",
                          rubro.badge === "Ideal para empezar" && "bg-blue-500 text-white"
                        )}>
                          {rubro.badge}
                        </span>
                      </div>
                    )}
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-3xl mb-2 block">{rubro.emoji}</span>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {rubro.nombre}
                      </h3>
                      <div className="flex items-center gap-2 text-primary font-medium text-sm">
                        Ver demo
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO - 3 pasos simples */}
      <section id="proceso" className="relative py-24 bg-gradient-to-b from-slate-900/50 to-slate-950">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                Tu web en 3 pasos
              </h2>
              <p className="text-white/50 text-lg">
                Sin complicaciones, sin esperar meses
              </p>
            </div>
          </ScrollReveal>

          <StaggeredReveal
            staggerDelay={150}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[
              { 
                num: '01', 
                title: 'Elegí tu solución', 
                desc: 'Navegá el catálogo y seleccioná el diseño ideal para tu negocio',
                benefit: 'Ahorrás tiempo decidiendo'
              },
              { 
                num: '02', 
                title: 'Charlamos gratis', 
                desc: 'Primera consulta sin cargo. Definimos tu landing perfecta.',
                benefit: 'Sin presión para comprar'
              },
              { 
                num: '03', 
                title: 'Online en 7 días', 
                desc: 'Tu web lista para recibir consultas y reservas',
                benefit: 'Resultados desde el día 1'
              },
            ].map((step, idx) => (
              <div key={idx} className="relative text-center p-8 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-900/40 border border-white/5 hover:border-primary/30 transition-all">
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500 mb-4">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/50 mb-4">{step.desc}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                  <span className="text-xs text-emerald-400 font-medium">{step.benefit}</span>
                </div>
              </div>
            ))}
          </StaggeredReveal>

          {/* CTA Mid-page */}
          <ScrollReveal direction="up" delay={300}>
            <div className="text-center mt-16 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                ¿Listo para empezar?
              </h3>
              <p className="text-white/50 mb-6">
                Primera consulta gratis. Sin compromiso. Respuesta en menos de 2 horas.
              </p>
              <a
                href="https://wa.me/541166448389?text=Hola!%20Quiero%20mi%20web"
                className="inline-flex items-center gap-3 px-8 py-4 text-lg font-bold rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white shadow-xl shadow-primary/25 hover:scale-105 transition-all"
              >
                <MessageCircle className="h-5 w-5" />
                Consultar ahora por WhatsApp
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SOCIAL PROOF - Testimonios */}
      <section className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900/50">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
                <CheckCircle className="h-4 w-4" />
                +50 negocios nos eligieron
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                Lo que dicen nuestros clientes
              </h2>
              <p className="text-white/50 text-lg max-w-xl mx-auto">
                Resultados reales de negocios como el tuyo
              </p>
            </div>
          </ScrollReveal>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "Mi gimnasio pasó de 45 a 120 socios en 6 meses. La web trajo exactamente el tipo de cliente que buscaba.",
                author: "Marcelo G.",
                role: "Dueño de Gym Zone",
                result: "+167% socios",
                emoji: "🏋️"
              },
              {
                quote: "Llené mi agenda de alumnos en 3 semanas. Pasé de 4 a 12 sin hacer publicidad.",
                author: "Carlos V.",
                role: "Personal Trainer",
                result: "+200% alumnos",
                emoji: "💪"
              },
              {
                quote: "Mi agenda se llenó en 6 semanas. Los pacientes llegan sabiendo cómo trabajo.",
                author: "Luciana P.",
                role: "Psicóloga",
                result: "+200% consultas",
                emoji: "🧠"
              },
            ].map((testimonial, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-white/10 hover:border-primary/30 transition-all">
                  <div className="absolute -top-4 left-8 text-5xl">{testimonial.emoji}</div>
                  <div className="flex items-center gap-1 mb-4 mt-4">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-white/80 text-lg mb-6 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-white">{testimonial.author}</p>
                      <p className="text-sm text-white/50">{testimonial.role}</p>
                    </div>
                    <div className="px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-bold">
                      {testimonial.result}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Trust Badges */}
          <ScrollReveal direction="up" delay={300}>
            <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-12 border-t border-white/5">
              <div className="flex items-center gap-3 text-white/50">
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <p className="font-bold text-white">Sin costo inicial</p>
                  <p className="text-xs text-white/50">Primera consulta gratis</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/50">
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <p className="font-bold text-white">Respuesta &lt; 2h</p>
                  <p className="text-xs text-white/50">En horario laboral</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/50">
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <p className="font-bold text-white">+50 negocios</p>
                  <p className="text-xs text-white/50">Ya confían en nosotros</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA FINAL - Alta conversión */}
      <section id="cta" className="relative py-32 bg-gradient-to-b from-slate-950 via-primary/5 to-slate-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary/20 to-transparent rounded-full blur-[150px]" />
        </div>
        
        <div className="container relative z-10 text-center">
          {/* Urgency Badge */}
          <ScrollReveal direction="up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              Solo 5 lugares disponibles este mes
            </div>
          </ScrollReveal>

          <ScrollReveal direction="scale">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              Tu web, lista en <span className="text-primary">7 días</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-4">
              <span className="text-white font-medium">Primera consulta gratis.</span> Sin compromiso. 
              Empezá hoy y tu web lista en 7 días.
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={100}>
            {/* Primary CTA - Full width on mobile */}
            <a
              href="https://wa.me/541166448389?text=Hola!%20Quiero%20mi%20web%20en%207%20días"
              className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto sm:w-[450px] mx-auto px-10 py-5 text-xl font-bold rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.02] transition-all duration-300"
            >
              <MessageCircle className="h-6 w-6" />
              <span>Comenzar ahora - Es gratis</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150}>
            <p className="text-center text-white/40 text-sm mt-6 mb-8">
              o escríbenos a <a href="mailto:info@webappimpulsor.com" className="underline hover:text-white/60">info@webappimpulsor.com</a>
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={200}>
            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <CheckCircle className="h-4 w-4 text-emerald-400" />
                <span>Sin costo inicial</span>
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <Clock className="h-4 w-4 text-blue-400" />
                <span>Respuesta &lt; 2h</span>
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <TrendingUp className="h-4 w-4 text-purple-400" />
                <span>+50 negocios</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/5 bg-slate-950">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-xs">W</span>
              </div>
              <span className="text-white font-bold">webappimpulsor</span>
            </div>
            <p className="text-sm text-white/40">
              © {new Date().getFullYear()} webappimpulsor. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
