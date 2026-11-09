import type { Metadata } from "next";
import Link from "next/link";
import { Article, Closing } from "@/components/site/Article";
import { Alongside, HangRail, WordmarkLine } from "@/components/site/Plates";

export const metadata: Metadata = {
  title: "Winterschilder",
  description:
    "Van half november tot half maart extra korting op binnenschilderwerk en behang van minimaal 3 mandagen. Direct op de factuur. Geen vast percentage op deze pagina.",
};

const rows = [
  { title: "Periode", text: "Half november tot half maart. Buiten die maanden geldt deze extra korting niet." },
  { title: "Welk werk", text: "Onderhoud van schilderwerk en behang, en alleen binnen." },
  { title: "Omvang", text: "Minimaal 3 mandagen. Kleinere klussen vallen erbuiten." },
  { title: "Factuur", text: "De korting wordt direct met de factuur verrekend. Geen aparte aanvraag of toezegging vooraf." },
  { title: "Hoogte", text: "Een vast percentage staat hier niet. Vraag ons de hoogte bij de kennismaking." },
  { title: "Btw", text: "Daarnaast 9% op het arbeidsloon, waar die regeling van toepassing is." },
];

export default function WinterschilderPage() {
  return (
    <>
      <Article
        section="winterschilder"
        crumb="Winterschilder"
        title="Binnenwerk in de stille maanden"
        lede="Van half november tot half maart is onderhoud aan schilderwerk en behang binnen de moeite waard. De Winterschilder geeft dan een extra korting, mits de klus minimaal 3 mandagen vergt."
      >
        <p className="max-w-[16ch] font-display text-5xl leading-[1.02] sm:text-7xl">Half november tot half maart.</p>
        <p className="mt-6 max-w-[62ch]">
          Echt de moeite waard om uw binnenklus in deze periode uit te laten voeren. Geen moeilijkheden met aanvragen: de korting staat op de factuur.
        </p>

        <div className="mt-12">
          <HangRail label="Wat vaststaat" items={rows} />
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <article className="border border-foreground/15 bg-putty p-6 sm:p-8">
            <h2 className="text-4xl">Dit werk telt mee</h2>
            <p className="mt-4">
              Onderhoud aan schilderwerk binnen, en behangwerk binnen. Beide alleen als de opdracht minimaal drie mandagen vergt.{" "}
              <Link href="/schilderwerk" className="link font-semibold underline">
                Schilderwerk
              </Link>{" "}
              en{" "}
              <Link href="/wandafwerking" className="link font-semibold underline">
                wandafwerking
              </Link>{" "}
              beschrijven wat wij dan doen.
            </p>
          </article>
          <article className="border border-foreground/15 p-6 sm:p-8">
            <h2 className="text-4xl">De hoogte hoort u van ons</h2>
            <p className="mt-4">
              De extra korting staat niet als percentage op deze pagina. U hoort hem in het gesprek, en u ziet hem op de factuur.
            </p>
          </article>
        </div>

        <div className="mt-14">
          <WordmarkLine>Direct op de factuur.</WordmarkLine>
        </div>

        <p className="mt-10 max-w-[68ch]">
          Los van de winterkorting geldt voor veel woningen 9% btw op schilderwerk. De voorwaarden: ouder dan 2 jaar, en voor minimaal 50% in gebruik als woonruimte.{" "}
          <Link href="/9-procent-btw" className="link font-semibold underline">
            Lees wanneer 9% geldt
          </Link>
          . Buitenwerk valt niet onder de Winterschilder.
        </p>

        <Alongside
          items={[
            { href: "/schilderwerk", title: "Schilderwerk", text: "Binnen onderhoud dat in de winter onder de korting kan vallen." },
            { href: "/wandafwerking", title: "Behang", text: "Behangwerk vanaf 3 mandagen telt mee." },
            { href: "/9-procent-btw", title: "9% btw", text: "Het lage tarief op arbeidsloon, waar het geldt." },
          ]}
        />
      </Article>
      <Closing
        title="Binnenklus in de winter plannen?"
        text="Bel of mail de omvang. Wij zeggen of de klus de 3 mandagen haalt en welke korting wij dan op de factuur zetten."
      />
    </>
  );
}
