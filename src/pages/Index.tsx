import { ArrowRight, CheckCircle2, Clock3, MessageCircle, Sparkles, ShieldCheck, Zap } from "lucide-react";
import { Link } from "react-router-dom";

import { ContactForm } from "@/components/ContactForm";

const highlights = [
  "Diseño premium y mobile-first",
  "Leads guardados en Supabase",
  "Aviso por email al instante",
  "Panel admin privado con login",
];

const steps = [
  {
    title: "1. Captura",
    text: "El visitante completa un formulario claro, simple y enfocado en conversión.",
  },
  {
    title: "2. Registro",
    text: "Los datos se guardan en Supabase y quedan listos para el panel admin.",
  },
  {
    title: "3. Seguimiento",
    text: "Se dispara el email automático y el lead no se pierde en el camino.",
  },
];

const benefits = [
  "Formulario limpio, sin PHP ni soluciones frágiles",
  "Supabase como base única para toda la app",
  "Admin protegido por autenticación",
  "Base lista para vender como SaaS o servicio",
];

const faqs = [
  {
    q: "¿Los datos se pierden si cierro el navegador?",
    a: "No. El formulario guarda todo en Supabase y el admin puede ver los registros cuando inicia sesión.",
  },
  {
    q: "¿Necesito un backend aparte?",
    a: "No. La app usa Supabase para base, auth y funciones de email, así que la arquitectura queda simple.",
  },
  {
    q: "¿Puedo cambiar el branding?",
    a: "Sí. El texto, colores y contenido se pueden ajustar para tu marca o la de cada cliente.",
  },
];

const showcases = [
  {
    title: "Entrenador personal",
    tone: "Naranja de alto impacto",
    text: "Un estilo energetico y directo, pensado para vender transformacion fisica y sesiones premium.",
    tags: ["hero fuerte", "servicios", "testimonios"],
  },
  {
    title: "Psicologia clinica",
    tone: "Azul calmo y confiable",
    text: "Una estetica sobria, limpia y humana para transmitir confianza y reservar turnos sin friccion.",
    tags: ["agenda", "confianza", "claridad"],
  },
  {
    title: "Nutricion y bienestar",
    tone: "Verde fresco y profesional",
    text: "Pensado para planes, seguimiento y conversion, con una lectura rapida y ordenada.",
    tags: ["planes", "seguimiento", "conversion"],
  },
  {
    title: "Estetica corporal",
    tone: "Oscuro premium con brillo",
    text: "Un look mas editorial y sofisticado, ideal para servicios de alto ticket y marca personal.",
    tags: ["premium", "marca personal", "alto ticket"],
  },
];

