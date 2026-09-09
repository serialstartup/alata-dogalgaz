import MaterialIcon from "./MaterialIcon";

export default function NumberedStepCard({
  number,
  icon,
  title,
  description,
}: {
  number: number;
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border bg-surface p-6 shadow-card">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-label-lg font-semibold text-white">
          {number}
        </span>
        <MaterialIcon name={icon} className="text-2xl text-primary" />
      </div>
      <h3 className="text-headline-sm font-heading text-tertiary">{title}</h3>
      <p className="text-body-md text-neutral">{description}</p>
    </div>
  );
}
