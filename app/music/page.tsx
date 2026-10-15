import type { Metadata } from "next";
import Image from "next/image";
import { ArtNavigation } from "../art/_components/art-navigation";
import { ResearchImage } from "../science-research/_components/research-image";

export const metadata: Metadata = {
  title: "Music | Vuong Ha Chi",
  description: "Music performances and instrument moments by me.",
};

const musicImage = (name: string) => `/images/music/${name}`;

const musicCaptionClass =
  "[font-family:'SVN_Comic','Comic_Sans_MS',cursive] text-[clamp(0.85rem,1.35vw,1.2rem)]";

export default function MusicPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#25217b] pb-12 text-white">
      <ArtNavigation currentHref="/music" />

      <div className="mx-auto w-[min(100%-2rem,1140px)]">
        <section
          aria-label="Music performances"
          className="relative h-[2200px] max-[640px]:h-[1280px]"
        >
          <div className="absolute left-[11%] top-[4.5%] h-[17%] w-[79%] rotate-[-0.5deg]">
            <Image
              alt=""
              className="object-cover"
              fill
              priority
              sizes="(max-width: 640px) 80vw, 900px"
              src="/images/shared/paper-crumpled.png"
            />
            <p className="absolute left-[46%] top-[17%] w-[48%] text-[28px] leading-[1.5] text-[#25217b] [font-family:'SVN_Comic','Comic_Sans_MS',cursive]">
              Intro ngắn trên cùng: [Khoảng 4-5 câu, chưa viết]. Thêm ảnh ngày đầu tập đàn (file Day 1jpg)
            </p>
          </div>

          <ResearchImage
            alt="Chi holding an instrument on her first day of music lessons"
            className="left-[5%] top-[1%] w-[30%] -rotate-[8deg]"
            frameClassName="!p-3"
            imageContainerClassName="aspect-[0.79]"
            src={musicImage("intro.png")}
          />

          <Image
            alt=""
            aria-hidden="true"
            className="absolute left-[9%] top-[0.5%] z-20 w-[5%] rotate-[-12deg]"
            height={119}
            src="/images/doodles/music-01.svg"
            width={118}
          />
          <Image
            alt=""
            aria-hidden="true"
            className="absolute left-[41%] top-[3%] z-20 w-[4%] rotate-[14deg]"
            height={119}
            src="/images/doodles/music-01.svg"
            width={118}
          />
          <Image
            alt=""
            aria-hidden="true"
            className="absolute left-[40%] top-[18%] z-20 w-[7%] rotate-[12deg]"
            height={119}
            src="/images/doodles/music-02.svg"
            width={118}
          />
          <Image
            alt=""
            aria-hidden="true"
            className="absolute left-[35%] top-[21%] z-20 w-[2.5%]"
            height={57}
            src="/images/doodles/music-03.svg"
            width={55}
          />

          <ResearchImage
            alt="Performing at Hanoi Student's Instrument Talent Festival 2026"
            caption="Hanoi Student's Instrument Talent Festival 2026"
            captionClassName={musicCaptionClass}
            className="left-[4%] top-[23%] w-[38%]  "
            frameClassName="!p-[11px]"
            imageContainerClassName="aspect-[1.18]"
            src={musicImage("talent-festival-2026-01.png")}
          />
          <ResearchImage
            alt="Performers on stage at Hanoi Student's Instrument Talent Festival 2026"
            caption="Hanoi Student's Instrument Talent Festival 2026"
            captionClassName={musicCaptionClass}
            className="left-[45%] top-[24%] w-[43%] rotate-[-5deg]"
            frameClassName="!p-[11px]"
            imageContainerClassName="aspect-[1.82]"
            src={musicImage("talent-festival-2026-02.png")}
          />
          <ResearchImage
            alt="Performing đàn nhị at Culture Day"
            caption="Performance at Culture Day
Hwa Chong Institution Asian
Pacific Young Leaders Summit"
            captionClassName={musicCaptionClass}
            className="left-[3%] top-[43%] w-[36%] "
            frameClassName="!p-[11px]"
            imageContainerClassName="aspect-[0.72]"
            src={musicImage("apyls-culture-day.png")}
          />
          <ResearchImage
            alt="Music performance at World School International Forum"
            caption="Performance in World School International Forum"
            captionClassName={musicCaptionClass}
            className="right-[5%] top-[41%] w-[53%] rotate-[1.5deg]"
            frameClassName="!p-[11px]"
            imageContainerClassName="aspect-[1.95]"
            src={musicImage("wsif-performance.png")}
          />
          <ResearchImage
            alt="Performing at Family Day"
            caption="Second Place in Family Day Performance"
            captionClassName={musicCaptionClass}
            className="left-[2%] top-[74%] w-[50%] rotate-[4deg]"
            frameClassName="!p-[11px]"
            imageContainerClassName="aspect-[1.68]"
            src={musicImage("family-day.png")}
          />
          <ResearchImage
            alt="Performing at the School Cluster 7 student instrument talent competition"
            caption="Performance at School cluster 7 Student’s Instrusment Talent competition"
            captionClassName={musicCaptionClass}
            className="right-[8%] top-[59%] w-[45%] rotate-[-5deg]"
            frameClassName="!p-[11px]"
            imageContainerClassName="aspect-[1.48]"
            src={musicImage("cluster-7-competition.png")}
          />
          <ResearchImage
            alt="Performing at a parents' meeting"
            caption="Performance in parent’s meeting"
            captionClassName={musicCaptionClass}
            className="right-[7%] top-[79%] w-[39%] rotate-[0deg]"
            frameClassName="!p-[11px]"
            imageContainerClassName="aspect-[1.23]"
            src={musicImage("parents-meeting.png")}
          />
        </section>
      </div>
    </main>
  );
}
