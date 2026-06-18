import { Stethoscope, Scale, Home, Scissors, Dumbbell, GraduationCap, Car, Coffee } from "lucide-react";

const sectors = [
  { icon: Stethoscope, label: "Clínicas & Consultorios" },
  { icon: Scale, label: "Estudio Jurídico" },
  { icon: Home, label: "Inmobiliarias" },
  { icon: Scissors, label: "Estética & Belleza" },
  { icon: Dumbbell, label: "Gimnasios" },
  { icon: GraduationCap, label: "Educación" },
  { icon: Car, label: "Automotores" },
  { icon: Coffee, label: "Gastronomía" },
];

const items = [...sectors, ...sectors];

export default function TrustBar() {
  return (
    <section className="relative border-y border-ink-200/60 bg-white/70 backdrop-blur-sm py-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
          Más de 120 profesionales en Buenos Aires confían en WebApp Impulsor
        </p>
      </div>
      <div className="reveal-mask mt-7 overflow-hidden">
        <div className="flex w-max animate-marquee gap-10 px-6">
          {items.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-3 rounded-full border border-ink-200 bg-white px-5 py-2.5 shadow-sm"
              >
                <div className="grid h-8 w-8 place-items-center rounded-full bg-emerald-50 text-emerald-600">
                  <Icon className="h-4 w-4" strokeWidth={2.2} />
                </div>
                <span className="whitespace-nowrap text-sm font-semibold text-ink-700">
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
