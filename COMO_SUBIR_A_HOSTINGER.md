# Cómo subir WebAppImpulsor a Hostinger (`public_html`)

## Qué carpeta subir

Subí **solo** el contenido de:

- `hostinger/public_html/`

Esa carpeta ya contiene el **build listo** del sitio (frontend).

No subas `src/`, `node_modules/`, etc. (eso es del proyecto, no va al hosting).

## Cómo subir (paso a paso)

0) Generá el build para Hostinger (recomendado):

- `npm.cmd run build:hostinger`

Esto actualiza `hostinger/public_html/index.html` y `hostinger/public_html/assets/`.

1) Entrá a Hostinger → **Administrador de Archivos** (o FTP).
2) Abrí la carpeta del sitio: `public_html/`.
3) (Recomendado) Hacé backup o renombrá lo viejo.
4) Borrá/limpiá lo anterior de `public_html/` y subí **todo** lo que está dentro de `hostinger/public_html/`:
   - `index.html`
   - `assets/`
   - `demos/`
   - `favicon.svg`, `robots.txt`, `sitemap.xml`, `og-image.svg`
   - `.htaccess`

## Cómo probar que quedó bien

- Entrá a tu web, enviá el formulario y verificá que:
  - no aparezcan errores visuales
  - el registro aparezca en Supabase (tabla `formularios`)

## Nota importante (React SPA)

El archivo `.htaccess` ya está incluido para que funcionen las rutas internas (si tu landing navega como SPA).
