"use client";

import { useState, type FormEvent } from "react";
import { content } from "@/content";

const topics = ["Schilderwerk", "Beglazing", "Wandafwerking", "Spuitwerk", "Winterschilder", "Vacature", "Anders"] as const;

export function MailForm({ page }: { page: string }) {
  const [note, setNote] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const naam = String(data.get("naam") ?? "").trim();
    const telefoon = String(data.get("telefoon") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const onderwerp = String(data.get("onderwerp") ?? "").trim();
    const bericht = String(data.get("bericht") ?? "").trim();
    const subject = `Kennismaking / offerte: ${onderwerp}`;
    const body = [
      `Naam: ${naam}`,
      `Telefoon: ${telefoon || "-"}`,
      `E-mail: ${email || "-"}`,
      `Onderwerp: ${onderwerp}`,
      `Pagina: ${page}`,
      "",
      bericht,
    ].join("\n");
    window.location.href = `mailto:${content.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setNote("Uw mailprogramma hoort nu te openen. Er is niets op deze site opgeslagen of verzonden. Komt het programma niet omhoog, mail dan zelf naar info@dankbaar.nl.");
  }

  return (
    <form id="offerte" data-section="offerteformulier" onSubmit={onSubmit} className="scroll-mt-28 border border-foreground/15 bg-white p-5 sm:p-7">
      <h2 className="font-display text-4xl">Vrijblijvende kennismaking</h2>
      <p className="mt-3 max-w-xl text-base">
        Dit formulier verstuurt niets zelf. De knop opent uw mailprogramma met een bericht aan {content.contact.email}. Wij reageren pas als dat bericht ons bereikt.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block text-base font-semibold" htmlFor="naam">
          Naam
          <input id="naam" name="naam" required autoComplete="name" maxLength={120} className="mt-1 w-full border border-foreground/25 bg-putty px-3 py-3 font-normal" />
        </label>
        <label className="block text-base font-semibold" htmlFor="telefoon">
          Telefoon
          <input id="telefoon" name="telefoon" type="tel" autoComplete="tel" maxLength={40} className="mt-1 w-full border border-foreground/25 bg-putty px-3 py-3 font-normal" />
        </label>
        <label className="block text-base font-semibold sm:col-span-2" htmlFor="email">
          Uw e-mailadres
          <input id="email" name="email" type="email" autoComplete="email" maxLength={160} className="mt-1 w-full border border-foreground/25 bg-putty px-3 py-3 font-normal" />
        </label>
        <label className="block text-base font-semibold sm:col-span-2" htmlFor="onderwerp">
          Onderwerp
          <select id="onderwerp" name="onderwerp" required defaultValue="Schilderwerk" className="mt-1 w-full border border-foreground/25 bg-putty px-3 py-3 font-normal">
            {topics.map((topic) => (
              <option key={topic}>{topic}</option>
            ))}
          </select>
        </label>
        <label className="block text-base font-semibold sm:col-span-2" htmlFor="bericht">
          Bericht
          <textarea id="bericht" name="bericht" required rows={6} maxLength={2000} className="mt-1 w-full border border-foreground/25 bg-putty px-3 py-3 font-normal" />
        </label>
      </div>

      <button type="submit" data-cta="offerte" className="btn btn-red mt-5">
        Open dit bericht in uw mailprogramma
      </button>
      {note ? (
        <p className="mt-4 text-base" role="status">
          {note}
        </p>
      ) : null}
    </form>
  );
}
