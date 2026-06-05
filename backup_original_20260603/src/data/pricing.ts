export type PricingPlan = {
  name: string;
  badge: string;
  audience: string;
  includes: string[];
  excludes: string[];
  delivery: string;
  price: string;
  cta: string;
};

export type PricingFaq = {
  question: string;
  answer: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Consulta Clara",
    badge: "Entrada inteligente",
    audience:
      "Para profesionales que quieren una primera presencia comercial sólida, clara y pensada para convertir visitas en consultas.",
    includes: [
      "Mensaje principal orientado a consultas reales, no a decorar la página",
      "Estructura clara para explicar qué hacés y por qué elegirte",
      "Botones de WhatsApp y contacto ubicados donde más ayudan a decidir",
      "Formulario simple para capturar consultas sin fricción innecesaria",
      "Secciones de confianza para reforzar seriedad desde el primer impacto",
      "Texto base con tono profesional y foco comercial",
    ],
    excludes: [
      "No incluye branding desde cero ni redefinición completa de identidad visual",
      "No incluye pauta paga ni gestión de campañas",
      "No incluye blog, automatizaciones complejas ni e-commerce",
      "No incluye carga masiva de contenido ni producción fotográfica",
    ],
    delivery: "Entrega estimada: 7 a 10 días hábiles",
    price: "AR$ 690.000",
    cta: "Quiero ordenar mis consultas",
  },
  {
    name: "Agenda Activa",
    badge: "Más elegido",
    audience:
      "Para negocios de servicios que ya venden y necesitan una web más robusta para elevar la calidad de las consultas.",
    includes: [
      "Home estratégica con propuesta clara y foco comercial",
      "Hasta 5 secciones o páginas diseñadas para explicar, convencer y cerrar",
      "Redacción de beneficios y objeciones frecuentes en lenguaje simple",
      "Bloques de prueba social para aumentar confianza y bajar fricción",
      "Optimización SEO on-page base para empezar a posicionar bien",
      "Integración visible con WhatsApp, formulario y llamados a la acción",
      "Revisión guiada para ajustar el mensaje antes de salir online",
    ],
    excludes: [
      "No incluye posicionamiento SEO mensual ni link building",
      "No incluye fotografía profesional ni producción audiovisual",
      "No incluye blog continuo con calendario editorial",
      "No incluye funcionalidades avanzadas como reservas o área privada",
    ],
    delivery: "Entrega estimada: 12 a 18 días hábiles",
    price: "AR$ 1.290.000",
    cta: "Quiero una web que convierta",
  },
  {
    name: "Autoridad que Cierra",
    badge: "Recomendado para escalar",
    audience:
      "Para profesionales y negocios de servicios que necesitan una presencia premium, más autoridad y una propuesta difícil de comparar por precio.",
    includes: [
      "Estrategia de contenido y estructura comercial antes del diseño",
      "Landing o sitio multipágina con narrativa de venta completa",
      "Copywriting persuasivo para servicios, casos y preguntas frecuentes",
      "Sistema de confianza con testimonios, garantías y objeciones resueltas",
      "SEO on-page más profundo para competir en búsquedas más exigentes",
      "Ajustes de conversión post-publicación para afinar el mensaje",
      "Soporte de lanzamiento para salir online con mayor control",
    ],
    excludes: [
      "No incluye campañas de anuncios ni gestión mensual de pauta",
      "No incluye mantenimiento continuo ni soporte ilimitado",
      "No incluye desarrollo de funcionalidades tipo SaaS o producto complejo",
      "No incluye carga constante de contenidos nuevos",
    ],
    delivery: "Entrega estimada: 20 a 30 días hábiles",
    price: "AR$ 2.390.000",
    cta: "Quiero una propuesta premium",
  },
];

export const pricingFaq: PricingFaq[] = [
  {
    question: "¿Puedo editar la web yo solo?",
    answer:
      "Sí, cuando el alcance lo permite dejamos una estructura simple para que puedas cambiar textos básicos sin depender de nadie. Si necesitás autonomía total, se define desde el inicio.",
  },
  {
    question: "¿Qué pasa si no me gusta?",
    answer:
      "Trabajamos con una instancia de validación antes de avanzar. Si algo no encaja, ajustamos el rumbo en esa etapa para evitar llegar a una entrega que no represente tu negocio.",
  },
  {
    question: "¿Cuánto tarda en estar lista?",
    answer:
      "Depende del plan y de qué tan ordenado tengas el contenido. En general, una landing sale en 7 a 10 días hábiles y un sitio más completo entre 12 y 30 días.",
  },
  {
    question: "¿Incluye textos e imágenes?",
    answer:
      "Incluye la redacción comercial base y la estructura del mensaje. Las imágenes pueden salir de tu material, de bancos licenciados o de una selección curada según el plan.",
  },
  {
    question: "¿El precio incluye dominio, hosting y mantenimiento?",
    answer:
      "No por defecto. Preferimos separar el desarrollo del costo operativo para que sepas exactamente qué estás pagando. Si querés, lo cotizamos como parte del paquete.",
  },
];

export const pricingGuarantee = {
  title: "Garantía de claridad comercial",
  body:
    "Si dentro de los 15 días posteriores a la entrega sentís que la web no comunica con claridad lo que hacés, hacemos una ronda extra de ajustes sin costo para alinear mensaje, jerarquía y conversión.",
};
