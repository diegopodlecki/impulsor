'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CheckCircle2, MessageCircle, X, Zap } from "lucide-react";
import { useLocation } from "react-router-dom";

import { analytics } from "@/lib/analytics";
import { buildWhatsAppUrl } from "@/lib/utils";

const SESSION_KEY = "wai_exit_shown";
const DELAY_BEFORE_ACTIVE = 15_000;
const MOBILE_TIMEOUT = 45_000;

const DEFAULT_MESSAGE = "Hola, estaba viendo su sitio y queria consultar algo antes de irme.";

const SECTION_MESSAGES: Record<string, { title: string; subtitle: string; bullets: string[]; message: string }> = {
  hero: {
    title: "Tu web todavia puede convertir mejor",
    subtitle: "Si te fuiste desde el inicio, te mostramos una propuesta clara para que no pierdas la consulta.",
    bullets: [
      "Mensaje enfocado en conversion",
      "WhatsApp visible desde el primer bloque",
      "Entrega rapida para salir a vender",
    ],
    message: "Hola, estaba viendo el inicio de su sitio y queria consultar algo antes de irme.",
  },
  problema: {
    title: "Si hoy no convierte, podemos ordenarla",
    subtitle: "Cuando una web no vende, suele faltar una propuesta clara y un CTA bien puesto.",
    bullets: [
      "Ordenamos el mensaje principal",
      "Mejoramos la ruta hacia WhatsApp",
      "Pensado para traer consultas reales",
    ],
    message: "Hola, vi la parte donde muestran el problema y quiero ordenar mi web para vender mejor.",
  },
  solucion: {
    title: "Hay una forma mas clara de vender",
    subtitle: "Tu web puede explicar mejor tu valor y facilitar que te escriban.",
    bullets: [
      "Diseño mas profesional",
      "Texto claro y directo",
      "Contacto rapido sin friccion",
    ],
    message: "Hola, vi la propuesta de solucion y quiero saber como seria para mi negocio.",
  },
  rubros: {
    title: "Podemos adaptarlo a tu rubro",
    subtitle: "Cada negocio necesita una web distinta para convertir mejor.",
    bullets: [
      "Ajustado a tu actividad",
      "Ejemplos concretos por rubro",
      "Pensado para profesionales y servicios",
    ],
    message: "Hola, vi los ejemplos por rubro y quiero una propuesta para el mio.",
  },
  pruebaSocial: {
    title: "Lo que muestran los resultados importa",
    subtitle: "Si queres, te contamos como hacer que tu web genere mas confianza.",
    bullets: [
      "Casos reales y prueba social",
      "Mayor confianza desde el primer vistazo",
      "Menos dudas, mas contactos",
    ],
    message: "Hola, me interesaron los resultados y quiero avanzar con una propuesta.",
  },
  precios: {
    title: "Te orientamos con una propuesta clara",
    subtitle: "Si llegaste a precios, seguro ya queres entender que opcion te conviene.",
    bullets: [
      "Planes claros y sin vueltas",
      "Acompañamiento para decidir",
      "Presupuesto alineado a tu negocio",
    ],
    message: "Hola, vi los planes y quiero que me orienten con una propuesta para mi negocio.",
  },
  contacto: {
    title: "Podemos seguir por WhatsApp",
    subtitle: "Si ya estabas por contactarte, te dejamos el camino mas rapido.",
    bullets: [
      "Respuesta en menos de 24 hs",
      "Propuesta concreta para tu caso",
      "Sin compromiso",
    ],
    message: "Hola, estaba por contactarlos y queria consultar algo antes de irme.",
  },
  cierre: {
    title: "Antes de irte, te dejamos una opcion simple",
    subtitle: "Si queres mejorar tu web, podemos ayudarte a hacerlo sin complicarte.",
    bullets: [
      "Consulta breve por WhatsApp",
      "Enfoque en conversion",
      "Sin compromiso ni vueltas",
    ],
    message: DEFAULT_MESSAGE,
  },
};

