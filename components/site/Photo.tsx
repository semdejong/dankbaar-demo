import Image from "next/image";
import { Hoek } from "@/components/site/Marks";

export function PhotoFrame({
  src,
  alt,
  caption,
  ratio = "aspect-[16/10]",
  priority = false,
  sizes = "(min-width: 1024px) 46vw, 100vw",
}: {
  src: string;
  alt: string;
  caption: string;
  ratio?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <figure>
      <div className={`relative overflow-hidden bg-concrete ${ratio}`}>
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
        <Hoek />
      </div>
      <figcaption className="mt-3 text-base leading-snug">{caption}</figcaption>
    </figure>
  );
}
