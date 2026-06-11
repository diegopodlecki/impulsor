# Análisis de Imágenes Rotas - Reporte Completo

## 🔍 PROBLEMAS ENCONTRADOS

### 1. **URLs de Pexels MALFORMADOS** (CRÍTICO)
**Problema**: Formato incorrecto `photos-XXXX` vs `photos/XXXX`

**URLs Malformados Encontrados**:
- personal-trainer: `photos-2780291` → debe ser `photos/2780291`
- personal-trainer: `photos-4552404` → debe ser `photos/4552404`
- personal-trainer: `photos-1092730` → debe ser `photos/1092730`
- nutricionista: `photos-1092730` → debe ser `photos/1092730`
- nutricionista: `photos-821365` → debe ser `photos/821365`
- nutricionista: `photos-5632399` → debe ser `photos/5632399`
- nutricionista: `photos-443514` → debe ser `photos/443514`
- psicólogo: `photos-3792413` → debe ser `photos/3792413`
- psicólogo: `photos-4101555` → debe ser `photos/4101555`
- psicólogo: `photos-3973750` → debe ser `photos/3973750`
- estética: `photos-3932571` → debe ser `photos/3932571`
- estética: `photos-3938022` → debe ser `photos/3938022`
- estética: `photos-3936317` → debe ser `photos/3936317`
- estética: `photos-3962575` → debe ser `photos/3962575`
- casa-de-comidas: `photos-1624487` → debe ser `photos/1624487`
- casa-de-comidas: `photos-1624479` → debe ser `photos/1624479`
- casa-de-comidas: `photos-1559827` → debe ser `photos/1559827`

### 2. **Directorio /public/portfolio VACÍO** (MODERADO)
**Problema**: No existen archivos fallback para imágenes
**Archivos esperados que faltan**:
- `/public/portfolio/personal-trainer-preview.jpg`
- `/public/portfolio/psicologo-preview.jpg`
- `/public/portfolio/nutricionista-preview.jpg`
- `/public/portfolio/gimnasio-preview.jpg`
- `/public/portfolio/casa-de-comidas-preview.jpg`
- `/public/portfolio/estetica-corporal-preview.jpg`

**Referencia en código**: src/pages/Index.tsx línea 222
```tsx
src={rubro.previewImage || `/portfolio/${rubro.slug}-preview.jpg`}
```

### 3. **OG Images en /public/og/** (VERIFICAR)
**Archivos existentes**:
- ✓ og-casa-de-comidas.png
- ✓ og-emprendedor.png
- ✓ og-emprendedores.png
- ✓ og-estetica-corporal.png
- ✓ og-gimnasio.png
- ✓ og-image.png
- ✓ og-image.svg
- ✓ og-nutricionista.png
- ✓ og-personal-trainer.png
- ✓ og-psicologo.png

✅ Todos presentes

## 📊 RESUMEN DE CAMBIOS NECESARIOS

| Archivo | Líneas | Cambios |
|---------|--------|---------|
| `src/data/landingsTemplateV2.ts` | Multiple | 17 URLs de Pexels: `photos-` → `photos/` |
| `src/lib/rubros.ts` | 52, 83, 115, 146, 178, 210 | 6 URLs de rubros con `photos-` (verificar si tienen el error) |
| `public/portfolio/` | N/A | Crear 6 placeholder images SVG o fallback |

## 🛠️ PLAN DE CORRECCIÓN

### Fase 1: Corregir URLs de Pexels
- Reemplazar todos los `photos-XXXX` por `photos/XXXX` en landingsTemplateV2.ts
- Reemplazar en rubros.ts si existe el mismo error

### Fase 2: Crear Placeholders
- Crear 6 SVG placeholders coherentes por rubro
- Ubicación: `/public/portfolio/{rubro}-preview.jpg` (o usar SVG data URLs)

### Fase 3: Verificación
- Build y test
- Verificar no hay 404s en red
- Commit y deploy

## 👀 ESTADO DE CADA RUBRO

### ✓ Gimnasio
- Hero: ✓ Correcto
- Servicios: ✓ Correctos
- Galería: ✓ Correctos
- Status: LISTO

### ✗ Personal Trainer
- Hero: ✗ `photos-2780291` → CORREGIR
- Servicios: ✗ `photos-2780291`, `photos-4552404`, `photos-1092730` → CORREGIR
- Galería: ✓ Algunos correctos, 1 incorrecto
- Status: REQUIERE CORRECCIÓN

### ✗ Nutricionista  
- Hero: ✗ `photos-1092730` → CORREGIR
- Servicios: ✗ `photos-1092730`, `photos-821365` → CORREGIR
- Galería: ✗ `photos-5632399`, `photos-443514` → CORREGIR
- Status: REQUIERE CORRECCIÓN

### ✗ Psicólogo
- Hero: ✗ `photos-3792413` → CORREGIR
- Servicios: ✗ `photos-3792413`, `photos-4101555` → CORREGIR
- Galería: ✗ `photos-3973750` → CORREGIR
- Status: REQUIERE CORRECCIÓN

### ✗ Estética Corporal
- Hero: ✗ `photos-3932571` → CORREGIR
- Servicios: ✗ `photos-3938022`, `photos-3936317`, `photos-3932571` → CORREGIR
- Galería: ✗ `photos-3962575` → CORREGIR
- Status: REQUIERE CORRECCIÓN

### ✗ Casa de Comidas
- Hero: ✗ `photos-1624487` → CORREGIR
- Servicios: ✗ `photos-1624487`, `photos-1624479` → CORREGIR
- Galería: ✗ `photos-1559827` → CORREGIR
- Status: REQUIERE CORRECCIÓN

