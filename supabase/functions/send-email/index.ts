import { serve } from "https://deno.land/std/http/server.ts";

type Payload = {
  nombre?: string;
  correo_electronico?: string;
  mensaje?: string;
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ ok: false, error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const resendApiKey = Deno.env.get("RESEND_API_KEY");
  const toEmail = Deno.env.get("CONTACT_TO_EMAIL");

  if (!resendApiKey) {
    return new Response(JSON.stringify({ ok: false, error: "Missing RESEND_API_KEY" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  if (!toEmail) {
    return new Response(JSON.stringify({ ok: false, error: "Missing CONTACT_TO_EMAIL" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  let payload: Payload;
  try {
    payload = await req.json();
  } catch {
    return new Response(JSON.stringify({ ok: false, error: "Invalid JSON body" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const nombre = (payload.nombre ?? "").trim();
  const correoElectronico = (payload.correo_electronico ?? "").trim();
  const mensaje = (payload.mensaje ?? "").trim();

  if (!nombre || !correoElectronico || !mensaje) {
    return new Response(JSON.stringify({ ok: false, error: "Missing fields" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Formulario <onboarding@resend.dev>",
      to: [toEmail],
      subject: "Nuevo mensaje desde la web",
      reply_to: correoElectronico || undefined,
      html: `
        <h2>Nuevo contacto</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${correoElectronico}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
      `,
    }),
  });

  const responseText = await response.text();

  if (!response.ok) {
    return new Response(JSON.stringify({ ok: false, error: responseText }), {
      status: response.status,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
});
