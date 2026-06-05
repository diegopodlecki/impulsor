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
  return (
    <Link 
      to={href} 
      className="card-link group relative block overflow-hidden"
      onClick={() => analytics.demoClick(config.slug)}
    >
      <div className="card-image aspect-video overflow-hidden rounded-2xl">
        <img 
          src={config.heroImage} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
          alt={rubric} 
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
          <span className="rounded-full bg-white/90 px-6 py-2 text-sm font-bold text-slate-900 shadow-lg backdrop-blur-sm">
            Ver esta web
          </span>
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
    </Link>
  );
}