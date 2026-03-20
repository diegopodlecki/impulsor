# Cómo subir WebAppImpulsor a Hostinger (`public_html`)

## Qué carpeta subir

Subí **solo** el contenido de:

- `hostinger/public_html/`

Esa carpeta ya contiene el **build listo** del sitio (frontend) + el **backend PHP** del formulario.

No subas `src/`, `node_modules/`, etc. (eso es del proyecto, no va al hosting).

## Cómo subir (paso a paso)

1) Entrá a Hostinger → **Administrador de Archivos** (o FTP).
2) Abrí la carpeta del sitio: `public_html/`.
3) (Recomendado) Hacé backup o renombrá lo viejo.
4) Borrá/limpiá lo anterior de `public_html/` y subí **todo** lo que está dentro de `hostinger/public_html/`:
   - `index.html`
   - `assets/`
   - `demos/`
   - `favicon.svg`, `robots.txt`, `sitemap.xml`, `og-image.svg`
   - `.htaccess`
   - `enviar.php` y `config.php`
   - `schema.sql` (solo para importar la tabla; puede quedar subido, pero no es necesario)

## Base de datos (para que el formulario guarde leads)

1) En Hostinger → **Bases de datos MySQL**: creá una base + usuario + contraseña.
2) En **phpMyAdmin**: importá `schema.sql` (crea la tabla `leads`).
3) Editá `config.php` en Hostinger y completá tus credenciales:
   - host / dbname / user / password

## Cómo probar que quedó bien

- Entrá a tu web, enviá el formulario y verificá que:
  - no aparezcan errores visuales
  - el lead se inserte en MySQL (tabla `leads`)

## Nota importante (React SPA)

El archivo `.htaccess` ya está incluido para que funcionen las rutas internas (si tu landing navega como SPA).

