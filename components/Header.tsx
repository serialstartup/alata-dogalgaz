"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/data/nav";
import { site } from "@/data/site";
import MaterialIcon from "./MaterialIcon";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="bg-inverse-surface text-inverse-on-surface">
        <div className="mx-auto flex w-full max-w-300 flex-wrap items-center justify-between gap-2 px-2 py-1.5 text-label-sm lg:px-4">
          <div className="hidden items-center gap-3 sm:flex">
            <a href={`tel:${site.phoneTel}`} className="hover:underline">
              {site.phoneDisplay}
            </a>
            <span className="text-white/40">|</span>
            <span>Çalışma Saatleri: {site.workingHours}</span>
          </div>
          <a
            href={`tel:${site.phoneTel}`}
            className="text-label-sm font-semibold sm:hidden"
          >
            {site.phoneDisplay}
          </a>
          <span className="rounded bg-error px-2 py-0.5 text-label-sm font-bold tracking-wide text-white">
            {site.emergency.label} {site.emergency.number}
          </span>
        </div>
      </div>

      <div className="bg-surface">
        <div className="mx-auto flex h-16 w-full items-center justify-between px-4 lg:px-6">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/alata-logo-removebg.png"
              alt="Alata Doğalgaz Logo"
              width={240}
              height={160}
              className="h-16 w-auto object-contain lg:-my-8 lg:h-32"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-lg px-3 py-2 text-label-lg font-body transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-tertiary/80 hover:text-tertiary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <Link
              href="/iletisim"
              className="hidden items-center gap-2 rounded-lg bg-primary px-4 py-2 text-label-lg font-semibold text-white shadow-card transition-colors hover:bg-primary-dark sm:inline-flex"
            >
              İletişime Geçin
            </Link>
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
              onClick={() => setMenuOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-tertiary lg:hidden"
            >
              <MaterialIcon name={menuOpen ? "close" : "menu"} />
            </button>
          </div>
        </div>

        {menuOpen ? (
          <nav
            id="mobile-menu"
            className="flex flex-col gap-1 border-t border-border px-4 py-3 lg:hidden"
          >
            {navItems.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-lg px-3 py-2.5 text-label-lg font-body ${
                    isActive
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-tertiary/80"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/iletisim"
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-label-lg font-semibold text-white"
            >
              İletişime Geçin
            </Link>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
