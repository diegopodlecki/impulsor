const WHATSAPP_NUMBER = "541166448389";
const DEFAULT_WHATSAPP_MESSAGE = "Hola, vi tu web y quiero una página para mi negocio";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

function xmlEscape(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function whatsappLink(message: string) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

export function defaultWhatsappLink() {
  return whatsappLink(DEFAULT_WHATSAPP_MESSAGE);
}

export function previewSvg(title: string, subtitle: string, accentA: string, accentB: string) {
  const safeTitle = xmlEscape(title);
  const safeSubtitle = xmlEscape(subtitle);

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" role="img" aria-label="${safeTitle}">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#07111f" />
          <stop offset="100%" stop-color="#101d35" />
        </linearGradient>
        <linearGradient id="accent" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${accentA}" />
          <stop offset="100%" stop-color="${accentB}" />
        </linearGradient>
      </defs>
      <rect width="1200" height="900" rx="48" fill="url(#bg)" />
      <circle cx="960" cy="170" r="150" fill="${accentA}" fill-opacity="0.18" />
      <circle cx="1040" cy="620" r="220" fill="${accentB}" fill-opacity="0.12" />
      <rect x="74" y="82" width="188" height="44" rx="22" fill="url(#accent)" fill-opacity="0.95" />
      <text x="98" y="111" fill="#ffffff" font-size="22" font-family="Inter, Arial, sans-serif" font-weight="700">Web que convierte</text>
      <text x="74" y="202" fill="#ffffff" font-size="54" font-family="Inter, Arial, sans-serif" font-weight="800">${safeTitle}</text>
      <text x="74" y="264" fill="#cbd5e1" font-size="28" font-family="Inter, Arial, sans-serif">${safeSubtitle}</text>
      <rect x="74" y="360" width="560" height="300" rx="32" fill="#0f172a" fill-opacity="0.72" stroke="#ffffff" stroke-opacity="0.08" />
      <rect x="108" y="398" width="260" height="24" rx="12" fill="#1e293b" />
      <rect x="108" y="445" width="460" height="22" rx="11" fill="#1e293b" />
      <rect x="108" y="486" width="400" height="22" rx="11" fill="#1e293b" />
      <rect x="108" y="548" width="180" height="58" rx="16" fill="url(#accent)" />
      <text x="135" y="586" fill="#ffffff" font-size="20" font-family="Inter, Arial, sans-serif" font-weight="700">Quiero consultar</text>
      <rect x="332" y="548" width="236" height="58" rx="16" fill="#0f172a" stroke="#ffffff" stroke-opacity="0.12" />
      <text x="365" y="586" fill="#e2e8f0" font-size="20" font-family="Inter, Arial, sans-serif" font-weight="700">Ver más información</text>
      <rect x="690" y="328" width="420" height="272" rx="32" fill="#0f172a" fill-opacity="0.82" stroke="#ffffff" stroke-opacity="0.08" />
      <rect x="726" y="368" width="348" height="18" rx="9" fill="#1e293b" />
      <rect x="726" y="414" width="280" height="18" rx="9" fill="#1e293b" />
      <rect x="726" y="460" width="310" height="18" rx="9" fill="#1e293b" />
      <circle cx="1022" cy="526" r="48" fill="url(#accent)" fill-opacity="0.9" />
      <path d="M1010 526h24m-12-12v24" stroke="#ffffff" stroke-width="8" stroke-linecap="round" />
      <text x="726" y="548" fill="#94a3b8" font-size="18" font-family="Inter, Arial, sans-serif">Consultas, reservas y ventas por WhatsApp</text>
    </svg>`;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export function profileSvg(name: string, role: string) {
  const safeName = xmlEscape(name);
  const safeRole = xmlEscape(role);

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1100" role="img" aria-label="${safeName}">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#08101d" />
          <stop offset="100%" stop-color="#12243b" />
        </linearGradient>
        <linearGradient id="accent" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#22d3ee" />
          <stop offset="100%" stop-color="#3b82f6" />
        </linearGradient>
      </defs>
      <rect width="900" height="1100" rx="54" fill="url(#bg)" />
      <circle cx="690" cy="180" r="180" fill="#22d3ee" fill-opacity="0.12" />
      <circle cx="190" cy="920" r="220" fill="#3b82f6" fill-opacity="0.12" />
      <circle cx="450" cy="390" r="170" fill="#f8fafc" fill-opacity="0.95" />
      <circle cx="450" cy="350" r="68" fill="#e2e8f0" />
      <path d="M325 540c40-92 210-92 250 0v110H325V540Z" fill="#e2e8f0" />
      <path d="M355 318c42-52 148-52 190 0v35c-18 36-52 62-95 62s-77-26-95-62v-35Z" fill="#0f172a" />
      <rect x="120" y="760" width="660" height="136" rx="34" fill="#0f172a" fill-opacity="0.8" stroke="#ffffff" stroke-opacity="0.1" />
      <text x="160" y="816" fill="#ffffff" font-size="34" font-family="Inter, Arial, sans-serif" font-weight="700">${safeName}</text>
      <text x="160" y="862" fill="#cbd5e1" font-size="22" font-family="Inter, Arial, sans-serif">${safeRole}</text>
      <rect x="160" y="902" width="210" height="18" rx="9" fill="url(#accent)" />
    </svg>`;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}
