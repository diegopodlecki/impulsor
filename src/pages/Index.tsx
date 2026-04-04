import { lazy, Suspense, useEffect, useRef } from "react";
import { MessageCircle, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

import { analytics } from "@/components/analytics/analytics";
import { WhatsAppButtonLink } from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { LandingPreviewCard } from "@/components/landing/LandingPreviewCard";
import { defaultWhatsappLink, profileSvg } from "@/components/landing/landingVisuals";
import { landingPages } from "@/data/landings";
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
  },
  {
    title: "Tu competencia se ve más profesional",
    text: "Cuando una web transmite más valor, es más fácil que el cliente se incline por ellos.",
  },
  {
    title: "Dependés del boca a boca",
    text: "Sin una web que convierta, cada consulta depende de una recomendación aislada.",
  },
  {
    title: "Tu web no genera resultados",
    text: "Si no guía a una acción, termina siendo una presencia online que no vende.",
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
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">{eyebrow}</p>
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      <p className="mt-4 text-pretty text-muted-foreground">{description}</p>
    </div>
  );
}

export default function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(34,211,238,0.16),transparent_32%),radial-gradient(circle_at_84%_12%,rgba(59,130,246,0.12),transparent_30%),radial-gradient(circle_at_60%_88%,rgba(16,185,129,0.1),transparent_28%)]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/60 backdrop-blur-2xl transition-all duration-300">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#0EA5E9] to-[#10B981]">
              <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight text-white">WebApp<span className="text-[#0EA5E9]">Impulsor</span></span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#problema" className="text-sm font-medium text-white/70 transition-colors hover:text-white">Problema</a>
            <a href="#solucion" className="text-sm font-medium text-white/70 transition-colors hover:text-white">Solución</a>
            <a href="#rubros" className="text-sm font-medium text-white/70 transition-colors hover:text-white">Ejemplos</a>
            <Link to="/webs" className="text-sm font-medium text-white/70 transition-colors hover:text-white">
              Rubros
            </Link>
            <a href="#contacto" className="text-sm font-medium text-white/70 transition-colors hover:text-white">Contacto</a>
          </nav>

          <Button asChild size="sm" className="bg-[#25D366] text-white hover:bg-[#20bd5a]">
            <a
              href="https://wa.me/541166448389"
              target="_blank"
              rel="noreferrer"
              data-whatsapp-origin="header"
              data-analytics-cta="header-whatsapp"
              onClick={() => analytics.whatsappClick("header")}
            >
              <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Consultá ahora
            </a>
          </Button>
        </div>
      </header>

      <section className="container hero-critical py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-emerald-300 shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)] backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            Sitios pensados para generar consultas mejor calificadas
          </div>

          {/* H1 */}
          <h1 className="hero-title text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Tu web debería traerte clientes
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle mt-6 text-pretty text-lg leading-relaxed text-slate-300/90 sm:text-xl">
            Diseñamos sitios para psicólogos, abogados, consultores y coaches que necesitan autoridad, claridad y más consultas reales.
          </p>

          {/* Benefits */}
          <div className="hero-actions mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <div className="flex items-center gap-2">
              <span className="text-[#0EA5E9]">✓</span>
              <span className="text-sm">Atraé consultas sin depender solo de redes</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#0EA5E9]">✓</span>
              <span className="text-sm">Transmití autoridad desde el primer vistazo</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#0EA5E9]">✓</span>
              <span className="text-sm">Convertí visitas en mensajes reales</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="bg-[#0EA5E9] text-white hover:bg-[#0284C7]">
              <a href="#contacto" data-analytics-cta="hero-primary">
                Quiero una propuesta
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#rubros" data-analytics-cta="hero-secondary">
                Ver ejemplos
              </a>
            </Button>
          </div>

          {/* Microcopy */}
          <p className="mt-4 text-sm text-muted-foreground">
            Respuesta en menos de 24 hs hábiles
          </p>

          {/* Social proof */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <span className="text-yellow-500">★★★★★</span>
            <span className="text-sm text-muted-foreground">Trabajo enfocado en negocios de servicios en Argentina</span>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {heroStats.map((item) => (
              <div key={item.value} className="surface-card rounded-3xl p-4 text-left">
                <p className="text-lg font-semibold text-white">{item.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problema section */}
      <section className="container py-12 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Si tu web no vende, no sirve
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            La mayoría de las páginas web están mal pensadas
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-[#0EA5E9]">•</span>
              <p className="text-left">Recibís visitas pero nadie te escribe</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#0EA5E9]">•</span>
              <p className="text-left">Dependés solo de redes sociales</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#0EA5E9]">•</span>
              <p className="text-left">Tu web parece linda pero no genera ingresos</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#0EA5E9]">•</span>
              <p className="text-left">No sabés si está funcionando o no</p>
            </div>
          </div>

          <p className="mt-8 text-lg font-medium">
            Esto no es un problema de marketing. Es un problema de estrategia web.
          </p>

          <div className="mt-8">
            <Button asChild size="lg" className="bg-[#0EA5E9] text-white hover:bg-[#0284C7]">
              <a href="#contacto" data-analytics-cta="problem-solution">
                Quiero solucionarlo
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="problema" className="container py-20 sm:py-24">
        <SectionTitle
          eyebrow="Problema"
          title="¿Te pasa esto?"
          description="Cuando la web no convierte, el negocio sigue online pero no despega."
        />

        <div className="mt-10 cards-container">
          {problems.map((item) => (
            <a href="#contacto" key={item.title} className="card">
              <div className="card-inner">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.text}</p>
                <div className="card-cta">Solucionar esto →</div>
              </div>
            </a>
          ))}
        </div>

        <p className="mt-8 text-center text-sm font-medium text-foreground/90">
          Si te identificás con alguno, estás perdiendo clientes todos los días.
        </p>
      </section>

      <section id="solucion" className="container py-20 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <SectionTitle
              eyebrow="Solución"
              title="Convertimos tu web en una herramienta de ventas"
              description="No hacemos páginas 'lindas'. Creamos webs pensadas para que tus clientes te contacten, te elijan y te compren."
            />

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {solutions.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#0EA5E9]" />
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>


        </div>
      </section>

      <section id="rubros" className="container py-20 sm:py-24">
        <SectionTitle
          eyebrow="Ejemplos"
          title="Elegí tu tipo de negocio y mirá cómo sería tu web"
          description="Cada rubro tiene una solución específica pensada para atraer clientes y facilitar el contacto."
        />

        <div className="mt-10 cards-container">
          <a href="#contacto" className="card">
            <div className="card-inner">
              <h3 className="card-title">Web para generar consultas</h3>
              <p className="card-text">Diseño optimizado para que profesionales reciban contactos calificados todos los días.</p>
              <div className="card-cta">Quiero este sistema →</div>
            </div>
          </a>
          <a href="#contacto" className="card">
            <div className="card-inner">
              <h3 className="card-title">Web para negocios locales</h3>
              <p className="card-text">Posicioná tu comercio con una web que facilite encontrarte y visitarte físicamente.</p>
              <div className="card-cta">Quiero este sistema →</div>
            </div>
          </a>
          <a href="#contacto" className="card">
            <div className="card-inner">
              <h3 className="card-title">Sistema con WhatsApp</h3>
              <p className="card-text">Integración directa para que tus clientes te escriban con un solo clic desde su móvil.</p>
              <div className="card-cta">Quiero este sistema →</div>
            </div>
          </a>
          <a href="#contacto" className="card">
            <div className="card-inner">
              <h3 className="card-title">Landing de ventas</h3>
              <p className="card-text">Páginas de aterrizaje enfocadas en un solo producto para maximizar tu retorno de inversión.</p>
              <div className="card-cta">Quiero este sistema →</div>
            </div>
          </a>
        </div>
      </section>

      <section id="como-funciona" className="container py-20 sm:py-24">
        <SectionTitle
          eyebrow="Proceso"
          title="¿Cómo funciona?"
          description="Simple, rápido y sin vueltas."
        />

        <div className="mt-10 space-y-8">
          {[
            {
              step: "1",
              title: "Me contás tu negocio",
              desc: "Hablamos por WhatsApp o completás el formulario.",
            },
            {
              step: "2",
              title: "Diseño y desarrollo tu sitio",
              desc: "Creo una landing pensada para que tus clientes se contacten con vos.",
            },
            {
              step: "3",
              title: "Tu web sale al aire",
              desc: "En pocos días tenés tu sitio publicado y listo para conseguir consultas.",
            },
          ].map((item) => (
            <div key={item.step} className="flex items-start gap-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0EA5E9] text-sm font-semibold text-white">
                {item.step}
              </div>
              <div>
                <h3 className="text-[15px] font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="beneficios" className="container py-20 sm:py-24">
        <SectionTitle
          eyebrow="Beneficios"
          title="Lo que vas a lograr con tu web"
          description="La web está pensada para ayudarte a conseguir más resultados y menos fricción en la venta."
        />

        <div className="mt-10 cards-container">
          {benefits.map((item) => (
            <a href="#contacto" key={item.title} className="card">
              <div className="card-inner">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.text}</p>
                <div className="card-cta">Quiero estos beneficios →</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <Suspense
        fallback={
          <section className="container py-16 sm:py-20">
            <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center">
              <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Prueba social</p>
              <p className="mt-3 text-lg text-white/70">Cargando testimonios y casos reales…</p>
            </div>
          </section>
        }
      >
        <TrustSection />
      </Suspense>

      {/* CTA Mitad de página */}
      <section className="container py-20 sm:py-24">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 sm:p-10 shadow-lg">
          {/* Background glow */}
          
          
          <div className="relative grid gap-6 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0EA5E9]">¿Listo para empezar?</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Tu competencia ya está online. La diferencia es quién convierte mejor.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                Si querés una web que genere clientes, te ayudo a construirla con una propuesta clara y enfocada en
                resultados.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Button asChild size="lg" className="w-full bg-[#25D366] text-white hover:bg-[#20bd5a]">
                <a
                  href={defaultWhatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  data-whatsapp-origin="cta-section"
                  data-analytics-cta="cta-mid-whatsapp"
                  onClick={() => analytics.whatsappClick("cta_mid")}
                >
                  <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Quiero más clientes
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white">
                <a
                  href={defaultWhatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  data-whatsapp-origin="cta-section"
                  data-analytics-cta="cta-section-whatsapp"
                  onClick={() => analytics.whatsappClick("cta_mid")}
                >
                  Hablar por WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="proceso" className="container py-20 sm:py-24">
        <SectionTitle
          eyebrow="Proceso"
          title="Así trabajamos"
          description="Un proceso simple y claro para avanzar rápido y llegar a una web lista para vender."
        />

        <div className="mt-10 container-cards">
          {process.map((item) => (
            <a href="#contacto" key={item.step} className="card-link">
              <div className="card text-center">
                <div className="card-image flex items-center justify-center p-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#0EA5E9]/10">
                    <item.icon className="h-10 w-10 text-[#0EA5E9]" />
                  </div>
                </div>
                <div className="card-content">
                  <div className="mb-2 text-xs font-semibold tracking-[0.2em] text-[#0EA5E9]">PASO {item.step}</div>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-description">{item.text}</p>
                </div>
                <div className="card-footer justify-center">
                  <span>Comenzar ahora</span>
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="sobre-mi" className="container py-20 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="card rounded-[2rem] p-6 sm:p-8">
            <img
              src="/lovable-uploads/6007e543-982c-473d-82d2-ca49d47343e0.png"
              alt="Diego Podlecki"
              className="mx-auto h-48 w-48 rounded-full border-4 border-white object-cover shadow-xl sm:h-64 sm:w-64"
            />
          </div>

          <div className="card rounded-[2rem] p-6 sm:p-8 flex flex-col">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0EA5E9]">Quién está detrás</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Diego Podlecki</h2>
            <p className="mt-2 text-sm font-bold text-slate-600">No hago páginas web. Creo herramientas que generan clientes.</p>
            <div className="mt-4 space-y-4">
              <p className="text-sm leading-7 text-slate-600">
                No diseño por estética. Diseño por conversión. Cada elemento de tu web está pensado para que el visitante
                se convierta en cliente: desde el botón de WhatsApp hasta el testimonio que cierra la venta.
              </p>
              <p className="text-sm leading-7 text-slate-600">
                Trabajo con negocios de servicios que necesitan resultados reales. Gimnasios, entrenadores, psicólogos...
                No me importa que tu web sea "linda" si no te trae clientes.
              </p>
            </div>

            <div className="mt-auto pt-8">
              <a
                href="#contacto"
                className="btn-primary inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold shadow-lg"
              >
                Quiero una propuesta
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="container py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
          <div className="card rounded-[2rem] p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0EA5E9]">Contacto directo</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-900 leading-tight">Recibí una propuesta pensada para convertir mejor</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Completá tus datos y te respondo con una propuesta concreta en menos de 24 hs hábiles.
            </p>
            
            <div className="mt-6 space-y-3">
              {[
                { label: "WhatsApp visible", text: "Respuesta rápida y directa" },
                { label: "Propuesta técnica", text: "Sin vueltas ni tecnicismos" },
                { label: "Foco total", text: "En generar más consultas" }
              ].map((item) => (
                <div key={item.label} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="h-2 w-2 mt-1.5 rounded-full bg-[#0EA5E9]" />
                  <div>
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-widest">{item.label}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>

          <div className="lg:col-span-7">
            <div className="card rounded-[2rem] p-6 sm:p-8 shadow-2xl relative z-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-16 pt-2 sm:pb-20">
        <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-slate-950 p-8 sm:p-10">
          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(14,165,233,0.16),transparent_50%),radial-gradient(circle_at_30%_80%,rgba(16,185,129,0.1),transparent_50%)]" />
          
          <div className="relative grid gap-6 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0EA5E9]">CTA final</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Tu competencia ya está online. La diferencia es quién comunica mejor su valor.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">
                Si querés una web que genere clientes, te ayudo a construirla con una propuesta clara, sobria y enfocada en resultados.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Button asChild size="lg" className="w-full bg-[#25D366] text-white hover:bg-[#20bd5a]">
                <a
                  href={defaultWhatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  data-whatsapp-origin="cta-section"
                  data-analytics-cta="cta-mid-whatsapp"
                  onClick={() => analytics.whatsappClick("cta_final")}
                >
                  <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Hablar por WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white">
                <a href="#rubros">Quiero ver ejemplos</a>
              </Button>
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
        className="animate-wa-pulse fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(142_70%_45%)] text-white shadow-[0_18px_50px_-18px_rgba(34,197,94,0.7)] transition-transform duration-300 hover:scale-110"
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

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="container py-12">
          <div className="flex flex-col items-center gap-6 text-center">
            <p className="text-xl font-semibold text-white sm:text-2xl">
              Tu web debería explicar mejor tu valor, no solo presentarte
            </p>
            
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-[#25D366] text-white hover:bg-[#20bd5a]">
                <a
                  href="https://wa.me/541166448389"
                  target="_blank"
                  rel="noreferrer"
                  data-whatsapp-origin="footer"
                  data-analytics-cta="footer-secondary-whatsapp"
                  onClick={() => analytics.whatsappClick("footer")}
                >
                  <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Quiero más clientes
                </a>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white">
                <a
                  href="https://wa.me/541166448389"
                  target="_blank"
                  rel="noreferrer"
                  data-whatsapp-origin="footer"
                  data-analytics-cta="footer-contact"
                  onClick={() => analytics.whatsappClick("footer")}
                >
                  <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Contacto rápido
                </a>
              </Button>
            </div>
            
            <div className="mt-4 text-sm text-white/50">
              © 2024 WebAppImpulsor · Diego Podlecki
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

