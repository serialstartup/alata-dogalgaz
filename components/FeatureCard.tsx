import IconBadge from "./IconBadge";

export default function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border bg-surface p-6 shadow-card">
      <IconBadge icon={icon} />
      <h3 className="text-headline-sm font-heading text-tertiary">{title}</h3>
      <p className="text-body-md text-neutral">{description}</p>
    </div>
  );
}
