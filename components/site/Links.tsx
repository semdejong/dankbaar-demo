import { content, mailHref, phoneHref } from "@/content";

export function PhoneButton({
  className = "",
  label,
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a className={`btn btn-red ${className}`} href={phoneHref} data-cta="bellen">
      {label ?? `Bel ${content.contact.phoneDisplay}`}
    </a>
  );
}

export function OfferteButton({
  className = "",
  label = "Mail voor een kennismaking",
  onDark = false,
}: {
  className?: string;
  label?: string;
  onDark?: boolean;
}) {
  return (
    <a className={`btn ${onDark ? "btn-line-light" : "btn-line"} ${className}`} href={mailHref} data-cta="offerte">
      {label}
    </a>
  );
}

export function MailAddress({ className = "" }: { className?: string }) {
  return (
    <a className={`link underline ${className}`} href={`mailto:${content.contact.email}`} data-cta="mailen">
      {content.contact.email}
    </a>
  );
}

export function PhoneText({ className = "" }: { className?: string }) {
  return (
    <a className={`link underline ${className}`} href={phoneHref} data-cta="bellen">
      {content.contact.phoneDisplay}
    </a>
  );
}
