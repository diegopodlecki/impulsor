# 🎨 Sistema de Plantilla de Landing Pages Profesionales

## Descripción

Sistema modular y reutilizable para crear landing pages profesionales que parezcan sitios reales listos para vender. Cada landing sigue una estructura de 6 secciones obligatorias:

1. **HERO** - Impacto visual + CTA principal
2. **SERVICIOS** - Oferta clara con imágenes
3. **BENEFICIOS** - Enfoque en cliente (no técnico)
4. **GALERÍA** - Fotos reales de instalaciones/resultados
5. **TESTIMONIOS** - Prueba social con ratings
6. **CTA FINAL** - Llamada a acción para conversión

---

## 📦 Componentes Disponibles

### Base
- **LandingTemplate** - Wrapper base para landing pages
- **LandingPageRenderer** - Renderiza un landing completo desde una config

### Secciones
- **SectionHero** - Hero con badge, título, CTA y estadísticas
- **SectionServicios** - Grid de servicios con imágenes
- **SectionBeneficios** - Grid de beneficios cliente-first
- **SectionGaleria** - Galería con lightbox interactivo
- **SectionTestimonios** - Testimonios con ratings (2 variantes)
- **SectionCtaFinal** - CTA final (3 variantes de diseño)

---

## 🚀 Uso Rápido

### Opción 1: Renderizar desde Configuración

```tsx
import { LandingPageRenderer } from '@/components/landing';
import { landingConfigsV2 } from '@/data/landingsTemplateV2';

export function GimnasioPage() {
  return <LandingPageRenderer config={landingConfigsV2.gimnasio} />;
}
```

### Opción 2: Componentes Individuales

```tsx
import {
  SectionHero,
  SectionServicios,
  SectionBeneficios,
  SectionGaleria,
  SectionTestimonios,
  SectionCtaFinal,
} from '@/components/landing';

export function MiLanding() {
  return (
    <main>
      <SectionHero
        badge="Transforma tu vida"
        title="Tu gimnasio merece una web"
        subtitle="Convierte visitas en alumnos"
        ctaText="Quiero más alumnos"
        stats={[
          { value: '5,000+', label: 'Alumnos' },
          { value: '98%', label: 'Satisfacción' },
        ]}
      />

      <SectionServicios
        title="Qué incluye tu web"
        servicios={[
          {
            icon: '📸',
            title: 'Hero impactante',
            description: 'Foto profesional con CTA',
            image: 'https://...',
          },
          // más servicios...
        ]}
      />

      {/* ... más secciones ... */}
    </main>
  );
}
```

---

## 🎯 Tipos de Beneficios Predefinidos

Tenemos templates de beneficios listos para usar:

```tsx
import { beneficiosTemplates } from '@/components/landing/SectionBeneficios';

// Para gimnasios
beneficiosTemplates.gimnasio

// Para personal trainers
beneficiosTemplates['personal-trainer']

// Para nutricionistas
beneficiosTemplates.nutricionista
```

---

## 📊 Estructura de LandingPageConfig

```typescript
interface LandingPageConfig {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaText: string;
    ctaSecondaryText?: string;
    backgroundImage?: string;
    stats?: Array<{ value: string; label: string }>;
  };

  servicios: {
    title: string;
    subtitle?: string;
    description?: string;
    items: Servicio[];
  };

  beneficios: {
    title: string;
    subtitle?: string;
    description?: string;
    items: Beneficio[];
  };

  galeria: {
    title: string;
    subtitle?: string;
    description?: string;
    images: ImageItem[];
  };

  testimonios: {
    title: string;
    subtitle?: string;
    description?: string;
    items: Testimonial[];
    featuredIndex?: number;
  };

  ctaFinal: {
    title: string;
    subtitle?: string;
    description?: string;
    ctaText?: string;
    highlights?: string[];
  };
}
```

---

## 🎨 Características Integradas

✅ **Microinteracciones**
- Fade-up animations en scroll
- Card elevation on hover
- Button transitions suaves (300ms)
- Scale feedback en clicks

✅ **Responsive Design**
- Mobile-first approach
- Grid adaptativo (1 col mobile → 3 cols desktop)
- Imágenes optimizadas

✅ **Accesibilidad**
- Ratios de contraste correctos
- Keyboard navigation
- Alt text en imágenes
- ARIA labels

