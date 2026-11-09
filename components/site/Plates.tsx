import Link from "next/link";
import { VanStripe } from "@/components/site/Marks";

export function WordmarkLine({ children }: { children: string }) {
  return (
    <div className="border-y border-foreground/15">
      <div className="py-8 sm:py-12">
        <VanStripe className="h-4 w-32 text-brand" />
        <p className="mt-5 max-w-[14ch] font-display text-5xl leading-[0.92] sm:text-7xl">{children}</p>
      </div>
    </div>
  );
}

export function HangRail({
  label,
  intro,
  items,
  columns = "lg:grid-cols-3",
}: {
  label?: string;
  intro?: string;
  items: readonly { title: string; text?: string }[];
  columns?: string;
}) {
  return (
    <div>
      {label ? <h2 className="text-4xl sm:text-5xl">{label}</h2> : null}
      {intro ? <p className="mt-4 max-w-[62ch]">{intro}</p> : null}
      <VanStripe className={`${label || intro ? "mt-8" : ""} h-4 w-full text-foreground`} />
      <ul className={`grid border-l border-t border-foreground/15 sm:grid-cols-2 ${columns}`}>
        {items.map((item) => (
          <li key={item.title} className="border-b border-r border-foreground/15 px-5 py-6">
            <span className="mb-4 block h-8 w-px bg-brand" aria-hidden="true" />
            <h3 className="font-display text-3xl leading-none">{item.title}</h3>
            {item.text ? <p className="mt-3 max-w-[36ch] text-base">{item.text}</p> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Alongside({
  items,
}: {
  items: readonly { href: string; title: string; text: string }[];
}) {
  return (
    <div className="mt-16">
      <h2 className="text-4xl">In dezelfde werkplaats</h2>
      <ul className="mt-6 grid gap-px bg-foreground/15 sm:grid-cols-3">
        {items.map((item) => (
          <li key={item.href} className="bg-putty">
            <Link href={item.href} className="flex h-full min-h-44 flex-col px-5 py-6 hover:bg-white">
              <span className="l-mark" aria-hidden="true" />
              <span className="font-display text-3xl leading-none">{item.title}</span>
              <span className="mt-3 text-base">{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
