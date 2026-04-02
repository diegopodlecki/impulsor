import * as React from "react";
import type { LucideIcon } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost";

const buttonStyles: Record<Variant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost: "btn-ghost",
};

export function ButtonPrimary({
  className = "",
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${buttonStyles.primary} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}

export function ButtonSecondary({
  className = "",
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${buttonStyles.secondary} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}

export function ButtonGhost({
  className = "",
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${buttonStyles.ghost} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}

type ServiceCardProps = {
  title: string;
  description: string;
  icon?: LucideIcon;
  badge?: string;
  className?: string;
  children?: React.ReactNode;
};

export function ServiceCard({ title, description, icon: Icon, badge, className = "", children }: ServiceCardProps) {
  return (
    <article className={`card-service ${className}`.trim()}>
      <div className="flex items-start justify-between gap-4">
        <div>
          {badge ? <span className="badge-chip">{badge}</span> : null}
          <h3 className="mt-4 text-h4 text-white">{title}</h3>
        </div>
        {Icon ? (
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color-mix(in_srgb,var(--color-primary)_12%,transparent)] text-[var(--color-primary)]">
            <Icon className="h-5 w-5" />
          </div>
        ) : null}
      </div>

      <p className="mt-4 text-body text-white/70">{description}</p>
      {children ? <div className="mt-6">{children}</div> : null}
    </article>
  );
}

export function BadgeChip({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={`badge-chip ${className}`.trim()}>{children}</span>;
}

type FieldProps = {
  label: string;
  helperText?: string;
  error?: string;
  success?: string;
  className?: string;
};

export function TextField({
  label,
  helperText,
  error,
  success,
  className = "",
  ...props
}: FieldProps & React.InputHTMLAttributes<HTMLInputElement>) {
  const state = error ? "error" : success ? "success" : undefined;

  return (
    <label className={`grid gap-2 ${className}`.trim()}>
      <span className="text-label text-white/80">{label}</span>
      <input className="input-shell" data-state={state} {...props} />
      {error ? (
        <span className="text-small text-[var(--color-error)]">{error}</span>
      ) : success ? (
        <span className="text-small text-[var(--color-success)]">{success}</span>
      ) : helperText ? (
        <span className="text-small text-white/55">{helperText}</span>
      ) : null}
    </label>
  );
}

export function TextAreaField({
  label,
  helperText,
  error,
  success,
  className = "",
  ...props
}: FieldProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const state = error ? "error" : success ? "success" : undefined;

  return (
    <label className={`grid gap-2 ${className}`.trim()}>
      <span className="text-label text-white/80">{label}</span>
      <textarea className="textarea-shell" data-state={state} {...props} />
      {error ? (
        <span className="text-small text-[var(--color-error)]">{error}</span>
      ) : success ? (
        <span className="text-small text-[var(--color-success)]">{success}</span>
      ) : helperText ? (
        <span className="text-small text-white/55">{helperText}</span>
      ) : null}
    </label>
  );
}
