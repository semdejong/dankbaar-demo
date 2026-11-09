import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import { FaqList } from "@/components/site/Faq";
import { MailAddress, OfferteButton, PhoneButton, PhoneText } from "@/components/site/Links";
import { LMark, VanStripe, YearTick } from "@/components/site/Marks";
import { PhotoFrame } from "@/components/site/Photo";
import { HangRail, WordmarkLine } from "@/components/site/Plates";

export const metadata: Metadata = {
  description: content.seo.description,
};

export default function HomePage() {
  return (
    <>
      <section data-section="hero" className="concrete-grain">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:py-14">
          <div>
            <YearTick />
            <h1 className="max-w-[14ch] text-[2.8rem] sm:text-6xl lg:text-[4.4rem]">
              Afwerking uit één Achterhoekse werkplaats
            </h1>
            <p className="mt-5 max-w-[40rem] leading-snug sm:mt-6 sm:leading-normal">
              Schildersbedrijf Dankbaar schildert, beglaast, werkt wanden af en spuit in de eigen verfspuiterij. Het familiebedrijf bestaat sinds 1941. De kneepjes gingen van vader op zoon. Inmiddels werkt de derde generatie Dankbaar, met een klein team en korte lijnen, vanuit Lichtenvoorde.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
              <PhoneButton />
              <OfferteButton />
            </div>
            <p className="mt-4 text-base">
              Of mail direct naar <MailAddress />
            </p>
          </div>
          <PhotoFrame
            src="/img/pand-lichtenvoorde.jpg"
            alt="Bedrijfspand van Schildersbedrijf Dankbaar aan de Galileistraat met de witte bus ervoor"
            caption="Bedrijfspand en bus aan de Galileistraat 15 in Lichtenvoorde."
            ratio="aspect-[940/450]"
            priority
          />
        </div>
      </section>

      <section data-section="credibility" className="on-dark bg-accent pb-10 text-white">
        <div className="mx-auto grid max-w-7xl sm:grid-cols-3">
          {[
            ["Sinds 1941", "Van vader op zoon, in Lichtenvoorde."],
            ["Derde generatie", "Klein team, korte lijnen."],
            ["Eigen verfspuiterij", "Kozijnen, deuren en meubels."],
          ].map(([title, text]) => (
            <div key={title} className="border-t border-white/20 px-5 py-8 sm:border-t-0 sm:border-l sm:first:border-l-0">
              <VanStripe className="mb-4 h-3 w-28 text-white" />
              <h2 className="text-3xl text-white">{title}</h2>
              <p className="mt-3 text-base text-white">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section data-section="werkgebied" className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:py-16">
          <HangRail
            label="De hele Achterhoek"
            intro="Ons werkgebied is de hele Achterhoek. Met name in deze plaatsen komen wij."
            items={content.area.map((town) => ({ title: town }))}
            columns="lg:grid-cols-5"
          />
        </div>
      </section>

      <section data-section="diensten">
        <div className="mx-auto max-w-7xl px-5 pb-4 pt-14 lg:pt-16">
          <LMark />
          <h2 className="max-w-[16ch] text-5xl sm:text-6xl">Vier ingangen, één werkplaats</h2>
          <p className="mt-4 max-w-[42rem]">
            Uw woning of bedrijfspand tot in detail afwerken: kozijnen in de lak, sfeer met wandafwerking, en glas dat isoleert en beschermt.
          </p>
        </div>
        {content.services.map((service, index) => (
          <article key={service.href} data-section={`dienst-${service.title.toLowerCase()}`} className={index % 2 === 0 ? "bg-white" : "bg-putty"}>
            <div className="mx-auto grid max-w-7xl items-center lg:grid-cols-2">
              <div className={`px-5 py-6 lg:py-10 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className={service.href === "/spuiten" ? "ml-auto w-full max-w-[320px]" : undefined}>
                  <PhotoFrame
                    src={service.image}
                    alt={service.alt}
                    caption={service.caption}
                    ratio={service.href === "/spuiten" ? "aspect-[300/184]" : "aspect-[16/10]"}
                    sizes={service.href === "/spuiten" ? "320px" : "(min-width: 1024px) 46vw, 100vw"}
                  />
                </div>
              </div>
              <div className="px-5 py-10 lg:px-12 lg:py-14">
                <LMark />
                <h3 className="text-5xl">{service.title}</h3>
                <p className="mt-4 max-w-[38rem]">{service.text}</p>
                <Link href={service.href} className="mt-6 inline-flex min-h-11 items-center gap-3 font-semibold text-brand">
                  Naar {service.title.toLowerCase()}
                  <VanStripe className="h-3 w-24" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section data-section="spuithal" className="on-dark bg-accent text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <LMark light />
            <h2 className="text-5xl text-white sm:text-6xl">Eigen moderne verfspuiterij</h2>
            <p className="mt-5 max-w-[40rem] text-white">
              Hier zetten wij prefab onderdelen, kozijnen en deuren professioneel in de basis- of lakverf. Een uitkomst voor aannemers, interieurbouwers en fabrikanten die onderdelen zelf maken en die up to date willen afleveren. Ook handig als u als particulier deuren, radiatoren of meubels in een nieuwe kleur wilt laten spuiten. Hier komt alles strak voor elkaar.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/spuiten" className="btn btn-red">
                Bekijk de spuiterij
              </Link>
              <OfferteButton onDark label="Offerte voor spuitwerk" />
            </div>
          </div>
          <div className="mx-auto w-full max-w-[320px]">
            <PhotoFrame
              src="/img/deuren-spuiten.jpg"
              alt="Deuren in de grondverf en in rood, staand in de spuitruimte"
              caption="Deuren in de spuiterij, deels in de grondverf en deels in kleur."
              ratio="aspect-[300/184]"
              sizes="28rem"
            />
          </div>
        </div>
      </section>

      <section data-section="pand" className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
          <PhotoFrame
            src="/img/Bedrijfshal-sm.jpg"
            alt="De bedrijfshal van Schildersbedrijf Dankbaar met het naambord op de gevel"
            caption="De hal aan de Galileistraat 15, met het bord van Schildersbedrijf Dankbaar."
            ratio="aspect-[580/338]"
          />
          <div className="flex flex-col justify-center">
            <LMark />
            <h2 className="text-5xl">Pand en bus</h2>
            <p className="mt-4">
              De werkplaats staat aan de {content.contact.street}, {content.contact.postalCode} {content.contact.city}. De bus draagt de naam van het bedrijf. Geen showroomverhaal: dit is het adres waar u ons vindt.
            </p>
            <p className="mt-4">
              <a className="link font-semibold underline" href={content.contact.mapHref} target="_blank" rel="noopener noreferrer">
                Open het adres in een kaart
              </a>
            </p>
          </div>
        </div>
      </section>

      <section data-section="winterschilder" className="bg-putty">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
          <div>
            <YearTick />
            <h2 className="text-5xl sm:text-6xl">Winterschilder</h2>
            <p className="mt-4">
              Van half november tot half maart geven wij een extra korting op onderhoud van binnenschilderwerk en behang van minimaal 3 mandagen. De korting staat direct op de factuur. Een percentage vermelden wij hier niet; vraag ons die bij de kennismaking.
            </p>
            <p className="mt-4">
              Waar de regeling van toepassing is, geldt daarnaast 9% btw op het arbeidsloon.{" "}
              <Link href="/9-procent-btw" className="link font-semibold underline">
                Lees de voorwaarden
              </Link>
              .
            </p>
            <Link href="/winterschilder" className="mt-6 inline-flex min-h-11 items-center font-semibold underline">
              Alle afspraken van de Winterschilder
            </Link>
          </div>
          <dl className="border border-foreground/15 bg-white">
            {[
              ["Periode", "Half november tot half maart"],
              ["Werk", "Onderhoud binnen: schilderwerk en behang"],
              ["Omvang", "Minimaal 3 mandagen"],
              ["Verrekening", "Direct op de factuur"],
              ["Hoogte van de korting", "Vraag ons die; geen vast percentage op deze pagina"],
              ["Btw", "9% op het arbeidsloon, waar dat geldt"],
            ].map(([term, detail]) => (
              <div key={term} className="grid gap-1 border-b border-foreground/15 px-5 py-4 last:border-b-0 sm:grid-cols-[12rem_1fr] sm:gap-4">
                <dt className="font-semibold">{term}</dt>
                <dd>{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section data-section="lijn" className="bg-white">
        <div className="mx-auto max-w-7xl px-5">
          <WordmarkLine>Liefde voor het vak.</WordmarkLine>
        </div>
      </section>

      <section data-section="over" className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 lg:grid-cols-2 lg:py-20">
          <PhotoFrame
            src="/img/over-dankbaar.jpg"
            alt="Achterzijde van de witte bus met de naam Dankbaar op de deur"
            caption="Bus van Schildersbedrijf Dankbaar."
            ratio="aspect-[427/378]"
          />
          <div>
            <LMark />
            <h2 className="text-5xl sm:text-6xl">Derde generatie Dankbaar</h2>
            <p className="mt-4">
              Dankbaar is een vertrouwde naam in de regio. Geen klus is dezelfde. Bij elke opdracht letten wij op een efficiënte aanpak, geschikte materialen en de geldende regelgeving.
            </p>
            <p className="mt-4">
              Wij zoeken een ervaren klantenschilder voor de particuliere sector. Rijbewijs B is gewenst.{" "}
              <Link href="/vacature" className="link font-semibold underline">
                Lees de vacature
              </Link>{" "}
              en neem contact op. Een sollicitatieformulier hebben wij niet.
            </p>
            <Link href="/over-ons" className="mt-6 inline-flex min-h-11 items-center font-semibold underline">
              Meer over het familiebedrijf
            </Link>
          </div>
        </div>
      </section>

      <section data-section="faq" className="bg-putty">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:py-20">
          <h2 className="text-5xl sm:text-6xl">Vragen die wij kunnen beantwoorden</h2>
          <div className="mt-8">
            <FaqList items={content.faq} />
          </div>
        </div>
      </section>

      <section id="contact" data-section="contact" className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <LMark />
            <h2 className="text-5xl sm:text-6xl">Neem contact op</h2>
            <p className="mt-4 max-w-xl">
              Bel of mail voor een vrijblijvende kennismaking. Wij spreken daarna af wat er moet gebeuren.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PhoneButton />
              <OfferteButton />
            </div>
          </div>
          <div className="border border-foreground/15 bg-putty p-6">
            <h3 className="text-3xl">Werkplaats</h3>
            <address className="mt-4 space-y-2 not-italic">
              <p>{content.contact.street}</p>
              <p>
                {content.contact.postalCode} {content.contact.city}
              </p>
              <p>
                Tel. <PhoneText />
              </p>
              <p>
                <MailAddress />
              </p>
            </address>
            <p className="mt-5 text-base">
              Werkgebied: de hele Achterhoek, met name {content.area.join(", ")}.
            </p>
            <p className="mt-4">
              <a className="link font-semibold underline" href={content.contact.mapHref} target="_blank" rel="noopener noreferrer">
                Zoek Galileistraat 15 op de kaart
              </a>
            </p>
            <p className="mt-4">
              <Link href="/contact" className="link font-semibold underline">
                Naar de contactpagina
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
