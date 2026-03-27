import { serve } from "https://deno.land/std/http/server.ts";

type Payload = {
  nombre?: string;
  correo_electronico?: string;
  mensaje?: string;
  name?: string;
  email?: string;
  message?: string;
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function escapeHtml(value: string): string {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

serve(async (req) => {
  console.log("resend-email: request", { method: req.method });

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
    console.error("resend-email: missing RESEND_API_KEY");
    return new Response(JSON.stringify({ ok: false, error: "Missing RESEND_API_KEY" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  if (!toEmail) {
    console.error("resend-email: missing CONTACT_TO_EMAIL");
    return new Response(JSON.stringify({ ok: false, error: "Missing CONTACT_TO_EMAIL" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  let payload: Payload;
  try {
    payload = await req.json();
  } catch {
    console.error("resend-email: invalid JSON body");
    return new Response(JSON.stringify({ ok: false, error: "Invalid JSON body" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const nombre = (payload.nombre ?? payload.name ?? "").trim();
  const correoElectronico = (payload.correo_electronico ?? payload.email ?? "").trim();
  const mensaje = (payload.mensaje ?? payload.message ?? "").trim();

  console.log("resend-email: payload", {
    nombre,
    correoElectronico,
    mensajePreview: mensaje.slice(0, 80),
    toEmail,
  });

  if (!nombre || !correoElectronico || !mensaje) {
    console.error("resend-email: missing fields", {
      hasNombre: Boolean(nombre),
      hasCorreoElectronico: Boolean(correoElectronico),
      hasMensaje: Boolean(mensaje),
    });
    return new Response(JSON.stringify({ ok: false, error: "Missing fields" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  if (!isValidEmail(correoElectronico)) {
    console.error("resend-email: invalid email format", { correoElectronico });
    return new Response(JSON.stringify({ ok: false, error: "Invalid email format" }), {
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
        <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
        <p><strong>Email:</strong> ${escapeHtml(correoElectronico)}</p>
        <p><strong>Mensaje:</strong> ${escapeHtml(mensaje)}</p>
      `,
    }),
  });

  const responseText = await response.text();
  console.log("resend-email: resend response", {
    status: response.status,
    ok: response.ok,
    body: responseText,
  });

  if (!response.ok) {
    console.error("resend-email: resend rejected request", {
      status: response.status,
      body: responseText,
    });
    return new Response(JSON.stringify({ ok: false, error: responseText }), {
      status: response.status,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  console.log("resend-email: email accepted", {
    status: response.status,
    toEmail,
    replyTo: correoElectronico,
  });

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
});

