# 🎯 Create Edge Function "send-email" - CLI Method

## 1. Instalar Supabase CLI
```
npm install -g supabase
```

## 2. Login
```
supabase login
```
→ Abre browser, login Supabase account.

## 3. Link project (wopatioohzopqezqvxbk)
```
supabase link --project-ref wopatioohzopqezqvxbk
```
→ Enter access token if asked.

## 4. Create function
```
supabase functions new send-email
```

## 5. Edit supabase/functions/send-email/index.ts
```
import { serve } from "https://deno.land/std/http/server.ts";

serve(async (req) => {
  console.log("🚀 FUNCION EJECUTADA");

  const { nombre, email, mensaje } = await req.json();
  console.log("Datos recibidos:", { nombre, email });

  // Test simple primero
  return new Response(
    JSON.stringify({ ok: true, message: "Function OK", data: { nombre, email, mensaje } }),
    { headers: { "Content-Type": "application/json" } }
  );
});
```

## 6. Deploy
```
supabase functions deploy send-email
```

## 7. Test directa
```
curl -X POST https://wopatioohzopqezqvxbk.supabase.co/functions/v1/send-email \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Test CLI","email":"test@test","mensaje":"Hola"}'
```
Expect: {ok: true}

## 8. Frontend test
Form submit → Console "📧 Email response: {ok: true}"

## 9. Next (éxito): Add Resend + secret

¡Function lista sin Resend primero!
