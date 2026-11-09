import type { Metadata } from "next";
import { addressLine, content } from "@/content";
import { FaqList } from "@/components/site/Faq";
import { MailAddress, PhoneButton, PhoneText } from "@/components/site/Links";
import { MailForm } from "@/components/site/MailForm";
import { LMark } from "@/components/site/Marks";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact met Schildersbedrijf Dankbaar: Galileistraat 15, 7131 PE Lichtenvoorde. Bel 0544-371560 of mail info@dankbaar.nl voor een vrijblijvende kennismaking.",
};

export default function ContactPage() {
  return (
    <section data-section="contact" className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-12 lg:grid-cols-2 lg:py-16">
        <div>
          <LMark />
          <h1 className="text-5xl sm:text-6xl">Contact</h1>
          <p className="mt-5 max-w-[40rem]">
            Bel of mail voor een vrijblijvende kennismaking of offerte. Het formulier opent uw mailprogramma. Er gaat geen bericht de deur uit zolang u het daar niet zelf verstuurt.
          </p>
          <address className="mt-8 space-y-2 not-italic">
            <p className="font-semibold">{content.company.name}</p>
            <p>{content.contact.street}</p>
            <p>
              {content.contact.postalCode} {content.contact.city}
            </p>
            <p>
              Tel. <PhoneText />
            </p>
            <p>
              <MailAddress />
            </p>
          </address>
          <div className="mt-6">
            <PhoneButton />
          </div>
          <p className="mt-6">
            <a className="link font-semibold underline" href={content.contact.mapHref} target="_blank" rel="noopener noreferrer">
              Zoek {addressLine} op de kaart
            </a>
          </p>
          <p className="mt-6 max-w-[46ch] text-base">
            Werkgebied: de hele Achterhoek, met name {content.area.join(", ")}.
          </p>
        </div>
        <MailForm page="Contact" />
      </div>
      <div className="mx-auto max-w-7xl px-5 pb-16">
        <h2 className="text-4xl">Voor u belt</h2>
        <div className="mt-6">
          <FaqList items={content.faq} />
        </div>
      </div>
    </section>
  );
}
