import { useEffect, type ReactNode } from "react";

import { ArrowRight, CheckCircle2, MessageCircle, Sparkles, Target, TrendingUp, Zap, Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";

import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { type LandingConfig } from "@/data/landings";
import { defaultWhatsappLink, whatsappLink } from "@/components/landing/landingVisuals";

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">{eyebrow}</p>
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      <p className="mt-4 text-pretty text-muted-foreground">{description}</p>
    </div>
  );
}

function SectionActions() {
  return (
    <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
      <Button asChild variant="hero" size="sm" className="justify-center">
        <a href={defaultWhatsappLink()} target="_blank" rel="noreferrer">
          Hablar por WhatsApp
        </a>
      </Button>
      <Button asChild variant="outline" size="sm" className="justify-center">
        <a href="#contacto">Quiero mi web</a>
      </Button>
    </div>
  );
}

function syncMetaTag(selector: string, attributes: Record<string, string>) {
  const existing = document.querySelector<HTMLMetaElement>(selector);
  const tag = existing ?? document.createElement("meta");

  Object.entries(attributes).forEach(([key, value]) => {
    tag.setAttribute(key, value);
  });

  if (!existing) {
    document.head.appendChild(tag);
  }
}

function syncLinkTag(selector: string, attributes: Record<string, string>) {
  const existing = document.querySelector<HTMLLinkElement>(selector);
  const tag = existing ?? document.createElement("link");

  Object.entries(attributes).forEach(([key, value]) => {
    tag.setAttribute(key, value);
  });

  if (!existing) {
    document.head.appendChild(tag);
  }
}

const landingSeo: Record<
  string,
  {
    title: string;
    description: string;
    keywords: string;
    canonicalPath: string;
    ogImagePath: string;
  }
> = {
  gimnasios: {
    title: "Web para gimnasios que generan alumnos | WebAppImpulsor",
    description:
      "Landing page para gimnasios enfocada en conseguir nuevos alumnos, mostrar clases, horarios e instalaciones y convertir consultas por WhatsApp.",
    keywords: "web para gimnasios, landing page para gimnasios, página web para gimnasio, conseguir alumnos online",
    canonicalPath: "/gimnasios",
    ogImagePath: "/og/gimnasios.svg",
  },
  "personal-trainers": {
    title: "Web para entrenadores personales que generan clientes | WebAppImpulsor",
    description:
      "Landing page para entrenadores personales pensada para conseguir clientes online, mostrar rutinas, testimonios y planes de entrenamiento.",
    keywords: "web para entrenadores personales, landing para personal trainer, página web para entrenador, conseguir clientes online",
    canonicalPath: "/entrenadores",
    ogImagePath: "/og/entrenadores.svg",
  },
  nutricionistas: {
    title: "Web para nutricionistas que generan consultas | WebAppImpulsor",
    description:
      "Landing page para nutricionistas enfocada en captar pacientes, mostrar servicios y facilitar el contacto directo por WhatsApp.",
    keywords: "web para nutricionistas, landing page para nutricionista, página web para nutrición, conseguir consultas online",
    canonicalPath: "/nutricionistas",
    ogImagePath: "/og/nutricionistas.svg",
  },
  psicologos: {
    title: "Web para psicólogos que transmiten confianza | WebAppImpulsor",
    description:
      "Landing page para psicólogos pensada para transmitir confianza, captar consultas y facilitar el primer contacto con pacientes.",
    keywords: "web para psicólogos, landing page para psicólogo, página web para consultorio, generar consultas online",
    canonicalPath: "/psicologos",
    ogImagePath: "/og/psicologos.svg",
  },
  "estetica-corporal": {
    title: "Web para estética corporal que vende más consultas | WebAppImpulsor",
    description:
      "Landing page para estética corporal diseñada para mostrar tratamientos, transmitir imagen premium y convertir más consultas.",
    keywords: "web para estética corporal, landing page para estética, página web para tratamientos, conseguir consultas online",
    canonicalPath: "/estetica-corporal",
    ogImagePath: "/og/estetica-corporal.svg",
  },
};

const testimonials = [
  {
    name: "María González",
    role: "Dueña de gimnasio",
    text: "Desde que tenemos la web, recibimos 3-4 consultas por día. Antes dependíamos solo de Instagram.",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    role: "Personal Trainer",
    text: "Mi marca personal se ve mucho más profesional. Los clientes me encuentran más fácil y confían más.",
    rating: 5,
  },
  {
    name: "Laura Martínez",
    role: "Nutricionista",
    text: "La web me ayuda a filtrar pacientes y agendar consultas sin perder tiempo. Muy recomendable.",
    rating: 5,
  },
];

