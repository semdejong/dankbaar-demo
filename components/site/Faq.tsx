import Link from "next/link";

export type FaqItem = {
  q: string;
  a: string;
  link?: { href: string; label: string };
};

export function FaqList({ items }: { items: readonly FaqItem[] }) {
  return (
    <div className="border-y border-foreground/15">
      {items.map((item) => (
        <details key={item.q} className="group border-b border-foreground/15 last:border-b-0">
          <summary className="flex min-h-12 cursor-pointer items-start justify-between gap-4 py-3 font-semibold">
            <span className="pt-1">{item.q}</span>
            <span aria-hidden="true" className="shrink-0 font-display text-3xl leading-none text-brand motion-safe:transition-transform motion-safe:group-open:rotate-45">
              +
            </span>
          </summary>
          <div className="max-w-[68ch] pb-5 pr-8">
            <p>{item.a}</p>
            {item.link ? (
              <p className="mt-3">
                <Link href={item.link.href} className="link font-semibold underline">
                  {item.link.label}
                </Link>
              </p>
            ) : null}
          </div>
        </details>
      ))}
    </div>
  );
}
