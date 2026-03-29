import { ArrowRight, Sparkles, MessageCircle, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { NicheCard } from "@/components/NicheCard";
import { defaultWhatsappLink } from "@/components/landing/landingVisuals";

const WHATSAPP_NUMBER = "541166448389";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

function whatsappLink(message: string) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

const heroStats = [
  { value: "+Consultas", label: "desde el primer día" },
  { value: "+Confianza", label: "en el primer vistazo" },
  { value: "+Cierres", label: "con WhatsApp y formulario" },
];

const problems = [
  {
    title: "Tenés redes pero no recibís consultas",
    text: "Publicás contenido, pero eso no siempre se transforma en mensajes o reservas.",
  },
  {
    title: "Tu competencia se ve más profesional",
    text: "Cuando una web transmite más valor, es más fácil que el cliente se incline por ellos.",
  },
  {
    title: "Dependés del boca a boca",
    text: "Sin una web que convierta, cada consulta depende de una recomendación aislada.",
  },
  {
    title: "Tu web no genera resultados",
    text: "Si no guía a una acción, termina siendo una presencia online que no vende.",
  },
];

const solutions = [
  "Más consultas",
  "Imagen profesional",
  "Presencia online sólida",
  "Automatización básica",
];

const rubros = [
  {
    slug: "gimnasios",
    title: "Gimnasios",
    headline: "Así podría verse tu web si sos dueño de un gimnasio",
    copy: "Diseñada para atraer clientes en gimnasios.",
    message: "Hola, quiero una web para mi gimnasio que me consiga más consultas e inscripciones.",
    demoHref: "/gimnasios",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "personal-trainers",
    title: "Personal Trainers",
    headline: "Así podría verse tu web si sos entrenador personal",
    copy: "Diseñada para atraer clientes en entrenamiento personal.",
    message: "Hola, quiero una web para mi trabajo de personal trainer que me ayude a vender más.",
    demoHref: "/entrenadores",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "nutricionistas",
    title: "Nutricionistas",
    headline: "Así podría verse tu web si sos nutricionista",
    copy: "Diseñada para atraer clientes en nutrición.",
    message: "Hola, quiero una web para mi consultorio de nutrición y atraer más pacientes.",
    demoHref: "/nutricionistas",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "psicologos",
    title: "Psicólogos",
    headline: "Así podría verse tu web si sos psicólogo",
    copy: "Diseñada para atraer clientes en psicología.",
    message: "Hola, quiero una web para mi consultorio de psicología y agendar más turnos.",
    demoHref: "/psicologos",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "estetica-corporal",
    title: "Estética corporal",
    headline: "Así podría verse tu web si ofrecés estética corporal",
    copy: "Diseñada para atraer clientes en estética corporal.",
    message: "Hola, quiero una web para estética corporal que me ayude a vender más tratamientos.",
    demoHref: "/estetica-corporal",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
  },
];

const benefits = [
  {
    title: "Recibir consultas todos los días",
    text: "Cada sección está pensada para invitar a escribirte o pedir más información.",
  },
  {
    title: "Mostrarte profesional desde el primer contacto",
    text: "Una web clara y moderna hace que te tomen en serio enseguida.",
  },
  {
    title: "Diferenciarte de tu competencia",
    text: "No se trata solo de verse bien, sino de transmitir mejor el valor de tu trabajo.",
  },
  {
    title: "Tener una web que trabaja por vos 24/7",
    text: "Tu sitio sigue generando oportunidades aunque vos estés ocupado con tu negocio.",
  },
];

const process = [
  {
    step: "01",
    title: "Nos escribís por WhatsApp",
    text: "Nos contás qué necesitás y a quién le vendés. Sin vueltas.",
    icon: MessageCircle,
  },
  {
    step: "02",
    title: "Definimos tu web en 10 minutos",
    text: "En una llamada rápida definimos el contenido y el estilo de tu página.",
    icon: Clock,
  },
  {
    step: "03",
    title: "En pocos días tenés tu página lista",
    text: "Tu web queda publicada, funcionando y lista para recibir clientes.",
    icon: CheckCircle,
  },
];

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

export default function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(34,211,238,0.16),transparent_32%),radial-gradient(circle_at_84%_12%,rgba(59,130,246,0.12),transparent_30%),radial-gradient(circle_at_60%_88%,rgba(16,185,129,0.1),transparent_28%)]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0d0d12]/80 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#2563EB] to-[#7C3AED]">
              <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight text-white">WebApp<span className="text-[#2563EB]">Impulsor</span></span>
          </Link>

          <Button asChild size="sm" className="bg-[#25D366] text-white hover:bg-[#20bd5a]">
            <a href="https://wa.me/541166448389" target="_blank" rel="noreferrer">
              <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Consultá ahora
            </a>
          </Button>
        </div>
      </header>

      <section className="container py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Sitios que generan consultas reales
          </div>

          {/* H1 */}
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Tu negocio merece una web que <span className="text-[#2563EB]">trabaje por vos</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
            Diseño páginas web para gimnasios, profesionales de la salud y emprendedores que necesitan conseguir clientes online.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="bg-[#2563EB] text-white hover:bg-[#1d4ed8]">
              <a href="#rubros">Quiero mi web</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#rubros">Ver ejemplos de sitios →</a>
            </Button>
          </div>

          {/* Social proof */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <span className="text-yellow-500">★★★★★</span>
            <span className="text-sm text-muted-foreground">+20 negocios con web activa</span>
          </div>
        </div>
      </section>

      <section id="problema" className="container py-12 sm:py-16">
        <SectionTitle
          eyebrow="Problema"
          title="¿Te pasa esto?"
          description="Cuando la web no convierte, el negocio sigue online pero no despega."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {problems.map((item) => (
            <div key={item.title} className="hover-card rounded-3xl p-6">
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm font-medium text-foreground/90">
          Si te identificás con alguno, estás perdiendo clientes todos los días.
        </p>
      </section>

      <section id="solucion" className="container py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <SectionTitle
              eyebrow="Solución"
              title="Convertimos tu web en una herramienta de ventas"
              description="No hacemos páginas 'lindas'. Creamos webs pensadas para que tus clientes te contacten, te elijan y te compren."
            />

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {solutions.map((item) => (
                <div key={item} className="px-4 py-4">
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>


        </div>
      </section>

      <section id="rubros" className="container py-12 sm:py-16">
        <SectionTitle
          eyebrow="Ejemplos"
          title="Elegí tu tipo de negocio y mirá cómo sería tu web"
          description="Cada rubro tiene una solución específica pensada para atraer clientes y facilitar el contacto."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <NicheCard
            name="Iron Fitness"
            rubro="Gimnasio"
            accentColor="#F97316"
            bgColor="#0a0a0f"
            href="/gimnasios"
          />
          <NicheCard
            name="ProCoach"
            rubro="Personal trainer"
            accentColor="#06B6D4"
            bgColor="#030d10"
            href="/entrenadores"
          />
          <NicheCard
            name="Mente Clara"
            rubro="Psicólogo"
            accentColor="#A78BFA"
            bgColor="#080610"
            href="/psicologos"
          />
          <NicheCard
            name="NutriVida"
            rubro="Nutricionista"
            accentColor="#34D399"
            bgColor="#030e09"
            href="/nutricionistas"
          />
          <NicheCard
            name="Glam Studio"
            rubro="Estética corporal"
            accentColor="#F472B6"
            bgColor="#0d060b"
            href="/estetica-corporal"
          />
          <NicheCard
            name="LaunchMe"
            rubro="Emprendedor"
            accentColor="#FACC15"
            bgColor="#0d0c02"
            href="/emprendedores"
          />
        </div>
      </section>

      <section id="como-funciona" className="container py-12 sm:py-16">
        <SectionTitle
          eyebrow="Proceso"
          title="¿Cómo funciona?"
          description="Simple, rápido y sin vueltas."
        />

        <div className="mt-10 space-y-8">
          {[
            {
              step: "1",
              title: "Me contás tu negocio",
              desc: "Hablamos por WhatsApp o completás el formulario.",
            },
            {
              step: "2",
              title: "Diseño y desarrollo tu sitio",
              desc: "Creo una landing pensada para que tus clientes se contacten con vos.",
            },
            {
              step: "3",
              title: "Tu web sale al aire",
              desc: "En pocos días tenés tu sitio publicado y listo para conseguir consultas.",
            },
          ].map((item) => (
            <div key={item.step} className="flex items-start gap-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2563EB] text-sm font-semibold text-white">
                {item.step}
              </div>
              <div>
                <h3 className="text-[15px] font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="beneficios" className="container py-12 sm:py-16">
        <SectionTitle
          eyebrow="Beneficios"
          title="Lo que vas a lograr con tu web"
          description="La web está pensada para ayudarte a conseguir más resultados y menos fricción en la venta."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((item) => (
            <div key={item.title} className="hover-card rounded-3xl p-6">
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Mitad de página */}
      <section className="container py-12 sm:py-16">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#2563EB]/30 bg-[#0d0d12] p-8 sm:p-10">
          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.15),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.1),transparent_50%)]" />
          
          <div className="relative grid gap-6 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2563EB]">¿Listo para empezar?</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Tu competencia ya está online. La diferencia es quién convierte mejor.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">
                Si querés una web que genere clientes, te ayudo a construirla con una propuesta clara y enfocada en
                resultados.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Button asChild size="lg" className="w-full bg-[#25D366] text-white hover:bg-[#20bd5a]">
                <a href={defaultWhatsappLink()} target="_blank" rel="noreferrer">
                  <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Quiero más clientes
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white">
                <a href="#contacto">Hablar por WhatsApp</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="proceso" className="container py-12 sm:py-16">
        <SectionTitle
          eyebrow="Proceso"
          title="Así trabajamos"
          description="Un proceso simple y claro para avanzar rápido y llegar a una web lista para vender."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {process.map((item) => (
            <div key={item.step} className="surface-card hover-card rounded-3xl p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--neon-cyan))]/10">
                <item.icon className="h-6 w-6 text-[hsl(var(--neon-cyan))]" />
              </div>
              <div className="mt-4 text-sm font-semibold tracking-[0.2em] text-[hsl(var(--neon-cyan))]">{item.step}</div>
              <h3 className="mt-2 text-xl font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="sobre-mi" className="container py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="surface-card hover-card rounded-[2rem] p-6 sm:p-8">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
              alt="Foto de perfil de Diego Podlecki"
              className="h-full w-full rounded-[1.5rem] object-cover"
              loading="lazy"
            />
          </div>

          <div className="surface-card hover-card rounded-[2rem] p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">Quién está detrás</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Diego Podlecki</h2>
            <p className="mt-2 text-sm text-muted-foreground">Diseñador web enfocado en resultados</p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Soy Diego Podlecki, el creador de WebAppImpulsor. Diseño páginas web para negocios que necesitan algo
              más que "verse bien": necesitan generar consultas, confianza y ventas reales.
            </p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Empecé este proyecto para ayudar a negocios de servicios a dejar de depender solo de redes y tener una
              web que trabaje como una verdadera herramienta comercial.
            </p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Trabajo con gimnasios, entrenadores personales, nutricionistas, psicólogos y centros de estética que quieren
              más clientes sin depender solo del boca a boca.
            </p>

            <div className="mt-6 space-y-3 text-sm leading-6 text-muted-foreground">
              <p><strong className="text-foreground">Qué hago:</strong> Creo landing pages que presentan tu servicio, generan confianza y empujan a la acción.</p>
              <p><strong className="text-foreground">Por qué ayudo a negocios:</strong> Porque muchas marcas pierden oportunidades por no mostrar bien lo que hacen.</p>
              <p><strong className="text-foreground">Enfoque en resultados:</strong> Todo está pensado para conseguir más consultas, más mensajes y más clientes.</p>
              <p><strong className="text-foreground">Cerca tuyo:</strong> Trabajo de forma simple, directa y sin vueltas para avanzar rápido.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="container py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <div className="surface-card hover-card rounded-[2rem] p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">Contacto directo</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">Pedí tu web y empezá a recibir clientes</h2>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                Completá tus datos y te respondo con una propuesta concreta. Te respondo en menos de 24 hs.
              </p>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-600 dark:text-emerald-300">
                WhatsApp visible y respuesta rápida
              </div>

              <div className="mt-6 space-y-3">
                {["Respuesta rápida y clara", "Ideal para presupuestos, reservas y consultas", "Te respondo en menos de 24 hs"].map(
                  (item) => (
                    <div key={item} className="px-4 py-4 text-sm">
                      {item}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="card-neon glow-soft surface-card hover-card rounded-[2rem] p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-16 pt-2 sm:pb-20">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#2563EB]/30 bg-[#0d0d12] p-8 sm:p-10">
          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(37,99,235,0.15),transparent_50%),radial-gradient(circle_at_30%_80%,rgba(124,58,237,0.1),transparent_50%)]" />
          
          <div className="relative grid gap-6 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2563EB]">CTA final</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Tu competencia ya está online. La diferencia es quién convierte mejor.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">
                Si querés una web que genere clientes, te ayudo a construirla con una propuesta clara y enfocada en
                resultados.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Button asChild size="lg" className="w-full bg-[#25D366] text-white hover:bg-[#20bd5a]">
                <a href={defaultWhatsappLink()} target="_blank" rel="noreferrer">
                  <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Hablar por WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white">
                <a href="#rubros">Quiero ver ejemplos</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <a
        href={defaultWhatsappLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="Hablar por WhatsApp"
        className="animate-wa-pulse fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(142_70%_45%)] text-white shadow-[0_18px_50px_-18px_rgba(34,197,94,0.7)] transition-transform duration-300 hover:scale-110"
      >
        <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* Cierre */}
      <section className="container py-12 sm:py-16">
        <div className="rounded-xl border border-[#BFDBFE] bg-[#EFF6FF] p-8 text-center sm:p-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">¿Querés una web así para tu negocio?</h2>
          <p className="mt-4 text-muted-foreground">Consultame sin compromiso. Te cuento qué podés tener y en cuánto tiempo.</p>

          <Button asChild size="lg" className="mt-6 bg-[#25D366] text-white hover:bg-[#20bd5a]">
            <a href="https://wa.me/541166448389" target="_blank" rel="noreferrer">
              <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Hablemos por WhatsApp
            </a>
          </Button>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full bg-gray-100 px-4 py-1.5 text-sm text-muted-foreground">Sin contratos largos</span>
            <span className="text-muted-foreground">·</span>
            <span className="rounded-full bg-gray-100 px-4 py-1.5 text-sm text-muted-foreground">Entrega rápida</span>
            <span className="text-muted-foreground">·</span>
            <span className="rounded-full bg-gray-100 px-4 py-1.5 text-sm text-muted-foreground">Soporte incluido</span>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#0d0d12]">
        <div className="container flex flex-col gap-3 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold tracking-tight text-white">WebAppImpulsor</p>
            <p className="mt-1 text-sm text-white/50">
              Diego Podlecki · <a className="transition-colors hover:text-white" href="mailto:info.diego@webappimpulsor.com">info.diego@webappimpulsor.com</a>
            </p>
          </div>
          <div className="text-sm text-white/50">Diseño web enfocado en resultados</div>
        </div>
      </footer>
    </main>
  );
}
