# Deploy en Hostinger (estatico)

## 1) Generar build

Desde la raiz del proyecto:

```bash
npm run build:hostinger
```

Eso genera el build listo para subir en `hostinger/public_html/`.

## 2) Subida de archivos

Subi **todo el contenido** de `hostinger/public_html/` a la carpeta `public_html/` de tu hosting (Hostinger).

Incluye:
- `index.html` + `assets/` (build del frontend)
- `demos/` (paginas demo)
- `.htaccess` (soporte SPA y fallback 404)

## 3) SPA / 404

El archivo `.htaccess` ya esta incluido para que las rutas internas funcionen bien:
- `/admin`
- `/login`
- cualquier otra ruta SPA

Si el hosting no respeta el fallback, asegurate de subir `.htaccess` junto con `index.html`.

## 4) Formulario

El formulario no usa PHP: guarda directo en Supabase (tabla `formularios`).

## 5) Variables y secretos

- Supabase: `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY`
- Resend: `RESEND_API_KEY` y `CONTACT_TO_EMAIL` en Supabase Secrets
