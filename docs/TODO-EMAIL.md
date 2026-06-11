# Notificaciones Email Automaticas

La integracion ya esta lista en el repo:
- Edge Function: `supabase/functions/send-email/index.ts`
- Frontend: `src/components/ContactForm.tsx`

## Resumen

1. Crear el secreto en Supabase:
- `RESEND_API_KEY` = tu API key real de Resend
- `CONTACT_TO_EMAIL` = el email que recibira los contactos

2. Deploy de la Edge Function:
- Nombre: `send-email`
- La funcion toma `nombre`, `correo_electronico` y `mensaje`

3. Frontend:
- Luego del insert, el formulario llama a la funcion automaticamente

4. Test:
- Enviar un formulario desde la web
- Confirmar insercion en Supabase
- Confirmar llegada del email

## URL de la funcion

`https://wopatioohzopqezqvxbk.supabase.co/functions/v1/send-email`
