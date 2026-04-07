import { createClient, type SupabaseClient } from "@supabase/supabase-js";

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

function getJwtRole(token: string) {
  try {
    const parts = token.split(".");
    if (parts.length < 2) return null;

    const base64Url = parts[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(base64Url.length / 4) * 4, "=");
    if (typeof atob !== "function") return null;
    const json = atob(base64);

    const payload = JSON.parse(json) as { role?: string };
    return payload.role ?? null;
  } catch {
    return null;
  }
}

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

if (supabaseAnonKey && getJwtRole(supabaseAnonKey) === "service_role") {
  throw new Error("VITE_SUPABASE_ANON_KEY parece ser una key de service_role. Usa la anon public key.");
}

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl!, supabaseAnonKey!, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    })
  : null;
