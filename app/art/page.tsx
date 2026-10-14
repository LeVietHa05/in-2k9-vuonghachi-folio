import type { Metadata } from "next";
import Image from "next/image";
import { ArtNavigation } from "./_components/art-navigation";
import { PersonalArtGallery } from "./_components/personal-art-gallery";
import { ProjectSection } from "./_components/project-section";

export const metadata: Metadata = {
  title: "Art & Design | Vuong Ha Chi",
  description:
    "Science communication, campaign design, and personal wildlife illustrations by Vuong Ha Chi.",
};

const ijsoPosts = [
  {
    src: "/images/art-design/ijso-guide/post-04.png",
    alt: "Introducing Chi Vuong as Head of Content Department",
    width: 1080,
    height: 1080,
  },
  {
    src: "/images/art-design/ijso-guide/post-02.png",
    alt: "International science medal for under-16 students",
    width: 1080,
    height: 1080,
  },
  {
    src: "/images/art-design/ijso-guide/post-01.png",
    alt: "Good luck message for IJSO 2025 participants",
    width: 1080,
    height: 1080,
  },
  {
    src: "/images/art-design/ijso-guide/post-03.png",
    alt: "Science is brewing illustration",
    width: 1080,
    height: 1080,
  },
  {
    src: "/images/art-design/ijso-guide/post-05.png",
    alt: "Meet the IJSO Executive Committee, Season 2",
    width: 1080,
    height: 1080,
  },
];

const khkkPosts = [
  {
    src: "/images/art-design/khkk/post-01.png",
    alt: "Khoa Hoc Khong Kho webinar introduction artwork",
    width: 2469,
    height: 1975,
  },
  {
    src: "/images/art-design/khkk/post-02.png",
    alt: "Colorful science communication illustration",
    width: 940,
    height: 788,
  },
  {
    src: "/images/art-design/khkk/post-03.png",
    alt: "Illustrated science experiment for Khoa Hoc Khong Kho",
    width: 2048,
    height: 1536,
  },
  {
    src: "/images/art-design/khkk/post-04.png",
    alt: "Khoa Hoc Khong Kho project announcement",
    width: 1590,
    height: 1059,
  },
];

export default function ArtPage() {
  return (
    <main className="artPage" id="art-top">
      <ArtNavigation />

      <div className="artPageContent">
        <header className="artHero rotate">
          <div className="artHeroCopy">
            <p className="artEyebrow">A little color, a little curiosity</p>
            <h1>
              DESIGNs
              <br />
              FOR PROJECTS
            </h1>
          </div>
          <Image
            className="artHeroSticker"
            src="/images/art-design/wsif-stickers/sticker-01.png"
            alt="Hand-drawn character wearing a Vietnamese flag"
            width={2469}
            height={1975}
            sizes="(max-width: 640px) 32vw, 300px"
          />
          {/* <span className="artHeroStamp" aria-hidden="true">
            WSIF ’25
          </span> */}
          <span className="artPaperHole artPaperHoleOne" aria-hidden="true" />
          <span className="artPaperHole artPaperHoleTwo" aria-hidden="true" />
        </header>

        <ProjectSection
          id="ijso-project"
          eyebrow=" "
          title="A guide to the IJSO"
          description="Head of Content department at the “A Guide to the IJSO” (International Junior Science Olympiad) project: Manages an 11-person international team, including a Design sub-department and a PR sub-department. Determines the creative direction, manages promotional content on social media for a compiled IJSO resource platform made by past IJSO participants"
          images={ijsoPosts}
          actionLabel="Instagram"
          actionHref="https://www.instagram.com/ijsoguide/"
          actionExternal
          variant="ijso"
        />

        <ProjectSection
          id="khkk-project"
          eyebrow=" "
          title="A Guide to the IJSO"
          description="<ul  style='list-style-type: disc; margin-left: 12px;'> <li>Co-founder, Head Designer at “Khoa học Không Khó”,</li> <li>a Science-teaching club providing free science courses and webinars for middle schoolers
          </li></ul> 
"
          images={khkkPosts}
          actionLabel="facebook"
          actionHref="https://www.facebook.com/khoahockhongkho2024"
          variant="khkk"
          imageGridId="khkk-posts"
        />

        <PersonalArtGallery />

        <footer className="artFooter">
          <a href="#art-top">Back to the top ↑</a>
          <a href="/lab">Back to Chi’s lab</a>
        </footer>
      </div>
    </main>
  );
}
