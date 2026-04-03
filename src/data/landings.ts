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
  gimnasios: {
    slug: "gimnasios",
    title: "PÃ¡gina web para gimnasios que quieren mÃ¡s alumnos",
    heroTitle: "LlenÃ¡ tu gimnasio con una web que atrae alumnos todos los dÃ­as",
    heroSubtitle: "No pierdas clientes por no tener presencia online profesional. MostrÃ¡ tus clases, horarios e instalaciones y convertÃ­ visitas en inscripciones reales.",
    heroCta: "Quiero mÃ¡s alumnos",
    heroSecondaryCta: "Ver cÃ³mo funciona",
    heroBadge: "Especialistas en gimnasios",
    heroPreviewTitle: "Tu gimnasio con mÃ¡s inscripciones",
    heroPreviewSubtitle: "Clases, horarios y reservas desde un mismo lugar.",
    heroImage: previewSvg("Optimizado", "Vista previa local", "#0EA5E9", "#10B981"),
    heroMockupImage: previewSvg("Optimizado", "Detalle local", "#0EA5E9", "#10B981"),
    problemsTitle: "Â¿Tu gimnasio tiene estos problemas?",
    problems: [
      { title: "Pocos alumnos nuevos", text: "Tu web no convierte visitas en inscripciones." },
      { title: "DependÃ©s de Instagram", text: "Las redes no siempre se traducen en consultas reales." },
      { title: "Competencia con mejor imagen", text: "Otros gimnasios se ven mÃ¡s profesionales online." },
    ],
    solutionTitle: "Una web que llena tu gimnasio",
    solutionText: "Mostramos tus clases, horarios e instalaciones de forma clara para que las personas se animen a consultar.",
    solutionPoints: ["Clases destacadas", "Horarios claros", "Instalaciones reales", "InscripciÃ³n directa"],
    benefitsTitle: "Lo que vas a lograr",
    benefits: [
      { title: "MÃ¡s inscripciones", text: "RecibÃ­ consultas todos los dÃ­as sin depender de redes." },
      { title: "Imagen profesional", text: "Tu gimnasio se ve serio, moderno y confiable." },
      { title: "AutomatizaciÃ³n", text: "Tu web trabaja 24/7 incluso cuando estÃ¡s entrenando alumnos." },
    ],
    servicesTitle: "QuÃ© incluye tu web",
    servicesSubtitle: "Todo lo que tu gimnasio necesita para convertir visitas en alumnos.",
    services: [
      { title: "Hero impactante", description: "Foto de tu gimnasio con mensaje claro y botÃ³n de contacto.", icon: "image" },
      { title: "Clases y horarios", description: "Grilla visual con todas tus clases y turnos disponibles.", icon: "calendar" },
      { title: "GalerÃ­a de instalaciones", description: "Fotos reales de tu espacio para generar confianza.", icon: "camera" },
      { title: "Formulario de inscripciÃ³n", description: "Formulario simple para que dejen sus datos.", icon: "form" },
    ],
    processTitle: "CÃ³mo trabajamos",
    process: [
      { step: "01", title: "Analizamos tu gimnasio", text: "Entendemos tus clases, horarios y propuesta." },
      { step: "02", title: "DiseÃ±amos tu web", text: "Creamos una landing enfocada en inscripciones." },
      { step: "03", title: "Publicamos todo", text: "Tu web queda lista para recibir consultas." },
      { step: "04", title: "RecibÃ­s alumnos", text: "EmpezÃ¡s a recibir consultas por WhatsApp y formulario." },
    ],
    aboutTitle: "QuiÃ©n estÃ¡ detrÃ¡s",
    aboutName: "Diego Podlecki",
    aboutRole: "DiseÃ±o web enfocado en resultados",
    aboutText: "DiseÃ±o pÃ¡ginas para gimnasios que necesitan mÃ¡s alumnos y una presencia digital que realmente venda.",
    aboutPoints: [
      { title: "Enfoque comercial", text: "Cada secciÃ³n estÃ¡ pensada para generar inscripciones." },
      { title: "DiseÃ±o profesional", text: "Tu gimnasio se ve moderno y confiable." },
    ],
    formTitle: "PedÃ­ tu web para tu gimnasio",
    formSubtitle: "Te respondo con una propuesta pensada para conseguir mÃ¡s alumnos.",
    finalCtaTitle: "EmpezÃ¡ a recibir nuevos alumnos hoy",
    finalCtaText: "Tu competencia ya estÃ¡ online. La diferencia es quiÃ©n convierte mejor.",
    whatsappMessage: "Hola, quiero una web para mi gimnasio que me consiga mÃ¡s consultas e inscripciones.",
    preview: previewSvg("Gimnasio", "Clases, horarios y reservas", "#22c55e", "#06b6d4"),
    profile: profileSvg("Diego Podlecki", "DiseÃ±o web enfocado en resultados"),
  },
  "personal-trainers": {
    slug: "personal-trainers",
    title: "PÃ¡gina web para entrenadores personales que quieren mÃ¡s clientes",
    heroTitle: "ConvertÃ­ tu experiencia en mÃ¡s clientes con una web que vende",
    heroSubtitle: "No pierdas clientes por no tener presencia online profesional. MostrÃ¡ tu mÃ©todo, tus resultados y por quÃ© sos la persona correcta para entrenar.",
    heroCta: "Quiero mÃ¡s clientes",
    heroSecondaryCta: "Ver cÃ³mo funciona",
    heroBadge: "Especialistas en entrenadores",
    heroPreviewTitle: "Tu marca personal vendiendo mejor",
    heroPreviewSubtitle: "Rutinas, testimonios y planes en una sola landing.",
    heroImage: previewSvg("Optimizado", "Vista previa local", "#0EA5E9", "#10B981"),
    heroMockupImage: previewSvg("Optimizado", "Detalle local", "#0EA5E9", "#10B981"),
    problemsTitle: "Â¿Te pasa esto como entrenador?",
    problems: [
      { title: "No destacÃ¡s entre la competencia", text: "Tu propuesta se ve igual a la de otros trainers." },
      { title: "DependÃ©s del boca a boca", text: "Sin una web, cada cliente depende de una recomendaciÃ³n." },
      { title: "Falta de sistema de ventas", text: "No tenÃ©s un proceso claro para convertir interesados." },
    ],
    solutionTitle: "Una web que vende tu expertise",
    solutionText: "Mostramos tu mÃ©todo, tus resultados y por quÃ© entrenar con vos es la mejor decisiÃ³n.",
    solutionPoints: ["Tu mÃ©todo Ãºnico", "Resultados reales", "Testimonios", "Planes claros"],
    benefitsTitle: "Lo que vas a lograr",
    benefits: [
      { title: "MÃ¡s clientes", text: "RecibÃ­ consultas de personas que quieren entrenar con vos." },
      { title: "Marca personal fuerte", text: "Tu perfil se percibe mÃ¡s profesional y confiable." },
      { title: "Ventas constantes", text: "Tu web convierte interesados en clientes 24/7." },
    ],
    servicesTitle: "QuÃ© incluye tu web",
    servicesSubtitle: "Todo lo que necesitÃ¡s para vender tu entrenamiento online.",
    services: [
      { title: "Hero con tu propuesta", description: "Mensaje claro sobre por quÃ© entrenar con vos.", icon: "target" },
      { title: "Tu mÃ©todo", description: "ExplicaciÃ³n de tu sistema de entrenamiento.", icon: "dumbbell" },
      { title: "Resultados y testimonios", description: "Fotos de antes/despuÃ©s y opiniones de clientes.", icon: "star" },
      { title: "Planes y precios", description: "Opciones claras para que elijan cÃ³mo entrenar.", icon: "credit-card" },
    ],
    processTitle: "CÃ³mo trabajamos",
    process: [
      { step: "01", title: "Conocemos tu propuesta", text: "Entendemos tu mÃ©todo y a quiÃ©n querÃ©s atraer." },
      { step: "02", title: "DiseÃ±amos tu web", text: "Creamos una landing que vende tu entrenamiento." },
      { step: "03", title: "Publicamos todo", text: "Tu web queda lista para recibir consultas." },
      { step: "04", title: "RecibÃ­s clientes", text: "EmpezÃ¡s a recibir mensajes de personas interesadas." },
    ],
    aboutTitle: "QuiÃ©n estÃ¡ detrÃ¡s",
    aboutName: "Diego Podlecki",
    aboutRole: "DiseÃ±o web enfocado en resultados",
    aboutText: "Ayudo a entrenadores personales a convertir su expertise en una presencia online que genere clientes reales.",
    aboutPoints: [
      { title: "Claridad", text: "Tu propuesta se entiende en segundos." },
      { title: "ConversiÃ³n", text: "Cada secciÃ³n guÃ­a hacia el contacto." },
    ],
    formTitle: "PedÃ­ tu web como personal trainer",
    formSubtitle: "Te respondo con una propuesta pensada para conseguir mÃ¡s clientes.",
    finalCtaTitle: "EmpezÃ¡ a vender tu experiencia online",
    finalCtaText: "Tu competencia ya estÃ¡ construyendo presencia. Vos tambiÃ©n podÃ©s convertir mejor.",
    whatsappMessage: "Hola, quiero una web para mi trabajo de personal trainer que me ayude a vender mÃ¡s.",
    preview: previewSvg("Personal Trainer", "Resultados y disciplina", "#f97316", "#ef4444"),
    profile: profileSvg("Diego Podlecki", "DiseÃ±o web enfocado en resultados"),
  },
  nutricionistas: {
    slug: "nutricionistas",
    title: "PÃ¡gina web para nutricionistas que quieren mÃ¡s pacientes",
    heroTitle: "GenerÃ¡ mÃ¡s consultas con una web que vende confianza",
    heroSubtitle: "No pierdas clientes por no tener presencia online profesional. ExplicÃ¡ tu enfoque, mostrÃ¡ tus servicios y facilitÃ¡ que las personas agenden consulta.",
    heroCta: "Quiero mÃ¡s pacientes",
    heroSecondaryCta: "Ver cÃ³mo funciona",
    heroBadge: "Especialistas en nutriciÃ³n",
    heroPreviewTitle: "Tu consultorio mÃ¡s claro y confiable",
    heroPreviewSubtitle: "Servicios, informaciÃ³n y contacto directo.",
    heroImage: previewSvg("Optimizado", "Vista previa local", "#0EA5E9", "#10B981"),
    heroMockupImage: previewSvg("Optimizado", "Detalle local", "#0EA5E9", "#10B981"),
    problemsTitle: "Â¿Tu consultorio tiene estos problemas?",
    problems: [
      { title: "Falta de confianza online", text: "Si tu web no transmite confianza, cuesta agendar." },
      { title: "Poca visibilidad", text: "DependÃ©s solo de referencias para conseguir pacientes." },
      { title: "DifÃ­cil captar pacientes", text: "La informaciÃ³n no es clara para convertir visitas." },
    ],
    solutionTitle: "Una web que genera confianza",
    solutionText: "Mostramos tu enfoque, aclarÃ¡s dudas y abrÃ­s una puerta directa al contacto.",
    solutionPoints: ["Tu enfoque", "Servicios claros", "Contacto directo", "Seguimiento"],
    benefitsTitle: "Lo que vas a lograr",
    benefits: [
      { title: "MÃ¡s pacientes", text: "RecibÃ­ consultas de personas que buscan tu ayuda." },
      { title: "Autoridad profesional", text: "Tu consultorio se ve sÃ³lido y confiable." },
      { title: "Agenda llena", text: "Tu web convierte visitas en turnos confirmados." },
    ],
    servicesTitle: "QuÃ© incluye tu web",
    servicesSubtitle: "Todo lo que tu consultorio necesita para captar pacientes.",
    services: [
      { title: "Hero profesional", description: "Mensaje claro sobre tu enfoque nutricional.", icon: "heart" },
      { title: "Servicios detallados", description: "Lista de consultas y tratamientos que ofrecÃ©s.", icon: "list" },
      { title: "Sobre vos", description: "Tu historia, formaciÃ³n y por quÃ© sos la persona indicada.", icon: "user" },
      { title: "Formulario de consulta", description: "Formulario simple para agendar turnos.", icon: "form" },
    ],
    processTitle: "CÃ³mo trabajamos",
    process: [
      { step: "01", title: "Entendemos tu servicio", text: "Conocemos tu enfoque y a quiÃ©n ayudÃ¡s." },
      { step: "02", title: "DiseÃ±amos tu web", text: "Creamos una landing que transmite confianza." },
      { step: "03", title: "Publicamos todo", text: "Tu web queda lista para recibir consultas." },
      { step: "04", title: "RecibÃ­s pacientes", text: "EmpezÃ¡s a recibir mensajes de personas interesadas." },
    ],
    aboutTitle: "QuiÃ©n estÃ¡ detrÃ¡s",
    aboutName: "Diego Podlecki",
    aboutRole: "DiseÃ±o web enfocado en resultados",
    aboutText: "Trabajo con nutricionistas que necesitan una presencia online que genere consultas reales y no solo visitas.",
    aboutPoints: [
      { title: "MÃ¡s claridad", text: "Explicar bien tu servicio ayuda a vender mejor." },
      { title: "MÃ¡s confianza", text: "El diseÃ±o acompaÃ±a la decisiÃ³n de contactar." },
    ],
    formTitle: "PedÃ­ tu web para nutriciÃ³n",
    formSubtitle: "Te respondo con una propuesta pensada para conseguir mÃ¡s pacientes.",
    finalCtaTitle: "EmpezÃ¡ a generar mÃ¡s consultas hoy",
    finalCtaText: "Si querÃ©s una web que convierta, esta es una buena base para empezar.",
    whatsappMessage: "Hola, quiero una web para mi consultorio de nutriciÃ³n y atraer mÃ¡s pacientes.",
    preview: previewSvg("Nutricionista", "Planes, hÃ¡bitos y seguimiento", "#84cc16", "#22c55e"),
    profile: profileSvg("Diego Podlecki", "DiseÃ±o web enfocado en resultados"),
  },
  psicologos: {
    slug: "psicologos",
    title: "PÃ¡gina web para psicÃ³logos que quieren mÃ¡s consultas",
    heroTitle: "TransmitÃ­ confianza y recibÃ­ mÃ¡s consultas con tu web",
    heroSubtitle: "No pierdas clientes por no tener presencia online profesional. Una web clara, cÃ¡lida y profesional ayuda a que la persona se anime a dar el siguiente paso.",
    heroCta: "Quiero mÃ¡s consultas",
    heroSecondaryCta: "Ver cÃ³mo funciona",
    heroBadge: "Especialistas en psicologÃ­a",
    heroPreviewTitle: "Tu consultorio generando confianza",
    heroPreviewSubtitle: "Calma, empatÃ­a y contacto directo.",
    heroImage: previewSvg("Optimizado", "Vista previa local", "#0EA5E9", "#10B981"),
    heroMockupImage: previewSvg("Optimizado", "Detalle local", "#0EA5E9", "#10B981"),
    problemsTitle: "Â¿Tu consultorio tiene estos problemas?",
    problems: [
      { title: "Dificultad para generar confianza", text: "Si la web no transmite seguridad, cuesta dar el paso." },
      { title: "Poca presencia digital", text: "Sin una web clara, tu servicio pasa desapercibido." },
      { title: "Pacientes no agendan", text: "La informaciÃ³n no es clara para convertir interesados." },
    ],
    solutionTitle: "Una web que transmite confianza",
    solutionText: "Creamos una presencia online que acompaÃ±a a la persona desde la duda hasta el primer turno.",
    solutionPoints: ["Calma visual", "InformaciÃ³n clara", "Contacto simple", "Profesionalismo"],
    benefitsTitle: "Lo que vas a lograr",
    benefits: [
      { title: "MÃ¡s consultas", text: "RecibÃ­ mensajes de personas que buscan ayuda profesional." },
      { title: "Imagen que transmite confianza", text: "Tu prÃ¡ctica se ve seria, clara y cercana." },
      { title: "Agenda organizada", text: "Tu web filtra y organiza las consultas entrantes." },
    ],
    servicesTitle: "QuÃ© incluye tu web",
    servicesSubtitle: "Todo lo que tu consultorio necesita para captar pacientes.",
    services: [
      { title: "Hero empÃ¡tico", description: "Mensaje que transmite calma y profesionalismo.", icon: "heart" },
      { title: "Tu enfoque", description: "ExplicaciÃ³n de tu mÃ©todo terapÃ©utico.", icon: "brain" },
      { title: "InformaciÃ³n Ãºtil", description: "Respuestas a preguntas frecuentes de pacientes.", icon: "info" },
      { title: "Formulario de consulta", description: "Formulario simple y confidencial para agendar.", icon: "form" },
    ],
    processTitle: "CÃ³mo trabajamos",
    process: [
      { step: "01", title: "Conocemos tu enfoque", text: "Entendemos cÃ³mo trabajÃ¡s y a quiÃ©n ayudÃ¡s." },
      { step: "02", title: "DiseÃ±amos tu web", text: "Creamos una landing que transmite confianza." },
      { step: "03", title: "Publicamos todo", text: "Tu web queda lista para recibir consultas." },
      { step: "04", title: "RecibÃ­s pacientes", text: "EmpezÃ¡s a recibir mensajes de personas interesadas." },
    ],
    aboutTitle: "QuiÃ©n estÃ¡ detrÃ¡s",
    aboutName: "Diego Podlecki",
    aboutRole: "DiseÃ±o web enfocado en resultados",
    aboutText: "DiseÃ±o pÃ¡ginas para psicÃ³logos que necesitan transmitir confianza y captar consultas de forma profesional.",
    aboutPoints: [
      { title: "Enfoque humano", text: "La web acompaÃ±a la experiencia de quien busca ayuda." },
      { title: "DecisiÃ³n fÃ¡cil", text: "Menos fricciÃ³n, mÃ¡s claridad y mÃ¡s consultas." },
    ],
    formTitle: "PedÃ­ tu web para tu consultorio",
    formSubtitle: "Te respondo con una propuesta pensada para captar mÃ¡s pacientes.",
    finalCtaTitle: "SolicitÃ¡ tu consulta hoy",
    finalCtaText: "Tu presencia online puede transmitir mÃ¡s confianza desde el primer momento.",
    whatsappMessage: "Hola, quiero una web para mi consultorio de psicologÃ­a y agendar mÃ¡s turnos.",
    preview: previewSvg("PsicologÃ­a", "Calma, empatÃ­a y turnos", "#3b82f6", "#0ea5e9"),
    profile: profileSvg("Diego Podlecki", "DiseÃ±o web enfocado en resultados"),
  },
  "estetica-corporal": {
    slug: "estetica-corporal",
    title: "PÃ¡gina web para centros de estÃ©tica que quieren mÃ¡s consultas",
    heroTitle: "MostrÃ¡ tu propuesta premium y generÃ¡ mÃ¡s consultas",
    heroSubtitle: "No pierdas clientes por no tener presencia online profesional. Una web elegante puede ayudarte a comunicar valor, confianza y deseo de agendar.",
    heroCta: "Quiero mÃ¡s consultas",
    heroSecondaryCta: "Ver cÃ³mo funciona",
    heroBadge: "Especialistas en estÃ©tica",
    heroPreviewTitle: "Tu marca con presencia premium",
    heroPreviewSubtitle: "Visual, elegante y enfocada en ventas.",
    heroImage: previewSvg("Optimizado", "Vista previa local", "#0EA5E9", "#10B981"),
    heroMockupImage: previewSvg("Optimizado", "Detalle local", "#0EA5E9", "#10B981"),
    problemsTitle: "Â¿Tu centro de estÃ©tica tiene estos problemas?",
    problems: [
      { title: "Falta de impacto visual", text: "Si tu web no se ve premium, cuesta destacar." },
      { title: "Pocas consultas", text: "Tu propuesta no genera el deseo suficiente." },
      { title: "Competencia mÃ¡s visible", text: "Otros centros se ven mÃ¡s profesionales online." },
    ],
    solutionTitle: "Una web que vende tu propuesta premium",
    solutionText: "Mostramos tus tratamientos con una estÃ©tica que genera deseo y confianza.",
    solutionPoints: ["Imagen premium", "Tratamientos claros", "Antes y despuÃ©s", "Contacto directo"],
    benefitsTitle: "Lo que vas a lograr",
    benefits: [
      { title: "MÃ¡s consultas", text: "RecibÃ­ mensajes de personas interesadas en tus tratamientos." },
      { title: "Imagen premium", text: "Tu marca se percibe mÃ¡s cuidada y profesional." },
      { title: "MÃ¡s conversiones", text: "Tu web guÃ­a hacia el contacto sin distracciones." },
    ],
    servicesTitle: "QuÃ© incluye tu web",
    servicesSubtitle: "Todo lo que tu centro de estÃ©tica necesita para vender mÃ¡s.",
    services: [
      { title: "Hero elegante", description: "Imagen impactante con mensaje de valor claro.", icon: "sparkles" },
      { title: "Tratamientos", description: "Lista visual de todos tus servicios de estÃ©tica.", icon: "list" },
      { title: "GalerÃ­a de resultados", description: "Fotos de antes/despuÃ©s para generar confianza.", icon: "camera" },
      { title: "Formulario de consulta", description: "Formulario simple para agendar turnos.", icon: "form" },
    ],
    processTitle: "CÃ³mo trabajamos",
    process: [
      { step: "01", title: "Conocemos tu marca", text: "Entendemos tu estilo y propuesta de valor." },
      { step: "02", title: "DiseÃ±amos tu web", text: "Creamos una landing premium que vende." },
      { step: "03", title: "Publicamos todo", text: "Tu web queda lista para recibir consultas." },
      { step: "04", title: "RecibÃ­s clientes", text: "EmpezÃ¡s a recibir mensajes de personas interesadas." },
    ],
    aboutTitle: "QuiÃ©n estÃ¡ detrÃ¡s",
    aboutName: "Diego Podlecki",
    aboutRole: "DiseÃ±o web enfocado en resultados",
    aboutText: "Ayudo a centros de estÃ©tica a mostrar mejor su valor y vender mÃ¡s tratamientos con una presencia online premium.",
    aboutPoints: [
      { title: "MÃ¡s claridad", text: "Mostrar bien el servicio vende mÃ¡s que describirlo." },
      { title: "MÃ¡s deseo", text: "Una web premium eleva el valor percibido." },
    ],
    formTitle: "PedÃ­ tu web para estÃ©tica corporal",
    formSubtitle: "Te respondo con una propuesta pensada para conseguir mÃ¡s consultas.",
    finalCtaTitle: "EmpezÃ¡ a convertir mejor tu presencia online",
    finalCtaText: "Si querÃ©s una web mÃ¡s premium y comercial, esta base te ayuda a despegar.",
    whatsappMessage: "Hola, quiero una web para estÃ©tica corporal que me ayude a vender mÃ¡s tratamientos.",
    preview: previewSvg("EstÃ©tica corporal", "Premium, visual y elegante", "#ec4899", "#f97316"),
    profile: profileSvg("Diego Podlecki", "DiseÃ±o web enfocado en resultados"),
  },
  "iron-fitness": {
    slug: "iron-fitness",
    title: "Iron Fitness",
    heroTitle: "TransformÃ¡ tu cuerpo. EmpezÃ¡ hoy.",
    heroSubtitle: "Clases grupales, pesas y cardio en un solo lugar. Primera semana gratis.",
    heroCta: "Quiero empezar",
    heroSecondaryCta: "Empezar ahora",
    heroBadge: "Gimnasio",
    heroPreviewTitle: "Tu transformaciÃ³n empieza acÃ¡",
    heroPreviewSubtitle: "MusculaciÃ³n, clases y funcional.",
    heroImage: previewSvg("Optimizado", "Vista previa local", "#0EA5E9", "#10B981"),
    heroMockupImage: previewSvg("Optimizado", "Detalle local", "#0EA5E9", "#10B981"),
    problemsTitle: "Â¿Te pasa esto?",
    problems: [
      { title: "No ves resultados", text: "EntrenÃ¡s sin un plan claro y no avanzÃ¡s." },
      { title: "Falta de motivaciÃ³n", text: "Solo es difÃ­cil mantener la constancia." },
      { title: "No sabÃ©s quÃ© hacer", text: "NecesitÃ¡s guÃ­a profesional para entrenar bien." },
    ],
    solutionTitle: "Un lugar para transformarte",
    solutionText: "Contamos con todo lo que necesitÃ¡s para alcanzar tu mejor versiÃ³n.",
    solutionPoints: ["Equipamiento profesional", "Clases dirigidas", "AcompaÃ±amiento personalizado", "Ambiente motivador"],
    benefitsTitle: "Lo que vas a lograr",
    benefits: [
      { title: "Resultados reales", text: "EntrenÃ¡ con un plan que funciona." },
      { title: "Constancia", text: "El ambiente y la comunidad te mantienen motivado." },
      { title: "Salud y energÃ­a", text: "MejorÃ¡ tu calidad de vida desde hoy." },
    ],
    servicesTitle: "QuÃ© ofrecemos",
    servicesSubtitle: "Todo lo que necesitÃ¡s para entrenar bien.",
    services: [
      { title: "MusculaciÃ³n", description: "Equipamiento profesional para todos los niveles.", icon: "dumbbell" },
      { title: "Clases grupales", description: "Spinning, funcional, yoga y mÃ¡s.", icon: "users" },
      { title: "Entrenamiento funcional", description: "MejorÃ¡ tu fuerza y resistencia.", icon: "target" },
    ],
    processTitle: "CÃ³mo empezar",
    process: [
      { step: "01", title: "VenÃ­ a conocer", text: "RecorrÃ© el gimnasio y conocÃ© nuestras instalaciones." },
      { step: "02", title: "ElegÃ­ tu plan", text: "Te ayudamos a elegir el mejor plan para vos." },
      { step: "03", title: "EmpezÃ¡ a entrenar", text: "ComenzÃ¡ tu transformaciÃ³n con acompaÃ±amiento." },
    ],
    aboutTitle: "QuiÃ©nes somos",
    aboutName: "Iron Fitness",
    aboutRole: "Tu gimnasio de confianza",
    aboutText: "Somos un gimnasio comprometido con ayudarte a alcanzar tus objetivos. Contamos con equipamiento de primera y un equipo de profesionales listos para acompaÃ±arte.",
    aboutPoints: [
      { title: "Equipamiento profesional", text: "MÃ¡quinas y pesas de Ãºltima generaciÃ³n." },
      { title: "Ambiente motivador", text: "Una comunidad que te impulsa a dar mÃ¡s." },
    ],
    formTitle: "Quiero mÃ¡s clientes",
    formSubtitle: "Dejanos tus datos y te contactamos para arrancar.",
    finalCtaTitle: "EmpezÃ¡ tu transformaciÃ³n hoy",
    finalCtaText: "La primera semana es gratis. No hay excusas.",
    whatsappMessage: "Hola, quiero empezar a entrenar en Iron Fitness.",
    preview: previewSvg("Iron Fitness", "TransformÃ¡ tu cuerpo", "#111111", "#F97316"),
    profile: profileSvg("Iron Fitness", "Tu gimnasio de confianza"),
    primaryColor: "#111111",
    accentColor: "#F97316",
    testimonial: {
      name: "MartÃ­n G.",
      role: "Socio",
      text: "Desde que entreno acÃ¡ bajÃ© 8 kilos en 3 meses. El equipo es increÃ­ble.",
    },
  },
  emprendedores: {
    slug: "emprendedores",
    title: "PÃ¡gina web para emprendedores que venden servicios",
    heroTitle: "ConvertÃ­ tu idea en una landing que genera clientes",
    heroSubtitle: "MostrÃ¡ tu propuesta, explicÃ¡ tu mÃ©todo y facilitÃ¡ que te contacten sin vueltas.",
    heroCta: "Quiero mÃ¡s clientes",
    heroSecondaryCta: "Ver cÃ³mo funciona",
    heroBadge: "Emprendedores",
    heroPreviewTitle: "Tu propuesta en foco",
    heroPreviewSubtitle: "Claridad, autoridad y contacto directo.",
    heroImage: previewSvg("Optimizado", "Vista previa local", "#0EA5E9", "#10B981"),
    heroMockupImage: previewSvg("Optimizado", "Detalle local", "#0EA5E9", "#10B981"),
    problemsTitle: "Â¿Tu marca tiene estos problemas?",
    problems: [
      { title: "No se entiende tu oferta", text: "Si el mensaje no es claro, la gente se va sin preguntar." },
      { title: "DependÃ©s de redes sociales", text: "Sin una landing, cada consulta depende del feed." },
      { title: "Poca credibilidad", text: "Una web prolija ayuda a transmitir mÃ¡s valor en segundos." },
    ],
    solutionTitle: "Una landing que ordena tu propuesta",
    solutionText: "Mostramos lo que hacÃ©s, por quÃ© sos la mejor opciÃ³n y cÃ³mo contactarte rÃ¡pido.",
    solutionPoints: ["Oferta clara", "Prueba social", "CTA visible", "Seguimiento simple"],
    benefitsTitle: "Lo que vas a lograr",
    benefits: [
      { title: "MÃ¡s consultas", text: "ConvertÃ­ visitas en mensajes reales y oportunidades." },
      { title: "MÃ¡s autoridad", text: "Tu marca se ve mÃ¡s sÃ³lida y profesional." },
      { title: "MÃ¡s claridad", text: "Cada secciÃ³n guÃ­a hacia una decisiÃ³n simple." },
    ],
    servicesTitle: "QuÃ© incluye tu web",
    servicesSubtitle: "Todo lo que necesitÃ¡s para vender mejor tus servicios online.",
    services: [
      { title: "Hero con tu propuesta", description: "Mensaje claro sobre quÃ© hacÃ©s y para quiÃ©n.", icon: "image" },
      { title: "Servicios ordenados", description: "ExplicaciÃ³n simple de tu oferta y beneficios.", icon: "list" },
      { title: "Prueba social", description: "Testimonios y seÃ±ales de confianza para sumar credibilidad.", icon: "star" },
      { title: "Formulario de contacto", description: "Un CTA simple para cerrar el contacto sin fricciÃ³n.", icon: "form" },
    ],
    processTitle: "CÃ³mo trabajamos",
    process: [
      { step: "01", title: "Entendemos tu oferta", text: "Aterrizamos lo que vendÃ©s y cÃ³mo comunicarlo." },
      { step: "02", title: "DiseÃ±amos tu landing", text: "Creamos una pÃ¡gina que ordena y vende tu propuesta." },
      { step: "03", title: "Publicamos todo", text: "Tu web queda lista para recibir consultas." },
      { step: "04", title: "EmpezÃ¡s a vender mejor", text: "Tu marca se vuelve mÃ¡s clara y convincente." },
    ],
    aboutTitle: "QuiÃ©n estÃ¡ detrÃ¡s",
    aboutName: "LaunchMe",
    aboutRole: "Emprendimiento digital",
    aboutText: "Ayudo a emprendedores a transformar su propuesta en una landing clara, moderna y enfocada en ventas.",
    aboutPoints: [
      { title: "MÃ¡s claridad", text: "Explicar mejor tu oferta ayuda a convertir mejor." },
      { title: "MÃ¡s confianza", text: "El diseÃ±o acompaÃ±a la decisiÃ³n de contactarte." },
    ],
    formTitle: "PedÃ­ tu web para tu emprendimiento",
    formSubtitle: "Te respondo con una propuesta pensada para vender mejor.",
    finalCtaTitle: "EmpezÃ¡ a convertir visitas en clientes",
    finalCtaText: "Si querÃ©s una web simple, clara y pensada para vender, esta base te sirve para arrancar.",
    whatsappMessage: "Hola, quiero una web para mi emprendimiento que me ayude a vender mÃ¡s servicios.",
    preview: previewSvg("LaunchMe", "Autoridad, claridad y ventas", "#F59E0B", "#10B981"),
    profile: profileSvg("LaunchMe", "Emprendimiento digital"),
    primaryColor: "#0EA5E9",
    accentColor: "#F59E0B",
    testimonial: {
      name: "SofÃ­a R.",
      role: "Emprendedora digital",
      text: "La landing ordenÃ³ mi oferta y empecÃ© a recibir consultas mucho mÃ¡s calificadas.",
    },
  },
};

export const landingPageList = Object.values(landingPages);


