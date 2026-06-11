# Plan de Diagnóstico Formulario Supabase

Estado: ✅ COMPLETADO - Botones agregados

## Pasos completados:
- [x] Analizar archivos (Index.tsx, supabaseClient.ts, formularios.ts)
- [x] Crear plan de diagnóstico
- [x] Confirmar plan con usuario
- [x] 1. Crear TODO.md con pasos
- [x] 2. Editar src/pages/Index.tsx: ✅ Agregada sección "🔍 Botones de Diagnóstico" después del form:
  - ✅ Botón verde "Test React Click" → console.log("🔥 CLICK FUNCIONA")
  - ✅ Botón azul "Test Supabase Insert" → insert directo a "formularios" con datos test, logs DATA/ERROR/null check
- [x] 3. Verificar cambios (diff OK, sin errores linter)

## Próximos pasos para usuario:
1. **Ejecutar** `bun dev` (o verificar si ya corre)
2. **Abrir** http://localhost:5173/#diagnostico
3. **Abrir consola** F12 → Console
4. **Test 1**: Click "✅ Test React Click" → debe mostrar "🔥 CLICK FUNCIONA - React eventos OK"
5. **Test 2**: Click "🧪 Test Supabase Insert" → revisar logs:
   | Resultado | Significado | Acción |
   |-----------|-------------|--------|
   | "🔥 CLICK FUNCIONA" | React OK | ✅ |
   | "🔥 probando supabase" + "❌ supabase es null" | Env vars faltan | Agregar VITE_SUPABASE_URL/VITE_SUPABASE_ANON_KEY a .env |
   | DATA: [...] ERROR: null | Supabase OK → problema en form validation | Revisar form states/handleSubmit |
   | ERROR: {message: "..."} | Config/RLS/policy error | Revisar msg (ej: tabla RLS necesita user auth?) |
6. **Reportar** logs aquí → solución específica

**Diagnóstico listo. Ejecutá pruebas y compartí console output.**

## Para remover botones después:
```bash
# Opcional: comentar o eliminar la sección {/* 🔍 BOTONES DE DIAGNÓSTICO */}
```


