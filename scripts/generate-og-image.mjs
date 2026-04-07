import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { Resvg } from "@resvg/resvg-js";
import satori from "satori";
import { createElement } from "react";

const WIDTH = 1200;
const HEIGHT = 630;
const ROOT_DIR = process.cwd();
const PUBLIC_DIR = path.join(ROOT_DIR, "public");

const BRAND_COLOR = "#0ea5e9";
const BACKGROUND = "#0a0a0a";
const TEXT = "#ffffff";
const MUTED = "#cbd5e1";
const SOFT = "#94a3b8";

const RUBRO_OGS = [
  {
    slug: "personal-trainer",
    title: "Personal Trainer",
    subtitle: "Web para entrenadores personales en Argentina",
    microcopy: "SEO local · WhatsApp directo · Más consultas",
    accent: "#0ea5e9",
  },
  {
    slug: "psicologo",
    title: "Psicólogo",
    subtitle: "Web para psicólogos y terapeutas en Buenos Aires",
    microcopy: "Confianza · Turnos claros · Presencia profesional",
    accent: "#8b5cf6",
  },
  {
    slug: "nutricionista",
    title: "Nutricionista",
    subtitle: "Web para nutricionistas que quieren más pacientes",
    microcopy: "Autoridad · Claridad · Consultas online",
    accent: "#84cc16",
  },
  {
    slug: "gimnasio",
    title: "Gimnasio",
    subtitle: "Web para gimnasios con foco en nuevos socios",
    microcopy: "Clases · Horarios · Inscripciones",
    accent: "#f97316",
  },
  {
    slug: "casa-de-comidas",
    title: "Casa de Comidas",
    subtitle: "Web para viandas y delivery con pedidos por WhatsApp",
    microcopy: "Menú digital · Zona de entrega · Más pedidos",
    accent: "#ef4444",
  },
  {
    slug: "estetica-corporal",
    title: "Estética Corporal",
    subtitle: "Web premium para centros de estética",
    microcopy: "Antes y después · Deseo visual · Turnos",
    accent: "#ec4899",
  },
  {
    slug: "emprendedores",
    title: "Emprendedores",
    subtitle: "Web para servicios que necesitan convertir mejor",
    microcopy: "Oferta clara · Autoridad · Más ventas",
    accent: "#f59e0b",
  },
];

const FONT_CANDIDATES = [
  {
    name: "Inter",
    weight: 400,
    candidates: [
      "C:/Windows/Fonts/arial.ttf",
      "C:/Windows/Fonts/segoeui.ttf",
      "/System/Library/Fonts/Supplemental/Arial.ttf",
      "/System/Library/Fonts/Supplemental/Arial Unicode.ttf",
      "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
      "/usr/share/fonts/truetype/liberation2/LiberationSans-Regular.ttf",
    ],
  },
  {
    name: "Inter",
    weight: 700,
    candidates: [
      "C:/Windows/Fonts/arialbd.ttf",
      "C:/Windows/Fonts/segoeuib.ttf",
      "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
      "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
      "/usr/share/fonts/truetype/liberation2/LiberationSans-Bold.ttf",
    ],
  },
];

const BOLT_SVG = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
    <path d="M37 3 10 36h15L23 61l31-35H39L37 3Z" fill="${BRAND_COLOR}"/>
  </svg>`,
)}`;

function findFontPath(candidates) {
  for (const candidate of candidates) {
    if (existsSync(candidate)) return candidate;
  }

  throw new Error(
    `No se encontró ninguna fuente compatible. Probé: ${candidates.join(", ")}`,
  );
}

async function loadFonts() {
  const fonts = [];

  for (const spec of FONT_CANDIDATES) {
    const fontPath = findFontPath(spec.candidates);
    fonts.push({
      name: spec.name,
      weight: spec.weight,
      style: "normal",
      data: await readFile(fontPath),
    });
  }

  return fonts;
}

function ogTree({ title, subtitle, microcopy, accent }) {
  return createElement(
    "div",
    {
      style: {
        width: `${WIDTH}px`,
        height: `${HEIGHT}px`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        backgroundColor: BACKGROUND,
        color: TEXT,
        fontFamily: "Inter",
      },
    },
    createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        background:
          "radial-gradient(circle at 18% 18%, rgba(14,165,233,0.18), transparent 26%), radial-gradient(circle at 82% 22%, rgba(14,165,233,0.12), transparent 28%), radial-gradient(circle at 78% 86%, rgba(16,185,129,0.08), transparent 24%)",
      },
    }),
    createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.02), transparent 18%, transparent 82%, rgba(255,255,255,0.02))",
      },
    }),
    createElement(
      "div",
      {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "56px 72px",
          textAlign: "center",
          position: "relative",
        },
      },
      createElement(
        "div",
        {
          style: {
            width: "108px",
            height: "108px",
            borderRadius: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: `0 0 0 1px rgba(255,255,255,0.02), 0 18px 60px -20px ${accent}55`,
            marginBottom: "28px",
          },
        },
        createElement("img", {
          src: BOLT_SVG,
          width: 56,
          height: 56,
          alt: "",
        }),
      ),
      createElement(
        "div",
        {
          style: {
            fontSize: "74px",
            fontWeight: 700,
            lineHeight: 1.02,
            letterSpacing: "-0.05em",
            marginBottom: "18px",
          },
        },
        title,
      ),
      createElement(
        "div",
        {
          style: {
            fontSize: "30px",
            lineHeight: 1.25,
            color: MUTED,
            maxWidth: "930px",
          },
        },
        subtitle,
      ),
      createElement(
        "div",
        {
          style: {
            marginTop: "18px",
            fontSize: "22px",
            lineHeight: 1.35,
            color: SOFT,
            maxWidth: "900px",
          },
        },
        microcopy,
      ),
      createElement("div", {
        style: {
          marginTop: "30px",
          width: "700px",
          height: "1px",
          backgroundColor: "rgba(255,255,255,0.12)",
        },
      }),
      createElement(
        "div",
        {
          style: {
            marginTop: "20px",
            fontSize: "24px",
            fontWeight: 700,
            color: accent,
            letterSpacing: "0.01em",
          },
        },
        "webappimpulsor.com",
      ),
    ),
  );
}

async function renderPng({ title, subtitle, microcopy, accent }) {
  const fonts = await loadFonts();
  const svg = await satori(ogTree({ title, subtitle, microcopy, accent }), {
    width: WIDTH,
    height: HEIGHT,
    fonts,
  });

  const image = new Resvg(svg, {
    fitTo: {
      mode: "width",
      value: WIDTH,
    },
  });

  return image.render().asPng();
}

async function main() {
  await mkdir(PUBLIC_DIR, { recursive: true });

  const mainImage = await renderPng({
    title: "WebAppImpulsor",
    subtitle: "Tu web profesional en 72 horas",
    microcopy: "Para entrenadores · Psicólogos · Nutricionistas · y más",
    accent: BRAND_COLOR,
  });

  await writeFile(path.join(PUBLIC_DIR, "og-image.png"), mainImage);

  for (const item of RUBRO_OGS) {
    const png = await renderPng({
      title: item.title,
      subtitle: item.subtitle,
      microcopy: item.microcopy,
      accent: item.accent,
    });

    await writeFile(path.join(PUBLIC_DIR, `og-${item.slug}.png`), png);
  }

  console.log(`OG images generated in ${PUBLIC_DIR}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
