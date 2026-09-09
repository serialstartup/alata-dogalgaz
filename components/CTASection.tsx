import { ReactNode } from "react";
import Button from "./Button";
import Container from "./Container";

type CTAButton = {
  label: string;
  href: string;
  icon?: string;
};

export default function CTASection({
  variant = "full-bleed",
  kicker,
  title,
  description,
  primary,
  secondary,
}: {
  variant?: "card" | "full-bleed";
  kicker?: string;
  title: ReactNode;
  description?: string;
  primary: CTAButton;
  secondary?: CTAButton;
}) {
  const content = (
    <div className="flex flex-col gap-4">
      {kicker ? (
        <span className="text-label-sm font-semibold uppercase tracking-wider text-white/70">
          {kicker}
        </span>
      ) : null}
      <h2 className="max-w-2xl text-headline-lg font-heading text-white lg:text-headline-xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-body-md text-white/80">{description}</p>
      ) : null}
      <div className="mt-2 flex flex-col gap-3 sm:flex-row">
        <Button href={primary.href} variant="onDark" icon={primary.icon}>
          {primary.label}
        </Button>
        {secondary ? (
          <Button href={secondary.href} variant="onDarkOutline" icon={secondary.icon}>
            {secondary.label}
          </Button>
        ) : null}
      </div>
    </div>
  );

  if (variant === "card") {
    return (
      <section className="w-full bg-surface py-12 lg:py-16">
        <Container>
          <div className="rounded-xl bg-primary px-6 py-10 lg:px-12 lg:py-14">
            {content}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="w-full bg-inverse-surface py-12 lg:py-16">
      <Container>{content}</Container>
    </section>
  );
}
