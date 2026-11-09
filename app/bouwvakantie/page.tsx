import type { Metadata } from "next";
import { Article, Closing } from "@/components/site/Article";

export const metadata: Metadata = {
  title: "Bouwvakantie",
  description:
    "Schildersbedrijf Dankbaar houdt de bouwvakantie van regio midden. Geen data op deze pagina; bel of mail voor de periode.",
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
        <p className="max-w-[68ch]">
          Op deze pagina staan geen data en geen jaartal. Voor de periode van het komende seizoen belt of mailt u ons. Wij noemen de dagen dan zelf.
        </p>
      </Article>
      <Closing title="Wilt u de dagen weten?" text="Bel of mail. Wij geven de bouwvak van regio midden door, zonder die hier vast te zetten." />
    </>
  );
}