export function NicheLandingPage({ config }: { config: LandingConfig }) {
  useEffect(() => {
    const seo = landingSeo[config.slug];

    if (!seo) return;

    const canonicalUrl = `${window.location.origin}${seo.canonicalPath}`;
    const ogImageUrl = `${window.location.origin}${seo.ogImagePath}`;

    document.title = seo.title;
    syncMetaTag('meta[name="description"]', { name: "description", content: seo.description });
    syncMetaTag('meta[name="keywords"]', { name: "keywords", content: seo.keywords });
    syncMetaTag('meta[property="og:title"]', { property: "og:title", content: seo.title });
    syncMetaTag('meta[property="og:description"]', { property: "og:description", content: seo.description });
    syncMetaTag('meta[property="og:image"]', { property: "og:image", content: ogImageUrl });
    syncMetaTag('meta[property="og:image:alt"]', { property: "og:image:alt", content: `${config.title} | WebAppImpulsor` });
    syncMetaTag('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
    syncMetaTag('meta[name="twitter:title"]', { name: "twitter:title", content: seo.title });
    syncMetaTag('meta[name="twitter:description"]', { name: "twitter:description", content: seo.description });
    syncMetaTag('meta[name="twitter:image"]', { name: "twitter:image", content: ogImageUrl });
    syncLinkTag('link[rel="canonical"]', {
      rel: "canonical",
      href: canonicalUrl,
    });
  }, [config.slug]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(34,211,238,0.16),transparent_32%),radial-gradient(circle_at_84%_12%,rgba(59,130,246,0.12),transparent_30%),radial-gradient(circle_at_60%_88%,rgba(16,185,129,0.1),transparent_28%)]" />
      </div>

      <header className="sticky top-0 z-30 border-b border-border/50 bg-background/35 backdrop-blur">
        <div className="container flex h-16 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-background/20 shadow-card backdrop-blur">
              <Sparkles className="h-5 w-5 text-[hsl(var(--neon-cyan))]" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight">{config.title}</p>
              <p className="text-xs text-muted-foreground">Landing para generar clientes</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-4 sm:flex">
            <a className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="#servicios">
              Servicios
            </a>
            <a className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="#beneficios">
              Beneficios
            </a>
            <a className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="#testimonios">
              Testimonios
            </a>
            <a className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="#contacto">
              Contacto
            </a>
          </nav>

          <Button asChild variant="whatsapp" size="sm" className="hidden sm:inline-flex">
            <a href={defaultWhatsappLink()} target="_blank" rel="noreferrer">
              Hablar por WhatsApp
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-12 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <BadgePill text={config.heroBadge} />
            <div className="space-y-4">
              <h1 className="max-w-2xl text-balance text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                {config.heroTitle}
              </h1>
              <p className="max-w-xl text-lg leading-8 text-muted-foreground">{config.heroSubtitle}</p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="lg" className="justify-center">
                <a href={defaultWhatsappLink()} target="_blank" rel="noreferrer">
                  {config.heroCta}
                  <ArrowRight />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="justify-center">
              <a href="#servicios">{config.heroSecondaryCta}</a>
              </Button>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <StatCard icon={<Target className="h-5 w-5 text-[hsl(var(--neon-cyan))]" />} title="Más consultas" text="Tu landing guía a la acción." />
              <StatCard icon={<TrendingUp className="h-5 w-5 text-[hsl(var(--neon-cyan))]" />} title="Más confianza" text="Tu servicio se ve más sólido." />
              <StatCard icon={<Zap className="h-5 w-5 text-[hsl(var(--neon-cyan))]" />} title="Más ventas" text="La web trabaja por vos 24/7." />
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-gradient-card shadow-card">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-primary" />
              <img
                src={config.heroImage}
                alt={config.heroTitle}
                className="h-[500px] w-full object-cover"
                loading="eager"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
                <p className="text-sm font-semibold text-foreground">{config.heroPreviewTitle}</p>
                <p className="mt-1 text-xs text-muted-foreground">{config.heroPreviewSubtitle}</p>
              </div>
            </div>
            {/* Mockup de celular */}
            <div className="absolute -bottom-6 -right-6 w-48 overflow-hidden rounded-2xl border border-border/70 bg-background shadow-xl">
              <img
                src={config.heroImage}
                alt="Vista móvil"
                className="h-64 w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="container py-12 sm:py-16">
        <SectionTitle
          eyebrow="Servicios"
          title={config.solutionTitle}
          description={config.solutionText}
        />
        <SectionActions />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {config.solutionPoints.map((point, index) => (
            <div key={point} className="surface-card hover-card rounded-3xl p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary">
                <span className="text-lg font-bold text-primary-foreground">{index + 1}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">{point}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {index === 0 ? "Lo que más le importa ver al cliente." : index === 1 ? "La información clara acelera la decisión." : index === 2 ? "Todo queda pensado para cerrar mejor." : "Elemento clave para tu negocio."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Beneficios Section */}
      <section id="beneficios" className="container py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="surface-card hover-card rounded-[2rem] p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">Beneficios</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{config.benefitsTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">La landing está pensada para mover a la persona desde la duda hasta el contacto.</p>
            <div className="mt-6">
              <Button asChild variant="hero" size="sm">
                <a href={defaultWhatsappLink()} target="_blank" rel="noreferrer">
                  Quiero más clientes
                </a>
              </Button>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {config.benefits.map((item) => (
                <div key={item.title} className="p-4">
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card hover-card rounded-[2rem] p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-3">
              {config.benefits.slice(0, 3).map((item, index) => (
                <div key={item.title} className="p-5">
                  <div className="flex h-10 w-10 items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-[hsl(var(--neon-cyan))]" />
                  </div>
                  <p className="mt-3 font-semibold text-foreground">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios Section */}
      <section id="testimonios" className="container py-12 sm:py-16">
        <SectionTitle
          eyebrow="Testimonios"
          title="Lo que dicen nuestros clientes"
          description="Historias reales de negocios que mejoraron su presencia online."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="surface-card hover-card rounded-3xl p-6">
              <div className="flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Quote className="mt-4 h-8 w-8 text-muted-foreground/50" />
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{testimonial.text}</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary">
                  <span className="text-sm font-bold text-primary-foreground">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Proceso Section */}
      <section className="container py-12 sm:py-16">
        <SectionTitle
          eyebrow="Proceso"
          title={config.processTitle}
          description="Un proceso simple hace que el servicio se entienda rápido y avance sin fricción."
        />
        <SectionActions />

        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {config.process.map((item) => (
            <div key={item.step} className="surface-card hover-card rounded-3xl p-6">
              <div className="text-sm font-semibold tracking-[0.2em] text-[hsl(var(--neon-cyan))]">{item.step}</div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sobre mí Section */}
      <section className="container py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="surface-card hover-card rounded-[2rem] p-4 sm:p-6">
            <img src={config.profile} alt={`Foto de perfil de ${config.aboutName}`} className="h-full w-full rounded-[1.5rem] object-cover" loading="lazy" />
          </div>

          <div className="surface-card hover-card rounded-[2rem] p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">{config.aboutTitle}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{config.aboutName}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{config.aboutRole}</p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">{config.aboutText}</p>
            <div className="mt-6">
              <Button asChild variant="outline" size="sm">
                <a href="#contacto">Quiero mi web</a>
              </Button>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {config.aboutPoints.map((point) => (
                <div key={point.title} className="p-4">
                  <p className="text-sm font-semibold">{point.title}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Formulario Section */}
      <section id="contacto" className="container py-12 sm:py-16">
        <SectionTitle
          eyebrow="Formulario"
          title={config.formTitle}
          description={config.formSubtitle}
        />
        <SectionActions />

        <div className="mt-10">
          <ContactForm title={config.formTitle} description={config.formSubtitle} buttonLabel="Quiero mi web" trustText="Te respondo en menos de 24 hs" />
        </div>
      </section>

      {/* CTA Final */}
      <section className="container py-12 sm:py-16">
        <div className="surface-card hover-card rounded-[2rem] px-6 py-10 text-center sm:px-8 lg:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">CTA final</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{config.finalCtaTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{config.finalCtaText}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="hero" size="lg" className="justify-center">
              <a href={defaultWhatsappLink()} target="_blank" rel="noreferrer">
                Hablar por WhatsApp
                <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="justify-center">
              <a href="#contacto">Quiero mi web</a>
            </Button>
          </div>
        </div>
      </section>

      {/* WhatsApp Flotante */}
      <a
        href={defaultWhatsappLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="Hablar por WhatsApp"
        className="animate-wa-pulse fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(142_70%_45%)] text-white shadow-[0_18px_50px_-18px_rgba(34,197,94,0.7)] transition-transform duration-300 hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </main>
  );
}

function BadgePill({ text }: { text: string }) {
  return (
    <div className="inline-flex rounded-full border border-border/60 bg-background/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground backdrop-blur">
      {text}
    </div>
  );
}

function StatCard({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="surface-card hover-card rounded-3xl p-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border/60 bg-background/30">{icon}</div>
      <h3 className="mt-4 text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
    </div>
  );
}
