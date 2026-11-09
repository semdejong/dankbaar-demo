import type { Metadata } from "next";
import Link from "next/link";
import { Article, Closing } from "@/components/site/Article";
import { Alongside, HangRail, WordmarkLine } from "@/components/site/Plates";

export const metadata: Metadata = {
  title: "Wandafwerking",
  description:
    "Wandafwerking in Lichtenvoorde: papier-, foto-, vlies-, vinyl- en glasweefselbehang. Advies, levering en de hele afwerking door Schildersbedrijf Dankbaar.",
};

const types = [
  { title: "Papierbehang", text: "Een van de banen waaruit u kiest. Wij kijken of de wand er geschikt voor is." },
  { title: "Fotobehang", text: "Een afbeelding over de wand, als dat bij de kamer past." },
  { title: "Vliesbehang", text: "Strak of met patroon. De keuze maken wij samen, na het bekijken van de muur." },
  { title: "Vinylbehang", text: "Staat op dezelfde lijst. Advies, levering en afwerking nemen wij over." },
  { title: "Glasweefsel", text: "Glasweefselbehang, naast vlies en vinyl. Wij zeggen wat de wand aankan." },
];

const path = [
  { title: "De muren", text: "Wij bekijken de wanden voordat er een rol wordt gekozen." },
  { title: "Uw wensen", text: "Strak, effen of een patroon. Vlies, vinyl of glasweefsel." },
  { title: "De situatie", text: "Wij verdiepen ons in de kamer, niet in een losse staal." },
  { title: "Advies", text: "Op basis daarvan zeggen wij wat past." },
  { title: "Levering", text: "Wij leveren wat u nodig heeft." },
  { title: "Afwerking", text: "De gehele afwerking nemen wij uit handen." },
];

export default function WandafwerkingPage() {
  return (
    <>
      <Article
        section="wandafwerking"
        crumb="Wandafwerking"
        title="Wanden die de sfeer bepalen"
        lede="Behang op de wanden is weer helemaal in. De vraag is niet alleen welke rol, maar hoe de muur eraan toe is en wat de kamer moet doen."
        image={{
          src: "/img/behang.jpg",
          alt: "Een schilder brengt donker behang met een bladmotief aan",
          caption: "Wandafwerking: behang wordt aangebracht. Geen projectnaam bij deze foto.",
          ratio: "aspect-[940/450]",
        }}
      >
        <p className="max-w-[18ch] font-display text-4xl leading-[1.02] sm:text-6xl">
          Vlies, vinyl of glasweefsel? Strak? Effen of een patroon?
        </p>
        <p className="mt-6 max-w-[62ch]">
          Wanden bepalen de sfeer in uw woning. Om er zeker van te zijn dat u de juiste keuze maakt, helpen wij u op weg.
        </p>

        <div className="mt-12">
          <HangRail label="Vijf soorten wandafwerking" items={types} />
        </div>

        <div className="mt-14">
          <WordmarkLine>Nergens omkijken naar.</WordmarkLine>
        </div>

        <div className="mt-14">
          <HangRail
            label="Van muur tot opgeleverde wand"
            intro="Met onze hulp heeft u nergens omkijken naar. Advies, levering en de afwerking zitten in één opdracht."
            items={path}
          />
        </div>

        <p className="mt-10 max-w-[68ch]">
          Behangwerk van minimaal 3 mandagen kan tussen half november en half maart onder de{" "}
          <Link href="/winterschilder" className="link font-semibold underline">
            Winterschilder
          </Link>{" "}
          vallen. De extra korting zetten wij niet als percentage op deze pagina. Die vraagt u bij de kennismaking.
        </p>

        <Alongside
          items={[
            { href: "/schilderwerk", title: "Schilderwerk", text: "Wanden schilderen en behangen kan in dezelfde klus." },
            { href: "/winterschilder", title: "Winterschilder", text: "Extra korting op binnenbehang vanaf 3 mandagen." },
            { href: "/contact", title: "Kennismaking", text: "Mail of bel welke kamer het is." },
          ]}
        />
      </Article>
      <Closing
        title="Wanden laten bekijken?"
        text="Bel of mail welke kamer het is. Wij komen kijken en adviseren welk behang de wand aankan."
      />
    </>
  );
}
