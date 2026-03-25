# Debug Email Function

## Chequeos rapidos

1. Supabase -> Edge Functions -> `send-email` existe y fue deployada.
2. Supabase -> Secrets contiene:
- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
3. Probar la funcion con un POST al endpoint.
4. Revisar logs si Resend rechaza la entrega.

## Respuesta esperada

- `200 { ok: true }` si todo salio bien
- `400` si faltan campos
- `500` si falta el secreto o Resend falla
