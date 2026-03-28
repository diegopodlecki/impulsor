import { previewSvg, profileSvg } from "@/components/landing/landingVisuals";

export type LandingConfig = {
  slug: string;
  title: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCta: string;
  heroSecondaryCta: string;
  heroBadge: string;
  heroPreviewTitle: string;
  heroPreviewSubtitle: string;
  heroImage: string;
  problemsTitle: string;
  problems: Array<{ title: string; text: string }>;
  solutionTitle: string;
  solutionText: string;
  solutionPoints: string[];
  benefitsTitle: string;
  benefits: Array<{ title: string; text: string }>;
  processTitle: string;
  process: Array<{ step: string; title: string; text: string }>;
  aboutTitle: string;
  aboutName: string;
  aboutRole: string;
  aboutText: string;
  aboutPoints: Array<{ title: string; text: string }>;
  formTitle: string;
  formSubtitle: string;
  finalCtaTitle: string;
  finalCtaText: string;
  whatsappMessage: string;
  preview: string;
  profile: string;
};

export const landingPages: Record<string, LandingConfig> = {
  gimnasios: {
    slug: "gimnasios",
    title: "Gimnasios",
    heroTitle: "Llená tu gimnasio con una web que atrae alumnos",
    heroSubtitle: "Mostrá tus instalaciones, tus clases y recibí consultas todos los días.",
    heroCta: "Quiero más alumnos",
    heroSecondaryCta: "Quiero ver ejemplos",
    heroBadge: "Pensada para gimnasios",
    heroPreviewTitle: "Tu gimnasio con más inscripciones",
    heroPreviewSubtitle: "Clases, horarios y reservas desde un mismo lugar.",
    heroImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
    problemsTitle: "¿Qué te está frenando?",
    problems: [
      { title: "Pocos alumnos nuevos", text: "La web debe llevar a consultas e inscripciones." },
      { title: "Dependencia de Instagram", text: "No todo debería depender de un post o una historia." },
      { title: "Falta de presencia clara", text: "Si tu presencia digital no acompaña, perdés oportunidades." },
    ],
    solutionTitle: "Tu web mostrando todo lo que vende",
    solutionText: "Ponemos en primer plano lo que más le importa a quien está por elegir tu gimnasio.",
    solutionPoints: ["Clases", "Horarios", "Instalaciones", "Planes"],
    benefitsTitle: "Lo que vas a lograr",
    benefits: [
      { title: "Más inscripciones", text: "Una página que invita a consultar y cerrar una clase." },
      { title: "Mejor imagen", text: "Tu gimnasio se ve serio, moderno y confiable." },
      { title: "Consultas automáticas", text: "Tu sitio trabaja incluso cuando vos estás ocupado." },
    ],
    processTitle: "Así trabajamos",
    process: [
      { step: "01", title: "Analizamos tu gimnasio", text: "Entendemos tu propuesta, tus clases y el perfil de tus alumnos." },
      { step: "02", title: "Diseñamos la landing", text: "Armamos una web clara, rápida y enfocada en consultas." },
      { step: "03", title: "La publicamos", text: "Dejamos todo listo para empezar a recibir contactos." },
      { step: "04", title: "Medís resultados", text: "La web queda lista para seguir vendiendo 24/7." },
    ],
    aboutTitle: "Quién está detrás",
    aboutName: "Diego Podlecki",
    aboutRole: "Diseño web enfocado en resultados",
    aboutText:
      "Diseño páginas para negocios que necesitan más alumnos, más consultas y una presencia digital que realmente venda.",
    aboutPoints: [
      { title: "Enfoque comercial", text: "Cada bloque está pensado para generar acción." },
      { title: "Diseño simple", text: "Menos ruido visual, más claridad para decidir." },
    ],
    formTitle: "Pedí tu web para tu gimnasio",
    formSubtitle: "Te respondo con una propuesta pensada para ayudarte a conseguir más alumnos.",
    finalCtaTitle: "Empezá a recibir nuevos alumnos hoy",
    finalCtaText: "Tu competencia ya está online. La diferencia es quién convierte mejor.",
    whatsappMessage: "Hola, quiero una web para mi gimnasio que me consiga más consultas e inscripciones.",
    preview: previewSvg("Gimnasio", "Clases, horarios y reservas", "#22c55e", "#06b6d4"),
    profile: profileSvg("Diego Podlecki", "Diseño web enfocado en resultados"),
  },
  "personal-trainers": {
    slug: "personal-trainers",
    title: "Personal Trainers",
    heroTitle: "Convertí tu experiencia en más clientes",
    heroSubtitle: "Mostrá tu método, tus planes y por qué sos la persona correcta para entrenar a tus alumnos.",
    heroCta: "Quiero más clientes",
    heroSecondaryCta: "Quiero ver ejemplos",
    heroBadge: "Pensada para entrenadores",
    heroPreviewTitle: "Tu marca personal vendiendo mejor",
    heroPreviewSubtitle: "Rutinas, testimonios y planes en una sola landing.",
    heroImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    problemsTitle: "¿Qué te está frenando?",
    problems: [
      { title: "No destacarte", text: "Si tu propuesta no se entiende rápido, te comparan solo por precio." },
      { title: "Depender solo de redes", text: "Tu contenido puede gustar, pero no siempre convierte en mensajes." },
      { title: "Falta de sistema de ventas", text: "Necesitás una web que ordene la decisión del cliente." },
    ],
    solutionTitle: "Una web que explica tu valor",
    solutionText: "Tu landing debe mostrar por qué entrenar con vos puede cambiar resultados.",
    solutionPoints: ["Rutinas", "Testimonios", "Planes", "Resultados"],
    benefitsTitle: "Lo que vas a lograr",
    benefits: [
      { title: "Más clientes", text: "Más personas te escriben para entrenar con vos." },
      { title: "Marca personal fuerte", text: "Tu perfil se percibe más profesional y más claro." },
      { title: "Ventas constantes", text: "No dependés solo de publicar todos los días." },
    ],
    processTitle: "Así trabajamos",
    process: [
      { step: "01", title: "Escuchamos tu propuesta", text: "Definimos a quién querés atraer y cómo querés posicionarte." },
      { step: "02", title: "Diseñamos la web", text: "Armamos una landing orientada a convertir consultas." },
      { step: "03", title: "La dejamos lista", text: "Todo queda preparado para empezar a recibir mensajes." },
      { step: "04", title: "Seguís creciendo", text: "Tu web acompaña tu marca personal y tus ventas." },
    ],
    aboutTitle: "Quién está detrás",
    aboutName: "Diego Podlecki",
    aboutRole: "Diseño web enfocado en resultados",
    aboutText:
      "Ayudo a profesionales que venden conocimiento y confianza a convertir mejor su presencia online en consultas reales.",
    aboutPoints: [
      { title: "Claridad", text: "El usuario entiende rápido qué ofrecés." },
      { title: "Conversión", text: "Cada bloque guía hacia el contacto." },
    ],
    formTitle: "Pedí tu web como personal trainer",
    formSubtitle: "Te respondo con una propuesta pensada para conseguir más clientes.",
    finalCtaTitle: "Empezá a vender tu experiencia online",
    finalCtaText: "Tu competencia ya está construyendo presencia. Vos también podés convertir mejor.",
    whatsappMessage: "Hola, quiero una web para mi trabajo de personal trainer que me ayude a vender más.",
    preview: previewSvg("Personal Trainer", "Resultados y disciplina", "#f97316", "#ef4444"),
    profile: profileSvg("Diego Podlecki", "Diseño web enfocado en resultados"),
  },
  nutricionistas: {
    slug: "nutricionistas",
    title: "Nutricionistas",
    heroTitle: "Generá más consultas con una web que vende confianza",
    heroSubtitle: "Explicá tu forma de trabajar, mostrás tus servicios y hacé que te contacten con más confianza.",
    heroCta: "Quiero más consultas",
    heroSecondaryCta: "Quiero ver ejemplos",
    heroBadge: "Pensada para nutrición",
    heroPreviewTitle: "Tu consultorio más claro y confiable",
    heroPreviewSubtitle: "Servicios, información y contacto directo.",
    heroImage: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80",
    problemsTitle: "¿Qué te está frenando?",
    problems: [
      { title: "Falta de confianza online", text: "Si tu web no transmite confianza, cuesta agendar." },
      { title: "Poca visibilidad", text: "Necesitás una presencia clara para no depender solo de referencias." },
      { title: "Difícil captar pacientes", text: "La información debe ser simple para convertir visitas en consultas." },
    ],
    solutionTitle: "Una web que ordena y simplifica",
    solutionText: "Mostrá tu enfoque, aclarás dudas y abrís una puerta directa al contacto.",
    solutionPoints: ["Servicios", "Información clara", "Contacto directo", "Seguimiento"],
    benefitsTitle: "Lo que vas a lograr",
    benefits: [
      { title: "Más pacientes", text: "Más personas entienden tu propuesta y se animan a escribirte." },
      { title: "Autoridad profesional", text: "Tu consultorio se ve más sólido y confiable." },
      { title: "Mejor conversión", text: "La persona sabe qué hacer apenas entra a tu web." },
    ],
    processTitle: "Así trabajamos",
    process: [
      { step: "01", title: "Entendemos tu servicio", text: "Aterrizamos tu propuesta para que la entienda cualquier persona." },
      { step: "02", title: "Diseñamos la landing", text: "Creamos una web limpia, clara y enfocada en consultas." },
      { step: "03", title: "La publicamos", text: "Dejamos la web lista para generar contactos." },
      { step: "04", title: "Empiezan los mensajes", text: "Tu presencia online empieza a trabajar por vos." },
    ],
    aboutTitle: "Quién está detrás",
    aboutName: "Diego Podlecki",
    aboutRole: "Diseño web enfocado en resultados",
    aboutText:
      "Trabajo con negocios y profesionales que necesitan una presencia online que genere consultas reales y no solo visitas.",
    aboutPoints: [
      { title: "Más claridad", text: "Explicar bien tu servicio ayuda a vender mejor." },
      { title: "Más confianza", text: "El diseño acompaña la decisión de contactar." },
    ],
    formTitle: "Pedí tu web para nutrición",
    formSubtitle: "Te respondo con una propuesta pensada para conseguir más consultas.",
    finalCtaTitle: "Empezá a generar más consultas hoy",
    finalCtaText: "Si querés una web que convierta, esta es una buena base para empezar.",
    whatsappMessage: "Hola, quiero una web para mi consultorio de nutrición y atraer más pacientes.",
    preview: previewSvg("Nutricionista", "Planes, hábitos y seguimiento", "#84cc16", "#22c55e"),
    profile: profileSvg("Diego Podlecki", "Diseño web enfocado en resultados"),
  },
  psicologos: {
    slug: "psicologos",
    title: "Psicólogos",
    heroTitle: "Transmití confianza desde el primer clic",
    heroSubtitle: "Una web clara, cálida y profesional ayuda a que la persona se anime a dar el siguiente paso.",
    heroCta: "Solicitar consulta",
    heroSecondaryCta: "Quiero ver ejemplos",
    heroBadge: "Pensada para psicología",
    heroPreviewTitle: "Tu consultorio generando confianza",
    heroPreviewSubtitle: "Calma, empatía y contacto directo.",
    heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    problemsTitle: "¿Qué te está frenando?",
    problems: [
      { title: "Dificultad para generar confianza online", text: "Si la web no transmite seguridad, cuesta dar el paso." },
      { title: "Poca presencia digital", text: "Sin una presencia clara, tu servicio pasa desapercibido." },
    ],
    solutionTitle: "Una web clara, cálida y profesional",
    solutionText: "La estructura está pensada para explicar tu forma de trabajar, mostrar tu valor y facilitar el contacto directo.",
    solutionPoints: ["Calma", "Claridad", "Contacto directo", "Confianza"],
    benefitsTitle: "Lo que vas a lograr",
    benefits: [
      { title: "Más consultas", text: "Más personas se animan a escribirte con confianza." },
      { title: "Imagen que transmite confianza", text: "Tu práctica se ve seria, clara y cercana." },
      { title: "Contacto simple", text: "La persona entiende cómo agendar sin vueltas." },
    ],
    processTitle: "Así trabajamos",
    process: [
      { step: "01", title: "Analizamos tu enfoque", text: "Entendemos qué necesitás comunicar para generar confianza." },
      { step: "02", title: "Diseñamos la landing", text: "Armamos una web sobria, cálida y orientada a consultas." },
      { step: "03", title: "La publicamos", text: "Dejamos todo listo para recibir contactos." },
      { step: "04", title: "Llega más gente", text: "Tu sitio empieza a trabajar como una puerta de entrada confiable." },
    ],
    aboutTitle: "Quién está detrás",
    aboutName: "Diego Podlecki",
    aboutRole: "Diseño web enfocado en resultados",
    aboutText:
      "Diseño páginas para profesionales que necesitan transmitir confianza, claridad y una propuesta que invite a escribir.",
    aboutPoints: [
      { title: "Enfoque humano", text: "La web acompaña la experiencia de quien está buscando ayuda." },
      { title: "Decisión fácil", text: "Menos fricción, más claridad y más consultas." },
    ],
    formTitle: "Pedí tu web para tu consultorio",
    formSubtitle: "Te respondo con una propuesta pensada para ayudar a convertir visitas en consultas.",
    finalCtaTitle: "Solicitá tu consulta hoy",
    finalCtaText: "Tu presencia online puede transmitir más confianza desde el primer momento.",
    whatsappMessage: "Hola, quiero una web para mi consultorio de psicología y agendar más turnos.",
    preview: previewSvg("Psicología", "Calma, empatía y turnos", "#3b82f6", "#0ea5e9"),
    profile: profileSvg("Diego Podlecki", "Diseño web enfocado en resultados"),
  },
  "estetica-corporal": {
    slug: "estetica-corporal",
    title: "Estética corporal",
    heroTitle: "Mostrá tu propuesta premium y generá más consultas",
    heroSubtitle: "Una web elegante puede ayudarte a comunicar valor, confianza y deseo de agendar.",
    heroCta: "Quiero más consultas",
    heroSecondaryCta: "Quiero ver ejemplos",
    heroBadge: "Pensada para estética",
    heroPreviewTitle: "Tu marca con una presencia más premium",
    heroPreviewSubtitle: "Visual, elegante y enfocada en ventas.",
    heroImage: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
    problemsTitle: "¿Qué te está frenando?",
    problems: [
      { title: "Falta de impacto visual", text: "Si la web no se ve premium, cuesta destacar el servicio." },
      { title: "Pocas consultas", text: "Necesitás una propuesta clara que lleve a la acción." },
      { title: "Competencia más visible", text: "Tu presencia online tiene que ayudar a convertir mejor." },
    ],
    solutionTitle: "Una web que vende tu propuesta",
    solutionText: "Presentamos tus tratamientos con una estructura que resalta valor, confianza y contacto.",
    solutionPoints: ["Tratamientos", "Antes y después", "Contacto directo", "Confianza"],
    benefitsTitle: "Lo que vas a lograr",
    benefits: [
      { title: "Más consultas", text: "Más personas te escriben interesadas en tus servicios." },
      { title: "Imagen premium", text: "Tu marca se percibe más cuidada y profesional." },
      { title: "Mejor conversión", text: "La web guía a la persona hacia el contacto sin distracciones." },
    ],
    processTitle: "Así trabajamos",
    process: [
      { step: "01", title: "Entendemos tu marca", text: "Definimos el estilo y la propuesta que querés comunicar." },
      { step: "02", title: "Diseñamos la landing", text: "Creamos una web visual, clara y enfocada en consultas." },
      { step: "03", title: "La dejamos lista", text: "Todo queda preparado para captar interesados." },
      { step: "04", title: "Empiezan las consultas", text: "Tu presencia online empieza a trabajar por vos." },
    ],
    aboutTitle: "Quién está detrás",
    aboutName: "Diego Podlecki",
    aboutRole: "Diseño web enfocado en resultados",
    aboutText:
      "Ayudo a servicios que dependen de la confianza y la percepción visual a mostrar mejor su valor y vender más.",
    aboutPoints: [
      { title: "Más claridad", text: "Mostrar bien el servicio vende más que solo describirlo." },
      { title: "Más deseo", text: "Una web premium ayuda a elevar el valor percibido." },
    ],
    formTitle: "Pedí tu web para estética corporal",
    formSubtitle: "Te respondo con una propuesta pensada para conseguir más consultas.",
    finalCtaTitle: "Empezá a convertir mejor tu presencia online",
    finalCtaText: "Si querés una web más premium y más comercial, esta base te ayuda a despegar.",
    whatsappMessage: "Hola, quiero una web para estética corporal que me ayude a vender más tratamientos.",
    preview: previewSvg("Estética corporal", "Premium, visual y elegante", "#ec4899", "#f97316"),
    profile: profileSvg("Diego Podlecki", "Diseño web enfocado en resultados"),
  },
};

export const landingPageList = Object.values(landingPages);
