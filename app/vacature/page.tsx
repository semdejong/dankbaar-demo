import type { Metadata } from "next";
import Link from "next/link";
import { Article, Closing } from "@/components/site/Article";
import { MailAddress, PhoneText } from "@/components/site/Links";
import { PhotoFrame } from "@/components/site/Photo";
import { HangRail } from "@/components/site/Plates";

export const metadata: Metadata = {
  title: "Vacature klantenschilder",
  description:
    "Schildersbedrijf Dankbaar zoekt een ervaren klantenschilder voor de particuliere sector. Rijbewijs B gewenst. Bel of mail, er is geen sollicitatieformulier.",
};

const asks = [
  { title: "Ervaren", text: "Een klantenschilder die het vak al in de vingers heeft." },
  { title: "Particulier", text: "De vacature is voor de particuliere sector." },
  { title: "Rijbewijs B", text: "Bezit van rijbewijs B is gewenst." },
  { title: "Klantvriendelijk", text: "Een klantvriendelijke instelling hoort bij de korte lijnen van een klein team." },
];

export default function VacaturePage() {
  return (
    <>
      <Article
        section="vacature"
        crumb="Vacature"
        title="Ervaren klantenschilder gezocht"
        lede="Wij zoeken een ervaren klantenschilder voor de particuliere sector. Bezit van rijbewijs B is gewenst, evenals een klantvriendelijke instelling."
        image={{
          src: "/img/Bedrijfshal-sm.jpg",
          alt: "De bedrijfshal van Schildersbedrijf Dankbaar aan de Galileistraat",
          caption: "De werkplaats aan de Galileistraat 15 in Lichtenvoorde.",
          ratio: "aspect-[580/338]",
        }}
      >
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <h2 className="text-4xl">Het werk dat wij doen</h2>
            <p className="mt-4">
              Voor particulieren schilderen wij binnen en buiten, plaatsen wij glas en werken wij wanden af. De werkplaats, met eigen verfspuiterij, staat in Lichtenvoorde. Het werkgebied is de hele Achterhoek.
            </p>
            <p className="mt-4">
              Meer over het familiebedrijf staat bij{" "}
              <Link href="/over-ons" className="link font-semibold underline">
                over ons
              </Link>
              . Het schilderwerk zelf staat op{" "}
              <Link href="/schilderwerk" className="link font-semibold underline">
                de schilderpagina
              </Link>
              .
            </p>
          </div>
          <PhotoFrame
            src="/img/over-dankbaar.jpg"
            alt="Bedrijfsbus van Schildersbedrijf Dankbaar"
            caption="De bus waarmee het werk de regio in gaat."
            ratio="aspect-[427/378]"
          />
        </div>

        <div className="mt-14">
          <HangRail label="Wat wij vragen" items={asks} columns="lg:grid-cols-2" />
        </div>

        <div className="mt-14 max-w-[68ch] space-y-4">
          <h2 className="text-4xl">Zo neemt u contact op</h2>
          <p>
            Er is geen sollicitatieportaal en geen formulier dat ergens wordt opgeslagen. Bel <PhoneText /> of mail <MailAddress />. Zet in het bericht kort uw ervaring en of u rijbewijs B heeft.
          </p>
          <p>Voor meer informatie neemt u contact op. Wij spreken daarna verder.</p>
        </div>
      </Article>
      <Closing
        title="Interesse? Bel of mail."
        text="Voor meer informatie neemt u contact op. Wij spreken daarna verder. Er is geen sollicitatieformulier."
      />
    </>
  );
}
