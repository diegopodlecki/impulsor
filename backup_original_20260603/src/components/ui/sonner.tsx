import * as React from "react";
import { Toaster as SonnerToaster } from "sonner";

type SonnerProps = React.ComponentProps<typeof SonnerToaster>;

export function Toaster(props: SonnerProps) {
  return (
    <SonnerToaster
      theme="dark"
      richColors
      closeButton
      toastOptions={{
        className:
          "bg-[hsl(var(--card))] text-[hsl(var(--foreground))] border border-[hsl(var(--border))] shadow-card",
      }}
      {...props}
    />
  );
}

