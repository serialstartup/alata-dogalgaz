import { ReactNode } from "react";
import Container from "./Container";

type Background = "surface" | "surface-dim" | "inverse";

const backgroundClasses: Record<Background, string> = {
  surface: "bg-surface",
  "surface-dim": "bg-surface-dim",
  inverse: "bg-inverse-surface text-inverse-on-surface",
};

export default function Section({
  children,
  background = "surface",
  className = "",
  containerClassName = "",
}: {
  children: ReactNode;
  background?: Background;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section className={`w-full py-12 lg:py-16 ${backgroundClasses[background]} ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
