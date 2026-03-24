import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Admin() {
  const [formularios, setFormularios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFormularios = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("formularios")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching formularios:", error);
        setError(error.message);
        setFormularios([]);
      } else {
        setFormularios(data || []);
        setError(null);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setError("Error inesperado");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFormularios();
  }, []);

  const refresh = () => fetchFormularios();

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-lg">Cargando formularios...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Panel Admin - Formularios</h1>
          <Button onClick={refresh} variant="outline">
            🔄 Refresh
          </Button>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800">Error: {error}</p>
          </div>
        )}

        <div className="bg-card border rounded-xl overflow-hidden">
          <div className="p-6 border-b">
            <div className="flex gap-4 text-sm text-muted-foreground">
              <span>Total: {formularios.length}</span>
              {formularios.length === 0 && <span>No hay formularios aún</span>}
            </div>
          </div>

          {formularios.length === 0 ? (
            <div className="p-12 text-center text-muted-foreground">
              <p>No hay registros. Envía un formulario para verlos aquí.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left p-4 font-semibold">Nombre</th>
                    <th className="text-left p-4 font-semibold">Email</th>
                    <th className="text-left p-4 font-semibold">Mensaje</th>
                    <th className="text-left p-4 font-semibold">Fecha</th>
                  </tr>
                </thead>
                <tbody>
                  {formularios.map((form) => (
                    <tr key={form.id} className="border-b hover:bg-muted/25">
                      <td className="p-4 font-medium">{form.nombre}</td>
                      <td className="p-4">{form.email}</td>
                      <td className="p-4 max-w-md">
                        <div className="line-clamp-3 text-sm">{form.mensaje}</div>
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">
                        {new Date(form.created_at).toLocaleString('es-AR')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
