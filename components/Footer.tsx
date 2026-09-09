import Link from "next/link";
import { navItems } from "@/data/nav";
import { services } from "@/data/services";
import { site } from "@/data/site";
import MaterialIcon from "./MaterialIcon";

export default function Footer() {
  return (
    <footer className="w-full bg-inverse-surface text-inverse-on-surface">
      <div className="mx-auto grid w-full max-w-[75rem] grid-cols-1 gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-6">
        <div className="flex flex-col gap-3">
          <span className="text-headline-sm font-heading font-semibold text-white">
            {site.name}
          </span>
          <p className="text-body-sm text-inverse-on-surface/80">
            {site.description}
          </p>
          <span className="mt-2 inline-flex w-fit items-center gap-1.5 rounded bg-error px-2 py-1 text-label-sm font-bold text-white">
            <MaterialIcon name="emergency" className="text-sm" />
            {site.emergency.label} {site.emergency.number}
          </span>
        </div>

        <div>
          <h3 className="mb-3 text-label-lg font-heading font-semibold text-white">
            Hızlı Menü
          </h3>
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-body-sm text-inverse-on-surface/80 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-label-lg font-heading font-semibold text-white">
            Hizmetlerimiz
          </h3>
          <ul className="flex flex-col gap-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/hizmetlerimiz#${service.slug}`}
                  className="text-body-sm text-inverse-on-surface/80 hover:text-white"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-label-lg font-heading font-semibold text-white">
            İletişim &amp; Destek
          </h3>
          <ul className="flex flex-col gap-3 text-body-sm text-inverse-on-surface/80">
            <li className="flex items-start gap-2">
              <MaterialIcon name="location_on" className="mt-0.5 text-lg" />
              <span>{site.address.full}</span>
            </li>
            <li className="flex items-center gap-2">
              <MaterialIcon name="call" className="text-lg" />
              <a href={`tel:${site.phoneTel}`} className="hover:text-white">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MaterialIcon name="mail" className="text-lg" />
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MaterialIcon name="schedule" className="text-lg" />
              <span>Çalışma Saatleri: {site.workingHours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto w-full max-w-[75rem] px-4 py-4 text-center text-label-sm text-inverse-on-surface/60 lg:px-6 lg:text-left">
          Copyright © {new Date().getFullYear()} {site.name}. Tüm Hakları Saklıdır.
        </div>
      </div>
    </footer>
  );
}
