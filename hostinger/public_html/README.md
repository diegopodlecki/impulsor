# Deploy en Hostinger (estático)

## 1) Subida de archivos

- Subí **todo el contenido** de `hostinger/public_html/` a la carpeta `public_html/` de tu hosting (Hostinger).
- Incluye:
  - `index.html` + `assets/` (build del frontend)
  - `demos/` (páginas demo)
  - `.htaccess` (soporte SPA y protección básica)

## 2) Formulario

El formulario **no usa PHP**: guarda directo en Supabase (tabla `formularios`).