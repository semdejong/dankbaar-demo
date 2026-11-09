import type { Metadata } from "next";
import { Article, Closing } from "@/components/site/Article";
import { MailAddress, PhoneText } from "@/components/site/Links";

export const metadata: Metadata = {
  title: "Vacature klantenschilder",
  description:
    "Schildersbedrijf Dankbaar zoekt een ervaren klantenschilder voor de particuliere sector. Rijbewijs B gewenst. Bel of mail, er is geen sollicitatieformulier.",
};

export default function VacaturePage() {
  return (
    <>
      <Article
        section="vacature"
        crumb="Vacature"
        title="Ervaren klantenschilder gezocht"
        lede="Wij zoeken een ervaren klantenschilder voor de particuliere sector. Bezit van rijbewijs B is gewenst, evenals een klantvriendelijke instelling."
      >
        <div className="max-w-[68ch] space-y-4">
          <p>Voor meer informatie neemt u contact op. Er is geen sollicitatieportaal en geen formulier dat ergens wordt opgeslagen.</p>
          <p>
            Bel <PhoneText /> of mail <MailAddress />. Zet in het bericht kort uw ervaring en of u rijbewijs B heeft.
          </p>
          <ul className="space-y-3 pt-2">
            <li className="border-l-[3px] border-brand pl-4">Ervaren klantenschilder</li>
            <li className="border-l-[3px] border-brand pl-4">Particuliere sector</li>
            <li className="border-l-[3px] border-brand pl-4">Rijbewijs B gewenst</li>
            <li className="border-l-[3px] border-brand pl-4">Klantvriendelijke instelling</li>
          </ul>
        </div>
      </Article>
      <Closing
        title="Interesse? Bel of mail."
        text="Voor meer informatie neemt u contact op. Wij spreken daarna verder. Er is geen sollicitatieformulier."
      />
    </>
  );
}
