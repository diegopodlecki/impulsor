import { useEffect, type ReactNode } from "react";

import { ArrowRight, MessageCircle, Sparkles, Calendar, Camera, FileText, Target, Dumbbell, Star, CreditCard, Heart, List, User, Info, Image } from "lucide-react";
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

function getIcon(iconName: string) {
  const icons: Record<string, ReactNode> = {
    image: <Image className="h-6 w-6" />,
    calendar: <Calendar className="h-6 w-6" />,
    camera: <Camera className="h-6 w-6" />,
    form: <FileText className="h-6 w-6" />,
    target: <Target className="h-6 w-6" />,
    dumbbell: <Dumbbell className="h-6 w-6" />,
    star: <Star className="h-6 w-6" />,
    "credit-card": <CreditCard className="h-6 w-6" />,
    heart: <Heart className="h-6 w-6" />,
    list: <List className="h-6 w-6" />,
    user: <User className="h-6 w-6" />,
    info: <Info className="h-6 w-6" />,
    sparkles: <Sparkles className="h-6 w-6" />,
  };
  return icons[iconName] || <Sparkles className="h-6 w-6" />;
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
      {/* Navbar simple */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-lg font-semibold tracking-tight">{config.title}</span>
          </Link>

          <Button asChild size="sm" style={{ backgroundColor: config.accentColor || '#25D366' }} className="text-white hover:opacity-90">
            <a href="https://wa.me/541166448389" target="_blank" rel="noreferrer">
              <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <img
            src={config.heroImage}
            alt={config.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container relative z-10 py-24 sm:py-32 lg:py-40">
          <div className="max-w-2xl">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {config.heroTitle}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              {config.heroSubtitle}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" style={{ backgroundColor: config.primaryColor || '#25D366' }} className="text-white hover:opacity-90">
                <a href="https://wa.me/541166448389" target="_blank" rel="noreferrer">
                  <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {config.heroCta}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white">
                <a href="#servicios">Ver servicios</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios/Servicios Section */}
      <section id="servicios" className="container py-16 sm:py-20">
        <SectionTitle
          eyebrow="Servicios"
          title={config.servicesTitle}
          description={config.servicesSubtitle}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {config.services.slice(0, 3).map((service) => (
            <div key={service.title} className="rounded-2xl border border-border/70 bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ backgroundColor: `${config.accentColor || '#2563EB'}10`, color: config.accentColor || '#2563EB' }}>
                {getIcon(service.icon)}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonio Section */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">Testimonio</p>
            <blockquote className="mt-6 text-2xl font-semibold leading-10 tracking-tight sm:text-3xl">
              "{config.testimonial?.text || testimonials[0].text}"
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full text-white" style={{ backgroundColor: config.accentColor || '#2563EB' }}>
                <span className="text-sm font-bold">{(config.testimonial?.name || testimonials[0].name).split(' ').map(n => n[0]).join('')}</span>
              </div>
              <div className="text-left">
                <p className="font-semibold">{config.testimonial?.name || testimonials[0].name}</p>
                <p className="text-sm text-muted-foreground">{config.testimonial?.role || testimonials[0].role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario Section */}
      <section id="contacto" className="container py-16 sm:py-20">
        <div className="mx-auto max-w-xl">
          <SectionTitle
            eyebrow="Contacto"
            title={config.formTitle}
            description={config.formSubtitle}
          />

          <div className="mt-10">
            <ContactForm title={config.formTitle} description={config.formSubtitle} buttonLabel="Enviar mensaje" trustText="Te respondo en menos de 24 hs" />
          </div>
        </div>
      </section>

      {/* Footer mínimo */}
      <footer className="border-t border-gray-200 bg-white py-8">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} {config.title}. Todos los derechos reservados.</p>
          <p className="mt-2 text-xs text-muted-foreground">
            Sitio desarrollado por <Link to="/" className="underline hover:text-foreground">WebAppImpulsor</Link>
          </p>
        </div>
      </footer>

      {/* WhatsApp Flotante */}
      <a
        href="https://wa.me/541166448389"
        target="_blank"
        rel="noreferrer"
        aria-label="Hablar por WhatsApp"
        className="animate-wa-pulse fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_50px_-18px_rgba(34,197,94,0.7)] transition-transform duration-300 hover:scale-110"
      >
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </main>
  );
}
