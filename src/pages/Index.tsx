import * as React from "react";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Sparkles,
  Zap,
  Clock,
  Send,
  Eye,
  Target,
  ChevronRight,
} from "lucide-react";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";
import { isSupabaseConfigured } from "@/lib/supabaseClient";
import { cn } from "@/lib/utils";

const BRAND = {
  name: "WebAppImpulsor",
  domain: "webappimpulsor.com",
  tagline: "Páginas web profesionales que generan consultas por WhatsApp.",
};

const DEFAULT_WA_MESSAGE =
  "Hola, vi tu página web y quiero información sobre tus servicios.";

function withBase(path: string) {
  const base = (import.meta.env.BASE_URL ?? "/") + "";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const normalizedPath = (path ?? "").replace(/^\//, "");
  return `${normalizedBase}${normalizedPath}`;
}

// Plantilla del mensaje post-formulario (incluye los datos del lead).
function buildFormWhatsAppMessage(params: {
  name: string;
  email: string;
  note: string;
}) {
  const safeName = params.name.trim();
  const safeEmail = params.email.trim();
  const safeNote = params.note.trim();

  return [
    "Hola! Quiero información para crear mi página web profesional.",
    "",
    "Datos:",
    safeName ? `Nombre: ${safeName}` : null,
    safeEmail ? `Email: ${safeEmail}` : null,
    safeNote ? `Nota: ${safeNote}` : null,
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

function ExampleCard({ title, subtitle, href }: { title: string; subtitle: string; href: string }) {
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
  const [message, setMessage] = React.useState("");
  const [statusText, setStatusText] = React.useState("");

  const [leadStage, setLeadStage] = React.useState<"idle" | "sending" | "sent">("idle");
  const [preparedWhatsAppUrl, setPreparedWhatsAppUrl] = React.useState<string>("");

  const demoOptions = React.useMemo(
    () =>
      [
        { key: "trainer", label: "Entrenador personal", src: "/demos/trainer.html" },
        { key: "psicologo", label: "Psicólogo", src: "/demos/psicologo.html" },
        { key: "nutricionista", label: "Nutricionista", src: "/demos/nutricionista.html" },
        { key: "gimnasio", label: "Gimnasio", src: "/demos/gimnasio.html" },
      ] as const,
    [],
  );

  const [selectedDemoKey, setSelectedDemoKey] = React.useState<(typeof demoOptions)[number]["key"]>("trainer");
  const [iframeSrc, setIframeSrc] = React.useState<string>(withBase("/demos/trainer.html"));
  const [iframeVisible, setIframeVisible] = React.useState(true);
  const iframeTimerRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    return () => {
      if (iframeTimerRef.current) window.clearTimeout(iframeTimerRef.current);
    };
  }, []);

  const selectDemo = React.useCallback(
    (key: (typeof demoOptions)[number]["key"]) => {
      if (key === selectedDemoKey) return;
      const next = demoOptions.find((d) => d.key === key);
      if (!next) return;

      setSelectedDemoKey(key);
      setIframeVisible(false);

      if (iframeTimerRef.current) window.clearTimeout(iframeTimerRef.current);
      iframeTimerRef.current = window.setTimeout(() => {
        setIframeSrc(withBase(next.src));
        setIframeVisible(true);
      }, 180);
    },
    [demoOptions, selectedDemoKey],
  );

  const [calcBusiness, setCalcBusiness] = React.useState("Entrenador personal");
  const [calcPageType, setCalcPageType] = React.useState<"landing" | "profesional" | "completa">("landing");
  const [extraWhatsapp, setExtraWhatsapp] = React.useState(true);
  const [extraForm, setExtraForm] = React.useState(true);
  const [extraMobile, setExtraMobile] = React.useState(true);
  const [extraCustom, setExtraCustom] = React.useState(false);

  const calcPrice = React.useMemo(() => {
    const base =
      calcPageType === "landing" ? 150 : calcPageType === "profesional" ? 250 : calcPageType === "completa" ? 350 : 150;
    const extras =
      (extraWhatsapp ? 20 : 0) +
      (extraForm ? 30 : 0) +
      (extraMobile ? 40 : 0) +
      (extraCustom ? 60 : 0);
    return base + extras;
  }, [calcPageType, extraCustom, extraForm, extraMobile, extraWhatsapp]);

  const calcWhatsAppUrl = React.useMemo(() => {
    const msg = `Hola, quiero crear mi página web. El simulador me dio un precio aproximado de ${calcPrice} USD.`;
    return buildWhatsAppUrl(msg);
  }, [calcPrice]);

  const handleSubmit = React.useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submit ejecutado");
    if (leadStage !== "idle") return;
    setLeadStage("sending");
    setStatusText("Enviando...");

    const leadId = (crypto?.randomUUID?.() ?? `lead_${Math.random().toString(16).slice(2)}`).slice(0, 40);
    const fecha = new Date().toISOString();

    const waMessage = buildFormWhatsAppMessage({ name, email, note: message });
    setPreparedWhatsAppUrl(buildWhatsAppUrl(waMessage));

    try {
      console.log("[supabase]", { disponible: Boolean(supabase) });
      if (!supabase) throw new Error("Supabase no está configurado en este build.");

      const nombre = name.trim();
      const correo = email.trim();
      const nota = message.trim();
      console.log("[form vars]", { nombre, email: correo, nota });

      if (!nombre || !correo || !nota) {
        throw new Error("Completá nombre, email y mensaje antes de enviar.");
      }

      const mensajeDb = [
        nota ? `Mensaje: ${nota}` : null,
        `Fuente: landing`,
        `Lead ID: ${leadId}`,
        `Fecha: ${fecha}`,
      ]
        .filter(Boolean)
        .join("\n");

      console.log("[formularios payload]", { nombre, email: correo, mensaje: mensajeDb });

      const { data: userData, error: userError } = await supabase.auth.getUser();
      if (userError) throw userError;

      const userId = userData.user?.id ?? null;

      const { data, error } = await supabase.from("formularios").insert([
        {
          nombre,
          email: correo,
          mensaje: mensajeDb,
          user_id: userId,
        },
      ]);

      console.log("[formularios insert]", { data, error });
      if (error) throw error;

      setStatusText("Mensaje guardado correctamente");
      setName("");
      setEmail("");
      setMessage("");
      setLeadStage("sent");
      toast.success("Mensaje enviado. Si querés acelerar, continuá por WhatsApp con el mensaje prellenado.");
    } catch (err) {
      console.log("[formularios error]", err);
      const messageText =
        typeof err === "object" && err && "message" in err ? String((err as { message: unknown }).message) : "Error";
      toast.error(messageText);
      alert(messageText);
      setStatusText("Error al enviar");
      setLeadStage("idle");
    }
  }, [email, leadStage, message, name]);

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
            <a
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              href="#simulador"
            >
              Demo
            </a>
            <a className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="#precios">
              Precios
            </a>
            <a className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="#ejemplos">
              Ejemplos
            </a>
            <a className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="#diagnostico">
              Contacto
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
                <a href="#simulador">
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

        <section id="simulador" className="container py-16 sm:py-20">
          <SectionHeader
            eyebrow="Simulador"
            title="Simula cómo se vería la web de tu negocio"
            description="Explora ejemplos reales de cómo podría verse la página web de tu negocio."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div
                data-reveal
                className="card-neon rounded-2xl border border-border/70 bg-gradient-card p-5 text-left shadow-card"
              >
                <div className="text-sm font-semibold tracking-tight">Elegí tu rubro</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Cambiá de demo y mirá la web dentro de la página (como si fuera una micro-plataforma).
                </p>

                <div className="mt-5 grid gap-2">
                  {demoOptions.map((opt) => {
                    const active = opt.key === selectedDemoKey;
                    return (
                      <button
                        key={opt.key}
                        type="button"
                        onClick={() => selectDemo(opt.key)}
                        className={cn(
                          "flex items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm",
                          "transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                          active
                            ? "border-[hsl(var(--neon-cyan))]/55 bg-background/35 shadow-glow"
                            : "border-border/60 bg-background/20 hover:bg-background/30",
                        )}
                        aria-pressed={active}
                      >
                        <span className="font-semibold tracking-tight">{opt.label}</span>
                        <span className={cn("text-xs", active ? "text-[hsl(var(--neon-cyan))]" : "text-muted-foreground")}>
                          Vista previa
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-5">
                  <Button asChild variant="outline" className="w-full justify-center border-border/60 hover:bg-background/40">
                    <a href="#ejemplos">
                      Ver todas las demos <ChevronRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div
                data-reveal
                className="card-neon overflow-hidden rounded-2xl border border-border/70 bg-gradient-card shadow-card"
              >
                <div className="flex items-center justify-between border-b border-border/40 bg-background/25 px-4 py-3">
                  <div className="text-sm font-semibold tracking-tight">Vista previa interactiva</div>
                  <a
                    href={iframeSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground underline decoration-border/60 underline-offset-4 hover:text-foreground"
                  >
                    Abrir en nueva pestaña
                  </a>
                </div>
                <div className="relative aspect-[16/10] w-full bg-background/20">
                  <div
                    className={cn(
                      "absolute inset-0 transition-opacity duration-300",
                      iframeVisible ? "opacity-100" : "opacity-0",
                    )}
                  >
                    <iframe
                      title="Vista previa de demo"
                      src={iframeSrc}
                      className="h-full w-full"
                      loading="lazy"
                      sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
                    />
                  </div>
                  {!iframeVisible ? (
                    <div className="absolute inset-0 grid place-items-center">
                      <div className="rounded-full border border-border/60 bg-background/40 px-4 py-2 text-xs text-muted-foreground">
                        Cargando demo…
                      </div>
                    </div>
                  ) : null}
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

          <div className="mx-auto mt-8 max-w-5xl">
            <details
              data-reveal
              className="card-neon rounded-2xl border border-border/70 bg-gradient-card p-6 text-left shadow-card"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-ring [&::-webkit-details-marker]:hidden">
                Calculá un precio aproximado
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </summary>
              <p className="mt-2 text-sm text-muted-foreground">
                Elegí opciones y mirá un valor estimado en tiempo real. El presupuesto final depende de tu contenido y objetivos.
              </p>

              <div className="mt-6 grid gap-4 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <div className="rounded-2xl border border-border/60 bg-background/20 p-5">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="space-y-2">
                        <div className="text-sm font-medium text-foreground/90">Tipo de negocio</div>
                        <select
                          value={calcBusiness}
                          onChange={(e) => setCalcBusiness(e.target.value)}
                          className={cn(
                            "h-11 w-full rounded-xl border border-border bg-background/40 px-3 text-sm text-foreground",
                            "focus:outline-none focus:ring-2 focus:ring-ring",
                          )}
                        >
                          {[
                            "Entrenador personal",
                            "Psicólogo",
                            "Nutricionista",
                            "Gimnasio",
                            "Profesional independiente",
                          ].map((v) => (
                            <option key={v} value={v}>
                              {v}
                            </option>
                          ))}
                        </select>
                      </label>

                      <label className="space-y-2">
                        <div className="text-sm font-medium text-foreground/90">Tipo de página</div>
                        <select
                          value={calcPageType}
                          onChange={(e) => setCalcPageType(e.target.value as typeof calcPageType)}
                          className={cn(
                            "h-11 w-full rounded-xl border border-border bg-background/40 px-3 text-sm text-foreground",
                            "focus:outline-none focus:ring-2 focus:ring-ring",
                          )}
                        >
                          <option value="landing">Landing simple</option>
                          <option value="profesional">Web profesional</option>
                          <option value="completa">Web completa con secciones</option>
                        </select>
                      </label>
                    </div>

                    <div className="mt-6">
                      <div className="text-sm font-medium text-foreground/90">Extras</div>
                      <div className="mt-3 grid gap-3 sm:grid-cols-2">
                        {[
                          { key: "wa", label: "Botón de WhatsApp", value: extraWhatsapp, set: setExtraWhatsapp, price: 20 },
                          { key: "form", label: "Formulario de contacto", value: extraForm, set: setExtraForm, price: 30 },
                          { key: "mobile", label: "Optimización móvil", value: extraMobile, set: setExtraMobile, price: 40 },
                          { key: "custom", label: "Diseño personalizado", value: extraCustom, set: setExtraCustom, price: 60 },
                        ].map((x) => (
                          <label
                            key={x.key}
                            className="flex cursor-pointer items-start gap-3 rounded-xl border border-border/60 bg-background/20 px-4 py-3 text-sm transition-colors hover:bg-background/30"
                          >
                            <input
                              type="checkbox"
                              checked={x.value}
                              onChange={(e) => x.set(e.target.checked)}
                              className="mt-1 h-4 w-4 accent-[hsl(var(--neon-cyan))]"
                            />
                            <div className="flex-1">
                              <div className="font-semibold tracking-tight">{x.label}</div>
                              <div className="mt-1 text-xs text-muted-foreground">+{x.price} USD</div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="card-neon glow-soft rounded-2xl border border-border/70 bg-gradient-card p-6 text-left shadow-card">
                    <div className="text-sm text-muted-foreground">Resultado</div>
                    <div className="mt-2 text-balance text-2xl font-semibold tracking-tight">
                      Tu web desde: <span className="text-gradient gradient-animate">{calcPrice} USD</span>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">
                      Rubro: <span className="text-foreground/90">{calcBusiness}</span>
                    </p>

                    <div className="mt-6">
                      <Button asChild variant="whatsapp" size="lg" className="w-full justify-center">
                        <a href={calcWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                          Quiero mi página web <MessageCircle />
                        </a>
                      </Button>
                    </div>

                    <p className="mt-4 text-xs text-muted-foreground">
                      Este valor es aproximado. Te paso un presupuesto final según tu contenido y objetivos.
                    </p>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </section>

        <section id="faq" className="container py-16 sm:py-20">
          <SectionHeader
            eyebrow="FAQ"
            title="Preguntas frecuentes (sin tecnicismos)"
            description="Si te queda alguna duda, escribime y te respondo rápido."
          />

          <div className="mx-auto mt-10 max-w-3xl space-y-3">
            {[
              {
                q: "¿Qué incluye la web?",
                a: (
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {[
                      "Diseño moderno (oscuro + neon) y copy claro",
                      "Optimización para celular (mobile-first)",
                      "Botón a WhatsApp + mensaje prellenado",
                      "Formulario de contacto para registrar consultas",
                      "Publicación online y configuración básica",
                    ].map((line) => (
                      <li key={line} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-[hsl(var(--neon-cyan))]" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                ),
              },
              {
                q: "¿En cuánto tiempo está lista?",
                a: (
                  <p className="mt-3 text-sm text-muted-foreground">
                    En general, en 72 horas desde que me pasás la info básica (rubro, servicios y datos de contacto).
                  </p>
                ),
              },
              {
                q: "¿Cómo es el proceso?",
                a: (
                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    {[
                      { n: "1", t: "Me contás tu negocio", d: "Objetivo, rubro y servicios." },
                      { n: "2", t: "Te armo la web", d: "Diseño + estructura enfocada en consultas." },
                      { n: "3", t: "La publicamos", d: "Lista para recibir mensajes por WhatsApp." },
                    ].map((step) => (
                      <div key={step.n} className="rounded-2xl border border-border/60 bg-background/20 p-4">
                        <div className="text-xs font-semibold text-muted-foreground">Paso {step.n}</div>
                        <div className="mt-1 font-semibold tracking-tight">{step.t}</div>
                        <div className="mt-1 text-xs text-muted-foreground">{step.d}</div>
                      </div>
                    ))}
                  </div>
                ),
              },
              {
                q: "¿Necesito dominio y hosting?",
                a: (
                  <p className="mt-3 text-sm text-muted-foreground">
                    Si ya los tenés, los usamos. Si no, te guío para configurarlo (por ejemplo, en Hostinger) y dejarlo listo.
                  </p>
                ),
              },
              {
                q: "¿Esto ayuda con Google/SEO?",
                a: (
                  <p className="mt-3 text-sm text-muted-foreground">
                    Sí: armamos una estructura clara y rápida para que tu negocio se vea profesional y sea más fácil de encontrar.
                    El SEO “fuerte” se trabaja con el tiempo, pero arrancás bien desde el día 1.
                  </p>
                ),
              },
              {
                q: "¿Cómo recibo las consultas?",
                a: (
                  <p className="mt-3 text-sm text-muted-foreground">
                    Te escriben por WhatsApp con un botón visible y también pueden dejarte un mensaje en el formulario.
                    Así no se te pierden consultas.
                  </p>
                ),
              },
            ].map((item) => (
              <details
                key={item.q}
                data-reveal
                className="card-neon rounded-2xl border border-border/70 bg-gradient-card p-5 text-left shadow-card"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-ring [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </summary>
                {item.a}
              </details>
            ))}
          </div>
        </section>

        <section id="diagnostico" className="container py-16 sm:py-20">
          <SectionHeader
            eyebrow="Contacto"
            title="¿Listo para empezar?"
            description="Escribinos y te respondemos rápido. Tu web profesional está a un mensaje de distancia."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            <form
              onSubmit={handleSubmit}
              id="contactForm"
              className="card-neon glow-soft lg:col-span-7 rounded-2xl border border-border/70 bg-gradient-card p-6 text-left shadow-card"
            >
              {leadStage === "sent" ? (
                <div className="mb-5 rounded-2xl border border-border/70 bg-background/30 p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-[hsl(var(--neon-cyan))]" />
                    <div>
                      <div className="font-semibold tracking-tight">
                        Gracias por tu mensaje. En breve me pongo en contacto con vos.
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
                      Editá el formulario <ArrowRight />
                    </Button>
                  </div>
                </div>
              ) : null}

              <div className="grid gap-4">
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Nombre"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={cn(
                    "h-11 w-full rounded-xl border border-border bg-background/40 px-3 text-sm text-foreground",
                    "placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring",
                  )}
                  autoComplete="name"
                />

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={cn(
                    "h-11 w-full rounded-xl border border-border bg-background/40 px-3 text-sm text-foreground",
                    "placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring",
                  )}
                  autoComplete="email"
                />

                <textarea
                  id="mensaje"
                  name="mensaje"
                  placeholder="Nota"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className={cn(
                    "w-full resize-none rounded-xl border border-border bg-background/40 px-3 py-3 text-sm text-foreground",
                    "placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring",
                  )}
                />
              </div>

              <input type="hidden" name="origen" value="landing webappimpulsor" />

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Button type="submit" variant="hero" size="lg" className="justify-center" disabled={leadStage !== "idle"}>
                  {leadStage === "sending" ? "Enviando..." : "Solicitar mi página web"} <MessageCircle />
                </Button>
                <div className="text-xs text-muted-foreground">
                  Se envía tu consulta y, si querés, continuás por WhatsApp con un mensaje listo.
                </div>
              </div>
              <div className="mt-4 text-xs text-muted-foreground">
                Debug: build <span className="font-mono">{import.meta.env.VITE_BUILD_ID ?? "sin-build-id"}</span> ·
                Supabase <span className="font-mono">{isSupabaseConfigured ? "ok" : "no-config"}</span>
              </div>
              <p id="status" aria-live="polite" className="mt-3 text-sm text-muted-foreground">
                {statusText}
              </p>
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
              <a className="transition-colors hover:text-foreground" href="#simulador">
                Demo
              </a>
              <a className="transition-colors hover:text-foreground" href="#precios">
                Precios
              </a>
              <a className="transition-colors hover:text-foreground" href="#ejemplos">
                Ejemplos
              </a>
              <a className="transition-colors hover:text-foreground" href="#faq">
                FAQ
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


