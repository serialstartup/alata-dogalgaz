import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export default function Breadcrumb({
  items,
  tone = "default",
}: {
  items: BreadcrumbItem[];
  tone?: "default" | "light";
}) {
  const isLight = tone === "light";
  return (
    <nav
      aria-label="Breadcrumb"
      className={`text-body-sm ${isLight ? "text-white/70" : "text-neutral"}`}
    >
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-1.5">
            {index > 0 ? <span aria-hidden="true">/</span> : null}
            {item.href ? (
              <Link
                href={item.href}
                className={isLight ? "hover:text-white" : "hover:text-primary"}
              >
                {item.label}
              </Link>
            ) : (
              <span
                aria-current="page"
                className={isLight ? "text-white" : "text-tertiary"}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
