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
  services: Array<{ title: string; description: string; icon: string; image?: string }>;
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
  primaryColor?: string;
  accentColor?: string;
  testimonial?: {
    name: string;
    role: string;
    text: string;
  };
};

export const landingPages: Record<string, LandingConfig> = {
  gimnasio: {
    slug: "gimnasio",
    title: "Página web para gimnasios que veulent más alumnos",
    heroTitle: "Tu gimnasio deserve una web que llena cupos",
    heroSubtitle: "Una página web profesional que muestra tus clases, horarios e instalaciones y convierte visitas en inscripciones todos los días.",
    heroCta: "Quiero más alumnos",
    heroSecondaryCta: "Ver demo",
    heroBadge: "Especialistas en gimnasios",
    heroPreviewTitle: "Tu gimnasio online",
    heroPreviewSubtitle: "Clases, horarios y reservas desde un mismo lugar.",
    heroImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=800&fit=crop&q=80",
    heroMockupImage: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=600&fit=crop&q=80",
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
    servicesTitle: "Qué incluye tu web",
    servicesSubtitle: "Todo lo que tu gimnasio necesita para convertir visitas en alumnos.",
    services: [
      { title: "Hero impactante", description: "Foto de tu gimnasio con mensaje claro y botón de contacto.", icon: "image", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop&q=80" },
      { title: "Clases y horarios", description: "Grilla visual con todas tus clases y turnos disponibles.", icon: "calendar", image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop&q=80" },
      { title: "Galería de instalaciones", description: "Fotos reales de tu espacio para generar confianza.", icon: "camera", image: "https://images.unsplash.com/photo-1558611848-73f7eb50d72e?w=600&h=400&fit=crop&q=80" },
      { title: "Formulario de inscripción", description: "Formulario simple para que dejen sus datos.", icon: "form", image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop&q=80" },
    ],
    processTitle: "Cómo trabajamos",
    process: [
      { step: "01", title: "Analizamos tu gimnasio", text: "Entendemos tus clases, horarios y propuesta." },
      { step: "02", title: "Diseñamos tu web", text: "Creamos una landing enfocada en inscripciones." },
      { step: "03", title: "Publicamos todo", text: "Tu web queda lista para recibir consultas." },
      { step: "04", title: "Recibí alumnos", text: "Empezás a recibir consultas por WhatsApp y formulario." },
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
    formSubtitle: "Te respondo con una propuesta pensado para conseguir más alumnos.",
    finalCtaTitle: "Empezá a recibir nuevos alumnos hoy",
    finalCtaText: "Tu competencia ya está online. La diferencia es quién convierte mejor.",
    whatsappMessage: "Hola, quiero una web para mi gimnasio que me consiga más consultas e inscripciones.",
    preview: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&h=800&fit=crop&q=80",
    profile: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=500&fit=crop&q=80",
    primaryColor: "#0f172a",
    accentColor: "#22c55e",
    testimonial: {
      name: "María González",
      role: "Dueña de gimnasio",
      text: "Desde que tenemos la web, recibimos consultas todos los días. Logramos una imagen mucho más profesional.",
    },
  },
  "personal-trainer": {
    slug: "personal-trainer",
    title: "Página web para personal trainers que veulent más clientes",
    heroTitle: "Tu marca personal merece una web que vende",
    heroSubtitle: "Una presencia online profesional que muestra tu método, tus resultados y por qué entrenar con vos es la mejor decisión.",
    heroCta: "Quiero más clientes",
    heroSecondaryCta: "Ver demo",
    heroBadge: "Especialistas en trainers",
    heroPreviewTitle: "Tu marca personal",
    heroPreviewSubtitle: "Método, resultados y planes claros.",
    heroImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop&q=80",
    heroMockupImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&h=600&fit=crop&q=80",
    problemsTitle: "¿Te pasa esto como trainer?",
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
    servicesTitle: "Qué incluye tu web",
    servicesSubtitle: "Todo lo que necesitás para vender tu entrenamiento online.",
    services: [
      { title: "Hero con tu propuesta", description: "Tu propuesta de valor clara y atractiva.", icon: "target", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&q=80" },
      { title: "Tu método", description: "Explicación de tu sistema de entrenamiento.", icon: "dumbbell", image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=400&fit=crop&q=80" },
      { title: "Resultados y testimonios", description: "Fotos de antes/después y opiniones de clientes.", icon: "star", image: "https://images.unsplash.com/photo-1594381898411-846e3d133963?w=600&h=400&fit=crop&q=80" },
      { title: "Planes y precios", description: "Opciones claras para que elijan cómo entrenar.", icon: "credit-card", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop&q=80" },
    ],
    processTitle: "Cómo trabajamos",
    process: [
      { step: "01", title: "Conocemos tu propuesta", text: "Entendemos tu método y a quién querés atraer." },
      { step: "02", title: "Diseñamos tu web", text: "Creamos una landing que vende tu entrenamiento." },
      { step: "03", title: "Publicamos todo", text: "Tu web queda lista para recibir consultas." },
      { step: "04", title: "Recibí clientes", text: "Empezás a recibir mensajes de personas interesadas." },
    ],
    aboutTitle: "Quién está detrás",
    aboutName: "Diego Podlecki",
    aboutRole: "Diseño web enfocado en resultados",
    aboutText: "Ayudo a trainers a convertir su expertise en una presencia online que genere clientes reales.",
    aboutPoints: [
      { title: "Claridad", text: "Tu propuesta se entiende en segundos." },
      { title: "Conversión", text: "Cada sección guía hacia el contacto." },
    ],
    formTitle: "Pedí tu web como personal trainer",
    formSubtitle: "Te respondo con una propuesta pensada para conseguir más clientes.",
    finalCtaTitle: "Empezá a vender tu experiencia online",
    finalCtaText: "Tu competencia ya está construyendo presencia. Vos también podés convertir mejor.",
    whatsappMessage: "Hola, quiero una web para mi trabajo de personal trainer que me ayude a vender más.",
    preview: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&h=800&fit=crop&q=80",
    profile: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=500&fit=crop&q=80",
    primaryColor: "#0f172a",
    accentColor: "#f97316",
    testimonial: {
      name: "Carlos Rodríguez",
      role: "Personal trainer",
      text: "Mi marca personal se ve mucho más profesional. Los clientes me encuentran más fácil y confían más.",
    },
  },
  nutricionista: {
    slug: "nutricionista",
    title: "Página web para nutricionistas que veulent más pacientes",
    heroTitle: "Tu consultorio merece una web que genera pacientes",
    heroSubtitle: "Una presencia online profesional que muestra tu enfoque, servicios y facilita que las personas agenden consulta.",
    heroCta: "Quiero más pacientes",
    heroSecondaryCta: "Ver demo",
    heroBadge: "Especialistas en nutrición",
    heroPreviewTitle: "Tu consultorio online",
    heroPreviewSubtitle: "Servicios, información y contacto directo.",
    heroImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&h=800&fit=crop&q=80",
    heroMockupImage: "https://images.unsplash.com/photo-1505576399279-565b52d4ac39?w=800&h=600&fit=crop&q=80",
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
    servicesTitle: "Qué incluye tu web",
    servicesSubtitle: "Todo lo que tu consultorio necesita para captar pacientes.",
    services: [
      { title: "Hero profesional", description: "Tu enfoque nutricional claro y atractivo.", icon: "heart", image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop&q=80" },
      { title: "Servicios detallados", description: "Lista de consultas y tratamientos que ofrecés.", icon: "list", image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac39?w=600&h=400&fit=crop&q=80" },
      { title: "Sobre vos", description: "Tu historia, formación y por qué sos la persona indicada.", icon: "user", image: "https://images.unsplash.com/photo-1576091160399-112ba8d42d21?w=600&h=400&fit=crop&q=80" },
      { title: "Formulario de consulta", description: "Formulario simple para agendar turnos.", icon: "form", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop&q=80" },
    ],
    processTitle: "Cómo trabajamos",
    process: [
      { step: "01", title: "Entendemos tu servicio", text: "Conocemos tu enfoque y a quién ayudás." },
      { step: "02", title: "Diseñamos tu web", text: "Creamos una landing que transmite confianza." },
      { step: "03", title: "Publicamos todo", text: "Tu web queda lista para recibir consultas." },
      { step: "04", title: "Recibí pacientes", text: "Empezás a recibir mensajes de personas interesadas." },
    ],
    aboutTitle: "Quién está detrás",
    aboutName: "Diego Podlecki",
    aboutRole: "Diseño web enfocado en resultados",
    aboutText: "Trabajo con nutricionistas que necesitan una presencia online que genere consultas reales.",
    aboutPoints: [
      { title: "Más claridad", text: "Explicar bien tu servicio ayuda a vender mejor." },
      { title: "Más confianza", text: "El diseño acompaña la decisión de contactar." },
    ],
    formTitle: "Pedí tu web para nutrición",
    formSubtitle: "Te respondo con una propuesta pensada para conseguir más pacientes.",
    finalCtaTitle: "Empezá a generar más consultas hoy",
    finalCtaText: "Tu consultorio puede estar online 24/7 generando turnos.",
    whatsappMessage: "Hola, quiero una web para mi consultorio de nutrición y atraer más pacientes.",
    preview: "https://images.unsplash.com/photo-1576091160399-112ba8d42d21?w=1200&h=800&fit=crop&q=80",
    profile: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop&q=80",
    primaryColor: "#0f172a",
    accentColor: "#84cc16",
    testimonial: {
      name: "Laura Martínez",
      role: "Nutricionista",
      text: "La web me ayuda a filtrar pacientes y agendar consultas sin perder tiempo.",
    },
  },
  psicologo: {
    slug: "psicologo",
    title: "Página web para psicólogos que veulent más consultas",
    heroTitle: "Tu consultorio merece una web que transmite calma",
    heroSubtitle: "Una presencia online profesional, cálida y confiable que ayuda a las personas a dar el primer paso.",
    heroCta: "Quiero más consultas",
    heroSecondaryCta: "Ver demo",
    heroBadge: "Especialistas en psicología",
    heroPreviewTitle: "Tu consultorio online",
    heroPreviewSubtitle: "Calma, empatía y contacto directo.",
    heroImage: "https://images.unsplash.com/photo-1527137342181-df9ad2f54c70?w=1200&h=800&fit=crop&q=80",
    heroMockupImage: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop&q=80",
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
    servicesTitle: "Qué incluye tu web",
    servicesSubtitle: "Todo lo que tu consultorio necesita para captar pacientes.",
    services: [
      { title: "Hero empático", description: "Mensaje que transmite calma y profesionalismo.", icon: "heart", image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&q=80" },
      { title: "Tu enfoque", description: "Explicación de tu método terapéutico.", icon: "brain", image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop&q=80" },
      { title: "Información útil", description: "Respuestas a preguntas frecuentes de pacientes.", icon: "info", image: "https://images.unsplash.com/photo-1559163499-41381127c348?w=600&h=400&fit=crop&q=80" },
      { title: "Formulario de consulta", description: "Formulario simple y confidencial para agendar.", icon: "form", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop&q=80" },
    ],
    processTitle: "Cómo trabajamos",
    process: [
      { step: "01", title: "Conocemos tu enfoque", text: "Entendé cómo trabajás y a quién ayudás." },
      { step: "02", title: "Diseñamos tu web", text: "Creamos una landing que transmite confianza." },
      { step: "03", title: "Publicamos todo", text: "Tu web queda lista para recibir consultas." },
      { step: "04", title: "Recibí pacientes", text: "Empezás a recibir mensajes de personas interesadas." },
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
    preview: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&h=800&fit=crop&q=80",
    profile: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop&q=80",
    primaryColor: "#0f172a",
    accentColor: "#8b5cf6",
    testimonial: {
      name: "Ana García",
      role: "Psicóloga",
      text: "Mis pacientes me encuentran más fácil ahora. La web transmite la calidez de mi consultorio.",
    },
  },
  "estetica-corporal": {
    slug: "estetica-corporal",
    title: "Página web para centros de estética que veutlen más consultas",
    heroTitle: "Tu centro de estética merece una web premium",
    heroSubtitle: "Una presencia online elegante que muestra tus tratamientos, genera deseo y convierte visitas en citas.",
    heroCta: "Quiero más consultas",
    heroSecondaryCta: "Ver demo",
    heroBadge: "Especialistas en estética",
    heroPreviewTitle: "Tu centro online",
    heroPreviewSubtitle: "Visual, elegante y enfocada en ventas.",
    heroImage: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&h=800&fit=crop&q=80",
    heroMockupImage: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=600&fit=crop&q=80",
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
    servicesTitle: "Qué incluye tu web",
    servicesSubtitle: "Todo lo que tu centro de estética necesita para vender más.",
    services: [
      { title: "Hero elegante", description: "Imagen impactante con mensaje de valor claro.", icon: "sparkles", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop&q=80" },
      { title: "Tratamientos", description: "Lista visual de todos tus servicios de estética.", icon: "list", image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&h=400&fit=crop&q=80" },
      { title: "Galería de resultados", description: "Fotos de antes/después para generar confianza.", icon: "camera", image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&h=400&fit=crop&q=80" },
      { title: "Formulario de consulta", description: "Formulario simple para agendar turnos.", icon: "form", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=400&fit=crop&q=80" },
    ],
    processTitle: "Cómo trabajamos",
    process: [
      { step: "01", title: "Conocemos tu marca", text: "Entendemos tu estilo y propuesta de valor." },
      { step: "02", title: "Diseñamos tu web", text: "Creamos una landing premium que vende." },
      { step: "03", title: "Publicamos todo", text: "Tu web queda lista para recibir consultas." },
      { step: "04", title: "Recibí clientes", text: "Empezás a recibir mensajes de personas interesadas." },
    ],
    aboutTitle: "Quién está detrás",
    aboutName: "Diego Podlecki",
    aboutRole: "Diseño web enfocado en resultados",
    aboutText: "Ayudo a centros de estética a mostrar mejor su valor y vender más tratamientos.",
    aboutPoints: [
      { title: "Más claridad", text: "Mostrar bien el servicio vende más que describirlo." },
      { title: "Más deseo", text: "Una web premium eleva el valor percibido." },
    ],
    formTitle: "Pedí tu web para estética",
    formSubtitle: "Te respondo con una propuesta pensada para conseguir más consultas.",
    finalCtaTitle: "Empezá a convertir mejor tu presencia online",
    finalCtaText: "Tu centro puede estar online 24/7 generando citas.",
    whatsappMessage: "Hola, quiero una web para estética corporal que me ayude a vender más tratamientos.",
    preview: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=1200&h=800&fit=crop&q=80",
    profile: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=500&fit=crop&q=80",
    primaryColor: "#0f172a",
    accentColor: "#ec4899",
    testimonial: {
      name: "Sofia López",
      role: "Dueña de centro de estética",
      text: "Mi centro ahora se ve premium. Las clientas quedan impresionadas antes de venir.",
    },
  },
  "iron-fitness": {
    slug: "iron-fitness",
    title: "Iron Fitness",
    heroTitle: "Transformá tu cuerpo. Empezá hoy.",
    heroSubtitle: "Clases grupales, pesas y cardio en un solo lugar. Primera semana gratis.",
    heroCta: "Quiero empezar",
    heroSecondaryCta: "Empezar ahora",
    heroBadge: "Gimnasio",
    heroPreviewTitle: "Tu transformación empieza acá",
    heroPreviewSubtitle: "Musculación, clases y funcional.",
    heroImage: previewSvg("Optimizado", "Vista previa local", "#0EA5E9", "#10B981"),
    heroMockupImage: previewSvg("Optimizado", "Detalle local", "#0EA5E9", "#10B981"),
    problemsTitle: "¿Te pasa esto?",
    problems: [
      { title: "No ves resultados", text: "Entrenás sin un plan claro y no avanzás." },
      { title: "Falta de motivación", text: "Solo es difícil mantener la constancia." },
      { title: "No sabés qué hacer", text: "Necesitás guía profesional para entrenar bien." },
    ],
    solutionTitle: "Un lugar para transformarte",
    solutionText: "Contamos con todo lo que necesitás para alcanzar tu mejor versión.",
    solutionPoints: ["Equipamiento profesional", "Clases dirigidas", "Acompañamiento personalizado", "Ambiente motivador"],
    benefitsTitle: "Lo que vas a lograr",
    benefits: [
      { title: "Resultados reales", text: "Entrená con un plan que funciona." },
      { title: "Constancia", text: "El ambiente y la comunidad te mantienen motivado." },
      { title: "Salud y energía", text: "Mejorá tu calidad de vida desde hoy." },
    ],
    servicesTitle: "Qué ofrecemos",
    servicesSubtitle: "Todo lo que necesitás para entrenar bien.",
    services: [
      { title: "Musculación", description: "Equipamiento profesional para todos los niveles.", icon: "dumbbell" },
      { title: "Clases grupales", description: "Spinning, funcional, yoga y más.", icon: "users" },
      { title: "Entrenamiento funcional", description: "Mejorá tu fuerza y resistencia.", icon: "target" },
    ],
    processTitle: "Cómo empezar",
    process: [
      { step: "01", title: "Vení a conocer", text: "Recorré el gimnasio y conocé nuestras instalaciones." },
      { step: "02", title: "Elegí tu plan", text: "Te ayudamos a elegir el mejor plan para vos." },
      { step: "03", title: "Empezá a entrenar", text: "Comenzá tu transformación con acompañamiento." },
    ],
    aboutTitle: "Quiénes somos",
    aboutName: "Iron Fitness",
    aboutRole: "Tu gimnasio de confianza",
    aboutText: "Somos un gimnasio comprometido con ayudarte a alcanzar tus objetivos. Contamos con equipamiento de primera y un equipo de profesionales listos para acompañarte.",
    aboutPoints: [
      { title: "Equipamiento profesional", text: "Máquinas y pesas de última generación." },
      { title: "Ambiente motivador", text: "Una comunidad que te impulsa a dar más." },
    ],
    formTitle: "Quiero más clientes",
    formSubtitle: "Dejanos tus datos y te contactamos para arrancar.",
    finalCtaTitle: "Empezá tu transformación hoy",
    finalCtaText: "La primera semana es gratis. No hay excusas.",
    whatsappMessage: "Hola, quiero empezar a entrenar en Iron Fitness.",
    preview: previewSvg("Iron Fitness", "Transformá tu cuerpo", "#111111", "#F97316"),
    profile: profileSvg("Iron Fitness", "Tu gimnasio de confianza"),
    primaryColor: "#111111",
    accentColor: "#F97316",
    testimonial: {
      name: "Martín G.",
      role: "Socio",
      text: "Desde que entreno acá bajé 8 kilos en 3 meses. El equipo es increíble.",
    },
  },
  emprendedor: {
    slug: "emprendedor",
    title: "Página web para emprendedores que venden servicios",
    heroTitle: "Tu emprendimiento merece una web que vende",
    heroSubtitle: "Una presencia online profesional que muestra tu propuesta, genera autoridad y convierte visitas en clientes.",
    heroCta: "Quiero más clientes",
    heroSecondaryCta: "Ver demo",
    heroBadge: "Emprendedores",
    heroPreviewTitle: "Tu marca online",
    heroPreviewSubtitle: "Claridad, autoridad y contacto directo.",
    heroImage: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=1200&h=800&fit=crop&q=80",
    heroMockupImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop&q=80",
    problemsTitle: "¿Tu marca tiene estos problemas?",
    problems: [
      { title: "No se entiende tu oferta", text: "Si el mensaje no es claro, la gente se va sin preguntar." },
      { title: "Dependés de redes sociales", text: "Sin una landing, cada consulta depende del feed." },
      { title: "Poca credibilidad", text: "Una web prolija ayuda a transmitir más valor en segundos." },
    ],
    solutionTitle: "Una landing que ordena tu propuesta",
    solutionText: "Mostramos lo que hacés, por qué sos la mejor opción y cómo contactarte rápido.",
    solutionPoints: ["Oferta clara", "Prueba social", "CTA visible", "Seguimiento simple"],
    benefitsTitle: "Lo que vas a lograr",
    benefits: [
      { title: "Más consultas", text: "Convertí visitas en mensajes reales y oportunidades." },
      { title: "Más autoridad", text: "Tu marca se ve más sólida y profesional." },
      { title: "Más claridad", text: "Cada sección guía hacia una decisión simple." },
    ],
    servicesTitle: "Qué incluye tu web",
    servicesSubtitle: "Todo lo que necesitás para vender mejor tus servicios online.",
    services: [
      { title: "Hero con tu propuesta", description: "Mensaje claro sobre qué hacés y para quién.", icon: "image", image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&h=400&fit=crop&q=80" },
      { title: "Servicios ordenados", description: "Explicación simple de tu oferta y beneficios.", icon: "list", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop&q=80" },
      { title: "Prueba social", description: "Testimonios y señales de confianza para sumar credibilidad.", icon: "star", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&q=80" },
      { title: "Formulario de contacto", description: "Un CTA simple para cerrar el contacto sin fricción.", icon: "form", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80" },
    ],
    processTitle: "Cómo trabajamos",
    process: [
      { step: "01", title: "Entendemos tu oferta", text: "Aterrizamos lo que vendés y cómo comunicarlo." },
      { step: "02", title: "Diseñamos tu landing", text: "Creamos una página que ordena y vende tu propuesta." },
      { step: "03", title: "Publicamos todo", text: "Tu web queda lista para recibir consultas." },
      { step: "04", title: "Empezá a vender mejor", text: "Tu marca se vuelve más clara y convincente." },
    ],
    aboutTitle: "Quién está detrás",
    aboutName: "LaunchMe",
    aboutRole: "Emprendimiento digital",
    aboutText: "Ayudo a emprendedores a transformar su propuesta en una landing clara, moderna y enfocada en ventas.",
    aboutPoints: [
      { title: "Más claridad", text: "Explicar mejor tu oferta ayuda a convertir mejor." },
      { title: "Más confianza", text: "El diseño acompaña la decisión de contactarte." },
    ],
    formTitle: "Pedí tu web para tu emprendimiento",
    formSubtitle: "Te respondo con una propuesta pensada para vender mejor.",
    finalCtaTitle: "Empezá a convertir visitas en clientes",
    finalCtaText: "Tu emprendimiento puede estar online 24/7 generando consultas.",
    whatsappMessage: "Hola, quiero una web para mi emprendimiento que me ayude a vender más servicios.",
    preview: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop&q=80",
    profile: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&q=80",
    primaryColor: "#0f172a",
    accentColor: "#f59e0b",
    testimonial: {
      name: "Sofía R.",
      role: "Emprendedora digital",
      text: "La landing ordenó mi oferta y empecé a recibir consultas mucho más calificadas.",
    },
  },
};

export const landingPageList = Object.values(landingPages);
