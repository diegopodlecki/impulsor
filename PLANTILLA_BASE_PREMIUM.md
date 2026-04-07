# Plantilla Premium Base - Personal Trainer

**Fecha**: 2026-04-07  
**Versión**: 1.0  
**Status**: ✅ COMPLETO - Lista para replicar a otros rubros

---

## 🎯 Objetivo

Esta landing es el **modelo base premium** del sistema. Todos los rubros deben seguir esta estructura para mantener consistencia visual y conversión óptima.

---

## 📐 Estructura de Conversión

```
1. HERO (Impacto)
   ↓
2. RESULTADOS (Prueba social inmediata)
   ↓
3. SERVICIOS (Qué ofrece)
   ↓
4. TESTIMONIOS (Validación social)
   ↓
5. SOBRE MÍ (Credibilidad)
   ↓
6. BENEFICIOS (Valor agregado)
   ↓
7. GALERÍA (Visual)
   ↓
8. CTA FINAL (Conversión)
```

---

## 📋 Componentes Incluidos

### 1. HERO (Split Layout)
- Badge: "Resultados reales"
- Título: "Transformá tu cuerpo en 90 días"
- Subtítulo emocional enfocado en dolor
- 2 CTAs: "Agendar clase de prueba" + "Reservar cupo"
- Stats: 500+ Transformaciones, 98% Logro objetivos, 90 días
- Imagen split: Atleta entrenando

### 2. RESULTADOS (Before/After)
- 6 casos con métricas reales
- Imágenes lado a lado (ANTES/DESPUÉS)
- Badge de resultado superpuesto
- Navegación con flechas
- CTA: "Ver todas las transformaciones"

### 3. SERVICIOS (4 cards)
- Plan de entrenamiento a medida
- Seguimiento semanal
- Rutinas adaptadas a tu tiempo
- Asesoramiento nutricional básico

### 4. TESTIMONIOS (3 minimum)
- Con foto real
- Nombre + rol
- Comentario breve y emocional
- Rating + highlight

### 5. SOBRE EL ENTRENADOR
- Imagen profesional
- Historia breve
- Credenciales
- Enfoque profesional

### 6. CTA FINAL
- Título emotivo
- 2 botones: WhatsApp + Ver resultados
- Highlights beneficios

---

## 🔧 Cómo Replicar a Otros Rubros

### Paso 1: Copiar configuración
```typescript
// Copiar toda la sección 'personal-trainer' 
// y renombrar la clave
```

### Paso 2: Reemplazar imágenes
- **Hero**: Foto del servicio en acción
- **Servicios**: Fotos del rubro específico
- **Resultados**: Imágenes del tipo de trabajo
- **Sobre**: Foto del profesional
- **Testimonios**: Avatares de clientes reales

### Paso 3: Ajustar textos
- **Título hero**: Enfocado en resultado específico
- **Servicios**: Nombres de servicios reales
- **Sobre**: Historia del profesional

### Paso 4: Mantener estructura
- No cambiar orden de secciones
- Usar mismas clases CSS
- Mantener CTAs con WhatsApp

---

## 🎨 Especificaciones Visuales

### Colors
- Primary: Blue 600 (#2563eb)
- Secondary: Emerald 400 (#34d399)
- Background: Slate 950 (#020617)
- Cards: Slate 900 / 50% opacity

### Imágenes
- Formato: Pexels (alta calidad)
- Tamaño: 800x600 mínimo
- Estilo: Dark gym, personas reales

### Transiciones
- Duration: 0.3s - 0.4s
- Easing: cubic-bezier(0.34, 1.56, 0.64, 1)
- Hover: translateY(-6px)

---

## 📱 Responsive

- Mobile: Stack vertical, texto adaptable
- Tablet: Grid 2 columnas
- Desktop: Grid completo, split layout

---

## ✅ Checklist de Calidad

- [x] Hero con layout split
- [x] Imágenes reales de personas
- [x] CTAs con WhatsApp (sin redirect a webapp)
- [x] Resultados con métricas reales
- [x] Testimonios con fotos
- [x] Sobre con credentials
- [x] Build exitoso
- [x] Diseño dark premium consistente

---

## 🚀 Resultado

**Landing**: `entrenadores.html` (48.43 KB)  
**Propósito**: Template base premium para replicar a todos los rubros  
**Estado**: Production ready ✅
