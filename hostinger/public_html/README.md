# Deploy en Hostinger (PHP + MySQL)

## 1) Subida de archivos

- Subí **todo el contenido** de `hostinger/public_html/` a la carpeta `public_html/` de tu hosting (Hostinger).
- Incluye:
  - `index.html` + `assets/` (build del frontend)
  - `demos/` (páginas demo)
  - `enviar.php` + `config.php` (backend de leads)
  - `schema.sql` (estructura de la tabla)
  - `.htaccess` (soporte SPA y protección básica)

## 2) Base de datos

- Creá una base MySQL en Hostinger.
- Importá `schema.sql`.
- Editá `config.php` con tus credenciales.

## 3) Formulario

El frontend manda `POST` a `enviar.php` con:
- `nombre`
- `telefono`
- `email`
- `mensaje`
- `origen`

La respuesta esperada es texto plano: `OK`.

