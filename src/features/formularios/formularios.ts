import { supabase, supabaseAnonKey, supabaseUrl } from "@/lib/supabaseClient";

export type Formulario = {
  id: string;
  nombre: string;
  email: string;
  mensaje: string | null;
  user_id: string | null;
  leido: boolean;
  leido_at: string | null;
  created_at: string;
};

export type FormularioStatusFilter = "all" | "read" | "unread";

export async function insertarFormulario(params: { nombre: string; email: string; mensaje: string }) {
  if (!supabase) {
    return { error: { message: "Supabase no esta configurado en este build." } };
  }

  const { data: sessionData } = await supabase.auth.getSession();
  const userId = sessionData.session?.user?.id ?? null;

  const payload = {
    nombre: params.nombre.trim(),
    email: params.email.trim(),
    mensaje: params.mensaje.trim() ? params.mensaje.trim() : null,
    user_id: userId,
  };

  const { error } = await supabase.from("formularios").insert([payload]);

  return { error };
}

export async function listarFormularios() {
  if (!supabase) {
    return {
      data: [] as Formulario[],
      error: { message: "Supabase no esta configurado en este build." },
    };
  }

  const { data, error } = await supabase
    .from("formularios")
    .select("id,nombre,email,mensaje,user_id,leido,leido_at,created_at")
    .order("created_at", { ascending: false })
    .limit(500)
    .returns<Formulario[]>();

  return { data: data ?? [], error };
}

export async function actualizarFormularioLeido(formularioId: string, leido: boolean) {
  if (!supabase) {
    return { error: { message: "Supabase no esta configurado en este build." } };
  }

  const { error } = await supabase
    .from("formularios")
    .update({
      leido,
      leido_at: leido ? new Date().toISOString() : null,
    })
    .eq("id", formularioId);

  return { error };
}

export async function enviarEmailFormulario(params: {
  nombre: string;
  correo_electronico: string;
  mensaje: string;
}) {
  if (!supabaseUrl || !supabaseAnonKey) {
    return { error: { message: "Supabase no esta configurado en este build." } };
  }

  const response = await fetch(`${supabaseUrl}/functions/v1/send-email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${supabaseAnonKey}`,
    },
    body: JSON.stringify({
      nombre: params.nombre.trim(),
      correo_electronico: params.correo_electronico.trim(),
      mensaje: params.mensaje.trim(),
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    return { error: { message: errorText || `Edge function respondio ${response.status}` } };
  }

  return { error: null };
}

export function toCsv(formularios: Formulario[]) {
  const headers = ["id", "nombre", "email", "mensaje", "leido", "leido_at", "created_at"];
  const rows = formularios.map((formulario) => [
    formulario.id,
    formulario.nombre,
    formulario.email,
    formulario.mensaje ?? "",
    formulario.leido ? "si" : "no",
    formulario.leido_at ?? "",
    formulario.created_at,
  ]);

  return [headers, ...rows]
    .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","))
    .join("\n");
}
