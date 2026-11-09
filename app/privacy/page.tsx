import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import { MailAddress, PhoneText } from "@/components/site/Links";
import { LMark } from "@/components/site/Marks";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Privacy op deze conceptsite voor Schildersbedrijf Dankbaar: geen opgeslagen formulieren, cookieloze demotelling, niet geïndexeerd.",
};

export default function PrivacyPage() {
  return (
    <section data-section="privacy" className="bg-white">
      <div className="mx-auto max-w-3xl px-5 py-14">
        <LMark />
        <h1 className="text-5xl sm:text-6xl">Privacy</h1>
        <div className="mt-6 space-y-4">
          <p>
            Deze pagina hoort bij een conceptwebsite voor {content.company.name} in {content.contact.city}. De site is gemaakt als voorstel door{" "}
            <a className="link underline" href="https://sleads.nl" target="_blank" rel="noopener noreferrer">
              Sleads
            </a>{" "}
            en is gemarkeerd zodat zoekmachines hem niet indexeren.
          </p>
          <p>
            Het concept is geen publicatie namens het bedrijf en vervangt geen eigen documenten van Schildersbedrijf Dankbaar.
          </p>
          <p>
            Formulieren op deze site slaan niets op. De knop opent het mailprogramma op uw apparaat, gericht aan <MailAddress />. Telefoon gaat rechtstreeks naar{" "}
            <PhoneText />. Pas als u het bericht in uw mailprogramma verstuurt, komt het bij het schildersbedrijf terecht.
          </p>
          <p>
            Op de pagina&apos;s staat een cookieloze telling van Sleads (sleads-demo-analytics) om het gebruik van dit concept te meten. Er wordt geen account aangemaakt.
          </p>
          <p>
            Vragen over een klus stelt u aan het schildersbedrijf via{" "}
            <Link href="/contact" className="link font-semibold underline">
              de contactpagina
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
