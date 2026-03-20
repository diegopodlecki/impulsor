# Deploy en Hostinger (PHP + MySQL)

## 1) Subida de archivos

- Subí el contenido de `dist/` a tu `public_html/` (Hostinger).
- Subí también estos archivos:
  - `public_html/config.php`
  - `public_html/enviar.php`
  - `public_html/schema.sql`

## 2) Base de datos

- Creá una base MySQL en Hostinger.
- Importá `public_html/schema.sql`.
- Editá `public_html/config.php` con tus credenciales.

## 3) Formulario

El frontend manda `POST` a `enviar.php` con:
- `nombre`
- `telefono`
- `email`
- `mensaje`
- `origen`

La respuesta esperada es texto plano: `OK`.

