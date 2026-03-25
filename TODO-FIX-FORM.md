# Fix Formulario Principal → Supabase

✅ **FIX APLICADO** - handleSubmit simplificado

## Cambios realizados en src/pages/Index.tsx:
| ✓ | Cambio |
|---|--------|
| ✅ | Removida validación estricta (permite empty fields con defaults) |
| ✅ | Insert directo sin auth.getUser()/user_id |
| ✅ | Logs mejorados: "🔥 FORM datos raw", "✅ DATA", "❌ ERROR" |
| ✅ | WhatsApp movido post-insert |
| ✅ | No alert() - solo toast + statusText |
| ✅ | Removido mensajeDb complejo - usa message directo |

**TS Errors fixed:** Removidas refs a leadId/fecha no definidas.

## Test ahora:
```
1. bun dev (reload)
2. localhost:5173/#diagnostico
3. Fill form (puede ser empty)
4. Submit → Console logs + Table Editor
5. Verificar insert OK como test button
```

**Si OK → Próximo:** Restaurar validación suave + mensajeDb.

**Estado:** Listo para test real.

