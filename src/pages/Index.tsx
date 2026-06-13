import React from 'react';
import { MessageCircle, CheckCircle, ArrowRight, Clock, Calendar, MessageSquare, Star, Shield, Users, TrendingUp } from 'lucide-react';
import { ScrollReveal, StaggeredReveal } from '@/components/ScrollReveal';
import PricingSection from '@/components/PricingSection';

const TRUST_INDICATORS = [
  { icon: Users, text: 'Profesionales que ya confían en nosotros' },
  { icon: Clock, text: 'Ahorro de horas cada semana' },
  { icon: Shield, text: 'Configuración sencilla y segura' },
];

export default function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="backdrop-blur-2xl bg-slate-950/80 border-b border-white/5">
          <div className="container">
            <div className="flex items-center justify-between h-18 py-4">
              <a href="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-green-500/30">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <span className="text-white font-bold text-xl tracking-tight hidden sm:block">WebAppImpulsor</span>
              </a>

              <nav className="hidden md:flex items-center gap-10">
                <a href="#problema" className="text-sm font-medium text-white/60 hover:text-white transition-colors">
                  El problema
                </a>
                <a href="#solucion" className="text-sm font-medium text-white/60 hover:text-white transition-colors">
                  La solución
                </a>
                <a href="#como-funciona" className="text-sm font-medium text-white/60 hover:text-white transition-colors">
                  Cómo funciona
                </a>
                <a href="#planes" className="text-sm font-medium text-white/60 hover:text-white transition-colors">
                  Planes
                </a>
              </nav>

              <a
                href="https://wa.me/541166448389"
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="hidden sm:inline">Hablar por WhatsApp</span>
                <span className="sm:hidden">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* HERO - Principal */}
      <section className="relative min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900/95 to-slate-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-green-600/20 via-emerald-600/10 to-transparent rounded-full blur-[200px]" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-emerald-600/15 via-teal-600/5 to-transparent rounded-full blur-[180px]" />
        </div>

        <div className="container relative z-10 px-4 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
               <ScrollReveal direction="left">
                 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 backdrop-blur-sm">
                   <span className="text-sm font-medium text-white/80">Para profesionales y negocios de servicios</span>
                 </div>
               </ScrollReveal>

               <ScrollReveal direction="left" delay={100}>
                 <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95]">
                   <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                     Automatización de WhatsApp
                   </span>
                   <br />
                   <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                     que trabaja por ti, 24/7
                   </span>
                 </h1>
               </ScrollReveal>

               <ScrollReveal direction="left" delay={200}>
                 <p className="text-xl lg:text-2xl text-white/60 leading-relaxed max-w-xl">
                   Responde consultas, agenda turnos y envía recordatorios automáticamente. 
                   <span className="text-white/80 font-medium"> Dedica tu tiempo a atender mejor y vender más.</span>
                 </p>
               </ScrollReveal>

               <ScrollReveal direction="left" delay={300}>
                 <div className="flex flex-col sm:flex-row gap-4 pt-4">
                   <a
                     href="https://wa.me/541166448389?text=Hola!%20Quiero%20automatizar%20mi%20WhatsApp%20y%20mis%20turnos"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="group inline-flex items-center justify-center gap-3 px-8 py-5 text-lg font-bold rounded-2xl bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white shadow-2xl shadow-green-500/25 hover:shadow-green-500/40 hover:scale-[1.02] transition-all duration-300"
                   >
                     Quiero automatizar WhatsApp
                     <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                   </a>
                   <a
                     href="#como-funciona"
                     className="inline-flex items-center justify-center gap-3 px-8 py-5 text-lg font-semibold rounded-2xl bg-white/5 border border-white/10 text-white/90 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-300"
                   >
                     Ver cómo funciona
                   </a>
                 </div>
               </ScrollReveal>

              <ScrollReveal direction="left" delay={400}>
                <div className="flex flex-wrap items-center gap-8 pt-4">
                  {TRUST_INDICATORS.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/10 flex items-center justify-center border border-green-500/20">
                        <item.icon className="h-5 w-5 text-green-400" />
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
                <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 rounded-3xl blur-2xl opacity-50" />
                
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-xl shadow-2xl">
                  <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/80 border-b border-white/5">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="px-4 py-1.5 rounded-lg bg-slate-700/50 text-xs text-white/40 text-center flex items-center justify-center gap-2">
                        <MessageSquare className="h-3 w-3" />
                        WhatsApp automatizado
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-700 flex-shrink-0" />
                      <div className="bg-slate-700/50 rounded-2xl rounded-tl-none p-3 text-sm text-white/80 max-w-[80%]">
                        Hola, quisiera saber disponibilidad para la próxima semana y reservar un turno.
                      </div>
                    </div>
                    <div className="flex gap-3 flex-row-reverse">
                      <div className="w-8 h-8 rounded-full bg-green-600 flex-shrink-0 flex items-center justify-center">
                        <MessageSquare className="h-4 w-4 text-white" />
                      </div>
                      <div className="bg-green-600/20 border border-green-500/30 rounded-2xl rounded-tr-none p-3 text-sm text-white max-w-[80%]">
                        ¡Hola! 👋 Claro que sí. Te paso los horarios disponibles para la próxima semana:
                        <br/><br/>
                        📅 Lunes 10:00hs o 16:00hs
                        <br/>
                        📅 Miércoles 14:00hs
                        <br/><br/>
                        ¿Te gustaría que te lo deje confirmado?
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-700 flex-shrink-0" />
                      <div className="bg-slate-700/50 rounded-2xl rounded-tl-none p-3 text-sm text-white/80 max-w-[80%]">
                        Sí, el miércoles a las 14:00hs está perfecto.
                      </div>
                    </div>
                    <div className="flex gap-3 flex-row-reverse">
                      <div className="w-8 h-8 rounded-full bg-green-600 flex-shrink-0 flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <div className="bg-green-600/20 border border-green-500/30 rounded-2xl rounded-tr-none p-3 text-sm text-white max-w-[80%]">
                        ¡Listo! ✅ Tu turno queda confirmado para el Miércoles a las 14:00hs.
                        <br/>
                        Te enviaremos un recordatorio automático antes de la cita.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 p-4 rounded-xl bg-slate-800/90 backdrop-blur-xl border border-white/10 shadow-xl animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Respuesta inmediata</div>
                      <div className="text-xs text-white/40">24 horas, 7 días</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
      </section>

      {/* PROBLEMA */}
      <section id="problema" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900/50">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-white">
                ¿Te suena familiar?
              </h2>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">
                Muchos profesionales independientes enfrentan estos desafíos a diario.
              </p>
            </div>
          </ScrollReveal>

          <StaggeredReveal
            staggerDelay={150}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {[
              { 
                icon: MessageSquare,
                title: 'Pierdes consultas por no responder a tiempo', 
                desc: 'Estás atendiendo, no podés contestar y la persona termina escribiéndole a otro negocio que responde más rápido.',
                color: 'text-red-400',
                bg: 'bg-red-500/10',
                border: 'border-red-500/20'
              },
              { 
                icon: Clock,
                title: 'Horas perdidas respondiendo lo mismo', 
                desc: 'Pasás gran parte del día contestando las mismas preguntas: horarios, precios, ubicación y disponibilidad.',
                color: 'text-amber-400',
                bg: 'bg-amber-500/10',
                border: 'border-amber-500/20'
              },
              { 
                icon: Calendar,
                title: 'Tus clientes faltan a las citas', 
                desc: 'Se les olvida la hora o el día. Sin recordatorios automáticos, perdés tiempo y facturación.',
                color: 'text-orange-400',
                bg: 'bg-orange-500/10',
                border: 'border-orange-500/20'
              },
              { 
                icon: Users,
                title: 'Tu teléfono te controla', 
                desc: 'Sentís que no podés desconectarte porque si no respondés rápido, se enfría la oportunidad.',
                color: 'text-purple-400',
                bg: 'bg-purple-500/10',
                border: 'border-purple-500/20'
              },
            ].map((item, idx) => (
              <div key={idx} className="relative p-8 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-900/40 border border-white/5 hover:border-white/20 transition-all">
                <div className={`w-12 h-12 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center mb-6`}>
                  <item.icon className={`h-6 w-6 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </StaggeredReveal>
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section id="solucion" className="relative py-24 bg-gradient-to-b from-slate-900/50 to-slate-950">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-green-900/20 to-slate-900/50 backdrop-blur-xl shadow-2xl p-8 lg:p-12">
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
                <h3 className="text-3xl font-bold text-white mb-6 relative z-10">Imaginá tener un sistema que:</h3>
                <ul className="space-y-6 relative z-10">
                  {[
                    'Responde automáticamente apenas escriben por WhatsApp.',
                    'Comparte servicios, precios y disponibilidad sin que tengas que repetirlo.',
                    'Agenda turnos en tus horarios disponibles sin intervención manual.',
                    'Envía recordatorios automáticos para reducir ausencias.'
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                      </div>
                      <span className="text-lg text-white/80">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 backdrop-blur-sm">
                  <span className="text-sm font-medium text-green-400">La solución</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                  Un asistente que nunca duerme y no deja consultas sin responder
                </h2>
                <p className="text-xl text-white/60 leading-relaxed">
                  Eso es lo que hacemos por tu negocio: automatizamos el primer contacto, ordenamos la agenda y reducimos el ida y vuelta manual.
                </p>
                <a
                  href="https://wa.me/541166448389?text=Hola!%20Quiero%20saber%20más%20sobre%20el%20asistente%20de%20WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 text-lg font-bold rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-xl shadow-green-500/25 hover:scale-105 transition-all mt-4"
                >
                  <MessageCircle className="h-5 w-5" />
                  Quiero automatizar mi agenda
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section id="como-funciona" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900/50">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-white">
                Empezar es muy fácil, en solo 3 pasos
              </h2>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">
                Sin complicaciones técnicas. Nosotros nos encargamos de todo.
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
                title: 'Nos contás cómo trabajás', 
                desc: 'Nos decís tus horarios, servicios, reglas de agenda y qué preguntas querés automatizar.',
                icon: MessageSquare
              },
              { 
                num: '02', 
                title: 'Conectamos tu WhatsApp', 
                desc: 'Lo dejamos listo sin que tengas que cambiar tu número actual ni aprender algo complejo.',
                icon: CheckCircle
              },
              { 
                num: '03', 
                title: 'Tu negocio responde solo', 
                desc: 'El sistema empieza a responder y organizar turnos automáticamente desde el primer día.',
                icon: Clock
              },
            ].map((step, idx) => (
              <div key={idx} className="relative text-center p-8 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-900/40 border border-white/5 hover:border-green-500/30 transition-all overflow-hidden">
                <div className="absolute top-4 left-4 text-7xl font-black text-white/5 select-none">{step.num}</div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/10 border border-green-500/20 flex items-center justify-center mb-6">
                    <step.icon className="h-8 w-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/60 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </StaggeredReveal>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="relative py-24 bg-gradient-to-b from-slate-900/50 to-slate-950">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-white">
                Todo lo que necesitás para reducir carga operativa
              </h2>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">
                Un sistema pensado para ahorrar tiempo, ordenar consultas y vender mejor.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: MessageSquare,
                title: 'Respuestas al instante',
                desc: 'Contesta preguntas frecuentes en segundos para que nadie espere una devolución manual.'
              },
              {
                icon: Calendar,
                title: 'Agenda de turnos sin esfuerzo',
                desc: 'Las personas eligen un horario y el sistema lo ordena evitando superposiciones.'
              },
              {
                icon: Clock,
                title: 'Recordatorios automáticos',
                desc: 'Avisos previos a la cita para que bajen las ausencias y suba la asistencia.'
              },
              {
                icon: Shield,
                title: 'Panel de control muy simple',
                desc: 'Una pantalla clara para ver consultas, turnos y estado del día sin complejidad.'
              },
              {
                icon: Users,
                title: 'Soporte humano real',
                desc: 'Si necesitás ayuda, siempre hay una persona real lista para acompañarte.'
              },
              {
                icon: CheckCircle,
                title: 'Sin cambiar tu número',
                desc: 'Funciona con tu WhatsApp actual, personal o Business.'
              }
            ].map((item, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-white/10 hover:border-green-500/30 transition-all h-full">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="h-6 w-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CASO DE ÉXITO */}
      <section className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900/50">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
                <Star className="h-4 w-4 fill-green-400" />
                Caso de éxito
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-white">
                Historias reales de profesionales como tú
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="scale">
            <div className="max-w-4xl mx-auto relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-white/10">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-xl shadow-green-500/20">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              
              <blockquote className="text-2xl md:text-3xl font-medium text-white text-center leading-relaxed mb-8 pt-8">
                "Antes perdía consultas porque estaba atendiendo y no podía contestar. Ahora, WhatsApp responde solo, agenda los turnos y me deja más tiempo para atender bien. Bajaron los no-shows y la agenda está mucho más ordenada."
              </blockquote>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl mb-3">
                  M
                </div>
                <p className="font-bold text-white text-lg">María</p>
                <p className="text-white/60">Esteticista independiente</p>
                <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/20 text-green-400 text-sm font-bold">
                  <TrendingUp className="h-4 w-4" />
                  +40% más de citas al mes
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <PricingSection />

      {/* FAQ */}
      <section className="relative py-24 bg-gradient-to-b from-slate-900/50 to-slate-950">
        <div className="container max-w-4xl">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-white">
                Preguntas frecuentes
              </h2>
              <p className="text-white/50 text-lg">
                Resolvemos tus dudas para que tomes la mejor decisión.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {[
              {
                q: '¿Necesito saber de tecnología?',
                a: 'No. Nosotros nos encargamos de la configuración inicial. Vos solo nos contás cómo trabajás y lo dejamos funcionando.'
              },
              {
                q: '¿Tengo que cambiar mi número de WhatsApp?',
                a: 'No, funciona con tu número actual de WhatsApp, personal o Business.'
              },
              {
                q: '¿Qué pasa si el asistente no sabe responder una pregunta?',
                a: 'Te avisa inmediatamente para que puedas responder y ajustar la automatización la próxima vez.'
              },
              {
                q: '¿Puedo cancelar cuando quiera?',
                a: 'Sí, trabajamos mes a mes. Sin contratos largos ni letras chicas.'
              }
            ].map((faq, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                <div className="p-6 rounded-2xl bg-slate-900/80 border border-white/5 hover:border-green-500/20 transition-all">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                    <MessageCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    {faq.q}
                  </h3>
                  <p className="text-white/60 leading-relaxed pl-8">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative py-32 bg-gradient-to-b from-slate-950 via-green-500/5 to-slate-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-green-500/20 to-transparent rounded-full blur-[150px]" />
        </div>
        
        <div className="container relative z-10 text-center">
          <ScrollReveal direction="up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Prueba gratuita sin compromiso
            </div>
          </ScrollReveal>

          <ScrollReveal direction="scale">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-white">
              Recupera tu tiempo y haz crecer tu negocio
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-4">
              Dejá de perder consultas por no contestar a tiempo. Automatizá WhatsApp y turnos para notar la diferencia desde el primer día.
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={100}>
            <a
              href="https://wa.me/541166448389?text=Hola!%20Quiero%20agendar%20una%20demostraci%C3%B3n%20gratis%20de%20automatizaci%C3%B3n%20de%20WhatsApp%20y%20turnos"
              className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto sm:w-[450px] mx-auto px-10 py-5 text-xl font-bold rounded-2xl bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 hover:scale-[1.02] transition-all duration-300"
            >
              <MessageCircle className="h-6 w-6" />
              <span>Agendar una demostración gratis</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Sin costo inicial</span>
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <Clock className="h-4 w-4 text-green-400" />
                <span>Configuración en 24hs</span>
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <Shield className="h-4 w-4 text-green-400" />
                <span>Soporte humano incluido</span>
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
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <MessageSquare className="h-4 w-4 text-white" />
              </div>
              <span className="text-white font-bold">WebAppImpulsor</span>
            </div>
            <p className="text-sm text-white/40">
              © {new Date().getFullYear()} WebAppImpulsor. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