const ROUTE_MESSAGES: Record<string, { title: string; subtitle: string; bullets: string[]; message: string }> = {
  "/gimnasios": {
    title: "Tu gimnasio puede recibir mas consultas",
    subtitle: "Mostramos clases, horarios y una ruta clara para que te escriban.",
    bullets: ["Mas inscripciones", "Mas confianza", "WhatsApp visible"],
    message: "Hola, vi la propuesta para gimnasios y quiero una web para conseguir mas alumnos.",
  },
  "/entrenadores": {
    title: "Tu marca personal puede vender mejor",
    subtitle: "Si sos trainer, una web clara ayuda a cerrar mas clientes.",
    bullets: ["Metodo propio", "Resultados visibles", "Consulta directa"],
    message: "Hola, vi la propuesta para entrenadores y quiero una web para vender mas sesiones.",
  },
  "/personal-trainers": {
    title: "Tu marca personal puede vender mejor",
    subtitle: "Si sos trainer, una web clara ayuda a cerrar mas clientes.",
    bullets: ["Metodo propio", "Resultados visibles", "Consulta directa"],
    message: "Hola, vi la propuesta para entrenadores y quiero una web para vender mas sesiones.",
  },
  "/nutricionistas": {
    title: "Tu consultorio puede generar mas turnos",
    subtitle: "Una web ordenada transmite confianza y facilita el contacto.",
    bullets: ["Mas claridad", "Mas confianza", "Contacto simple"],
    message: "Hola, vi la propuesta para nutricionistas y quiero una web para conseguir mas pacientes.",
  },
  "/psicologos": {
    title: "Tu sitio puede transmitir mas calma",
    subtitle: "Para psicologia, la claridad y la cercania ayudan a dar el primer paso.",
    bullets: ["Calma visual", "Primer contacto simple", "Mas confianza"],
    message: "Hola, vi la propuesta para psicologos y quiero una web mas clara para mi consultorio.",
  },
  "/estetica-corporal": {
    title: "Tu marca puede verse mas premium",
    subtitle: "En estetica, la imagen y la confianza empujan mucho la decision.",
    bullets: ["Imagen premium", "Mas deseo visual", "Mas consultas"],
    message: "Hola, vi la propuesta para estetica corporal y quiero una web mas premium.",
  },
  "/gimnasio": {
    title: "Tu gimnasio puede recibir mas consultas",
    subtitle: "Mostramos clases, horarios y una ruta clara para que te escriban.",
    bullets: ["Mas inscripciones", "Mas confianza", "WhatsApp visible"],
    message: "Hola, vi la propuesta para gimnasios y quiero una web para conseguir mas alumnos.",
  },
  "/iron-fitness": {
    title: "Tu gimnasio puede recibir mas consultas",
    subtitle: "Mostramos clases, horarios y una ruta clara para que te escriban.",
    bullets: ["Mas inscripciones", "Mas confianza", "WhatsApp visible"],
    message: "Hola, vi la propuesta para gimnasios y quiero una web para conseguir mas alumnos.",
  },
  "/emprendedores": {
    title: "Tu propuesta puede convertir mejor",
    subtitle: "Una landing clara ayuda a que te contacten con menos dudas.",
    bullets: ["Oferta clara", "CTA visible", "Mas autoridad"],
    message: "Hola, vi la propuesta para emprendedores y quiero una web para vender mejor mis servicios.",
  },
};

function getSectionKey(pathname: string, sectionId?: string) {
  if (pathname !== "/" || !sectionId) return undefined;
  return sectionId;
}

function getPopupCopy(pathname: string, sectionId?: string) {
  const sectionKey = getSectionKey(pathname, sectionId);

  if (sectionKey && SECTION_MESSAGES[sectionKey]) {
    return SECTION_MESSAGES[sectionKey];
  }

  if (ROUTE_MESSAGES[pathname]) {
    return ROUTE_MESSAGES[pathname];
  }

  return {
    title: "¡Espera! Antes de irte...",
    subtitle: "Podrias tener una web lista en 72 horas y empezar a recibir consultas mejores.",
    bullets: [
      "Mas consultas por WhatsApp",
      "Diseño profesional y claro",
      "Respuesta rapida y sin compromiso",
    ],
    message: DEFAULT_MESSAGE,
  };
}

