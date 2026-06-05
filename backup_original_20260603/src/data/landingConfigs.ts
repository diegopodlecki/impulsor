/**
 * Landing Page Configurations - V2 Sistema Premium Reutilizable
 * 
 * Un único sistema escalable donde:
 * - Todos los landings usan la MISMA estructura
 * - Solo cambian: imágenes, textos, rubro
 * - Tipografía, spacing, estructura IDÉNTICOS
 */

import { LandingPageConfig } from "@/components/landing/LandingPageRenderer";
import { landingConfigsV2 } from "./landingsTemplateV2";

/**
 * Mapeo de rubros a configuraciones de landing
 * Estructura: slug → LandingPageConfig completo
 * Fuente: landingsTemplateV2.ts (sistema premium reutilizable)
 */
export const landingConfigs: Record<string, LandingPageConfig> = {
  "personal-trainer": landingConfigsV2["personal-trainer"],
  psicologo: landingConfigsV2.psicologo,
  nutricionista: landingConfigsV2.nutricionista,
  gimnasio: landingConfigsV2.gimnasio,
  "casa-de-comidas": landingConfigsV2["casa-de-comidas"],
  "estetica-corporal": landingConfigsV2["estetica-corporal"],
};

/**
 * Obtener configuración de landing por slug
 * Uso: getLandingConfig('gimnasio') → LandingPageConfig completo
 */
export function getLandingConfig(slug: string): LandingPageConfig | null {
  return landingConfigs[slug] ?? null;
}

/**
 * Obtener todos los slugs disponibles
 * Uso para rutas, validaciones, mapeos
 */
export function getAllLandingSlugs(): string[] {
  return Object.keys(landingConfigs);
}

/**
 * Validar si un slug tiene configuración válida
 */
export function isValidLandingSlug(slug: string): boolean {
  return slug in landingConfigs;
}

/**
 * Información sobre el sistema de plantillas
 */
export const landingSystemInfo = {
  version: "2.0",
  rubrosCount: Object.keys(landingConfigs).length,
  lastUpdated: "2026-04-06",
  description: "Sistema premium reutilizable de landing pages con estructura uniforme",
  features: [
    "Layout base idéntico en todos",
    "Solo cambian: imágenes, textos, rubro",
    "Tipografía y spacing consistentes",
    "Escalable a nuevos rubros sin código custom",
    "Datos centralizados en landingsTemplateV2.ts",
  ],
};
