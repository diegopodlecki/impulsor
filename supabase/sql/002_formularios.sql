-- Tabla: formularios (envios desde formularios, con soporte anon + auth)
-- Ejecutar en Supabase: SQL Editor -> New query -> Run.

create table if not exists public.formularios (
  id uuid primary key default gen_random_uuid(),
  nombre text not null,
  email text not null,
  mensaje text,
  user_id uuid references auth.users (id) on delete set null,
  leido boolean not null default false,
  leido_at timestamptz,
  created_at timestamptz not null default now()
);

alter table public.formularios add column if not exists leido boolean not null default false;
alter table public.formularios add column if not exists leido_at timestamptz;

alter table public.formularios enable row level security;

drop policy if exists "formularios_insert_all" on public.formularios;
drop policy if exists "formularios_insert_anon_or_own" on public.formularios;
create policy "formularios_insert_anon_or_own"
on public.formularios
for insert
to anon, authenticated
with check (
  (auth.uid() is null and user_id is null)
  or
  (auth.uid() is not null and user_id = auth.uid())
);

drop policy if exists "formularios_select_all" on public.formularios;
drop policy if exists "formularios_select_own" on public.formularios;
create policy "formularios_select_own"
on public.formularios
for select
to authenticated
using (true);

drop policy if exists "formularios_update_status" on public.formularios;
create policy "formularios_update_status"
on public.formularios
for update
to authenticated
using (true)
with check (true);

create index if not exists formularios_user_id_idx on public.formularios (user_id);
create index if not exists formularios_created_at_idx on public.formularios (created_at desc);
create index if not exists formularios_leido_idx on public.formularios (leido);
