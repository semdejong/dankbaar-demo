import type { Metadata } from "next";
import Link from "next/link";
import { Article, Closing } from "@/components/site/Article";

export const metadata: Metadata = {
  title: "Winterschilder",
  description:
    "Van half november tot half maart extra korting op binnenschilderwerk en behang van minimaal 3 mandagen. Direct op de factuur. Geen vast percentage op deze pagina.",
};

const rows = [
  ["Periode", "Half november tot half maart."],
  ["Welk werk", "Onderhoud van schilderwerk en behang binnen."],
  ["Minimale omvang", "Minimaal 3 mandagen."],
  ["De extra korting", "Aantrekkelijk, en direct verrekend op de factuur. Geen aparte aanvraag of toezegging vooraf."],
  ["Hoogte", "Wij noemen hier geen percentage. Vraag ons de hoogte bij de kennismaking."],
  ["Btw", "Daarnaast de 9%-regeling op het arbeidsloon, waar die van toepassing is."],
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
        <dl className="border border-foreground/15">
          {rows.map(([term, detail]) => (
            <div key={term} className="grid gap-1 border-b border-foreground/15 px-5 py-4 last:border-b-0 sm:grid-cols-[14rem_1fr] sm:gap-6">
              <dt className="font-semibold">{term}</dt>
              <dd>{detail}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 max-w-[68ch]">
          De voorwaarden van 9% btw op schilderwerk aan woningen ouder dan 2 jaar staan op een eigen pagina.{" "}
          <Link href="/9-procent-btw" className="link font-semibold underline">
            Lees wanneer 9% geldt
          </Link>
          . Buitenwerk valt niet onder deze winterkorting; die geldt voor onderhoud binnen.
        </p>
      </Article>
      <Closing
        title="Binnenklus in de winter plannen?"
        text="Bel of mail de omvang. Wij zeggen of de klus de 3 mandagen haalt en welke korting wij dan op de factuur zetten."
      />
    </>
  );
}
