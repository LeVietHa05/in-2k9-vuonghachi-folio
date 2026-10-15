import Image from "next/image";
type ResearchImageProps = {
  src: string;
  alt: string;
  className: string;
  imageContainerClassName?: string;
  imageClassName?: string;
  caption?: string;
  rounded?: boolean;
};

export function ResearchImage({
  src,
  alt,
  className,
  imageContainerClassName = "aspect-[0.89]",
  imageClassName = "",
  caption,
  rounded = false,
}: ResearchImageProps) {
  return (
    <figure
      className={`absolute z-10 m-0 bg-white p-1.5 shadow-[0_5px_16px_rgba(10,8,64,0.28)] ${rounded ? "overflow-hidden rounded-full" : ""} ${className}`}
    >
      <div
        className={`relative w-full overflow-hidden bg-white ${rounded ? "rounded-full" : ""} ${imageContainerClassName}`}
      >
        <Image
          alt={alt}
          className={`object-cover ${rounded ? "rounded-full" : ""} ${imageClassName}`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1200px) 35vw, 420px"
          src={src}
        />
      </div>
      {caption ? (
        <figcaption className="px-1.5 py-2 text-center font-[family-name:var(--font-geist-sans)] text-[clamp(0.55rem,0.8vw,0.76rem)] leading-snug text-[#25217b]">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
