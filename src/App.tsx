/* eslint-disable react-refresh/only-export-components */
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import type { RouteRecord } from "vite-react-ssg";

import { SeoHead } from "@/components/SEO/SeoHead";
import { Toaster } from "@/components/ui/sonner.tsx";
import { WhatsAppDemo, type WhatsAppDemoMessage } from "@/components/WhatsAppDemo";
import { HomePage } from "@/components/home/HomePage";

const webhookUrl = "https://hook.us2.make.com/5c7xu0k7crcpkg1eeclb395duigmvn14";

const heroWhatsAppMessages: WhatsAppDemoMessage[] = [
  {
    from: "user",
    text: "Hola, vi la web y quiero saber si automatizan WhatsApp para turnos y seguimiento.",
    delay: 1600,
  },
  {
    from: "bot",
    text: "Sí, claro. Automatizamos respuestas, presupuestos y turnos para que no pierdas consultas.",
    delay: 1900,
  },
  {
    from: "bot",
    text: "Tengo disponibles martes, miércoles y viernes. ¿Cuál te queda mejor?",
    delay: 1700,
    options: ["Miércoles 14:30", "Viernes 18:00"],
  },
  {
    from: "user",
    text: "Perfecto, el miércoles me sirve.",
    delay: 1500,
  },
  {
    from: "bot",
    text: "Listo. Ya quedó reservado y te enviamos recordatorio automático.",
    delay: 2000,
  },
];

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <HomePage webhookUrl={webhookUrl} messages={heroWhatsAppMessages} />,
  },
  {
    path: "/odontologos",
    element: <NicheLanding nicheKey="odontologos" />,
  },
  {
    path: "/medicos",
    element: <NicheLanding nicheKey="medicos" />,
  },
  {
    path: "/fonoaudiologos",
    element: <NicheLanding nicheKey="fonoaudiologos" />,
  },
  {
    path: "/abogados",
    element: <NicheLanding nicheKey="abogados" />,
  },
  {
    path: "/inmobiliarias",
    element: <NicheLanding nicheKey="inmobiliarias" />,
  },
  {
    path: "/nutricionistas",
    element: <NicheLanding nicheKey="nutricionistas" />,
  },
];

type NicheKey = "odontologos" | "medicos" | "fonoaudiologos" | "abogados" | "inmobiliarias" | "nutricionistas";

type NicheTheme = {
  pageBg: string;
  hero: string;
  font: string;
  title: string;
  body: string;
  accent: string;
  accentSoft: string;
  accentBorder: string;
  accentLine: string;
  dot: string;
  sectionBg: string;
  sectionBgAlt: string;
  sectionBgMuted: string;
  surface: string;
  surfaceStrong: string;
  ctaFrom: string;
  ctaTo: string;
  ctaPanel: string;
  badgeText: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
};

type NicheShowcase = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  caption: string;
  reverse?: boolean;
};

const nicheData: Record<
  NicheKey,
  {
    title: string;
    description: string;
    problem: string;
    benefits: string[];
    conversation: { client: string; assistant: string; followUp: string; close: string };
    theme?: Partial<NicheTheme>;
    showcase?: NicheShowcase;
  }
