import type { Metadata } from "next";
import { Article, Closing } from "@/components/site/Article";

export const metadata: Metadata = {
  title: "Beglazing",
  description:
    "Glaszetter in Lichtenvoorde: isolatieglas, decoratief, zonreflecterend, veiligheidsglas en spiegelglas. Triple, HR++ en monumenten-isolatieglas. Advies en plaatsing.",
};

const kinds = ["Isolatieglas", "Decoratief glas", "Zonreflecterend glas", "Veiligheidsglas", "Spiegelglas"];

const insulation = ["Triple isolatieglas", "HR++ isolatieglas", "Monumenten-isolatieglas"];

export default function BeglazingPage() {
  return (
    <>
      <Article
        section="beglazing"
        crumb="Beglazing"
        title="Glas dat isoleert, beschermt en karakter geeft"
        lede="Glas draagt bij aan een duurzame, veilige en comfortabele omgeving. Vrijwel alle soorten zijn leverbaar. Ons team plaatst het glas en zorgt voor een nette afwerking."
        image={{
          src: "/img/Beglazen.jpg",
          alt: "Hand met zuignappen op een glasplaat",
          caption: "Glas opnemen met zuignappen, klaar om te plaatsen.",
          ratio: "aspect-[940/450]",
        }}
      >
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl">Assortiment</h2>
            <p className="mt-4">
              Glas isoleert, beschermt en kan een ruimte een eigen karakter geven. Dit is het assortiment.
            </p>
            <ul className="mt-6 border-t border-foreground/15">
              {kinds.map((name) => (
                <li key={name} className="border-b border-foreground/15 py-4 font-semibold">
                  {name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-4xl">Isolatieglas</h2>
            <ul className="mt-6 space-y-3">
              {insulation.map((item) => (
                <li key={item} className="border-l-[3px] border-brand pl-4">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-[48ch]">
              Welke oplossing bij uw situatie past, bespreken wij met u. Daarna plaatsen wij het glas op professionele wijze.
            </p>
          </div>
        </div>
      </Article>
      <Closing
        title="Glas laten adviseren en plaatsen?"
        text="Bel of mail welk raam het betreft. Wij zeggen welke glassoort past en plannen de plaatsing."
      />
    </>
  );
}