export default function ExitIntentPopup() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isEntered, setIsEntered] = useState(false);
  const [currentSection, setCurrentSection] = useState<string | undefined>();
  const closeTimerRef = useRef<number | null>(null);
  const mobileClickedRef = useRef(false);

  const copy = useMemo(
    () => getPopupCopy(location.pathname, currentSection),
    [location.pathname, currentSection],
  );

  const isLeadCaptureVisible = useCallback(
    () => typeof document !== "undefined" && document.body.dataset.leadCaptureVisible === "1",
    [],
  );

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const closePopup = useCallback(() => {
    clearCloseTimer();
    setIsEntered(false);
    closeTimerRef.current = window.setTimeout(() => {
      setIsVisible(false);
    }, 220);
  }, [clearCloseTimer]);

  const showPopup = useCallback(() => {
    if (sessionStorage.getItem(SESSION_KEY) || isLeadCaptureVisible()) return;

    clearCloseTimer();
    setIsVisible(true);
    sessionStorage.setItem(SESSION_KEY, "1");
    analytics.whatsappClick("exit_intent_popup");

    window.requestAnimationFrame(() => {
      setIsEntered(true);
    });
  }, [clearCloseTimer, isLeadCaptureVisible]);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const readyTimer = window.setTimeout(() => setIsReady(true), DELAY_BEFORE_ACTIVE);
    return () => window.clearTimeout(readyTimer);
  }, []);

  useEffect(() => {
    if (!isReady) return;
    if (isLeadCaptureVisible()) return;

    const isMobile = window.innerWidth < 768;
    let disposeObserver = () => {};

    if (location.pathname === "/" && !isMobile) {
      const selectors = ["section[id]", "[data-lead-section]"];
      const observed = Array.from(document.querySelectorAll<HTMLElement>(selectors.join(",")));

      if (observed.length > 0) {
        const observer = new IntersectionObserver(
          (entries) => {
            const active = entries
              .filter((entry) => entry.isIntersecting)
              .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

            if (!active) return;

            const element = active.target as HTMLElement;
            const sectionId = (element.dataset.leadSection ?? element.id)?.replace(/^#/, "");

            if (sectionId) {
              setCurrentSection(sectionId);
            }
          },
          {
            threshold: [0.35, 0.5, 0.75],
            rootMargin: "-8% 0px -35% 0px",
          },
        );

        observed.forEach((element) => observer.observe(element));
        disposeObserver = () => observer.disconnect();
      }
    }

    if (!isMobile) {
      const handleMouseOut = (event: MouseEvent) => {
        if (event.clientY < 20 && !sessionStorage.getItem(SESSION_KEY)) {
          showPopup();
        }
      };

      document.addEventListener("mouseout", handleMouseOut);

      return () => {
        document.removeEventListener("mouseout", handleMouseOut);
        disposeObserver();
      };
    }

    const handleClick = () => {
      mobileClickedRef.current = true;
    };

    const mobileTimer = window.setTimeout(() => {
      if (!sessionStorage.getItem(SESSION_KEY) && !mobileClickedRef.current) {
        showPopup();
      }
    }, MOBILE_TIMEOUT);

    document.addEventListener("click", handleClick, true);

    return () => {
      window.clearTimeout(mobileTimer);
      document.removeEventListener("click", handleClick, true);
      disposeObserver();
    };
  }, [isReady, location.pathname, showPopup, isLeadCaptureVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isVisible, closePopup]);

  useEffect(() => {
    return () => clearCloseTimer();
  }, [clearCloseTimer]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
      onClick={closePopup}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="exit-intent-title"
        aria-describedby="exit-intent-description"
        className={`relative w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 p-6 text-white shadow-[0_24px_90px_-30px_rgba(15,23,42,0.9)] transition-all duration-300 ease-out sm:p-8 ${
          isEntered ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={closePopup}
          aria-label="Cerrar popup"
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-emerald-400 to-amber-300" />

        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/20">
            <Zap className="h-7 w-7" />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/80">
              Última oportunidad
            </p>
            <h2 id="exit-intent-title" className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              {copy.title}
            </h2>
          </div>
        </div>

        <p id="exit-intent-description" className="mt-4 text-sm leading-6 text-white/70">
          {copy.subtitle}
        </p>

        <ul className="mt-5 space-y-3 text-sm leading-6 text-white/80">
          {copy.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 grid gap-3">
          <a
            href={buildWhatsAppUrl(copy.message)}
            target="_blank"
            rel="noreferrer"
            onClick={() => analytics.whatsappClick("exit_intent_cta")}
            className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.01] hover:bg-[#20bd5a]"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Consultanos por WhatsApp →
          </a>

          <button
            type="button"
            onClick={closePopup}
            className="text-sm font-medium text-white/60 transition-colors hover:text-white"
          >
            No gracias, me voy
          </button>
        </div>

        <p className="mt-5 text-xs text-white/50">
          🔒 Sin compromiso. Respondemos en menos de 24hs.
        </p>
      </div>
    </div>
  );
}
