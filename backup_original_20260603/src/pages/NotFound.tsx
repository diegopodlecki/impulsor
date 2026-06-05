import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container py-20">
        <div className="mx-auto max-w-xl rounded-2xl border border-border bg-gradient-card p-8 text-left shadow-card">
          <p className="text-sm text-muted-foreground">404</p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight">No encontramos esa página</h1>
          <p className="mt-3 text-muted-foreground">
            Si llegaste acá por un link roto, escribime y lo arreglo.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="hero" className="justify-center">
              <Link to="/">
                <ArrowLeft />
                Volver al inicio
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
