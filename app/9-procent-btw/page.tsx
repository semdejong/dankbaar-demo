import type { Metadata } from "next";
import Link from "next/link";
import { Article, Closing } from "@/components/site/Article";

export const metadata: Metadata = {
  title: "9% btw op schilderwerk",
  description:
    "Toelichting van Schildersbedrijf Dankbaar: 9% btw op schilderwerk aan woningen ouder dan 2 jaar, mits minstens 50% woonruimte. Anders 21%.",
};

export default function BtwPage() {
  return (
    <>
      <Article
        section="btw"
        crumb="9% btw"
        title="9% btw op schilderwerk aan woningen"
        lede="De lage 9%-btw-regeling voor schilderwerk blijft, voor woningen ouder dan 2 jaar, mits de woning voor minimaal 50% in gebruik is als woonruimte."
      >
        <div className="max-w-[68ch] space-y-4">
          <p>
            Sinds 1 januari 2000 is het btw-tarief op schilderwerk voor de particuliere markt verlaagd voor huur- en koopwoningen ouder dan 2 jaar.
          </p>
          <p>
            Woningen jonger dan 2 jaar en gebouwen met een andere bestemming dan woning vallen niet onder deze maatregel. Voor die gebouwen moet over het schilderwerk het hoge tarief van 21% worden berekend.
          </p>
          <p>
            Het voordeel voor huurders en bezitters van een huis ouder dan 2 jaar is dus aanzienlijk. Voor particuliere opdrachtgevers en woningbouwcorporaties wordt de schilder een stuk voordeliger.
          </p>
          <p>
            Dit is de toelichting zoals Schildersbedrijf Dankbaar die geeft. Of uw woning eronder valt, bespreken wij bij de kennismaking. De Winterschilder wijst apart op 9% btw op het arbeidsloon, naast de extra winterkorting.
          </p>
          <p>
            <Link href="/winterschilder" className="link font-semibold underline">
              Naar de Winterschilder
            </Link>
          </p>
        </div>
      </Article>
      <Closing
        title="Twijfelt u of 9% geldt?"
        text="Bel of mail het bouwjaar en of de woning als woonruimte in gebruik is. Wij rekenen het tarief niet op de gok."
      />
    </>
  );
}
