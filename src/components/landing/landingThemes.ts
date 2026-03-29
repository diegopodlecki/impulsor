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
  gimnasios: {
    primary: "#08111A",
    accent: "#22C55E",
    surface: "#101827",
    border: "rgba(34,197,94,0.18)",
    glow: "rgba(34,197,94,0.2)",
    heroGlow: "rgba(34,197,94,0.14)",
    pageBackground: "#050A0D",
  },
  "personal-trainers": {
    primary: "#07131A",
    accent: "#38BDF8",
    surface: "#0F1720",
    border: "rgba(56,189,248,0.18)",
    glow: "rgba(56,189,248,0.2)",
    heroGlow: "rgba(56,189,248,0.15)",
    pageBackground: "#040A10",
  },
  nutricionistas: {
    primary: "#0E1810",
    accent: "#84CC16",
    surface: "#132312",
    border: "rgba(132,204,22,0.18)",
    glow: "rgba(132,204,22,0.2)",
    heroGlow: "rgba(132,204,22,0.14)",
    pageBackground: "#050A07",
  },
  psicologos: {
    primary: "#08131F",
    accent: "#38BDF8",
    surface: "#0F1E2E",
    border: "rgba(56,189,248,0.18)",
    glow: "rgba(56,189,248,0.2)",
    heroGlow: "rgba(56,189,248,0.14)",
    pageBackground: "#050A11",
  },
  "estetica-corporal": {
    primary: "#190E17",
    accent: "#F472B6",
    surface: "#21111E",
    border: "rgba(244,114,182,0.18)",
    glow: "rgba(244,114,182,0.2)",
    heroGlow: "rgba(244,114,182,0.14)",
    pageBackground: "#09060A",
  },
  emprendedores: {
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