> = {
  odontologos: {
    title: "Automatización de WhatsApp para odontólogos en Argentina",
    description: "Respondé consultas, coordiná turnos y enviá recordatorios con un asistente de WhatsApp diseñado para consultorios odontológicos y clínicas dentales en Argentina.",
    problem: "Las consultas por WhatsApp suelen llegar entre tratamientos, llamadas y pacientes en sala. Si nadie responde a tiempo, el interés se enfría y el turno se pierde.",
    benefits: [
      "Respuestas automáticas para primeras consultas, urgencias y derivaciones.",
      "Confirmación de turnos y recordatorios automáticos antes de la cita.",
      "Menos tiempo respondiendo precios, cobertura, dirección y horarios.",
    ],
    conversation: {
      client: "Hola, ¿tienen turno para una limpieza dental esta semana?",
      assistant: "Sí, claro. Te paso los horarios disponibles y te dejo el que mejor encaje con tu agenda.",
      followUp: "Te quedó confirmado el jueves a las 16:00. También te llega un recordatorio automático.",
      close: "Perfecto, así no tengo que estar pendiente del chat.",
    },
    theme: {
      pageBg: "bg-[#06111b]",
      hero: "bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(125,211,252,0.09),transparent_22%),linear-gradient(180deg,rgba(3,7,18,0.98),rgba(3,7,18,1))]",
      font: "font-sans",
      title: "font-heading font-extrabold tracking-[-0.04em]",
      body: "font-normal",
      accent: "text-sky-200",
      accentSoft: "bg-sky-500/10",
      accentBorder: "border-sky-400/20",
      accentLine: "bg-gradient-to-r from-sky-400/60 to-transparent",
      dot: "bg-sky-400",
      sectionBg: "bg-[#081520]",
      sectionBgAlt: "bg-[#0b1723]",
      sectionBgMuted: "bg-[#09111a]",
      surface: "bg-white/[0.035]",
      surfaceStrong: "bg-white/[0.045]",
      ctaFrom: "from-sky-500",
      ctaTo: "to-cyan-500",
      ctaPanel: "bg-[linear-gradient(180deg,rgba(14,165,233,0.09),rgba(255,255,255,0.02))]",
      badgeText: "Consultorios dentales",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Odontóloga atendiendo una consulta mientras responde WhatsApp en un consultorio moderno",
      imageCaption: "Una experiencia premium para ordenar consultas, transmitir confianza y reducir fricción.",
    },
    showcase: {
      eyebrow: "Recepción premium",
      title: "Una clínica que ordena la atención con una experiencia más cuidada y premium",
      description:
        "Pensado para consultorios que quieren transmitir más calidad visual, menos fricción y una atención más precisa desde el primer contacto.",
      bullets: [
        "Consulta inicial con respuesta rápida",
        "Turnos confirmados y mejor seguimiento",
        "Más orden sin perder cercanía",
      ],
      image: "https://images.unsplash.com/photo-1629909615191-09a4b6c1b78b?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Consultorio odontológico moderno con recepción digital",
      caption: "Una referencia premium para reforzar confianza, precisión y calma.",
    },
  },
  medicos: {
    title: "Automatización de WhatsApp para médicos y consultorios en Argentina",
    description: "Centralizá consultas, turnos y seguimientos con un asistente automático pensado para pacientes y consultorios médicos.",
    problem: "La recepción atiende llamados, WhatsApp y agenda al mismo tiempo; cuando todo entra junto, las respuestas tardan y se pierden consultas valiosas.",
    benefits: [
      "Filtro inicial de consultas y derivación automática.",
      "Agenda ordenada con turnos confirmados.",
      "Seguimiento y recordatorios sin carga manual.",
    ],
    conversation: {
      client: "Buen día, ¿atienden por obra social y tienen turno esta semana?",
      assistant: "Sí, te ayudo con la consulta y te comparto los turnos disponibles.",
      followUp: "Te quedó reservado el martes a las 11:00 y te llega recordatorio antes del turno.",
      close: "Excelente, me evita estar llamando varias veces.",
    },
    theme: {
      pageBg: "bg-[#070b16]",
      hero: "bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.08),transparent_24%),linear-gradient(180deg,rgba(5,8,19,0.98),rgba(5,8,19,1))]",
      font: "font-sans",
      title: "font-heading font-semibold tracking-[-0.04em]",
      body: "font-normal tracking-[-0.01em]",
      accent: "text-indigo-200",
      accentSoft: "bg-indigo-500/10",
      accentBorder: "border-indigo-400/20",
      accentLine: "bg-gradient-to-r from-indigo-400/60 to-transparent",
      dot: "bg-indigo-400",
      sectionBg: "bg-[#090f1d]",
      sectionBgAlt: "bg-[#0b1220]",
      sectionBgMuted: "bg-[#0a1020]",
      surface: "bg-white/[0.03]",
      surfaceStrong: "bg-white/[0.04]",
      ctaFrom: "from-indigo-500",
      ctaTo: "to-violet-500",
      ctaPanel: "bg-[linear-gradient(180deg,rgba(99,102,241,0.09),rgba(255,255,255,0.02))]",
      badgeText: "Consultorios médicos",
      image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b8?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Médica revisando una historia clínica digital en consultorio",
      imageCaption: "Un estilo clínico y editorial para transmitir claridad, precisión y profesionalismo.",
    },
    showcase: {
      eyebrow: "Intake clínico",
      title: "Una recepción más ordenada para consultas, estudios y turnos",
      description:
        "Pensado para consultorios médicos donde conviven llamados, derivaciones y pacientes que necesitan respuestas claras sin fricción.",
      bullets: [
        "Clasificación de motivo de consulta",
        "Derivación según especialidad",
        "Confirmación y recordatorio de turno",
      ],
      image: "https://images.unsplash.com/photo-1586773860416-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Equipo médico revisando una agenda de pacientes en una sala luminosa",
      caption: "Más sobrio, más clínico y con foco en continuidad de atención.",
    },
  },
  fonoaudiologos: {
    title: "Automatización de WhatsApp para fonoaudiólogos en Argentina",
    description: "Respondé consultas frecuentes, coordiná sesiones y simplificá el seguimiento con automatización para consultorios de fonoaudiología.",
    problem: "Se repiten consultas sobre horarios, modalidad, duración y cambios de turno, y eso termina consumiendo tiempo todos los días en el consultorio.",
    benefits: [
      "Respuestas automáticas sobre modalidad y disponibilidad.",
      "Gestión simple de turnos y reprogramaciones.",
      "Seguimiento más ordenado con menos chats pendientes.",
    ],
    conversation: {
      client: "Hola, quería saber si hacen atención infantil y cómo son los turnos.",
      assistant: "Sí, te comparto cómo trabajamos, edades de atención y los horarios disponibles.",
      followUp: "Perfecto, te agendo el miércoles a las 10:00 y te llega la confirmación por WhatsApp.",
      close: "Genial, así no tengo que insistir por respuesta.",
    },
    theme: {
      pageBg: "bg-[#05130f]",
      hero: "bg-[radial-gradient(circle_at_top,rgba(52,211,153,0.15),transparent_32%),linear-gradient(180deg,rgba(2,6,23,0.98),rgba(2,6,23,1))]",
      font: "font-sans",
      title: "font-heading font-black tracking-tight",
      body: "font-normal",
      accent: "text-emerald-200",
      accentSoft: "bg-emerald-500/10",
      accentBorder: "border-emerald-400/20",
      accentLine: "bg-gradient-to-r from-emerald-400/60 to-transparent",
      dot: "bg-emerald-400",
      sectionBg: "bg-[#071813]",
      sectionBgAlt: "bg-[#091b16]",
      sectionBgMuted: "bg-[#06120f]",
      surface: "bg-white/[0.03]",
      surfaceStrong: "bg-white/[0.04]",
      ctaFrom: "from-emerald-500",
      ctaTo: "to-lime-500",
      ctaPanel: "bg-[linear-gradient(180deg,rgba(52,211,153,0.09),rgba(255,255,255,0.02))]",
      badgeText: "Consultorios de fonoaudiología",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Profesional de fonoaudiología trabajando con un paciente",
      imageCaption: "Un diseño más calmo y cercano, pensado para acompañar familias y procesos de seguimiento.",
    },
    showcase: {
      eyebrow: "Sesiones y seguimiento",
      title: "Una agenda suave, clara y sin mensajes repetidos",
      description:
        "Para profesionales que coordinan sesiones, reprogramaciones y seguimiento con familias y pacientes sin perder tiempo en chats repetidos.",
      bullets: [
        "Horarios, modalidad y edades de atención",
        "Cambios de turno sin fricción",
        "Recordatorios automáticos a familias",
      ],
      image: "https://images.unsplash.com/photo-1519542537078-4f7b7e1b8b6a?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Sesión de fonoaudiología en consultorio cálido y minimalista",
      caption: "Un estilo más amable y minimalista para una atención cercana.",
    },
  },
  abogados: {
    title: "Automatización de WhatsApp para abogados en Argentina",
    description: "Filtrá consultas, ordená casos y hacé seguimiento inicial sin perder tiempo en mensajes repetidos para estudios jurídicos y abogados particulares.",
    problem: "Llegan consultas legales que necesitan una primera respuesta clara; si se demoran, el posible cliente sigue buscando otro estudio.",
    benefits: [
      "Primer contacto profesional y automático.",
      "Captura de consultas desde una landing de servicios legales.",
      "Seguimiento de prospectos sin perder oportunidades.",
    ],
    conversation: {
      client: "Hola, necesito asesoramiento por un alquiler, ¿puedo coordinar una consulta?",
      assistant: "Sí, claro. Te comparto disponibilidad y te explico cómo es la primera entrevista.",
      followUp: "Te reservé un turno para mañana a las 17:00 y te envío la confirmación.",
      close: "Perfecto, así no pierdo tiempo escribiendo varias veces.",
    },
    theme: {
      pageBg: "bg-[#080604]",
      hero: "bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.12),transparent_30%),linear-gradient(180deg,rgba(8,5,2,0.99),rgba(8,5,2,1))]",
      font: "font-serif",
      title: "font-heading font-semibold tracking-[-0.05em]",
      body: "font-normal tracking-[-0.01em]",
      accent: "text-amber-200",
      accentSoft: "bg-amber-500/10",
      accentBorder: "border-amber-400/20",
      accentLine: "bg-gradient-to-r from-amber-400/60 to-transparent",
      dot: "bg-amber-400",
      sectionBg: "bg-[#110b07]",
      sectionBgAlt: "bg-[#160f0a]",
      sectionBgMuted: "bg-[#0d0804]",
      surface: "bg-white/[0.025]",
      surfaceStrong: "bg-white/[0.035]",
      ctaFrom: "from-amber-500",
      ctaTo: "to-orange-500",
      ctaPanel: "bg-[linear-gradient(180deg,rgba(245,158,11,0.09),rgba(255,255,255,0.02))]",
      badgeText: "Estudios jurídicos",
      image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Abogada en un estudio jurídico con documentos y notebook",
      imageCaption: "Una estética formal, editorial y más cercana al universo jurídico.",
    },
    showcase: {
      eyebrow: "Dossier inicial",
      title: "Una puerta de entrada más seria para consultas legales",
      description:
        "Pensado para estudios que necesitan filtrar casos, ordenar urgencias y sostener una primera impresión de confianza desde el minuto uno.",
      bullets: [
        "Primer filtro por tipo de caso",
        "Toma de datos inicial ordenada",
        "Agenda de entrevista y seguimiento",
      ],
      image: "https://images.unsplash.com/photo-1569525365647-5d6e1b4d3cc8?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Estudio jurídico con biblioteca, expediente y luz cálida",
      caption: "Más sobrio, más clásico y con presencia de estudio profesional.",
    },
  },
  inmobiliarias: {
    title: "Automatización de WhatsApp para inmobiliarias en Argentina",
    description: "Respondé consultas de propiedades, agendá visitas y seguí leads sin perder velocidad de respuesta en inmobiliarias argentinas.",
    problem: "Las consultas llegan por muchos canales y, si no se responde rápido, el interesado sigue mirando otras opciones.",
    benefits: [
      "Respuestas automáticas para propiedades y zonas.",
      "Agendado de visitas y seguimiento de interesados.",
      "Más consultas atendidas sin aumentar equipo.",
    ],
    conversation: {
      client: "Hola, vi un depto en Palermo. ¿Sigue disponible?",
      assistant: "Sí, sigue disponible. Te comparto detalles y puedo agendarte visita.",
      followUp: "Listo, te agendé para el sábado a las 12:00 y te llega la confirmación.",
      close: "Genial, me resolvió todo por WhatsApp.",
    },
    theme: {
      pageBg: "bg-[#11050b]",
      hero: "bg-[radial-gradient(circle_at_top,rgba(244,114,182,0.14),transparent_30%),linear-gradient(180deg,rgba(13,6,10,0.99),rgba(13,6,10,1))]",
      font: "font-sans",
      title: "font-heading font-black tracking-tight",
      body: "font-light",
      accent: "text-rose-200",
      accentSoft: "bg-rose-500/10",
      accentBorder: "border-rose-400/20",
      accentLine: "bg-gradient-to-r from-rose-400/60 to-transparent",
      dot: "bg-rose-400",
      sectionBg: "bg-[#1a0910]",
      sectionBgAlt: "bg-[#14080d]",
      sectionBgMuted: "bg-[#12060d]",
      surface: "bg-white/[0.03]",
      surfaceStrong: "bg-white/[0.04]",
      ctaFrom: "from-rose-500",
      ctaTo: "to-fuchsia-500",
      ctaPanel: "bg-[linear-gradient(180deg,rgba(244,114,182,0.09),rgba(255,255,255,0.02))]",
      badgeText: "Inmobiliarias",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Asesor inmobiliario mostrando una propiedad a un cliente",
      imageCaption: "Más energía comercial, más visitas coordinadas y menos leads fríos.",
    },
    showcase: {
      eyebrow: "Leads y visitas",
      title: "Consultas que no se enfrían y visitas que quedan agendadas",
      description:
        "Pensado para equipos comerciales que responden varios canales y necesitan velocidad sin perder contexto.",
      bullets: [
        "Disponibilidad de propiedades",
        "Coordinación de visitas",
        "Seguimiento de interesados",
      ],
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Reunión inmobiliaria con una pareja interesada en una propiedad",
      caption: "Un look más vibrante para una experiencia comercial ágil.",
    },
  },
  nutricionistas: {
    title: "Automatización de WhatsApp para nutricionistas en Argentina",
    description: "Respondé consultas, coordiná primeras entrevistas y acompañá seguimientos con una experiencia digital más cálida y ordenada.",
    problem: "Las consultas de nutrición suelen llegar con preguntas sobre planes, horarios, modalidad y seguimiento; si se demora la respuesta, baja el interés.",
    benefits: [
      "Primer contacto amable y rápido.",
      "Agenda simple para entrevistas y controles.",
      "Seguimiento automático entre consultas.",
    ],
    conversation: {
      client: "Hola, quería saber cómo trabajan las primeras consultas y si hacen seguimiento.",
      assistant: "Sí, claro. Te explico cómo es la primera entrevista y te comparto los horarios disponibles.",
      followUp: "Listo, te reservé el jueves a las 18:00 y te llega un recordatorio antes del turno.",
      close: "Perfecto, así puedo ordenarme mejor sin escribir varias veces.",
    },
    theme: {
      pageBg: "bg-[#07110d]",
      hero: "bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.10),transparent_28%),linear-gradient(180deg,rgba(3,6,14,0.98),rgba(3,6,14,1))]",
      font: "font-sans",
      title: "font-heading font-black tracking-tight",
      body: "font-normal",
      accent: "text-lime-200",
      accentSoft: "bg-lime-500/10",
      accentBorder: "border-lime-400/20",
      accentLine: "bg-gradient-to-r from-lime-400/60 to-transparent",
      dot: "bg-lime-400",
      sectionBg: "bg-[#0b130f]",
      sectionBgAlt: "bg-[#0d1711]",
      sectionBgMuted: "bg-[#09110d]",
      surface: "bg-white/[0.03]",
      surfaceStrong: "bg-white/[0.04]",
      ctaFrom: "from-lime-500",
      ctaTo: "to-emerald-500",
      ctaPanel: "bg-[linear-gradient(180deg,rgba(132,204,22,0.09),rgba(255,255,255,0.02))]",
      badgeText: "Nutricionistas",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Nutricionista trabajando con una paciente en consultorio luminoso",
      imageCaption: "Una estética más cálida y editorial para un servicio cercano.",
    },
    showcase: {
      eyebrow: "Seguimiento y hábitos",
      title: "Una experiencia más cálida para acompañar cada proceso",
      description:
        "La propuesta visual busca transmitir bienestar, claridad y un trato más humano, ideal para nutrición y acompañamiento.",
      bullets: [
        "Primera entrevista guiada",
        "Recordatorios de seguimiento",
        "Orden para hábitos y controles",
      ],
      image: "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Profesional de nutrición revisando una planificación junto a una paciente",
      caption: "Más suave, más cercana y pensada para el largo plazo.",
    },
  },
};

