import React, { useRef } from 'react';
import { ArrowDown, TrendingUp, Zap, Award, MessageCircle, Clock, Flame } from 'lucide-react';
import { RUBROS } from '@/lib/rubros';
import { TESTIMONIOS } from '@/lib/testimonios';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Index() {
  const catalogRef = useRef<HTMLDivElement>(null);

  const scrollToCatalog = () => {
    catalogRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: "Más consultas",
      description: "Aumentá leads en semanas, no meses"
    },
    {
      icon: Zap,
      title: "Conversión optimizada",
      description: "Diseño que convierte visitantes en clientes"
    },
    {
      icon: Award,
      title: "Imagen profesional",
      description: "Primera impresión que abre puertas"
    },
    {
      icon: MessageCircle,
      title: "Soporte local",
      description: "Equipo que entiende tu negocio"
    }
  ];

  const desireMessages: Record<string, string> = {
    "estetica-corporal": "Ideal para llenar la agenda",
    "psicologo": "Ideal para conseguir consultas",
    "nutricionista": "Ideal para retener clientes",
    "personal-trainer": "Listo para captar alumnos",
    "gimnasio": "Optimizado para membresías",
    "casa-de-comidas": "Listo para pedidos online"
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO - IMPACTANTE Y MODERNO */}
      <section className="relative min-h-[70vh] w-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900/80 to-background">
        {/* Blur blobs decorativos */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-tl from-blue-600/15 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-gradient-to-bl from-indigo-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        {/* Grid pattern sutil */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none opacity-50" />
        
        {/* Contenido */}
        <div className="container relative z-10 text-center px-4 py-16 sm:py-20">
          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Etiqueta intro */}
            <div className="flex items-center justify-center gap-2">
              <div className="h-1 w-8 bg-gradient-to-r from-primary to-transparent rounded-full" />
              <span className="text-xs font-semibold text-primary uppercase tracking-widest">Soluciones web</span>
              <div className="h-1 w-8 bg-gradient-to-l from-primary to-transparent rounded-full" />
            </div>
            
            {/* Título principal */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] animate-fadeIn">
              <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                Webs que convierten
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-purple-400 to-blue-400 bg-clip-text text-transparent">
                visitas en clientes
              </span>
            </h1>
            
            {/* Subtítulo */}
            <p className="text-xl sm:text-2xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              Diseños listos para vender en cada rubro
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <a
                href="/#demo-catalog"
                onClick={(e) => {
                  e.preventDefault();
                  catalogRef.current?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold rounded-full bg-gradient-to-r from-primary to-primary/80 text-white shadow-2xl shadow-primary/40 hover:scale-110 hover:shadow-3xl transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative">Explorar webs por rubro</span>
                <ArrowDown className="h-5 w-5 relative" />
              </a>
              
              <a
                href="https://wa.me/5491234567890"
                className="group inline-flex items-center justify-center gap-2 px-10 py-5 text-lg font-bold rounded-full border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Hablar por WhatsApp</span>
              </a>
            </div>
            
            {/* Highlight stats */}
            <div className="flex items-center justify-center gap-8 pt-12 text-sm text-white/70 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                <span>+50 webs live</span>
              </div>
              <div className="w-px h-6 bg-white/20" />
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                <span>Respuesta en &lt;2h</span>
              </div>
              <div className="w-px h-6 bg-white/20" />
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                <span>Garantía de resultados</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="relative section-padding-tight border-b border-white/5">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Contador */}
            <div className="flex-shrink-0 text-center md:text-left">
              <div className="text-5xl font-bold text-primary mb-2">+50</div>
              <p className="text-sm text-white/70">webs creadas y funcionando</p>
            </div>

            {/* Mini Testimonios */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  quote: "En 2 semanas ya tenía clientes desde la web",
                  author: "Martín G.",
                  role: "Trainer"
                },
                {
                  quote: "La diferencia fue la claridad. Leads mejor calificados",
                  author: "Luciana P.",
                  role: "Psicóloga"
                },
                {
                  quote: "Web profesional a fracción del costo tradicional",
                  author: "Micaela T.",
                  role: "Consultora"
                }
              ].map((testimonial, idx) => (
                <div key={idx} className="card-base p-4 hover:border-white/20">
                  <p className="text-sm text-white/90 font-medium italic mb-3">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/30 flex items-center justify-center text-xs font-bold text-primary">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div className="text-xs">
                      <p className="text-white font-semibold">{testimonial.author}</p>
                      <p className="text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. CARDS (PROTAGONISTAS) */}
      <section ref={catalogRef} className="relative section-padding overflow-hidden">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent pointer-events-none" />
        
        <div className="section-container relative z-10">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-2xl font-bold">Soluciones por rubro</h2>
            <p className="mt-2 text-sm text-white/70">
              Elige tu tipo de negocio y mira cómo se vería tu web
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-cards max-w-7xl mx-auto">
            {RUBROS.map((rubro) => (
              <a
                key={rubro.slug}
                href={rubro.demoUrl}
                className="card-base card-hover group flex flex-col"
              >
                <div className={`h-1 bg-gradient-to-r ${rubro.color}`} />

                <div className="flex items-start justify-between gap-3 p-5">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{rubro.emoji}</span>
                      <h3 className="text-lg font-semibold text-white">Web para {rubro.nombre}</h3>
                    </div>
                    <p className="mt-1 text-sm text-white/55">{rubro.precioSugerido}</p>
                  </div>
                  {rubro.badge && (
                    <div className={cn("rounded-full px-2.5 py-0.5 text-[11px] font-semibold border", 
                      rubro.badge === "Más elegido" && "border-amber-400/30 bg-amber-400/10 text-amber-300",
                      rubro.badge === "Nuevo" && "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
                      rubro.badge === "Ideal para empezar" && "border-blue-400/30 bg-blue-400/10 text-blue-300"
                    )}>
                      {rubro.badge}
                    </div>
                  )}
                </div>

                <div className="px-6">
                  <div className="image-container shadow-lg shadow-black/20">
                    <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900 group-hover:border-white/20 transition-all duration-300 overflow-hidden">
                      <img
                        src={rubro.previewImage || `/portfolio/${rubro.slug}-preview.svg`}
                        alt={`Preview de web para ${rubro.nombre}`}
                        className="w-full h-full object-cover image-hover"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      {/* Fallback gradient si no carga la imagen */}
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-700/40 to-slate-950/60 flex items-center justify-center pointer-events-none">
                        <span className="text-5xl opacity-30">{rubro.emoji}</span>
                      </div>
                      
                      {/* Overlay oscuro en hover con "Ver demo" */}
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                        <div className="flex flex-col items-center gap-2">
                          <span className="text-white font-semibold text-sm">Ver demo</span>
                          <ArrowDown className="h-4 w-4 text-primary animate-bounce" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 pt-4">
                  {desireMessages[rubro.slug] && (
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5">
                      <span className="text-xs font-semibold text-primary">{desireMessages[rubro.slug]}</span>
                    </div>
                  )}
                </div>

                <div className="flex-1" />

                <div className="px-6 pb-6 space-y-4">
                  <p className="text-sm text-white/70 leading-relaxed">{rubro.cardDescription || rubro.descripcion}</p>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = rubro.demoUrl;
                    }}
                    className="w-full rounded-full bg-primary/90 px-4 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Quiero esta web para mi negocio
                  </button>
                  {rubro.badge === "Más elegido" && (
                    <div className="flex items-center justify-center gap-1.5 text-xs text-amber-300/80 font-medium pt-2">
                      <Flame className="h-3.5 w-3.5" />
                      <span>Solo 3 cupos disponibles esta semana</span>
                    </div>
                  )}
                  {rubro.badge === "Nuevo" && (
                    <div className="flex items-center justify-center gap-1.5 text-xs text-emerald-300/80 font-medium pt-2">
                      <Clock className="h-3.5 w-3.5" />
                      <span>Entrega en 5 días laborales</span>
                    </div>
                  )}
                  {!rubro.badge && (
                    <div className="flex items-center justify-center gap-1.5 text-xs text-white/60 font-medium pt-2">
                      <TrendingUp className="h-3.5 w-3.5" />
                      <span>Alta demanda este mes</span>
                    </div>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BENEFICIOS */}
      <section className="relative section-padding bg-gradient-to-b from-slate-950 via-slate-900/40 to-background border-t border-white/5 overflow-hidden">
        {/* Decorative gradient orb */}
        <div className="absolute top-1/2 -left-96 w-96 h-96 bg-gradient-to-br from-blue-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -right-96 w-96 h-96 bg-gradient-to-tl from-purple-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <div className="section-container relative z-10">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <h2 className="text-2xl font-bold">¿Por qué elegirnos?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-cards max-w-3xl mx-auto">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="group card-base card-hover flex gap-4 p-6">
                  <div className="flex-shrink-0">
                    <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{benefit.title}</h3>
                    <p className="mt-1 text-sm text-white/70">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIOS (MINI) */}
      <section className="relative section-padding bg-gradient-to-b from-slate-900/60 to-slate-950/40 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-emerald-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-gradient-to-tr from-blue-600/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <div className="section-container relative z-10">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <h2 className="text-2xl font-bold">Lo que dicen nuestros clientes</h2>
            <p className="mt-2 text-xs text-white/60 flex items-center justify-center gap-1.5 mt-4">
              <Flame className="h-3.5 w-3.5 text-amber-400" />
              <span>Promedio: comienzan en 48-72 horas</span>
            </p>
          </div>

          <div className="grid-responsive max-w-4xl mx-auto">
            {TESTIMONIOS.slice(0, 3).map((test) => (
              <div key={test.id} className="group card-base card-hover flex flex-col p-5">
                <div className="flex gap-3 mb-4">
                  <div className={cn("h-10 w-10 rounded-full flex items-center justify-center font-semibold text-white ring-2 ring-white/20", test.colorAvatar)}>
                    {test.iniciales}
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-white">{test.nombre.split('·')[0].trim()}</p>
                    <p className="text-xs text-white/60">{test.rubro.split('·')[0].trim()}</p>
                  </div>
                </div>
                <p className="text-sm text-white/80 line-clamp-3 flex-1 leading-relaxed">{test.texto}</p>
                {test.resultado && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-xs font-semibold text-primary bg-primary/10 rounded-lg px-3 py-2">{test.resultado}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA FINAL */}
      <section className="relative section-padding border-t border-white/5 bg-gradient-to-b from-slate-900/40 to-slate-950/60 overflow-hidden">
        {/* Decorative gradient orbs */}
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-gradient-to-tl from-purple-600/15 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none opacity-30" />
        
        <div className="container relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">¿Listo para transformar tu presencia online?</h2>
            <p className="mt-4 text-lg text-white/70">
              Exploá todas las soluciones disponibles para tu rubro
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/webs"
                className="group inline-flex justify-center rounded-full bg-gradient-to-r from-primary to-primary/90 px-8 py-4 font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 relative overflow-hidden"
              >
                <span className="relative z-10">Ver todas las webs</span>
              </a>
              <a
                href="https://wa.me/5491234567890"
                className="group inline-flex justify-center rounded-full border border-white/30 px-8 py-4 font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white/50 hover:scale-105 backdrop-blur-sm"
              >
                <span className="relative z-10">Hablar por WhatsApp</span>
              </a>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-white/70 font-medium">
              <Clock className="h-4 w-4 text-primary" />
              <span>Respuesta en menos de 2 horas hábiles</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
