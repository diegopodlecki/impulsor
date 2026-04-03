import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface NicheCardProps {
  name: string;
  rubro: string;
  accentColor: string;
  bgColor: string;
  href: string;
  image?: string;
}

export function NicheCard({ name, rubro, accentColor, bgColor, href, image }: NicheCardProps) {
  return (
    <Link
      to={href}
      className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/70 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
      style={{
        background: `linear-gradient(180deg, ${bgColor}, rgba(8, 15, 30, 0.96))`,
        boxShadow: `0 18px 50px -30px ${accentColor}99`,
      }}
    >
      <div className="relative h-[180px] overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{
            background:
              "radial-gradient(circle at top right, rgba(255, 255, 255, 0.08), transparent 45%), radial-gradient(circle at bottom left, rgba(255, 255, 255, 0.06), transparent 42%)",
          }}
        />

        <div className="absolute left-4 right-4 top-4 z-10 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/65 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/65 backdrop-blur">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: accentColor }} />
            Landing
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/20 px-2.5 py-1 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-rose-400/90" />
            <span className="h-2 w-2 rounded-full bg-amber-300/90" />
            <span className="h-2 w-2 rounded-full bg-emerald-400/90" />
          </div>
        </div>

        {image ? (
          <img
            src={image}
            alt={`Miniatura de ${name}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            width={1200}
            height={900}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="flex h-full flex-col justify-center gap-2 px-4 py-3">
            <div className="h-2.5 w-16 rounded-full" style={{ backgroundColor: `${accentColor}4d` }} />
            <div className="h-3 w-4/5 rounded-full" style={{ backgroundColor: `${accentColor}33` }} />
            <div className="h-2 w-3/5 rounded-full" style={{ backgroundColor: `${accentColor}26` }} />
            <div className="mt-2 h-8 w-28 rounded-2xl" style={{ backgroundColor: `${accentColor}55` }} />
          </div>
        )}

        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 via-slate-950/65 to-transparent" />

        <div className="absolute bottom-4 left-4 right-4 z-10 flex items-end justify-between gap-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/55">Vista previa</p>
            <p className="mt-1 text-sm font-medium text-white/80">Abrí la landing</p>
          </div>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-white/15">
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-[15px] font-semibold tracking-tight text-white">{name}</h3>
            <p className="mt-1 text-sm text-white/55">{rubro}</p>
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/65">
            Demo
          </span>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-medium"
            style={{ backgroundColor: `${accentColor}1f`, color: accentColor }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
            Mini landing
          </span>
        </div>
      </div>
    </Link>
  );
}
