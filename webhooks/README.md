# Webhooks de leads (ejemplos)

La landing envía un `POST` al webhook configurado en `VITE_LEADS_WEBHOOK_URL`.

- Body: JSON (string) con campos: `nombre`, `email`, `negocio`, `mensaje`, `fecha` (+ extras).
- Para compatibilidad, el request se envía como `no-cors` y sin headers custom: el backend debe leer el body y parsear JSON.

## Opción A: Google Apps Script (Google Sheets)

Archivo: `webhooks/google-apps-script/Code.gs`

1. Crea un Google Sheet y copia su ID (en la URL).
2. Abre Apps Script y pega el contenido de `Code.gs`.
3. Deploy → **Web app** → Access: **Anyone**.
4. Usa la URL `.../exec` como `VITE_LEADS_WEBHOOK_URL`.

## Opción B: PHP simple (guardar en CSV)

Archivo: `webhooks/php/lead-webhook.php`

1. Sube el archivo a tu hosting (por ejemplo `https://tudominio.com/lead-webhook.php`).
2. Crea permisos de escritura en la carpeta (para poder crear `leads.csv`).
3. Configura `VITE_LEADS_WEBHOOK_URL` con esa URL.

Nota: estos ejemplos son una base. Para producción, agrega validación, rate limiting y seguridad (token/secret).

