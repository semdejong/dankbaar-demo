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

const plates = [
  {
    title: "Een concept",
    text: `Deze pagina hoort bij een conceptwebsite voor ${content.company.name} in ${content.contact.city}. Sleads maakte het voorstel. Zoekmachines krijgen het verzoek de pagina’s niet te indexeren. Het concept is geen publicatie namens het bedrijf en vervangt geen eigen documenten van Schildersbedrijf Dankbaar.`,
  },
  {
    title: "Uw mailprogramma",
    text: "Formulieren slaan niets op. De knop opent het mailprogramma op uw apparaat. Pas als u het bericht daar verstuurt, komt het bij het schildersbedrijf terecht. Telefoon gaat rechtstreeks naar het bedrijf.",
  },
  {
    title: "Cookieloze telling",
    text: "Op de pagina’s staat een cookieloze telling van Sleads, sleads-demo-analytics, om het gebruik van dit concept te meten. Er wordt geen account aangemaakt.",
  },
];

export default function PrivacyPage() {
  return (
    <section data-section="privacy" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14">
        <LMark />
        <h1 className="max-w-[12ch] text-5xl sm:text-7xl">Privacy van dit concept</h1>
        <p className="mt-6 max-w-[62ch]">
          Vragen over een klus stelt u aan Schildersbedrijf Dankbaar, via <PhoneText /> of <MailAddress />.{" "}
          <Link href="/contact" className="link font-semibold underline">
            Naar de contactpagina
          </Link>
          .
        </p>
        <div className="mt-12 grid gap-px bg-foreground/15 lg:grid-cols-3">
          {plates.map((plate) => (
            <article key={plate.title} className="bg-putty px-5 py-8">
              <span className="mb-4 block h-8 w-px bg-brand" aria-hidden="true" />
              <h2 className="text-4xl">{plate.title}</h2>
              <p className="mt-4 text-base">{plate.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
