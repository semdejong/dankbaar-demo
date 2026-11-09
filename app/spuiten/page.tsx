import type { Metadata } from "next";
import { content } from "@/content";
import { Article, Closing } from "@/components/site/Article";
import { FaqList } from "@/components/site/Faq";
import { MailForm } from "@/components/site/MailForm";
import { Alongside, HangRail, WordmarkLine } from "@/components/site/Plates";

export const metadata: Metadata = {
  title: "Verfspuiterij",
  description:
    "Eigen verfspuiterij van Schildersbedrijf Dankbaar in Lichtenvoorde. Prefab, kozijnen en deuren in basis- of lakverf, voor bedrijven en particulieren.",
};

export default function SpuitenPage() {
  return (
    <>
      <Article
        section="spuiten"
        crumb="Spuitwerk"
        title="Alles strak, uit de eigen spuiterij"
        lede="Schildersbedrijf Dankbaar heeft een eigen moderne, goed uitgeruste verfspuiterij. Hier komt prefab, kozijn en deur in de basis- of lakverf, en ook het werk voor particulieren."
        image={{
          src: "/img/deuren-spuiten.jpg",
          alt: "Deuren in de grondverf en in rood, staand in de spuitruimte",
          caption: "Deuren in de spuiterij, deels in de grondverf en deels in kleur.",
          ratio: "aspect-[300/184]",
          frame: "mx-auto w-full max-w-[320px]",
        }}
      >
        <WordmarkLine>Hier komt alles strak voor elkaar.</WordmarkLine>
        <div className="mt-12">
          <HangRail
            label="Wat aan de rail hangt"
            intro="Basisverf of lakverf. Wij zetten het onderdeel professioneel in de verf die bij de opdracht hoort."
            items={[
              { title: "Prefab onderdelen", text: "Voor wie zelf maakt en up to date wil afleveren." },
              { title: "Kozijnen", text: "In de basis- of lakverf, in de eigen spuiterij." },
              { title: "Deuren", text: "Voor aannemers en makers, en ook voor particulieren." },
              { title: "Radiatoren", text: "Particulier werk: een radiator in een nieuwe kleur, gespoten in de spuiterij." },
              { title: "Meubels", text: "Ook meubels kunnen in een nieuwe kleur, in dezelfde spuiterij." },
              { title: "Basis of lak", text: "Twee afwerkingen. Welke het wordt, spreekt u met ons af." },
            ]}
          />
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <article data-section="spuiten-zakelijk" className="border border-foreground/15 bg-putty p-6 sm:p-8">
            <h2 className="text-4xl">Voor aannemers en makers</h2>
            <p className="mt-4">
              Een uitkomst voor aannemers, interieurbouwers en fabrikanten die zelf onderdelen maken en die up to date willen afleveren. Wij spuiten prefab onderdelen, kozijnen en deuren professioneel in de basis- of lakverf.
            </p>
          </article>
          <article data-section="spuiten-particulier" className="border border-foreground/15 bg-white p-6 sm:p-8">
            <h2 className="text-4xl">Voor particulieren</h2>
            <p className="mt-4">
              Handig als u deuren, radiatoren of meubels in een nieuwe kleur wilt laten spuiten. U hoeft dat niet in de kamer te doen: het werk gebeurt in de spuiterij.
            </p>
          </article>
        </div>

        <div className="mt-14" data-section="spuiten-faq">
          <h2 className="text-4xl">Vragen over spuitwerk</h2>
          <div className="mt-6">
            <FaqList items={content.spuitFaq} />
          </div>
        </div>

        <Alongside
          items={[
            { href: "/schilderwerk", title: "Schilderwerk", text: "Ter plaatse, binnen en buiten, als spuiten niet de route is." },
            { href: "/beglazing", title: "Beglazing", text: "Glas in de kozijnen die ook bij ons in de lak kunnen." },
            { href: "/contact", title: "Aanleveren", text: "Bel of mail wat u wilt brengen: onderdeel, deur of meubel." },
          ]}
        />
        <div className="mt-14 max-w-3xl">
          <MailForm page="Spuitwerk" />
        </div>
      </Article>
      <Closing
        title="Onderdeel of meubel laten spuiten?"
        text="Bel 0544-371560 of mail info@dankbaar.nl. Noem wat u wilt aanleveren, in basisverf of lak."
      />
    </>
  );
}
