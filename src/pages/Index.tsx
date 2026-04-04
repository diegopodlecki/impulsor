import { lazy, Suspense, useEffect, useRef } from "react";
import { 
  ArrowRight, 
  ExternalLink,
  Laptop,
  Maximize2,
  Play,
  Zap,
  MessageCircle, 
  Clock, 
  CheckCircle 
} from "lucide-react";
import { Link } from "react-router-dom";

import { analytics } from "@/components/analytics/analytics";
import { WhatsAppButtonLink } from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { LandingPreviewCard } from "@/components/landing/LandingPreviewCard";
import { defaultWhatsappLink, profileSvg } from "@/components/landing/landingVisuals";
import { landingPages } from "@/data/landings";
import { AboutModalTrigger } from "@/components/AboutModal";
import { ServiceCard, BadgeChip } from "@/components/design-system/components";
const TrustSection = lazy(() =>
  import("@/components/trust/TrustSection").then((mod) => ({ default: mod.TrustSection })),
);

const heroStats = [
  { value: "+Consultas", label: "desde el primer día" },
  { value: "+Confianza", label: "en el primer vistazo" },
  { value: "+Cierres", label: "con WhatsApp y formulario" },
];

const problems = [
  {
    title: "Tenés redes pero no recibís consultas",
    text: "Publicás contenido, pero eso no siempre se transforma en mensajes o reservas.",
    image: "/lovable-uploads/ebbed6e4-41d1-443b-beed-4c026027aefe.png"
  },
  {
    title: "Tu competencia se ve más profesional",
    text: "Cuando una web transmite más valor, es más fácil que el cliente se incline por ellos.",
    image: "/og-gimnasio.png"
  },
  {
    title: "Dependés del boca a boca",
    text: "Sin una web que convierta, cada consulta depende de una recomendación aislada.",
    image: "/og-emprendedor.png"
  },
  {
    title: "Tu web no genera resultados",
    text: "Si no guía a una acción, termina siendo una presencia online que no vende.",
    image: "/og-psicologo.png"
  },
];

const solutions = [
  "Más consultas",
  "Imagen profesional",
  "Presencia online sólida",
  "Automatización básica",
];