export default function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(34,211,238,0.16),transparent_42%),radial-gradient(circle_at_80%_16%,rgba(168,85,247,0.12),transparent_38%),radial-gradient(circle_at_60%_86%,rgba(59,130,246,0.12),transparent_36%)]" />
        <div className="absolute inset-0 bg-tech-lines opacity-70" />
      </div>

      <header className="sticky top-0 z-30 border-b border-border/40 bg-background/35 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-background/40 shadow-card">
              <Sparkles className="h-5 w-5 text-[hsl(var(--neon-cyan))]" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight">WebAppImpulsor</p>
              <p className="text-xs text-muted-foreground">Landing comercial + Supabase + admin</p>
            </div>
          </Link>

          <div className="hidden items-center gap-3 md:flex">
            <a className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="#beneficios">
              Beneficios
            </a>
            <a className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="#proceso">
              Proceso
            </a>
            <a className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="#ejemplos">
              Ejemplos
            </a>
            <a className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="#contacto">
              Contacto
            </a>
            <Link
              to="/admin"
              className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/30 px-4 py-2 text-sm font-medium text-foreground/90 transition-colors hover:bg-background/50"
            >
              Abrir admin
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      <section className="container py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/30 px-4 py-2 text-sm text-foreground/90">
                <Zap className="h-4 w-4 text-[hsl(var(--neon-cyan))]" />
                Sistema listo para captar leads y hacer seguimiento
              </div>
              <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Una landing profesional que convierte visitas en contactos reales
              </h1>
              <p className="mt-5 text-pretty text-base text-muted-foreground sm:text-lg">
                Diseñada para vender servicios, guardar contactos en Supabase, notificar por email y dejar un panel
                admin privado para hacer seguimiento sin perder leads.
              </p>

              <ul className="mt-8 space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3 rounded-2xl border border-border/60 bg-gradient-card px-4 py-3 shadow-card">
                    <CheckCircle2 className="h-5 w-5 text-[hsl(var(--neon-cyan))]" />
                    <span className="text-sm text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {benefits.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-border/60 bg-background/20 px-4 py-4 text-sm text-foreground/90 shadow-card"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-3xl border border-border/60 bg-background/20 p-5 shadow-card">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-[hsl(var(--neon-blue))]" />
                  <div>
                    <p className="font-medium">Arquitectura simple y sólida</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      React + Supabase + Resend + Edge Functions. Menos piezas, menos fricción y más control.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="contacto" className="lg:col-span-6">
            <div className="card-neon glow-soft rounded-3xl border border-border/70 bg-gradient-card p-6 shadow-card sm:p-8">
              <div className="mb-6">
                <p className="text-sm text-muted-foreground">Contacto</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight">Enviar consulta</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  El formulario guarda en Supabase y dispara el aviso por email automáticamente.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section id="beneficios" className="container py-12 sm:py-16">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-3xl border border-border/70 bg-gradient-card p-6 shadow-card">
            <Clock3 className="h-5 w-5 text-[hsl(var(--neon-cyan))]" />
            <h3 className="mt-4 text-lg font-semibold">Rápida de entender</h3>
            <p className="mt-2 text-sm text-muted-foreground">El visitante ve el valor en segundos y sabe cómo contactarte.</p>
          </div>
          <div className="rounded-3xl border border-border/70 bg-gradient-card p-6 shadow-card">
            <MessageCircle className="h-5 w-5 text-[hsl(var(--neon-cyan))]" />
            <h3 className="mt-4 text-lg font-semibold">Contacto inmediato</h3>
            <p className="mt-2 text-sm text-muted-foreground">El flujo está pensado para reducir fricción y convertir más.</p>
          </div>
          <div className="rounded-3xl border border-border/70 bg-gradient-card p-6 shadow-card">
            <Sparkles className="h-5 w-5 text-[hsl(var(--neon-cyan))]" />
            <h3 className="mt-4 text-lg font-semibold">Listo para vender</h3>
            <p className="mt-2 text-sm text-muted-foreground">Podés adaptarlo a entrenadores, coaches, profesionales o marcas.</p>
          </div>
          <div className="rounded-3xl border border-border/70 bg-gradient-card p-6 shadow-card">
            <Zap className="h-5 w-5 text-[hsl(var(--neon-cyan))]" />
            <h3 className="mt-4 text-lg font-semibold">Escalable</h3>
            <p className="mt-2 text-sm text-muted-foreground">La base ya está modular para agregar más clientes o features.</p>
          </div>
        </div>
      </section>

      <section id="proceso" className="container py-12 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">Proceso</p>
          <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            Así queda armado el sistema en producción
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Una sola app para mostrar la marca, capturar leads, guardar datos y administrar contactos.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="rounded-3xl border border-border/70 bg-gradient-card p-6 shadow-card">
              <div className="text-sm font-semibold tracking-tight text-[hsl(var(--neon-cyan))]">{step.title}</div>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="ejemplos" className="container py-12 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">Ejemplos</p>
          <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            La parte visual que hacia que las demos se sintieran reales
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Rescatamos la idea de los ejemplos por rubro, pero ahora como una seccion limpia dentro de la landing.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
          {showcases.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-border/70 bg-gradient-card p-5 shadow-card transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="rounded-2xl border border-white/10 bg-background/20 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Demo visual</span>
                  <span className="rounded-full border border-border/70 bg-background/40 px-3 py-1 text-[11px] font-medium text-foreground/80">
                    {item.tone}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border/60 bg-background/30 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container py-12 sm:py-16">
        <div className="rounded-[2rem] border border-border/70 bg-gradient-card p-6 shadow-card sm:p-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">Panel admin</p>
              <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                Leads guardados, organizados y listos para seguir
              </h2>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                El panel privado permite revisar contactos, marcar leído/no leído y mantener el seguimiento sin abrir
                planillas externas.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/admin"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
                >
                  Ir al admin
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/25 px-5 py-3 text-sm font-medium text-foreground/90 transition-colors hover:bg-background/40"
                >
                  Ver formulario
                </a>
              </div>
            </div>

            <div className="grid gap-3">
              {[
                "Búsqueda por nombre, email o mensaje",
                "Filtro por fecha y estado",
                "Exportación CSV para respaldo",
                "Autenticación con Supabase",
              ].map((line) => (
                <div key={line} className="rounded-2xl border border-border/60 bg-background/20 px-4 py-4 text-sm text-foreground/90">
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="container py-12 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">FAQ</p>
          <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">Preguntas frecuentes</h2>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="rounded-2xl border border-border/70 bg-gradient-card p-5 shadow-card"
            >
              <summary className="cursor-pointer list-none font-semibold tracking-tight outline-none [&::-webkit-details-marker]:hidden">
                {item.q}
              </summary>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="border-t border-border/40 bg-background/25">
        <div className="container flex flex-col gap-3 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold tracking-tight">WebAppImpulsor</p>
            <p className="text-sm text-muted-foreground">Landing comercial con backend real.</p>
          </div>
          <div className="text-sm text-muted-foreground">Formulario, admin y email automático integrados.</div>
        </div>
      </footer>
    </main>
  );
}
