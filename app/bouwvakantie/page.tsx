import type { Metadata } from "next";
import Link from "next/link";
import { Article, Closing } from "@/components/site/Article";

export const metadata: Metadata = {
  title: "Bouwvakantie",
  description:
    "Schildersbedrijf Dankbaar houdt de bouwvakantie van regio midden. Bel of mail voor de data.",
};

export default function BouwvakantiePage() {
  return (
    <>
      <Article
        section="bouwvakantie"
        crumb="Bouwvakantie"
        title="Bouwvak van regio midden"
        lede="Wij hanteren de bouwvakantie van regio midden. Dan houden wij ook vakantie."
      >
        <p className="max-w-[12ch] font-display text-6xl leading-[1.02] sm:text-8xl">Regio midden.</p>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="border border-foreground/15 bg-putty p-6 sm:p-8">
            <h2 className="text-4xl">Wat vaststaat</h2>
            <p className="mt-4">
              De bouwvak van Schildersbedrijf Dankbaar is die van regio midden. In die periode is de werkplaats met vakantie. De precieze data verschillen per jaar.
            </p>
          </article>
          <article className="border border-foreground/15 p-6 sm:p-8">
            <h2 className="text-4xl">Wat u ons vraagt</h2>
            <p className="mt-4">
              Plant u schilderwerk, glas of behang rond die weken, bel of mail dan. Wij noemen de dagen van het komende seizoen zelf. Zo weet u ruim vooraf waar u aan toe bent.
            </p>
            <p className="mt-4">
              <Link href="/contact" className="link font-semibold underline">
                Naar contact
              </Link>
            </p>
          </article>
        </div>
        <p className="mt-10 max-w-[62ch]">
          Buiten de bouwvak werken wij in de hele Achterhoek, vanuit de werkplaats aan de Galileistraat in Lichtenvoorde. In de winter geldt daarnaast de{" "}
          <Link href="/winterschilder" className="link font-semibold underline">
            Winterschilder
          </Link>
          .
        </p>
      </Article>
      <Closing title="Wilt u de dagen weten?" text="Bel of mail. Wij geven de bouwvak van regio midden door, zonder die hier vast te zetten." />
    </>
  );
}