✅ **SEO Ready**
- Headings semánticos
- Meta descriptions
- Structured data ready
- Image optimization

---

## 🖼️ Variantes de Componentes

### SectionTestimonios
```tsx
// Variante Featured (grande + 2 pequeños)
<SectionTestimonios variant="featured" />

// Variante Cards (grilla de 3)
<SectionTestimonios variant="cards" />
```

### SectionCtaFinal
```tsx
// Variante default
<SectionCtaFinal variant="default" />

// Variante minimal (más simple)
<SectionCtaFinal variant="minimal" />

// Variante premium (con card destacada)
<SectionCtaFinal variant="premium" />
```

---

## 📝 Ejemplo Completo

```tsx
import { LandingPageConfig, LandingPageRenderer } from '@/components/landing';

const miLanding: LandingPageConfig = {
  hero: {
    badge: 'Especialistas en gimnasios',
    title: 'Tu gimnasio merece una web que llene cupos',
    subtitle: 'Una página web profesional que muestra tus clases, horarios e instalaciones.',
    ctaText: 'Quiero más alumnos',
    ctaSecondaryText: 'Ver demo',
    backgroundImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48',
    stats: [
      { value: '5,000+', label: 'Alumnos activos' },
      { value: '98%', label: 'Satisfacción' },
      { value: '24/7', label: 'Disponible' },
    ],
  },
  servicios: {
    title: 'Qué incluye tu web',
    description: 'Todo lo que tu gimnasio necesita',
    items: [
      {
        icon: '📸',
        title: 'Hero impactante',
        description: 'Foto profesional con botón directo a WhatsApp',
        image: 'https://...',
      },
      // ... más servicios
    ],
  },
  beneficios: {
    title: 'Lo que vas a lograr',
    items: [
      {
        icon: '💪',
        title: 'Resultados visibles',
        description: '4 semanas de cambios reales en salud y cuerpo',
      },
      // ... más beneficios
    ],
  },
  galeria: {
    title: 'Tu gimnasio en fotos reales',
    images: [
      { src: 'https://...', alt: 'Piso de entrenamiento' },
      // ... más imágenes
    ],
  },
  testimonios: {
    title: 'Qué dicen nuestros alumnos',
    items: [
      {
        quote: 'Conseguí resultados increíbles en poco tiempo',
        author: 'María García',
        role: 'Alumna',
        rating: 5,
      },
      // ... más testimonios
    ],
    featuredIndex: 0,
  },
  ctaFinal: {
    title: 'Pedí tu web para tu gimnasio',
    description: 'Completa el formulario y nos contactamos en 24 horas',
    highlights: [
      '✓ Diseño moderno y profesional',
      '✓ Optimizado para conversión',
      '✓ Sin configuración técnica',
    ],
  },
};

export function MiGimnasio() {
  return <LandingPageRenderer config={miLanding} />;
}
```

---

## 🔄 Flujo de Datos

```
LandingPageConfig
    ↓
LandingPageRenderer
    ├─ SectionHero
    ├─ SectionServicios
    ├─ SectionBeneficios
    ├─ SectionGaleria
    ├─ SectionTestimonios
    └─ SectionCtaFinal
        ↓
    Landing profesional
```

---

## 🎯 Próximos Pasos

1. **Crear landing page para cada rubro** usando LandingPageConfig
2. **Actualizar NicheLandingPage.tsx** para usar los nuevos componentes
3. **Agregar más presets** en landingsTemplateV2.ts
4. **Testing** en todos los rubros para validar conversión

---

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (1 col)
- **Tablet**: 640px - 1024px (2 cols)
- **Desktop**: > 1024px (3 cols)

---

## 🎨 Clases CSS Disponibles

Todos los componentes usan clases de microinteracciones de `globals.css`:

- `.micro-fade-up` - Fade in desde abajo
- `.card-base` - Estilo base de cards
- `.card-hover` - Hover effects (elevation + scale)
- `.transition-smooth` (300ms)
- `.transition-fast` (200ms)
- `.transition-slow` (500ms)
- `.section-padding` (80px top/bottom)
- `.section-container` - Max-width con padding

---

**Objetivo:** Hacer que cada landing parezca un sitio real, profesional y listo para vender. 🚀
