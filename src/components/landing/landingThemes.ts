export type LandingTheme = {
  primary: string;
  accent: string;
  surface: string;
  border: string;
  glow: string;
  heroGlow: string;
  pageBackground: string;
};

export const landingThemes: Record<string, LandingTheme> = {
  default: {
    primary: "#07111F",
    accent: "#0EA5E9",
    surface: "#111827",
    border: "rgba(255,255,255,0.08)",
    glow: "rgba(14,165,233,0.2)",
    heroGlow: "rgba(14,165,233,0.14)",
    pageBackground: "#050B14",
  },
  gimnasio: {
    primary: "#08111A",
    accent: "#22C55E",
    surface: "#101827",
    border: "rgba(34,197,94,0.18)",
    glow: "rgba(34,197,94,0.2)",
    heroGlow: "rgba(34,197,94,0.14)",
    pageBackground: "#050A0D",
  },
  "personal-trainer": {
    primary: "#0A1118",
    accent: "#14B8A6",
    surface: "#111A22",
    border: "rgba(20,184,166,0.18)",
    glow: "rgba(20,184,166,0.2)",
    heroGlow: "rgba(20,184,166,0.15)",
    pageBackground: "#04070C",
  },
  nutritionist: {
    primary: "#081417",
    accent: "#A3E635",
    surface: "#112024",
    border: "rgba(163,230,53,0.18)",
    glow: "rgba(163,230,53,0.2)",
    heroGlow: "rgba(163,230,53,0.14)",
    pageBackground: "#04090B",
  },
  psicologo: {
    primary: "#0A101A",
    accent: "#8B5CF6",
    surface: "#111A28",
    border: "rgba(139,92,246,0.18)",
    glow: "rgba(139,92,246,0.2)",
    heroGlow: "rgba(139,92,246,0.14)",
    pageBackground: "#04070D",
  },
  "estetica-corporal": {
    primary: "#180B13",
    accent: "#EC4899",
    surface: "#21101B",
    border: "rgba(236,72,153,0.18)",
    glow: "rgba(236,72,153,0.2)",
    heroGlow: "rgba(236,72,153,0.14)",
    pageBackground: "#080408",
  },
  empreendedor: {
    primary: "#161105",
    accent: "#F59E0B",
    surface: "#20180A",
    border: "rgba(245,158,11,0.18)",
    glow: "rgba(245,158,11,0.2)",
    heroGlow: "rgba(245,158,11,0.14)",
    pageBackground: "#090703",
  },
  "iron-fitness": {
    primary: "#0A0A0A",
    accent: "#F97316",
    surface: "#141414",
    border: "rgba(249,115,22,0.2)",
    glow: "rgba(249,115,22,0.24)",
    heroGlow: "rgba(249,115,22,0.18)",
    pageBackground: "#040404",
  },
};

export function getLandingTheme(slug: string) {
  return landingThemes[slug] ?? landingThemes.default;
}
