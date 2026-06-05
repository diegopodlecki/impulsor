export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    badge: "Perfecta para empezar",
    audience:
      "Para personal trainers que quieren automatizar consultas básicas y agendar clientes sin intermediarios.",
    includes: [
      "Respuestas automáticas a preguntas frecuentes",
      "Envío automático de tarifas y especialidades",
      "Agendamiento directo a Google Calendar",
      "Confirmación automática de turnos",
      "Estadísticas básicas de consultas recibidas",
      "Soporte por email",
    ],
    excludes: [
      "No incluye recordatorios automáticos",
      "No incluye múltiples bots o gimnasios",
      "No incluye integraciones avanzadas",
      "No incluye API personalizada",
    ],
    delivery: "Activo en menos de 1 hora",
    price: "$40/mes",
    cta: "Empezar gratis 7 días",
  },
  {
    name: "Pro",
    badge: "Más elegido",
    audience:
      "Para trainers con más clientes que necesitan automatización completa + recordatorios + estadísticas detalladas.",
    includes: [
      "Todo de Starter +",
      "Recordatorios automáticos 24h antes",
      "Seguimiento de no-shows",
      "Estadísticas detalladas (conversión, horarios populares, etc)",
      "Múltiples consultas simultaneas",
      "Soporte prioritario por WhatsApp",
      "Actualizaciones sin costo",
    ],
    excludes: [
      "No incluye integración con sistemas de pago",
      "No incluye múltiples gimnasios (1 bot por plan)",
      "No incluye API custom",
    ],
    delivery: "Activo en menos de 1 hora",
    price: "$70/mes",
    cta: "Prueba Pro 7 días gratis",
  },
  {
    name: "Enterprise",
    badge: "Para cadenas y gimnasios",
    audience:
      "Para gimnasios, cadenas de PTs o emprendimientos que necesitan múltiples bots, integraciones complejas y soporte dedicado.",
    includes: [
      "Todo de Pro +",
      "Múltiples bots/gimnasios",
      "Integración con sistemas de pago",
      "API personalizada",
      "Dashboard personalizado",
      "Soporte 24/7 dedicado",
      "Entrenamiento del equipo",
      "Funcionalidades custom bajo demanda",
    ],
    excludes: [
      "No incluye garantías de uptime por debajo de 99.5%",
    ],
    delivery: "Consulta personalizada",
    price: "$120/mes",
    cta: "Solicitar demo Enterprise",
  },
];

/**
 * PREGUNTAS FRECUENTES - SaaS BOT
 * Reemplaza el array pricingFaq COMPLETO con este
 */

export const pricingFaq: PricingFaq[] = [
  {
    question: "¿Cuánto tarda en estar funcionando?",
    answer:
      "Menos de 1 hora. Conectas tu WhatsApp, configuras respuestas y tus horarios. Listo. El bot empieza a trabajar inmediatamente.",
  },
  {
    question: "¿Necesito saber de programación?",
    answer:
      "No. Interfaz simple y visual. Si puedes usar WhatsApp, puedes configurar el bot. Cualquier duda, nuestro equipo te guía.",
  },
  {
    question: "¿Puedo cambiar de plan cuando quiera?",
    answer:
      "Sí. Cambias en cualquier momento. Si subes de plan, se prorratea. Si bajas, el cambio aplica la próxima facturación.",
  },
  {
    question: "¿Qué pasa si cancelo?",
    answer:
      "Cancelas sin problema. Sin penalidad, sin contrato atrapado. Tu bot sigue funcionando hasta fin de mes. Tus datos quedan disponibles.",
  },
  {
    question: "¿Los datos de mis clientes están seguros?",
    answer:
      "100% seguros. Cumplimos con LGPD y normas de privacidad. Tus datos no se venden ni comparten. Está entre vos y nosotros.",
  },
  {
    question: "¿Incluye agendamiento en Google Calendar?",
    answer:
      "Sí, en todos los planes. El cliente elige horario → Se agrega automáticamente a tu calendario → Vos ves el turno confirmado.",
  },
  {
    question: "¿Puedo usar el bot en múltiples números de WhatsApp?",
    answer:
      "Depende del plan. Starter y Pro son 1 bot. Enterprise permite múltiples bots/gimnasios.",
  },
  {
    question: "¿Cómo me contactan los clientes?",
    answer:
      "Directo a tu número de WhatsApp personal. El bot responde desde tu número, así que tu cliente ve que le escribiste vos.",
  },
];

/**
 * GARANTÍA
 * Reemplaza pricingGuarantee COMPLETO con este
 */

export const pricingGuarantee = {
  title: "Garantía: Funciona o dinero devuelto",
  body:
    "Prueba gratis 7 días. Si en ese tiempo el bot no te ahorra 2+ horas de WhatsApp, devolvemos tu dinero. Sin preguntas.",
};
