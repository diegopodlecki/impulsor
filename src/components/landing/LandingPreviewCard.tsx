import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { type LandingConfig } from "@/data/landings";
import { getLandingImages } from "./landingImages";
import { getLandingTheme } from "./landingThemes";

function initials(name: string) {
  return name
    .split(/[\s.]+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function fallbackTestimonial(config: LandingConfig) {
  if (config.testimonial) return config.testimonial;

  return {
    name: config.aboutName,
    role: config.aboutRole,
    text: `${config.heroPreviewTitle} con una propuesta visual clara y orientada a convertir consultas reales.`,
  };
}

const previewVariants: Record<
  string,
  {
    kicker: string;
    heroLabel: string;
    serviceLabel: string;
    footerLabel: string;
    badgeLabel: string;
  }
> = {
  default: {
    kicker: "Landing moderna y enfocada",
    heroLabel: "Presencia clara",
    serviceLabel: "Lo esencial",
    footerLabel: "Ver ejemplo real",
    badgeLabel: "Demo",
  },
  gimnasios: {
    kicker: "Entrenamiento, horarios y acciÃ³n",
    heroLabel: "MÃ¡s alumnos",
    serviceLabel: "Clases y equipamiento",
    footerLabel: "Ver la versiÃ³n gym",
    badgeLabel: "Fitness",
  },
  "personal-trainers": {
    kicker: "Marca personal premium",
    heroLabel: "Sesiones y progreso",
    serviceLabel: "Experiencia de entrenamiento",
    footerLabel: "Ver el ejemplo trainer",
    badgeLabel: "Trainer",
  },
  nutricionistas: {
    kicker: "Clínica, orden y confianza",
    heroLabel: "Consultas más claras",
    serviceLabel: "Seguimiento y turnos",
    footerLabel: "Ver el ejemplo nutrición",
    badgeLabel: "Nutrición",
  },
  psicologos: {
    kicker: "Calma y cercanía",
    heroLabel: "Espacio seguro",
    serviceLabel: "Acompañamiento amable",
    footerLabel: "Ver el ejemplo consultorio",
    badgeLabel: "Psi",
  },
  "estetica-corporal": {
    kicker: "Imagen premium y resultados",
    heroLabel: "MÃ¡s deseo visual",
    serviceLabel: "Tratamientos y prueba",
    footerLabel: "Ver el ejemplo estÃ©tica",
    badgeLabel: "Beauty",
  },
  emprendedores: {
    kicker: "Oferta clara y autoridad",
    heroLabel: "MÃ¡s conversiones",
    serviceLabel: "Propuesta y prueba social",
    footerLabel: "Ver el ejemplo negocio",
    badgeLabel: "Launch",
  },
  "iron-fitness": {
    kicker: "La landing original",
    heroLabel: "Iron Fitness",
    serviceLabel: "VersiÃ³n completa",
    footerLabel: "Ver ejemplo real",
    badgeLabel: "Gym",
  },
};

function getPreviewVariant(slug: string) {
  return previewVariants[slug] ?? previewVariants.default;
}

export function LandingPreviewCard({
  config,
  href,
  rubric,
}: {
  config: LandingConfig;
  href: string;
  rubric: string;
}) {
  const theme = getLandingTheme(config.slug);
  const images = getLandingImages(config.slug);
  const variant = getPreviewVariant(config.slug);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let timer = 0;
    let direction: 1 | -1 = 1;

    const tick = () => {
      if (!scroller || pausedRef.current) {
        timer = window.setTimeout(tick, 60);
        return;
      }

      const maxScroll = scroller.scrollHeight - scroller.clientHeight;
      if (maxScroll <= 0) {
        timer = window.setTimeout(tick, 60);
        return;
      }

      const nextTop = scroller.scrollTop + 0.36 * direction;
      if (nextTop >= maxScroll - 2) {
        direction = -1;
        scroller.scrollTop = maxScroll;
        timer = window.setTimeout(tick, 850);
        return;
      }

      if (nextTop <= 0) {
        direction = 1;
        scroller.scrollTop = 0;
        timer = window.setTimeout(tick, 1100);
        return;
      }

      scroller.scrollTop = nextTop;
      timer = window.setTimeout(tick, 24);
    };

    timer = window.setTimeout(tick, 700);
    return () => window.clearTimeout(timer);
  }, []);

  const testimonial = fallbackTestimonial(config);
  const serviceCards = config.services.slice(0, 3);
  const points = [...config.solutionPoints.slice(0, 3), ...config.benefits.slice(0, 1).map((item) => item.title)];

  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-[14px] border bg-[#0d0d12] transition-all duration-200 hover:-translate-y-1"
      style={{
        borderColor: theme.border,
        boxShadow: `0 18px 40px -30px ${theme.glow}`,
      }}
    >
      <style>{`
        @keyframes landing-preview-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>

      <div className="border-b px-4 py-3" style={{ borderColor: theme.border, background: theme.primary }}>
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-[#9CA3AF]">{variant.badgeLabel}</p>
            <div className="mt-1 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full" style={{ backgroundColor: theme.accent }} />
              <h3 className="text-[13px] font-semibold text-[#F5F5F5]">{rubric}</h3>
            </div>
          </div>

          <span className="inline-flex items-center gap-2 rounded-full bg-[rgba(255,255,255,0.06)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F5F5F5]">
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: theme.accent, animation: "landing-preview-dot 2s ease-in-out infinite" }}
            />
            Ver demo
          </span>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="relative max-h-[460px] overflow-y-auto overscroll-contain [scrollbar-width:none]"
        onPointerEnter={() => {
          pausedRef.current = true;
        }}
        onPointerLeave={() => {
          pausedRef.current = false;
        }}
      >
        <div
          className="px-4 py-4"
          style={{
            background: `linear-gradient(180deg, ${theme.primary}, #050505 100%)`,
          }}
        >
          <div
            className="rounded-[12px] border p-4"
            style={{
              borderColor: theme.border,
              background: `linear-gradient(180deg, ${theme.surface}, rgba(10,10,10,0.95))`,
            }}
          >
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-medium" style={{ borderColor: theme.border, backgroundColor: `${theme.accent}14`, color: theme.accent }}>
              <span className="mr-2">â—</span>
              {variant.kicker}
            </div>
            <p className="mt-3 text-[10px] uppercase tracking-[0.24em] text-[#9CA3AF]">{variant.heroLabel}</p>
            <h4 className="mt-3 text-[24px] font-extrabold leading-[1.05] text-[#F5F5F5]">
              {config.heroTitle}
            </h4>
            <p className="mt-3 text-[12px] leading-5 text-[#9CA3AF]">{config.heroSubtitle}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-[8px] px-3 py-2 text-[11px] font-bold text-[#0A0A0A]" style={{ backgroundColor: theme.accent }}>
                {config.heroCta}
              </span>
              <span className="rounded-[8px] border px-3 py-2 text-[11px] font-bold" style={{ borderColor: theme.accent, color: theme.accent }}>
                {config.heroSecondaryCta}
              </span>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-[#9CA3AF]">
              {points.map((point, index) => (
                <span key={point} className="inline-flex items-center gap-x-3">
                  {index > 0 ? <span style={{ color: theme.accent }}>Â·</span> : null}
                  <span>{point}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {serviceCards.map((service, index) => (
              <article
                key={service.title}
                className="rounded-[10px] border p-3"
                style={{ borderColor: theme.border, background: `${theme.surface}cc` }}
              >
                <div className="h-[84px] overflow-hidden rounded-[8px]">
                  <img
                    src={config.slug === "iron-fitness" && index === 0 ? images.heroImage : service.image ?? images.serviceImages[index] ?? images.heroImage}
                    alt={service.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h5 className="mt-3 text-[12px] font-semibold text-[#F5F5F5]">{service.title}</h5>
                <p className="mt-1 text-[11px] leading-5 text-[#9CA3AF]">{service.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-3 grid gap-3 sm:grid-cols-[1.05fr_0.95fr]">
            <article className="rounded-[10px] border p-3" style={{ borderColor: theme.border, background: `${theme.surface}cc` }}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#9CA3AF]">Testimonio</p>
                  <p className="mt-1 text-[13px] font-semibold text-[#F5F5F5]">{testimonial.name}</p>
                </div>
                <div className="text-[11px] text-[#F5F5F5]">â˜…â˜…â˜…â˜…â˜…</div>
              </div>
              <p className="mt-2 text-[11px] leading-5 text-[#D1D5DB]">"{testimonial.text}"</p>
            </article>

            <article className="rounded-[10px] border p-3" style={{ borderColor: theme.border, background: `${theme.accent}10` }}>
              <div className="flex items-center gap-3">
                <img src={images.heroMockupImage} alt={config.heroPreviewTitle} className="h-16 w-16 rounded-[8px] object-cover" loading="lazy" decoding="async" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#9CA3AF]">{config.heroPreviewTitle}</p>
                  <p className="mt-1 text-[12px] leading-5 text-[#F5F5F5]">{config.heroPreviewSubtitle}</p>
                </div>
              </div>
            </article>
          </div>

          <div className="mt-3 rounded-[12px] border p-4" style={{ borderColor: theme.border, background: `${theme.primary}e6` }}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#9CA3AF]">{config.servicesTitle}</p>
                <p className="mt-1 text-[14px] font-semibold text-[#F5F5F5]">{variant.serviceLabel}</p>
              </div>
              <div className="rounded-full px-4 py-2 text-[11px] font-bold text-[#0A0A0A]" style={{ backgroundColor: theme.accent }}>
                {variant.footerLabel}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-start justify-between gap-3 p-4">
        <div>
          <h4 className="text-[13px] font-medium leading-none text-[#f0f0f0]">{variant.heroLabel}</h4>
          <p className="mt-1 text-[11px] text-[rgba(255,255,255,0.38)]">{rubric}</p>
        </div>

        <Link
          to={href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-semibold text-[#0A0A0A] transition-transform duration-200 hover:scale-[1.03]"
          style={{ backgroundColor: theme.accent }}
          aria-label={`Ver ejemplo real de ${config.heroBadge} en una nueva pestaÃ±a`}
        >
          Ver ejemplo real
          <span aria-hidden="true">â†—</span>
        </Link>
      </div>
    </article>
  );
}

