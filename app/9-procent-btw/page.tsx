import type { Metadata } from "next";
import Link from "next/link";
import { Article, Closing } from "@/components/site/Article";
import { Alongside, HangRail } from "@/components/site/Plates";

export const metadata: Metadata = {
  title: "9% btw op schilderwerk",
  description:
    "Toelichting van Schildersbedrijf Dankbaar: 9% btw op schilderwerk aan woningen ouder dan 2 jaar, mits minstens 50% woonruimte. Anders 21%.",
};

const yes = [
  { title: "Ouder dan 2 jaar", text: "Huur- en koopwoningen die langer dan twee jaar bestaan." },
  { title: "Minstens 50% woonruimte", text: "De woning moet voor minimaal de helft als woonruimte in gebruik zijn." },
  { title: "Particulier en corporatie", text: "Voor particuliere opdrachtgevers en woningbouwcorporaties wordt het schilderwerk voordeliger." },
];

const no = [
  { title: "Jonger dan 2 jaar", text: "Nieuwere woningen vallen niet onder het lage tarief." },
  { title: "Andere bestemming", text: "Gebouwen die geen woning zijn, vallen erbuiten." },
  { title: "Dan 21%", text: "Over dat schilderwerk wordt het hoge tarief berekend." },
];

export default function BtwPage() {
  return (
    <>
      <Article
        section="btw"
        crumb="9% btw"
        title="9% btw op schilderwerk aan woningen"
        lede="De lage 9%-btw-regeling voor schilderwerk blijft, voor woningen ouder dan 2 jaar, mits de woning voor minimaal 50% in gebruik is als woonruimte."
      >
        <p className="max-w-[62ch]">
          Sinds 1 januari 2000 is het btw-tarief op schilderwerk voor de particuliere markt verlaagd voor huur- en koopwoningen ouder dan 2 jaar. Het voordeel voor huurders en bezitters van zo’n huis is aanzienlijk.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <HangRail label="Hier geldt 9%" items={yes} columns="lg:grid-cols-1" />
          <HangRail label="Hier geldt 21%" items={no} columns="lg:grid-cols-1" />
        </div>

        <p className="mt-10 max-w-[68ch]">
          Dit is de toelichting zoals Schildersbedrijf Dankbaar die geeft. Of uw woning eronder valt, bespreken wij bij de kennismaking: bouwjaar en of de woning als woonruimte in gebruik is. De{" "}
          <Link href="/winterschilder" className="link font-semibold underline">
            Winterschilder
          </Link>{" "}
          wijst apart op 9% btw op het arbeidsloon, naast de extra winterkorting.
        </p>

        <Alongside
          items={[
            { href: "/schilderwerk", title: "Schilderwerk", text: "Het werk waar het lage tarief over gaat." },
            { href: "/winterschilder", title: "Winterschilder", text: "Extra korting in de winter, plus 9% waar dat geldt." },
            { href: "/contact", title: "Vraag het na", text: "Bel of mail het bouwjaar van de woning." },
          ]}
        />
      </Article>
      <Closing
        title="Twijfelt u of 9% geldt?"
        text="Bel of mail het bouwjaar en of de woning als woonruimte in gebruik is. Wij zetten het tarief pas op de offerte als dat duidelijk is."
      />
    </>
  );
}
