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
  heroMockupImage: string;
  problemsTitle: string;
  problems: Array<{ title: string; text: string }>;
  solutionTitle: string;
  solutionText: string;
  solutionPoints: string[];
  benefitsTitle: string;
  benefits: Array<{ title: string; text: string }>;
  servicesTitle: string;
  servicesSubtitle: string;
  services: Array<{ title: string; description: string; icon: string }>;
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
    heroTitle: "Más alumnos para tu gimnasio",
    heroSubtitle: "Una web que muestra tus clases, horarios e instalaciones y convierte visitas en inscripciones reales.",
    heroCta: "Quiero más alumnos",
    heroSecondaryCta: "Ver ejemplos reales",
    heroBadge: "Especialistas en gimnasios",
    heroPreviewTitle: "Tu gimnasio con más inscripciones",
    heroPreviewSubtitle: "Clases, horarios y reservas desde un mismo lugar.",
    heroImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop",
    heroMockupImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    problemsTitle: "¿Tu gimnasio tiene estos problemas?",
    problems: [
      { title: "Pocos alumnos nuevos", text: "Tu web no convierte visitas en inscripciones." },
      { title: "Dependés de Instagram", text: "Las redes no siempre se traducen en consultas reales." },
      { title: "Competencia con mejor imagen", text: "Otros gimnasios se ven más profesionales online." },
    ],
    solutionTitle: "Una web que llena tu gimnasio",
    solutionText: "Mostramos tus clases, horarios e instalaciones de forma clara para que las personas se animen a consultar.",
    solutionPoints: ["Clases destacadas", "Horarios claros", "Instalaciones reales", "Inscripción directa"],
    benefitsTitle: "Lo que vas a lograr",
    benefits: [
      { title: "Más inscripciones", text: "Recibí consultas todos los días sin depender de redes." },
      { title: "Imagen profesional", text: "Tu gimnasio se ve serio, moderno y confiable." },
      { title: "Automatización", text: "Tu web trabaja 24/7 incluso cuando estás entrenando alumnos." },
    ],
    servicesTitle: "Secciones que incluimos",
    servicesSubtitle: "Todo lo que tu gimnasio necesita para convertir visitas en alumnos.",
    services: [
      { title: "Hero impactante", description: "Foto de tu gimnasio con mensaje claro y botón de contacto.", icon: "image" },
      { title: "Clases y horarios", description: "Grilla visual con todas tus clases y turnos disponibles.", icon: "calendar" },
      { title: "Galería de instalaciones", description: "Fotos reales de tu espacio para generar confianza.", icon: "camera" },
      { title: "Formulario de inscripción", description: "Formulario simple para que dejen sus datos.", icon: "form" },
    ],
    processTitle: "Cómo trabajamos",
    process: [
      { step: "01", title: "Analizamos tu gimnasio", text: "Entendemos tus clases, horarios y propuesta." },
      { step: "02", title: "Diseñamos tu web", text: "Creamos una landing enfocada en inscripciones." },
      { step: "03", title: "Publicamos todo", text: "Tu web queda lista para recibir consultas." },
      { step: "04", title: "Recibís alumnos", text: "Empezás a recibir consultas por WhatsApp y formulario." },
    ],
    aboutTitle: "Quién está detrás",
    aboutName: "Diego Podlecki",
    aboutRole: "Diseño web enfocado en resultados",
    aboutText: "Diseño páginas para gimnasios que necesitan más alumnos y una presencia digital que realmente venda.",
    aboutPoints: [
      { title: "Enfoque comercial", text: "Cada sección está pensada para generar inscripciones." },
      { title: "Diseño profesional", text: "Tu gimnasio se ve moderno y confiable." },
    ],
    formTitle: "Pedí tu web para tu gimnasio",
    formSubtitle: "Te respondo con una propuesta pensada para conseguir más alumnos.",
    finalCtaTitle: "Empezá a recibir nuevos alumnos hoy",
    finalCtaText: "Tu competencia ya está online. La diferencia es quién convierte mejor.",
    whatsappMessage: "Hola, quiero una web para mi gimnasio que me consiga más consultas e inscripciones.",
    preview: previewSvg("Gimnasio", "Clases, horarios y reservas", "#22c55e", "#06b6d4"),
    profile: profileSvg("Diego Podlecki", "Diseño web enfocado en resultados"),
  },
  "personal-trainers": {
    slug: "personal-trainers",
    title: "Personal Trainers",
    heroTitle: "Más clientes para tu entrenamiento",
    heroSubtitle: "Una web que muestra tu método, tus resultados y por qué sos la persona correcta para entrenar.",
    heroCta: "Quiero más clientes",
    heroSecondaryCta: "Ver ejemplos reales",
    heroBadge: "Especialistas en entrenadores",
    heroPreviewTitle: "Tu marca personal vendiendo mejor",
    heroPreviewSubtitle: "Rutinas, testimonios y planes en una sola landing.",
    heroImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    heroMockupImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    problemsTitle: "¿Te pasa esto como entrenador?",
    problems: [
      { title: "No destacás entre la competencia", text: "Tu propuesta se ve igual a la de otros trainers." },
      { title: "Dependés del boca a boca", text: "Sin una web, cada cliente depende de una recomendación." },
      { title: "Falta de sistema de ventas", text: "No tenés un proceso claro para convertir interesados." },
    ],
    solutionTitle: "Una web que vende tu expertise",
    solutionText: "Mostramos tu método, tus resultados y por qué entrenar con vos es la mejor decisión.",
    solutionPoints: ["Tu método único", "Resultados reales", "Testimonios", "Planes claros"],
    benefitsTitle: "Lo que vas a lograr",
    benefits: [
      { title: "Más clientes", text: "Recibí consultas de personas que quieren entrenar con vos." },
      { title: "Marca personal fuerte", text: "Tu perfil se percibe más profesional y confiable." },
      { title: "Ventas constantes", text: "Tu web convierte interesados en clientes 24/7." },
    ],
    servicesTitle: "Secciones que incluimos",
    servicesSubtitle: "Todo lo que necesitás para vender tu entrenamiento online.",
    services: [
      { title: "Hero con tu propuesta", description: "Mensaje claro sobre por qué entrenar con vos.", icon: "target" },
      { title: "Tu método", description: "Explicación de tu sistema de entrenamiento.", icon: "dumbbell" },
      { title: "Resultados y testimonios", description: "Fotos de antes/después y opiniones de clientes.", icon: "star" },
      { title: "Planes y precios", description: "Opciones claras para que elijan cómo entrenar.", icon: "credit-card" },
    ],
    processTitle: "Cómo trabajamos",
    process: [
      { step: "01", title: "Conocemos tu propuesta", text: "Entendemos tu método y a quién querés atraer." },
      { step: "02", title: "Diseñamos tu web", text: "Creamos una landing que vende tu entrenamiento." },
      { step: "03", title: "Publicamos todo", text: "Tu web queda lista para recibir consultas." },
      { step: "04", title: "Recibís clientes", text: "Empezás a recibir mensajes de personas interesadas." },
    ],
    aboutTitle: "Quién está detrás",
    aboutName: "Diego Podlecki",
    aboutRole: "Diseño web enfocado en resultados",
    aboutText: "Ayudo a entrenadores personales a convertir su expertise en una presencia online que genere clientes reales.",
    aboutPoints: [
      { title: "Claridad", text: "Tu propuesta se entiende en segundos." },
      { title: "Conversión", text: "Cada sección guía hacia el contacto." },
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
    heroTitle: "Más pacientes para tu consultorio",
    heroSubtitle: "Una web que transmite confianza, muestra tu enfoque y facilita que las personas agenden consulta.",
    heroCta: "Quiero más pacientes",
    heroSecondaryCta: "Ver ejemplos reales",
    heroBadge: "Especialistas en nutrición",
    heroPreviewTitle: "Tu consultorio más claro y confiable",
    heroPreviewSubtitle: "Servicios, información y contacto directo.",
    heroImage: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=600&fit=crop",
    heroMockupImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    problemsTitle: "¿Tu consultorio tiene estos problemas?",
    problems: [
      { title: "Falta de confianza online", text: "Si tu web no transmite confianza, cuesta agendar." },
      { title: "Poca visibilidad", text: "Dependés solo de referencias para conseguir pacientes." },
      { title: "Difícil captar pacientes", text: "La información no es clara para convertir visitas." },
    ],
    solutionTitle: "Una web que genera confianza",
    solutionText: "Mostramos tu enfoque, aclarás dudas y abrís una puerta directa al contacto.",
    solutionPoints: ["Tu enfoque", "Servicios claros", "Contacto directo", "Seguimiento"],
    benefitsTitle: "Lo que vas a lograr",
    benefits: [
      { title: "Más pacientes", text: "Recibí consultas de personas que buscan tu ayuda." },
      { title: "Autoridad profesional", text: "Tu consultorio se ve sólido y confiable." },
      { title: "Agenda llena", text: "Tu web convierte visitas en turnos confirmados." },
    ],
    servicesTitle: "Secciones que incluimos",
    servicesSubtitle: "Todo lo que tu consultorio necesita para captar pacientes.",
    services: [
      { title: "Hero profesional", description: "Mensaje claro sobre tu enfoque nutricional.", icon: "heart" },
      { title: "Servicios detallados", description: "Lista de consultas y tratamientos que ofrecés.", icon: "list" },
      { title: "Sobre vos", description: "Tu historia, formación y por qué sos la persona indicada.", icon: "user" },
      { title: "Formulario de consulta", description: "Formulario simple para agendar turnos.", icon: "form" },
    ],
    processTitle: "Cómo trabajamos",
    process: [
      { step: "01", title: "Entendemos tu servicio", text: "Conocemos tu enfoque y a quién ayudás." },
      { step: "02", title: "Diseñamos tu web", text: "Creamos una landing que transmite confianza." },
      { step: "03", title: "Publicamos todo", text: "Tu web queda lista para recibir consultas." },
      { step: "04", title: "Recibís pacientes", text: "Empezás a recibir mensajes de personas interesadas." },
    ],
    aboutTitle: "Quién está detrás",
    aboutName: "Diego Podlecki",
    aboutRole: "Diseño web enfocado en resultados",
    aboutText: "Trabajo con nutricionistas que necesitan una presencia online que genere consultas reales y no solo visitas.",
    aboutPoints: [
      { title: "Más claridad", text: "Explicar bien tu servicio ayuda a vender mejor." },
      { title: "Más confianza", text: "El diseño acompaña la decisión de contactar." },
    ],
    formTitle: "Pedí tu web para nutrición",
    formSubtitle: "Te respondo con una propuesta pensada para conseguir más pacientes.",
    finalCtaTitle: "Empezá a generar más consultas hoy",
    finalCtaText: "Si querés una web que convierta, esta es una buena base para empezar.",
    whatsappMessage: "Hola, quiero una web para mi consultorio de nutrición y atraer más pacientes.",
    preview: previewSvg("Nutricionista", "Planes, hábitos y seguimiento", "#84cc16", "#22c55e"),
    profile: profileSvg("Diego Podlecki", "Diseño web enfocado en resultados"),
  },
  psicologos: {
    slug: "psicologos",
    title: "Psicólogos",
    heroTitle: "Más consultas para tu consultorio",
    heroSubtitle: "Una web que transmite calma, confianza y facilita que las personas den el primer paso.",
    heroCta: "Quiero más consultas",
    heroSecondaryCta: "Ver ejemplos reales",
    heroBadge: "Especialistas en psicología",
    heroPreviewTitle: "Tu consultorio generando confianza",
    heroPreviewSubtitle: "Calma, empatía y contacto directo.",
    heroImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop",
    heroMockupImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    problemsTitle: "¿Tu consultorio tiene estos problemas?",
    problems: [
      { title: "Dificultad para generar confianza", text: "Si la web no transmite seguridad, cuesta dar el paso." },
      { title: "Poca presencia digital", text: "Sin una web clara, tu servicio pasa desapercibido." },
      { title: "Pacientes no agendan", text: "La información no es clara para convertir interesados." },
    ],
    solutionTitle: "Una web que transmite confianza",
    solutionText: "Creamos una presencia online que acompaña a la persona desde la duda hasta el primer turno.",
    solutionPoints: ["Calma visual", "Información clara", "Contacto simple", "Profesionalismo"],
    benefitsTitle: "Lo que vas a lograr",
    benefits: [
      { title: "Más consultas", text: "Recibí mensajes de personas que buscan ayuda profesional." },
      { title: "Imagen que transmite confianza", text: "Tu práctica se ve seria, clara y cercana." },
      { title: "Agenda organizada", text: "Tu web filtra y organiza las consultas entrantes." },
    ],
    servicesTitle: "Secciones que incluimos",
    servicesSubtitle: "Todo lo que tu consultorio necesita para captar pacientes.",
    services: [
      { title: "Hero empático", description: "Mensaje que transmite calma y profesionalismo.", icon: "heart" },
      { title: "Tu enfoque", description: "Explicación de tu método terapéutico.", icon: "brain" },
      { title: "Información útil", description: "Respuestas a preguntas frecuentes de pacientes.", icon: "info" },
      { title: "Formulario de consulta", description: "Formulario simple y confidencial para agendar.", icon: "form" },
    ],
    processTitle: "Cómo trabajamos",
    process: [
      { step: "01", title: "Conocemos tu enfoque", text: "Entendemos cómo trabajás y a quién ayudás." },
      { step: "02", title: "Diseñamos tu web", text: "Creamos una landing que transmite confianza." },
      { step: "03", title: "Publicamos todo", text: "Tu web queda lista para recibir consultas." },
      { step: "04", title: "Recibís pacientes", text: "Empezás a recibir mensajes de personas interesadas." },
    ],
    aboutTitle: "Quién está detrás",
    aboutName: "Diego Podlecki",
    aboutRole: "Diseño web enfocado en resultados",
    aboutText: "Diseño páginas para psicólogos que necesitan transmitir confianza y captar consultas de forma profesional.",
    aboutPoints: [
      { title: "Enfoque humano", text: "La web acompaña la experiencia de quien busca ayuda." },
      { title: "Decisión fácil", text: "Menos fricción, más claridad y más consultas." },
    ],
    formTitle: "Pedí tu web para tu consultorio",
    formSubtitle: "Te respondo con una propuesta pensada para captar más pacientes.",
    finalCtaTitle: "Solicitá tu consulta hoy",
    finalCtaText: "Tu presencia online puede transmitir más confianza desde el primer momento.",
    whatsappMessage: "Hola, quiero una web para mi consultorio de psicología y agendar más turnos.",
    preview: previewSvg("Psicología", "Calma, empatía y turnos", "#3b82f6", "#0ea5e9"),
    profile: profileSvg("Diego Podlecki", "Diseño web enfocado en resultados"),
  },
  "estetica-corporal": {
    slug: "estetica-corporal",
    title: "Estética corporal",
    heroTitle: "Más consultas para tu centro de estética",
    heroSubtitle: "Una web premium que muestra tus tratamientos, genera deseo y convierte visitas en turnos.",
    heroCta: "Quiero más consultas",
    heroSecondaryCta: "Ver ejemplos reales",
    heroBadge: "Especialistas en estética",
    heroPreviewTitle: "Tu marca con presencia premium",
    heroPreviewSubtitle: "Visual, elegante y enfocada en ventas.",
    heroImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop",
    heroMockupImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    problemsTitle: "¿Tu centro de estética tiene estos problemas?",
    problems: [
      { title: "Falta de impacto visual", text: "Si tu web no se ve premium, cuesta destacar." },
      { title: "Pocas consultas", text: "Tu propuesta no genera el deseo suficiente." },
      { title: "Competencia más visible", text: "Otros centros se ven más profesionales online." },
    ],
    solutionTitle: "Una web que vende tu propuesta premium",
    solutionText: "Mostramos tus tratamientos con una estética que genera deseo y confianza.",
    solutionPoints: ["Imagen premium", "Tratamientos claros", "Antes y después", "Contacto directo"],
    benefitsTitle: "Lo que vas a lograr",
    benefits: [
      { title: "Más consultas", text: "Recibí mensajes de personas interesadas en tus tratamientos." },
      { title: "Imagen premium", text: "Tu marca se percibe más cuidada y profesional." },
      { title: "Más conversiones", text: "Tu web guía hacia el contacto sin distracciones." },
    ],
    servicesTitle: "Secciones que incluimos",
    servicesSubtitle: "Todo lo que tu centro de estética necesita para vender más.",
    services: [
      { title: "Hero elegante", description: "Imagen impactante con mensaje de valor claro.", icon: "sparkles" },
      { title: "Tratamientos", description: "Lista visual de todos tus servicios de estética.", icon: "list" },
      { title: "Galería de resultados", description: "Fotos de antes/después para generar confianza.", icon: "camera" },
      { title: "Formulario de consulta", description: "Formulario simple para agendar turnos.", icon: "form" },
    ],
    processTitle: "Cómo trabajamos",
    process: [
      { step: "01", title: "Conocemos tu marca", text: "Entendemos tu estilo y propuesta de valor." },
      { step: "02", title: "Diseñamos tu web", text: "Creamos una landing premium que vende." },
      { step: "03", title: "Publicamos todo", text: "Tu web queda lista para recibir consultas." },
      { step: "04", title: "Recibís clientes", text: "Empezás a recibir mensajes de personas interesadas." },
    ],
    aboutTitle: "Quién está detrás",
    aboutName: "Diego Podlecki",
    aboutRole: "Diseño web enfocado en resultados",
    aboutText: "Ayudo a centros de estética a mostrar mejor su valor y vender más tratamientos con una presencia online premium.",
    aboutPoints: [
      { title: "Más claridad", text: "Mostrar bien el servicio vende más que describirlo." },
      { title: "Más deseo", text: "Una web premium eleva el valor percibido." },
    ],
    formTitle: "Pedí tu web para estética corporal",
    formSubtitle: "Te respondo con una propuesta pensada para conseguir más consultas.",
    finalCtaTitle: "Empezá a convertir mejor tu presencia online",
    finalCtaText: "Si querés una web más premium y comercial, esta base te ayuda a despegar.",
    whatsappMessage: "Hola, quiero una web para estética corporal que me ayude a vender más tratamientos.",
    preview: previewSvg("Estética corporal", "Premium, visual y elegante", "#ec4899", "#f97316"),
    profile: profileSvg("Diego Podlecki", "Diseño web enfocado en resultados"),
  },
};

export const landingPageList = Object.values(landingPages);
