import Link from "next/link";
import { content, phoneHref } from "@/content";
import { LMark } from "@/components/site/Marks";

export default function NotFound() {
  return (
    <section data-section="niet-gevonden" className="bg-putty">
      <div className="mx-auto max-w-3xl px-5 py-20">
        <LMark />
        <h1 className="text-5xl">Deze pagina bestaat hier niet</h1>
        <p className="mt-4">Het adres klopt niet op deze conceptsite. De diensten en het contact staan hieronder.</p>
        <ul className="mt-8 space-y-2">
          {content.nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="link inline-flex min-h-11 items-center font-semibold underline">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6">
          <a href={phoneHref} data-cta="bellen" className="btn btn-red">
            Bel {content.contact.phoneDisplay}
          </a>
        </p>
      </div>
    </section>
  );
}
