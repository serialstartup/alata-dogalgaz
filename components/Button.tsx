import Link from "next/link";
import { ReactNode } from "react";
import MaterialIcon from "./MaterialIcon";

type Variant = "primary" | "secondary" | "outline" | "onDark" | "onDarkOutline";

const variantClasses: Record<Variant, string> = {
  primary: "bg-primary text-white hover:bg-primary-dark",
  secondary: "bg-secondary text-white hover:brightness-110",
  outline:
    "bg-surface text-tertiary border border-border hover:bg-surface-container",
  onDark: "bg-white text-primary hover:bg-white/90",
  onDarkOutline:
    "bg-transparent text-white border border-white/30 hover:bg-white/10",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  icon?: string;
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
  onClick?: never;
  type?: never;
};

type ButtonAsButton = CommonProps & {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit";
};

export default function Button(props: ButtonAsLink | ButtonAsButton) {
  const { children, variant = "primary", icon, className = "" } = props;
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-label-lg font-heading font-semibold shadow-card transition-colors duration-200 ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {children}
      {icon ? <MaterialIcon name={icon} className="text-base" /> : null}
    </>
  );

  if ("href" in props && props.href) {
    const isInternal = props.href.startsWith("/");
    if (isInternal) {
      return (
        <Link href={props.href} className={classes}>
          {content}
        </Link>
      );
    }
    return (
      <a
        href={props.href}
        className={classes}
        target={props.href.startsWith("http") ? "_blank" : undefined}
        rel={props.href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={classes}
    >
      {content}
    </button>
  );
}
