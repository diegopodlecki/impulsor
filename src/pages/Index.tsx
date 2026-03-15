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
  Users,
  Brain,
  Dumbbell,
  Heart,
  Building2,
  Stethoscope,
  Calendar,
  Clock,
  Star,
  Send,
  Eye,
  Target,
  Award,
  ChevronRight,
} from "lucide-react";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const BRAND = {
  name: "WebAppImpulsor",
  domain: "webappimpulsor.com",
  tagline: "Páginas web profesionales que generan consultas por WhatsApp.",
};

const DEFAULT_WA_MESSAGE =
  "Hola, vi tu página web y quiero información sobre tus servicios.";

const GOOGLE_SHEETS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx9Z8g7bTOZkpApdktK7J5IaUywu5mFLqpMG2F6873kYU_jfLGRAqe1QrG8uiCYiyek/exec";

// Plantilla del mensaje post-formulario (incluye los datos del lead).
function buildFormWhatsAppMessage(params: {
  name: string;
  businessType: string;
  email: string;
  message: string;
}) {
  const safeName = params.name.trim();
  const safeBusiness = params.businessType.trim();
  const safeEmail = params.email.trim();
  const safeMessage = params.message.trim();

  return [
    safeName ? `Hola, soy ${safeName}.` : "Hola,",
    safeBusiness ? `Tengo un negocio de ${safeBusiness}.` : null,
    "",
    "Acabo de enviar un formulario desde tu página web y quiero información sobre desarrollo web o automatización para mi negocio.",
    safeEmail ? "" : null,
    safeEmail ? `Mi email: ${safeEmail}` : null,
    safeMessage ? "" : null,
    safeMessage ? `Mensaje: ${safeMessage}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}

function buildWhatsAppUrl(message: string) {
  // WhatsApp click-to-chat expects international format without +, spaces, or leading 0/15.
  // User requested: 01166448389 (AR) -> 541166448389
  const phone = (((import.meta.env.VITE_WA_PHONE as string | undefined) ?? "541166448389") + "").replace(/\D/g, "");
  const text = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${text}`;
}

function LogoMark({ className }: { className?: string }) {
  const [brandFirst, ...brandRest] = BRAND.name.split(" ");
  const brandRestText = brandRest.join(" ").trim();

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
          <span className="text-gradient">{brandFirst}</span>
          {brandRestText ? (
            <>
              {" "}
              <span className="text-foreground">{brandRestText}</span>
            </>
          ) : null}
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
      <div className="mx-auto mt-4 h-px w-28 bg-gradient-primary gradient-animate opacity-80" />
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
        "card-neon group relative overflow-hidden rounded-2xl border border-border/70 bg-gradient-card p-5 text-left shadow-card",
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
        "card-neon group relative rounded-2xl border border-border/70 bg-gradient-card p-6 text-left shadow-card",
        "transition-transform duration-300 hover:-translate-y-1",
      )}
    >
      <div className="flex items-center gap-3">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border/60 bg-background/35">
        <div className="text-[hsl(var(--neon-purple))]">{icon}</div>
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

