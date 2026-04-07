/**
 * EJEMPLO DE INTEGRACIÓN
 * Cómo usar la nueva plantilla de landing pages
 * 
 * Este archivo muestra cómo se vería la integración completa
 * en una página de rubro (como GimnasiosPage)
 */

import { LandingPageRenderer } from '@/components/landing';
import { landingConfigsV2 } from '@/data/landingsTemplateV2';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Ejemplo 1: Usar un rubro predefinido completamente
 * Solo 3 líneas de código!
 */
export function GimnasiosPageNueva() {
  return (
    <>
      <Helmet>
        <title>Gimnasio | Webs para Negocios</title>
        <meta name="description" content="Tu gimnasio merece una web que llene cupos" />
      </Helmet>
      <LandingPageRenderer config={landingConfigsV2.gimnasio} />
    </>
  );
}

/**
 * Ejemplo 2: Personalizar una config predefinida
 * Tomar la config de gimnasio y cambiar algunos valores
 */
export function GimnasiosPagePersonalizada() {
  const config = {
    ...landingConfigsV2.gimnasio,
    hero: {
      ...landingConfigsV2.gimnasio.hero,
      title: 'Tu gimnasio está a un click de más alumnos',
      backgroundImage: 'https://custom-image.com/hero.jpg',
    },
    servicios: {
      ...landingConfigsV2.gimnasio.servicios,
      items: landingConfigsV2.gimnasio.servicios.items.slice(0, 3), // Solo 3 servicios
    },
  };

  return (
    <>
      <Helmet>
        <title>Gimnasio Premium | Webs para Negocios</title>
      </Helmet>
      <LandingPageRenderer config={config} />
    </>
  );
}

/**
 * Ejemplo 3: Crear una config custom completamente
 * Desde cero, sin templates predefinidos
 */
import { type LandingPageConfig } from '@/components/landing/LandingPageRenderer';

