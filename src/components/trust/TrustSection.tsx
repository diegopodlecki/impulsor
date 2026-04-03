import { ChevronDown, MessageCircle, ShieldCheck, Star, Target, TrendingUp, Users } from "lucide-react";
import { analytics } from "@/components/analytics/analytics";

type Testimonial = {
  name: string;
  role: string;
  location: string;
  initials: string;
  stars: number;
  before: string;
  after: string;
  result: string;
  quote: string;
};

type CredibilityMetric = {
  label: string;
  value: string;
  caption: string;
  icon: typeof Target;
};

const testimonials: Testimonial[] = [
  {
    name: "Dra. Luciana Perez",
    role: "Psicóloga clínica",
    location: "CABA",
    initials: "LP",
    stars: 5,
    before:
      "Dependía de Instagram y de derivaciones esporádicas. La web estaba, pero no ordenaba el mensaje ni generaba consultas consistentes.",
    after:
      "La nueva página empezó a transmitir método, seriedad y criterio profesional desde el primer contacto.",
    result: "Pasó de 1 a 6 consultas semanales por web en 8 semanas.",
    quote:
      "La diferencia fue la claridad. Ahora llegan personas mejor informadas y con una decisión mucho más avanzada.",
  },
  {
    name: "Dr. Martin Rivas",
    role: "Abogado laboralista",
    location: "Córdoba",
    initials: "MR",
    stars: 5,
    before:
      "Tenía una web desactualizada, poco jerarquizada y sin una propuesta visible. Muchos visitantes se iban sin escribir.",
    after:
      "La nueva landing ordenó los servicios, reforzó la confianza y facilitó el paso a WhatsApp sin fricción.",
    result: "Pasó de consultas esporádicas a 4 a 7 contactos por semana en 2 meses.",
    quote:
      "El cambio real estuvo en cómo se presentó el estudio: más claro, más sólido y mucho más fácil de entender.",
  },
  {
    name: "Micaela Torres",
    role: "Consultora de RRHH",
    location: "Rosario",
    initials: "MT",
    stars: 5,
    before:
      "Vendía por recomendación y la web no alcanzaba para demostrar seniority frente a empresas nuevas.",
    after:
      "Con la nueva presentación pudo mostrar servicios, casos y beneficios con una imagen mucho más sólida.",
    result: "Sumó un flujo estable de 5 a 8 consultas mensuales de empresas en 90 días.",
    quote:
      "La web empezó a trabajar a favor de mi marca: mejor primera impresión, mejores reuniones y menos explicaciones repetidas.",
  },
];

const caseStudy = {
  client: "Estudio Rivera & Asociados",
  industry: "Abogacía laboral",
  problem:
    "Tenían una presencia digital correcta pero poco persuasiva. La web no explicaba el diferencial del estudio ni guiaba la consulta.",
  solution:
    "Se reordenó la home con foco en casos laborales, prueba social, preguntas frecuentes y una ruta de contacto más clara para el usuario.",
  result:
    "Pasaron de 0 consultas online a 8 por semana en 3 meses, con mejores contactos y menos tiempo perdido en llamadas poco calificadas.",
  screenshot: "Consultas online, prueba social y CTA visibles en la primera pantalla.",
};

const credibilityNumbers: CredibilityMetric[] = [
  {
    label: "Años de experiencia",
    value: "5+",
    icon: Target,
    caption: "En proyectos orientados a captar consultas reales",
  },
  {
    label: "Proyectos entregados",
    value: "40+",
    icon: Users,
    caption: "Sitios y landings para negocios de servicios",
  },
  {
    label: "Satisfacción estimada",
    value: "95%",
    icon: Star,
    caption: "Clientes que recomiendan el proceso y el resultado",
  },
  {
    label: "Tiempo promedio",
    value: "10-20 días",
    icon: TrendingUp,
    caption: "Según alcance, contenido y nivel de personalización",
  },
  {
    label: "Rubros atendidos",
    value: "7+",
    icon: ShieldCheck,
    caption: "Profesionales y marcas de servicios",
  },
];

const serviceRubrics = [
  "Psicólogos",
  "Abogados",
  "Consultores",
  "Coaches",
  "Nutricionistas",
  "Gimnasios",
  "Estética corporal",
];

