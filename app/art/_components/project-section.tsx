import Image from "next/image";

type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type ProjectSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  images: ProjectImage[];
  actionLabel: string;
  actionHref: string;
  actionExternal?: boolean;
  variant: "ijso" | "khkk";
  imageGridId?: string;
};

export function ProjectSection({
  id,
  eyebrow,
  title,
  description,
  images,
  actionLabel,
  actionHref,
  actionExternal = false,
  variant,
  imageGridId,
}: ProjectSectionProps) {
  return (
    <section className={`projectSection projectSection-${variant}`} id={id}>
      <div className="projectIntro">
        <div className="projectCopy">
          <p className="artEyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p
            className="projectDescription"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
          {variant !== "ijso" ? (
            <a
              className="artAction"
              href={actionHref}
              {...(actionExternal
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
            >
              {actionLabel}
              <span aria-hidden="true">↗</span>
            </a>
          ) : (
            ""
          )}
        </div>

        {variant === "ijso" ? (
          <div className="projectSticker" aria-hidden="true">
            <div>
              <Image
                src="/images/art-design/wsif-stickers/sticker-03.png"
                alt=""
                width={2469}
                height={1975}
                sizes="(max-width: 640px) 25vw, 180px"
              />
              <a
                className="artAction"
                href={actionHref}
                {...(actionExternal
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                {actionLabel}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
            <Image
              src="/images/art-design/wsif-stickers/sticker-02.png"
              alt=""
              width={2469}
              height={1975}
              sizes="(max-width: 640px) 25vw, 180px"
            />
          </div>
        ) : (
          <div className="projectWebinar" aria-hidden="true">
            {/* <Image
              src="/images/art-design/khkk/post-01.png"
              alt=""
              width={2469}
              height={1975}
              sizes="(max-width: 640px) 40vw, 280px"
            /> */}
          </div>
        )}
      </div>

      <div
        className={`projectImageGrid projectImageGrid-${variant}`}
        id={imageGridId}
        aria-label={`${title} project artwork`}
      >
        {images.map((image, index) => (
          <figure className="projectImageCard  " key={image.src}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes={
                variant === "ijso"
                  ? "(max-width: 640px) 32vw, 18vw"
                  : "(max-width: 640px) 45vw, 30vw"
              }
              priority={variant === "ijso" && index === 0}
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
