import { ReactNode } from "react";

type Tone = "primary" | "secondary" | "neutral" | "light";

const toneClasses: Record<Tone, string> = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  neutral: "bg-surface-container text-neutral",
  light: "bg-white/15 text-white backdrop-blur-sm border border-white/25",
};

export default function Badge({
  children,
  tone = "primary",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-label-sm font-body uppercase tracking-wider ${toneClasses[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
