import Image from "next/image";
import Link from "next/link";
import { Service } from "@/data/services";
import IconBadge from "./IconBadge";
import MaterialIcon from "./MaterialIcon";

export default function ServiceCardDetailed({
  service,
  href,
}: {
  service: Service;
  href?: string;
}) {
  const className = `group flex flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-card scroll-mt-28${
    href ? " transition-shadow hover:shadow-card-hover" : ""
  }`;

  const content = (
    <>
      <div className="relative h-64 w-full lg:h-72">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          sizes="(min-width: 640px) 50vw, 100vw"
        />
        <div className="absolute left-4 top-4">
          <IconBadge icon={service.icon} />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-headline-md font-heading text-tertiary">
          {service.title}
        </h3>
        <p className="text-body-md text-neutral">{service.description}</p>
        <ul className="mt-1 flex flex-col gap-2">
          {service.highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-2 text-body-sm text-tertiary">
              <MaterialIcon name="check_circle" className="mt-0.5 text-lg text-primary" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
        {href ? (
          <span className="mt-1 inline-flex items-center gap-1 text-label-md font-semibold text-primary">
            Detaylı Bilgi
            <MaterialIcon
              name="arrow_forward"
              className="text-base transition-transform group-hover:translate-x-0.5"
            />
          </span>
        ) : null}
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} id={service.slug} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <div id={service.slug} className={className}>
      {content}
    </div>
  );
}
