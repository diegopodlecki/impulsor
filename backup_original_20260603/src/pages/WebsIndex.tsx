import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import { DemoGallery } from "@/components/sections/DemoGallery";

const breadcrumbs = [
  { label: "Inicio", href: "/" },
  { label: "Webs por Rubro", href: "/webs" },
];

export default function WebsIndex() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container py-14 sm:py-18 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
            <Sparkles className="h-4 w-4" />
            Webs pensadas para rankear por rubro
          </div>

          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Webs profesionales para cada rubro
          </h1>
          <p className="mt-5 text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
            Diseñadas específicamente para tu tipo de negocio
          </p>

          <nav className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm text-white/55">
            {breadcrumbs.map((item, index) => (
              <span key={item.href} className="inline-flex items-center gap-2">
                <Link to={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
                {index < breadcrumbs.length - 1 ? <span>·</span> : null}
              </span>
            ))}
          </nav>
        </div>
      </section>

      <DemoGallery />
    </main>
  );
}
