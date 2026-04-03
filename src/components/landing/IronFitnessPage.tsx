import { useEffect } from "react";

import { analytics } from "@/components/analytics/analytics";
import { WhatsAppButtonLink } from "@/components/layout/WhatsAppButton";
import { previewSvg } from "@/components/landing/landingVisuals";

const WHATSAPP_URL = "https://wa.me/541166448389";

const heroStats = ["+500 socios", "12 años de experiencia", "Equipamiento premium"];

const services = [
  {
    title: "Musculación",
    text: "Equipamiento de alta gama para entrenamiento de fuerza. Pesas libres, máquinas y más.",
    image: previewSvg("Musculación", "Equipamiento de alta gama", "#f97316", "#22c55e"),
  },
  {
    title: "Clases grupales",
    text: "Cycling, funcional, yoga y más. Instructores certificados en cada clase.",
    image: previewSvg("Clases grupales", "Cycling, funcional y yoga", "#06b6d4", "#f97316"),
  },
  {
    title: "Cardio & funcional",
    text: "Zona de cardio completa. HIIT, funcional y máquinas cardiovasculares.",
    image: previewSvg("Cardio & funcional", "Zona completa para entrenar", "#22c55e", "#06b6d4"),
  },
];

const testimonials = [
  {
    name: "Martín G.",
    role: "socio hace 1 año",
    text: "Desde que entreno en Iron Fitness bajé 10 kilos en 4 meses. Los instructores son increíbles.",
  },
  {
    name: "Carolina R.",
    role: "socia hace 8 meses",
    text: "Probé varios gimnasios y este es otro nivel. Las clases grupales son adictivas.",
  },
];

const plans = [
  {
    name: "Mensual",
    price: "$15.000/mes",
    featured: false,
    features: ["Acceso completo", "Vestuarios", "Clases incluidas", "Cancelación mensual"],
  },
  {
    name: "Trimestral",
    price: "$12.000/mes",
    featured: true,
    features: ["Todo lo anterior", "Ahorrás 20%", "Congelamiento 1 vez", "Acceso 24hs"],
  },
  {
    name: "Anual",
    price: "$9.000/mes",
    featured: false,
    features: ["Todo lo anterior", "Ahorrás 40%", "Congelamiento ilimitado", "Sesión de evaluación gratis"],
  },
];

