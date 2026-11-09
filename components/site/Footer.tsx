import Link from "next/link";
import { addressLine, content } from "@/content";
import { MailAddress, PhoneText } from "@/components/site/Links";
import { LMark, VanStripe } from "@/components/site/Marks";

export function SiteFooter() {
  return (
    <footer data-section="footer" className="on-dark bg-accent text-white">
      <VanStripe className="h-4 w-full text-white" />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <LMark light />
          <p className="font-display text-3xl leading-none">{content.company.name}</p>
          <p className="mt-4 text-base text-white">
            Familiebedrijf sinds {content.company.since}. Derde generatie Dankbaar, werkplaats in Lichtenvoorde.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-white">Diensten</h2>
          <ul className="mt-4 space-y-2">
            {content.services.map((service) => (
              <li key={service.href}>
                <Link href={service.href} className="link inline-flex min-h-11 items-center underline">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-2xl text-white">Praktisch</h2>
          <ul className="mt-4 space-y-2">
            {content.practical.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link inline-flex min-h-11 items-center underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-2xl text-white">Contact</h2>
          <address className="mt-4 space-y-2 text-base not-italic">
            <p>{content.contact.street}</p>
            <p>
              {content.contact.postalCode} {content.contact.city}
            </p>
            <p>
              <PhoneText className="text-white" />
            </p>
            <p>
              <MailAddress className="text-white" />
            </p>
            <p>
              <a className="link inline-flex min-h-11 items-center underline" href={content.contact.mapHref} target="_blank" rel="noopener noreferrer">
                Zoek het adres op de kaart
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 pb-16 pt-6 text-base sm:flex-row sm:items-start sm:justify-between">
          <p>
            {content.company.name} · {addressLine}
          </p>
          <p>
            <a className="link underline" href="https://sleads.nl" target="_blank" rel="noopener noreferrer">
              Concept door Sleads
            </a>
            <span aria-hidden="true"> · </span>
            Deze conceptsite wordt niet geïndexeerd.
          </p>
        </div>
      </div>
    </footer>
  );
}
