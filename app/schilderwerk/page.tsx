import type { Metadata } from "next";
import Link from "next/link";
import { Article, Closing } from "@/components/site/Article";
import { PhotoFrame } from "@/components/site/Photo";
import { Alongside, HangRail, WordmarkLine } from "@/components/site/Plates";

export const metadata: Metadata = {
  title: "Schilderwerk binnen en buiten",
  description:
    "Schildersbedrijf Dankbaar schildert woningen en bedrijfspanden binnen en buiten in de Achterhoek. Eerst inventariseren, daarna beschermen tegen weer en wind.",
};

const checks = [
  { title: "Achterstallig onderhoud", text: "Is er sprake van achterstallig onderhoud? Dat nemen wij als eerste door." },
  { title: "Hout of beton", text: "Zijn reparaties nodig aan hout of beton, dan leggen wij die vast vóór de verf." },
  { title: "Oude verflagen", text: "Moeten oude lagen eraf, dan hoort dat bij de basis." },
  { title: "Kitranden", text: "Zijn de kitranden nog in orde? Ook dat bekijken wij met u." },
];

const archive = [
  {
    src: "/img/Dankbaar-1.jpg",
    alt: "Bakstenen winkelpand met witte kozijnen, archieffoto zonder projectnaam",
    caption: "Archieffoto van een bakstenen pand met geschilderd houtwerk. Geen projectnaam.",
  },
  {
    src: "/img/Dankbaar-2.jpg",
    alt: "Lichtgekleurde villa met gele accenten, archieffoto zonder projectnaam",
    caption: "Archieffoto van een villa met geschilderde geveldetails. Geen opdrachtgever vermeld.",
  },
  {
    src: "/img/Dankbaar-3.jpg",
    alt: "Bakstenen woonhuis met witte kozijnen, archieffoto zonder projectnaam",
    caption: "Archieffoto van een woonhuis met wit geschilderde kozijnen. Geen projecttitel.",
  },
  {
    src: "/img/DSCF1043_3545.jpg",
    alt: "Topgevel met geschilderd sierspant en een rood kozijn, archieffoto",
    caption: "Archieffoto van geschilderd sierspant aan een topgevel.",
  },
  {
    src: "/img/DSC_0060_016.jpg",
    alt: "Bakstenen bijgebouw met rood geschilderde topgevel en witte kozijnen",
    caption: "Archieffoto van een bijgebouw met geschilderde topgevel en kozijnen.",
  },
];

export default function SchilderwerkPage() {
  return (
    <>
      <Article
        section="schilderwerk"
        crumb="Schilderwerk"
        title="Schilderwerk dat het pand beschermt"
        lede="Wij nemen het schilderwerk binnen en buiten uit handen. Uw woning of bedrijfspand ziet er netjes uit, en is bovenal beschermd tegen weer en wind."
        image={{
          src: "/img/hout-reperatie.jpg",
          alt: "Oude verflagen worden van een houten kozijn geschraapt",
          caption: "Houtreparatie aan een kozijn, voordat er opnieuw geschilderd wordt.",
        }}
      >
        <WordmarkLine>Beschermd tegen weer en wind.</WordmarkLine>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="border border-foreground/15 bg-putty p-6 sm:p-8">
            <h2 className="text-4xl">Binnen</h2>
            <p className="mt-4">
              Woning of bedrijfspand: wij nemen het schilderwerk binnen uit handen, zodat het er netjes uitziet. Onderhoud binnen kan in de winter onder de Winterschilder vallen.
            </p>
          </article>
          <article className="border border-foreground/15 p-6 sm:p-8">
            <h2 className="text-4xl">Buiten</h2>
            <p className="mt-4">
              Buiten gaat het om uitstraling én bescherming. Weer en wind krijgen minder vat als de ondergrond eerst op orde is.
            </p>
          </article>
        </div>
        <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <HangRail
              label="Eerst inventariseren"
              intro="Voordat wij aan de slag gaan, bekijken wij met u wat er moet gebeuren. Aandacht voor de ondergrond legt een sterke basis. Het schilderwerk gaat dan langer mee."
              items={checks}
              columns="lg:grid-cols-2"
            />
            <p className="mt-6 max-w-[62ch]">
              In de winter, van half november tot half maart, geldt de{" "}
              <Link href="/winterschilder" className="link font-semibold underline">
                Winterschilder
              </Link>{" "}
              op onderhoud van binnenschilderwerk en behang van minimaal 3 mandagen. Voor woningen ouder dan 2 jaar leest u de{" "}
              <Link href="/9-procent-btw" className="link font-semibold underline">
                9%-btw-toelichting
              </Link>
              .
            </p>
          </div>
          <PhotoFrame
            src="/img/schilderwerk.jpg"
            alt="Witte woning met donkere luiken en geschilderde kozijnen, archieffoto"
            caption="Archieffoto van een geschilderde woning. Er hoort geen projectnaam bij."
            ratio="aspect-[600/368]"
          />
        </div>

        <div className="mt-16">
          <h2 className="text-4xl">Uit het archief</h2>
          <p className="mt-4 max-w-[68ch]">
            Deze foto&apos;s komen uit het eigen archief. Er staat geen projecttitel of opdrachtgever bij, en die verzinnen wij niet.
          </p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {archive.map((photo) => (
              <PhotoFrame key={photo.src} src={photo.src} alt={photo.alt} caption={photo.caption} ratio="aspect-[4/3]" sizes="(min-width: 1024px) 30vw, 100vw" />
            ))}
          </div>
        </div>
        <Alongside
          items={[
            { href: "/beglazing", title: "Beglazing", text: "Glas in dezelfde kozijnen, met advies en plaatsing." },
            { href: "/spuiten", title: "Spuitwerk", text: "Kozijnen en deuren in de eigen verfspuiterij." },
            { href: "/wandafwerking", title: "Wanden", text: "Behang als de wand de sfeer moet dragen." },
          ]}
        />
      </Article>
      <Closing
        title="Schilderwerk bespreken?"
        text="Bel of mail voor een vrijblijvende kennismaking. Wij kijken ter plaatse wat de ondergrond nodig heeft."
      />
    </>
  );
}
