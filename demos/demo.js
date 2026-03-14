/**
 * Impulsor Web - JS mínimo para demos estáticas
 * - Botones WhatsApp con mensaje automático
 * - Formulario demo: abre WhatsApp y no recarga la página
 */

function getPhone() {
  const fromHtml = document.documentElement.getAttribute("data-wa-phone");
  const phone = (fromHtml || "541166448389").replace(/\D/g, "");
  return phone || "541166448389";
}

function buildWaUrl(message) {
  const phone = getPhone();
  const text = encodeURIComponent(message || "");
  return `https://wa.me/${phone}?text=${text}`;
}

function openWa(message) {
  window.open(buildWaUrl(message), "_blank", "noopener,noreferrer");
}

function bindWhatsAppButtons() {
  const buttons = Array.from(document.querySelectorAll("[data-wa-message]"));
  for (const btn of buttons) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const msg = btn.getAttribute("data-wa-message") || "Hola, quiero una web similar para mi negocio.";
      openWa(msg);
    });
  }
}

function bindDemoForm() {
  const form = document.querySelector("form[data-wa-form]");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const nombre = (fd.get("nombre") || "").toString().trim();
    const negocio = (fd.get("negocio") || "").toString().trim();
    const mensaje = (fd.get("mensaje") || "").toString().trim();

    const full = [
      nombre ? `Hola, soy ${nombre}.` : "Hola,",
      negocio ? `Tengo un negocio de ${negocio}.` : null,
      "",
      "Vi la demo de Impulsor Web y quiero una página similar para mi negocio.",
      mensaje ? "" : null,
      mensaje ? `Mensaje: ${mensaje}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    openWa(full);
  });
}

function bindBackToLanding() {
  const link = document.querySelector("a[data-back-to-landing]");
  if (!link) return;
  const base = (link.getAttribute("data-base-url") || "/") + "";
  link.setAttribute("href", base);
}

document.addEventListener("DOMContentLoaded", () => {
  bindWhatsAppButtons();
  bindDemoForm();
  bindBackToLanding();
});

