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
    heroTitle: "LlenÃ¡ tu gimnasio con una web que atrae alumnos",
    heroSubtitle: "MostrÃ¡ tus instalaciones, tus clases y recibÃ­ consultas todos los dÃ­as.",
    heroCta: "Quiero mÃ¡s alumnos",
    heroSecondaryCta: "Quiero ver ejemplos",
    heroBadge: "Pensada para gimnasios",
    heroPreviewTitle: "Tu gimnasio con mÃ¡s inscripciones",
    heroPreviewSubtitle: "Clases, horarios y reservas desde un mismo lugar.",
    heroImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
    problemsTitle: "Â¿QuÃ© te estÃ¡ frenando?",
    problems: [
      { title: "Pocos alumnos nuevos", text: "Tu web debe ayudar a convertir visitas en inscripciones." },
      { title: "Dependencia de Instagram", text: "No todo deberÃ­a depender de un post o una historia." },
      { title: "Falta de profesionalismo online", text: "Si tu presencia digital no acompaÃ±a, perdÃ©s oportunidades." },
    ],
    solutionTitle: "Tu web mostrando todo lo que vende",
    solutionText: "Ponemos en primer plano lo que mÃ¡s le importa a quien estÃ¡ por elegir tu gimnasio.",
    solutionPoints: ["Clases", "Horarios", "Instalaciones", "Planes"],
    benefitsTitle: "Lo que vas a lograr",
    benefits: [
      { title: "MÃ¡s inscripciones", text: "Una pÃ¡gina que invita a consultar y cerrar una clase." },
      { title: "Mejor imagen", text: "Tu gimnasio se ve serio, moderno y profesional." },
      { title: "Consultas automÃ¡ticas", text: "Tu sitio trabaja incluso cuando vos estÃ¡s ocupado." },
    ],
    processTitle: "AsÃ­ trabajamos",
    process: [
      { step: "01", title: "Analizamos tu gimnasio", text: "Entendemos tu propuesta, tus clases y el perfil de tus alumnos." },
      { step: "02", title: "DiseÃ±amos la landing", text: "Armamos una web clara, rÃ¡pida y enfocada en consultas." },
      { step: "03", title: "La publicamos", text: "Dejamos todo listo para empezar a recibir contactos." },
      { step: "04", title: "MedÃ­s resultados", text: "La web queda lista para seguir vendiendo 24/7." },
    ],
    aboutTitle: "QuiÃ©n estÃ¡ detrÃ¡s",
    aboutName: "Diego Podlecki",
    aboutRole: "DiseÃ±o web enfocado en resultados",
    aboutText:
      "DiseÃ±o pÃ¡ginas para negocios que necesitan mÃ¡s alumnos, mÃ¡s consultas y una presencia digital que realmente venda.",
    aboutPoints: [
      { title: "Enfoque comercial", text: "Cada bloque estÃ¡ pensado para generar acciÃ³n." },
      { title: "DiseÃ±o simple", text: "Menos ruido visual, mÃ¡s claridad para decidir." },
    ],
    formTitle: "PedÃ­ tu web para tu gimnasio",
    formSubtitle: "Te respondo con una propuesta pensada para ayudarte a conseguir mÃ¡s alumnos.",
    finalCtaTitle: "EmpezÃ¡ a recibir nuevos alumnos hoy",
    finalCtaText: "Tu competencia ya estÃ¡ online. La diferencia es quiÃ©n convierte mejor.",
    whatsappMessage: "Hola, quiero una web para mi gimnasio que me consiga mÃ¡s consultas e inscripciones.",
    preview: previewSvg("Gimnasio", "Clases, horarios y reservas", "#22c55e", "#06b6d4"),
    profile: profileSvg("Diego Podlecki", "DiseÃ±o web enfocado en resultados"),
  },
  "personal-trainers": {
    slug: "personal-trainers",
    title: "Personal Trainers",
    heroTitle: "ConvertÃ­ tu experiencia en mÃ¡s clientes",
    heroSubtitle: "MostrÃ¡ tu mÃ©todo, tus planes y por quÃ© sos la persona correcta para entrenar a tus alumnos.",
    heroCta: "Quiero mÃ¡s clientes",
    heroSecondaryCta: "Quiero ver ejemplos",
    heroBadge: "Pensada para entrenadores",
    heroPreviewTitle: "Tu marca personal vendiendo mejor",
    heroPreviewSubtitle: "Rutinas, testimonios y planes en una sola landing.",
    heroImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    problemsTitle: "Â¿QuÃ© te estÃ¡ frenando?",
    problems: [
      { title: "No destacarte", text: "Si tu propuesta no se entiende rÃ¡pido, te comparan solo por precio." },
      { title: "Depender solo de redes", text: "Tu contenido puede gustar, pero no siempre convierte en mensajes." },
      { title: "Falta de sistema de ventas", text: "NecesitÃ¡s una web que ordene la decisiÃ³n del cliente." },
    ],
    solutionTitle: "Una web que explica tu valor",
    solutionText: "Tu landing debe mostrar por quÃ© entrenar con vos puede cambiar resultados.",
    solutionPoints: ["Rutinas", "Testimonios", "Planes", "Resultados"],
    benefitsTitle: "Lo que vas a lograr",
    benefits: [
      { title: "MÃ¡s clientes", text: "MÃ¡s personas te escriben para entrenar con vos." },
      { title: "Marca personal fuerte", text: "Tu perfil se percibe mÃ¡s profesional y mÃ¡s claro." },
      { title: "Ventas constantes", text: "No dependÃ©s solo de publicar todos los dÃ­as." },
    ],
    processTitle: "AsÃ­ trabajamos",
    process: [
      { step: "01", title: "Escuchamos tu propuesta", text: "Definimos a quiÃ©n querÃ©s atraer y cÃ³mo querÃ©s posicionarte." },
      { step: "02", title: "DiseÃ±amos la web", text: "Armamos una landing orientada a convertir consultas." },
      { step: "03", title: "La dejamos lista", text: "Todo queda preparado para empezar a recibir mensajes." },
      { step: "04", title: "SeguÃ­s creciendo", text: "Tu web acompaÃ±a tu marca personal y tus ventas." },
    ],
    aboutTitle: "QuiÃ©n estÃ¡ detrÃ¡s",
    aboutName: "Diego Podlecki",
    aboutRole: "DiseÃ±o web enfocado en resultados",
    aboutText:
      "Ayudo a profesionales que venden conocimiento y confianza a convertir mejor su presencia online en consultas reales.",
    aboutPoints: [
      { title: "Claridad", text: "El usuario entiende rÃ¡pido quÃ© ofrecÃ©s." },
      { title: "ConversiÃ³n", text: "Cada bloque guÃ­a hacia el contacto." },
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
    title: "Nutricionistas",
    heroTitle: "GenerÃ¡ mÃ¡s consultas con una web profesional",
    heroSubtitle: "ExplicÃ¡ tu forma de trabajar, mostrÃ  tus servicios y hacÃ© que te contacten con mÃ¡s confianza.",
    heroCta: "Quiero mÃ¡s consultas",
    heroSecondaryCta: "Quiero ver ejemplos",
    heroBadge: "Pensada para nutriciÃ³n",
    heroPreviewTitle: "Tu consultorio mÃ¡s claro y confiable",
    heroPreviewSubtitle: "Servicios, informaciÃ³n y contacto directo.",
    heroImage: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80",
    problemsTitle: "Â¿QuÃ© te estÃ¡ frenando?",
    problems: [
      { title: "Falta de confianza online", text: "Si tu web no transmite profesionalismo, cuesta agendar." },
      { title: "Poca visibilidad", text: "NecesitÃ¡s una presencia clara para no depender solo de referencias." },
      { title: "DifÃ­cil captar pacientes", text: "La informaciÃ³n debe ser simple para convertir visitas en consultas." },
    ],
    solutionTitle: "Una web que ordena y simplifica",
    solutionText: "MostrÃ¡ tu enfoque, aclarÃ¡s dudas y abrÃ­s una puerta directa al contacto.",
    solutionPoints: ["Servicios", "InformaciÃ³n clara", "Contacto directo", "Seguimiento"],
    benefitsTitle: "Lo que vas a lograr",
    benefits: [
      { title: "MÃ¡s pacientes", text: "MÃ¡s personas entienden tu propuesta y se animan a escribirte." },
      { title: "Autoridad profesional", text: "Tu consultorio se ve mÃ¡s sÃ³lido y confiable." },
      { title: "Mejor conversiÃ³n", text: "La persona sabe quÃ© hacer apenas entra a tu web." },
    ],
    processTitle: "AsÃ­ trabajamos",
    process: [
      { step: "01", title: "Entendemos tu servicio", text: "Aterrizamos tu propuesta para que la entienda cualquier persona." },
      { step: "02", title: "DiseÃ±amos la landing", text: "Creamos una web limpia, clara y enfocada en consultas." },
      { step: "03", title: "La publicamos", text: "Dejamos la web lista para generar contactos." },
      { step: "04", title: "Empiezan los mensajes", text: "Tu presencia online empieza a trabajar por vos." },
    ],
    aboutTitle: "QuiÃ©n estÃ¡ detrÃ¡s",
    aboutName: "Diego Podlecki",
    aboutRole: "DiseÃ±o web enfocado en resultados",
    aboutText:
      "Trabajo con negocios y profesionales que necesitan una presencia online que genere consultas reales y no solo visitas.",
    aboutPoints: [
      { title: "MÃ¡s claridad", text: "Explicar bien tu servicio ayuda a vender mejor." },
      { title: "MÃ¡s confianza", text: "El diseÃ±o acompaÃ±a la decisiÃ³n de contactar." },
    ],
    formTitle: "PedÃ­ tu web para nutriciÃ³n",
    formSubtitle: "Te respondo con una propuesta pensada para conseguir mÃ¡s consultas.",
    finalCtaTitle: "EmpezÃ¡ a generar mÃ¡s consultas hoy",
    finalCtaText: "Si querÃ©s una web que convierta, esta es una buena base para empezar.",
    whatsappMessage: "Hola, quiero una web para mi consultorio de nutriciÃ³n y atraer mÃ¡s pacientes.",
    preview: previewSvg("Nutricionista", "Planes, hÃ¡bitos y seguimiento", "#84cc16", "#22c55e"),
    profile: profileSvg("Diego Podlecki", "DiseÃ±o web enfocado en resultados"),
  },
  psicologos: {
    slug: "psicologos",
    title: "PsicÃ³logos",
    heroTitle: "TransmitÃ­ confianza desde el primer clic",
    heroSubtitle: "Una web clara, cÃ¡lida y profesional ayuda a que la persona se anime a dar el siguiente paso.",
    heroCta: "Solicitar consulta",
    heroSecondaryCta: "Quiero ver ejemplos",
    heroBadge: "Pensada para psicologÃ­a",
    heroPreviewTitle: "Tu consultorio generando confianza",
    heroPreviewSubtitle: "Calma, empatÃ­a y contacto directo.",
    heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    problemsTitle: "Â¿QuÃ© te estÃ¡ frenando?",
    problems: [
      { title: "Dificultad para generar confianza online", text: "Si la web no transmite seguridad, cuesta dar el paso." },
      { title: "Poca presencia digital", text: "Sin una presencia clara, tu servicio pasa desapercibido." },
    ],
    solutionTitle: "Una web clara, cÃ¡lida y profesional",
    solutionText: "La estructura estÃ¡ pensada para explicar tu forma de trabajar, mostrar tu valor y facilitar el contacto directo.",
    solutionPoints: ["Calma", "Claridad", "Contacto directo", "Confianza"],
    benefitsTitle: "Lo que vas a lograr",
    benefits: [
      { title: "MÃ¡s consultas", text: "MÃ¡s personas se animan a escribirte con confianza." },
      { title: "Imagen profesional", text: "Tu prÃ¡ctica se ve seria, clara y cercana." },
      { title: "Contacto simple", text: "La persona entiende cÃ³mo agendar sin vueltas." },
    ],
    processTitle: "AsÃ­ trabajamos",
    process: [
      { step: "01", title: "Analizamos tu enfoque", text: "Entendemos quÃ© necesitÃ¡s comunicar para generar confianza." },
      { step: "02", title: "DiseÃ±amos la landing", text: "Armamos una web sobria, cÃ¡lida y orientada a consultas." },
      { step: "03", title: "La publicamos", text: "Dejamos todo listo para recibir contactos." },
      { step: "04", title: "Llega mÃ¡s gente", text: "Tu sitio empieza a trabajar como una puerta de entrada confiable." },
    ],
    aboutTitle: "QuiÃ©n estÃ¡ detrÃ¡s",
    aboutName: "Diego Podlecki",
    aboutRole: "DiseÃ±o web enfocado en resultados",
    aboutText:
      "DiseÃ±o pÃ¡ginas para profesionales que necesitan transmitir confianza, claridad y una propuesta que invite a escribir.",
    aboutPoints: [
      { title: "Enfoque humano", text: "La web acompaÃ±a la experiencia de quien estÃ¡ buscando ayuda." },
      { title: "DecisiÃ³n fÃ¡cil", text: "Menos fricciÃ³n, mÃ¡s claridad y mÃ¡s consultas." },
    ],
    formTitle: "PedÃ­ tu web para tu consultorio",
    formSubtitle: "Te respondo con una propuesta pensada para ayudar a convertir visitas en consultas.",
    finalCtaTitle: "SolicitÃ¡ tu consulta hoy",
    finalCtaText: "Tu presencia online puede transmitir mÃ¡s confianza desde el primer momento.",
    whatsappMessage: "Hola, quiero una web para mi consultorio de psicologÃ­a y agendar mÃ¡s turnos.",
    preview: previewSvg("PsicologÃ­a", "Calma, empatÃ­a y turnos", "#3b82f6", "#0ea5e9"),
    profile: profileSvg("Diego Podlecki", "DiseÃ±o web enfocado en resultados"),
  },
  "estetica-corporal": {
    slug: "estetica-corporal",
    title: "EstÃ©tica corporal",
    heroTitle: "MostrÃ¡ tu propuesta premium y generÃ¡ mÃ¡s consultas",
    heroSubtitle: "Una web elegante puede ayudarte a comunicar valor, confianza y deseo de agendar.",
    heroCta: "Quiero mÃ¡s consultas",
    heroSecondaryCta: "Quiero ver ejemplos",
    heroBadge: "Pensada para estÃ©tica",
    heroPreviewTitle: "Tu marca con una presencia mÃ¡s premium",
    heroPreviewSubtitle: "Visual, elegante y enfocada en ventas.",
    heroImage: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
    problemsTitle: "Â¿QuÃ© te estÃ¡ frenando?",
    problems: [
      { title: "Falta de impacto visual", text: "Si la web no se ve premium, cuesta destacar el servicio." },
      { title: "Pocas consultas", text: "NecesitÃ¡s una propuesta clara que lleve a la acciÃ³n." },
      { title: "Competencia mÃ¡s visible", text: "Tu presencia online tiene que ayudar a convertir mejor." },
    ],
    solutionTitle: "Una web que vende tu propuesta",
    solutionText: "Presentamos tus tratamientos con una estructura que resalta valor, confianza y contacto.",
    solutionPoints: ["Tratamientos", "Antes y despuÃ©s", "Contacto directo", "Confianza"],
    benefitsTitle: "Lo que vas a lograr",
    benefits: [
      { title: "MÃ¡s consultas", text: "MÃ¡s personas te escriben interesadas en tus servicios." },
      { title: "Imagen premium", text: "Tu marca se percibe mÃ¡s cuidada y profesional." },
      { title: "Mejor conversiÃ³n", text: "La web guÃ­a a la persona hacia el contacto sin distracciones." },
    ],
    processTitle: "AsÃ­ trabajamos",
    process: [
      { step: "01", title: "Entendemos tu marca", text: "Definimos el estilo y la propuesta que querÃ©s comunicar." },
      { step: "02", title: "DiseÃ±amos la landing", text: "Creamos una web visual, clara y enfocada en consultas." },
      { step: "03", title: "La dejamos lista", text: "Todo queda preparado para captar interesados." },
      { step: "04", title: "Empiezan las consultas", text: "Tu presencia online empieza a trabajar por vos." },
    ],
    aboutTitle: "QuiÃ©n estÃ¡ detrÃ¡s",
    aboutName: "Diego Podlecki",
    aboutRole: "DiseÃ±o web enfocado en resultados",
    aboutText:
      "Ayudo a servicios que dependen de la confianza y la percepciÃ³n visual a mostrar mejor su valor y vender mÃ¡s.",
    aboutPoints: [
      { title: "MÃ¡s claridad", text: "Mostrar bien el servicio vende mÃ¡s que solo describirlo." },
      { title: "MÃ¡s deseo", text: "Una web premium ayuda a elevar el valor percibido." },
    ],
    formTitle: "PedÃ­ tu web para estÃ©tica corporal",
    formSubtitle: "Te respondo con una propuesta pensada para conseguir mÃ¡s consultas.",
    finalCtaTitle: "EmpezÃ¡ a convertir mejor tu presencia online",
    finalCtaText: "Si querÃ©s una web mÃ¡s premium y mÃ¡s comercial, esta base te ayuda a despegar.",
    whatsappMessage: "Hola, quiero una web para estÃ©tica corporal que me ayude a vender mÃ¡s tratamientos.",
    preview: previewSvg("EstÃ©tica corporal", "Premium, visual y elegante", "#ec4899", "#f97316"),
    profile: profileSvg("Diego Podlecki", "DiseÃ±o web enfocado en resultados"),
  },
};

export const landingPageList = Object.values(landingPages);

