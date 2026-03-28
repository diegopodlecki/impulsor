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
      <text x="365" y="586" fill="#e2e8f0" font-size="20" font-family="Inter, Arial, sans-serif" font-weight="700">Ver más información</text>
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

function profileSvg(name: string, role: string) {
  const safeName = xmlEscape(name);
  const safeRole = xmlEscape(role);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1100" role="img" aria-label="${safeName}">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#08101d" />
          <stop offset="100%" stop-color="#12243b" />
        </linearGradient>
        <linearGradient id="accent" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#22d3ee" />
          <stop offset="100%" stop-color="#3b82f6" />
        </linearGradient>
      </defs>
      <rect width="900" height="1100" rx="54" fill="url(#bg)" />
      <circle cx="690" cy="180" r="180" fill="#22d3ee" fill-opacity="0.12" />
      <circle cx="190" cy="920" r="220" fill="#3b82f6" fill-opacity="0.12" />
      <circle cx="450" cy="390" r="170" fill="#f8fafc" fill-opacity="0.95" />
      <circle cx="450" cy="350" r="68" fill="#e2e8f0" />
      <path d="M325 540c40-92 210-92 250 0v110H325V540Z" fill="#e2e8f0" />
      <path d="M355 318c42-52 148-52 190 0v35c-18 36-52 62-95 62s-77-26-95-62v-35Z" fill="#0f172a" />
      <rect x="120" y="760" width="660" height="136" rx="34" fill="#0f172a" fill-opacity="0.8" stroke="#ffffff" stroke-opacity="0.1" />
      <text x="160" y="816" fill="#ffffff" font-size="34" font-family="Inter, Arial, sans-serif" font-weight="700">${safeName}</text>
      <text x="160" y="862" fill="#cbd5e1" font-size="22" font-family="Inter, Arial, sans-serif">${safeRole}</text>
      <rect x="160" y="902" width="210" height="18" rx="9" fill="url(#accent)" />
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
    title: "Tenés redes pero no recibís consultas",
    text: "Publicás contenido, pero eso no siempre se transforma en mensajes o reservas.",
  },
  {
    icon: <TrendingUp className="h-5 w-5 text-[hsl(var(--neon-cyan))]" />,
    title: "Tu competencia se ve más profesional",
    text: "Cuando una web transmite más valor, es más fácil que el cliente se incline por ellos.",
  },
  {
    icon: <Globe2 className="h-5 w-5 text-[hsl(var(--neon-cyan))]" />,
    title: "Dependés del boca a boca",
    text: "Sin una web que convierta, cada consulta depende de una recomendación aislada.",
  },
  {
    icon: <Target className="h-5 w-5 text-[hsl(var(--neon-cyan))]" />,
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

const rubros = [
  {
    slug: "gimnasios",
    title: "Gimnasios",
    headline: "Así podría verse tu web si sos dueño de un gimnasio",
    copy: "Diseñada para atraer clientes en gimnasios.",
    message: "Hola, quiero una web para mi gimnasio que me consiga más consultas e inscripciones.",
    demoHref: "/demos/code.html",
    preview: previewSvg("Gimnasios", "Clases, planes y reservas", "#22c55e", "#06b6d4"),
  },
  {
    slug: "personal-trainers",
    title: "Personal Trainers",
    headline: "Así podría verse tu web si sos entrenador personal",
    copy: "Diseñada para atraer clientes en entrenamiento personal.",
    message: "Hola, quiero una web para mi trabajo de personal trainer que me ayude a vender más.",
    demoHref: "/demos/code1.html",
    preview: previewSvg("Personal Trainer", "Resultados y disciplina", "#f97316", "#ef4444"),
  },
  {
    slug: "nutricionistas",
    title: "Nutricionistas",
    headline: "Así podría verse tu web si sos nutricionista",
    copy: "Diseñada para atraer clientes en nutrición.",
    message: "Hola, quiero una web para mi consultorio de nutrición y atraer más pacientes.",
    demoHref: "/demos/code2.html",
    preview: previewSvg("Nutricionista", "Planes, hábitos y seguimiento", "#84cc16", "#22c55e"),
  },
  {
    slug: "psicologos",
    title: "Psicólogos",
    headline: "Así podría verse tu web si sos psicólogo",
    copy: "Diseñada para atraer clientes en psicología.",
    message: "Hola, quiero una web para mi consultorio de psicología y agendar más turnos.",
    demoHref: "/demos/code2.html",
    preview: previewSvg("Psicología", "Calma, empatía y turnos", "#3b82f6", "#0ea5e9"),
  },
  {
    slug: "estetica-corporal",
    title: "Estética corporal",
    headline: "Así podría verse tu web si ofrecés estética corporal",
    copy: "Diseñada para atraer clientes en estética corporal.",
    message: "Hola, quiero una web para estética corporal que me ayude a vender más tratamientos.",
    demoHref: "/demos/code.html",
    preview: previewSvg("Estética corporal", "Premium, visual y elegante", "#ec4899", "#f97316"),
  },
];

const benefits = [
  {
    title: "Recibir consultas todos los días",
    text: "Cada sección está pensada para invitar a escribirte o pedir más información.",
    icon: <Target className="h-4 w-4" />,
  },
  {
    title: "Mostrarte profesional desde el primer contacto",
    text: "Una web clara y moderna hace que te tomen en serio enseguida.",
    icon: <Sparkles className="h-4 w-4" />,
  },
  {
    title: "Diferenciarte de tu competencia",
    text: "No se trata solo de verse bien, sino de transmitir mejor el valor de tu trabajo.",
    icon: <TrendingUp className="h-4 w-4" />,
  },
  {
    title: "Tener una web que trabaja por vos 24/7",
    text: "Tu sitio sigue generando oportunidades aunque vos estés ocupado con tu negocio.",
    icon: <CheckCircle2 className="h-4 w-4" />,
  },
];

const process = [
  {
    step: "01",
    title: "Analizamos tu negocio",
    text: "Entendemos qué vendés, a quién le hablás y qué querés lograr con la web.",
  },
  {
    step: "02",
    title: "Diseñamos tu web",
    text: "Armamos una página clara, moderna y enfocada en convertir visitas en consultas.",
  },
  {
    step: "03",
    title: "La publicamos",
    text: "Dejamos todo listo para que empieces a mostrar tu negocio online.",
  },
  {
    step: "04",
    title: "Empezás a recibir consultas",
    text: "Tu sitio queda listo para trabajar con WhatsApp, formularios y tráfico de redes o anuncios.",
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
              Ejemplos
            </a>
            <a className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="#beneficios">
              Beneficios
            </a>
            <a className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="#proceso">
              Proceso
            </a>
            <a className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="#sobre-mi">
              Sobre mí
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
                Creamamos páginas web que generan clientes
              </div>
              <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Creamamos páginas web que generan clientes, no solo visitas
              </h1>
              <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
                Si tu negocio está online pero no recibe consultas, el problema no es el mercado, es tu web. Nosotros lo
                solucionamos.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="whatsapp" size="lg">
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                    Hablar por WhatsApp
                  </a>
                </Button>
                <Button asChild variant="hero" size="lg">
                  <a href="#rubros">Ver ejemplos reales</a>
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
                src={previewSvg("Landing que vende", "Más consultas, más turnos y más cierres", "#22c55e", "#38bdf8")}
                alt="Mockup de una web en uso"
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
          title="¿Te pasa esto?"
          description="Cuando la web no convierte, el negocio sigue online pero no despega."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {problems.map((item) => (
            <div key={item.title} className="rounded-3xl border border-border/70 bg-gradient-card p-6 shadow-card">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border/60 bg-background/30">
                {item.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm font-medium text-foreground/90">
          Si te identificás con alguno, estás perdiendo clientes todos los días.
        </p>
      </section>

      <section id="solucion" className="container py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <SectionTitle
              eyebrow="Solución"
              title="Convertimos tu web en una herramienta de ventas"
              description="No hacemos páginas 'lindas'. Creamos webs pensadas para que tus clientes te contacten, te elijan y te compren."
            />

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {solutions.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/20 px-4 py-4 shadow-card">
                  <CheckCircle2 className="h-5 w-5 text-[hsl(var(--neon-cyan))]" />
                  <span className="text-sm font-medium">{item}</span>
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
                  <p className="mt-1 text-sm text-muted-foreground">Tu web guía al visitante a escribirte o pedir más información.</p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-background/30 p-4">
                  <p className="text-sm font-semibold">Imagen profesional</p>
                  <p className="mt-1 text-sm text-muted-foreground">Mostrás valor desde el primer vistazo y generás más confianza.</p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-background/30 p-4">
                  <p className="text-sm font-semibold">Presencia online sólida</p>
                  <p className="mt-1 text-sm text-muted-foreground">Tu negocio deja de depender solo de redes o del boca a boca.</p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-background/30 p-4">
                  <p className="text-sm font-semibold">Automatización básica</p>
                  <p className="mt-1 text-sm text-muted-foreground">Formularios, WhatsApp y seguimiento para no perder consultas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="rubros" className="container py-12 sm:py-16">
        <SectionTitle
          eyebrow="Ejemplos"
          title="Elegí tu tipo de negocio y mirá cómo sería tu web"
          description="Cada rubro tiene una solución específica pensada para atraer clientes y facilitar el contacto."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {rubros.map((rubro) => (
            <article key={rubro.slug} className="overflow-hidden rounded-[2rem] border border-border/70 bg-gradient-card shadow-card">
              <img src={rubro.preview} alt={`Preview de ${rubro.title}`} className="h-64 w-full object-cover" />
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">Ejemplo por rubro</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">{rubro.title}</h3>
                <p className="mt-2 text-lg font-medium text-foreground/90">{rubro.headline}</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{rubro.copy}</p>
                <Badge className="mt-4 border-transparent bg-background/50 text-foreground" variant="secondary">
                  Diseñada para vender
                </Badge>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button asChild variant="outline" size="sm" className="w-full sm:w-auto">
                    <a href={rubro.demoHref} target="_blank" rel="noreferrer">
                      Ver ejemplo
                    </a>
                  </Button>
                  <Button asChild variant="whatsapp" size="sm" className="w-full sm:w-auto">
                    <a href={whatsappLink(rubro.message)} target="_blank" rel="noreferrer">
                      Quiero una igual
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
          title="Lo que vas a lograr con tu web"
          description="La web está pensada para ayudarte a conseguir más resultados y menos fricción en la venta."
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
          title="Así trabajamos"
          description="Un proceso simple y claro para avanzar rápido y llegar a una web lista para vender."
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

      <section id="sobre-mi" className="container py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-[2rem] border border-border/70 bg-gradient-card p-6 shadow-card sm:p-8">
            <img
              src={profileSvg("Diego Podlecki", "Diseño web enfocado en resultados")}
              alt="Foto de perfil de Diego Podlecki"
              className="h-full w-full rounded-[1.5rem] object-cover"
            />
          </div>

          <div className="rounded-[2rem] border border-border/70 bg-gradient-card p-6 shadow-card sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">Quién está detrás</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Quién soy</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Soy Diego Podlecki. Diseño páginas web para negocios que necesitan algo más que “verse bien”: necesitan
              generar consultas, confianza y ventas reales.
            </p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Ayudo a marcas personales y negocios de servicios porque una buena primera impresión puede cambiar por
              completo cuántas personas te escriben.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border/60 bg-background/30 p-4">
                <p className="text-sm font-semibold">Qué hago</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Creo landing pages que presentan tu servicio, generan confianza y empujan a la acción.
                </p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-background/30 p-4">
                <p className="text-sm font-semibold">Por qué ayudo a negocios</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Porque muchas marcas pierden oportunidades por no mostrar bien lo que hacen.
                </p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-background/30 p-4">
                <p className="text-sm font-semibold">Enfoque en resultados</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Todo está pensado para conseguir más consultas, más mensajes y más clientes.
                </p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-background/30 p-4">
                <p className="text-sm font-semibold">Cerca tuyo</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Trabajo de forma simple, directa y sin vueltas para avanzar rápido.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="container py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <div className="rounded-[2rem] border border-border/70 bg-gradient-card p-6 shadow-card sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">Formulario</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">Pedí tu web y empezá a recibir clientes</h2>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                Completá tus datos y te respondo con una propuesta concreta. Te respondo en menos de 24 hs.
              </p>

              <div className="mt-6 space-y-3">
                {["Respuesta rápida y clara", "Ideal para presupuestos, reservas y consultas", "Te respondo en menos de 24 hs"].map(
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
                Tu competencia ya está online. La diferencia es quién convierte mejor.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-primary-foreground/85">
                Si querés una web que genere clientes, te ayudo a construirla con una propuesta clara y enfocada en
                resultados.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Button asChild variant="whatsapp" size="lg" className="w-full">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  Hablar por WhatsApp ahora
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full border-white/30 bg-white/10 text-primary-foreground hover:bg-white/20 hover:text-primary-foreground">
                <a href="#rubros">Ver ejemplos reales</a>
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
