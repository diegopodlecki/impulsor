import { WHATSAPP_NUMBER } from "@/lib/seo-config";

export function Footer() {
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <footer className="border-t border-white/5 bg-[#05070d]">
      <div className="container py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.95fr_0.95fr_0.95fr]">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3">
              <div className="relative grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 shadow-[0_0_30px_-18px_rgba(16,185,129,0.8)]">
                <span className="text-[10px] font-black tracking-[0.16em] text-white">WA</span>
              </div>
              <div className="leading-none">
                <span className="font-heading text-lg font-extrabold tracking-tight text-white">WebAppImpulsor</span>
                <span className="mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.18em] text-white/45">
                  Automatización con IA
                </span>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-7 text-white/55">
              Automatización de WhatsApp, IA para negocios, landing pages e integraciones para profesionales y servicios.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">Contacto</p>
            <div className="mt-4 space-y-3 text-sm text-white/70">
              <a href="#contacto" className="block transition hover:text-white">Solicitar diagnóstico</a>
              <a href={whatsappHref} className="block transition hover:text-white">WhatsApp</a>
              <a href="mailto:hola@webappimpulsor.com.ar" className="block transition hover:text-white">hola@webappimpulsor.com.ar</a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">Servicios</p>
            <div className="mt-4 space-y-3 text-sm text-white/70">
              <a href="#contacto" className="block transition hover:text-white">Automatización de WhatsApp</a>
              <a href="#contacto" className="block transition hover:text-white">IA para negocios</a>
              <a href="#contacto" className="block transition hover:text-white">Landing pages</a>
              <a href="#contacto" className="block transition hover:text-white">Integraciones</a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">Casos de uso</p>
            <div className="mt-4 space-y-3 text-sm text-white/70">
              <a href="/odontologos" className="block transition hover:text-white">Odontólogos</a>
              <a href="/medicos" className="block transition hover:text-white">Médicos</a>
              <a href="/fonoaudiologos" className="block transition hover:text-white">Fonoaudiólogos</a>
              <a href="/inmobiliarias" className="block transition hover:text-white">Inmobiliarias</a>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 border-t border-white/5 pt-6 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">Redes</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <a href={whatsappHref} className="ds-badge">WhatsApp</a>
              <a href="mailto:hola@webappimpulsor.com.ar" className="ds-badge">Email</a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">Información legal</p>
            <div className="mt-3 flex flex-wrap gap-4 text-sm text-white/55">
              <span>Privacidad</span>
              <span>Términos</span>
              <span>Datos de contacto</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
