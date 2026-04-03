import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { analytics } from "@/components/analytics/analytics";

import { type LandingConfig } from "@/data/landings";
import { getLandingImages } from "./landingImages";
import { getLandingTheme } from "./landingThemes";

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
    kicker: "Presentación clara y estratégica",
    heroLabel: "Primera impresión",
    serviceLabel: "Lo esencial, bien comunicado",
    footerLabel: "Ver propuesta",
    badgeLabel: "Propuesta",
  },
  gimnasio: {
    kicker: "Clases, horarios y decisión",
    heroLabel: "Más socios",
    serviceLabel: "Clases y equipamiento",
    footerLabel: "Ver caso gimnasio",
    badgeLabel: "Fitness",
  },
  "personal-trainer": {
    kicker: "Marca personal con autoridad",
    heroLabel: "Sesiones y progreso",
    serviceLabel: "Experiencia de entrenamiento",
    footerLabel: "Ver propuesta trainer",
    badgeLabel: "Trainer",
  },
  nutritionist: {
    kicker: "Orden, claridad y confianza",
    heroLabel: "Consultas mejor calificadas",
    serviceLabel: "Seguimiento y turnos",
    footerLabel: "Ver propuesta nutrición",
    badgeLabel: "Nutrición",
  },
  psicologo: {
    kicker: "Calma visual y contención",
    heroLabel: "Espacio seguro",
    serviceLabel: "Acompañamiento profesional",
    footerLabel: "Ver propuesta consultorio",
    badgeLabel: "Psi",
  },
  "estetica-corporal": {
    kicker: "Imagen premium y resultados",
    heroLabel: "Más deseo visual",
    serviceLabel: "Tratamientos y prueba",
    footerLabel: "Ver propuesta estética",
    badgeLabel: "Beauty",
  },
  emprendedor: {
    kicker: "Oferta clara y autoridad",
    heroLabel: "Más conversiones",
    serviceLabel: "Propuesta y prueba social",
    footerLabel: "Ver propuesta negocio",
    badgeLabel: "Launch",
  },
  "iron-fitness": {
    kicker: "La landing original",
    heroLabel: "Iron Fitness",
    serviceLabel: "Versión completa",
    footerLabel: "Ver caso real",
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

  return (
    <Link 
      to={href} 
      className="card-link"
      onClick={() => analytics.demoClick(config.slug)}
    >
      <div className="card" style={{ borderColor: theme.border, boxShadow: `0 18px 40px -30px ${theme.glow}` }}>
        <div className="card-content">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/50">{variant.badgeLabel}</p>
              <h3 className="mt-1 text-lg font-bold text-white">{rubric}</h3>
            </div>
            <div className="h-8 w-8 rounded-full border border-white/10 bg-white/5 p-1.5 backdrop-blur-sm">
                <div className="h-full w-full rounded-full" style={{ backgroundColor: theme.accent }} />
            </div>
          </div>

          <div
            ref={scrollerRef}
            className="relative mb-4 h-48 overflow-y-auto overscroll-contain [scrollbar-width:none] rounded-2xl border border-white/5 grayscale-[0.2] transition-all duration-500 group-hover:grayscale-0"
            onPointerEnter={() => pausedRef.current = true}
            onPointerLeave={() => pausedRef.current = false}
          >
            <div className="flex flex-col gap-2 p-2">
               <img src={config.heroImage} className="rounded-xl object-cover" alt="Preview 1" />
               <img src={config.preview} className="rounded-xl object-cover" alt="Preview 2" />
               <img src={config.services[0]?.image ?? config.heroImage} className="rounded-xl object-cover" alt="Preview 3" />
            </div>
          </div>

          <p className="line-clamp-2 text-sm leading-relaxed text-slate-400">
            {config.heroTitle}
          </p>
        </div>

        <div className="card-footer">
          <span className="flex items-center gap-2 text-sm font-semibold transition-colors group-hover:text-white" style={{ color: theme.accent }}>
            Quiero este sistema
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
