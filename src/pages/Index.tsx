import * as React from "react";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Globe,
  MessageCircle,
  Rocket,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const BRAND = {
  name: "Impulsor Web",
  domain: "webappimpulsor.com",
  tagline: "Webs inteligentes y automatización digital para hacer crecer tu negocio.",
};

const DEFAULT_WA_MESSAGE =
  "Hola, vi tu página web y quiero información sobre desarrollo web o automatización para mi negocio.";

function buildWhatsAppUrl(message: string) {
  const phone = (import.meta.env.VITE_WHATSAPP_PHONE as string | undefined) ?? "";
  const base = phone.trim() ? `https://wa.me/${phone.trim()}` : "https://wa.me/";
  const text = encodeURIComponent(message);
  return `${base}?text=${text}`;
}

function LogoMark({ className }: { className?: string }) {
  return (
    <div className={cn("inline-flex items-center gap-2", className)}>
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true" className="shrink-0">
        <defs>
          <linearGradient id="iwg" x1="4" y1="4" x2="30" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#22d3ee" />
            <stop offset="1" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        <rect x="3.5" y="3.5" width="27" height="27" rx="9" stroke="url(#iwg)" strokeWidth="1.5" />
        <path
          d="M18.2 7.5 10.7 19.1h6.4l-1.3 7.4 7.5-11.6h-6.4l1.3-7.4Z"
          fill="url(#iwg)"
          opacity="0.95"
        />
      </svg>
      <div className="leading-tight">
        <div className="text-sm font-semibold tracking-tight">
          <span className="text-gradient">{BRAND.name.split(" ")[0]}</span>{" "}
          <span className="text-foreground">{BRAND.name.split(" ").slice(1).join(" ")}</span>
        </div>
        <div className="text-xs text-muted-foreground">{BRAND.domain}</div>
      </div>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <div className="mb-3 flex justify-center">
          <Badge className="border-border/80 bg-[hsl(var(--card))]/40 text-foreground/90">{eyebrow}</Badge>
        </div>
      ) : null}
      <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {description ? <p className="mt-3 text-pretty text-muted-foreground">{description}</p> : null}
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div
      data-reveal
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border/70 bg-gradient-card p-5 text-left shadow-card",
        "transition-transform duration-300 hover:-translate-y-1",
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -inset-24 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.16),transparent_55%),radial-gradient(circle_at_80%_60%,rgba(168,85,247,0.14),transparent_55%)]" />
      </div>
      <div className="relative flex items-start gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-background/40">
          <div className="text-[hsl(var(--neon-cyan))]">{icon}</div>
        </div>
        <div>
          <div className="font-semibold tracking-tight">{title}</div>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  bullets,
}: {
  icon: React.ReactNode;
  title: string;
  bullets: string[];
}) {
  return (
    <div
      data-reveal
      className={cn(
        "group relative rounded-2xl border border-border/70 bg-gradient-card p-6 text-left shadow-card",
        "transition-transform duration-300 hover:-translate-y-1",
      )}
    >
      <div className="flex items-center gap-3">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border/60 bg-background/35">
          <div className="text-[hsl(var(--neon-fuchsia))]">{icon}</div>
        </div>
        <div className="text-lg font-semibold tracking-tight">{title}</div>
      </div>
      <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
        {bullets.map((line) => (
          <li key={line} className="flex gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 text-[hsl(var(--neon-cyan))]" />
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ExampleCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div
      data-reveal
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border/70 bg-gradient-card p-6 text-left shadow-card",
        "transition-transform duration-300 hover:-translate-y-1",
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -inset-20 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.18),transparent_55%),radial-gradient(circle_at_90%_60%,rgba(34,211,238,0.12),transparent_55%)]" />
      </div>
      <div className="relative">
        <div className="text-sm text-muted-foreground">{subtitle}</div>
        <div className="mt-2 text-lg font-semibold tracking-tight">{title}</div>
        <div className="mt-4 inline-flex items-center gap-2 text-sm text-foreground/90">
          Ver idea de estructura <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}

export default function Index() {
  React.useEffect(() => {
    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    if (prefersReducedMotion) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    for (const el of elements) el.classList.add("reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.18 },
    );

    for (const el of elements) observer.observe(el);

    let rafId = 0;
    const onMove = (e: PointerEvent) => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        const x = Math.round((e.clientX / window.innerWidth) * 100);
        const y = Math.round((e.clientY / window.innerHeight) * 100);
        document.documentElement.style.setProperty("--mouse-x", `${x}%`);
        document.documentElement.style.setProperty("--mouse-y", `${y}%`);
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("pointermove", onMove);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  const [name, setName] = React.useState("");
  const [businessType, setBusinessType] = React.useState("");
  const [message, setMessage] = React.useState("");

  const submitToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const fullMessage = [
      DEFAULT_WA_MESSAGE,
      "",
      name.trim() ? `Nombre: ${name.trim()}` : null,
      businessType.trim() ? `Tipo de negocio: ${businessType.trim()}` : null,
      message.trim() ? `Mensaje: ${message.trim()}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(buildWhatsAppUrl(fullMessage), "_blank", "noopener,noreferrer");
  };

  const floatingUrl = buildWhatsAppUrl(DEFAULT_WA_MESSAGE);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.14),transparent_50%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.14),transparent_50%),radial-gradient(circle_at_60%_90%,rgba(99,102,241,0.12),transparent_45%)]" />
        <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_80%)]" />
        <div className="absolute inset-0 [background-image:var(--gradient-glow)]" />
      </div>

      <header className="sticky top-0 z-30 border-b border-border/40 bg-background/35 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <a href="#top" className="rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <LogoMark />
          </a>
          <div className="hidden items-center gap-6 md:flex">
            <a className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="#servicios">
              Servicios
            </a>
            <a className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="#ejemplos">
              Ejemplos
            </a>
            <a className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="#diagnostico">
              Diagnóstico
            </a>
            <Button asChild variant="whatsapp" size="sm">
              <a href={floatingUrl} target="_blank" rel="noreferrer">
                <MessageCircle />
                WhatsApp
              </a>
            </Button>
          </div>
          <div className="md:hidden">
            <Button asChild variant="whatsapp" size="sm">
              <a href={floatingUrl} target="_blank" rel="noreferrer" aria-label="Hablar por WhatsApp">
                <MessageCircle />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="container pb-16 pt-14 sm:pb-20 sm:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex flex-wrap justify-center gap-2">
              <Badge className="border-border/80 bg-background/40 text-foreground/90">
                <Sparkles className="mr-1 h-3.5 w-3.5 text-[hsl(var(--neon-cyan))]" />
                Micro-agencia para negocios reales
              </Badge>
              <Badge className="border-border/80 bg-background/40 text-foreground/90">
                <Zap className="mr-1 h-3.5 w-3.5 text-[hsl(var(--neon-fuchsia))]" />
                Entrega express
              </Badge>
            </div>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Convierte tu presencia digital en una <span className="text-gradient">máquina de conseguir clientes</span>.
            </h1>
            <p className="mt-5 text-pretty text-muted-foreground sm:text-lg">
              Desarrollo webs modernas y automatizo procesos con inteligencia artificial para profesionales, gimnasios y
              pequeños negocios.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button asChild variant="hero" size="lg" className="justify-center">
                <a href="#diagnostico">
                  Solicitar diagnóstico gratuito <ArrowRight />
                </a>
              </Button>
              <Button asChild variant="whatsapp" size="lg" className="justify-center">
                <a href={floatingUrl} target="_blank" rel="noreferrer">
                  Hablar por WhatsApp <MessageCircle />
                </a>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              {BRAND.tagline} <span className="text-foreground/70">Sin compromiso.</span>
            </p>
          </div>
        </section>

        <section className="container py-16 sm:py-20">
          <SectionHeader
            eyebrow="Problema"
            title="La mayoria de los negocios pierde clientes en internet."
            description="Muchos profesionales y negocios tienen presencia digital debil o inexistente. Una web lenta, desactualizada o inexistente puede estar haciendo que potenciales clientes elijan a tu competencia."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <FeatureCard
              icon={<Zap className="h-5 w-5" />}
              title="Consultas que se pierden"
              description="Si no respondes rapido o no inspiras confianza, el cliente se va con otro."
            />
            <FeatureCard
              icon={<Globe className="h-5 w-5" />}
              title="Web que no convierte"
              description="Una página bonita no alcanza: tiene que guiar al usuario a pedir info."
            />
            <FeatureCard
              icon={<Bot className="h-5 w-5" />}
              title="Tareas manuales"
              description="Mensajes, turnos, presupuestos: podés automatizar lo repetitivo."
            />
          </div>
        </section>

        <section className="container py-16 sm:py-20">
          <SectionHeader
            eyebrow="Solución"
            title="Transforma tu negocio con herramientas digitales modernas."
            description="Construimos una presencia online que vende y automatizamos pasos clave para que te enfoques en atender mejor."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Globe className="h-5 w-5" />}
              title="Web profesional moderna"
              description="Diseño limpio tipo startup, rápido, con copy que convierte y CTA claros."
            />
            <FeatureCard
              icon={<Bot className="h-5 w-5" />}
              title="Automatizacion de tareas"
              description="Respuestas automaticas, formularios a WhatsApp y flujos simples con IA."
            />
            <FeatureCard
              icon={<Rocket className="h-5 w-5" />}
              title="Captacion de clientes"
              description="Estructura pensada para generar consultas: menos rebote, más contactos."
            />
            <FeatureCard
              icon={<MessageCircle className="h-5 w-5" />}
              title="Integracion con WhatsApp"
              description="Botón flotante, mensajes pre-escritos y atajos para responder más rápido."
            />
            <FeatureCard
              icon={<Smartphone className="h-5 w-5" />}
              title="Optimizacion mobile"
              description="La mayoria llega desde el celular. La experiencia es mobile-first."
            />
          </div>
        </section>

        <section id="servicios" className="container py-16 sm:py-20">
          <SectionHeader eyebrow="Servicios" title="Servicios que impulsan negocios." />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <ServiceCard
              icon={<Globe className="h-5 w-5" />}
              title="Web Profesional Express"
              bullets={[
                "Entrega rápida (3 a 5 días)",
                "Diseño moderno optimizado para móviles",
                "Integracion con WhatsApp",
              ]}
            />
            <ServiceCard
              icon={<Bot className="h-5 w-5" />}
              title="Automatizacion con IA"
              bullets={[
                "Automatizacion de procesos simples",
                "Respuestas automaticas",
                "Flujos inteligentes y seguimiento",
              ]}
            />
            <ServiceCard
              icon={<Rocket className="h-5 w-5" />}
              title="Presencia digital profesional"
              bullets={[
                "Imagen moderna online",
                "Copy y estructura que convierte",
                "Herramientas para atraer clientes",
              ]}
            />
          </div>
        </section>

        <section id="ejemplos" className="container py-16 sm:py-20">
          <SectionHeader
            eyebrow="Ejemplos"
            title="Ejemplos de proyectos posibles."
            description="Ideas tipicas para profesionales y negocios locales. Adaptable a tu rubro."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <ExampleCard title="Web para entrenador personal" subtitle="Plan, pricing y turnos" />
            <ExampleCard title="Web para psicólogo" subtitle="Confianza, agenda y contacto" />
            <ExampleCard title="Web para gimnasio" subtitle="Servicios, promos y WhatsApp" />
            <ExampleCard title="Web para nutricionista" subtitle="Programas, testimonios y reservas" />
          </div>
        </section>

        <section className="container py-16 sm:py-20">
          <SectionHeader eyebrow="Beneficios" title="¿Por qué trabajar conmigo?" />

          <div className="mt-10 grid gap-4 lg:grid-cols-12">
            <div
              data-reveal
              className="lg:col-span-7 rounded-2xl border border-border/70 bg-gradient-card p-6 text-left shadow-card"
            >
              <div className="text-lg font-semibold tracking-tight">Soluciones simples, resultado real</div>
              <p className="mt-2 text-sm text-muted-foreground">
                La idea no es complicarte: es darte una web que convierta y automatizaciones prácticas para que atiendas
                más rápido, con menos trabajo manual.
              </p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {[
                  "Soluciones simples y efectivas",
                  "Desarrollo rapido",
                  "Pensado para pequeños negocios",
                  "Comunicacion directa",
                  "Tecnologia moderna",
                ].map((line) => (
                  <div
                    key={line}
                    className="flex items-start gap-2 rounded-xl border border-border/60 bg-background/25 px-3 py-2"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-[hsl(var(--neon-cyan))]" />
                    <span className="text-sm text-muted-foreground">{line}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              data-reveal
              className="lg:col-span-5 rounded-2xl border border-border/70 bg-gradient-card p-6 text-left shadow-card"
            >
              <div className="text-lg font-semibold tracking-tight">¿Cómo es el proceso?</div>
              <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                {[
                  { n: "1", t: "Diagnóstico gratuito", d: "Veo tu caso y te recomiendo la mejor ruta." },
                  { n: "2", t: "Propuesta clara", d: "Alcance, tiempos y que incluye, sin vueltas." },
                  { n: "3", t: "Implementación", d: "Diseño, desarrollo y puesta online." },
                  { n: "4", t: "Automatizaciones", d: "WhatsApp, formularios y flujos basicos con IA." },
                ].map((step) => (
                  <div key={step.n} className="flex gap-3 rounded-xl border border-border/60 bg-background/25 p-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-primary font-semibold text-[hsl(var(--primary-foreground))]">
                      {step.n}
                    </div>
                    <div>
                      <div className="font-medium text-foreground/90">{step.t}</div>
                      <div className="text-sm">{step.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container py-16 sm:py-20">
          <div
            data-reveal
            className={cn(
              "relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-card p-8 text-left shadow-card",
              "sm:p-10",
            )}
          >
            <div className="pointer-events-none absolute inset-0 opacity-90">
              <div className="absolute -inset-24 bg-[radial-gradient(circle_at_20%_30%,rgba(34,211,238,0.18),transparent_55%),radial-gradient(circle_at_85%_55%,rgba(168,85,247,0.16),transparent_55%)]" />
            </div>

            <div className="relative grid items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <h3 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                  Haz que tu negocio trabaje para ti en internet.
                </h3>
                <p className="mt-3 text-muted-foreground">Recibe información sin compromiso.</p>
              </div>
              <div className="lg:col-span-4">
                <Button asChild variant="hero" size="lg" className="w-full justify-center">
                  <a href="#diagnostico">
                    Quiero mejorar mi presencia digital <ArrowRight />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="diagnostico" className="container py-16 sm:py-20">
          <SectionHeader
            eyebrow="Contacto"
            title="Solicita tu diagnóstico gratuito"
            description="Completa el formulario y abrimos WhatsApp con un mensaje listo para enviar."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            <form
              onSubmit={submitToWhatsApp}
              className="lg:col-span-7 rounded-2xl border border-border/70 bg-gradient-card p-6 text-left shadow-card"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-medium text-foreground/90">Nombre</span>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre"
                    className={cn(
                      "h-11 w-full rounded-xl border border-border bg-background/40 px-3 text-sm text-foreground",
                      "placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring",
                    )}
                    autoComplete="name"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-medium text-foreground/90">Tipo de negocio</span>
                  <input
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    placeholder="Ej: gimnasio, psicologia, nutricion..."
                    className={cn(
                      "h-11 w-full rounded-xl border border-border bg-background/40 px-3 text-sm text-foreground",
                      "placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring",
                    )}
                    autoComplete="organization"
                  />
                </label>
              </div>

              <label className="mt-4 block space-y-2">
                <span className="text-sm font-medium text-foreground/90">Mensaje</span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Contame qué necesitás (web, automatización, turnos, presupuestos...)"
                  rows={5}
                  className={cn(
                    "w-full resize-none rounded-xl border border-border bg-background/40 px-3 py-3 text-sm text-foreground",
                    "placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring",
                  )}
                />
              </label>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Button type="submit" variant="hero" size="lg" className="justify-center">
                  Enviar por WhatsApp <MessageCircle />
                </Button>
                <div className="text-xs text-muted-foreground">Se abre una nueva pestaña con el mensaje listo.</div>
              </div>
              <div className="mt-4 text-xs text-muted-foreground">
                Podés configurar el número en <code className="text-foreground/80">VITE_WHATSAPP_PHONE</code>.
              </div>
            </form>

            <div className="space-y-4 lg:col-span-5">
              <div data-reveal className="rounded-2xl border border-border/70 bg-gradient-card p-6 text-left shadow-card">
                <div className="text-lg font-semibold tracking-tight">¿Qué incluye el diagnóstico?</div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {[
                    "Recomendacion de estructura y copy",
                    "Sugerencias de automatización rápida",
                    "Estimación de tiempos",
                    "Siguiente paso claro",
                  ].map((line) => (
                    <li key={line} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-[hsl(var(--neon-cyan))]" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div data-reveal className="rounded-2xl border border-border/70 bg-gradient-card p-6 text-left shadow-card">
                <div className="text-lg font-semibold tracking-tight">Tip</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Si ya tenes web, pasame el link. Si no, te pregunto 3 cosas y la armamos desde cero.
                </p>
                <div className="mt-4">
                  <Button asChild variant="whatsapp" className="w-full justify-center">
                    <a href={floatingUrl} target="_blank" rel="noreferrer">
                      Hablar ahora <ArrowRight />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-border/40 bg-background/25">
          <div className="container flex flex-col gap-2 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <LogoMark className="opacity-90" />
              <span className="hidden sm:inline">|</span>
              <span>
                {new Date().getFullYear()} © {BRAND.name}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a className="transition-colors hover:text-foreground" href="#servicios">
                Servicios
              </a>
              <a className="transition-colors hover:text-foreground" href="#diagnostico">
                Contacto
              </a>
              <a
                className="transition-colors hover:text-foreground"
                href={floatingUrl}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </footer>
      </main>

      <a
        href={floatingUrl}
        target="_blank"
        rel="noreferrer"
        className={cn(
          "fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold",
          "bg-[hsl(142,70%,45%)] text-white shadow-[0_18px_50px_-18px_rgba(34,211,238,0.35)]",
          "transition-transform duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        )}
        aria-label="Abrir WhatsApp con mensaje pre-escrito"
      >
        <span className="absolute -inset-2 -z-10 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.20),transparent_60%)] blur-xl" />
        <MessageCircle className="h-5 w-5" />
        WhatsApp
      </a>
    </div>
  );
}
