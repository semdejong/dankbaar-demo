import type { Metadata } from "next";
import { content } from "@/content";
import { Article, Closing } from "@/components/site/Article";
import { FaqList } from "@/components/site/Faq";
import { MailForm } from "@/components/site/MailForm";
import { PhotoFrame } from "@/components/site/Photo";

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
          src: "/img/spuiterij.jpg",
          alt: "Kozijnen en deuren hangen aan kettingen in de verfspuiterij",
          caption: "Verfspuiterij aan de Galileistraat: kozijnen en deuren aan de hangrail.",
          ratio: "aspect-[4/3]",
        }}
      >
        <div className="grid gap-6 lg:grid-cols-2">
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

        <div className="mt-12 max-w-xl">
          <PhotoFrame
            src="/img/deuren-spuiten.jpg"
            alt="Deuren in de grondverf en in rood, staand in de spuitruimte"
            caption="Deuren in de spuiterij, deels in de grondverf en deels in kleur."
            ratio="aspect-[300/184]"
            sizes="(min-width: 1024px) 36rem, 100vw"
          />
        </div>

        <div className="mt-14" data-section="spuiten-faq">
          <h2 className="text-4xl">Vragen over spuitwerk</h2>
          <div className="mt-6">
            <FaqList items={content.spuitFaq} />
          </div>
        </div>

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
