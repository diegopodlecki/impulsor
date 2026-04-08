import React, { useRef } from 'react';
import { ArrowDown, MessageCircle, Clock, Flame, CheckCircle, XCircle } from 'lucide-react';
import { RUBROS } from '@/lib/rubros';
import { TESTIMONIOS } from '@/lib/testimonios';
import { cn } from '@/lib/utils';

export default function Index() {
  const catalogRef = useRef<HTMLDivElement>(null);

  const noEsComun = [
    {
      title: "No es una plantilla",
      description: "Diseños específicos para cada rubro, no templates de $5",
      incorrect: "Te venden el mismo diseño que 5000 sitios más"
    },
    {
      title: "No es solo estética",
      description: "Cada elemento está pensado para convertir, no solo para verse bien",
      incorrect: "Una web bonita que nadie contacta"
    },
    {
      title: "No te abandonamos",
      description: "Ajustes incluidos. Tu web evoluciona con tu negocio",
      incorrect: "Te entregan el archivo y chau"
    }
  ];

  const problemas = [
    {
      emoji: "😔",
      title: "Tu web recibe visitas pero nadie te escribe",
      description: "Tenés estadísticas de Google Analytics pero cero consultas reales"
    },
    {
      emoji: "🤷",
      title: "No sabés si tu web funciona o no",
      description: "Pusiste la web y esperás. Pero no pasa nada."
    },
    {
      emoji: "😓",
      title: "Invertiste en una web que no convierte",
      description: "Pagaste por algo bonito pero que no te trajo ni un solo cliente"
    },
    {
      emoji: "😤",
      title: "Dependés 100% de Instagram y el boca a boca",
      description: "Si no publicás, no existís. Eso te limita y te agota."
    },
    {
      emoji: "😰",
      title: "Tu competencia se ve mejor que vos online",
      description: "Sabés que tu propuesta es mejor, pero tu web no lo muestra"
    },
    {
      emoji: "🤯",
      title: "El tema técnico te supera",
      description: "Hosting, dominio, SEO... Terminás evitando el tema completo"
    }
  ];

  const resultados = {
    "personal-trainer": {
      resultado: "Más alumnos que te encuentren por Google",
      incluye: [
        "Tu perfil de entrenador con credenciales",
        "Planes y precios claros",
        "Galería de transformaciones",
        "Botón de WhatsApp directo"
      ],
      beneficio: "Dejá de depender solo del boca a boca"
    },
    "psicologo": {
      resultado: "Más pacientes que confíen en vos",
      incluye: [
        "Tu formación y especialidades",
        "Modalidades de atención",
        "Preguntas frecuentes",
        "Formulario de contacto simple"
      ],
      beneficio: "La gente te elige antes de la primera sesión"
    },
    "nutricionista": {
      resultado: "Más pacientes que consulten online",
      incluye: [
        "Planes y metodología",
        "Testimonios de pacientes",
        "Antes y después",
        "Agenda de turnos directa"
      ],
      beneficio: "Reducí el tiempo en responder consultas básicas"
    },
    "gimnasio": {
      resultado: "Más socios que se inscriban solos",
      incluye: [
        "Clases y horarios claros",
        "Planes y precios",
        "Galería de instalaciones",
        "Formulario de inscripción"
      ],
      beneficio: "Tu web trabaja 24/7 inscribiendo gente"
    },
    "casa-de-comidas": {
      resultado: "Más pedidos sin pagar comisiones",
      incluye: [
        "Menú digital actualizado",
        "Zona de entrega visible",
        "Pedidos por WhatsApp",
        "Fotos de platos profesionales"
      ],
      beneficio: "Cero comisión. El 100% es tuyo"
    },
    "estetica-corporal": {
      resultado: "Más clientas que reserven directo",
      incluye: [
        "Tratamientos con precios",
        "Galería de resultados",
        "Antes y después",
        "Reserva de turno online"
      ],
      beneficio: "Clientas que ya saben qué quieren"
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HEADER STICKY */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="backdrop-blur-xl bg-slate-950/80 border-b border-white/10">
          <div className="container">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <a href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">W</span>
                </div>
                <span className="text-white font-bold text-lg hidden sm:block">Impulsor</span>
              </a>

              {/* Nav - Desktop */}
              <nav className="hidden md:flex items-center gap-8">
                <a href="#solucion" className="text-sm text-white/70 hover:text-white transition-colors">
                  Soluciones
                </a>
                <a href="#metodo" className="text-sm text-white/70 hover:text-white transition-colors">
                  Cómo funciona
                </a>
                <a href="#casos" className="text-sm text-white/70 hover:text-white transition-colors">
                  Casos
                </a>
                <a href="#faq" className="text-sm text-white/70 hover:text-white transition-colors">
                  FAQ
                </a>
              </nav>

              {/* CTA */}
              <a
                href="https://wa.me/5491234567890"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="hidden sm:inline">Quiero más clientes</span>
                <span className="sm:hidden">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* 1. HERO */}
      <section className="relative min-h-[70vh] w-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900/80 to-background">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-tl from-blue-600/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/3 right-10 w-72 h-72 bg-gradient-to-bl from-indigo-600/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:80px_80px] opacity-50" />
        </div>
        
        <div className="container relative z-10 text-center px-4 py-16 sm:py-20">
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <div className="h-1 w-8 bg-gradient-to-r from-primary to-transparent rounded-full" />
              <span className="text-xs font-semibold text-primary uppercase tracking-widest">Soluciones web</span>
              <div className="h-1 w-8 bg-gradient-to-l from-primary to-transparent rounded-full" />
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] animate-fadeIn">
              <span className="bg-gradient-to-r from-primary via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Página web
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                que convierte clientes
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              Tu web trabaja 24/7 para conseguir consultas mientras vos hacés lo que sabés. Diseños que realmente venden.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <a
                href="https://wa.me/5491234567890"
                className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold rounded-full bg-gradient-to-r from-primary to-primary/80 text-white shadow-2xl shadow-primary/40 hover:scale-110 hover:shadow-3xl transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <MessageCircle className="h-5 w-5 relative" />
                <span className="relative">Quiero más clientes</span>
              </a>
              
              <a
                href="#solucion"
                className="group inline-flex items-center justify-center gap-2 px-10 py-5 text-lg font-bold rounded-full border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                <span>Ver cómo</span>
                <ArrowDown className="h-5 w-5" />
              </a>
            </div>
            
            <div className="flex items-center justify-center gap-8 pt-12 text-sm text-white/70 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span>+50 negocios facturando más</span>
              </div>
              <div className="w-px h-6 bg-white/20" />
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                <span>Primera consulta sin cargo</span>
              </div>
              <div className="w-px h-6 bg-white/20" />
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span>Respuesta en &lt;2h</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EL PROBLEMA */}
      <section className="relative section-padding bg-gradient-to-b from-slate-900/80 to-slate-950/60 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />
        
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Por qué tu página web no convierte visitas en clientes
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Conocemos estas situaciones. Pasamos por ahí.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {problemas.map((problema, idx) => (
              <div 
                key={idx} 
                className="group card-base p-6 hover:border-red-500/30 transition-all duration-300 hover:bg-red-500/5"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{problema.emoji}</div>
                <h3 className="font-semibold text-white mb-2 leading-snug">
                  {problema.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {problema.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/50 text-sm">
              Si reconocés aunque sea una de estas situaciones...
            </p>
            <p className="mt-2 text-lg font-semibold text-white">
              <span className="text-primary">Tenemos la solución.</span> Sigamos hablando.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SOLUCIÓN - LANDINGS POR RUBRO */}
      <section id="solucion" className="relative pt-20" ref={catalogRef}>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent" />
        
        <div className="section-container relative z-10">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-2xl font-bold">Elegí tu tipo de negocio</h2>
            <p className="mt-2 text-sm text-white/70">
              Cada landing está diseñada para convertir en tu rubro específico
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {RUBROS.map((rubro) => {
              const info = resultados[rubro.slug as keyof typeof resultados];
              if (!info) return null;
              
              return (
                <a
                  key={rubro.slug}
                  href={rubro.demoUrl}
                  className="group block"
                >
                  {/* Browser Mockup */}
                  <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-black/50 transition-all duration-500 group-hover:shadow-primary/20 group-hover:scale-[1.02] group-hover:-translate-y-2">
                    {/* Browser Header */}
                    <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-amber-500" />
                        <div className="w-3 h-3 rounded-full bg-emerald-500" />
                      </div>
                      <div className="flex-1 mx-4">
                        <div className="bg-slate-700/50 rounded-md px-3 py-1 text-xs text-slate-400 truncate">
                          webappimpulsor.com/{rubro.slug}
                        </div>
                      </div>
                    </div>
                    
                    {/* Preview Image */}
                    <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                      <img
                        src={rubro.previewImage}
                        alt={`Preview landing para ${rubro.nombre}`}
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                      
                      {/* Badge */}
                      {rubro.badge && (
                        <div className={cn(
                          "absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-md",
                          rubro.badge === "Más elegido" && "bg-amber-500/90 text-amber-100",
                          rubro.badge === "Nuevo" && "bg-emerald-500/90 text-emerald-100",
                          rubro.badge === "Ideal para empezar" && "bg-blue-500/90 text-blue-100"
                        )}>
                          {rubro.badge}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="mt-4 px-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">{rubro.emoji}</span>
                      <h3 className="text-base font-bold text-white">
                        Landing para {rubro.nombre}
                      </h3>
                    </div>
                    
                    <p className="text-sm text-white/60 leading-relaxed">
                      {info.resultado}
                    </p>
                    
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs text-emerald-400 font-medium bg-emerald-500/10 px-3 py-1.5 rounded-full">
                        {info.beneficio}
                      </span>
                      <span className="text-xs text-white/40 group-hover:text-primary transition-colors flex items-center gap-1">
                        Ver demo
                        <ArrowDown className="h-3 w-3 rotate-[-90deg]" />
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. MÉTODO */}
      <section id="metodo" className="relative section-padding bg-gradient-to-b from-slate-950 via-slate-900/40 to-background border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 -left-96 w-96 h-96 bg-gradient-to-br from-blue-600/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 -right-96 w-96 h-96 bg-gradient-to-tl from-purple-600/10 to-transparent rounded-full blur-3xl" />
        </div>
        
        <div className="section-container relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-2xl font-bold">Cómo creamos una web que convierte clientes</h2>
            <p className="mt-2 text-white/70">
              Esto es lo que nos diferencia de una web común
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {noEsComun.map((item, idx) => (
              <div key={idx} className="card-base p-6 hover:border-white/20 transition-colors">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-emerald-500/20">
                    <CheckCircle className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-white/70">{item.description}</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-400/60 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-white/50 italic">{item.incorrect}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto max-w-3xl text-center">
            <div className="card-base p-8 border-emerald-500/30 bg-emerald-500/5">
              <p className="text-5xl mb-4">📈</p>
              <h3 className="text-xl font-bold text-white mb-2">El resultado que conseguimos</h3>
              <p className="text-2xl font-bold text-emerald-400 mb-4">+40% más consultas en 30 días</p>
              <p className="text-white/70">Medido, no promesses. Así lo conseguimos para cada cliente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CASOS DE ÉXITO */}
      <section id="casos" className="relative section-padding bg-gradient-to-b from-slate-900/60 to-slate-950/40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-emerald-600/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-gradient-to-tr from-blue-600/5 to-transparent rounded-full blur-3xl" />
        </div>
        
        <div className="section-container relative z-10">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <h2 className="text-2xl font-bold">Casos de éxito: páginas web que convirtieron clientes</h2>
            <p className="mt-2 text-xs text-white/60 flex items-center justify-center gap-1.5 mt-4">
              <Flame className="h-3.5 w-3.5 text-amber-400" />
              <span>Resultados comprobables, no promesas</span>
            </p>
          </div>

          <div className="grid-responsive max-w-4xl mx-auto">
            {TESTIMONIOS.map((test) => (
              <div key={test.id} className="group card-base card-hover flex flex-col p-6">
                <div className="flex gap-4 mb-4">
                  <div className={cn("h-12 w-12 rounded-full flex items-center justify-center font-bold text-white ring-2 ring-white/20", test.colorAvatar)}>
                    {test.iniciales}
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-white">{test.nombre.split('·')[0].trim()}</p>
                    <p className="text-white/60">{test.rubro.split('·')[0].trim()}</p>
                  </div>
                </div>
                <p className="text-sm text-white/80 flex-1 leading-relaxed mb-4">{test.texto}</p>
                {test.resultado && (
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-sm font-semibold text-primary bg-primary/10 rounded-lg px-4 py-3 text-center">
                      {test.resultado}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA FINAL */}
      <section className="relative section-padding border-t border-white/5 bg-gradient-to-b from-slate-900/40 to-slate-950/60 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-40 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-gradient-to-tl from-purple-600/15 to-transparent rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30" />
        </div>
        
        <div className="container relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Empezá a recibir más consultas esta semana
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Primera consulta sin cargo. Sin compromiso.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5491234567890"
                className="group inline-flex justify-center gap-3 rounded-full bg-gradient-to-r from-primary to-primary/90 px-8 py-4 font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 relative overflow-hidden"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="relative z-10">Quiero más clientes</span>
              </a>
              <a
                href="#solucion"
                className="group inline-flex justify-center rounded-full border border-white/30 px-8 py-4 font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white/50 hover:scale-105 backdrop-blur-sm"
              >
                <span className="relative z-10">Ver ejemplos</span>
              </a>
            </div>
            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-white/70 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-400" />
                <span>Sin costo inicial</span>
              </div>
              <div className="w-px h-4 bg-white/20" />
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Respuesta en &lt;2h</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section id="faq" className="relative section-padding bg-gradient-to-b from-slate-950/60 to-background overflow-hidden">
        <div className="container relative z-10">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-2xl font-bold">Preguntas frecuentes sobre nuestra página web</h2>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              {
                q: "¿Cuánto cuesta una página web que convierte clientes?",
                a: "Depende del rubro y funcionalidades. La mayoría de nuestros clientes arrancan con planes desde $XXX. Primera consulta sin cargo para darte un presupuesto exacto."
              },
              {
                q: "¿En cuánto tiempo mi web profesional está funcionando?",
                a: "Entre 5 y 10 días hábiles, dependiendo de la complejidad. Muchas webs están funcionando en menos de una semana."
              },
              {
                q: "¿Qué pasa si mi web no me trae consultas?",
                a: "Trabajamos con vos para optimizarla. Si después de 30 días no ves resultados, ajustamos sin costo adicional."
              },
              {
                q: "¿Necesito conocimientos técnicos para mantener mi web?",
                a: "No. Nosotros manejamos todo: hosting, dominio, configuración. Vos solo tenés que revisar tu WhatsApp."
              }
            ].map((faq, idx) => (
              <div key={idx} className="card-base p-6">
                <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-sm text-white/70">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/60 mb-4">¿Tenés otra pregunta?</p>
            <a
              href="https://wa.me/5491234567890"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <MessageCircle className="h-4 w-4" />
              Escribinos por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
