import { ArrowRight, CheckCircle, MessageCircle } from "lucide-react";
import type { RouteRecord } from "vite-react-ssg";

interface DemoPageProps {
  rubro: string;
  emoji: string;
  heroTitle: string;
  heroSubtitle: string;
  ctaText: string;
  imageUrl: string;
  accentColor: string;
  features: string[];
  whatsappNumber: string;
}

function DemoPage({
  rubro,
  emoji,
  heroTitle,
  heroSubtitle,
  ctaText,
  imageUrl,
  accentColor,
  features,
  whatsappNumber,
}: DemoPageProps) {
  const ctaLink = `https://wa.me/${whatsappNumber}?text=Hola!%20Quiero%20una%20web%20para%20mi%20${rubro.toLowerCase()}`;

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navbar mínima */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="backdrop-blur-xl bg-slate-950/90 border-b border-white/5">
          <div className="container">
            <div className="flex items-center justify-between h-16 py-4">
              <a href="/" className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: accentColor }}
                >
                  <span className="text-white font-bold text-lg">W</span>
                </div>
                <span className="text-white font-bold text-lg">webappimpulsor</span>
              </a>
              <a
                href={ctaLink}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-full text-white transition-all hover:scale-105"
                style={{ backgroundColor: accentColor }}
              >
                {ctaText}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={imageUrl} 
            alt={rubro} 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6">{emoji}</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
              {heroTitle}
            </h1>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              {heroSubtitle}
            </p>
            <a
              href={ctaLink}
              className="inline-flex items-center gap-3 px-10 py-5 text-xl font-bold rounded-2xl text-white shadow-2xl transition-all hover:scale-[1.02]"
              style={{ backgroundColor: accentColor, boxShadow: `0 20px 40px ${accentColor}40` }}
            >
              {ctaText}
              <ArrowRight className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-slate-900/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Esto incluye tu web
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/50 border border-white/5"
              >
                <CheckCircle className="h-5 w-5 flex-shrink-0" style={{ color: accentColor }} />
                <span className="text-white/80">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works - 3 steps */}
      <section className="py-20 bg-slate-950">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Así de simple
            </h2>
            <p className="text-white/50 text-lg">
              Tu web lista sin vueltas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                num: '01',
                title: 'Nos contactás',
                desc: 'Escribinos por WhatsApp y contanos sobre tu negocio. Sin formularios, sin burocracia.'
              },
              {
                num: '02',
                title: 'Diseñamos tu web',
                desc: 'Creamos tu landing específica para tu rubro en menos de 7 días, con tu info y tu identidad.'
              },
              {
                num: '03',
                title: 'Empezás a recibir clientes',
                desc: 'Tu web online, optimizada y lista para convertir visitantes en consultas reales.'
              },
            ].map((step, idx) => (
              <div key={idx} className="relative text-center p-8 rounded-2xl bg-slate-900/50 border border-white/5 overflow-hidden">
                <div className="absolute top-4 left-4 text-6xl font-black text-white/10 select-none">{step.num}</div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/50 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20">
        <div className="container text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">
            ¿Querés una web así para tu negocio?
          </h3>
          <p className="text-white/60 mb-8">
            Hablemos y te mostraremos cómo queda tu landing personalizada
          </p>
          <a
            href={ctaLink}
            className="inline-flex items-center gap-3 px-10 py-5 text-xl font-bold rounded-2xl text-white transition-all hover:scale-[1.02]"
            style={{ backgroundColor: accentColor }}
          >
            <MessageCircle className="h-6 w-6" />
            Hablar por WhatsApp
          </a>
        </div>
      </section>

      {/* Footer mínimo */}
      <footer className="py-8 border-t border-white/5 bg-slate-900/30">
        <div className="container text-center">
          <p className="text-white/40 text-sm">
            Demo creada por <span className="text-white font-medium">WebAppImpulsor</span> · <a href="https://webappimpulsor.com" className="underline hover:text-white">webappimpulsor.com</a>
          </p>
        </div>
      </footer>
    </main>
  );
}

const WHATSAPP = "541166448389";

