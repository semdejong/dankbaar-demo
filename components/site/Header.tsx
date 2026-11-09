"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { content, phoneHref } from "@/content";
import { VanStripe } from "@/components/site/Marks";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);

  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header data-section="header" className="sticky top-0 z-40 border-b border-foreground/15 bg-putty">
      <VanStripe className="h-3 w-full text-brand" />
      <div className="mx-auto flex h-[var(--header-h)] max-w-7xl items-center justify-between gap-4 px-4 sm:px-5">
        <Link href="/" className="inline-flex min-h-11 items-center" aria-label="Schildersbedrijf Dankbaar, naar home">
          <Image
            src={content.company.logo}
            alt=""
            width={312}
            height={121}
            priority
            className="h-11 w-auto sm:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-x-5 xl:flex" aria-label="Hoofdmenu">
          {content.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`inline-flex min-h-11 items-center text-[16px] underline-offset-4 hover:underline ${active ? "font-semibold text-brand underline" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a href={phoneHref} data-cta="bellen" className="btn btn-red hidden md:inline-flex">
            Bel {content.contact.phoneDisplay}
          </a>
          <button
            type="button"
            className="btn btn-line xl:hidden"
            aria-expanded={open}
            aria-controls="mobiel-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Sluit" : "Menu"}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobiel-menu"
          aria-label="Mobiel menu"
          className="fixed inset-x-0 bottom-0 top-[calc(var(--header-h)+12px)] z-50 overflow-auto bg-putty px-5 py-4 xl:hidden"
        >
          <ul>
            {content.nav.map((item) => (
              <li key={item.href} className="border-b border-foreground/15">
                <Link href={item.href} className="flex min-h-12 items-center font-display text-3xl" onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
            {content.practical.map((item) => (
              <li key={item.href} className="border-b border-foreground/10">
                <Link href={item.href} className="flex min-h-12 items-center text-[17px]" onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href={phoneHref} data-cta="bellen" className="btn btn-red mt-6 w-full">
            Bel {content.contact.phoneDisplay}
          </a>
        </nav>
      ) : null}
    </header>
  );
}
