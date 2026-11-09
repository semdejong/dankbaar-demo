import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import { Article, Closing } from "@/components/site/Article";
import { PhotoFrame } from "@/components/site/Photo";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Schildersbedrijf Dankbaar is een familiebedrijf sinds 1941 in Lichtenvoorde. Derde generatie, klein team, eigen verfspuiterij, actief in de Achterhoek.",
};

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
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-[68ch] space-y-4">
            <h2 className="text-4xl">Liefde voor het vak</h2>
            <p>
              Ook al doen wij dit werk al tientallen jaren, geen klus is dezelfde. Bij elke opdracht hebben wij oog voor een efficiënte aanpak, geschikte materialen en de geldende regelgeving. Daarbij komt de ervaring van pas.
            </p>
            <p>
              Met een klein team van gedreven vakmensen zetten wij ons in om elk huis en ieder gebouw weer te laten stralen. De lijnen zijn kort, zodat wij snel op een vraag kunnen reageren.
            </p>
            <p>
              Schilderwerk, beglazing, wandafwerking en de verfspuiterij zitten op hetzelfde adres. U hoeft daarvoor niet naar vier bedrijven.
            </p>
            <p>
              Wij werken in de hele Achterhoek, met name in {content.area.join(", ")}.
            </p>
            <p>
              In de bouwvak houden wij de vakantie van regio midden aan.{" "}
              <Link href="/bouwvakantie" className="link font-semibold underline">
                Korte toelichting
              </Link>
              . Data zetten wij niet op de pagina.
            </p>
            <p>
              Wij zoeken een ervaren klantenschilder.{" "}
              <Link href="/vacature" className="link font-semibold underline">
                Bekijk de vacature
              </Link>{" "}
              en bel of mail. Er is geen sollicitatieformulier.
            </p>
          </div>
          <PhotoFrame
            src="/img/over-dankbaar.jpg"
            alt="Achterkant van de bedrijfsbus met het opschrift Dankbaar"
            caption="De bus, met de naam van het schildersbedrijf op de achterdeur."
            ratio="aspect-[427/378]"
          />
        </div>
      </Article>
      <Closing
        title="Kennismaken met het team?"
        text="Een vrijblijvend gesprek begint met een telefoontje of een mail. Wij kijken daarna wat de klus vraagt."
      />
    </>
  );
}
