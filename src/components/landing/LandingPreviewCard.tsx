import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { analytics } from "@/components/analytics/analytics";

import { type LandingConfig } from "@/data/landings";
export function LandingPreviewCard({
  config,
  href,
  rubric,
}: {
  config: LandingConfig;
  href: string;
  rubric: string;
}) {
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
      <div className="card">
        <div className="card-image">
          <div
            ref={scrollerRef}
            className="h-full w-full overflow-y-auto overscroll-contain [scrollbar-width:none] grayscale-[0.2] transition-all duration-500 group-hover:grayscale-0"
            onPointerEnter={() => (pausedRef.current = true)}
            onPointerLeave={() => (pausedRef.current = false)}
          >
            <div className="flex flex-col gap-2 p-2">
              <img src={config.heroImage} className="rounded-xl object-cover" alt="Preview 1" />
              <img src={config.preview} className="rounded-xl object-cover" alt="Preview 2" />
              <img src={config.services[0]?.image ?? config.heroImage} className="rounded-xl object-cover" alt="Preview 3" />
            </div>
          </div>
        </div>

        <div className="card-content">
          <h3 className="card-title">{rubric}</h3>
          <p className="card-description">
            {config.heroTitle}
          </p>
        </div>

        <div className="card-footer">
          <span>Quiero este sistema</span>
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
