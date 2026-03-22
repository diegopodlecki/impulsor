import { supabase } from "@/lib/supabaseClient";

export type Formulario = {
  id: string;
  nombre: string;
  email: string;
  mensaje: string | null;
  user_id: string | null;
  created_at: string;
};

export async function insertarFormulario(params: { nombre: string; email: string; mensaje?: string }) {
  const { data: userData, error: userError } = await supabase.auth.getUser();
  if (userError) return { data: null as Formulario | null, error: userError };

  const userId = userData.user?.id ?? null;

  const { data, error } = await supabase
    .from("formularios")
    .insert({
      nombre: params.nombre.trim(),
      email: params.email.trim(),
      mensaje: params.mensaje?.trim() ? params.mensaje.trim() : null,
      user_id: userId,
    })
    .select("*")
    .single<Formulario>();

  return { data, error };
}