function ExampleCard({ title, subtitle, href }: { title: string; subtitle: string; href: string }) {
  // Nota: usamos BASE_URL para que funcione bien en GitHub Pages o subcarpetas.
  const withBase = (path: string) => {
    const base = (import.meta.env.BASE_URL ?? "/") + "";
    const normalizedBase = base.endsWith("/") ? base : `${base}/`;
    const normalizedPath = (path ?? "").replace(/^\//, "");
    return `${normalizedBase}${normalizedPath}`;
  };
  const resolvedHref = withBase(href);

  return (
    <a
      href={resolvedHref}
      target="_blank"
      rel="noopener noreferrer"
      data-reveal
      className={cn(
        "card-neon group relative block overflow-hidden rounded-2xl border border-border/70 bg-gradient-card p-6 text-left shadow-card",
        "cursor-pointer transition-transform duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
      )}
      aria-label={`Ver demo: ${title} (se abre en nueva pestaña)`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -inset-20 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.18),transparent_55%),radial-gradient(circle_at_90%_60%,rgba(34,211,238,0.12),transparent_55%)]" />
      </div>
      <div className="relative">
        <div className="text-sm text-muted-foreground">{subtitle}</div>
        <div className="mt-2 text-lg font-semibold tracking-tight">{title}</div>
        <div className="mt-4 inline-flex items-center gap-2 text-sm text-foreground/90">
          Ver demo del sitio{" "}
          <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </div>
      </div>
    </a>
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
  const [email, setEmail] = React.useState("");
  const [businessType, setBusinessType] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [statusText, setStatusText] = React.useState("");

  const [leadStage, setLeadStage] = React.useState<"idle" | "sending" | "sent">("idle");
  const [preparedWhatsAppUrl, setPreparedWhatsAppUrl] = React.useState<string>("");

  const webhookUrl = ((import.meta.env.VITE_LEADS_WEBHOOK_URL as string | undefined) ?? "").trim();

  const persistLeadLocally = React.useCallback((lead: Record<string, unknown>) => {
    // Demo real: guardamos el lead localmente para que se vea el "registro" aunque el webhook no esté configurado
    // o falle por CORS.
    try {
      const key = "impulsorweb_leads";
      const current = JSON.parse(localStorage.getItem(key) ?? "[]");
      const next = Array.isArray(current) ? current : [];
      next.unshift(lead);
      localStorage.setItem(key, JSON.stringify(next.slice(0, 50)));
    } catch {
      // Optional: localStorage puede fallar en modo privado o por políticas del navegador.
    }
  }, []);

  const sendLead = React.useCallback(
    (payload: Record<string, unknown>) => {
      persistLeadLocally(payload);
      if (!webhookUrl) return;

      try {
        if (navigator.sendBeacon) {
          const blob = new Blob([JSON.stringify(payload)], { type: "application/json" });
          navigator.sendBeacon(webhookUrl, blob);
          return;
        }
      } catch {
        // Fall through to fetch.
      }

      void fetch(webhookUrl, {
        method: "POST",
        body: JSON.stringify(payload),
        // Para compatibilidad (GAS/PHP) evitamos preflight/CORS usando no-cors y sin headers custom.
        // El webhook puede leer el body como texto y parsear JSON.
        mode: "no-cors",
        keepalive: true,
      }).catch(() => {
        // Silent: la demo debe seguir (el visitante igual puede continuar por WhatsApp).
      });
    },
    [persistLeadLocally, webhookUrl],
  );

  const submitLead = React.useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (leadStage !== "idle") return;
    setLeadStage("sending");
    setStatusText("Enviando...");

    const leadId = (crypto?.randomUUID?.() ?? `lead_${Math.random().toString(16).slice(2)}`).slice(0, 40);
    const fecha = new Date().toISOString();

    const waMessage = buildFormWhatsAppMessage({
      name,
      businessType,
      email,
      message,
    });
    setPreparedWhatsAppUrl(buildWhatsAppUrl(waMessage));

    const googlePayload = {
      nombre: name.trim(),
      email: email.trim(),
      mensaje: message.trim(),
      origen: "landing webappimpulsor",
    };

    try {
      const response = await fetch(GOOGLE_SHEETS_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(googlePayload),
      });

      const result = (await response.json().catch(() => null)) as { result?: string } | null;

      if (result?.result === "success") {
        setStatusText("Mensaje enviado correctamente");

        sendLead({
          id: leadId,
          nombre: name.trim(),
          email: email.trim(),
          negocio: businessType.trim(),
          mensaje: message.trim(),
          fecha,
          source: "landing",
          path: window.location.pathname,
          referrer: document.referrer || null,
          userAgent: navigator.userAgent,
        });

        setName("");
        setEmail("");
        setBusinessType("");
        setMessage("");
        setLeadStage("sent");
        toast.success("Gracias. Tu consulta quedó registrada. Continuá por WhatsApp para terminar de enviarla.");
      } else {
        setStatusText("Error al enviar");
        setLeadStage("idle");
      }
    } catch {
      setStatusText("Error de conexión");
      setLeadStage("idle");
    }
  }, [businessType, email, leadStage, message, name, sendLead]);

  const openPreparedWhatsApp = React.useCallback(() => {
    if (!preparedWhatsAppUrl) return;
    window.open(preparedWhatsAppUrl, "_blank", "noopener,noreferrer");
    toast.success("Listo: se abrió WhatsApp con el mensaje preparado.");
  }, [preparedWhatsAppUrl]);

  const floatingUrl = buildWhatsAppUrl(DEFAULT_WA_MESSAGE);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(34,211,238,0.18),transparent_52%),radial-gradient(circle_at_82%_24%,rgba(168,85,247,0.18),transparent_50%),radial-gradient(circle_at_58%_92%,rgba(99,102,241,0.16),transparent_48%)]" />
        <div className="absolute inset-0 opacity-80 bg-tech-lines" />
        <div className="absolute inset-0 [background-image:var(--gradient-glow)]" />
        <div className="absolute -inset-[20%] opacity-45 blur-2xl bg-gradient-primary gradient-animate [mask-image:radial-gradient(circle_at_center,black_18%,transparent_60%)]" />
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
            <a className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="#como-funciona">
              Cómo funciona
            </a>
            <a className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="#ejemplos">
              Ejemplos
            </a>
            <a className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="#para-quien">
              Para quién
            </a>
            <a className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="#precios">
              Precios
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
                Webs profesionales para profesionales
              </Badge>
              <Badge className="border-border/80 bg-background/40 text-foreground/90">
                <Zap className="mr-1 h-3.5 w-3.5 text-[hsl(var(--neon-purple))]" />
                Entrega en 72 horas
              </Badge>
            </div>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Tu página web profesional <span className="text-gradient gradient-animate">en 72 horas</span>
            </h1>
            <p className="mt-5 text-pretty text-muted-foreground sm:text-lg">
              Diseñada para que tus clientes te encuentren y te escriban directamente por WhatsApp.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button asChild variant="hero" size="lg" className="justify-center glow-neon">
                <a href="#diagnostico">
                  Quiero mi página web <Send className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="justify-center border-border/60 hover:bg-background/40">
                <a href="#ejemplos">
                  Ver cómo sería tu página <Eye className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              {BRAND.tagline} <span className="text-foreground/70">Sin compromiso.</span>
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                {
                  icon: <Clock className="h-5 w-5" />,
                  t: "Entrega en 72 horas",
                  d: "Web lista rápido para empezar a recibir clientes.",
                },
                {
                  icon: <MessageCircle className="h-5 w-5" />,
                  t: "WhatsApp integrado",
                  d: "Tus clientes te contactan sin fricción.",
                },
                {
                  icon: <Target className="h-5 w-5" />,
                  t: "Enfocado en conversión",
                  d: "Diseño que genera clientes reales.",
                },
              ].map((item) => (
                <div
                  key={item.t}
                  data-reveal
                  className="card-neon rounded-2xl border border-border/70 bg-gradient-card p-4 text-left shadow-card"
                >
                  <div className="flex items-start gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-background/40">
                      <span className="text-[hsl(var(--neon-blue))]">{item.icon}</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold tracking-tight">{item.t}</div>
                      <div className="mt-1 text-xs text-muted-foreground">{item.d}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container py-16 sm:py-20">
          <SectionHeader
            eyebrow="Problema"
            title="La mayoría de los negocios pierde clientes en internet."
            description="Muchos profesionales y pequeños negocios tienen presencia digital débil o inexistente. Una web lenta, desactualizada o inexistente puede hacer que potenciales clientes elijan a tu competencia."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <FeatureCard
              icon={<Zap className="h-5 w-5" />}
              title="Consultas que se pierden"
              description="Si no respondés rápido o no inspirás confianza, el cliente se va con otro."
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
              title="Automatización de tareas repetitivas"
              description="Respuestas automáticas, formularios a WhatsApp y flujos simples con IA."
            />
            <FeatureCard
              icon={<Rocket className="h-5 w-5" />}
              title="Captación de clientes desde internet"
              description="Estructura pensada para generar consultas: menos rebote, más contactos."
            />
            <FeatureCard
              icon={<MessageCircle className="h-5 w-5" />}
              title="Integración con WhatsApp"
              description="Botón flotante, mensajes pre-escritos y atajos para responder más rápido."
            />
            <FeatureCard
              icon={<Smartphone className="h-5 w-5" />}
              title="Optimización total para móviles"
              description="La mayoría llega desde el celular. La experiencia es mobile-first."
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
                "Integración con WhatsApp",
              ]}
            />
            <ServiceCard
              icon={<Bot className="h-5 w-5" />}
              title="Automatización con IA"
              bullets={[
                "Automatización de tareas",
                "Respuestas automáticas",
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

        <section id="como-funciona" className="container py-16 sm:py-20">
          <SectionHeader eyebrow="Cómo funciona" title="En 3 pasos, listo para convertir." />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {[
              {
                icon: <Users className="h-6 w-6" />,
                n: "1",
                t: "Nos cuentas sobre tu negocio",
                d: "Objetivo, rubro y qué servicios ofrecés. Sin complicación.",
              },
              {
                icon: <Brain className="h-6 w-6" />,
                n: "2",
                t: "Diseñamos tu página profesional",
                d: "Web moderna, optimizada para móviles y enfocada en convertir.",
              },
              {
                icon: <MessageCircle className="h-6 w-6" />,
                n: "3",
                t: "Empiezas a recibir consultas",
                d: "Con WhatsApp integrado, tus clientes te escriben directamente.",
              },
            ].map((step) => (
              <div
                key={step.n}
                data-reveal
                className="card-neon group relative rounded-2xl border border-border/70 bg-gradient-card p-6 text-left shadow-card transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -inset-24 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.16),transparent_55%),radial-gradient(circle_at_80%_60%,rgba(168,85,247,0.14),transparent_55%)]" />
                </div>
                <div className="relative flex flex-col items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary gradient-animate text-[hsl(var(--primary-foreground))] font-semibold shadow-glow">
                    {step.icon}
                  </div>
                  <div>
                    <div className="text-lg font-semibold tracking-tight">{step.t}</div>
                    <p className="mt-1 text-sm text-muted-foreground">{step.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="automatizacion" className="container py-16 sm:py-20">
          <SectionHeader
            eyebrow="Demostración"
            title="Así funciona una captación moderna (en vivo)."
            description="Este sitio muestra el flujo completo: formulario → lead registrado → WhatsApp listo para enviar."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: <Globe className="h-5 w-5" />,
                    title: "1) Visitante entra a la web",
                    description: "Llega desde redes/Google y ve CTAs claros (hero + botón flotante).",
                  },
                  {
                    icon: <Smartphone className="h-5 w-5" />,
                    title: "2) Completa el formulario",
                    description: "Nombre, email, tipo de negocio y mensaje. Sin fricción, mobile-first.",
                  },
                  {
                    icon: <Zap className="h-5 w-5" />,
                    title: "3) Lead se registra automáticamente",
                    description: "Se envía por fetch() a un webhook (Google Apps Script o PHP) con fecha incluida.",
                  },
                  {
                    icon: <MessageCircle className="h-5 w-5" />,
                    title: "4) Se abre WhatsApp con mensaje listo",
                    description: "Confirmación visual + botón grande para continuar con texto prellenado.",
                  },
                ].map((step) => (
                  <FeatureCard key={step.title} icon={step.icon} title={step.title} description={step.description} />
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 space-y-4">
              <div data-reveal className="card-neon rounded-2xl border border-border/70 bg-gradient-card p-6 text-left shadow-card">
                <div className="text-lg font-semibold tracking-tight">Estado del webhook</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Leads enviados a Google Sheets (Apps Script).
                  {webhookUrl ? " Además, hay un webhook extra configurado por entorno." : null}
                </p>
                <div className="mt-4 rounded-xl border border-border/60 bg-background/25 px-3 py-2 text-xs text-muted-foreground">
                  Tip: agrega <span className="text-foreground/90">VITE_WA_PHONE</span> y (opcional){" "}
                  <span className="text-foreground/90">VITE_LEADS_WEBHOOK_URL</span> para adaptar la demo a tu negocio.
                </div>
              </div>

              <div data-reveal className="card-neon rounded-2xl border border-border/70 bg-gradient-card p-6 text-left shadow-card">
                <div className="text-lg font-semibold tracking-tight">¿Para qué sirve?</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Este mismo flujo se puede aplicar a reservas, presupuestos, turnos, onboarding o soporte: captás el lead,
                  lo registrás y lo llevás a conversación con 1 click.
                </p>
                <div className="mt-4">
                  <Button asChild variant="hero" className="w-full justify-center">
                    <a href="#diagnostico">
                      Quiero esta automatización <ArrowRight />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="ejemplos" className="container py-16 sm:py-20">
          <SectionHeader
            eyebrow="Ejemplos"
            title="Así podría verse la página web de tu negocio."
            description="Abrí una demo (se abre en una nueva pestaña) y mirá cómo se sentiría tu marca online."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <ExampleCard
              title="Web para Entrenador Personal"
              subtitle="Plan, pricing y turnos"
              href="/demos/personal-trainer.html"
            />
            <ExampleCard title="Web para Psicólogo" subtitle="Confianza, agenda y contacto" href="/demos/psicologo.html" />
            <ExampleCard title="Web para Gimnasio" subtitle="Servicios, promos y WhatsApp" href="/demos/gimnasio.html" />
            <ExampleCard title="Web para Nutricionista" subtitle="Programas, testimonios y reservas" href="/demos/nutricionista.html" />
            <ExampleCard title="Web para Casa de Comidas" subtitle="Menú, reservas y delivery" href="/demos/casas-de-comidas.html" />
            <ExampleCard
              title="Web para Estética Corporal"
              subtitle="Tratamientos, turnos y promos"
              href="/demos/estetica-corporal.html"
            />
          </div>
        </section>

        <section id="para-quien" className="container py-16 sm:py-20">
          <SectionHeader
            eyebrow="¿Para quién?"
            title="Ideal para profesionales que quieren más clientes"
            description="Si tu negocio depende de que nuevos clientes te encuentren y te contacten, una página web profesional puede marcar la diferencia."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { icon: <Dumbbell className="h-8 w-8" />, title: "Entrenadores Personales", desc: "Planes, precios y turnos" },
              { icon: <Brain className="h-8 w-8" />, title: "Psicólogos", desc: "Confianza y agenda" },
              { icon: <Heart className="h-8 w-8" />, title: "Nutricionistas", desc: "Programas y resultados" },
              { icon: <Building2 className="h-8 w-8" />, title: "Gimnasios", desc: "Servicios y promos" },
              { icon: <Stethoscope className="h-8 w-8" />, title: "Profesionales independientes", desc: "Servicios y contacto" },
            ].map((item) => (
              <div
                key={item.title}
                data-reveal
                className="card-neon group relative rounded-2xl border border-border/70 bg-gradient-card p-5 text-center shadow-card transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -inset-24 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.16),transparent_55%),radial-gradient(circle_at_80%_60%,rgba(168,85,247,0.14),transparent_55%)]" />
                </div>
                <div className="relative flex flex-col items-center gap-3">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border/60 bg-background/40 text-[hsl(var(--neon-cyan))]">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-semibold tracking-tight">{item.title}</div>
                    <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="precios" className="container py-16 sm:py-20">
          <SectionHeader
            eyebrow="Inversión"
            title="Planes simples"
            description="Landing profesional desde 180 USD. Todo lo esencial para verte profesional y recibir consultas por WhatsApp."
          />
          <div className="mt-10 flex justify-center">
            <div
              data-reveal
              className="card-neon group relative max-w-md rounded-2xl border border-border/70 bg-gradient-card p-8 text-center shadow-card transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -inset-24 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.2),transparent_55%),radial-gradient(circle_at_80%_60%,rgba(168,85,247,0.18),transparent_55%)]" />
              </div>
              <div className="relative">
                <div className="text-lg font-semibold tracking-tight text-muted-foreground">Landing profesional desde</div>
                <div className="mt-2 flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold tracking-tight text-gradient gradient-animate">$180</span>
                  <span className="text-muted-foreground">USD</span>
                </div>
                <div className="mt-6 space-y-3 text-left">
                  {[
                    "Diseño moderno",
                    "Optimización para celular",
                    "Botón de contacto por WhatsApp",
                    "Formulario de consultas",
                    "Publicación online",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-[hsl(var(--neon-cyan))]" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button asChild variant="hero" size="lg" className="w-full justify-center glow-neon">
                    <a href="#diagnostico">
                      Solicitar mi página web <Send className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonios" className="container py-16 sm:py-20">
          <SectionHeader
            eyebrow="Testimonios"
            title="Profesionales que ahora reciben consultas más fácil"
            description="Ejemplos temporales para mostrar el estilo. Los reemplazamos por testimonios reales cuando tengas."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {[
              {
                quote:
                  "Mi página web me permitió mostrar mejor mis servicios y ahora recibo consultas directamente por WhatsApp.",
                who: "Entrenador personal",
              },
              {
                quote: "Es una forma simple de tener presencia profesional online. La gente entiende qué hago en segundos.",
                who: "Nutricionista",
              },
              {
                quote: "Ahora puedo enviar mi web a mis pacientes y explicar mis servicios fácilmente. Genera confianza.",
                who: "Psicóloga",
              },
            ].map((t) => (
              <div
                key={t.who}
                data-reveal
                className="card-neon group relative rounded-2xl border border-border/70 bg-gradient-card p-6 text-left shadow-card transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -inset-24 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.16),transparent_55%),radial-gradient(circle_at_80%_60%,rgba(168,85,247,0.14),transparent_55%)]" />
                </div>
                <div className="relative">
                  <div className="mb-4 flex items-center gap-1 text-[hsl(var(--neon-cyan))]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">“{t.quote}”</p>
                  <div className="mt-5 text-sm font-semibold tracking-tight text-foreground/90">— {t.who}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="container py-16 sm:py-20">
          <SectionHeader eyebrow="Beneficios" title="¿Por qué trabajar conmigo?" />

          <div className="mt-10 grid gap-4 lg:grid-cols-12">
            <div
              data-reveal
              className="card-neon lg:col-span-7 rounded-2xl border border-border/70 bg-gradient-card p-6 text-left shadow-card"
            >
              <div className="text-lg font-semibold tracking-tight">Soluciones simples, resultado real</div>
              <p className="mt-2 text-sm text-muted-foreground">
                La idea no es complicarte: es darte una web que convierta y automatizaciones prácticas para que atiendas
                más rápido, con menos trabajo manual.
              </p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {[
                  "Soluciones simples y efectivas",
                  "Desarrollo rápido y directo",
                  "Pensado para pequeños negocios",
                  "Comunicación directa",
                  "Tecnología moderna",
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
              className="card-neon lg:col-span-5 rounded-2xl border border-border/70 bg-gradient-card p-6 text-left shadow-card"
            >
              <div className="text-lg font-semibold tracking-tight">Enfoque CRO (conversión)</div>
              <p className="mt-2 text-sm text-muted-foreground">
                No es solo diseño: la página guía al visitante para que te escriba.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {[
                  "CTA visibles en hero y secciones clave",
                  "Estructura por intención (problema → solución → servicios → contacto)",
                  "WhatsApp con mensaje pre-escrito para bajar fricción",
                  "Performance y mobile-first para ganar consultas",
                ].map((line) => (
                  <li key={line} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-[hsl(var(--neon-indigo))]" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button asChild variant="hero" className="w-full justify-center">
                  <a href="#diagnostico">
                    Pedir diagnóstico gratis <ArrowRight />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-16 sm:py-20">
          <div
            data-reveal
            className="card-neon glow-soft mx-auto max-w-4xl rounded-3xl border border-border/70 bg-gradient-card p-8 text-left shadow-card sm:p-10"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="text-sm text-muted-foreground">Confianza</div>
                <h3 className="mt-2 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                  Soluciones digitales simples para negocios reales.
                </h3>
                <p className="mt-3 text-muted-foreground">
                  Trabajo con profesionales y pequeños negocios que necesitan presencia digital moderna y efectiva para
                  generar consultas por WhatsApp.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button asChild variant="hero" className="justify-center">
                  <a href="#diagnostico">
                    Solicitar diagnóstico <ArrowRight />
                  </a>
                </Button>
                <Button asChild variant="whatsapp" className="justify-center">
                  <a href={floatingUrl} target="_blank" rel="noreferrer">
                    Hablar por WhatsApp <MessageCircle />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-16 sm:py-20">
          <div
            data-reveal
            className={cn(
              "card-neon glow-soft relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-card p-8 text-left shadow-card",
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

        <section id="cta-final" className="container py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div data-reveal className="card-neon group relative rounded-2xl border border-border/70 bg-gradient-card p-8 text-center shadow-card">
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -inset-24 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.2),transparent_55%),radial-gradient(circle_at_80%_60%,rgba(168,85,247,0.18),transparent_55%)]" />
              </div>
              <div className="relative">
                <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                  Empieza hoy a tener presencia profesional online
                </h2>
                <p className="mt-3 text-pretty text-muted-foreground">
                  Tu página web lista en pocos días y preparada para recibir nuevos clientes.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <Button asChild variant="whatsapp" size="lg" className="justify-center">
                    <a href={floatingUrl} target="_blank" rel="noreferrer">
                      Hablar por WhatsApp <MessageCircle />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="justify-center border-border/60 hover:bg-background/40">
                    <a href="#precios">
                      Ver precios <ChevronRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="diagnostico" className="container py-16 sm:py-20">
          <SectionHeader
            eyebrow="Contacto"
            title="¿Listo para empezar?"
            description="Escríbenos y te respondemos rápidamente. Tu web profesional está a un mensaje de distancia."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            <form
              onSubmit={submitLead}
              id="contactForm"
              className="card-neon glow-soft lg:col-span-7 rounded-2xl border border-border/70 bg-gradient-card p-6 text-left shadow-card"
            >
              {leadStage === "sent" ? (
                <div className="mb-5 rounded-2xl border border-border/70 bg-background/30 p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-[hsl(var(--neon-cyan))]" />
                    <div>
                      <div className="font-semibold tracking-tight">
                        Gracias por tu mensaje. En breve me pondré en contacto contigo.
                      </div>
                      <div className="mt-1 text-sm text-muted-foreground">
                        Si querés acelerar, continuá por WhatsApp con el mensaje ya prellenado.
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <Button
                      type="button"
                      variant="whatsapp"
                      size="lg"
                      className="w-full justify-center"
                      onClick={openPreparedWhatsApp}
                    >
                      Continuar por WhatsApp <MessageCircle />
                    </Button>
                    <Button
                      type="button"
                      variant="secondary"
                      size="lg"
                      className="w-full justify-center"
                      onClick={() => {
                        setLeadStage("idle");
                        setStatusText("");
                      }}
                    >
                      Editar formulario <ArrowRight />
                    </Button>
                  </div>
                </div>
              ) : null}

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-medium text-foreground/90">Nombre</span>
                  <input
                    id="nombre"
                    name="nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre"
                    className={cn(
                      "h-11 w-full rounded-xl border border-border bg-background/40 px-3 text-sm text-foreground",
                      "placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring",
                    )}
                    autoComplete="name"
                    required
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-medium text-foreground/90">Email</span>
                  <input
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    type="email"
                    className={cn(
                      "h-11 w-full rounded-xl border border-border bg-background/40 px-3 text-sm text-foreground",
                      "placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring",
                    )}
                    autoComplete="email"
                    required
                  />
                </label>
              </div>

              <label className="mt-4 block space-y-2">
                <span className="text-sm font-medium text-foreground/90">Tipo de negocio</span>
                <input
                  name="negocio"
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  placeholder="Ej: gimnasio, psicología, nutrición..."
                  className={cn(
                    "h-11 w-full rounded-xl border border-border bg-background/40 px-3 text-sm text-foreground",
                    "placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring",
                  )}
                  autoComplete="organization"
                />
              </label>

              <label className="mt-4 block space-y-2">
                <span className="text-sm font-medium text-foreground/90">Mensaje</span>
                <textarea
                  id="mensaje"
                  name="mensaje"
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
                <Button type="submit" variant="hero" size="lg" className="justify-center" disabled={leadStage !== "idle"}>
                  {leadStage === "sending" ? "Enviando..." : "Enviar y registrar lead"} <MessageCircle />
                </Button>
                <div className="text-xs text-muted-foreground">
                  Se registra el lead y luego continúas por WhatsApp con un mensaje listo.
                </div>
              </div>
              <div id="status" aria-live="polite" className="mt-3 text-sm text-muted-foreground">
                {statusText}
              </div>
              <div className="mt-4 text-xs text-muted-foreground">
                Este formulario envía tus datos a un webhook (Google Apps Script o PHP) y guarda un registro local para la demo.
              </div>
            </form>

            <div className="space-y-4 lg:col-span-5">
              <div data-reveal className="card-neon rounded-2xl border border-border/70 bg-gradient-card p-6 text-left shadow-card">
                <div className="text-lg font-semibold tracking-tight">¿Qué incluye el diagnóstico?</div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {[
                    "Recomendación de estructura y copy",
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

              <div data-reveal className="card-neon rounded-2xl border border-border/70 bg-gradient-card p-6 text-left shadow-card">
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
              <a className="transition-colors hover:text-foreground" href="#automatizacion">
                Automatización
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
          "transition-transform duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring animate-wa-pulse",
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
