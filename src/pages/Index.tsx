import React from 'react';
import { ArrowDown, MessageCircle, Clock, CheckCircle, ArrowRight } from 'lucide-react';
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

const TRUST_POINTS = [
  { icon: '✓', text: '+50 negocios facturando más' },
  { icon: '✓', text: 'Primera consulta sin cargo' },
  { icon: '✓', text: 'Online en 7 días' },
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
                <span className="text-white font-bold text-xl tracking-tight hidden sm:block">Impulsor</span>
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
                href="https://wa.me/5491234567890"
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

      {/* HERO - Minimal */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900/80 to-background">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-purple-600/15 to-transparent rounded-full blur-[120px]" />
        </div>
        
        <div className="container relative z-10 text-center px-4 py-24">
          <ScrollReveal direction="up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] mb-6">
              <span className="bg-gradient-to-r from-primary via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Tu web
              </span>
              <br />
              <span className="text-white">que convierte</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={100}>
            <p className="text-xl text-white/60 max-w-xl mx-auto mb-10">
              Diseños profesionales para cada rubro. Resultados medibles desde el día uno.
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#catalogo"
                className="group inline-flex items-center gap-3 px-8 py-4 text-lg font-bold rounded-2xl bg-gradient-to-r from-primary to-purple-600 text-white shadow-xl shadow-primary/30 hover:scale-105 transition-all duration-300"
              >
                Ver soluciones
                <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </a>
              <a
                href="#cta"
                className="inline-flex items-center gap-2 px-6 py-4 text-lg font-semibold rounded-2xl border border-white/20 text-white/80 hover:bg-white/5 transition-all duration-300"
              >
                Empezar hoy
              </a>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={300}>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
              {TRUST_POINTS.map((point, idx) => (
                <div key={idx} className="flex items-center gap-2 text-white/50 text-sm">
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                  <span>{point.text}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-white/30" />
        </div>
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
                Así funciona
              </h2>
              <p className="text-white/50 text-lg">
                3 pasos para tener tu web funcionando
              </p>
            </div>
          </ScrollReveal>

          <StaggeredReveal
            staggerDelay={150}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[
              { num: '01', title: 'Elegí tu solución', desc: 'Navegá el catálogo y seleccioná el diseño para tu rubro' },
              { num: '02', title: 'Charlamos', desc: 'Primera consulta sin cargo. Definimos tu landing perfecta.' },
              { num: '03', title: 'Online en 7 días', desc: 'Tu web lista para recibir consultas' },
            ].map((step, idx) => (
              <div key={idx} className="text-center p-8 rounded-2xl bg-slate-900/60 border border-white/5">
                <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500 mb-6">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/50">{step.desc}</p>
              </div>
            ))}
          </StaggeredReveal>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="cta" className="relative py-32 bg-gradient-to-b from-slate-950 via-primary/5 to-slate-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary/20 to-transparent rounded-full blur-[150px]" />
        </div>
        
        <div className="container relative z-10 text-center">
          <ScrollReveal direction="scale">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              Tu web, lista en <span className="text-primary">7 días</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10">
              Primera consulta sin cargo. Sin compromiso.
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={150}>
            <a
              href="https://wa.me/5491234567890"
              className="group inline-flex items-center gap-3 px-10 py-5 text-xl font-bold rounded-2xl bg-gradient-to-r from-primary to-purple-600 text-white shadow-2xl shadow-primary/40 hover:scale-105 hover:-translate-y-1 transition-all duration-300"
            >
              <MessageCircle className="h-6 w-6" />
              <span>Quiero mi web</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={250}>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <Clock className="h-4 w-4 text-primary" />
                <span>Respuesta en menos de 2h</span>
              </div>
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <CheckCircle className="h-4 w-4 text-emerald-400" />
                <span>Sin costo inicial</span>
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
              <span className="text-white font-bold">Impulsor</span>
            </div>
            <p className="text-sm text-white/40">
              © 2024 WebAppImpulsor. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
