import Link from "next/link";
import type { ReactNode } from "react";
import { OfferteButton, PhoneButton } from "@/components/site/Links";
import { LMark, VanStripe } from "@/components/site/Marks";
import { PhotoFrame } from "@/components/site/Photo";

export function Article({
  section,
  crumb,
  title,
  lede,
  image,
  children,
}: {
  section: string;
  crumb: string;
  title: string;
  lede: string;
  image?: { src: string; alt: string; caption: string; ratio?: string; frame?: string };
  children: ReactNode;
}) {
  return (
    <>
      <section data-section={section} className="concrete-grain">
        <div className={`mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 lg:py-16 ${image ? "lg:grid-cols-2" : ""}`}>
          <div>
            <p className="mb-4 text-base">
              <Link href="/" className="link underline">
                Home
              </Link>
              <span aria-hidden="true"> / </span>
              {crumb}
            </p>
            <LMark />
            <h1 className="max-w-[16ch] text-[2.7rem] sm:text-6xl">{title}</h1>
            <p className="mt-5 max-w-[42rem]">{lede}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PhoneButton />
              <OfferteButton />
            </div>
          </div>
          {image ? (
            <div className={image.frame}>
              <PhotoFrame src={image.src} alt={image.alt} caption={image.caption} ratio={image.ratio} priority />
            </div>
          ) : null}
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-5 py-14 lg:py-16">{children}</div>
    </>
  );
}

export function Closing({ title, text }: { title: string; text: string }) {
  return (
    <section data-section="vervolg" className="on-dark bg-accent text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-14 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <VanStripe className="mb-5 h-4 w-40 text-white" />
          <h2 className="text-4xl text-white sm:text-5xl">{title}</h2>
          <p className="mt-4 text-white">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <PhoneButton />
          <OfferteButton onDark />
        </div>
      </div>
    </section>
  );
}