export function DemoGimnasios() {
  return (
    <DemoPage
      rubro="Gimnasio"
      emoji="🏋️"
      heroTitle="El gimnasio que la gente busca en Google, ese es el tuyo"
      heroSubtitle="Mostrá tus planes, instalaciones y horarios. Recibí consultas directo por WhatsApp."
      ctaText="Quiero más socios"
      imageUrl="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&h=600&fit=crop&q=80"
      accentColor="#f97316"
      features={[
        "Sección de planes y precios",
        "Galería de instalaciones",
        "Horarios de clases",
        "Botón WhatsApp directo",
        "Optimizada para Google"
      ]}
      whatsappNumber={WHATSAPP}
    />
  );
}

export function DemoEntrenadores() {
  return (
    <DemoPage
      rubro="Personal Trainer"
      emoji="💪"
      heroTitle="Tu agenda llena de clientes que ya saben que sos el indicado"
      heroSubtitle="Mostrá tus transformaciones, metodología y disponibilidad. Cerrá clientes sin llamadas en frío."
      ctaText="Quiero más clientes"
      imageUrl="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=600&fit=crop&q=80"
      accentColor="#10b981"
      features={[
        "Galería de transformaciones",
        "Tu metodología explicada",
        "Calendario de disponibilidad",
        "Botón WhatsApp directo",
        "Testimonios de alumnos"
      ]}
      whatsappNumber={WHATSAPP}
    />
  );
}

export function DemoPsicologos() {
  return (
    <DemoPage
      rubro="Psicólogo/a"
      emoji="🧠"
      heroTitle="Pacientes que llegan sabiendo cómo trabajás y listos para empezar"
      heroSubtitle="Transmití confianza antes del primer contacto. Tu enfoque, tus credenciales, tu forma de trabajar."
      ctaText="Quiero más pacientes"
      imageUrl="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1200&h=600&fit=crop&q=80"
      accentColor="#8b5cf6"
      features={[
        "Tu enfoque terapéutico explicado",
        "Credenciales y formación",
        "Modalidad presencial y online",
        "Botón de contacto discreto",
        "Diseño que transmite calma y confianza"
      ]}
      whatsappNumber={WHATSAPP}
    />
  );
}

export function DemoNutricionistas() {
  return (
    <DemoPage
      rubro="Nutricionista"
      emoji="🥗"
      heroTitle="Pacientes que llegan con ganas de cambiar, no solo a preguntar"
      heroSubtitle="Mostrá tu método, tus resultados y por qué trabajar contigo es diferente."
      ctaText="Quiero más pacientes"
      imageUrl="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&h=600&fit=crop&q=80"
      accentColor="#84cc16"
      features={[
        "Tu metodología nutricional",
        "Casos de éxito con fotos",
        "Planes disponibles",
        "Botón WhatsApp directo",
        "Blog o tips opcionales"
      ]}
      whatsappNumber={WHATSAPP}
    />
  );
}

export function DemoEstetica() {
  return (
    <DemoPage
      rubro="Estética Corporal"
      emoji="✨"
      heroTitle="Tu centro estético en la pantalla de quien busca exactamente lo que ofrecés"
      heroSubtitle="Mostrá tus tratamientos, antes y después, y generá turnos directo desde la web."
      ctaText="Quiero más turnos"
      imageUrl="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1200&h=600&fit=crop&q=80"
      accentColor="#ec4899"
      features={[
        "Catálogo de tratamientos",
        "Galería antes/después",
        "Sistema de turnos por WhatsApp",
        "Zona de preguntas frecuentes",
        "Diseño premium y femenino"
      ]}
      whatsappNumber={WHATSAPP}
    />
  );
}

export const demoRoutes: RouteRecord[] = [
  { path: "/demo-gimnasios", element: <DemoGimnasios /> },
  { path: "/demo-entrenadores", element: <DemoEntrenadores /> },
  { path: "/demo-psicologos", element: <DemoPsicologos /> },
  { path: "/demo-nutricionistas", element: <DemoNutricionistas /> },
  { path: "/demo-estetica", element: <DemoEstetica /> },
];