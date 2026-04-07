export interface Rubro {
  slug: string;
  nombre: string;
  nombrePlural: string;
  descripcion: string;
  keywords: string[];
  localKeywords: string[];
  problemas: string[];
  beneficios: string[];
  demoUrl: string;
  color: string;
  emoji: string;
  precioSugerido: string;
  previewImage?: string;
  cardDescription?: string;
  badge?: "Más elegido" | "Nuevo" | "Ideal para empezar";
}

export const RUBROS: Rubro[] = [
  {
    slug: "personal-trainer",
    nombre: "Personal Trainer",
    nombrePlural: "Personal Trainers",
    descripcion:
      "Página web profesional para personal trainers en Argentina. Mostrá tus servicios, horarios y tarifas. Recibí consultas directas en tu WhatsApp.",
    keywords: [
      "página web personal trainer",
      "web para entrenador personal argentina",
      "sitio web personal trainer buenos aires",
    ],
    localKeywords: [
      "página web para personal trainer en Buenos Aires",
      "web para personal trainer en CABA",
      "sitio web para entrenador personal en Zona Norte",
    ],
    problemas: [
      "Mis potenciales clientes me buscan en Google pero no aparezco",
      "Solo consigo clientes por recomendación y es impredecible",
      "No tengo forma profesional de mostrar mis servicios y precios online",
      "Pierdo clientes porque no pueden encontrar mi información fácilmente",
    ],
    beneficios: [
      'Aparecés en Google cuando alguien busca "personal trainer en [tu zona]"',
      "Tus potenciales clientes ven tus servicios, precios y pueden reservar consulta",
      "Integramos tu Instagram para mostrar tus transformaciones",
      "Botón de WhatsApp para que te escriban directo sin fricción",
    ],
    demoUrl: "/entrenadores",
    color: "from-blue-600 to-blue-800",
    emoji: "💪",
    precioSugerido: "Profesional",
    previewImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80",
    cardDescription: "Atraé más clientes con una web profesional que muestra tus transformaciones y autoridad",
  },
  {
    slug: "psicologo",
    nombre: "Psicólogo",
    nombrePlural: "Psicólogos",
    descripcion:
      "Página web profesional para psicólogos y terapeutas en Argentina. Generá confianza y conseguí nuevos pacientes que te encuentren en Google.",
    keywords: ["página web psicólogo argentina", "web para psicólogo", "sitio web terapeuta buenos aires"],
    localKeywords: [
      "página web para psicólogos en Buenos Aires",
      "web para psicólogo en CABA",
      "sitio web para terapeuta en Zona Oeste",
    ],
    problemas: [
      "Los pacientes nuevos no me pueden encontrar online",
      "Mi presencia digital no transmite la confianza que necesito",
      "Pierdo tiempo respondiendo las mismas preguntas básicas por WhatsApp",
      "No tengo donde mostrar mi formación y especialidades de forma profesional",
    ],
    beneficios: [
      "Una web que transmite confianza y profesionalismo desde el primer segundo",
      "Mostrás tu formación, especialidades y modalidades de atención",
      "Sección de preguntas frecuentes para filtrar consultas antes de la primera sesión",
      "Google Maps integrado para que te encuentren por zona",
    ],
    demoUrl: "/psicologos",
    color: "from-purple-600 to-purple-800",
    emoji: "🧠",
    precioSugerido: "Profesional",
    previewImage: "https://images.unsplash.com/photo-1527137342181-df9ad2f54c70?w=800&h=600&fit=crop&q=80",
    cardDescription: "Atraé más pacientes con una web profesional que transmite confianza desde el primer vistazo",
    badge: "Nuevo",
  },
  {
    slug: "nutricionista",
    nombre: "Nutricionista",
    nombrePlural: "Nutricionistas",
    descripcion:
      "Página web para nutricionistas en Argentina. Conseguí nuevos pacientes que te busquen en Google y que puedan consultar tus servicios online.",
    keywords: ["página web nutricionista argentina", "web para nutricionista", "sitio web nutricionista buenos aires"],
    localKeywords: [
      "página web para nutricionistas en Buenos Aires",
      "web para nutricionista en CABA",
      "sitio web para nutricionista en Rosario",
    ],
    problemas: [
      "No aparezco cuando alguien busca nutricionista en mi zona",
      "No tengo donde explicar mis planes y metodología de trabajo",
      "Mis potenciales pacientes no saben cuánto cobro ni cómo funciona",
      "Dependo de redes sociales que cambian el algoritmo constantemente",
    ],
    beneficios: [
      "Posicionamiento local para búsquedas de nutricionista en tu zona",
      "Explicás tus planes de alimentación, metodología y resultados",
      "Sección de antes/después (con permiso de pacientes) para generar confianza",
      "Sistema de consulta online para captar pacientes fuera de tu zona",
    ],
    demoUrl: "/nutricionistas",
    color: "from-green-600 to-green-800",
    emoji: "🥗",
    precioSugerido: "Profesional",
    previewImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop&q=80",
    cardDescription: "Atraé más pacientes con una web profesional diseñada para consultas calificadas",
  },
  {
    slug: "gimnasio",
    nombre: "Gimnasio",
    nombrePlural: "Gimnasios",
    descripcion:
      "Página web para gimnasios en Argentina. Mostrá tus clases, precios y profesores. Conseguí nuevos socios y fidelizá a los actuales.",
    keywords: ["página web gimnasio argentina", "web para gimnasio", "sitio web gym"],
    localKeywords: [
      "página web para gimnasio en Buenos Aires",
      "web para gimnasio en Córdoba",
      "sitio web gym en Rosario",
    ],
    problemas: [
      "Potenciales socios no pueden ver mis clases y horarios fácilmente",
      "No tengo forma de mostrar mis instalaciones y diferenciarme",
      "Pierdo socios porque no tengo presencia digital profesional",
      "La gente no sabe sus precios y no consulta por eso",
    ],
    beneficios: [
      "Mostrás horarios, clases, profesores e instalaciones en un lugar",
      "Galería de fotos para mostrar tu espacio y equipamiento",
      'Aparecés en "gimnasios cerca de mí" en Google Maps',
      "Los interesados pueden consultar precios y anotarse directo",
    ],
    demoUrl: "/gimnasios",
    color: "from-orange-600 to-orange-800",
    emoji: "🏋️",
    precioSugerido: "Todo Incluido",
    previewImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&q=80",
    cardDescription: "Atraé más alumnos con una web profesional que muestra tus servicios y planes",
    badge: "Más elegido",
  },
  {
    slug: "casa-de-comidas",
    nombre: "Casa de Comidas",
    nombrePlural: "Casas de Comidas",
    descripcion:
      "Página web para casas de comida y viandas en Argentina. Mostrá tu menú, precios y zona de entrega. Recibí pedidos por WhatsApp.",
    keywords: ["página web viandas argentina", "web para casa de comidas", "sitio web catering"],
    localKeywords: [
      "página web para casa de comidas en Buenos Aires",
      "web para viandas en Zona Sur",
      "sitio web para catering en La Plata",
    ],
    problemas: [
      "Solo me encuentran si alguien me conoce o me recomienda",
      "No tengo forma de mostrar mi menú actualizado online",
      "Pierdo pedidos porque la gente no sabe mi zona de entrega",
      "Las apps de delivery se quedan con mucho porcentaje de mis ventas",
    ],
    beneficios: [
      "Menú digital actualizable por vos mismo, con fotos y precios",
      "Mapa de zona de entrega para evitar consultas fuera de rango",
      "Pedidos directos por WhatsApp sin pagar comisión a nadie",
      "Aparecer en Google cuando buscan viandas o comida en tu zona",
    ],
    demoUrl: "/emprendedores",
    color: "from-red-600 to-red-800",
    emoji: "🍱",
    precioSugerido: "Presencia Básica",
    previewImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop&q=80",
    cardDescription: "Atraé más pedidos con una web profesional que reemplaza apps de delivery caras",
    badge: "Ideal para empezar",
  },
  {
    slug: "estetica-corporal",
    nombre: "Estética Corporal",
    nombrePlural: "Centros de Estética",
    descripcion:
      "Página web para centros de estética en Argentina. Mostrá tus tratamientos, antes y después, y conseguí nuevas clientas.",
    keywords: ["página web estética argentina", "web para centro de estética", "sitio web spa belleza"],
    localKeywords: [
      "página web para estética corporal en Buenos Aires",
      "web para centro de estética en CABA",
      "sitio web para spa y belleza en Córdoba",
    ],
    problemas: [
      "Mis tratamientos no se ven bien explicados en Instagram",
      "Las clientas potenciales no confían sin ver resultados reales",
      "No tengo sistema para mostrar precios sin que me pregunten uno a uno",
      "Necesito diferenciarme de la competencia con presencia profesional",
    ],
    beneficios: [
      "Galería de antes/después que genera confianza y deseo",
      "Descripción detallada de cada tratamiento con beneficios y duración",
      "Sistema de turnos online para que reserven sin llamarte",
      "Aparecer en Google Maps cuando buscan estética en tu zona",
    ],
    demoUrl: "/estetica-corporal",
    color: "from-pink-600 to-pink-800",
    emoji: "✨",
    precioSugerido: "Profesional",
    previewImage: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop&q=80",
    cardDescription: "Atraé más clientas con una web profesional que muestra antes y después",
  },
];

export function findRubroBySlug(slug: string) {
  return RUBROS.find((rubro) => rubro.slug === slug);
}