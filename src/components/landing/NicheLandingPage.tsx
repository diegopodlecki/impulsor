import { useEffect, type ReactNode } from "react";
import {
  Brain,
  Calendar,
  Camera,
  CreditCard,
  Dumbbell,
  FileText,
  Heart,
  Image,
  Info,
  List,
  MessageCircle,
  Sparkles,
  Star,
  Target,
  User,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { type LandingConfig } from "@/data/landings";
import { defaultWhatsappLink, whatsappLink } from "@/components/landing/landingVisuals";
import { getLandingTheme } from "@/components/landing/landingThemes";

function SectionTitle({
  eyebrow,
  title,
  description,
  accent,
}: {
  eyebrow: string;
  title: string;
  description: string;
  accent?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground" style={{ color: accent }}>
        {eyebrow}
      </p>
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      <p className="mt-4 text-pretty text-muted-foreground">{description}</p>
    </div>
  );
}

function getIcon(iconName: string) {
  const icons: Record<string, ReactNode> = {
    image: <Image className="h-6 w-6" />,
    calendar: <Calendar className="h-6 w-6" />,
    camera: <Camera className="h-6 w-6" />,
    form: <FileText className="h-6 w-6" />,
    target: <Target className="h-6 w-6" />,
    dumbbell: <Dumbbell className="h-6 w-6" />,
    star: <Star className="h-6 w-6" />,
    "credit-card": <CreditCard className="h-6 w-6" />,
    heart: <Heart className="h-6 w-6" />,
    list: <List className="h-6 w-6" />,
    user: <User className="h-6 w-6" />,
    users: <Users className="h-6 w-6" />,
    brain: <Brain className="h-6 w-6" />,
    info: <Info className="h-6 w-6" />,
    sparkles: <Sparkles className="h-6 w-6" />,
  };

  return icons[iconName] || <Sparkles className="h-6 w-6" />;
}

function syncMetaTag(selector: string, attributes: Record<string, string>) {
  const existing = document.querySelector<HTMLMetaElement>(selector);
  const tag = existing ?? document.createElement("meta");

  Object.entries(attributes).forEach(([key, value]) => {
    tag.setAttribute(key, value);
  });

  if (!existing) {
    document.head.appendChild(tag);
  }
}

function syncLinkTag(selector: string, attributes: Record<string, string>) {
  const existing = document.querySelector<HTMLLinkElement>(selector);
  const tag = existing ?? document.createElement("link");

  Object.entries(attributes).forEach(([key, value]) => {
    tag.setAttribute(key, value);
  });

  if (!existing) {
    document.head.appendChild(tag);
  }
}

const landingSeo: Record<
  string,
  {
    title: string;
    description: string;
    keywords: string;
    canonicalPath: string;
    ogImagePath: string;
  }
> = {
  gimnasios: {
    title: "Web para gimnasios que generan alumnos | WebAppImpulsor",
    description:
      "Landing page para gimnasios enfocada en conseguir nuevos alumnos, mostrar clases, horarios e instalaciones y convertir consultas por WhatsApp.",
    keywords: "web para gimnasios, landing page para gimnasios, página web para gimnasio, conseguir alumnos online",
    canonicalPath: "/gimnasios",
    ogImagePath: "/og/gimnasios.svg",
  },
  "personal-trainers": {
    title: "Web para entrenadores personales que generan clientes | WebAppImpulsor",
    description:
      "Landing page para entrenadores personales pensada para conseguir clientes online, mostrar rutinas, testimonios y planes de entrenamiento.",
    keywords: "web para entrenadores personales, landing para personal trainer, página web para entrenador, conseguir clientes online",
    canonicalPath: "/entrenadores",
    ogImagePath: "/og/entrenadores.svg",
  },
  nutricionistas: {
    title: "Web para nutricionistas que generan consultas | WebAppImpulsor",
    description:
      "Landing page para nutricionistas enfocada en captar pacientes, mostrar servicios y facilitar el contacto directo por WhatsApp.",
    keywords: "web para nutricionistas, landing page para nutricionista, página web para nutrición, conseguir consultas online",
    canonicalPath: "/nutricionistas",
    ogImagePath: "/og/nutricionistas.svg",
  },
  psicologos: {
    title: "Web para psicólogos que transmiten confianza | WebAppImpulsor",
    description:
      "Landing page para psicólogos pensada para transmitir confianza, captar consultas y facilitar el primer contacto con pacientes.",
    keywords: "web para psicólogos, landing page para psicólogo, página web para consultorio, generar consultas online",
    canonicalPath: "/psicologos",
    ogImagePath: "/og/psicologos.svg",
  },
  "estetica-corporal": {
    title: "Web para estética corporal que vende más consultas | WebAppImpulsor",
    description:
      "Landing page para estética corporal diseñada para mostrar tratamientos, transmitir imagen premium y convertir más consultas.",
    keywords: "web para estética corporal, landing page para estética, página web para tratamientos, conseguir consultas online",
    canonicalPath: "/estetica-corporal",
    ogImagePath: "/og/estetica-corporal.svg",
  },
  emprendedores: {
    title: "Web para emprendedores que convierten visitas en clientes | WebAppImpulsor",
    description:
      "Landing page para emprendedores enfocada en mostrar la propuesta de valor, construir autoridad y facilitar el contacto.",
    keywords: "web para emprendedores, landing page para emprendedores, página web para servicios, vender online",
    canonicalPath: "/emprendedores",
    ogImagePath: "/og/emprendedores.svg",
  },
};

const fallbackTestimonials = [
  {
    name: "María González",
    role: "Dueña de gimnasio",
    text: "Desde que tenemos la web, recibimos consultas todos los días. Antes dependíamos solo de Instagram.",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    role: "Personal trainer",
    text: "Mi marca personal se ve mucho más profesional. Los clientes me encuentran más fácil y confían más.",
    rating: 5,
  },
  {
    name: "Laura Martínez",
    role: "Nutricionista",
    text: "La web me ayuda a filtrar pacientes y agendar consultas sin perder tiempo. Muy recomendable.",
    rating: 5,
  },
];

const landingVoices: Record<
  string,
  {
    heroStats: Array<{ value: string; label: string }>;
    testimonialTitle: string;
    testimonialDescription: string;
    contactBadge: string;
    closingEyebrow: string;
  }
> = {
  default: {
    heroStats: [
      { value: "Más consultas", label: "en menos fricción" },
      { value: "Imagen premium", label: "desde el primer vistazo" },
      { value: "Contacto directo", label: "con WhatsApp y formulario" },
    ],
    testimonialTitle: "Mockups y prueba social para cerrar más confianza",
    testimonialDescription:
      "La combinación de una landing visual con testimonios claros ayuda a que la decisión de contactarte se sienta más fácil.",
    contactBadge: "WhatsApp visible y respuesta rápida",
    closingEyebrow: "Cierre",
  },
  gimnasios: {
    heroStats: [
      { value: "+ Socios", label: "más inscripciones" },
      { value: "Clases claras", label: "en un vistazo" },
      { value: "Turnos rápidos", label: "por WhatsApp" },
    ],
    testimonialTitle: "Inscripciones y prueba social para sumar alumnos",
    testimonialDescription:
      "Para gimnasios, mostrar resultados, horarios y comunidad hace que la visita se convierta en consulta con más facilidad.",
    contactBadge: "Consultas rápidas y visitas al gym",
    closingEyebrow: "Empezá hoy",
  },
  "personal-trainers": {
    heroStats: [
      { value: "Método propio", label: "más autoridad" },
      { value: "Resultados", label: "que generan confianza" },
      { value: "Plan premium", label: "más cierres" },
    ],
    testimonialTitle: "Resultados y método para vender tu marca personal",
    testimonialDescription:
      "Como entrenador, lo que más convierte es una propuesta clara, con autoridad y foco en transformación real.",
    contactBadge: "Captá clientes para entrenamiento personalizado",
    closingEyebrow: "Tu método",
  },
  nutricionistas: {
    heroStats: [
      { value: "Confianza", label: "desde el primer scroll" },
      { value: "Agenda clara", label: "sin fricción" },
      { value: "Seguimiento", label: "más ordenado" },
    ],
    testimonialTitle: "Autoridad y claridad para captar pacientes",
    testimonialDescription:
      "En nutrición, la claridad del servicio y la sensación de acompañamiento son claves para lograr reservas.",
    contactBadge: "Consultas claras y turnos organizados",
    closingEyebrow: "Agendá hoy",
  },
  psicologos: {
    heroStats: [
      { value: "Calma visual", label: "más confianza" },
      { value: "Contacto simple", label: "sin fricción" },
      { value: "Primer turno", label: "más fácil" },
    ],
    testimonialTitle: "Confianza y cercanía para facilitar el primer contacto",
    testimonialDescription:
      "La experiencia visual debe acompañar una decisión sensible: pedir ayuda y agendar el primer turno.",
    contactBadge: "Un primer paso más humano y claro",
    closingEyebrow: "Acompañamiento",
  },
  "estetica-corporal": {
    heroStats: [
      { value: "Imagen premium", label: "más deseo" },
      { value: "Antes y después", label: "más prueba" },
      { value: "Más consultas", label: "menos dudas" },
    ],
    testimonialTitle: "Presencia premium para tratamientos que venden",
    testimonialDescription:
      "En estética, la percepción visual y la prueba de resultados empujan mucho más que un texto genérico.",
    contactBadge: "Consultas elegantes con foco en resultados",
    closingEyebrow: "Elegancia",
  },
  emprendedores: {
    heroStats: [
      { value: "Oferta clara", label: "en segundos" },
      { value: "Autoridad", label: "que ordena" },
      { value: "Más ventas", label: "con foco" },
    ],
    testimonialTitle: "Claridad y autoridad para vender servicios",
    testimonialDescription:
      "Cuando un emprendimiento comunica mejor su propuesta, consigue consultas más calificadas y mejor tasa de cierre.",
    contactBadge: "Una landing pensada para convertir",
    closingEyebrow: "Convertí más",
  },
};

function getLandingVoice(slug: string) {
  return landingVoices[slug] ?? landingVoices.default;
}

function HeroMockup({
  config,
  accent,
  theme,
}: {
  config: LandingConfig;
  accent: string;
  theme: ReturnType<typeof getLandingTheme>;
}) {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute -inset-6 rounded-[2.5rem] blur-3xl"
        style={{ background: `radial-gradient(circle at top, ${theme.heroGlow}, transparent 65%)` }}
      />

      <div
        className="relative overflow-hidden rounded-[2rem] p-4 shadow-2xl shadow-black/30"
        style={{
          border: `1px solid ${theme.border}`,
          background: `linear-gradient(180deg, ${theme.primary}f2, rgba(0,0,0,0.96))`,
        }}
      >
        <div className="flex items-center gap-2 border-b pb-3 text-xs text-white/55" style={{ borderColor: theme.border }}>
          <span className="h-3 w-3 rounded-full bg-rose-400/90" />
          <span className="h-3 w-3 rounded-full bg-amber-300/90" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/90" />
          <span
            className="ml-3 rounded-full px-3 py-1 uppercase tracking-[0.22em]"
            style={{
              border: `1px solid ${theme.border}`,
              background: `${theme.accent}12`,
              color: "rgba(255,255,255,0.72)",
            }}
          >
            Mockup de landing
          </span>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[1.06fr_0.94fr]">
          <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/80">
            <img src={config.preview} alt={`Vista previa de ${config.title}`} className="h-full w-full object-cover" />
          </div>

          <div className="grid gap-4">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/75">
              <img src={config.heroMockupImage} alt={`Mockup de ${config.title}`} className="h-full w-full object-cover" />
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/50">{config.heroPreviewTitle}</p>
              <p className="mt-2 text-sm leading-6 text-white/75">{config.heroPreviewSubtitle}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/75">
                  WhatsApp visible
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/75">
                  Diseño claro
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/75">
                  Confianza inmediata
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialPreview({
  config,
  accent,
  theme,
  testimonial,
}: {
  config: LandingConfig;
  accent: string;
  theme: ReturnType<typeof getLandingTheme>;
  testimonial: { name: string; role: string; text: string };
}) {
  const secondaryCard = fallbackTestimonials[1];
  const tertiaryCard = fallbackTestimonials[2];

  return (
    <div className="grid gap-4 lg:grid-cols-[1.02fr_0.98fr]">
      <div
        className="rounded-[2rem] p-6 sm:p-8"
        style={{
          border: `1px solid ${theme.border}`,
          background: `linear-gradient(180deg, ${theme.surface}, ${theme.primary})`,
        }}
      >
        <div
          className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em]"
          style={{
            border: `1px solid ${theme.border}`,
            backgroundColor: `${theme.accent}12`,
            color: theme.accent,
          }}
        >
          <Sparkles className="h-3.5 w-3.5" style={{ color: accent }} />
          Testimonio destacado
        </div>
        <blockquote className="mt-6 text-2xl font-semibold leading-9 tracking-tight text-pretty sm:text-3xl sm:leading-10">
          “{testimonial.text}”
        </blockquote>
        <div className="mt-8 flex items-center gap-4">
          <div className="overflow-hidden rounded-2xl p-2" style={{ border: `1px solid ${theme.border}`, backgroundColor: `${theme.accent}10` }}>
            <img src={config.profile} alt={testimonial.name} className="h-14 w-14 rounded-xl object-cover" />
          </div>
          <div>
            <p className="font-semibold">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            <div className="mt-1 flex items-center gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {[
            "Más confianza",
            "Más consultas",
            "Mejor imagen",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl px-4 py-3 text-sm text-white/80"
              style={{ border: `1px solid ${theme.border}`, backgroundColor: `${theme.primary}cc` }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-4">
        <div className="rounded-[2rem] p-4" style={{ border: `1px solid ${theme.border}`, backgroundColor: theme.primary }}>
          <div className="overflow-hidden rounded-[1.5rem]" style={{ border: `1px solid ${theme.border}`, backgroundColor: theme.surface }}>
            <img src={config.preview} alt={`Vista previa secundaria de ${config.title}`} className="h-full w-full object-cover" />
          </div>
          <div className="mt-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground" style={{ color: theme.accent }}>
                Mockup de resultado
              </p>
              <p className="mt-1 text-sm text-muted-foreground">Así se ve tu landing antes de escribirte.</p>
            </div>
            <span
              className="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/65"
              style={{ border: `1px solid ${theme.border}`, backgroundColor: `${theme.accent}12`, color: theme.accent }}
            >
              Preview
            </span>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[secondaryCard, tertiaryCard].map((item) => (
            <div key={item.name} className="rounded-[1.5rem] p-5" style={{ border: `1px solid ${theme.border}`, backgroundColor: theme.surface }}>
              <div className="flex items-center gap-3">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-2xl text-white"
                  style={{ backgroundColor: `${theme.accent}14` }}
                >
                  <span className="text-sm font-bold">{item.name.split(" ").map((part) => part[0]).join("")}</span>
                </div>
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const landingNav = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
];

export function NicheLandingPage({ config }: { config: LandingConfig }) {
  useEffect(() => {
    const seo = landingSeo[config.slug];

    if (!seo) return;

    const canonicalUrl = `${window.location.origin}${seo.canonicalPath}`;
    const ogImageUrl = `${window.location.origin}${seo.ogImagePath}`;

    document.title = seo.title;
    syncMetaTag('meta[name="description"]', { name: "description", content: seo.description });
    syncMetaTag('meta[name="keywords"]', { name: "keywords", content: seo.keywords });
    syncMetaTag('meta[property="og:title"]', { property: "og:title", content: seo.title });
    syncMetaTag('meta[property="og:description"]', { property: "og:description", content: seo.description });
    syncMetaTag('meta[property="og:image"]', { property: "og:image", content: ogImageUrl });
    syncMetaTag('meta[property="og:image:alt"]', { property: "og:image:alt", content: `${config.title} | WebAppImpulsor` });
    syncMetaTag('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
    syncMetaTag('meta[name="twitter:title"]', { name: "twitter:title", content: seo.title });
    syncMetaTag('meta[name="twitter:description"]', { name: "twitter:description", content: seo.description });
    syncMetaTag('meta[name="twitter:image"]', { name: "twitter:image", content: ogImageUrl });
    syncLinkTag('link[rel="canonical"]', {
      rel: "canonical",
      href: canonicalUrl,
    });
  }, [config.slug, config.title]);

  const accent = config.accentColor ?? config.primaryColor ?? "#0EA5E9";
  const primary = config.primaryColor ?? accent;
  const theme = getLandingTheme(config.slug);
  const voice = getLandingVoice(config.slug);
  const featuredTestimonial = config.testimonial ?? fallbackTestimonials[0];

  return (
    <main className="min-h-screen overflow-x-hidden text-foreground" style={{ background: theme.pageBackground, color: "#F5F5F5" }}>
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${theme.primary}, ${theme.pageBackground})` }} />
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 12% 18%, ${theme.heroGlow}, transparent 32%), radial-gradient(circle at 84% 12%, ${theme.accent}14, transparent 30%), radial-gradient(circle at 60% 88%, ${theme.accent}10, transparent 28%)`,
          }}
        />
      </div>

      <header className="sticky top-0 z-50 backdrop-blur-xl" style={{ borderBottom: `1px solid ${theme.border}`, background: `${theme.primary}dd` }}>
        <div className="container flex h-16 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ background: `linear-gradient(135deg, ${theme.accent}, ${theme.primary})` }}>
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white">WebAppImpulsor</span>
              <span className="text-[11px] uppercase tracking-[0.24em] text-white/45">Landings que convierten</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {landingNav.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-white/70 transition-colors hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <Button asChild size="sm" className="bg-[#25D366] text-white hover:bg-[#20bd5a]">
            <a href={defaultWhatsappLink()} target="_blank" rel="noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </a>
          </Button>
        </div>
      </header>

      <section id="inicio" className="container scroll-mt-24 py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
              style={{ border: `1px solid ${theme.border}`, backgroundColor: `${theme.accent}12`, color: theme.accent }}
            >
              <Sparkles className="h-4 w-4" style={{ color: accent }} />
              {config.heroBadge}
            </div>

            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {config.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">
              {config.heroSubtitle}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-[#25D366] text-white hover:bg-[#20bd5a]">
                <a href={whatsappLink(config.whatsappMessage)} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {config.heroCta}
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-white hover:text-white"
                style={{ borderColor: theme.border, backgroundColor: `${theme.primary}80` }}
              >
                <a href="#servicios">{config.heroSecondaryCta}</a>
              </Button>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {voice.heroStats.map((item) => (
                <div key={item.value} className="rounded-[1.5rem] p-4" style={{ border: `1px solid ${theme.border}`, backgroundColor: `${theme.surface}cc` }}>
                  <p className="text-sm font-semibold text-white">{item.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <HeroMockup config={config} accent={accent} theme={theme} />
        </div>
      </section>

      <section id="servicios" className="container scroll-mt-24 py-16 sm:py-20">
        <SectionTitle
          eyebrow="Servicios"
          title={config.servicesTitle}
          description={config.servicesSubtitle}
          accent={accent}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {config.services.map((service) => (
            <div
              key={service.title}
              className="rounded-[1.75rem] p-6 transition-transform duration-200 hover:-translate-y-1"
              style={{
                border: `1px solid ${theme.border}`,
                background: `linear-gradient(180deg, ${theme.surface}, ${theme.primary})`,
                boxShadow: `0 20px 40px -30px ${theme.glow}`,
              }}
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{ backgroundColor: `${accent}14`, color: primary }}
              >
                {getIcon(service.icon)}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="testimonios" className="container scroll-mt-24 py-16 sm:py-20">
        <SectionTitle
          eyebrow="Testimonios"
          title={voice.testimonialTitle}
          description={voice.testimonialDescription}
          accent={accent}
        />

        <div className="mt-12">
          <TestimonialPreview config={config} accent={accent} theme={theme} testimonial={featuredTestimonial} />
        </div>
      </section>

      <section id="contacto" className="container scroll-mt-24 py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <div className="rounded-[2rem] p-6 sm:p-8" style={{ border: `1px solid ${theme.border}`, background: `linear-gradient(180deg, ${theme.surface}, ${theme.primary})` }}>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">Contacto directo</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">{config.formTitle}</h2>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{config.formSubtitle}</p>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium" style={{ border: `1px solid ${theme.border}`, backgroundColor: `${theme.accent}12`, color: theme.accent }}>
                <MessageCircle className="h-4 w-4" />
                {voice.contactBadge}
              </div>

              <div className="mt-6 space-y-3">
                {[
                  "Respuesta rápida y clara",
                  "Ideal para presupuestos, reservas y consultas",
                  "Te respondo en menos de 24 hs",
                ].map((item) => (
                  <div key={item} className="rounded-2xl px-4 py-4 text-sm text-white/80" style={{ border: `1px solid ${theme.border}`, backgroundColor: `${theme.primary}cc` }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-[2rem] p-6 sm:p-8" style={{ border: `1px solid ${theme.border}`, background: `linear-gradient(180deg, ${theme.surface}, ${theme.primary})`, boxShadow: `0 24px 70px -44px ${theme.glow}` }}>
              <ContactForm title={config.formTitle} description={config.formSubtitle} buttonLabel="Enviar mensaje" trustText="Te respondo en menos de 24 hs" />
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[2rem] p-6 sm:p-8" style={{ border: `1px solid ${theme.border}`, background: `linear-gradient(180deg, ${theme.primary}, ${theme.pageBackground})` }}>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em]" style={{ color: theme.accent }}>
                {voice.closingEyebrow}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{config.finalCtaTitle}</h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">{config.finalCtaText}</p>
            </div>

            <div className="flex flex-col gap-3">
              <Button asChild size="lg" className="bg-[#25D366] text-white hover:bg-[#20bd5a]">
                <a href={whatsappLink(config.whatsappMessage)} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Hablar por WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white">
                <a href="#inicio">Volver arriba</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8" style={{ borderTop: `1px solid ${theme.border}`, background: `${theme.primary}f2` }}>
        <div className="container flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold tracking-tight text-white">WebAppImpulsor</p>
            <p className="mt-1 text-sm text-white/50">
              Diego Podlecki · <a className="transition-colors hover:text-white" href="mailto:info.diego@webappimpulsor.com">info.diego@webappimpulsor.com</a>
            </p>
          </div>
          <div className="text-sm text-white/50">Diseño web enfocado en resultados</div>
        </div>
      </footer>

      <a
        href={whatsappLink(config.whatsappMessage)}
        target="_blank"
        rel="noreferrer"
        aria-label="Hablar por WhatsApp"
        className="animate-wa-pulse fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_50px_-18px_rgba(34,197,94,0.7)] transition-transform duration-300 hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </main>
  );
}