function StarRow({ stars }: { stars: number }) {
  return (
    <div className="flex items-center gap-1 text-amber-400" aria-label={`${stars} estrellas`}>
      {Array.from({ length: stars }).map((_, index) => (
        <Star key={index} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

function MiniMockup() {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,#0f172a,#020617)] p-4 shadow-[0_20px_70px_-36px_rgba(14,165,233,0.35)]">
      <div className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/5">
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">Mockup entregado</p>
            <p className="mt-1 text-h6 text-white">Vista previa de la propuesta final</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-white/50" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
          </div>
        </div>

        <div className="grid gap-4 p-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1.25rem] border border-white/10 bg-black/30 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0EA5E9]">
              Arquitectura de conversión
            </p>
            <h4 className="mt-2 text-xl font-semibold text-white">Más claridad, mejores consultas</h4>
            <p className="mt-2 text-small text-white/70">
              Mensaje jerarquizado, prueba social visible y llamadas a la acción ubicadas donde realmente ayudan a
              decidir.
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {["Contactar sin fricción", "Entender el valor rápido", "Confiar antes de escribir"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">Bloque</p>
                  <p className="mt-1 text-small font-semibold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3">
            <div className="rounded-[1rem] border border-white/10 bg-white/5 p-3">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">Contacto</p>
              <p className="mt-1 text-small font-semibold text-white">WhatsApp y formulario simples</p>
            </div>
            <div className="rounded-[1rem] border border-white/10 bg-white/5 p-3">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">Señal</p>
              <p className="mt-1 text-small font-semibold text-white">Testimonios y contexto real</p>
            </div>
            <div className="rounded-[1rem] border border-white/10 bg-white/5 p-3">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">Objetivo</p>
              <p className="mt-1 text-small font-semibold text-white">Más consultas mejor calificadas</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-white/70">
            <MessageCircle className="h-4 w-4 text-[#0EA5E9]" />
            {caseStudy.screenshot}
          </div>
        </div>
      </div>
    </div>
  );
}

export function TrustSection() {
  return (
    <section id="prueba-social" className="container py-16 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-label text-muted-foreground">Prueba social curada</p>
        <h2 className="mt-3 text-h2">La confianza también se diseña</h2>
        <p className="mt-4 text-body text-muted-foreground">
          Señales concretas que reducen fricción, elevan la percepción de valor y ayudan a decidir con más seguridad.
        </p>
      </div>

      <div className="mt-12 grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
        <div className="grid gap-5">
          <div className="grid gap-5">
            {testimonials.map((item) => (
              <article key={item.name} className="card-service p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0EA5E9] to-[#10B981] text-sm font-bold text-white">
                    {item.initials}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-h5 text-white">{item.name}</h3>
                      <span className="badge-chip border-white/10 bg-black/20 text-white/60">{item.role}</span>
                      <span className="badge-chip border-white/10 bg-black/20 text-white/45">{item.location}</span>
                    </div>

                    <div className="mt-2">
                      <StarRow stars={item.stars} />
                    </div>

                    <p className="mt-3 text-small text-muted-foreground">
                      <span className="font-semibold text-white">Antes: </span>
                      {item.before}
                    </p>
                    <p className="mt-2 text-small text-muted-foreground">
                      <span className="font-semibold text-white">Después: </span>
                      {item.after}
                    </p>

                    <details
                      className="group mt-4 rounded-2xl border border-white/10 bg-black/20 p-4"
                      onToggle={(event) => {
                        if (event.currentTarget.open) {
                          analytics.faqOpen(`Caso: ${item.title}`);
                        }
                      }}
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-h6 text-white">
                        Ver detalle del caso
                        <ChevronDown className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="mt-3 space-y-3 text-small text-muted-foreground">
                        <p>
                          <span className="font-semibold text-white">Resultado: </span>
                          {item.result}
                        </p>
                        <p>
                          <span className="font-semibold text-white">Comentario: </span>
                          {item.quote}
                        </p>
                      </div>
                    </details>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <article className="card-service">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-[#0EA5E9]" />
              <h3 className="text-h4 text-white">Caso de éxito desarrollado</h3>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-[0.88fr_1.12fr]">
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0EA5E9]">Cliente</p>
                  <p className="mt-2 text-h5 text-white">{caseStudy.client}</p>
                  <p className="mt-1 text-small text-muted-foreground">{caseStudy.industry}</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0EA5E9]">Antes</p>
                  <p className="mt-2 text-small text-white/75">{caseStudy.problem}</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0EA5E9]">Solución</p>
                  <p className="mt-2 text-small text-white/75">{caseStudy.solution}</p>
                </div>

                <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">Resultado</p>
                  <p className="mt-2 text-small font-semibold text-white">{caseStudy.result}</p>
                </div>
              </div>

              <MiniMockup />
            </div>
          </article>
        </div>

        <div className="grid gap-6">
          <article className="card-service">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-5 w-5 text-[#0EA5E9]" />
              <h3 className="text-h4 text-white">Números de credibilidad</h3>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {credibilityNumbers.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-small text-muted-foreground">{item.label}</p>
                        <p className="mt-1 text-h3 text-white">{item.value}</p>
                      </div>
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0EA5E9]/10">
                        <Icon className="h-5 w-5 text-[#0EA5E9]" />
                      </div>
                    </div>
                    <p className="mt-3 text-small text-muted-foreground">{item.caption}</p>
                  </div>
                );
              })}
            </div>
          </article>

          <article className="card-service">
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-[#0EA5E9]" />
              <h3 className="text-h4 text-white">Rubros atendidos</h3>
            </div>

            <p className="mt-3 text-small text-muted-foreground">
              Cuando no hay logos, mostrar rubros atendidos sigue siendo una señal clara de especialización y enfoque.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {serviceRubrics.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-white/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
