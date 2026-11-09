import Link from "next/link";
import { VanStripe } from "@/components/site/Marks";

export function WordmarkLine({ children }: { children: string }) {
  return (
    <div className="py-8 sm:py-12">
      <VanStripe className="h-3.5 w-full text-brand" />
      <p className="my-6 max-w-[16ch] font-display text-5xl leading-[1.02] sm:text-7xl">{children}</p>
      <VanStripe className="h-3.5 w-full text-foreground" />
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
  const compact = items.every((item) => !item.text);
  return (
    <div>
      {label ? <h2 className="text-4xl leading-tight sm:text-5xl">{label}</h2> : null}
      {intro ? <p className="mt-4 max-w-[62ch]">{intro}</p> : null}
      <VanStripe className={`${label || intro ? "mt-8" : ""} h-3.5 w-full text-brand`} />
      <ul className={`mt-4 grid gap-3 sm:grid-cols-2 ${columns}`}>
        {items.map((item) => (
          <li key={item.title} className={`border border-foreground/15 bg-white ${compact ? "px-4 py-4" : "px-5 py-6"}`}>
            <span className={`${compact ? "mb-2 h-5" : "mb-4 h-8"} block w-px bg-brand`} aria-hidden="true" />
            <h3 className={`font-display leading-none ${compact ? "text-2xl sm:text-3xl" : "text-3xl"}`}>{item.title}</h3>
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