const defaultNicheTheme: NicheTheme = {
  pageBg: "bg-slate-950",
  hero: "bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.16),transparent_35%)]",
  font: "font-sans",
  title: "font-heading font-black tracking-tight",
  body: "font-normal",
  accent: "text-emerald-200/80",
  accentSoft: "bg-emerald-500/10",
  accentBorder: "border-emerald-400/20",
  accentLine: "bg-gradient-to-r from-emerald-400/60 to-transparent",
  dot: "bg-emerald-400",
  sectionBg: "bg-[#090909]",
  sectionBgAlt: "bg-[#0a0a0a]",
  sectionBgMuted: "bg-[#0b0b0b]",
  surface: "bg-white/[0.03]",
  surfaceStrong: "bg-white/[0.04]",
  ctaFrom: "from-emerald-500",
  ctaTo: "to-green-500",
  ctaPanel: "bg-[linear-gradient(180deg,rgba(16,185,129,0.08),rgba(255,255,255,0.02))]",
  badgeText: "Automatización de WhatsApp",
  image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
  imageAlt: "Consultorio moderno",
  imageCaption: "Una consulta clara, un turno confirmado y menos mensajes manuales.",
};

function NicheLanding({ nicheKey }: { nicheKey: NicheKey }) {
  const content = nicheData[nicheKey];
  const canonicalPath = `/${nicheKey}`;
  const theme: NicheTheme = { ...defaultNicheTheme, ...(content.theme ?? {}) };
  const heroReverse = nicheKey === "abogados" || nicheKey === "inmobiliarias";
  const showcaseReverse = nicheKey === "fonoaudiologos" || nicheKey === "abogados";
  const heroGridClass = heroReverse ? "lg:grid-cols-[0.95fr_1.05fr]" : "lg:grid-cols-[1.05fr_0.95fr]";

  return (
    <>
      <SeoHead title={content.title} description={content.description} canonical={canonicalPath} />
      <main className={`min-h-screen ${theme.pageBg} ${theme.font} text-white`}>
        <section className={`border-b border-white/5 ${theme.hero}`}>
          <div className="container py-16 sm:py-20">
            <div className={`mx-auto grid max-w-6xl gap-10 lg:items-center ${heroGridClass}`}>
              <motion.div
                initial={{ opacity: 0, x: heroReverse ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`text-center ${heroReverse ? "lg:order-2 lg:text-left" : "lg:text-left"}`}
              >
                <p className={`text-sm font-semibold uppercase tracking-[0.22em] ${theme.accent}`}>
                  Argentina · {theme.badgeText}
                </p>
                <h1 className={`mt-4 text-4xl sm:text-5xl lg:text-6xl ${theme.title}`}>
                  {content.title}
                </h1>
                <p className={`mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70 lg:mx-0 ${theme.body}`}>
                  {content.description}
                </p>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                  <a href="#contacto" className={`inline-flex items-center justify-center rounded-2xl bg-gradient-to-r ${theme.ctaFrom} ${theme.ctaTo} px-6 py-4 text-base font-bold text-white shadow-lg shadow-black/30`}>
                    Solicitar diagnóstico gratuito
                  </a>
                  <a href="#conversacion" className={`inline-flex items-center justify-center rounded-2xl border ${theme.accentBorder} bg-white/5 px-6 py-4 text-base font-semibold text-white/85`}>
                    Ver conversación real
                  </a>
                </div>
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {[
                    { label: "Respuesta", value: "Automática" },
                    { label: "Agenda", value: "Ordenada" },
                    { label: "Seguimiento", value: "Sin fricción" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`rounded-[1.35rem] border ${theme.accentBorder} ${theme.surface} px-4 py-4 text-left shadow-[0_20px_45px_-34px_rgba(0,0,0,0.5)]`}
                    >
                      <div className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${theme.accent}`}>
                        {item.label}
                      </div>
                      <div className="mt-2 text-sm font-semibold text-white/80">{item.value}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: heroReverse ? -20 : 20, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.08 }}
                className={`overflow-hidden rounded-[2rem] border ${theme.accentBorder} ${theme.surface} shadow-[0_28px_80px_-40px_rgba(14,165,233,0.5)] ${heroReverse ? "lg:order-1" : ""}`}
              >
                <div className="relative aspect-[4/3]">
                  <img
                    src={theme.image}
                    alt={theme.imageAlt}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.08),rgba(2,6,23,0.56))]" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <div className={`inline-flex rounded-full border ${theme.accentBorder} ${theme.accentSoft} px-3 py-1 text-xs font-semibold ${theme.accent}`}>
                      {theme.badgeText}
                    </div>
                    <p className="mt-3 max-w-md text-sm leading-6 text-white/85">
                      {theme.imageCaption}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className={`border-t border-white/5 ${theme.sectionBg}`}>
          <div className="container py-16 sm:py-20">
            <div className="grid gap-4 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5 }}
                className={`rounded-[1.75rem] border ${theme.accentBorder} ${theme.surface} p-6 sm:p-7`}
              >
                <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${theme.accent}`}>
                  Problema principal
                </p>
                <p className="mt-3 text-lg leading-8 text-white/75">
                  {content.problem}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: 0.06 }}
                className={`rounded-[1.75rem] border ${theme.accentBorder} ${theme.surfaceStrong} p-6 sm:p-7`}
              >
                <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${theme.accent}`}>
                  Beneficios de automatizar
                </p>
                <div className="mt-4 space-y-3">
                  {content.benefits.map((benefit) => (
                    <p key={benefit} className="flex items-start gap-3 text-sm leading-7 text-white/70">
                      <span className={`mt-2 h-2 w-2 rounded-full ${theme.dot}`} />
                      {benefit}
                    </p>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {content.showcase ? (
          <section className={`border-t border-white/5 ${theme.sectionBgAlt}`}>
            <div className="container py-16 sm:py-20">
              <div
                className={`grid gap-8 lg:items-center ${
                  showcaseReverse ? "lg:grid-cols-[0.95fr_1.05fr]" : "lg:grid-cols-[1.05fr_0.95fr]"
                }`}
              >
                <div className={showcaseReverse ? "lg:order-2" : ""}>
                  <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${theme.accent}`}>
                    {content.showcase.eyebrow}
                  </p>
                  <h2 className={`mt-3 text-3xl sm:text-4xl ${theme.title}`}>
                    {content.showcase.title}
                  </h2>
                  <p className={`mt-4 max-w-xl text-base leading-8 text-white/65 ${theme.body}`}>
                    {content.showcase.description}
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {content.showcase.bullets.map((bullet) => (
                      <div key={bullet} className={`rounded-2xl border ${theme.accentBorder} ${theme.surface} px-4 py-3 text-sm leading-6 text-white/80`}>
                        {bullet}
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`overflow-hidden rounded-[2rem] border ${theme.accentBorder} ${theme.surface} shadow-[0_24px_80px_-36px_rgba(0,0,0,0.6)]`}>
                  <div className="relative aspect-[4/3]">
                    <img
                      src={content.showcase.image}
                      alt={content.showcase.imageAlt}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.05),rgba(2,6,23,0.58))]" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                      <div className={`inline-flex rounded-full border ${theme.accentBorder} ${theme.accentSoft} px-3 py-1 text-xs font-semibold ${theme.accent}`}>
                        {content.showcase.caption}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {nicheKey === "odontologos" && (
          <section className="border-t border-white/5 bg-[#0a0f16]">
            <div className="container py-16 sm:py-20">
              <div className="mb-10 max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200/80">
                  Servicios que suele atender el consultorio
                </p>
                <h2 className="font-heading mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  Automatización pensada para la operación diaria de una clínica dental
                </h2>
                <div className="mt-5 h-px w-24 bg-gradient-to-r from-sky-400/60 to-transparent" />
              </div>

              <div className="grid gap-4 lg:grid-cols-3">
                {[
                  {
                    title: "Primera consulta",
                    text: "Responde motivo de consulta, cobertura, ubicación y disponibilidad sin que alguien tenga que estar mirando WhatsApp todo el tiempo.",
                  },
                  {
                    title: "Turnos y recordatorios",
                    text: "Confirma la cita, reenvía la dirección y manda un aviso previo para bajar ausencias y reprogramaciones de último momento.",
                  },
                  {
                    title: "Seguimiento posterior",
                    text: "Después del tratamiento, mantiene el vínculo con controles, indicaciones y nuevas consultas sin dejar chats pendientes.",
                  },
                ].map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[1.75rem] border border-sky-400/15 bg-white/[0.035] p-6 sm:p-7"
                  >
                    <p className={`text-sm font-semibold uppercase tracking-[0.18em] ${theme.accent}`}>
                      {item.title}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/65">{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {nicheKey === "odontologos" && (
          <section className="border-t border-white/5 bg-[#08131c]">
            <div className="container py-16 sm:py-20">
              <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200/80">
                    Caso real de uso
                  </p>
                  <h2 className={`mt-3 text-3xl sm:text-4xl ${theme.title}`}>
                    Una paciente escribe, el sistema responde y el turno queda confirmado
                  </h2>
                  <p className={`mt-4 max-w-xl text-base leading-8 text-white/65 ${theme.body}`}>
                    Así se ve un flujo más creíble para odontología: la consulta entra desde WhatsApp, la respuesta es inmediata y la agenda queda ordenada sin ir y venir de mensajes.
                  </p>
                </div>

                <div className="overflow-hidden rounded-[2rem] border border-sky-400/15 bg-white/[0.03] shadow-[0_24px_80px_-36px_rgba(14,165,233,0.32)]">
                  <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
                    <div className="relative min-h-[240px]">
                      <img
                        src="https://images.unsplash.com/photo-1622737133809-d95047b9e673?auto=format&fit=crop&w=900&q=80"
                        alt="Consultorio odontológico con recepción y pantalla de agenda"
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.02),rgba(2,6,23,0.5))]" />
                    </div>
                    <div className="space-y-3 p-5 sm:p-6">
                      <div className="rounded-2xl border border-white/5 bg-white/10 px-4 py-3 text-sm leading-6 text-white/90">
                        Hola, ¿hacen limpieza dental y tienen turno para esta semana?
                      </div>
                      <div className="rounded-2xl border border-sky-400/20 bg-sky-500/10 px-4 py-3 text-sm leading-6 text-white/90">
                        Sí, claro. Te paso horarios disponibles y te confirmo el que te quede mejor.
                      </div>
                      <div className="rounded-2xl border border-sky-400/20 bg-sky-500/10 px-4 py-3 text-sm leading-6 text-white/90">
                        Perfecto, te quedó el jueves a las 16:00. También te llega recordatorio automático.
                      </div>
                      <div className="rounded-2xl border border-white/5 bg-white/10 px-4 py-3 text-sm leading-6 text-white/90">
                        Genial, me resolvieron todo por WhatsApp.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {nicheKey === "medicos" && (
          <section className="border-t border-white/5 bg-[#08101c]">
            <div className="container py-16 sm:py-20">
              <div className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200/80">
                    Flujo clínico
                  </p>
                  <h2 className={`mt-3 text-3xl sm:text-4xl ${theme.title}`}>
                    Menos caos en recepción, más orden en cada consulta
                  </h2>
                  <p className={`mt-4 max-w-xl text-base leading-8 text-white/65 ${theme.body}`}>
                    La agenda médica suele mezclar consultas, estudios y derivaciones. Esta vista le da prioridad a la velocidad y a la claridad operativa.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    {
                      title: "Triage",
                      text: "El sistema identifica el motivo de consulta y deriva sin frenar la atención.",
                    },
                    {
                      title: "Agenda",
                      text: "La coordinación de turnos se vuelve más simple y con menos intercambio de mensajes.",
                    },
                    {
                      title: "Seguimiento",
                      text: "Recordatorios y confirmaciones ayudan a sostener continuidad y menos ausencias.",
                    },
                  ].map((item) => (
                    <article key={item.title} className="rounded-[1.5rem] border border-indigo-400/15 bg-white/[0.03] p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200/80">{item.title}</p>
                      <p className="mt-3 text-sm leading-7 text-white/65">{item.text}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {nicheKey === "abogados" && (
          <section className="border-t border-white/5 bg-[#120b08]">
            <div className="container py-16 sm:py-20">
              <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div className="rounded-[2rem] border border-amber-400/15 bg-white/[0.03] p-6 sm:p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200/80">
                    Intake jurídico
                  </p>
                  <h2 className={`mt-3 text-3xl sm:text-4xl ${theme.title}`}>
                    Una primera impresión más seria para cada consulta
                  </h2>
                  <p className={`mt-4 max-w-xl text-base leading-8 text-white/65 ${theme.body}`}>
                    El objetivo no es vender más texto, sino mostrar orden, criterio y confianza desde el primer contacto con el estudio.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: "Filtro",
                      text: "Clasifica el tipo de caso antes de agendar una entrevista.",
                    },
                    {
                      title: "Confianza",
                      text: "El tono visual transmite seriedad y cercanía profesional.",
                    },
                    {
                      title: "Seguimiento",
                      text: "Menos consultas perdidas y más prospectos bien atendidos.",
                    },
                    {
                      title: "Orden",
                      text: "La recepción trabaja con un flujo más claro y menos ida y vuelta.",
                    },
                  ].map((item) => (
                    <article key={item.title} className="rounded-[1.5rem] border border-amber-400/15 bg-white/[0.025] p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">{item.title}</p>
                      <p className="mt-3 text-sm leading-7 text-white/65">{item.text}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        <section id="conversacion" className={`border-t border-white/5 ${theme.sectionBgMuted}`}>
          <div className="container py-16 sm:py-20">
            <div className={`mx-auto max-w-3xl rounded-[2rem] border ${theme.accentBorder} ${theme.surfaceStrong} p-6 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.9)] sm:p-8`}>
              <div className="mb-6">
                <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${theme.accent}`}>
                  Ejemplo real de conversación
                </p>
                <h2 className="font-heading mt-3 text-3xl font-black tracking-tight">Cómo se ve una consulta automatizada</h2>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/5 bg-white/10 px-4 py-3 text-sm leading-6 text-white/90">
                  {content.conversation.client}
                </div>
                <div className={`rounded-2xl border ${theme.accentBorder} ${theme.accentSoft} px-4 py-3 text-sm leading-6 text-white/90`}>
                  {content.conversation.assistant}
                </div>
                <div className={`rounded-2xl border ${theme.accentBorder} ${theme.accentSoft} px-4 py-3 text-sm leading-6 text-white/90`}>
                  {content.conversation.followUp}
                </div>
                <div className="rounded-2xl border border-white/5 bg-white/10 px-4 py-3 text-sm leading-6 text-white/90">
                  {content.conversation.close}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`border-t border-white/5 ${theme.sectionBg}`}>
          <div className="container py-16 sm:py-20">
            <div className={`mx-auto max-w-4xl rounded-[2rem] border ${theme.accentBorder} ${theme.ctaPanel} p-6 text-center shadow-[0_20px_60px_-36px_rgba(14,165,233,0.35)] sm:p-8`}>
              <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${theme.accent}`}>
                Diagnóstico gratuito
              </p>
              <h2 className="font-heading mt-3 text-3xl font-black tracking-tight">Quiero mi diagnóstico gratuito</h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/65">
                Analizamos cómo llegar más rápido a tus consultas, cómo ordenar tu agenda y qué automatizar para vender mejor en Argentina.
              </p>
              <a href="/#contacto" className={`mt-6 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r ${theme.ctaFrom} ${theme.ctaTo} px-6 py-4 text-base font-bold text-white`}>
                Solicitar diagnóstico gratuito
              </a>
            </div>
          </div>
        </section>

        {nicheKey !== "medicos" && nicheKey !== "abogados" ? (
          <section className={`border-t border-white/5 ${theme.sectionBgAlt}`}>
            <div className="container py-16 sm:py-20">
              <div className="mb-10 max-w-2xl">
                <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${theme.accent}`}>
                  Landings SEO
                </p>
                <h2 className="font-heading mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  Páginas específicas por rubro para captar búsquedas con intención
                </h2>
                <div className={`mt-5 h-px w-24 ${theme.accentLine}`} />
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {[
                  { href: "/odontologos", label: "Odontólogos", text: "Automatización de WhatsApp para clínicas dentales." },
                  { href: "/medicos", label: "Médicos", text: "Turnos, consultas y seguimiento para consultorios." },
                  { href: "/fonoaudiologos", label: "Fonoaudiólogos", text: "Respuestas automáticas y agenda de sesiones." },
                  { href: "/nutricionistas", label: "Nutricionistas", text: "Seguimiento, consultas y recordatorios de control." },
                  { href: "/abogados", label: "Abogados", text: "Filtrado de consultas y primer contacto profesional." },
                  { href: "/inmobiliarias", label: "Inmobiliarias", text: "Más consultas atendidas y visitas agendadas." },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`group rounded-[1.75rem] border ${theme.accentBorder} ${theme.surface} p-6 transition-all duration-300 hover:bg-white/[0.05] sm:p-7`}
                  >
                    <p className={`text-sm font-semibold uppercase tracking-[0.18em] ${theme.accent}`}>
                      {item.label}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/60">{item.text}</p>
                    <div className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold ${theme.accent} transition-transform group-hover:translate-x-1`}>
                      Ver landing
                      <span aria-hidden="true">?</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </main>
    </>
  );
}

export default function App() {
  return null;
}

