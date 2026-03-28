import { ArrowRight, CheckCircle2, Globe2, MessageCircle, Sparkles, Target, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";

const WHATSAPP_NUMBER = "541166448389";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

function xmlEscape(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function previewSvg(title: string, subtitle: string, accentA: string, accentB: string) {
  const safeTitle = xmlEscape(title);
  const safeSubtitle = xmlEscape(subtitle);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" role="img" aria-label="${safeTitle}">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#07111f" />
          <stop offset="100%" stop-color="#101d35" />
        </linearGradient>
        <linearGradient id="accent" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${accentA}" />
          <stop offset="100%" stop-color="${accentB}" />
        </linearGradient>
      </defs>
      <rect width="1200" height="900" rx="48" fill="url(#bg)" />
      <circle cx="960" cy="170" r="150" fill="${accentA}" fill-opacity="0.18" />
      <circle cx="1040" cy="620" r="220" fill="${accentB}" fill-opacity="0.12" />
      <rect x="74" y="82" width="188" height="44" rx="22" fill="url(#accent)" fill-opacity="0.95" />
      <text x="98" y="111" fill="#ffffff" font-size="22" font-family="Inter, Arial, sans-serif" font-weight="700">Web que convierte</text>
      <text x="74" y="202" fill="#ffffff" font-size="54" font-family="Inter, Arial, sans-serif" font-weight="800">${safeTitle}</text>
      <text x="74" y="264" fill="#cbd5e1" font-size="28" font-family="Inter, Arial, sans-serif">${safeSubtitle}</text>
      <rect x="74" y="360" width="560" height="300" rx="32" fill="#0f172a" fill-opacity="0.72" stroke="#ffffff" stroke-opacity="0.08" />
      <rect x="108" y="398" width="260" height="24" rx="12" fill="#1e293b" />
      <rect x="108" y="445" width="460" height="22" rx="11" fill="#1e293b" />
      <rect x="108" y="486" width="400" height="22" rx="11" fill="#1e293b" />
      <rect x="108" y="548" width="180" height="58" rx="16" fill="url(#accent)" />
      <text x="135" y="586" fill="#ffffff" font-size="20" font-family="Inter, Arial, sans-serif" font-weight="700">Quiero consultar</text>
      <rect x="332" y="548" width="236" height="58" rx="16" fill="#0f172a" stroke="#ffffff" stroke-opacity="0.12" />
      <text x="365" y="586" fill="#e2e8f0" font-size="20" font-family="Inter, Arial, sans-serif" font-weight="700">Ver m&aacute;s informaci&oacute;n</text>
      <rect x="690" y="328" width="420" height="272" rx="32" fill="#0f172a" fill-opacity="0.82" stroke="#ffffff" stroke-opacity="0.08" />
      <rect x="726" y="368" width="348" height="18" rx="9" fill="#1e293b" />
      <rect x="726" y="414" width="280" height="18" rx="9" fill="#1e293b" />
      <rect x="726" y="460" width="310" height="18" rx="9" fill="#1e293b" />
      <circle cx="1022" cy="526" r="48" fill="url(#accent)" fill-opacity="0.9" />
      <path d="M1010 526h24m-12-12v24" stroke="#ffffff" stroke-width="8" stroke-linecap="round" />
      <text x="726" y="548" fill="#94a3b8" font-size="18" font-family="Inter, Arial, sans-serif">Consultas, reservas y ventas por WhatsApp</text>
    </svg>`;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function whatsappLink(message: string) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

const heroStats = [
  { value: "+Consultas", label: "desde el primer día" },
  { value: "+Confianza", label: "en el primer vistazo" },
  { value: "+Cierres", label: "con WhatsApp y formulario" },
];

const problems = [
  {
    icon: <MessageCircle className="h-5 w-5 text-[hsl(var(--neon-cyan))]" />,
    title: "Tu web no vende",
    text: "Tenés presencia online, pero no guía al visitante a escribirte ni a pedir una cita.",
  },
  {
    icon: <TrendingUp className="h-5 w-5 text-[hsl(var(--neon-cyan))]" />,
    title: "Llegan pocas consultas",
    text: "La gente entra, mira un momento y se va porque no encuentra una propuesta clara.",
  },
  {
    icon: <Globe2 className="h-5 w-5 text-[hsl(var(--neon-cyan))]" />,
    title: "Tu marca se ve débil",
    text: "Sin una landing pensada para vender, terminás pareciendo uno más entre muchos.",
  },
];

const solutions = [
  "Mensaje claro desde el primer segundo",
  "Diseño que hace que te tomen en serio",
  "Botones visibles para escribirte sin dar vueltas",
  "WhatsApp como canal principal de cierre",
  "Formulario conectado a Supabase para no perder consultas",
];

const rubros = [
  {
    slug: "gimnasios",
    title: "Gimnasios",
    headline: "Así podría verse tu web si sos dueño de un gimnasio",
    subtitle: "Más consultas, más visitas y más inscripciones.",
    copy: "Mostrá clases, horarios y planes con una web que convierte interés en mensajes.",
    message: "Hola, quiero una web para mi gimnasio que me consiga más consultas e inscripciones.",
    demoHref: "/demos/code.html",
    preview: previewSvg("Gimnasios", "Clases, planes y reservas", "#22c55e", "#06b6d4"),
  },
  {
    slug: "personal-trainers",
    title: "Personal Trainers",
    headline: "Así podría verse tu web si sos entrenador personal",
    subtitle: "Construí autoridad y cerrá entrenamientos por chat.",
    copy: "Presentá tu método, tus resultados y un CTA claro para que te escriban sin dudar.",
    message: "Hola, quiero una web para mi trabajo de personal trainer que me ayude a vender más.",
    demoHref: "/demos/code1.html",
    preview: previewSvg("Personal Trainer", "Resultados y disciplina", "#f97316", "#ef4444"),
  },
  {
    slug: "nutricionistas",
    title: "Nutricionistas",
    headline: "Así podría verse tu web si sos nutricionista",
    subtitle: "Más consultas para planes, seguimiento y cambios reales.",
    copy: "Mostrá tu enfoque y tu forma de trabajar con una experiencia visual que inspire confianza.",
    message: "Hola, quiero una web para mi consultorio de nutrición y atraer más pacientes.",
    demoHref: "/demos/code2.html",
    preview: previewSvg("Nutricionista", "Planes, habitos y seguimiento", "#84cc16", "#22c55e"),
  },
  {
    slug: "psicologos",
    title: "Psicologos",
    headline: "Así podría verse tu web si sos psicólogo",
    subtitle: "Transmití calma, credibilidad y reserva de turnos.",
    copy: "Una página sobria y humana que facilite reservar sesiones sin fricción.",
    message: "Hola, quiero una web para mi consultorio de psicología y agendar más turnos.",
    demoHref: "/demos/code2.html",
    preview: previewSvg("Psicologia", "Calma, empatia y turnos", "#3b82f6", "#0ea5e9"),
  },
  {
    slug: "estetica-corporal",
    title: "Estetica corporal",
    headline: "Así podría verse tu web si ofrecés estética corporal",
    subtitle: "Vendé sesiones premium con una imagen más aspiracional.",
    copy: "Mostrá transformación, resultados y una estética cuidada para servicios de alto valor.",
    message: "Hola, quiero una web para estética corporal que me ayude a vender más tratamientos.",
    demoHref: "/demos/code.html",
    preview: previewSvg("Estetica corporal", "Premium, visual y elegante", "#ec4899", "#f97316"),
  },
];

const benefits = [
  {
    title: "Mas consultas",
    text: "Cada sección empuja al visitante a escribirte o agendar una llamada.",
    icon: <Target className="h-4 w-4" />,
  },
  {
    title: "Mejor primera impresion",
    text: "Una web moderna hace que tu servicio se vea mejor antes de leer demasiado.",
    icon: <Sparkles className="h-4 w-4" />,
  },
  {
    title: "Cierre por WhatsApp",
    text: "El contacto principal se mantiene simple, directo y fácil de usar.",
    icon: <MessageCircle className="h-4 w-4" />,
  },
  {
    title: "Formulario que guarda",
    text: "Las consultas llegan a Supabase y no se pierden aunque el visitante no escriba por chat.",
    icon: <CheckCircle2 className="h-4 w-4" />,
  },
];

const process = [
  {
    step: "01",
    title: "Entendemos tu negocio",
    text: "Definimos qué vendés, a quién le hablás y qué acción querés que haga el usuario.",
  },
  {
    step: "02",
    title: "Armamos la landing",
    text: "Diseñamos una página clara, moderna y enfocada en convertir visitas en clientes.",
  },
  {
    step: "03",
    title: "Conectamos los contactos",
    text: "Dejamos el formulario funcionando con Supabase y WhatsApp como canal de cierre.",
  },
  {
    step: "04",
    title: "Publicas y vendes",
    text: "Tu sitio queda listo para recibir tráfico desde redes, anuncios o Google.",
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
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(34,211,238,0.16),transparent_32%),radial-gradient(circle_at_84%_12%,rgba(59,130,246,0.12),transparent_30%),radial-gradient(circle_at_60%_88%,rgba(16,185,129,0.1),transparent_28%)]" />
      </div>

      <header className="sticky top-0 z-30 border-b border-border/50 bg-background/35 backdrop-blur">
        <div className="container flex h-16 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-background/40 shadow-card">
              <Sparkles className="h-5 w-5 text-[hsl(var(--neon-cyan))]" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight">WebAppImpulsor</p>
                  <p className="text-xs text-muted-foreground">Landing orientada a conseguir clientes</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-4 lg:flex">
            <a className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="#problema">
              Problema
            </a>
            <a className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="#solucion">
              Solución
            </a>
            <a className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="#rubros">
              Rubros
            </a>
            <a className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="#beneficios">
              Beneficios
            </a>
            <a className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="#proceso">
              Proceso
            </a>
            <a className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="#contacto">
              Formulario
            </a>
            <Link
              to="/admin"
              className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/30 px-4 py-2 text-sm font-medium text-foreground/90 transition-colors hover:bg-background/50"
            >
              Admin
              <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>

          <Button asChild variant="whatsapp" size="sm" className="hidden md:inline-flex">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </Button>
        </div>
      </header>

      <section className="container py-12 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/30 px-4 py-2 text-sm font-medium text-foreground/90">
                <Zap className="h-4 w-4 text-[hsl(var(--neon-cyan))]" />
                Creamos páginas web que generan clientes
              </div>
              <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Creamos páginas web que convierten visitas en consultas reales
              </h1>
              <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
                Si tu web no vende, solo está ocupando espacio. Diseñamos páginas claras, modernas y enfocadas en
                hacer que la gente te escriba por WhatsApp o deje sus datos.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="whatsapp" size="lg">
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                    Quiero más clientes
                  </a>
                </Button>
                <Button asChild variant="hero" size="lg">
                  <a href="#rubros">Ver ejemplos</a>
                </Button>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {heroStats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-border/60 bg-background/20 px-4 py-4 shadow-card">
                    <div className="text-lg font-semibold">{item.value}</div>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-gradient-card p-4 shadow-card sm:p-6">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-primary" />
              <img
                src={previewSvg("Landing que vende", "Mas consultas, mas turnos y mas cierres", "#22c55e", "#38bdf8")}
                alt="Preview de una landing orientada a ventas"
                className="h-[460px] w-full rounded-[1.5rem] object-cover"
              />
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {["Más consultas", "Más confianza", "Más cierres"].map((item) => (
                  <div key={item} className="rounded-2xl border border-border/60 bg-background/30 px-4 py-3 text-sm font-medium">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="problema" className="container py-12 sm:py-16">
        <SectionTitle
          eyebrow="Problema"
          title="La mayoría de las webs muestran servicios, pero no generan consultas"
          description="Muchas páginas se ven bien, pero no responden la pregunta más importante: por qué alguien debería contactarte ahora."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {problems.map((item) => (
            <div key={item.title} className="rounded-3xl border border-border/70 bg-gradient-card p-6 shadow-card">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border/60 bg-background/30">
                {item.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="solucion" className="container py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <SectionTitle
              eyebrow="Solución"
              title="Una landing pensada para convertir interés en clientes"
              description="Diseñamos páginas que ordenan el mensaje, elevan la percepción de tu marca y llevan al visitante directo a la acción."
            />

            <div className="mt-10 grid gap-3">
              {solutions.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-border/60 bg-background/20 px-4 py-4 shadow-card">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-[hsl(var(--neon-cyan))]" />
                  <span className="text-sm leading-6 text-foreground/90">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-[2rem] border border-border/70 bg-gradient-card p-6 shadow-card">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">Qué logramos</p>
              <div className="mt-5 space-y-4">
                <div className="rounded-2xl border border-border/60 bg-background/30 p-4">
                  <p className="text-sm font-semibold">Más consultas</p>
                  <p className="mt-1 text-sm text-muted-foreground">La web guía al visitante a escribirte o dejar sus datos sin pensar demasiado.</p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-background/30 p-4">
                  <p className="text-sm font-semibold">Más credibilidad</p>
                  <p className="mt-1 text-sm text-muted-foreground">Un diseño limpio transmite valor y profesionalismo desde el primer vistazo.</p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-background/30 p-4">
                  <p className="text-sm font-semibold">Más cierres</p>
                  <p className="mt-1 text-sm text-muted-foreground">WhatsApp sigue siendo el camino más simple para cerrar ventas de servicios.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="rubros" className="container py-12 sm:py-16">
        <SectionTitle
          eyebrow="Ejemplos"
          title="Elegí una solución pensada para tu tipo de cliente"
          description="No mostramos webs genéricas. Cada demo está presentada como una opción concreta para vender mejor en tu rubro."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {rubros.map((rubro, index) => (
            <article
              key={rubro.slug}
              id={`ejemplo-${rubro.slug}`}
              className={`overflow-hidden rounded-[2rem] border border-border/70 bg-gradient-card shadow-card ${
                index === 0 ? "md:col-span-2 xl:col-span-1" : ""
              }`}
            >
              <img src={rubro.preview} alt={`Demo de ${rubro.title}`} className="h-64 w-full object-cover" />
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">Ejemplo por rubro</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">{rubro.title}</h3>
                <p className="mt-2 text-lg font-medium text-foreground/90">{rubro.headline}</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{rubro.subtitle}</p>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{rubro.copy}</p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button asChild variant="outline" size="sm" className="w-full sm:w-auto">
                    <a href={rubro.demoHref} target="_blank" rel="noreferrer">
                      Ver demo
                    </a>
                  </Button>
                  <Button asChild variant="whatsapp" size="sm" className="w-full sm:w-auto">
                    <a href={whatsappLink(rubro.message)} target="_blank" rel="noreferrer">
                      Quiero esta web
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-6">
          {rubros.map((rubro, index) => (
            <article
              key={`${rubro.slug}-solution`}
              className={`grid gap-6 rounded-[2rem] border border-border/70 bg-gradient-card p-6 shadow-card lg:grid-cols-2 lg:items-center ${
                index % 2 === 1 ? "lg:[&>img]:order-2" : ""
              }`}
            >
              <img
                src={rubro.preview}
                alt={`Vista ampliada de ${rubro.title}`}
                className="h-full min-h-[280px] w-full rounded-[1.5rem] object-cover"
              />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">Solución específica</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight">{rubro.headline}</h3>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{rubro.copy}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Pensada para atraer consultas de ese rubro",
                    "Diseño listo para vender desde el primer impacto",
                    "Llamadas a la acción claras y visibles",
                    "Contacto directo por WhatsApp y formulario",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-border/60 bg-background/30 px-4 py-4 text-sm">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button asChild variant="outline" size="sm">
                    <a href={rubro.demoHref} target="_blank" rel="noreferrer">
                      Ver demo
                    </a>
                  </Button>
                  <Button asChild variant="whatsapp" size="sm">
                    <a href={whatsappLink(rubro.message)} target="_blank" rel="noreferrer">
                      Quiero esta web
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="beneficios" className="container py-12 sm:py-16">
        <SectionTitle
          eyebrow="Beneficios"
          title="Beneficios que importan al negocio, no solo al diseño"
          description="La landing está pensada para sumar consultas, mejorar la percepción de tu marca y hacer más fácil el cierre comercial."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((item) => (
            <div key={item.title} className="rounded-3xl border border-border/70 bg-gradient-card p-6 shadow-card">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border/60 bg-background/30">
                {item.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="proceso" className="container py-12 sm:py-16">
        <SectionTitle
          eyebrow="Proceso"
          title="Un servicio simple, claro y sin vueltas"
          description="Mantenemos el proceso corto para avanzar rápido y llegar a una web lista para vender."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {process.map((item) => (
            <div key={item.step} className="rounded-3xl border border-border/70 bg-gradient-card p-6 shadow-card">
              <div className="text-sm font-semibold tracking-[0.2em] text-[hsl(var(--neon-cyan))]">{item.step}</div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contacto" className="container py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <div className="rounded-[2rem] border border-border/70 bg-gradient-card p-6 shadow-card sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">Formulario</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">Pedí tu web lista para conseguir clientes</h2>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                Dejanos tu consulta y te respondemos con una propuesta concreta. El formulario sigue guardando todo en
                Supabase para que no se pierda ningún contacto.
              </p>

              <div className="mt-6 space-y-3">
                {["Respuesta rápida y clara", "Ideal para presupuestos, reservas y consultas", "Seguimiento centralizado en Supabase"].map(
                  (item) => (
                    <div key={item} className="rounded-2xl border border-border/60 bg-background/30 px-4 py-4 text-sm">
                      {item}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="card-neon glow-soft rounded-[2rem] border border-border/70 bg-gradient-card p-6 shadow-card sm:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-16 pt-2 sm:pb-20">
        <div className="rounded-[2rem] border border-border/70 bg-gradient-primary p-8 text-primary-foreground shadow-glow sm:p-10">
          <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-foreground/80">CTA final</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Si querés más consultas, empecemos por tu landing
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-primary-foreground/85">
                Hacemos una página pensada para tu rubro, con mensajes que convierten y una vía directa para que te
                contacten por WhatsApp.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Button asChild variant="whatsapp" size="lg" className="w-full">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  Quiero más consultas
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full border-white/30 bg-white/10 text-primary-foreground hover:bg-white/20 hover:text-primary-foreground">
                <a href="#rubros">Ver ejemplos</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/40 bg-background/25">
        <div className="container flex flex-col gap-3 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold tracking-tight">WebAppImpulsor</p>
            <p className="text-sm text-muted-foreground">Landing de conversión con Supabase y WhatsApp.</p>
          </div>
          <div className="text-sm text-muted-foreground">Formulario, panel admin y seguimiento de consultas integrados.</div>
        </div>
      </footer>
    </main>
  );
}
