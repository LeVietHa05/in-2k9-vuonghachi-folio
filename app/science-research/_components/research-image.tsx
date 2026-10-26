import Image from "next/image";
type ResearchImageProps = {
  src: string;
  alt: string;
  className: string;
  imageContainerClassName?: string;
  imageClassName?: string;
  frameClassName?: string;
  caption?: string;
  captionClassName?: string;
  rounded?: boolean;
};

export function ResearchImage({
  src,
  alt,
  className,
  imageContainerClassName = "aspect-[0.89]",
  imageClassName = "",
  frameClassName = "",
  caption,
  captionClassName = "",
  rounded = false,
}: ResearchImageProps) {
  return (
    <figure
      className={`absolute z-10 m-0 bg-white p-1.5 shadow-[0_5px_16px_rgba(10,8,64,0.28)] ${rounded ? "overflow-hidden rounded-full" : ""} ${frameClassName} ${className}`}
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
        <figcaption
          className={`px-1.5 py-2 text-center leading-snug text-[#25217b] ${captionClassName || "font-[family-name:var(--font-geist-sans)]"}`}
        >
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function ResearchVideo({
  src,
  alt,
  className,
  imageContainerClassName = "aspect-[0.89]",
  imageClassName = "",
  frameClassName = "",
  caption,
  captionClassName = "",
  rounded = false,
}: ResearchImageProps) {
  return (
    <figure
      className={`absolute z-10 m-0 bg-white p-1.5 shadow-[0_5px_16px_rgba(10,8,64,0.28)] ${rounded ? "overflow-hidden rounded-full" : ""} ${frameClassName} ${className}`}
    >
      <div
        className={`relative w-full overflow-hidden bg-white ${rounded ? "rounded-full" : ""} ${imageContainerClassName}`}
      >
        <iframe
          className="w-full h-full"
          src={src}
          title={alt}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      {caption ? (
        <figcaption
          className={`px-1.5 py-2 text-center leading-snug text-[#25217b] ${captionClassName || "font-[family-name:var(--font-geist-sans)]"}`}
        >
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

type DriveVideoThumbnailProps = {
  /** ID của file video trên Google Drive (phần giữa /d/ và /view trong link) */
  fileId: string;
  alt: string;
  className?: string;
  imageContainerClassName?: string;
  imageClassName?: string;
  frameClassName?: string;
  caption?: string;
  captionClassName?: string;
  rounded?: boolean;
  /** Kích thước thumbnail lấy từ Drive (chiều rộng, px). Mặc định 800 */
  thumbnailWidth?: number;
  /** Hiển thị icon play ở giữa. Mặc định true */
  showPlayIcon?: boolean;
};

export function DriveVideoThumbnail({
  fileId,
  alt,
  className = "",
  imageContainerClassName = "aspect-video",
  imageClassName = "",
  frameClassName = "",
  caption,
  captionClassName = "",
  rounded = false,
  thumbnailWidth = 800,
  showPlayIcon = true,
}: DriveVideoThumbnailProps) {
  const thumbnailSrc = `https://drive.google.com/thumbnail?id=${fileId}&sz=w${thumbnailWidth}`;
  const driveUrl = `https://drive.google.com/file/d/${fileId}/view`;

  return (
    <a
      href={driveUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Mở video trên Google Drive: ${alt}`}
      className={`absolute z-10 block cursor-pointer transition-transform duration-300 ease-out hover:z-20 hover:scale-105 focus-visible:z-20 focus-visible:scale-105 focus-visible:outline-none ${className}`}
    >
      <figure
        className={`m-0 bg-white p-1.5 shadow-[0_5px_16px_rgba(10,8,64,0.28)] transition-shadow duration-300 hover:shadow-[0_10px_28px_rgba(10,8,64,0.38)] ${rounded ? "overflow-hidden rounded-full" : ""} ${frameClassName}`}
      >
        <div
          className={`relative w-full overflow-hidden bg-white ${rounded ? "rounded-full" : ""} ${imageContainerClassName}`}
        >
          <Image
            alt={alt}
            className={`object-cover ${rounded ? "rounded-full" : ""} ${imageClassName}`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1200px) 35vw, 420px"
            src={thumbnailSrc}
            unoptimized
          />
          {showPlayIcon ? (
            <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="ml-0.5 h-6 w-6 fill-current"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          ) : null}
        </div>
        {caption ? (
          <figcaption
            className={`px-1.5 py-2 text-center leading-snug text-[#25217b] ${captionClassName || "font-[family-name:var(--font-geist-sans)]"}`}
          >
            {caption}
          </figcaption>
        ) : null}
      </figure>
    </a>
  );
}
