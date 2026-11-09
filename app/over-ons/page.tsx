import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import { Article, Closing } from "@/components/site/Article";
import { PhotoFrame } from "@/components/site/Photo";
import { HangRail, WordmarkLine } from "@/components/site/Plates";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Schildersbedrijf Dankbaar is een familiebedrijf sinds 1941 in Lichtenvoorde. Derde generatie, klein team, eigen verfspuiterij, actief in de Achterhoek.",
};

const generations = [
  { title: "1941", text: "Het familiebedrijf bestaat sindsdien. Dankbaar is een vertrouwde naam in de regio." },
  { title: "Vader op zoon", text: "De fijne kneepjes van het vak worden doorgegeven, van de ene generatie op de volgende." },
  { title: "Derde generatie", text: "Inmiddels werkt de derde generatie Dankbaar. Klein team, korte lijnen." },
];

const habits = [
  { title: "Geen klus dezelfde", text: "Ook na tientallen jaren beginnen wij elke opdracht opnieuw." },
  { title: "Efficiënte aanpak", text: "Bij elke opdracht hebben wij oog voor een werkwijze die bij de klus past." },
  { title: "Geschikte materialen", text: "De keuze hangt af van de ondergrond en van wat u wilt bereiken." },
  { title: "Regelgeving", text: "Bij elke opdracht houden wij rekening met de geldende regels. De ervaring komt daarbij van pas." },
];

export default function OverOnsPage() {
  return (
    <>
      <Article
        section="over-ons"
        crumb="Over ons"
        title="Van vader op zoon, sinds 1941"
        lede="Dankbaar is een vertrouwde naam in de regio. Het familiebedrijf bestaat sinds 1941. De kneepjes van het vak worden van vader op zoon doorgegeven. Inmiddels werkt de derde generatie Dankbaar."
        image={{
          src: "/img/pand-lichtenvoorde.jpg",
          alt: "Het pand en de bus van Schildersbedrijf Dankbaar in Lichtenvoorde",
          caption: "Werkplaats en bus aan de Galileistraat 15, Lichtenvoorde.",
          ratio: "aspect-[940/450]",
        }}
      >
        <HangRail label="Drie lijnen, één naam" items={generations} />

        <div className="mt-14">
          <WordmarkLine>Liefde voor het vak.</WordmarkLine>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <h2 className="text-4xl">Wat wij meenemen naar elke klus</h2>
            <p className="mt-4 max-w-[58ch]">
              Met een klein team van gedreven vakmensen zetten wij ons in om elk huis en ieder gebouw weer te laten stralen. Omdat de lijnen kort zijn, kunnen wij snel op een vraag reageren.
            </p>
            <div className="mt-8">
              <HangRail items={habits} columns="lg:grid-cols-2" />
            </div>
          </div>
          <PhotoFrame
            src="/img/over-dankbaar.jpg"
            alt="Achterkant van de bedrijfsbus met het opschrift Dankbaar"
            caption="De bus, met de naam van het schildersbedrijf op de achterdeur."
            ratio="aspect-[427/378]"
          />
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <h2 className="text-4xl">Eén adres, vier soorten werk</h2>
            <p className="mt-4">
              Schilderwerk, beglazing, wandafwerking en de verfspuiterij zitten op de Galileistraat. U hoeft daarvoor niet naar vier bedrijven.
            </p>
            <ul className="mt-6 space-y-2">
              {content.services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="link inline-flex min-h-11 items-center font-semibold underline">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <PhotoFrame
            src="/img/Bedrijfshal-sm.jpg"
            alt="De bedrijfshal van Schildersbedrijf Dankbaar met het naambord"
            caption="De hal aan de Galileistraat 15."
            ratio="aspect-[580/338]"
          />
        </div>

        <div className="mt-16">
          <HangRail
            label="De hele Achterhoek"
            intro="Ons werkgebied is de hele Achterhoek, met name deze plaatsen."
            items={content.area.map((town) => ({ title: town }))}
            columns="lg:grid-cols-5"
          />
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <article className="border border-foreground/15 p-6">
            <h2 className="text-3xl">Bouwvak</h2>
            <p className="mt-3">
              Wij hanteren de bouwvakantie van regio midden. Dan houden wij ook vakantie. Data zetten wij niet op de pagina.{" "}
              <Link href="/bouwvakantie" className="link font-semibold underline">
                Korte toelichting
              </Link>
              .
            </p>
          </article>
          <article className="border border-foreground/15 bg-putty p-6">
            <h2 className="text-3xl">Vacature</h2>
            <p className="mt-3">
              Wij zoeken een ervaren klantenschilder voor de particuliere sector. Rijbewijs B is gewenst.{" "}
              <Link href="/vacature" className="link font-semibold underline">
                Lees de vacature
              </Link>
              . Er is geen sollicitatieformulier.
            </p>
          </article>
        </div>
      </Article>
      <Closing
        title="Kennismaken met het team?"
        text="Een vrijblijvend gesprek begint met een telefoontje of een mail. Wij kijken daarna wat de klus vraagt."
      />
    </>
  );
}
