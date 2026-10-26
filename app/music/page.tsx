import type { Metadata } from "next";
import Image from "next/image";
import { ArtNavigation } from "../art/_components/art-navigation";
import {
  ResearchImage,
  ResearchVideo,
} from "../science-research/_components/research-image";
import { Footer } from "../art/_components/footer";

export const metadata: Metadata = {
  title: "Music | Vuong Ha Chi",
  description: "Music performances and instrument moments by me.",
};

const musicImage = (name: string) => `/images/music/${name}`;

const musicCaptionClass =
  "[font-family:'SVN_Comic','Comic_Sans_MS',cursive] text-[22px] ";

export default function MusicPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#25217b] pb-12 text-white">
      <ArtNavigation currentHref="/music" />

      <div className="mx-auto w-[min(100%-2rem,1140px)]">
        <section
          id="top"
          aria-label="Music performances"
          className="relative h-[3000px] max-[640px]:h-[1280px]"
        >
          <div className="absolute left-[11%] top-[4.5%] h-[12%] w-[79%] rotate-[-0.5deg]">
            <Image
              alt=""
              className="object-cover"
              fill
              priority
              sizes="(max-width: 640px) 80vw, 900px"
              src="/images/shared/paper-crumpled.png"
            />
            <p className="absolute left-[46%] top-[7%] w-[48%] text-[clamp(20px,2vw,26px)] leading-[1.22] text-[#25217b] [font-family:'SVN_Comic','Comic_Sans_MS',cursive]">
              I love Vietnamese culture. I love the elegance of string
              instruments. So ever since getting to know the đàn nhị in 6th
              grade, I knew it was perfect for me. I love introducing others to
              my culture through folk music, but I especially enjoy playing rock
              music on it—it always gives people a pleasant surprise!
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
            className="absolute left-[41%] top-[3.5%] z-20 w-[4%] rotate-[14deg]"
            height={119}
            src="/images/doodles/music-01.svg"
            width={118}
          />
          <Image
            alt=""
            aria-hidden="true"
            className="absolute left-[35%] top-[13%] z-20 w-[7%] rotate-[12deg]"
            height={119}
            src="/images/doodles/music-02.svg"
            width={118}
          />
          <Image
            alt=""
            aria-hidden="true"
            className="absolute left-[35%] top-[12%] z-20 w-[2.5%]"
            height={57}
            src="/images/doodles/music-03.svg"
            width={55}
          />

          <ResearchImage
            alt="Performing at Hanoi Student's Instrument Talent Festival 2026"
            caption="Hanoi Student's Instrument Talent Festival 2026"
            captionClassName={musicCaptionClass}
            className="left-[4%] top-[18%] w-[38%]  "
            frameClassName="!p-[11px]"
            imageContainerClassName="aspect-[1.18]"
            src={musicImage("talent-festival-2026-01.png")}
          />
          <ResearchImage
            alt="Performers on stage at Hanoi Student's Instrument Talent Festival 2026"
            caption="Hanoi Student's Instrument Talent Festival 2026"
            captionClassName={musicCaptionClass}
            className="left-[45%] top-[18%] w-[43%] rotate-[-5deg]"
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
            className="left-[3%] top-[32.5%] w-[36%] "
            frameClassName="!p-[11px]"
            imageContainerClassName="aspect-[0.72]"
            src={musicImage("apyls-culture-day.png")}
          />
          <ResearchImage
            alt="Music performance at World School International Forum"
            caption="Performance in World School International Forum"
            captionClassName={musicCaptionClass}
            className="right-[5%] top-[30%] w-[53%] rotate-[1.5deg]"
            frameClassName="!p-[11px]"
            imageContainerClassName="aspect-[1.95]"
            src={musicImage("wsif-performance.png")}
          />
          <ResearchImage
            alt="Performing at Family Day"
            caption="Second Place in Family Day Performance"
            captionClassName={musicCaptionClass}
            className="left-[2%] top-[56%] w-[50%] rotate-[4deg]"
            frameClassName="!p-[11px]"
            imageContainerClassName="aspect-[1.68]"
            src={musicImage("family-day-new.png")}
          />
          <ResearchImage
            alt="Performing at the School Cluster 7 student instrument talent competition"
            caption="Performance at School cluster 7 Student’s Instrusment Talent competition"
            captionClassName={musicCaptionClass}
            className="right-[8%] top-[43%] w-[45%] rotate-[-5deg]"
            frameClassName="!p-[11px]"
            imageContainerClassName="aspect-[1.48]"
            src={musicImage("cluster-7-competition.png")}
          />
          <ResearchImage
            alt="Performing at a parents' meeting"
            caption="Performance in parent’s meeting"
            captionClassName={musicCaptionClass}
            className="right-[7%] top-[57%] w-[39%] rotate-[0deg]"
            frameClassName="!p-[11px]"
            imageContainerClassName="aspect-[1.23]"
            src={musicImage("parents-meeting.png")}
          />

          <ResearchVideo
            alt="Chiếc khăn piêu &amp; Nối vòng tay lớn Mashup - Performance at Hanoi Student Instrument Talent Festival"
            caption="Hanoi Student's Instrument 
Talent Festival"
            captionClassName={musicCaptionClass}
            className="left-[2%] top-[69%] w-[65%] rotate-[0deg] z-4!"
            frameClassName="!p-[11px]"
            imageContainerClassName="aspect-[1.69]"
            src="https://www.youtube.com/embed/J5127EAX8Qs"
          />

          <ResearchVideo
            alt="Nhà tôi có treo một lá cờ - Performance at School Cluster 7 Student Instrument Talent Competition"
            caption="Performance at Student's Instrument Talent Festival, School Cluster No. 7"
            captionClassName={musicCaptionClass}
            className="right-[7%] top-[84%] w-[60%] rotate-[0deg] z-3!"
            frameClassName="!p-[11px]"
            imageContainerClassName="aspect-[1.69]"
            src="https://www.youtube.com/embed/TRBI9auAMrc"
          />
        </section>

        <Footer />
      </div>
    </main>
  );
}
