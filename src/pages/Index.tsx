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
  "https://script.google.com/macros/s/AKfycbybYzGbEKrL6g7PxcPR61rY-2xYRAixB65ggZ7Com4DYsqG_O_SQan-kMiuX7oA0IbN/exec";

function withBase(path: string) {
  const base = (import.meta.env.BASE_URL ?? "/") + "";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const normalizedPath = (path ?? "").replace(/^\//, "");
  return `${normalizedBase}${normalizedPath}`;
}

// Plantilla del mensaje post-formulario (incluye los datos del lead).
function buildFormWhatsAppMessage(params: {
  name: string;
  phone: string;
  email: string;
  note: string;
}) {
  const safeName = params.name.trim();
  const safePhone = params.phone.trim();
  const safeEmail = params.email.trim();
  const safeNote = params.note.trim();

  return [
    "Hola! Quiero información para crear mi página web profesional.",
    "",
    "Datos:",
    safeName ? `Nombre: ${safeName}` : null,
    safePhone ? `Teléfono: ${safePhone}` : null,
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

function normalizeText(value: string) {
  return (value ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

type PresenceStatus = "ok" | "warn" | "bad";

type InstantDemoType =
  | "Entrenador personal"
  | "Psicólogo"
  | "Nutricionista"
  | "Centro de estética"
  | "Gimnasio"
  | "Restaurante o casa de comida"
  | "Profesional independiente";

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
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [statusText, setStatusText] = React.useState("");

  const [leadStage, setLeadStage] = React.useState<"idle" | "sending" | "sent">("idle");
  const [preparedWhatsAppUrl, setPreparedWhatsAppUrl] = React.useState<string>("");

  const webhookUrl = ((import.meta.env.VITE_LEADS_WEBHOOK_URL as string | undefined) ?? "").trim();

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

  const [ideaBusiness, setIdeaBusiness] = React.useState("");
  const [ideaResult, setIdeaResult] = React.useState<{
    title: string;
    businessLabel: string;
    sections: string[];
    suggestion: string;
  } | null>(null);
  const [ideaVisible, setIdeaVisible] = React.useState(false);
  const ideaTimerRef = React.useRef<number | null>(null);
  const ideaResultRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    return () => {
      if (ideaTimerRef.current) window.clearTimeout(ideaTimerRef.current);
    };
  }, []);

  const generateIdea = React.useCallback(() => {
    const raw = ideaBusiness.trim();
    const normalized = normalizeText(raw);
    const businessLabel = raw || "tu negocio";

    const presets: Array<{
      id: string;
      match: (v: string) => boolean;
      title: string;
      sections: string[];
      suggestion: string;
    }> = [
      {
        id: "trainer",
        match: (v) => v.includes("entrenador") || v.includes("personal trainer") || v.includes("trainer") || v.includes("coach"),
        title: "Idea de página para Entrenador Personal",
        sections: [
          "Home (propuesta de valor + CTA WhatsApp)",
          "Sobre mí",
          "Servicios de entrenamiento",
          "Resultados / progreso de alumnos",
          "Testimonios",
          "Galería de entrenamientos",
          "Contacto con WhatsApp",
        ],
        suggestion:
          "Tu página podría mostrar tus planes de entrenamiento, resultados de alumnos y permitir que nuevos clientes te contacten fácilmente por WhatsApp.",
      },
      {
        id: "psico",
        match: (v) => v.includes("psicolog"),
        title: "Idea de página para Psicólogo/a",
        sections: [
          "Home (confianza + CTA de consulta)",
          "Sobre mí y enfoque terapéutico",
          "Especialidades",
          "Cómo trabajo (metodología)",
          "Preguntas frecuentes",
          "Testimonios / reseñas",
          "Reserva / contacto por WhatsApp",
        ],
        suggestion:
          "Tu página puede explicar tu enfoque, especialidades y facilitar que te reserven o te consulten por WhatsApp con un mensaje claro y profesional.",
      },
      {
        id: "nutri",
        match: (v) => v.includes("nutricion") || v.includes("nutri") || v.includes("dietista") || v.includes("dietista"),
        title: "Idea de página para Nutricionista",
        sections: [
          "Home (beneficio + CTA WhatsApp)",
          "Planes y programas",
          "Qué incluye cada plan",
          "Antes y después / resultados",
          "Tips y consejos",
          "Testimonios",
          "Contacto / reservas por WhatsApp",
        ],
        suggestion:
          "Tu página podría vender tus planes con claridad, mostrar resultados y tips, y permitir que te escriban por WhatsApp para arrancar sin fricción.",
      },
      {
        id: "gym",
        match: (v) => v.includes("gimnasio") || v.includes("gym") || v.includes("fitness"),
        title: "Idea de página para Gimnasio",
        sections: [
          "Home (promo + CTA de inscripción)",
          "Clases y horarios",
          "Planes / membresías",
          "Instalaciones (galería)",
          "Entrenadores",
          "Preguntas frecuentes",
          "Contacto por WhatsApp",
        ],
        suggestion:
          "Tu web puede mostrar clases y horarios, planes de membresía y un botón de WhatsApp para que se inscriban o consulten en 1 click.",
      },
    ];

    const preset = presets.find((p) => p.match(normalized));

    const result = preset
      ? { title: preset.title, businessLabel, sections: preset.sections, suggestion: preset.suggestion }
      : {
          title: `Idea de página para ${businessLabel}`,
          businessLabel,
          sections: ["Home", "Sobre el negocio", "Servicios", "Testimonios", "Contacto con WhatsApp"],
          suggestion:
            "Tu página debería explicar rápidamente qué ofrecés, mostrar tus servicios y generar confianza para que te contacten directo por WhatsApp.",
        };

    setIdeaResult(result);
    setIdeaVisible(false);
    if (ideaTimerRef.current) window.clearTimeout(ideaTimerRef.current);
    ideaTimerRef.current = window.setTimeout(() => setIdeaVisible(true), 30);
    window.setTimeout(() => ideaResultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  }, [ideaBusiness]);

  const [presenceQuery, setPresenceQuery] = React.useState("");
  const [presenceStage, setPresenceStage] = React.useState<"idle" | "scanning" | "done">("idle");
  const [presenceVisibleCount, setPresenceVisibleCount] = React.useState(0);
  const presenceTimersRef = React.useRef<number[]>([]);

  React.useEffect(() => {
    return () => {
      for (const t of presenceTimersRef.current) window.clearTimeout(t);
      presenceTimersRef.current = [];
    };
  }, []);

  const presenceWhatsAppUrl = React.useMemo(() => {
    const msg =
      "Hola, acabo de analizar la presencia digital de mi negocio en WebAppImpulsor y me gustaría crear una página web profesional.";
    return buildWhatsAppUrl(msg);
  }, []);

  const presenceResults = React.useMemo(() => {
    const q = presenceQuery.trim();
    const n = normalizeText(q);
    const looksLikeInstagram = q.includes("@") || n.includes("instagram") || n.includes("ig");
    const looksLikeWebsite = n.includes("http") || n.includes("www.") || n.includes(".com") || n.includes(".ar");

    const igStatus: PresenceStatus = q ? "ok" : "warn";
    const webStatus: PresenceStatus = looksLikeWebsite ? "warn" : "bad";

    return [
      {
        label: "Instagram",
        status: looksLikeInstagram || q ? igStatus : "warn",
        ok: "Presente",
        warn: "Parcial",
        bad: "No detectado",
      },
      {
        label: "Página web profesional",
        status: webStatus,
        ok: "Detectada",
        warn: "Parcial (link encontrado, falta optimización)",
        bad: "No detectada",
      },
      {
        label: "Catálogo de servicios organizado",
        status: "warn" as const,
        ok: "Completo",
        warn: "Parcial",
        bad: "No detectado",
      },
      {
        label: "Formulario de contacto",
        status: looksLikeWebsite ? ("warn" as const) : ("bad" as const),
        ok: "Presente",
        warn: "Parcial",
        bad: "No detectado",
      },
      {
        label: "Contacto directo automatizado",
        status: "warn" as const,
        ok: "Activo",
        warn: "Limitado",
        bad: "No detectado",
      },
    ] as const;
  }, [presenceQuery]);

  const runPresenceAnalysis = React.useCallback(() => {
    const q = presenceQuery.trim();
    if (!q) return;

    for (const t of presenceTimersRef.current) window.clearTimeout(t);
    presenceTimersRef.current = [];

    setPresenceStage("scanning");
    setPresenceVisibleCount(0);

    const first = window.setTimeout(() => setPresenceVisibleCount(1), 420);
    presenceTimersRef.current.push(first);

    for (let i = 2; i <= presenceResults.length; i += 1) {
      const t = window.setTimeout(() => setPresenceVisibleCount(i), 420 * i);
      presenceTimersRef.current.push(t);
    }

    const done = window.setTimeout(() => setPresenceStage("done"), 420 * (presenceResults.length + 1));
    presenceTimersRef.current.push(done);
  }, [presenceQuery, presenceResults.length]);

  const [instantBusinessName, setInstantBusinessName] = React.useState("");
  const [instantBusinessType, setInstantBusinessType] = React.useState<InstantDemoType>("Centro de estética");
  const [instantStage, setInstantStage] = React.useState<"idle" | "generating" | "done">("idle");
  const [instantVisibleCount, setInstantVisibleCount] = React.useState(0);
  const instantTimersRef = React.useRef<number[]>([]);
  const instantResultRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    return () => {
      for (const t of instantTimersRef.current) window.clearTimeout(t);
      instantTimersRef.current = [];
    };
  }, []);

  const instantDemoWhatsAppUrl = React.useMemo(() => {
    const msg =
      "Hola, acabo de generar una demo de página para mi negocio en WebAppImpulsor y me gustaría crear una página web profesional.";
    return buildWhatsAppUrl(msg);
  }, []);

  const buildInstantDemo = React.useCallback(
    (name: string, type: InstantDemoType) => {
      const safeName = name.trim() || "Tu negocio";

      const commonCta = "Contactar por WhatsApp";

      const templates: Record<
        InstantDemoType,
        {
          promo: string;
          heroImage: string;
          sections: Array<{ title: string; text: string; image: string }>;
        }
      > = {
        "Entrenador personal": {
          promo: "Entrenamientos personalizados para resultados reales.",
          heroImage:
            "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1800&q=80",
          sections: [
            {
              title: "Sobre el entrenador",
              text: "Tu enfoque, experiencia y por qué tus alumnos confían en vos.",
              image:
                "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=1400&q=80",
            },
            {
              title: "Programas de entrenamiento",
              text: "Planes claros por objetivo (bajar grasa, fuerza, recomposición).",
              image:
                "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=1400&q=80",
            },
            {
              title: "Testimonios de alumnos",
              text: "Prueba social para convertir visitas en consultas.",
              image:
                "https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&w=1400&q=80",
            },
            {
              title: "Contacto WhatsApp",
              text: "Botón destacado con mensaje pre-escrito para agendar.",
              image:
                "https://images.unsplash.com/photo-1520975682031-a122b69f1a12?auto=format&fit=crop&w=1400&q=80",
            },
          ],
        },
        "Psicólogo": {
          promo: "Un espacio profesional para acompañarte en tu bienestar.",
          heroImage:
            "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?auto=format&fit=crop&w=1800&q=80",
          sections: [
            {
              title: "Especialidades",
              text: "Áreas de trabajo, problemáticas frecuentes y qué podés esperar.",
              image:
                "https://images.unsplash.com/photo-1580281657527-47f249e8f049?auto=format&fit=crop&w=1400&q=80",
            },
            {
              title: "Enfoque terapéutico",
              text: "Cómo trabajás y qué resultados buscás con tus pacientes.",
              image:
                "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1400&q=80",
            },
            {
              title: "Reserva de consulta",
              text: "CTA claro para coordinar por WhatsApp y reducir fricción.",
              image:
                "https://images.unsplash.com/photo-1526779259212-939e64788e3c?auto=format&fit=crop&w=1400&q=75",
            },
          ],
        },
        "Nutricionista": {
          promo: "Planes simples y sostenibles para mejorar tu salud.",
          heroImage:
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1800&q=80",
          sections: [
            {
              title: "Planes alimenticios",
              text: "Programas por objetivo con qué incluye cada plan.",
              image:
                "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1400&q=80",
            },
            {
              title: "Consejos de salud",
              text: "Contenido útil para atraer visitas y generar confianza.",
              image:
                "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1400&q=80",
            },
            {
              title: "Contacto",
              text: "WhatsApp + formulario para capturar leads.",
              image:
                "https://images.unsplash.com/photo-1528823872057-9c018a7a7553?auto=format&fit=crop&w=1400&q=80",
            },
          ],
        },
        "Centro de estética": {
          promo: "Tratamientos modernos y resultados visibles con cuidado profesional.",
          heroImage:
            "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1800&q=80",
          sections: [
            {
              title: "Tratamientos",
              text: "Micropeeling, faciales, masajes y packs por objetivo.",
              image:
                "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1400&q=80",
            },
            {
              title: "Resultados",
              text: "Fotos/antes y después para generar confianza (sin exagerar).",
              image:
                "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?auto=format&fit=crop&w=1400&q=80",
            },
            {
              title: "Promociones",
              text: "Packs y promos para aumentar conversiones en temporada.",
              image:
                "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1400&q=80",
            },
            {
              title: "Contacto",
              text: "Turnos por WhatsApp y consulta rápida.",
              image:
                "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=80",
            },
          ],
        },
        "Gimnasio": {
          promo: "Clases, horarios y planes listos para que se inscriban.",
          heroImage:
            "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=80",
          sections: [
            {
              title: "Clases y horarios",
              text: "Agenda clara, filtros y CTA a WhatsApp.",
              image:
                "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1400&q=80",
            },
            {
              title: "Planes / membresías",
              text: "Precios simples y beneficios por plan.",
              image:
                "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1400&q=80",
            },
            {
              title: "Instalaciones",
              text: "Galería + recorrido para motivar la visita.",
              image:
                "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=1400&q=80",
            },
            {
              title: "Inscripción",
              text: "CTA directo por WhatsApp para convertir en 1 click.",
              image:
                "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1400&q=80",
            },
          ],
        },
        "Restaurante o casa de comida": {
          promo: "Menú claro, destacados y pedidos por WhatsApp.",
          heroImage:
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1800&q=80",
          sections: [
            {
              title: "Menú",
              text: "Menú escaneable con precios y combos.",
              image:
                "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=1400&q=80",
            },
            {
              title: "Platos destacados",
              text: "Fotos reales para aumentar pedidos.",
              image:
                "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1400&q=80",
            },
            {
              title: "Opiniones",
              text: "Reseñas breves para generar confianza.",
              image:
                "https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?auto=format&fit=crop&w=1400&q=80",
            },
            {
              title: "Ubicación y pedidos",
              text: "Mapa + botón de WhatsApp para pedir rápido.",
              image:
                "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1400&q=75",
            },
          ],
        },
        "Profesional independiente": {
          promo: "Una presencia online moderna para conseguir más clientes.",
          heroImage:
            "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1800&q=80",
          sections: [
            {
              title: "Servicios",
              text: "Qué ofrecés y cómo trabajás (en simple).",
              image:
                "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
            },
            {
              title: "Casos / resultados",
              text: "Ejemplos de trabajos o resultados para aumentar confianza.",
              image:
                "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
            },
            {
              title: "Contacto",
              text: "WhatsApp + formulario para captar consultas.",
              image:
                "https://images.unsplash.com/photo-1520975682031-a122b69f1a12?auto=format&fit=crop&w=1400&q=80",
            },
          ],
        },
      };

      return {
        name: safeName,
        type,
        promo: templates[type].promo,
        cta: commonCta,
        heroImage: templates[type].heroImage,
        sections: templates[type].sections,
      };
    },
    [],
  );

  const [instantDemo, setInstantDemo] = React.useState<ReturnType<typeof buildInstantDemo> | null>(null);

  const generateInstantDemo = React.useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!instantBusinessName.trim()) return;

      for (const t of instantTimersRef.current) window.clearTimeout(t);
      instantTimersRef.current = [];

      setInstantStage("generating");
      setInstantVisibleCount(0);

      const demo = buildInstantDemo(instantBusinessName, instantBusinessType);
      setInstantDemo(demo);

      const baseDelay = 320;
      const heroT = window.setTimeout(() => setInstantVisibleCount(1), 220);
      instantTimersRef.current.push(heroT);

      for (let i = 1; i <= demo.sections.length + 1; i += 1) {
        const t = window.setTimeout(() => setInstantVisibleCount(i + 1), 220 + baseDelay * i);
        instantTimersRef.current.push(t);
      }

      const doneT = window.setTimeout(() => setInstantStage("done"), 220 + baseDelay * (demo.sections.length + 2));
      instantTimersRef.current.push(doneT);

      const scrollT = window.setTimeout(
        () => instantResultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
        260,
      );
      instantTimersRef.current.push(scrollT);
    },
    [buildInstantDemo, instantBusinessName, instantBusinessType],
  );

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

  const ideaWhatsAppUrl = React.useMemo(() => {
    const business = ideaResult?.businessLabel?.trim();
    const msg = business
      ? `Hola, probé el generador de ideas de WebAppImpulsor y me gustaría crear una página web para mi negocio (${business}).`
      : "Hola, probé el generador de ideas de WebAppImpulsor y me gustaría crear una página web para mi negocio.";
    return buildWhatsAppUrl(msg);
  }, [ideaResult?.businessLabel]);

  const constructorWhatsAppUrl = React.useMemo(() => {
    const msg =
      "Hola, acabo de usar el constructor de WebAppImpulsor y me gustaría crear una página web para mi negocio.";
    return buildWhatsAppUrl(msg);
  }, []);

  const constructorSections = React.useMemo(
    () =>
      [
        {
          id: "home",
          label: "Home",
          title: "[ HERO / HOME ]",
          body: "Propuesta clara + botón de WhatsApp + beneficio principal en 5 segundos.",
        },
        {
          id: "about",
          label: "Sobre mí",
          title: "[ SOBRE MÍ ]",
          body: "Quién sos, por qué confiar, tu enfoque y resultados (sin humo).",
        },
        {
          id: "services",
          label: "Servicios",
          title: "[ SERVICIOS ]",
          body: "3–6 servicios bien explicados con CTA corto: “Consultar por WhatsApp”.",
        },
        {
          id: "testimonials",
          label: "Testimonios",
          title: "[ TESTIMONIOS ]",
          body: "Reseñas breves que generen confianza y reduzcan dudas antes de escribirte.",
        },
        {
          id: "gallery",
          label: "Galería",
          title: "[ GALERÍA ]",
          body: "Fotos reales o trabajos: que se entienda tu propuesta de un vistazo.",
        },
        {
          id: "wa",
          label: "Contacto con WhatsApp",
          title: "[ CONTACTO (WHATSAPP) ]",
          body: "Botón destacado con mensaje pre-escrito para bajar fricción y aumentar consultas.",
        },
        {
          id: "form",
          label: "Formulario de contacto",
          title: "[ FORMULARIO ]",
          body: "Nombre + email + mensaje. Si no quieren llamar, igual te dejan la consulta.",
        },
      ] as const,
    [],
  );

  const [selectedConstructor, setSelectedConstructor] = React.useState<Record<string, boolean>>(() => ({
    home: true,
    services: true,
    wa: true,
    form: true,
    about: false,
    testimonials: false,
    gallery: false,
  }));

  const [leavingConstructor, setLeavingConstructor] = React.useState<Record<string, boolean>>({});
  const leavingConstructorRef = React.useRef<Record<string, number>>({});

  React.useEffect(() => {
    const timeouts = leavingConstructorRef.current;
    return () => {
      for (const key of Object.keys(timeouts)) {
        window.clearTimeout(timeouts[key]);
      }
    };
  }, []);

  const toggleConstructorSection = React.useCallback((id: string) => {
    setSelectedConstructor((prev) => {
      const nextValue = !prev[id];

      if (nextValue) {
        setLeavingConstructor((prevLeaving) => {
          if (!prevLeaving[id]) return prevLeaving;
          const nextLeaving = { ...prevLeaving };
          delete nextLeaving[id];
          return nextLeaving;
        });
        if (leavingConstructorRef.current[id]) window.clearTimeout(leavingConstructorRef.current[id]);
      } else {
        setLeavingConstructor((prevLeaving) => ({ ...prevLeaving, [id]: true }));
        if (leavingConstructorRef.current[id]) window.clearTimeout(leavingConstructorRef.current[id]);
        leavingConstructorRef.current[id] = window.setTimeout(() => {
          setLeavingConstructor((prevLeaving) => {
            const nextLeaving = { ...prevLeaving };
            delete nextLeaving[id];
            return nextLeaving;
          });
        }, 260);
      }

      return { ...prev, [id]: nextValue };
    });
  }, []);

  const renderConstructorPreview = React.useCallback(
    (s: (typeof constructorSections)[number]) => {
      const accent =
        s.id === "home"
          ? "from-cyan-500/30 to-fuchsia-500/20"
          : s.id === "services"
            ? "from-indigo-500/25 to-cyan-500/15"
            : s.id === "testimonials"
              ? "from-fuchsia-500/20 to-indigo-500/15"
              : "from-cyan-500/15 to-fuchsia-500/10";

      const Header = (
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-[11px] font-semibold tracking-[0.25em] text-[hsl(var(--neon-purple))]">{s.title}</div>
            <div className="mt-2 text-xs text-muted-foreground">{s.body}</div>
          </div>
          <div
            className={cn(
              "hidden sm:block h-10 w-10 rounded-2xl border border-border/60 bg-background/35",
              "shadow-[0_18px_60px_-35px_rgba(168,85,247,0.22)]",
            )}
          >
            <div className={cn("h-full w-full rounded-2xl bg-gradient-to-br", accent)} />
          </div>
        </div>
      );

      if (s.id === "home") {
        return (
          <div>
            {Header}
            <div className="mt-4 overflow-hidden rounded-2xl border border-border/60 bg-background/25">
              <div
                className={cn(
                  "relative p-5",
                  "bg-[radial-gradient(circle_at_18%_22%,rgba(34,211,238,0.18),transparent_55%),radial-gradient(circle_at_82%_20%,rgba(168,85,247,0.18),transparent_55%)]",
                )}
              >
              <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                <div className="font-semibold tracking-tight text-foreground/90">{BRAND.name}</div>
                <div className="hidden sm:flex items-center gap-3">
                  <span>Servicios</span>
                  <span>Contacto</span>
                </div>
              </div>
              <div className="mt-4 text-lg font-semibold tracking-tight">Tu web lista para convertir</div>
              <div className="mt-1 text-xs text-muted-foreground">
                Explicá tu propuesta en una frase + CTA visible.
              </div>
              <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-[hsl(var(--neon-cyan))]/35 bg-background/30 px-3 py-2 text-xs font-semibold">
                <MessageCircle className="h-4 w-4 text-[hsl(var(--neon-cyan))]" /> Hablar por WhatsApp
              </div>
            </div>
            </div>
          </div>
        );
      }

      if (s.id === "about") {
        return (
          <div>
            {Header}
            <div className="mt-4 grid gap-4 rounded-2xl border border-border/60 bg-background/25 p-5 sm:grid-cols-3">
              <div className="sm:col-span-1">
                <div className="aspect-square w-full max-w-[140px] rounded-2xl border border-border/60 bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/15 shadow-glow" />
              </div>
              <div className="sm:col-span-2">
                <div className="text-sm font-semibold tracking-tight">Sobre mí</div>
                <div className="mt-2 space-y-2 text-xs text-muted-foreground">
                  <div className="h-2 w-[92%] rounded bg-white/10" />
                  <div className="h-2 w-[84%] rounded bg-white/10" />
                  <div className="h-2 w-[70%] rounded bg-white/10" />
                </div>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/25 px-3 py-1 text-[11px] text-muted-foreground">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[hsl(var(--neon-cyan))]" /> Experiencia + enfoque
                </div>
              </div>
            </div>
          </div>
        );
      }

      if (s.id === "services") {
        return (
          <div>
            {Header}
            <div className="mt-4 grid gap-3 rounded-2xl border border-border/60 bg-background/25 p-5 sm:grid-cols-3">
              {[
                { icon: <Zap className="h-4 w-4" />, title: "Servicio 1" },
                { icon: <Rocket className="h-4 w-4" />, title: "Servicio 2" },
                { icon: <Globe className="h-4 w-4" />, title: "Servicio 3" },
              ].map((c) => (
                <div key={c.title} className="rounded-xl border border-border/50 bg-background/20 p-4">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border/60 bg-background/30 text-[hsl(var(--neon-cyan))]">
                    {c.icon}
                  </div>
                  <div className="mt-3 text-xs font-semibold tracking-tight">{c.title}</div>
                  <div className="mt-2 h-2 w-full rounded bg-white/10" />
                  <div className="mt-2 h-2 w-[70%] rounded bg-white/10" />
                </div>
              ))}
            </div>
          </div>
        );
      }

      if (s.id === "testimonials") {
        return (
          <div>
            {Header}
            <div className="mt-4 grid gap-3 rounded-2xl border border-border/60 bg-background/25 p-5 sm:grid-cols-2">
              {["Cliente A", "Cliente B"].map((who) => (
                <div key={who} className="rounded-xl border border-border/50 bg-background/20 p-4">
                  <div className="flex items-center gap-1 text-[hsl(var(--neon-cyan))]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5" />
                    ))}
                  </div>
                  <div className="mt-3 space-y-2">
                    <div className="h-2 w-[95%] rounded bg-white/10" />
                    <div className="h-2 w-[82%] rounded bg-white/10" />
                  </div>
                  <div className="mt-3 text-[11px] font-semibold text-foreground/90">— {who}</div>
                </div>
              ))}
            </div>
          </div>
        );
      }

      if (s.id === "gallery") {
        return (
          <div>
            {Header}
            <div className="mt-4 rounded-2xl border border-border/60 bg-background/25 p-5">
              <div className="grid grid-cols-3 gap-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "aspect-[4/3] rounded-xl border border-border/50",
                      "bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.18),transparent_55%),radial-gradient(circle_at_75%_60%,rgba(168,85,247,0.16),transparent_55%)]",
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      }

      if (s.id === "wa") {
        return (
          <div>
            {Header}
            <div className="mt-4 rounded-2xl border border-border/60 bg-background/25 p-5">
              <div className="text-sm font-semibold tracking-tight">Contacto</div>
              <div className="mt-2 text-xs text-muted-foreground">Botón destacado con mensaje pre-escrito.</div>
              <div className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[hsl(142,70%,45%)] px-4 py-3 text-sm font-bold text-white">
                <MessageCircle className="h-5 w-5" /> WhatsApp
              </div>
            </div>
          </div>
        );
      }

      if (s.id === "form") {
        return (
          <div>
            {Header}
            <div className="mt-4 rounded-2xl border border-border/60 bg-background/25 p-5">
              <div className="text-sm font-semibold tracking-tight">Formulario</div>
              <div className="mt-4 grid gap-2">
                <div className="h-10 rounded-xl border border-border/50 bg-background/20" />
                <div className="h-10 rounded-xl border border-border/50 bg-background/20" />
                <div className="h-20 rounded-xl border border-border/50 bg-background/20" />
                <div className="mt-1 h-10 rounded-xl border border-[hsl(var(--neon-purple))]/35 bg-background/25" />
              </div>
            </div>
          </div>
        );
      }

      return <div>{Header}</div>;
    },
    [],
  );

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

    const waMessage = buildFormWhatsAppMessage({ name, phone, email, note: message });
    setPreparedWhatsAppUrl(buildWhatsAppUrl(waMessage));

    const googlePayload = {
      id: leadId,
      nombre: name.trim(),
      telefono: phone.trim(),
      email: email.trim(),
      mensaje: message.trim(),
      origen: "landing webappimpulsor",
      fecha,
    };

    try {
      const jsonBody = JSON.stringify(googlePayload);

      // 1) Intento "verificable": si el Web App responde con JSON y CORS habilitado,
      // podemos confirmar éxito real (evita falsos positivos).
      const response = await fetch(GOOGLE_SHEETS_SCRIPT_URL, {
        method: "POST",
        body: jsonBody,
        redirect: "follow",
        keepalive: true,
      });

      const rawText = await response.text().catch(() => "");
      const parsed = (() => {
        try {
          return rawText ? (JSON.parse(rawText) as { result?: string; error?: string; message?: string } | null) : null;
        } catch {
          return null;
        }
      })();

      const isSuccess =
        parsed?.result === "success" ||
        /"result"\s*:\s*"success"/i.test(rawText) ||
        /\bsuccess\b/i.test(rawText) ||
        response.ok;

      if (!isSuccess) {
        const errMsg = parsed?.error || parsed?.message || rawText || "Error al enviar";
        throw new Error(errMsg.slice(0, 300));
      }

      setStatusText("Mensaje enviado correctamente. Nos pondremos en contacto pronto.");

      sendLead({
        id: leadId,
        nombre: name.trim(),
        telefono: phone.trim(),
        email: email.trim(),
        negocio: "landing webappimpulsor",
        mensaje: message.trim(),
        fecha,
        source: "landing",
        path: window.location.pathname,
        referrer: document.referrer || null,
        userAgent: navigator.userAgent,
      });

      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
      setLeadStage("sent");
      toast.success("Mensaje enviado. Si querés acelerar, continuá por WhatsApp con el mensaje prellenado.");
    } catch {
      try {
        // 2) Fallback compatible: envío `no-cors` (no permite leer respuesta, pero suele llegar a Sheets).
        // Evitamos headers custom para no disparar preflight.
        await fetch(GOOGLE_SHEETS_SCRIPT_URL, {
          method: "POST",
          body: JSON.stringify(googlePayload),
          mode: "no-cors",
          keepalive: true,
        });

        setStatusText("Mensaje enviado. Si no recibís respuesta, continuá por WhatsApp.");

        sendLead({
          id: leadId,
          nombre: name.trim(),
          telefono: phone.trim(),
          email: email.trim(),
          negocio: "landing webappimpulsor",
          mensaje: message.trim(),
          fecha,
          source: "landing",
          path: window.location.pathname,
          referrer: document.referrer || null,
          userAgent: navigator.userAgent,
        });

        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
        setLeadStage("sent");
        toast.success("Mensaje enviado. Si querés acelerar, continuá por WhatsApp con el mensaje prellenado.");
      } catch {
        setStatusText("Error de conexión");
        setLeadStage("idle");
      }
    }
  }, [email, leadStage, message, name, phone, sendLead]);

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
            <a className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="#simulador">
              Simulador
            </a>
            <a className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="#demo-instantaneo">
              Demo instantánea
            </a>
            <a className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="#analizador">
              Analizador
            </a>
            <a className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="#calculadora">
              Calculadora
            </a>
            <a className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="#generador-ideas">
              Generador
            </a>
            <a
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              href="#constructor-visual"
            >
              Constructor
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

        <section id="demo-instantaneo" className="container py-16 sm:py-20">
          <SectionHeader
            eyebrow="Generador"
            title="Generador instantáneo de demo de página web"
            description="Generá una mini web visual en segundos y sentí cómo se vería tu marca online."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div
                data-reveal
                className="card-neon rounded-2xl border border-border/70 bg-gradient-card p-6 text-left shadow-card"
              >
                <form onSubmit={generateInstantDemo} className="grid gap-4">
                  <label className="space-y-2">
                    <div className="text-sm font-medium text-foreground/90">Nombre del negocio</div>
                    <input
                      value={instantBusinessName}
                      onChange={(e) => setInstantBusinessName(e.target.value)}
                      placeholder="Ej: Estética Bella"
                      className={cn(
                        "h-11 w-full rounded-xl border border-border bg-background/40 px-3 text-sm text-foreground",
                        "placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring",
                      )}
                      autoComplete="organization"
                    />
                  </label>

                  <label className="space-y-2">
                    <div className="text-sm font-medium text-foreground/90">Tipo de negocio</div>
                    <select
                      value={instantBusinessType}
                      onChange={(e) => setInstantBusinessType(e.target.value as InstantDemoType)}
                      className={cn(
                        "h-11 w-full rounded-xl border border-border bg-background/40 px-3 text-sm text-foreground",
                        "focus:outline-none focus:ring-2 focus:ring-ring",
                      )}
                    >
                      {[
                        "Entrenador personal",
                        "Psicólogo",
                        "Nutricionista",
                        "Centro de estética",
                        "Gimnasio",
                        "Restaurante o casa de comida",
                        "Profesional independiente",
                      ].map((v) => (
                        <option key={v} value={v}>
                          {v}
                        </option>
                      ))}
                    </select>
                  </label>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full justify-center glow-neon"
                    disabled={!instantBusinessName.trim() || instantStage === "generating"}
                  >
                    {instantStage === "generating" ? "Generando..." : "Generar demo"} <Sparkles className="h-4 w-4" />
                  </Button>
                </form>

                <div className="mt-4 text-xs text-muted-foreground">
                  La demo es una vista simulada dentro de la landing (estilo SaaS). Ideal para visualizar rápido.
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div
                ref={instantResultRef}
                data-reveal
                className="card-neon overflow-hidden rounded-2xl border border-border/70 bg-gradient-card shadow-card"
              >
                <div className="border-b border-border/40 bg-background/25 px-4 py-3">
                  <div className="text-sm font-semibold tracking-tight">Demo generada</div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {instantStage === "generating"
                      ? "Construyendo secciones…"
                      : instantDemo
                        ? "Listo. Así podría verse tu página."
                        : "Completá el formulario y generá tu demo."}
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  {!instantDemo ? (
                    <div className="rounded-2xl border border-border/60 bg-background/20 p-6 text-left">
                      <div className="text-sm text-muted-foreground">Vista previa</div>
                      <div className="mt-2 text-lg font-semibold tracking-tight">Tu demo aparece acá.</div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Elegí tu tipo de negocio y vas a ver una mini web con secciones y estilo.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div
                        className={cn(
                          "overflow-hidden rounded-2xl border border-border/60 bg-background/20",
                          "transition-all duration-300 ease-out",
                          instantVisibleCount >= 1 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1",
                        )}
                      >
                        <div className="relative">
                          <img
                            src={instantDemo.heroImage}
                            alt={`Imagen principal de ${instantDemo.type}`}
                            className="h-44 w-full object-cover opacity-65"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(34,211,238,0.18),transparent_55%),radial-gradient(circle_at_78%_20%,rgba(168,85,247,0.18),transparent_55%)]" />
                          <div className="absolute inset-0 p-5">
                            <div className="text-xs font-semibold tracking-[0.25em] text-[hsl(var(--neon-cyan))]">
                              {instantDemo.type}
                            </div>
                            <div className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
                              {instantDemo.name}
                            </div>
                            <div className="mt-2 max-w-xl text-sm text-muted-foreground">{instantDemo.promo}</div>
                            <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-[hsl(var(--neon-cyan))]/35 bg-background/35 px-3 py-2 text-xs font-semibold">
                              <MessageCircle className="h-4 w-4 text-[hsl(var(--neon-cyan))]" /> {instantDemo.cta}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        {instantDemo.sections.map((s, idx) => {
                          const isVisible = instantVisibleCount >= idx + 2;
                          return (
                            <div
                              key={s.title}
                              className={cn(
                                "overflow-hidden rounded-2xl border border-border/60 bg-background/20",
                                "transition-all duration-300 ease-out",
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1",
                              )}
                            >
                              <img
                                src={s.image}
                                alt={s.title}
                                className="h-28 w-full object-cover opacity-70"
                                loading="lazy"
                              />
                              <div className="p-4">
                                <div className="text-sm font-semibold tracking-tight">{s.title}</div>
                                <div className="mt-2 text-sm text-muted-foreground">{s.text}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <div
                        className={cn(
                          "rounded-2xl border border-border/60 bg-background/20 p-5",
                          "transition-all duration-300 ease-out",
                          instantVisibleCount >= instantDemo.sections.length + 2
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-1",
                        )}
                      >
                        <Button asChild variant="whatsapp" size="lg" className="w-full justify-center">
                          <a href={instantDemoWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                            Quiero esta página para mi negocio <MessageCircle />
                          </a>
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="analizador" className="container py-16 sm:py-20">
          <SectionHeader
            eyebrow="Diagnóstico"
            title="Analiza la presencia digital de tu negocio"
            description="Descubre qué le falta a tu negocio para verse realmente profesional online."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div
                data-reveal
                className="card-neon rounded-2xl border border-border/70 bg-gradient-card p-6 text-left shadow-card"
              >
                <div className="text-sm font-semibold tracking-tight">Ingresá tu Instagram o tu nombre</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Esto es un análisis simulado (tipo startup). Te muestra qué suele faltar para convertir visitas en consultas.
                </p>

                <div className="mt-5 grid gap-3">
                  <input
                    value={presenceQuery}
                    onChange={(e) => setPresenceQuery(e.target.value)}
                    placeholder="Ej: @entrenadorfitness o Estética Bella"
                    className={cn(
                      "h-11 w-full rounded-xl border border-border bg-background/40 px-3 text-sm text-foreground",
                      "placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring",
                    )}
                    autoComplete="off"
                    inputMode="text"
                  />
                  <Button
                    type="button"
                    variant="hero"
                    size="lg"
                    className="w-full justify-center glow-neon"
                    onClick={runPresenceAnalysis}
                    disabled={!presenceQuery.trim() || presenceStage === "scanning"}
                  >
                    {presenceStage === "scanning" ? "Analizando..." : "Analizar presencia digital"}{" "}
                    <Sparkles className="h-4 w-4" />
                  </Button>
                </div>

                <div className="mt-4 text-xs text-muted-foreground">
                  Tip: probá con tu @ de Instagram. Luego te digo cómo lo potenciaríamos con una web.
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div
                data-reveal
                className="card-neon overflow-hidden rounded-2xl border border-border/70 bg-gradient-card shadow-card"
              >
                <div className="border-b border-border/40 bg-background/25 px-4 py-3">
                  <div className="text-sm font-semibold tracking-tight">Análisis de presencia digital</div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {presenceStage === "scanning"
                      ? "Escaneando…"
                      : presenceStage === "done"
                        ? "Listo. Este es un diagnóstico rápido."
                        : "Completá el campo y ejecutá el análisis."}
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <div className="grid gap-3">
                    {presenceResults.map((row, idx) => {
                      const isVisible = presenceVisibleCount >= idx + 1;
                      const status = row.status;
                      const icon =
                        status === "ok" ? (
                          <span className="text-[hsl(var(--neon-cyan))]">✔</span>
                        ) : status === "warn" ? (
                          <span className="text-[hsl(var(--neon-purple))]">⚠</span>
                        ) : (
                          <span className="text-red-400">✖</span>
                        );

                      const label =
                        status === "ok" ? row.ok : status === "warn" ? row.warn : row.bad;

                      return (
                        <div
                          key={row.label}
                          className={cn(
                            "rounded-xl border border-border/60 bg-background/20 px-4 py-3",
                            "transition-all duration-300 ease-out",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1",
                          )}
                        >
                          <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <div className="grid h-9 w-9 place-items-center rounded-xl border border-border/60 bg-background/30">
                                {icon}
                              </div>
                              <div className="text-sm font-semibold tracking-tight">{row.label}</div>
                            </div>
                            <div className="text-sm text-muted-foreground">{label}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {presenceStage === "done" ? (
                    <div className="mt-6 rounded-2xl border border-border/60 bg-background/25 p-5">
                      <div className="text-sm font-semibold tracking-tight">Cómo mejorar tu presencia digital</div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Una página web profesional te permite mostrar tus servicios claramente, recibir consultas automáticas y generar más confianza en nuevos clientes.
                      </p>
                      <div className="mt-4">
                        <Button asChild variant="whatsapp" size="lg" className="w-full justify-center">
                          <a href={presenceWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                            Quiero mejorar mi presencia digital <MessageCircle />
                          </a>
                        </Button>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="calculadora" className="container py-16 sm:py-20">
          <SectionHeader
            eyebrow="Calculadora"
            title="Calcula el precio de tu página web"
            description="Elegí opciones y mirá un precio aproximado en tiempo real. Sin vueltas."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div
                data-reveal
                className="card-neon rounded-2xl border border-border/70 bg-gradient-card p-6 text-left shadow-card"
              >
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
              <div
                data-reveal
                className="card-neon glow-soft rounded-2xl border border-border/70 bg-gradient-card p-6 text-left shadow-card"
              >
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
        </section>

        <section id="generador-ideas" className="container py-16 sm:py-20">
          <SectionHeader
            eyebrow="Herramienta"
            title="Genera una idea para la página web de tu negocio"
            description="En segundos, obtené una estructura sugerida para visualizar cómo podría ser tu web y qué mostrar."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div
                data-reveal
                className="card-neon rounded-2xl border border-border/70 bg-gradient-card p-6 text-left shadow-card"
              >
                <label className="space-y-2">
                  <div className="text-sm font-medium text-foreground/90">¿Qué tipo de negocio tienes?</div>
                  <input
                    value={ideaBusiness}
                    onChange={(e) => setIdeaBusiness(e.target.value)}
                    placeholder="Ej: entrenador personal, psicólogo, nutricionista, gimnasio..."
                    className={cn(
                      "h-11 w-full rounded-xl border border-border bg-background/40 px-3 text-sm text-foreground",
                      "placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring",
                    )}
                    autoComplete="organization"
                  />
                </label>

                <div className="mt-4 flex flex-wrap gap-2">
                  {["Entrenador personal", "Psicólogo", "Nutricionista", "Gimnasio"].map((chip) => (
                    <button
                      key={chip}
                      type="button"
                      onClick={() => setIdeaBusiness(chip)}
                      className="rounded-full border border-border/60 bg-background/25 px-3 py-1 text-xs text-muted-foreground transition-colors hover:bg-background/35 hover:text-foreground"
                    >
                      {chip}
                    </button>
                  ))}
                </div>

                <div className="mt-6">
                  <Button
                    type="button"
                    variant="hero"
                    size="lg"
                    className="w-full justify-center glow-neon"
                    onClick={generateIdea}
                    disabled={!ideaBusiness.trim()}
                  >
                    Generar idea <Sparkles className="h-4 w-4" />
                  </Button>
                  <div className="mt-3 text-xs text-muted-foreground">
                    Tip: si escribís tu rubro, la idea se adapta automáticamente.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div
                ref={ideaResultRef}
                className={cn(
                  "transition-all duration-300",
                  ideaResult ? "opacity-100" : "opacity-0",
                  ideaResult && ideaVisible ? "translate-y-0" : "translate-y-2",
                )}
              >
                {ideaResult ? (
                  <div
                    data-reveal
                    className="card-neon glow-soft rounded-2xl border border-border/70 bg-gradient-card p-6 text-left shadow-card"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-sm text-muted-foreground">Resultado</div>
                        <h3 className="mt-2 text-balance text-2xl font-semibold tracking-tight">{ideaResult.title}</h3>
                        <p className="mt-3 text-sm text-muted-foreground">{ideaResult.suggestion}</p>
                      </div>
                      <div className="hidden md:flex h-12 w-12 items-center justify-center rounded-2xl border border-border/60 bg-background/35 text-[hsl(var(--neon-purple))]">
                        <Globe className="h-6 w-6" />
                      </div>
                    </div>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {ideaResult.sections.map((s) => (
                        <div key={s} className="rounded-xl border border-border/60 bg-background/20 px-4 py-3 text-sm">
                          <div className="font-semibold tracking-tight">{s}</div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6">
                      <Button asChild variant="whatsapp" size="lg" className="w-full justify-center">
                        <a href={ideaWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                          Quiero una página así para mi negocio <MessageCircle />
                        </a>
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div
                    data-reveal
                    className="card-neon rounded-2xl border border-border/70 bg-gradient-card p-6 text-left shadow-card"
                  >
                    <div className="text-sm text-muted-foreground">Vista previa</div>
                    <div className="mt-2 text-lg font-semibold tracking-tight">Generá una idea y te muestro la estructura.</div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Esto ayuda a visualizar el resultado y acelera la decisión.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="constructor-visual" className="container py-16 sm:py-20">
          <SectionHeader
            eyebrow="Constructor visual"
            title="Crea una idea de tu página web en segundos"
            description="Selecciona las secciones que quieres para tu página y mira cómo se vería."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div
                data-reveal
                className="card-neon rounded-2xl border border-border/70 bg-gradient-card p-6 text-left shadow-card"
              >
                <div className="text-sm font-semibold tracking-tight">Constructor</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Marcá secciones y mirá la maqueta actualizarse en tiempo real. Esto se ajusta a tu rubro y objetivos.
                </p>

                <div className="mt-5 grid gap-3">
                  {constructorSections.map((s) => (
                    <label
                      key={s.id}
                      className="flex cursor-pointer items-start gap-3 rounded-xl border border-border/60 bg-background/20 px-4 py-3 text-sm transition-colors hover:bg-background/30"
                    >
                      <input
                        type="checkbox"
                        checked={!!selectedConstructor[s.id]}
                        onChange={() => toggleConstructorSection(s.id)}
                        className="mt-1 h-4 w-4 accent-[hsl(var(--neon-cyan))]"
                      />
                      <div className="flex-1">
                        <div className="font-semibold tracking-tight">{s.label}</div>
                        <div className="mt-1 text-xs text-muted-foreground">{s.body}</div>
                      </div>
                    </label>
                  ))}
                </div>

                <div className="mt-6">
                  <Button asChild variant="whatsapp" size="lg" className="w-full justify-center">
                    <a href={constructorWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                      Quiero esta página para mi negocio <MessageCircle />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div
                data-reveal
                className="card-neon overflow-hidden rounded-2xl border border-border/70 bg-gradient-card shadow-card"
              >
                <div className="border-b border-border/40 bg-background/25 px-4 py-3">
                  <div className="text-sm font-semibold tracking-tight">Vista previa</div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    Maqueta visual (bloques) de cómo quedaría tu web.
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  {constructorSections.map((s) => {
                    const isSelected = !!selectedConstructor[s.id];
                    const isLeaving = !!leavingConstructor[s.id];
                    const shouldRender = isSelected || isLeaving;
                    const isOpen = isSelected;

                    if (!shouldRender) return null;

                    return (
                      <div
                        key={s.id}
                        className={cn(
                          "rounded-2xl border bg-background/20 px-5 py-4 shadow-[0_18px_60px_-35px_rgba(34,211,238,0.25)]",
                          "transition-all duration-300 ease-out",
                          isOpen
                            ? "mt-3 first:mt-0 opacity-100 translate-y-0 border-[hsl(var(--neon-cyan))]/25"
                            : "mt-0 opacity-0 -translate-y-1 border-border/30",
                        )}
                        aria-hidden={!isOpen}
                      >
                        {renderConstructorPreview(s)}
                      </div>
                    );
                  })}
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
              method="POST"
              action={GOOGLE_SHEETS_SCRIPT_URL}
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
                  type="tel"
                  id="telefono"
                  name="telefono"
                  placeholder="Teléfono"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={cn(
                    "h-11 w-full rounded-xl border border-border bg-background/40 px-3 text-sm text-foreground",
                    "placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring",
                  )}
                  autoComplete="tel"
                  inputMode="tel"
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
                  {leadStage === "sending" ? "Enviando..." : "Enviar y registrar lead"} <MessageCircle />
                </Button>
                <div className="text-xs text-muted-foreground">
                  Se registra el lead y luego continúas por WhatsApp con un mensaje listo.
                </div>
              </div>
              <p id="status" aria-live="polite" className="mt-3 text-sm text-muted-foreground">
                {statusText}
              </p>
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
