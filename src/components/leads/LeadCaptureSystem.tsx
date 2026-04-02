import * as React from "react";
import { ArrowRight, Clock3, MessageCircle, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  getContextualWhatsappMessage,
  normalizeLeadSectionId,
  whatsappLink,
} from "@/components/leads/leadCapture";

const hiddenRoutes = ["/login", "/register", "/admin"];
const sessionKey = "webappimpulsor_exit_intent_seen";

function shouldHide(pathname: string) {
  return hiddenRoutes.some((route) => pathname.startsWith(route));
}

function getScrollProgress() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
  const height = document.documentElement.scrollHeight - window.innerHeight;

  if (height <= 0) return 0;

  return scrollTop / height;
}

export function LeadCaptureSystem() {
  const location = useLocation();
  const [visible, setVisible] = React.useState(false);
  const [currentSection, setCurrentSection] = React.useState("hero");
  const [exitOpen, setExitOpen] = React.useState(false);

  const isHiddenRoute = shouldHide(location.pathname);

  React.useEffect(() => {
    if (isHiddenRoute) return;

    setVisible(false);
    const timer = window.setTimeout(() => setVisible(true), 10000);

    const onScroll = () => {
      if (getScrollProgress() >= 0.5) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [isHiddenRoute, location.pathname]);

  React.useEffect(() => {
    if (isHiddenRoute) return;

    if (location.pathname !== "/") {
      setCurrentSection(location.pathname.replace(/^\//, "") || "hero");
      return;
    }

    const selectors = ["section[id]", "[data-lead-section]"];
    const observed = Array.from(document.querySelectorAll<HTMLElement>(selectors.join(",")));

    if (observed.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const active = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!active) return;

        const element = active.target as HTMLElement;
        const sectionId = normalizeLeadSectionId(element.dataset.leadSection ?? element.id);

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

    return () => observer.disconnect();
  }, [isHiddenRoute, location.pathname]);

  React.useEffect(() => {
    if (isHiddenRoute) return;

    const hasSeen = sessionStorage.getItem(sessionKey);
    if (hasSeen) return;

    const onMouseLeave = (event: MouseEvent) => {
      if (event.clientY <= 0 && window.innerWidth >= 1024) {
        setExitOpen(true);
        sessionStorage.setItem(sessionKey, "1");
      }
    };

    document.addEventListener("mouseout", onMouseLeave);

    return () => {
      document.removeEventListener("mouseout", onMouseLeave);
    };
  }, [isHiddenRoute]);

  if (isHiddenRoute) {
    return null;
  }

  const whatsappMessage = getContextualWhatsappMessage(location.pathname, currentSection);

  return (
    <>
      <a
        href={whatsappLink(whatsappMessage)}
        target="_blank"
        rel="noreferrer"
        aria-label="Hablar por WhatsApp"
        data-whatsapp-origin="floating"
        className={`animate-wa-pulse fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(142_70%_45%)] text-white shadow-[0_18px_50px_-18px_rgba(34,197,94,0.7)] transition-all duration-300 hover:scale-110 ${
          visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
        }`}
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      {exitOpen ? (
        <div className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-md rounded-[1.75rem] border border-cyan-400/20 bg-slate-950 p-4 shadow-[0_24px_80px_-24px_rgba(15,23,42,0.8)] sm:inset-x-auto sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-lg sm:p-5">
          <button
            type="button"
            onClick={() => setExitOpen(false)}
            aria-label="Cerrar"
            className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="inline-flex items-center gap-2 rounded-full bg-[#0EA5E9]/10 px-3 py-1 text-xs font-semibold text-[#7dd3fc]">
            <Clock3 className="h-3.5 w-3.5" />
            Antes de irte
          </div>
          <h3 className="mt-4 text-xl font-semibold tracking-tight text-white sm:text-2xl">
            Tu web podría estar trayendo consultas mejores
          </h3>
          <p className="mt-3 text-sm leading-6 text-white/70">
            Si querés, te paso una propuesta breve o te dejo la mini-guía gratuita para detectar qué frena tus contactos.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Button asChild size="lg" className="bg-[#25D366] text-white hover:bg-[#20bd5a]">
              <a href={whatsappLink(whatsappMessage)} target="_blank" rel="noreferrer" data-whatsapp-origin="exit_popup">
                <MessageCircle className="mr-2 h-4 w-4" />
                Hablar por WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white">
              <Link to="/#recurso-gratuito">
                <ArrowRight className="mr-2 h-4 w-4" />
                Descargar la guía
              </Link>
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
}
