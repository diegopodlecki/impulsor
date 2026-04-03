'use client';

import { useEffect, useRef, useState, type ReactNode } from "react";
import type { CSSProperties } from "react";
import { MessageCircle, Sparkles } from "lucide-react";
import { useLocation } from "react-router-dom";

import { analytics } from "@/lib/analytics";
import { buildWhatsAppUrl, cn } from "@/lib/utils";

const WHATSAPP_NUMBER_MESSAGE_ONLINE =
  "Hola, los contacto desde su sitio web. Quisiera saber más sobre cómo hacer mi web profesional.";
const WHATSAPP_NUMBER_MESSAGE_OFFLINE =
  "Hola! Los contacto fuera de horario desde su sitio web. Quedo esperando su respuesta. Quisiera saber más sobre cómo hacer mi web.";

const REVEAL_DELAY_MS = 10_000;
const SCROLL_THRESHOLD = 20;

type WhatsAppButtonLinkProps = {
  href: string;
  className?: string;
  style?: CSSProperties;
  ariaLabel?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  pulse?: boolean;
  showCornerBadge?: boolean;
  dataWaSource?: string;
  dataWaOnline?: "true" | "false";
  children?: ReactNode;
};

export function WhatsAppButtonLink({
  href,
  className,
  style,
  ariaLabel = "Hablar por WhatsApp",
  onClick,
  onMouseEnter,
  onMouseLeave,
  pulse = false,
  showCornerBadge = false,
  dataWaSource = "floating",
  dataWaOnline,
  children,
}: WhatsAppButtonLinkProps) {
  return (
    <div className="relative">
      {pulse ? <span className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping" /> : null}

      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={ariaLabel}
        data-wa-source={dataWaSource}
        data-wa-online={dataWaOnline}
        className={className}
        style={style}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {children ?? <MessageCircle className="h-6 w-6" />}
      </a>

      {showCornerBadge ? (
        <span className="pointer-events-none absolute -bottom-1 -right-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-[10px] text-white shadow-lg">
          <Sparkles className="h-3 w-3" />
        </span>
      ) : null}
    </div>
  );
}

function getAvailability() {
  const now = new Date();
  const arTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Argentina/Buenos_Aires" }));
  const hour = arTime.getHours();
  const day = arTime.getDay();
  const isOnline = day >= 1 && day <= 5 && hour >= 9 && hour < 18;

  return { isOnline, hour, day };
}

export default function WhatsAppButton() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [isOnline, setIsOnline] = useState(() => getAvailability().isOnline);
  const [isHovered, setIsHovered] = useState(false);
  const didRevealRef = useRef(false);
  const timerRef = useRef<number | null>(null);

  const message = isOnline ? WHATSAPP_NUMBER_MESSAGE_ONLINE : WHATSAPP_NUMBER_MESSAGE_OFFLINE;

  const tooltipText = isOnline ? "¡Estamos en línea! Escribinos 💬" : "Dejanos tu consulta 💬 Respondemos pronto";
  const badgeText = isOnline ? "En línea" : "Respondemos en 24hs";
  const badgeClassName = isOnline
    ? "border-emerald-400/30 bg-emerald-500/15 text-emerald-300"
    : "border-white/10 bg-white/10 text-white/60";

  useEffect(() => {
    const syncAvailability = () => {
      setIsOnline(getAvailability().isOnline);
    };

    syncAvailability();
    const interval = window.setInterval(syncAvailability, 60_000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    didRevealRef.current = false;
    setIsVisible(false);
    setIsHovered(false);

    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    const reveal = () => {
      if (didRevealRef.current) return;
      didRevealRef.current = true;
      setIsVisible(true);
    };

    timerRef.current = window.setTimeout(reveal, REVEAL_DELAY_MS);

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 100;

      if (pct > SCROLL_THRESHOLD) {
        reveal();
      }
    };

    const handlePricingHover = () => {
      reveal();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("webappimpulsor:pricing-hover", handlePricingHover);
    handleScroll();

    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("webappimpulsor:pricing-hover", handlePricingHover);
    };
  }, [location.pathname]);

  const handleClick = () => {
    analytics.whatsappClick("floating_button");
  };

  return (
    <div
      className={cn(
        "fixed bottom-5 right-5 z-[80] flex flex-col items-end gap-2 transition-all duration-500 ease-out",
        isVisible ? "translate-x-0 translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-x-6 translate-y-6 scale-95 opacity-0",
      )}
    >
      <div
        className={cn(
          "flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold shadow-[0_10px_30px_-18px_rgba(15,23,42,0.75)] backdrop-blur-sm",
          badgeClassName,
        )}
      >
        <span className={cn("h-2 w-2 rounded-full", isOnline ? "bg-emerald-400" : "bg-white/40")} />
        {badgeText}
      </div>

      <div className="relative">
        {isHovered ? (
          <div className="absolute bottom-full right-0 mb-3 max-w-[220px] rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white shadow-[0_18px_50px_-20px_rgba(15,23,42,0.85)]">
            <p className="leading-5">{tooltipText}</p>
            <div className="absolute -bottom-1.5 right-4 h-3 w-3 rotate-45 border-b border-r border-white/10 bg-slate-950" />
          </div>
        ) : null}

        <WhatsAppButtonLink
          href={buildWhatsAppUrl(message)}
          className={cn(
            "relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_50px_-18px_rgba(34,197,94,0.7)] transition-transform duration-300 hover:scale-110",
            isOnline ? "ring-2 ring-emerald-400/35" : "ring-1 ring-white/10",
          )}
          dataWaSource="floating"
          dataWaOnline={isOnline ? "true" : "false"}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleClick}
          pulse={isOnline}
          showCornerBadge={isOnline}
        >
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">WhatsApp</span>
        </WhatsAppButtonLink>
      </div>
    </div>
  );
}
