import { previewSvg, profileSvg } from "@/components/landing/landingVisuals";

export type LandingConfig = {
  slug: string;
  title: string;
  brandName: string;
  schedule: string;
  location: string;
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
  sectionImages?: string[];
  testimonial?: {
    name: string;
    role: string;
    text: string;
    avatar?: string;
  };
  testimonials?: Array<{
    name: string;
    role: string;
    text: string;
    avatar?: string;
  }>;
};

export const landingPages: Record<string, LandingConfig> = {
  gimnasio: {
    slug: "gimnasio",
    title: "FitMax Gym - Gimnasio en Villa Urquiza",
    brandName: "FitMax Gym",
    schedule: "Lun a Vie: 6:00 a 23:00 | Sáb: 8:00 a 20:00 | Dom: 9:00 a 14:00",
    location: "Av. Monroe 2847, Villa Urquiza, CABA",
    heroTitle: "Transformá tu cuerpo en FitMax Gym",
    heroSubtitle: "Más de 15 años entrenando en el barrio. musculación, clases grupales y entrenamiento personalizado. Primera clase gratis.",
    heroCta: "Quiero mi clase gratis",
    heroSecondaryCta: "Ver instalaciones",
    heroBadge: "El gimnasio del barrio",
    heroPreviewTitle: "Tu gimnasio de confianza",
    heroPreviewSubtitle: "Clases, horarios y reservas en un solo lugar.",
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
    aboutName: "Marcelo Gómez",
    aboutRole: "Dueño y Entrenador",
    aboutText: "Soy Marcelo, entreno hace más de 20 años y hace 15 abrí FitMax Gym en Villa Urquiza. Mi objetivo es que cada persona que pase por acá se sienta como en casa y vea resultados reales.",
    aboutPoints: [
      { title: "Más de 500 socios activos", text: "Una comunidad consolidada que crece día a día." },
      { title: "Entrenadores certificados", text: "Equipo profesional con experiencia y preparación." },
    ],
    formTitle: "Pedí tu web para tu gimnasio",
    formSubtitle: "Te respondo con una propuesta pensado para conseguir más alumnos.",
    finalCtaTitle: "Empezá a recibir nuevos alumnos hoy",
    finalCtaText: "Tu competencia ya está online. La diferencia es quién convierte mejor.",
    whatsappMessage: "Hola! Vi la web de FitMax Gym y quiero una web profesional para mi negocio. ¿Cómo我们可以 trabajar juntos?",
    preview: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&h=800&fit=crop&q=80",
    profile: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=500&fit=crop&q=80",
    primaryColor: "#0f172a",
    accentColor: "#22c55e",
    sectionImages: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1000&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1000&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1558611848-73f7eb50d72e?w=1000&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1000&h=600&fit=crop&q=80",
    ],
    testimonial: {
      name: "María González",
      role: "Socia desde 2021",
      text: "Entreno en FitMax hace 3 años y no me quiero ir a otro lado. El ambiente es excelente y los trainers siempre están pendientes.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80",
    },
    testimonials: [
      {
        name: "María González",
        role: "Socia desde 2021",
        text: "Entreno en FitMax hace 3 años y no me quiero ir a otro lado. El ambiente es excelente.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80",
      },
      {
        name: "Diego Fernández",
        role: "Socio desde 2019",
        text: "Bajé 15 kilos en 8 meses entrenando aquí. El equipo me acompaña en cada paso.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80",
      },
      {
        name: "Laura Ramírez",
        role: "Socia desde 2022",
        text: "Me encantó la variedad de clases. Hay de todo: functional, yoga, spinning.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=80",
      },
    ],
  },
  "personal-trainer": {
    slug: "personal-trainer",
    title: "Coach Martín - Personal Trainer en Palermo",
    brandName: "Coach Martín",
    schedule: "Lun a Sáb: 6:00 a 21:00 | Consultas online disponibles",
    location: "Zona Palermo, CABA (entrenamientos a domicilio y online)",
    heroTitle: "Entrená con Coach Martín",
    heroSubtitle: "Transformación físicareal con método personalizado. 10 años de experiencia. Récord: +200 clientes transformados. Primera evaluación gratis.",
    heroCta: "Quiero mi evaluación gratis",
    heroSecondaryCta: "Ver resultados",
    heroBadge: "Personal Trainer Palermo",
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
    aboutTitle: "Sobre Coach Martín",
    aboutName: "Martín Díaz",
    aboutRole: "Personal Trainer - CCPM Certified",
    aboutText: "Soy Martín, personal trainer con más de 10 años de experiencia. Me especializo en transformaciones físicas y entrenamiento funcional. Mi enfoque: resultados medibles y sostenibles.",
    aboutPoints: [
      { title: "+200 clientes transformados", text: "Una trayectoria que avala mi método." },
      { title: "Certificado CCPM", text: "Formación continua en entrenamiento y nutrición." },
    ],
    formTitle: "Pedí tu web como personal trainer",
    formSubtitle: "Te respondo con una propuesta pensada para conseguir más clientes.",
    finalCtaTitle: "Empezá a vender tu experiencia online",
    finalCtaText: "Tu competencia ya está construyendo presencia. Vos también podés convertir mejor.",
    whatsappMessage: "Hola! Vi la web de Coach Martín y quiero una web profesional para mi negocio. ¿Cómo podemos trabajar juntos?",
    preview: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&h=800&fit=crop&q=80",
    profile: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=500&fit=crop&q=80",
    primaryColor: "#0f172a",
    accentColor: "#f97316",
    sectionImages: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1000&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=1000&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1594381898411-846e3d133963?w=1000&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1000&h=600&fit=crop&q=80",
    ],
    testimonial: {
      name: "Carlos Rodríguez",
      role: "Cliente desde 2022",
      text: "Bajé 20 kilos en 10 meses entrenando con Martín. Nunca me sentí solo en el proceso.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&q=80",
    },
    testimonials: [
      {
        name: "Carlos Rodríguez",
        role: "Cliente desde 2022",
        text: "Bajé 20 kilos en 10 meses. Nunca me sentí solo en el proceso.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&q=80",
      },
      {
        name: "Julieta Vega",
        role: "Cliente desde 2021",
        text: "Nunca me habían dado tanta seguimiento. Martín está en cada detalle.",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&q=80",
      },
      {
        name: "Sebastián López",
        role: "Cliente desde 2023",
        text: "Gané masa muscular y bajé porcentaje de grasa. Resultados concretos.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&q=80",
      },
    ],
  },
  nutricionista: {
    slug: "nutricionista",
    title: "Lic. Sofía Herrera - Nutricionista en Recoleta",
    brandName: "NutriSo",
    schedule: "Lun a Vie: 9:00 a 19:00 | Sáb: 9:00 a 13:00",
    location: "Av. Santa Fe 1750, Recoleta, CABA (consultorio presencial y online)",
    heroTitle: "Nutrición personalizada con la Lic. Sofía Herrera",
    heroSubtitle: "Más de 8 años ayudando a personas a mejorar su relación con la comida. Especialidades: overweight, vegetarianismo y diabetes. Primera consulta sin cargo.",
    heroCta: "Reservar mi consulta",
    heroSecondaryCta: "Ver servicios",
    heroBadge: "Nutricionista Recoleta",
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
    aboutTitle: "Sobre la Lic. Herrera",
    aboutName: "Sofía Herrera",
    aboutRole: "Licenciada en Nutrición - MN 5842",
    aboutText: "Soy Sofía, licenciada en Nutrición con más de 8 años de experiencia. Me especialicé en tratamiento de overweight, vegetarianismo y diabetes. Mi enfoque: alimentación consciente sin restricciones extremas.",
    aboutPoints: [
      { title: "+800 pacientes atendidos", text: "Una trayectoria consolidada en Recoleta." },
      { title: "UBA Facultad de Medicina", text: "Formación de grado y posgrado en nutrición." },
    ],
    formTitle: "Pedí tu web para nutrición",
    formSubtitle: "Te respondo con una propuesta pensada para conseguir más pacientes.",
    finalCtaTitle: "Empezá a generar más consultas hoy",
    finalCtaText: "Tu consultorio puede estar online 24/7 generando turnos.",
    whatsappMessage: "Hola! Vi la web de NutriSo y quiero una web profesional para mi consultorio. ¿Cómo podemos trabajar juntos?",
    preview: "https://images.unsplash.com/photo-1576091160399-112ba8d42d21?w=1200&h=800&fit=crop&q=80",
    profile: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop&q=80",
    primaryColor: "#0f172a",
    accentColor: "#84cc16",
    sectionImages: [
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1000&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505576399279-565b52d4ac39?w=1000&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1000&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1000&h=600&fit=crop&q=80",
    ],
    testimonial: {
      name: "Laura Martínez",
      role: "Paciente desde 2021",
      text: "Perdí 12 kilos en 6 meses sin pasar hambre. Sofía me enseñó a comer de todo.",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&q=80",
    },
    testimonials: [
      {
        name: "Laura Martínez",
        role: "Paciente desde 2021",
        text: "Perdí 12 kilos sin pasar hambre. Me enseñó a comer de todo.",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&q=80",
      },
      {
        name: "Miguel Ángel Torres",
        role: "Paciente desde 2020",
        text: "Controlé mi diabetes con la dieta que me armó. Mi azúcar está estable.",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&q=80",
      },
      {
        name: "Valentina García",
        role: "Paciente desde 2022",
        text: "Me sentía agotada siempre. Ahora tengo energía para todo el día.",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&q=80",
      },
    ],
  },
  psicologo: {
    slug: "psicologo",
    title: "Psic. Andrea Castro - Psicoterapia en Belgrano",
    brandName: "Espacio Alicia",
    schedule: "Lun a Vie: 10:00 a 20:00 | Sáb: 10:00 a 15:00",
    location: "Av. Monroe 1850, Belgrano, CABA (consultorio presencial y online)",
    heroTitle: "Espacio Alicia - Psicoterapia en Belgrano",
    heroSubtitle: "Soy Andrea Castro, psicóloga con 12 años de experiencia. Te ayudo a encontrar respuestas en un espacio seguro y confidencial. Modalidad presencial y online.",
    heroCta: "Pedir turno",
    heroSecondaryCta: "Conocer el espacio",
    heroBadge: "Psicología Belgrano",
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
    aboutTitle: "Sobre Andrea",
    aboutName: "Andrea Castro",
    aboutRole: "Psicóloga - MN 32456",
    aboutText: "Soy Andrea, psicóloga especializada en terapia cognitivo-conductual y psicología positiva. Mi objetivo es acompañarte en tu proceso de crecimiento personal en un ambiente de absoluta confianza.",
    aboutPoints: [
      { title: "+600 pacientes atendidos", text: "Años de experiencia en consultorio privado." },
      { title: "Universidad de Buenos Aires", text: "Formación de grado y posgrado en psicología." },
    ],
    formTitle: "Pedí tu web para tu consultorio",
    formSubtitle: "Te respondo con una propuesta pensada para captar más pacientes.",
    finalCtaTitle: "Solicitá tu consulta hoy",
    finalCtaText: "Tu presencia online puede transmitir más confianza desde el primer momento.",
    whatsappMessage: "Hola! Vi la web de Espacio Alicia y quiero una web profesional para mi consultorio. ¿Cómo podemos trabajar juntos?",
    preview: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&h=800&fit=crop&q=80",
    profile: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop&q=80",
    primaryColor: "#0f172a",
    accentColor: "#8b5cf6",
    sectionImages: [
      "https://images.unsplash.com/photo-1527137342181-df9ad2f54c70?w=1000&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1000&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1000&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1549887534-7ef6f944d42c?w=1000&h=600&fit=crop&q=80",
    ],
    testimonial: {
      name: "Ana García",
      role: "Paciente desde 2020",
      text: "Encontré en Andrea un espacio seguro. La terapia me cambió la vida.",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&q=80",
    },
    testimonials: [
      {
        name: "Ana García",
        role: "Paciente desde 2020",
        text: "Encontré en Andrea un espacio seguro. La terapia me cambió la vida.",
        avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&q=80",
      },
      {
        name: "Roberto Sánchez",
        role: "Paciente desde 2021",
        text: "Aprendí a manejar la ansiedad. Ms herramientas que me sirven cada día.",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&q=80",
      },
      {
        name: "Carolina López",
        role: "Paciente desde 2022",
        text: "Andrea me ayudó a entender patrones que no veía. Trabaja con mucha calidez.",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&q=80",
      },
    ],
  },
  "estetica-corporal": {
    slug: "estetica-corporal",
    title: "Bella piel - Centro de Estética en Núñez",
    brandName: "Bella Piel Centro de Estética",
    schedule: "Lun a Sáb: 9:00 a 20:00",
    location: "Av. Cramer 2450, Núñez, CABA",
    heroTitle: "Bella Piel - Centro de Estética en Núñez",
    heroSubtitle: "Más de 15 años cuidando la belleza de mujeres en Núñez. Tratamientos faciales, corporales y depilación. Tu momento de relax en el barrio.",
    heroCta: "Reservar turno",
    heroSecondaryCta: "Ver tratamientos",
    heroBadge: "Estética en Núñez",
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
    aboutTitle: "Sobre Bella Piel",
    aboutName: "Patricia Solís",
    aboutRole: "Directora y Esteticista",
    aboutText: "Soy Patricia, fundador de Bella Piel. Desde hace 15 años mi misión es que cada clienta se sienta única. Somos un equipo de 4 profesionales apasionadas por la estética.",
    aboutPoints: [
      { title: "15 años en Núñez", text: "Una trayectoria consolidada en el barrio." },
      { title: "Equipo de 4 profesionales", text: "Esteticistas capacitadas en últimas técnicas." },
    ],
    formTitle: "Pedí tu web para estética",
    formSubtitle: "Te respondo con una propuesta pensado para conseguir más consultas.",
    finalCtaTitle: "Empezá a convertir mejor tu presencia online",
    finalCtaText: "Tu centro puede estar online 24/7 generando citas.",
    whatsappMessage: "Hola! Vi la web de Bella Piel Estética y quiero una web profesional para mi centro. ¿Cómo podemos trabajar juntos?",
    preview: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=1200&h=800&fit=crop&q=80",
    profile: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=500&fit=crop&q=80",
    primaryColor: "#0f172a",
    accentColor: "#ec4899",
    sectionImages: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1000&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1000&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1000&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=1000&h=600&fit=crop&q=80",
    ],
    testimonial: {
      name: "Sofia López",
      role: "Clienta desde 2019",
      text: "Voy todos los meses. El lugar es hermoso y siempre me voy rindomejor.",
      avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150&h=150&fit=crop&q=80",
    },
    testimonials: [
      {
        name: "Sofia López",
        role: "Clienta desde 2019",
        text: "Voy todos los meses. El lugar es hermoso y siempre me voy rindomejor.",
        avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150&h=150&fit=crop&q=80",
      },
      {
        name: "Mónica Herrera",
        role: "Clienta desde 2020",
        text: "Me hice el tratamiento facial y el resultado fue increíble. Patricia es única.",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&q=80",
      },
      {
        name: "Daniela Reyes",
        role: "Clienta desde 2021",
        text: "El mejor centro de estética del barrio. Siempre me atienden divino.",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&q=80",
      },
    ],
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
    title: "Casa de Comidas Don Julio - Delivery en Villa Crespo",
    brandName: "Don Julio Casa de Comidas",
    schedule: "Mar a Dom: 11:30 a 15:00 y 19:30 a 23:00 | Lun: cerrado",
    location: "Av. Scalabrini Ortiz 1234, Villa Crespo, CABA",
    heroTitle: "Don Julio - Comida casera Delivery",
    heroSubtitle: "Desde 1998 sirviendo la mejor comida casera en Villa Crespo. Carnes, pastas y guisos como los de antes. Delivery sin costo en zona.",
    heroCta: "Hacer pedido",
    heroSecondaryCta: "Ver menú",
    heroBadge: "Delivery Villa Crespo",
    heroPreviewTitle: "Tu marca online",
    heroPreviewSubtitle: "Claridad, autoridad y contacto directo.",
    heroImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&h=800&fit=crop&q=80",
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
    aboutTitle: "Sobre Don Julio",
    aboutName: "Julio Mendoza",
    aboutRole: "Dueño y Chef",
    aboutText: "Soy Julio, chef y fundador de Don Julio. Todo lo que sé lo aprendí de mi abuela y mi mamá. Hace más de 25 años cooking para el barrio con las recetas de siempre.",
    aboutPoints: [
      { title: "25 años en Villa Crespo", text: "Una tradición familiar que sigue creciendo." },
      { title: "Delivery sin cargo", text: "Enviamos a todo el barrio sin adicional." },
    ],
    formTitle: "Pedí tu web para tu emprendimiento",
    formSubtitle: "Te respondo con una propuesta pensado para vender mejor.",
    finalCtaTitle: "Empezá a convertir visitas en clientes",
    finalCtaText: "Tu emprendimiento puede estar online 24/7 generando consultas.",
    whatsappMessage: "Hola! Vi la web de Don Julio Comida Casera y quiero una web profesional para mi negocio. ¿Cómo podemos trabajar juntos?",
    preview: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop&q=80",
    profile: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&q=80",
    primaryColor: "#0f172a",
    accentColor: "#f59e0b",
    sectionImages: [
      "https://images.unsplash.com/photo-1553484771-371a605b060b?w=1000&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1000&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&h=600&fit=crop&q=80",
    ],
    testimonial: {
      name: "María Elena Soto",
      role: "Clienta hace 10 años",
      text: "Es la única comida que mis hijos come sin hacer tanto quilombo. Directamente mi salva-vidas.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=80",
    },
    testimonials: [
      {
        name: "María Elena Soto",
        role: "Clienta hace 10 años",
        text: "Es la única comida que mis hijos come sin hacer tanto quilombo. Directamente mi salva-vidas.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=80",
      },
      {
        name: "Fernando Gómez",
        role: "Cliente desde 2015",
        text: "El mejor asado delivery que probé. Siempre llega caliente y rico.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80",
      },
      {
        name: "Laura Pérez",
        role: "Clienta fiel",
        text: "Pedí para una fiesta de 20 personas y salió todo perfecto. Repetí 3 veces.",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&q=80",
      },
    ],
  },
};

export const landingPageList = Object.values(landingPages);
