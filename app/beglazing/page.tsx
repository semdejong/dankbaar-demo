import type { Metadata } from "next";
import Link from "next/link";
import { Article, Closing } from "@/components/site/Article";
import { Alongside, HangRail, WordmarkLine } from "@/components/site/Plates";

export const metadata: Metadata = {
  title: "Beglazing",
  description:
    "Glaszetter in Lichtenvoorde: isolatieglas, decoratief, zonreflecterend, veiligheidsglas en spiegelglas. Triple, HR++ en monumenten-isolatieglas. Advies en plaatsing.",
};

const kinds = [
  {
    title: "Isolatieglas",
    text: "Triple, HR++ en monumenten-isolatieglas. Wij kijken welk type bij uw situatie past.",
  },
  {
    title: "Decoratief glas",
    text: "Glas kan een ruimte een eigen karakter geven. Wij adviseren en plaatsen.",
  },
  {
    title: "Zonreflecterend glas",
    text: "Onderdeel van het assortiment. Of het past, bespreken wij aan de hand van de situatie.",
  },
  {
    title: "Veiligheidsglas",
    text: "Glas dat beschermt. Wij plaatsen het en werken het netjes af.",
  },
  {
    title: "Spiegelglas",
    text: "Leverbaar via dezelfde werkplaats. Advies en plaatsing zitten daarbij.",
  },
];

const steps = [
  { title: "De situatie", text: "U vertelt welk raam of welke opening het is. Wij vragen door tot duidelijk is wat het glas moet doen." },
  { title: "Het advies", text: "Welke oplossing past, zeggen wij u. Isoleren, beschermen of karakter geven: dat verschilt per plek." },
  { title: "De plaatsing", text: "Het glas wordt op professionele wijze geplaatst, met een nette afwerking." },
];

export default function BeglazingPage() {
  return (
    <>
      <Article
        section="beglazing"
        crumb="Beglazing"
        title="Glas dat isoleert, beschermt en karakter geeft"
        lede="Glas draagt bij aan een duurzame, veilige en comfortabele omgeving. Het isoleert, beschermt en kan een ruimte een eigen karakter geven. Vrijwel alle soorten zijn leverbaar."
        image={{
          src: "/img/Beglazen.jpg",
          alt: "Hand met zuignappen op een glasplaat",
          caption: "Glas opnemen met zuignappen, klaar om te plaatsen.",
          ratio: "aspect-[940/450]",
        }}
      >
        <HangRail
          label="Het assortiment aan de rail"
          intro="Vijf soorten, één adres. U bespreekt het glas met de mensen die het ook plaatsen."
          items={kinds}
        />

        <div className="mt-14">
          <WordmarkLine>Advies én plaatsing.</WordmarkLine>
        </div>

        <div className="mt-14">
          <HangRail
            label="Hoe een glasopdracht loopt"
            items={steps}
          />
        </div>

        <p className="mt-10 max-w-[68ch]">
          Kozijnen en kitranden horen vaak bij het schilderwerk eromheen. Dat doen wij vanuit dezelfde werkplaats.{" "}
          <Link href="/schilderwerk" className="link font-semibold underline">
            Lees over het schilderwerk
          </Link>
          .
        </p>

        <Alongside
          items={[
            { href: "/schilderwerk", title: "Schilderwerk", text: "Binnen en buiten, na een inventarisatie van de ondergrond." },
            { href: "/spuiten", title: "Spuitwerk", text: "Kozijnen en deuren in de eigen verfspuiterij." },
            { href: "/contact", title: "Kennismaking", text: "Bel of mail welk raam het betreft." },
          ]}
        />
      </Article>
      <Closing
        title="Glas laten adviseren en plaatsen?"
        text="Bel of mail welk raam het betreft. Wij zeggen welke glassoort past en plannen de plaatsing."
      />
    </>
  );
}
