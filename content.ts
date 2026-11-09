/**
 * Gegevens van Schildersbedrijf Dankbaar voor deze conceptsite.
 * Alleen feiten die op de eigen pagina's staan. Geen KvK, openingstijden of kortingspercentage.
 */
export const content = {
  slug: "dankbaar-demo",

  company: {
    name: "Schildersbedrijf Dankbaar",
    tagline: "Afwerking uit één Achterhoekse werkplaats",
    description:
      "Schilderwerk, beglazing, wandafwerking en een eigen verfspuiterij in Lichtenvoorde. Familiebedrijf sinds 1941, inmiddels de derde generatie Dankbaar.",
    logo: "/img/Logo-dankbaar.png",
    city: "Lichtenvoorde",
    region: "Achterhoek",
    since: "1941",
    generation: "derde generatie",
  },

  colors: {
    primary: "#B32316",
    primaryForeground: "#FFFFFF",
    accent: "#2F2F2F",
    background: "#FFFFFF",
    foreground: "#2F2F2F",
    muted: "#F7F5F1",
    concrete: "#E8E6E3",
  },

  seo: {
    title: "Schildersbedrijf Dankbaar | Schilder, glas en spuiterij in Lichtenvoorde",
    description:
      "Schildersbedrijf Dankbaar in Lichtenvoorde: schilderwerk, beglazing, wandafwerking en een eigen verfspuiterij. Familiebedrijf sinds 1941. Bel 0544-371560.",
    lang: "nl",
  },

  contact: {
    phoneDisplay: "0544-371560",
    phoneTel: "+31544371560",
    email: "info@dankbaar.nl",
    street: "Galileistraat 15",
    postalCode: "7131 PE",
    city: "Lichtenvoorde",
    mapHref:
      "https://www.google.com/maps/search/?api=1&query=Galileistraat%2015%2C%207131%20PE%20Lichtenvoorde",
  },

  area: [
    "Lichtenvoorde",
    "Aalten",
    "Varsseveld",
    "Groenlo",
    "Winterswijk",
    "Zieuwent",
    "Lievelde",
    "Zelhem",
    "Ruurlo",
    "Borculo",
  ],

  nav: [
    { label: "Schilderwerk", href: "/schilderwerk" },
    { label: "Beglazing", href: "/beglazing" },
    { label: "Wandafwerking", href: "/wandafwerking" },
    { label: "Spuitwerk", href: "/spuiten" },
    { label: "Over ons", href: "/over-ons" },
    { label: "Contact", href: "/contact" },
  ],

  practical: [
    { label: "Winterschilder", href: "/winterschilder" },
    { label: "9% btw", href: "/9-procent-btw" },
    { label: "Vacature", href: "/vacature" },
    { label: "Bouwvakantie", href: "/bouwvakantie" },
    { label: "Privacy", href: "/privacy" },
  ],

  services: [
    {
      href: "/schilderwerk",
      title: "Schilderwerk",
      text: "Binnen en buiten. Wij inventariseren eerst: achterstallig onderhoud, hout- of betonreparatie, oude verflagen en de kitranden. Zo ligt er een basis die tegen weer en wind beschermt.",
      image: "/img/hout-reperatie.jpg",
      alt: "Een plamuurmes haalt oude verflagen van een houten kozijn",
      caption: "Houtreparatie aan een kozijn, vóór het nieuwe schilderwerk.",
    },
    {
      href: "/beglazing",
      title: "Beglazing",
      text: "Isolatieglas, decoratief glas, zonreflecterend glas, veiligheidsglas en spiegelglas. Triple, HR++ en monumenten-isolatieglas. Wij adviseren en plaatsen.",
      image: "/img/Beglazen.jpg",
      alt: "Hand tilt een glasplaat op met zuignappen",
      caption: "Glas opnemen met zuignappen.",
    },
    {
      href: "/wandafwerking",
      title: "Wandafwerking",
      text: "Papier-, foto-, vlies-, vinyl- en glasweefselbehang. Wij bekijken de muren, geven advies, leveren het behang en nemen de afwerking uit handen.",
      image: "/img/behang.jpg",
      alt: "Schilder brengt donker behang met een bladmotief aan op een wand",
      caption: "Wandafwerking: behang aanbrengen.",
    },
    {
      href: "/spuiten",
      title: "Spuitwerk",
      text: "Een eigen verfspuiterij voor prefab onderdelen, kozijnen en deuren in basis- of lakverf. Voor aannemers, interieurbouwers en fabrikanten, en voor particulieren.",
      image: "/img/deuren-spuiten.jpg",
      alt: "Deuren in de grondverf en in rood, staand in de spuitruimte",
      caption: "Deuren in de spuiterij, deels in de grondverf en deels in kleur.",
    },
  ],

  faq: [
    {
      q: "Hoe vraag ik een vrijblijvende kennismaking of offerte aan?",
      a: "Bel 0544-371560 of mail info@dankbaar.nl. Wij spreken met u af wat er moet gebeuren. Een formulier op deze conceptsite opent uw eigen mailprogramma; er wordt hier niets opgeslagen.",
    },
    {
      q: "Wat houdt de Winterschilder in?",
      a: "Van half november tot half maart geven wij een extra korting op onderhoud van binnenschilderwerk en behang van minimaal 3 mandagen. De korting verrekenen wij direct op de factuur. Hoe hoog die extra korting is, bespreken wij bij de kennismaking. Waar de regeling geldt, komt daar 9% btw op het arbeidsloon bij.",
      link: { href: "/winterschilder", label: "Lees de Winterschilder" },
    },
    {
      q: "Welk glas kunnen jullie plaatsen?",
      a: "Isolatieglas, decoratief glas, zonreflecterend glas, veiligheidsglas en spiegelglas. Bij isolatieglas: triple, HR++ en monumenten-isolatieglas. Wij adviseren welke oplossing bij uw situatie past en plaatsen het glas.",
      link: { href: "/beglazing", label: "Naar beglazing" },
    },
    {
      q: "Waar werken jullie?",
      a: "In de hele Achterhoek, met name in Lichtenvoorde, Aalten, Varsseveld, Groenlo, Winterswijk, Zieuwent, Lievelde, Zelhem, Ruurlo en Borculo.",
    },
    {
      q: "Wanneer geldt 9% btw op schilderwerk?",
      a: "Voor schilderwerk aan huur- en koopwoningen ouder dan 2 jaar, mits de woning voor minimaal 50% als woonruimte in gebruik is. Woningen jonger dan 2 jaar en gebouwen met een andere bestemming vallen onder 21%.",
      link: { href: "/9-procent-btw", label: "Toelichting 9% btw" },
    },
  ],

  spuitFaq: [
    {
      q: "Voor wie is de verfspuiterij?",
      a: "Voor aannemers, interieurbouwers en fabrikanten die prefab onderdelen, kozijnen of deuren up to date willen afleveren. En voor particulieren die deuren, radiatoren of meubels in een nieuwe kleur willen laten spuiten.",
    },
    {
      q: "In welke verf spuiten jullie?",
      a: "Wij zetten onderdelen op professionele wijze in de basis- of lakverf.",
    },
    {
      q: "Hoe vraag ik spuitwerk aan?",
      a: "Bel 0544-371560 of mail info@dankbaar.nl voor een vrijblijvende kennismaking. Het formulier opent uw mailprogramma. Wij bevestigen pas als wij uw bericht echt hebben ontvangen.",
    },
  ],
} as const;

export type Content = typeof content;

export const phoneHref = `tel:${content.contact.phoneTel}`;
export const mailHref = `mailto:${content.contact.email}?subject=${encodeURIComponent("Vrijblijvende kennismaking")}`;
export const addressLine = `${content.contact.street}, ${content.contact.postalCode} ${content.contact.city}`;