const miGimnasioCustom: LandingPageConfig = {
  hero: {
    badge: '🏋️ Mi Gimnasio',
    title: 'Entrena conmigo y transforma tu vida',
    subtitle: 'Somos más que un gimnasio. Somos tu aliado en el viaje hacia tu mejor versión.',
    ctaText: 'Quiero empezar ahora',
    ctaSecondaryText: 'Ver video',
    backgroundImage: 'https://images.pexels.com/photos-1552242/pexels-photo-1552242.jpeg',
    stats: [
      { value: '10 años', label: 'En la industria' },
      { value: '5000+', label: 'Miembros felices' },
      { value: '50+', label: 'Clases semanales' },
    ],
  },

  servicios: {
    title: 'Nuestros servicios',
    subtitle: 'Oferta completa',
    description: 'Todo lo que necesitas para alcanzar tus metas fitness',
    items: [
      {
        icon: '💪',
        title: 'Entrenamiento personalizado',
        description: 'Sesiones 1 a 1 con entrenadores certificados',
        image: 'https://images.pexels.com/photos-2780291/pexels-photo-2780291.jpeg',
      },
      {
        icon: '🧘',
        title: 'Clases grupales',
        description: 'Yoga, CrossFit, Spinning y más',
        image: 'https://images.pexels.com/photos-3807517/pexels-photo-3807517.jpeg',
      },
      {
        icon: '🥗',
        title: 'Asesoramiento nutricional',
        description: 'Planes de comidas incluidos',
        image: 'https://images.pexels.com/photos-1092730/pexels-photo-1092730.jpeg',
      },
      {
        icon: '📱',
        title: 'App de seguimiento',
        description: 'Monitorea tu progreso en tiempo real',
        image: 'https://images.pexels.com/photos-3621196/pexels-photo-3621196.jpeg',
      },
    ],
  },

  beneficios: {
    title: 'Por qué elegir nuestro gimnasio',
    subtitle: 'Beneficios',
    description: 'Lo que hace la diferencia',
    items: [
      {
        icon: '⚡',
        title: 'Resultados rápidos',
        description: 'Cambios visibles en 4 semanas',
        highlight: 'Con seguimiento personalizado',
      },
      {
        icon: '👥',
        title: 'Comunidad real',
        description: 'Conecta con personas que tienen tus objetivos',
        highlight: 'Eventos semanales',
      },
      {
        icon: '🏆',
        title: 'Entrenadores expertos',
        description: 'Certificados internacionalmente',
        highlight: '+15 años de experiencia',
      },
      {
        icon: '🎯',
        title: 'Ambiente motivador',
        description: 'Un lugar donde quieres estar cada día',
        highlight: '24/7 disponible',
      },
    ],
  },

  galeria: {
    title: 'Nuestras instalaciones',
    subtitle: 'Galería',
    description: 'Fotos reales de nuestro espacio',
    images: [
      {
        src: 'https://images.pexels.com/photos-1552242/pexels-photo-1552242.jpeg',
        alt: 'Piso de entrenamiento',
        caption: 'Piso de entrenamiento con máquinas modernas',
      },
      {
        src: 'https://images.pexels.com/photos-3621196/pexels-photo-3621196.jpeg',
        alt: 'Área de pesas',
        caption: 'Completa zona de pesas libres',
      },
      {
        src: 'https://images.pexels.com/photos-3807517/pexels-photo-3807517.jpeg',
        alt: 'Clases',
        caption: 'Sala de clases grupales',
      },
      {
        src: 'https://images.pexels.com/photos-3808991/pexels-photo-3808991.jpeg',
        alt: 'Comunidad',
        caption: 'Nuestro clima de comunidad',
      },
    ],
  },

  testimonios: {
    title: 'Historias de transformación',
    subtitle: 'Testimonios',
    description: 'Personas reales que cambiaron sus vidas',
    items: [
      {
        quote: 'En 3 meses perdí 10 kilos y me siento increíble. El equipo es excelente.',
        author: 'María González',
        role: 'Alumna desde Enero',
        rating: 5,
        highlight: 'Perdió 10kg en 3 meses',
      },
      {
        quote: 'Cambió mi vida. No solo el cuerpo, también mi mentalidad.',
        author: 'Juan Rodríguez',
        role: 'Alumno desde hace 2 años',
        rating: 5,
        highlight: 'Ganó 8kg de músculo',
      },
      {
        quote: 'El mejor gimnasio donde he estado. Volvería mil veces.',
        author: 'Laura Martínez',
        role: 'Alumna desde Marzo',
        rating: 5,
        highlight: 'Regularidad: 6 días/semana',
      },
    ],
    featuredIndex: 0,
  },

  ctaFinal: {
    title: 'Pedí tu consulta inicial GRATIS',
    subtitle: 'Último paso',
    description: 'Vení a conocer el gimnasio, conoce a nuestro equipo y descubre cómo podemos ayudarte a lograr tus objetivos.',
    ctaText: 'Quiero agendar mi consulta',
    highlights: [
      '✓ Evaluación física completa',
      '✓ Plan personalizado',
      '✓ Primera clase incluida',
    ],
  },
};

export function MiGimnasioPage() {
  return (
    <>
      <Helmet>
        <title>Mi Gimnasio | Transforma tu vida</title>
      </Helmet>
      <LandingPageRenderer config={miGimnasioCustom} />
    </>
  );
}

/**
 * VENTAJAS del uso de esta plantilla:
 * 
 * ✅ Código limpio y mantenible
 * ✅ Reutilizable entre todos los rubros
 * ✅ Fácil de personalizar
 * ✅ Componentes independientes
 * ✅ Microinteracciones incluidas
 * ✅ SEO ready
 * ✅ Responsive automático
 * ✅ Performance optimizado
 * 
 * PASOS para integrar en tu Landing Page:
 * 
 * 1. Importar LandingPageRenderer
 * 2. Elegir usar config predefinida O crear custom
 * 3. Render dentro de tu componente
 * 4. ¡Listo! Tu landing está lista para vender
 * 
 * TIEMPO de implementación:
 * - Config predefinida: 5 minutos
 * - Config custom: 20 minutos
 * - Personalización avanzada: 30 minutos
 */