function initials(name: string) {
  return name
    .split(/[\s.]+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function SectionHeading({
  title,
  subtitle,
  titleClassName = "text-[28px]",
}: {
  title: string;
  subtitle?: string;
  titleClassName?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className={`font-bold tracking-tight text-[#F5F5F5] ${titleClassName}`}>{title}</h2>
      {subtitle ? <p className="mt-3 text-[16px] text-[#9CA3AF]">{subtitle}</p> : null}
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-sm leading-6 text-[#D1D5DB]">
      <span className="mt-0.5 text-[#F97316]">✓</span>
      <span>{text}</span>
    </li>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function IronFitnessPage() {
  useEffect(() => {
    const previousBackground = document.body.style.background;
    const previousColor = document.body.style.color;
    const previousScrollBehavior = document.documentElement.style.scrollBehavior;

    document.title = "Iron Fitness | Gimnasio";
    document.body.style.background = "#0A0A0A";
    document.body.style.color = "#F5F5F5";
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.body.style.background = previousBackground;
      document.body.style.color = previousColor;
      document.documentElement.style.scrollBehavior = previousScrollBehavior;
    };
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0A0A0A] text-[#F5F5F5]">
      <style>{`
        @keyframes iron-wa-pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5);
          }
          70% {
            box-shadow: 0 0 0 18px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }

        @keyframes badge-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>

      <header
        className="fixed inset-x-0 top-0 z-50 bg-[#0A0A0A]"
        style={{ borderBottom: "1px solid rgba(249,115,22,0.15)" }}
      >
        <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-6">
          <a href="#inicio" className="flex items-center gap-1 text-[15px] font-extrabold uppercase tracking-[0.28em]">
            <span className="text-[#F5F5F5]">IRON</span>
            <span className="text-[#F97316]">FITNESS</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#servicios" className="text-[13px] text-[#9CA3AF] transition-colors hover:text-[#F5F5F5]">
              Servicios
            </a>
            <a href="#planes" className="text-[13px] text-[#9CA3AF] transition-colors hover:text-[#F5F5F5]">
              Planes
            </a>
            <a href="/webs" className="text-[13px] text-[#9CA3AF] transition-colors hover:text-[#F5F5F5]">
              Rubros
            </a>
            <a href="#contacto" className="text-[13px] text-[#9CA3AF] transition-colors hover:text-[#F5F5F5]">
              Contacto
            </a>
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() => analytics.whatsappClick("header")}
            className="inline-flex items-center justify-center rounded-[6px] bg-[#F97316] px-4 py-2 text-[13px] font-bold text-[#0A0A0A] transition-opacity hover:opacity-90"
          >
            Empezá hoy
          </a>
        </div>
      </header>

      <section
        id="inicio"
        className="relative flex min-h-[100svh] items-center overflow-hidden pt-[72px] scroll-mt-24"
      >
        <img
          src={previewSvg("Iron Fitness", "Clases, horarios y reservas", "#f97316", "#22c55e")}
          alt=""
          aria-hidden="true"
          width={1200}
          height={900}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ backgroundColor: "#141414" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.72),rgba(10,10,10,0.95))]" />

        <div className="relative mx-auto flex w-full max-w-[1200px] flex-1 flex-col items-center px-6 py-16 text-center sm:py-20">
          <div className="inline-flex items-center rounded-[20px] border border-[rgba(249,115,22,0.35)] bg-[rgba(249,115,22,0.12)] px-4 py-2 text-[13px] font-medium text-[#F97316]">
            <span className="mr-2">●</span>
            Abierto las 24hs
          </div>

          <h1 className="mt-7 text-[32px] font-extrabold leading-[1.04] text-[#F5F5F5] sm:text-[44px] lg:text-[52px]">
            Transformá tu cuerpo.
            <br />
            <span className="text-[#F97316]">Empezá</span> hoy.
          </h1>

          <p className="mt-6 max-w-3xl text-[18px] leading-8 text-[#9CA3AF]">
            Musculación, clases grupales y cardio en un solo lugar. Primera semana completamente gratis.
          </p>

          <div className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => analytics.whatsappClick("hero_primary")}
              className="inline-flex w-full items-center justify-center rounded-[8px] bg-[#F97316] px-6 py-3.5 text-[15px] font-bold text-[#0A0A0A] transition-opacity hover:opacity-90 sm:w-auto"
            >
              Quiero mi semana gratis
            </a>
            <a
              href="#planes"
              className="inline-flex w-full items-center justify-center rounded-[8px] border border-[#F97316] px-6 py-3.5 text-[15px] font-bold text-[#F97316] transition-colors hover:bg-[rgba(249,115,22,0.08)] sm:w-auto"
            >
              Ver los planes
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[13px] text-[#9CA3AF]">
            {heroStats.map((item, index) => (
              <span key={item} className="inline-flex items-center gap-x-3">
                {index > 0 ? <span className="text-[#F97316]">·</span> : null}
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" className="scroll-mt-24 bg-[#0A0A0A] px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            title="Lo que encontrás en Iron Fitness"
            subtitle="Todo lo que necesitás para alcanzar tus objetivos"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-xl border border-[rgba(249,115,22,0.2)] border-t-[3px] border-t-[#F97316] bg-[#141414] p-6"
              >
                <div className="mb-4 h-[180px] overflow-hidden rounded-[8px] bg-[#141414]">
                  <img
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={420}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                    style={{ backgroundColor: "#141414" }}
                  />
                </div>
                <h3 className="text-[20px] font-semibold text-[#F5F5F5]">{service.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-[#9CA3AF]">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111111] px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading title="Lo que dicen nuestros socios" titleClassName="text-[24px]" />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="rounded-xl border border-[rgba(255,255,255,0.06)] bg-[#1A1A1A] p-6"
              >
                <div className="text-[18px] leading-none text-[#F97316]">★★★★★</div>
                <p className="mt-5 text-[16px] leading-8 text-[#F5F5F5]">"{item.text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(249,115,22,0.15)] text-sm font-semibold text-[#F97316]">
                    {initials(item.name)}
                  </div>
                  <div>
                    <p className="font-semibold text-[#F5F5F5]">{item.name}</p>
                    <p className="text-[13px] text-[#9CA3AF]">{item.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="planes" className="scroll-mt-24 bg-[#0A0A0A] px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading title="Elegí tu plan" titleClassName="text-[28px]" />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <article
                key={plan.name}
                className={`rounded-xl bg-[#141414] p-7 ${
                  plan.featured
                    ? "border-[2px] border-[#F97316]"
                    : "border border-[rgba(249,115,22,0.2)]"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-[22px] font-semibold text-[#F5F5F5]">{plan.name}</h3>
                    <p className="mt-2 text-[30px] font-extrabold tracking-tight text-[#F5F5F5]">{plan.price}</p>
                  </div>

                  {plan.featured ? (
                    <span className="rounded-full bg-[#F97316] px-3 py-1 text-[12px] font-semibold text-[#0A0A0A]">
                      Más popular
                    </span>
                  ) : null}
                </div>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <CheckItem key={feature} text={feature} />
                  ))}
                </ul>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() =>
                    analytics.whatsappClick(
                      index === 0 ? "pricing_basica" : index === 1 ? "pricing_profesional" : "pricing_completa",
                    )
                  }
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-[8px] px-5 py-3.5 text-[15px] font-bold transition-colors ${
                    plan.featured
                      ? "bg-[#F97316] text-[#0A0A0A] hover:opacity-90"
                      : "border border-[#F97316] text-[#F97316] hover:bg-[rgba(249,115,22,0.08)]"
                  }`}
                >
                  Elegir plan
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="relative overflow-hidden bg-[#0A0A0A] px-6 py-20 scroll-mt-24">
        <img
          src={previewSvg("Hablá con nosotros", "Tu semana gratis te espera", "#f97316", "#06b6d4")}
          alt=""
          aria-hidden="true"
          width={1200}
          height={900}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ backgroundColor: "#141414" }}
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.85)]" />

        <div className="relative mx-auto flex max-w-[900px] flex-col items-center text-center">
          <h2 className="text-[36px] font-bold tracking-tight text-[#F5F5F5]">¿Listo para empezar?</h2>
          <p className="mt-4 text-[18px] text-[#9CA3AF]">Tu primera semana es gratis. Sin excusas, sin contratos.</p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() => analytics.whatsappClick("cta_final")}
            className="mt-8 inline-flex items-center justify-center gap-3 rounded-[8px] bg-[#25D366] px-7 py-4 text-[16px] font-bold text-white transition-opacity hover:opacity-90"
          >
            <WhatsAppIcon />
            Hablame por WhatsApp
          </a>
        </div>
      </section>

      <footer className="bg-[#080808] px-6 py-8">
        <div className="mx-auto grid max-w-[1200px] gap-6 md:grid-cols-3 md:items-center">
          <div>
            <div className="flex items-center gap-1 text-[15px] font-extrabold uppercase tracking-[0.28em]">
              <span className="text-[#F5F5F5]">IRON</span>
              <span className="text-[#F97316]">FITNESS</span>
            </div>
            <p className="mt-2 text-[13px] text-[#9CA3AF]">Abrimos todos los días de 6:00 a 24:00</p>
          </div>

          <nav className="flex flex-wrap items-center justify-start gap-3 text-[13px] text-[#9CA3AF] md:justify-center">
            <a href="#servicios" className="transition-colors hover:text-[#F5F5F5]">
              Servicios
            </a>
            <span>·</span>
            <a href="#planes" className="transition-colors hover:text-[#F5F5F5]">
              Planes
            </a>
            <span>·</span>
            <a href="#contacto" className="transition-colors hover:text-[#F5F5F5]">
              Contacto
            </a>
          </nav>

          <div className="text-[12px] text-[#4B5563] md:text-right">
            Sitio desarrollado por{" "}
            <a
              href="https://webappimpulsor.com"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-[#9CA3AF]"
            >
              WebAppImpulsor
            </a>
          </div>
        </div>
      </footer>

      <WhatsAppButtonLink
        href={WHATSAPP_URL}
        ariaLabel="Hablar por WhatsApp"
        dataWaSource="floating"
        dataWaOnline="true"
        onClick={() => analytics.whatsappClick("floating_button")}
        className="fixed bottom-6 right-6 z-[9999] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white"
        style={{
          animation: "iron-wa-pulse 2s ease-in-out infinite",
        }}
      >
        <WhatsAppIcon />
      </WhatsAppButtonLink>
    </main>
  );
}
