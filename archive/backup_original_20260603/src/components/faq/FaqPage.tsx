import { ChevronRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

import { analytics } from "@/components/analytics/analytics";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FAQ_CATEGORIES } from "@/lib/faq";
import { buildWhatsAppUrl } from "@/lib/utils";

export default function FaqPage() {
  const whatsappUrl = buildWhatsAppUrl("Hola, vi la página de preguntas frecuentes y tengo otra duda sobre mi web.");

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container py-10 sm:py-14">
        <nav className="flex flex-wrap items-center gap-2 text-sm text-white/55">
          <Link to="/" className="transition-colors hover:text-white">
            Inicio
          </Link>
          <span>·</span>
          <span className="text-white/80">Preguntas frecuentes</span>
        </nav>
      </section>

      <section className="container pb-16 sm:pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
            <ChevronRight className="h-4 w-4" />
            Dudas frecuentes sobre webs profesionales
          </div>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Preguntas Frecuentes
          </h1>
          <p className="mt-5 text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
            Respondemos de forma clara y honesta las dudas más comunes antes de encarar una web profesional.
          </p>
        </div>

        <div className="mt-12 grid gap-6">
          {FAQ_CATEGORIES.map((category) => (
            <section key={category.slug} className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-5 sm:p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value={category.slug} className="border-none">
                  <AccordionTrigger className="py-0 text-left no-underline hover:no-underline">
                    <div className="flex flex-col gap-2">
                      <span className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
                        {category.title}
                      </span>
                      <span className="text-base font-normal text-muted-foreground">{category.description}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-0 pt-6">
                    <div className="space-y-3">
                      {category.items.map((item) => (
                        <details
                          key={item.q}
                          className="group rounded-2xl border border-white/10 bg-black/20 p-4"
                          onToggle={(event) => {
                            if (event.currentTarget.open) {
                              analytics.faqOpen(item.q);
                            }
                          }}
                        >
                          <summary className="cursor-pointer list-none text-lg font-semibold text-white outline-none">
                            {item.q}
                          </summary>
                          <div className="mt-4 space-y-4 text-sm leading-7 text-white/70">
                            {item.a.map((paragraph) => (
                              <p key={paragraph}>{paragraph}</p>
                            ))}
                          </div>
                        </details>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-cyan-400/20 bg-slate-950 p-8 text-center sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">¿Tenés otra pregunta?</h2>
          <p className="mt-4 text-sm leading-7 text-white/70">
            Escribinos por WhatsApp y te respondemos con el contexto real de tu negocio, sin vueltas.
          </p>

          <Button asChild size="lg" className="mt-6 bg-[#25D366] text-white hover:bg-[#20bd5a]">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => analytics.whatsappClick("cta_final")}
            >
              Escribinos →
              <MessageCircle className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}
