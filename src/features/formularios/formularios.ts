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
  if (userError) return { error: userError };

  const userId = userData.user?.id ?? null;

  // Importante (RLS): si el usuario es anónimo, un `.select()` tras el insert puede fallar con 403
  // porque la policy de SELECT está restringida a usuarios autenticados. Por eso no pedimos
  // "return=representation" aquí.
  const { error } = await supabase
    .from("formularios")
    .insert({
      nombre: params.nombre.trim(),
      email: params.email.trim(),
      mensaje: params.mensaje?.trim() ? params.mensaje.trim() : null,
      user_id: userId,
    });

  return { error };
}
