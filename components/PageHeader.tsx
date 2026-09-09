import Image from "next/image";
import { ReactNode } from "react";
import Badge from "./Badge";
import Breadcrumb, { BreadcrumbItem } from "./Breadcrumb";
import Container from "./Container";

export default function PageHeader({
  breadcrumbItems,
  kicker,
  title,
  description,
  image,
  imageAlt,
}: {
  breadcrumbItems: BreadcrumbItem[];
  kicker: string;
  title: string;
  description: ReactNode;
  image?: string;
  imageAlt?: string;
}) {
  if (image) {
    return (
      <div className="relative w-full overflow-hidden">
        <Image
          src={image}
          alt={imageAlt ?? ""}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-inverse-surface/70 to-inverse-surface/30" />
        <Container className="relative flex min-h-[280px] flex-col justify-end gap-3 py-10 lg:min-h-[340px] lg:py-14">
          <Breadcrumb items={breadcrumbItems} tone="light" />
          <Badge tone="light" className="mt-1 w-fit">
            {kicker}
          </Badge>
          <h1 className="mt-2 text-headline-lg font-heading text-white lg:text-headline-xl">
            {title}
          </h1>
          <p className="mt-1 max-w-2xl text-body-lg text-white/85">{description}</p>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full bg-surface-dim py-10 lg:py-14">
      <Container className="flex flex-col gap-3">
        <Breadcrumb items={breadcrumbItems} />
        <Badge tone="primary" className="mt-1 w-fit">
          {kicker}
        </Badge>
        <h1 className="mt-2 text-headline-lg font-heading text-tertiary lg:text-headline-xl">
          {title}
        </h1>
        <p className="mt-1 max-w-2xl text-body-lg text-neutral">{description}</p>
      </Container>
    </div>
  );
}
