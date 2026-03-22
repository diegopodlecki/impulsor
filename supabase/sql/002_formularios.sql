-- Tabla: formularios (envíos desde formularios, con soporte anon + auth)
-- Ejecutar en Supabase: SQL Editor → New query → Run.

create table if not exists public.formularios (
  id uuid primary key default gen_random_uuid(),
  nombre text not null,
  email text not null,
  mensaje text,
  user_id uuid references auth.users (id) on delete set null,
  created_at timestamptz not null default now()
);

alter table public.formularios enable row level security;

-- INSERT: permitir a anon y authenticated, con check para evitar suplantación de user_id
create policy "formularios_insert_anon_or_own"
on public.formularios
for insert
to anon, authenticated
with check (
  (auth.uid() is null and user_id is null)
  or
  (auth.uid() is not null and user_id = auth.uid())
);

-- SELECT: solo permitir al usuario ver sus propios datos
create policy "formularios_select_own"
on public.formularios
for select
to authenticated
using (auth.uid() = user_id);

create index if not exists formularios_user_id_idx on public.formularios (user_id);
create index if not exists formularios_created_at_idx on public.formularios (created_at desc);

