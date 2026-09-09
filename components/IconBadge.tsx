import MaterialIcon from "./MaterialIcon";

type Tone = "primary" | "secondary";

const toneClasses: Record<Tone, string> = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
};

export default function IconBadge({
  icon,
  tone = "primary",
  size = "md",
}: {
  icon: string;
  tone?: Tone;
  size?: "md" | "lg";
}) {
  const sizeClasses = size === "lg" ? "h-14 w-14" : "h-12 w-12";
  return (
    <div
      className={`flex ${sizeClasses} shrink-0 items-center justify-center rounded-lg ${toneClasses[tone]}`}
    >
      <MaterialIcon name={icon} className="text-2xl" />
    </div>
  );
}
