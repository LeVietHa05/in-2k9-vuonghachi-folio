import Image from "next/image";

type ArtCardProps = {
  src: string;
  alt: string;
  className: string;
  content?: string;
};

function ArtCard({ src, alt, className, content }: ArtCardProps) {
  return (
    <figure className={`artworkCard ${className}`}>
      <div className="artworkImage">
        <Image src={src} alt={alt} fill sizes="(max-width: 640px) 42vw, 34vw" />
      </div>
      {content && (
        <figcaption>
          <strong>{content}</strong>
        </figcaption>
      )}
    </figure>
  );
}

export function PersonalArtGallery() {
  return (
    <section className="personalArt" id="personal-art">
      <header className="personalArtIntro">
        <h2>Personal art</h2>
        <p className="text-[35px]">
          “Vietnam’s exotic animals”: Inspired by arts on vintage Vietnamese
          stamps of endangered species, I wanted to draw these species to spread
          awareness on their conservation, with a twist: they’re all
          cartoonified into silly, adorable versions of themselves!
        </p>
      </header>

      <div className="personalArtScene personalArtSceneOne">
        <div className="personalArtPaper" aria-hidden="true" />
        <div className="personalArtNote personalArtDoucNote">
          <h3>Scientific name: Pygathrix nemaeus</h3>
          <p>Conservation status: Critically Endangered</p>
          <p>
            Description: The red-shanked douc is widely celebrated as the most
            colorful primate on Earth. It is universally nicknamed the
            &ldquo;Queen of Primates&ldquo;. This little guy was drawn as a
            forest ranger, inspired by his local name “khỉ chú lính”, which
            roughly translates to “soldier monkey”! The stamps in the background
            were drawn after the original stamp that inspired this drawing.
          </p>
        </div>
        <ArtCard
          className="artworkCardDouc"
          src="/images/art-design/personal-art/red-shanked-douc.png"
          alt="Illustration of a red-shanked douc langur"
        />
        <ArtCard
          content="Saola"
          className="artworkCardSaola"
          src="/images/art-design/personal-art/saola.png"
          alt="Illustration of a saola"
        />
        <ArtCard
          content="The fishing cat"
          className="artworkCardFishingCat"
          src="/images/art-design/personal-art/fishing-cat.png"
          alt="Illustration of a fishing cat"
        />
      </div>

      <div className="personalArtScene personalArtSceneTwo">
        <div className="personalArtPaper" aria-hidden="true" />
        <div className="personalArtNote personalArtMothNote">
          <h3>Name: Atlas moth - Bướm khế</h3>
          <p>
            Scientific name: <b>𝘼𝙩𝙩𝙖𝙘𝙪𝙨 𝙖𝙩𝙡𝙖𝙨</b>
          </p>
          <p>
            One of the three butterfly species in the Vietnam Red Data Book of
            Threatened Species.
          </p>
          <p>
            Description: &ldquo;Bướm khế&ldquo; in Vietnamese translates to
            Starfruit butterfly. The species got this name because it frequently
            lays eggs and develops on starfruit trees. This is the main
            inspiration behind her outfit!
          </p>
        </div>
        <figure className="atlasMothPortrait">
          <Image
            src="/images/art-design/personal-art/atlas-moth.png"
            alt="Illustration of an atlas moth character"
            fill
            sizes="(max-width: 640px) 38vw, 27vw"
          />
        </figure>
        <div className="atlasMothDetails">
          <div className="atlasMothDetail atlasMothDetailOne">
            <Image
              src="/images/art-design/personal-art/atlas-moth-1.png"
              alt="Detail of the atlas moth illustration"
              fill
              sizes="(max-width: 640px) 25vw, 14vw"
            />
          </div>
          <div className="atlasMothDetail atlasMothDetailTwo">
            <Image
              src="/images/art-design/personal-art/atlas-moth-2.png"
              alt="Close-up detail of the atlas moth illustration"
              fill
              sizes="(max-width: 640px) 25vw, 14vw"
            />
          </div>
        </div>
        <p className="personalArtNote personalArtMothCaption">
          Modernized{" "}
          <span className="text-red-600">&ldquo;Nhật bình&ldquo;</span>, a
          traditional Vietnamese attire associated with the noble women of the
          Nguyen dynasty, with a pattern featuring the moth &ldquo;holding up
          the sky&ldquo;, and a starfuit blossom-colored skirt
        </p>
      </div>

      <div className="personalArtScene personalArtSceneThree">
        <div className="personalArtPaper" aria-hidden="true" />
        <ArtCard
          content="The White-shorts monkey
(Delacour's langur - Trachypithecus delacouri)"
          className="artworkCardLangur"
          src="/images/art-design/personal-art/delacours-langur.png"
          alt="Illustration of a Delacour's langur"
        />
        <ArtCard
          className="artworkCardLoris"
          content="The slow loris"
          src="/images/art-design/personal-art/slow-loris.png"
          alt="Illustration of a slow loris"
        />
      </div>

      <figure className="otterDiptych">
        <div className="otterImagePair">
          <Image
            src="/images/art-design/personal-art/otter.png"
            alt="Colorful illustration of an Asian small-clawed otter"
            width={1600}
            height={1600}
            sizes="(max-width: 640px) 42vw, 20vw"
          />
          <Image
            src="/images/art-design/personal-art/otter-sketch.png"
            alt="Black and white sketch of an Asian small-clawed otter"
            width={1600}
            height={1600}
            sizes="(max-width: 640px) 42vw, 20vw"
          />
        </div>
        <figcaption>Save the Asian small-clawed otter!</figcaption>
      </figure>
    </section>
  );
}