function initials(name: string) {
  return name
    .split(/[\s.]+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}



const exampleCards = [
  {
    name: "Iron Fitness",
    rubro: "Gimnasio",
    href: "/gimnasio",
    configKey: "iron-fitness",
  },
  {
    name: "ProCoach",
    rubro: "Personal trainer",
    href: "/entrenadores",
    configKey: "personal-trainer",
  },
  {
    name: "Mente Clara",
    rubro: "Psicólogo",
    href: "/psicologos",
    configKey: "psicologo",
  },
  {
    name: "NutriVida",
    rubro: "Nutricionista",
    href: "/nutricionistas",
    configKey: "nutricionista",
  },
  {
    name: "Glam Studio",
    rubro: "Estética corporal",
    href: "/estetica-corporal",
    configKey: "estetica-corporal",
  },
  {
    name: "LaunchMe",
    rubro: "Emprendedor",
    href: "/emprendedores",
    configKey: "emprendedor",
  },
];



const benefits = [
  {
    title: "Recibir consultas todos los días",
    text: "Cada sección está pensada para invitar a escribirte o pedir más información.",
  },
  {
    title: "Mostrarte profesional desde el primer contacto",
    text: "Una web clara y moderna hace que te tomen en serio enseguida.",
  },
  {
    title: "Diferenciarte de tu competencia",
    text: "No se trata solo de verse bien, sino de transmitir mejor el valor de tu trabajo.",
  },
  {
    title: "Tener una web que trabaja por vos 24/7",
    text: "Tu sitio sigue generando oportunidades aunque vos estés ocupado con tu negocio.",
  },
];

const process = [
  {
    step: "01",
    title: "Nos escribís por WhatsApp",
    text: "Nos contás qué necesitás y a quién le vendés. Sin vueltas.",
    icon: MessageCircle,
  },
  {
    step: "02",
    title: "Definimos tu web en 10 minutos",
    text: "En una llamada rápida definimos el contenido y el estilo de tu página.",
    icon: Clock,
  },
  {
    step: "03",
    title: "En pocos días tenés tu página lista",
    text: "Tu web queda publicada, funcionando y lista para recibir clientes.",
    icon: CheckCircle,
  },
];

function SectionTitle({
  eyebrow,
  title,
  description,
  className = "",
}: {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-4xl text-center ${className}`}>
      <span className="text-label !text-[#0EA5E9] font-black uppercase tracking-[0.2em]">{eyebrow}</span>
      <h2 className="text-h2 mt-4 text-slate-900">
        {title}
      </h2>
      <p className="text-subtitle mt-8 mx-auto !text-slate-500 !max-w-2xl">
        {description}
      </p>
    </div>
  );
}

/**
 * Hero Mockup - Represents a high-end web delivery
 */
function HeroMockup() {
  return (
    <div className="relative mx-auto mt-20 max-w-5xl animate-float lg:mt-24">
      {/* Glow behind the mockup */}
      <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-blue-600/20 to-purple-600/20 blur-2xl opacity-50" />
      
      {/* Browser Shell */}
      <div className="relative overflow-hidden rounded-[1.5rem] lg:rounded-[2.5rem] border border-white/10 bg-[#0f172a] shadow-2xl">
        {/* Browser Top Bar */}
        <div className="flex items-center justify-between border-b border-white/5 bg-white/5 px-6 py-4">
          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500/50" />
            <div className="h-3 w-3 rounded-full bg-amber-500/50" />
            <div className="h-3 w-3 rounded-full bg-emerald-500/50" />
          </div>
          <div className="hidden h-6 w-64 rounded-lg bg-white/5 md:block" />
          <div className="flex gap-4">
            <div className="h-2 w-2 rounded-full bg-white/10" />
            <div className="h-2 w-2 rounded-full bg-white/10" />
          </div>
        </div>
        
        {/* Preview Content - Using a service card mockup style */}
        <div className="aspect-[16/9] lg:aspect-[21/9] overflow-hidden bg-slate-900 p-2 sm:p-4">
           <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/5 bg-[#0b1120]">
              <img 
                src="/lovable-uploads/ebbed6e4-41d1-443b-beed-4c026027aefe.png" 
                alt="Web Delivery Preview"
                className="h-full w-full object-cover opacity-90 transition-opacity hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent opacity-60" />
              
              {/* Floating UI Element inside mockup */}
              <div className="absolute bottom-6 left-6 hidden sm:flex items-center gap-4 rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-md">
                 <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/40">
                    <Zap className="h-5 w-5 text-white" />
                 </div>
                 <div>
                    <p className="text-xs font-black uppercase tracking-widest text-[#3b82f6]">Performance</p>
                    <p className="text-sm font-bold text-white">99/100 Core Web Vitals</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

export default function Index() {
  return (
    <main className="min-h-screen">
      <div className="hidden" />

      <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
        <div className="container flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0EA5E9]">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900">WebApp<span className="text-[#0EA5E9]">Impulsor</span></span>
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            <a href="#problema" className="text-sm font-bold text-slate-500 transition-all duration-200 hover:text-[#0EA5E9] hover:translate-y-[-1px]">Problema</a>
            <a href="#servicios" className="text-sm font-bold text-slate-500 transition-all duration-200 hover:text-[#0EA5E9] hover:translate-y-[-1px]">Servicios</a>
            <a href="#testimonios" className="text-sm font-bold text-slate-500 transition-all duration-200 hover:text-[#0EA5E9] hover:translate-y-[-1px]">Testimonios</a>
            <a href="#sobre-mi" className="text-sm font-bold text-slate-500 transition-all duration-200 hover:text-[#0EA5E9] hover:translate-y-[-1px]">Sobre Mí</a>
            <a href="#contacto" className="btn-primary !px-8 !py-3.5 !text-xs">Quiero más clientes</a>
          </nav>

          <div className="md:hidden">
            {/* Mobile menu logic could go here, but keeping it simple for now */}
          </div>
        </div>
      </header>

      {/* 1. HERO */}
      <section className="section-container container relative pb-0 pt-32 lg:pt-48 bg-hero-glow overflow-hidden">
        {/* Background Blobs */}
        <div className="glow-blur -top-24 -left-20 opacity-20" />
        <div className="glow-blur top-1/2 -right-40 opacity-10 bg-purple-500/10" />

        <div className="mx-auto max-w-5xl text-center relative z-10">
          <div className="mb-10 inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-5 py-2.5 text-sm font-bold text-[#3b82f6] shadow-xl shadow-blue-500/10">
            <span className="h-2.5 w-2.5 rounded-full bg-[#3b82f6] animate-pulse" />
            <span className="uppercase tracking-[0.1em] text-[10px]">Silicon Valley Style Design</span>
          </div>

          <h1 className="text-h1 mb-8">
            Tu web debería traerle <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] via-[#6366f1] to-[#a855f7]">clientes reales</span>
          </h1>

          <p className="mt-8 text-subtitle mx-auto max-w-3xl">
            No diseñamos webs, creamos sistemas de autoridad que transforman visitas en consultas constantes. Diseño premium orientado 100% a la conversión.
          </p>

          <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            <Button asChild className="btn-primary group h-16 px-12">
              <a href="#contacto" className="flex items-center gap-3">
                Quiero más clientes
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="outline" className="btn-secondary h-16 px-12">
              <a href="#servicios">
                Ver soluciones
              </a>
            </Button>
          </div>
        </div>

        {/* Hero Visual Extra (Mockup) */}
        <HeroMockup />
      </section>


      {/* 2. PROBLEMA */}
      <section id="problema" className="section-container container bg-[#111827] relative overflow-hidden">
        <div className="glow-blur -right-20 top-1/2 -translate-y-1/2 opacity-20 bg-blue-500/10" />
        <SectionTitle
          eyebrow="Problema"
          title="¿Tu web actual es solo un gasto?"
          description="Si tenés visitas pero nadie te escribe, el problema no es tu tráfico, es tu capacidad de conversión."
        />

        <div className="mt-20 cards-container">
          {problems.map((item) => (
            <a href="#contacto" key={item.title} className="card">
              <div className="card-image">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-text">{item.text}</p>
              <div className="card-cta">Empezar ahora →</div>
            </a>
          ))}
        </div>
      </section>


      {/* 3. SERVICIOS (CARDS) */}
      <section id="servicios" className="section-container container bg-[#0f172a] border-t border-white/5">
        <SectionTitle
          eyebrow="Nuestras soluciones"
          title="Arquitecturas que generan ventas"
          description="Cada proyecto está diseñado con un solo objetivo: que tus visitantes se conviertan en clientes recurrentes."
        />

        <div className="mt-20 cards-container">
          <a href="#contacto" className="card">
            <div className="card-image">
              <img src="/og-psicologo.png" alt="Web para profesionales" />
            </div>
            <h3 className="card-title">Sitio para profesionales</h3>
            <p className="card-text">Diseño optimizado para que profesionales (psicólogos, nutricionistas) reciban contactos calificados.</p>
            <div className="card-cta">Analizar mi web →</div>
          </a>
          <a href="#contacto" className="card">
            <div className="card-image">
              <img src="/og-gimnasio.png" alt="Web para negocios locales" />
            </div>
            <h3 className="card-title">Escala para negocios locales</h3>
            <p className="card-text">Posicioná tu comercio con una web que facilite encontrarte, visitarte y reservar online.</p>
            <div className="card-cta">Analizar mi web →</div>
          </a>
          <a href="#contacto" className="card">
            <div className="card-image">
              <img src="/og-image.png" alt="Sistema con WhatsApp" />
            </div>
            <h3 className="card-title">Venta por WhatsApp</h3>
            <p className="card-text">Integración directa para que tus clientes te escriban con un clic. Ideal para cierres rápidos.</p>
            <div className="card-cta">Analizar mi web →</div>
          </a>
          <a href="#contacto" className="card">
            <div className="card-image">
              <img src="/og-emprendedor.png" alt="Landing de ventas" />
            </div>
            <h3 className="card-title">High-Ticket Landings</h3>
            <p className="card-text">Páginas de aterrizaje enfocadas en un solo producto de alto valor para maximizar tu retorno.</p>
            <div className="card-cta">Analizar mi web →</div>
          </a>
        </div>
      </section>


      {/* 4. PRUEBA SOCIAL */}
      <Suspense fallback={<div className="py-20 text-center">Cargando confianza...</div>}>
        <section id="testimonios" className="section-container bg-slate-50/50">
          <TrustSection />
        </section>
      </Suspense>


      {/* 5. SOBRE MÍ (CONVERTIDO A MODAL/POPUP) */}
      <section id="sobre-mi" className="section-container container bg-[#111827] border-y border-white/5">
        <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-slate-900 p-12 lg:p-20 text-center overflow-hidden relative shadow-2xl">
          {/* Decorative background circle */}
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="h-24 w-24 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-1 mb-8 shadow-xl">
              <img
                src="/lovable-uploads/6007e543-982c-473d-82d2-ca49d47343e0.png"
                alt="Diego Podlecki"
                className="h-full w-full rounded-[0.8rem] object-cover"
              />
            </div>
            
            <span className="text-label !text-cyan-400">Quién está detrás</span>
            <h2 className="text-h2 text-white mt-4">Diego Podlecki</h2>
            <p className="text-subtitle !text-slate-400 mt-6 max-w-2xl">
              "No diseño por estética. Diseño por conversión. Ayudo a negocios a transformar su presencia online en una herramienta real de ventas."
            </p>
            
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <AboutModalTrigger />
              <Button asChild variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white rounded-full px-8 py-4 font-bold">
                <a href="#contacto">Hablemos ahora</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="section-container container my-20">
        <div className="bg-slate-900 rounded-[3rem] overflow-hidden">
          <div className="grid gap-20 lg:grid-cols-2 lg:items-center p-12 lg:p-24">
            <div>
              <span className="text-label !text-cyan-400">Contacto directo</span>
              <h2 className="text-h2 mt-2 text-white">Recibí una propuesta pensada para vender</h2>
              <p className="text-subtitle mt-8 text-slate-300 max-w-md">
                Completá tus datos y te respondo con una propuesta concreta en menos de 24 hs hábiles.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-2xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>


      <WhatsAppButtonLink
        href={defaultWhatsappLink()}
        ariaLabel="Hablar por WhatsApp"
        dataWaSource="floating"
        dataWaOnline="true"
        onClick={() => analytics.whatsappClick("floating_button")}
        className="animate-wa-pulse fixed bottom-8 right-8 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-500/30 transition-transform duration-300 hover:scale-110"
      >
        <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </WhatsAppButtonLink>

      {/* Cierre */}
      <section className="container py-12 sm:py-16">
        <div className="rounded-xl border border-cyan-400/20 bg-slate-950 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">¿Querés una web que comunique mejor tu valor?</h2>
          <p className="mt-4 text-white/70">Escribime sin compromiso. Te cuento qué podés construir y en cuánto tiempo.</p>

          <Button asChild size="lg" className="mt-6 bg-[#25D366] text-white hover:bg-[#20bd5a]">
            <a
              href="https://wa.me/541166448389"
              target="_blank"
              rel="noreferrer"
              data-whatsapp-origin="footer"
              data-analytics-cta="footer-whatsapp"
              onClick={() => analytics.whatsappClick("footer")}
            >
              <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Hablemos por WhatsApp
            </a>
          </Button>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70">Sin contratos largos</span>
            <span className="text-muted-foreground">·</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70">Entrega rápida</span>
            <span className="text-muted-foreground">·</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70">Soporte incluido</span>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 bg-[#0f172a] py-14">
        <div className="container text-center text-slate-500 text-sm">
          © 2024 WebAppImpulsor · Diego Podlecki
        </div>
      </footer>
    </main>
  );
}

