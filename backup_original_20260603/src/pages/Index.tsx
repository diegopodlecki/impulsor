import React from 'react';
import { MessageCircle, CheckCircle, ArrowRight, Zap, TrendingUp, Users, Clock, Star } from 'lucide-react';
import { RUBROS } from '@/lib/rubros';
import { cn } from '@/lib/utils';
import { ScrollReveal, StaggeredReveal } from '@/components/ScrollReveal';
import PricingSection from '@/components/PricingSection';
import AboutSection from '@/components/AboutSection';

const RUBROS_ORDER = [
  'gimnasio',
  'personal-trainer', 
  'psicologo',
  'nutricionista',
  'estetica-corporal',
];

const TRUST_INDICATORS = [
  { icon: Users, text: '+50 negocios automatizados' },
  { icon: TrendingUp, text: 'Ahorro de 10+ horas semanales' },
  { icon: Zap, text: 'Implementación en 7 días' },
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
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <span className="text-white font-bold text-xl tracking-tight hidden sm:block">automático</span>
              </a>

              <nav className="hidden md:flex items-center gap-10">
                <a href="#servicios" className="text-sm font-medium text-white/60 hover:text-white transition-colors">
                  Servicios
                </a>
                <a href="#como-funciona" className="text-sm font-medium text-white/60 hover:text-white transition-colors">
                  Cómo funciona
                </a>
                <a href="#demo" className="text-sm font-medium text-white/60 hover:text-white transition-colors">
                  Ver demo
                </a>
                <a href="#contacto" className="text-sm font-medium text-white/60 hover:text-white transition-colors">
                  Contacto
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
      <section className="relative min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900/95 to-slate-950">
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

        <div className="container relative z-10 px-4 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* LEFT - Text Content */}
            <div className="space-y-8">
               <ScrollReveal direction="left">
                 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm">
                   <span className="text-sm font-medium text-white/80">Automatización e IA para negocios en Argentina</span>
                 </div>
               </ScrollReveal>

               <ScrollReveal direction="left" delay={100}>
                 <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95]">
                   <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                     Ahorrá tiempo,
                   </span>
                   <br />
                   <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                     automatizá tu negocio
                   </span>
                 </h1>
               </ScrollReveal>

               <ScrollReveal direction="left" delay={200}>
                 <p className="text-xl lg:text-2xl text-white/60 leading-relaxed max-w-xl">
                   Implementamos herramientas web e inteligencia artificial para negocios y profesionales.
                   <span className="text-white/80 font-medium"> WhatsApp automático, sistemas simples y dashboards en 7 días.</span>
                 </p>
               </ScrollReveal>

               <ScrollReveal direction="left" delay={300}>
                 <div className="flex flex-col sm:flex-row gap-4 pt-4">
                   <a
                     href="https://wa.me/541166448389?text=Hola!%20Quiero%20automatizar%20mi%20negocio"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="group inline-flex items-center justify-center gap-3 px-8 py-5 text-lg font-bold rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] transition-all duration-300"
                   >
                     Quiero automatizar mi negocio
                     <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                   </a>
                   <a
                     href="#servicios"
                     className="inline-flex items-center justify-center gap-3 px-8 py-5 text-lg font-semibold rounded-2xl bg-white/5 border border-white/10 text-white/90 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-300"
                   >
                     Ver soluciones
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
                      <div className="text-2xl font-bold text-blue-400">78%</div>
                      <div className="text-xs text-white/40">Tasa de contacto</div>
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
                      <div className="text-sm font-semibold text-white">+127%</div>
                      <div className="text-xs text-white/40">Consultas vs mes anterior</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 p-3 rounded-xl bg-slate-800/90 backdrop-blur-xl border border-white/10 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    <span className="text-xs font-medium text-white">Retorno real del cliente</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
      </section>

      {/* SERVICIOS - Soluciones concretas */}
      <section id="servicios" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900/50">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                Soluciones concretas
              </h2>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">
                No vendemos "páginas web". Implementamos herramientas que ahorran tiempo y mejoran tus procesos.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                emoji: "💬",
                title: "Automatización WhatsApp",
                desc: "Respuestas automáticas a consultas frecuentes. Seguimiento de clientes sin intervención manual. Integración con tu número.",
                benefit: "Ahorrá 10+ horas semanales",
                border: "hover:border-emerald-500/30"
              },
              {
                emoji: "⚙️",
                title: "Sistemas simples de gestión",
                desc: "Herramientas internas para organizar turnos, clientes, stock o pedidos. Sin complejidad, sin software caro.",
                benefit: "Todo en un solo lugar",
                border: "hover:border-blue-500/30"
              },
              {
                emoji: "🤖",
                title: "IA aplicada a tu negocio",
                desc: "Desde clasificación automática de mensajes hasta generación de contenido y atención básica con inteligencia artificial.",
                benefit: "Escala sin contratar más gente",
                border: "hover:border-purple-500/30"
              },
              {
                emoji: "📊",
                title: "Dashboards y herramientas internas",
                desc: "Paneles visuales para ver métricas de tu negocio en tiempo real. Conectamos tus datos existentes.",
                benefit: "Decisiones con datos",
                border: "hover:border-amber-500/30"
              },
            ].map((servicio, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                <div className={`group relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 ${servicio.border} transition-all duration-500 hover:scale-[1.02] p-8`}>
                  <div className="relative z-10">
                    <span className="text-4xl mb-4 block">{servicio.emoji}</span>
                    <h3 className="text-2xl font-bold text-white mb-3">{servicio.title}</h3>
                    <p className="text-white/60 mb-4 leading-relaxed">{servicio.desc}</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                      <CheckCircle className="h-4 w-4 text-emerald-400" />
                      <span className="text-sm text-emerald-400 font-medium">{servicio.benefit}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={400}>
            <div className="text-center mt-12">
              <a
                href="https://wa.me/541166448389?text=Hola!%20Quiero%20saber%20qué%20puedo%20automatizar%20en%20mi%20negocio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 text-lg font-bold rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white shadow-xl shadow-primary/25 hover:scale-105 transition-all"
              >
                <MessageCircle className="h-5 w-5" />
                Consultá gratis qué podés automatizar
              </a>
            </div>
          </ScrollReveal>
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
              <div key={idx} className="relative text-center p-8 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-900/40 border border-white/5 hover:border-primary/30 transition-all overflow-hidden">
                <div className="absolute top-4 left-4 text-7xl font-black text-white/10 select-none">{step.num}</div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/50 mb-4">{step.desc}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    <span className="text-xs text-emerald-400 font-medium">{step.benefit}</span>
                  </div>
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
                Quiero mi web gratis
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <PricingSection />

      <AboutSection />

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "Mi gimnasio pasó de 45 a 120 socios en 6 meses. La web trajo exactamente el tipo de cliente que buscaba.",
                author: "Marcelo G.",
                role: "Dueño de Gym Zone",
                city: "Buenos Aires",
                result: "+167% socios",
                initials: "MG",
                bgColor: "#1e3a5f"
              },
              {
                quote: "Llené mi agenda de alumnos en 3 semanas. Pasé de 4 a 12 sin hacer publicidad.",
                author: "Carlos V.",
                role: "Personal Trainer",
                city: "Córdoba",
                result: "+200% alumnos",
                initials: "CV",
                bgColor: "#1a4731"
              },
              {
                quote: "Mi agenda se llenó en 6 semanas. Los pacientes llegan sabiendo cómo trabajo.",
                author: "Luciana P.",
                role: "Psicóloga",
                city: "Rosario",
                result: "+200% consultas",
                initials: "LP",
                bgColor: "#3d1a6b"
              },
              {
                quote: "Tenía miedo de invertir en una web sin saber si iba a funcionar. En el primer mes recuperé la inversión con creces.",
                author: "Sofía R.",
                role: "Nutricionista",
                city: "Mendoza",
                result: "+85% consultas",
                initials: "SR",
                bgColor: "#8b3a2a"
              },
            ].map((testimonial, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-white/10 hover:border-primary/30 transition-all">
                  <div className="flex items-center gap-1 mb-4">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-white/80 text-lg mb-6 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                        style={{ backgroundColor: testimonial.bgColor }}
                      >
                        {testimonial.initials}
                      </div>
                      <div>
                        <p className="font-bold text-white">{testimonial.author}</p>
                        <p className="text-sm text-white/50">{testimonial.role}</p>
                        <p className="text-xs text-white/40">{testimonial.city}</p>
                      </div>
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
              <span>Quiero mi web gratis</span>
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
