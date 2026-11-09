"use client";

import Link from "next/link";
import { content, phoneHref } from "@/content";

export function MobileDock() {
  return (
    <div
      data-section="snelbellen"
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-white/15 bg-accent p-2 md:hidden"
    >
      <a href={phoneHref} data-cta="bellen" className="btn btn-red w-full">
        Bel {content.contact.phoneDisplay}
      </a>
      <Link href="/contact#offerte" data-cta="offerte" className="btn btn-line-light w-full">
        Offerte
      </Link>
    </div>
  );
}
