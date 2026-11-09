import type { Metadata } from "next";
import Link from "next/link";
import { Article, Closing } from "@/components/site/Article";

export const metadata: Metadata = {
  title: "Wandafwerking",
  description:
    "Wandafwerking in Lichtenvoorde: papier-, foto-, vlies-, vinyl- en glasweefselbehang. Advies, levering en de hele afwerking door Schildersbedrijf Dankbaar.",
};

const types = ["Papierbehang", "Fotobehang", "Vliesbehang", "Vinylbehang", "Glasweefselbehang"];

export default function WandafwerkingPage() {
  return (
    <>
      <Article
        section="wandafwerking"
        crumb="Wandafwerking"
        title="Wanden die de sfeer bepalen"
        lede="Behang op de wanden is weer helemaal in. Vlies, vinyl of glasweefsel. Strak, effen of met een patroon. Wij helpen u de keuze te maken die bij de muur en de kamer past."
        image={{
          src: "/img/behang.jpg",
          alt: "Een schilder brengt donker behang met een bladmotief aan",
          caption: "Wandafwerking: behang wordt aangebracht. Geen projectnaam bij deze foto.",
          ratio: "aspect-[940/450]",
        }}
      >
        <div className="max-w-3xl">
          <h2 className="text-4xl">Soorten wandafwerking</h2>
          <p className="mt-4">
            Strak, effen of met een patroon. Wij bekijken de muren, luisteren naar uw wensen en verdiepen ons in de situatie. Op basis daarvan geven wij advies, leveren wij wat u nodig heeft en nemen wij de gehele afwerking uit handen.
          </p>
        </div>
        <ul className="mt-8 border-t border-foreground/15">
          {types.map((name) => (
            <li key={name} className="border-b border-foreground/15 py-4 font-semibold">
              {name}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-[68ch]">
          Behangwerk van minimaal 3 mandagen kan in de winter onder de{" "}
          <Link href="/winterschilder" className="link font-semibold underline">
            Winterschilder
          </Link>{" "}
          vallen. Vraag ons naar de korting; een percentage zetten wij niet op de pagina.
        </p>
      </Article>
      <Closing
        title="Wanden laten bekijken?"
        text="Bel of mail welke kamer het is. Wij komen kijken en adviseren welk behang de wand aankan."
      />
    </>
  );
}
