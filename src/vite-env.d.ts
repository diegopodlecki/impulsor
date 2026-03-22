/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WA_PHONE?: string;
  readonly VITE_LEADS_WEBHOOK_URL?: string;
  readonly VITE_SUPABASE_URL?: string;
  readonly VITE_SUPABASE_ANON_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
