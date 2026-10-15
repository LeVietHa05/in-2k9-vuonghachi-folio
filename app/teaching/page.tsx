import type { Metadata } from "next";
import { ArtNavigation } from "../art/_components/art-navigation";
import { ResearchImage } from "../science-research/_components/research-image";

export const metadata: Metadata = {
  title: "Teaching | Vuong Ha Chi",
  description:
    "Food science and science outreach teaching projects by Vuong Ha Chi.",
};

const foodImage = (name: string) => `/images/teaching/food-science/${name}`;
const khkkImage = (name: string) => `/images/teaching/khkk-ntech/${name}`;

function PaperSheet({ className }: { className: string }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute bg-[#faf9f3] bg-[linear-gradient(90deg,transparent_0_10%,rgb(237_93_133_/_36%)_10.1%_10.35%,transparent_10.5%),repeating-linear-gradient(to_bottom,transparent_0,transparent_1.7rem,rgb(65_139_205_/_24%)_1.76rem,transparent_1.82rem)] shadow-[0_5px_16px_rgba(10,8,64,0.24)] ${className}`}
    />
  );
}

export default function TeachingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#25217b] pb-14 text-white">
      <ArtNavigation currentHref="/teaching" />

      <div className="mx-auto w-[min(100%-2rem,1140px)]">
        <section
          aria-labelledby="food-science-title"
          className="relative h-[clamp(780px,95vw,1120px)]"
        >
          <h1
            className="absolute left-[5%] top-[3%] z-20 -rotate-[2.5deg] text-[clamp(2.5rem,6vw,5.25rem)] leading-none font-normal text-white [font-family:'Super_Crafty',Impact,sans-serif] uppercase"
            id="food-science-title"
          >
            Food Science Course
          </h1>

          <PaperSheet className="left-[4%] top-[14%] h-[42%] w-[92%] -rotate-[2.5deg]" />
          <p className="absolute left-[12%] top-[14%] z-10 w-[78%] text-[23px]   text-[#25217b] [font-family:'SVN_Comic','Comic_Sans_MS',cursive]  -rotate-[2.5deg]">
            Wanting to introduce younger students to the fascinating world of
            Food Science, I developed a 3-lesson course that explored nutrition,
            food packaging, and food chemistry. I adapted the curriculum and
            coordinated with schools to integrate it into their summer program.
          </p>

          <ResearchImage
            alt="Teaching students a hands-on food science activity"
            className="left-[8%] top-[25%] z-20 w-[27%] -rotate-[2.5deg]"
            frameClassName="!p-[6px]"
            imageContainerClassName="aspect-[1.38]"
            src={foodImage("photo-01.png")}
          />
          <ResearchImage
            alt="Demonstrating a food science experiment to students"
            className="left-[36%] top-[24%] z-20 w-[27%] -rotate-[2.5deg]"
            frameClassName="!p-[6px]"
            imageContainerClassName="aspect-[1.38]"
            src={foodImage("photo-02.png")}
          />
          <ResearchImage
            alt="Students participating in a food science experiment"
            className="right-[9%] top-[23%] z-20 w-[27%] -rotate-[2.5deg]"
            frameClassName="!p-[6px]"
            imageContainerClassName="aspect-[1.38]"
            src={foodImage("photo-03.png")}
          />

          <PaperSheet className="left-[4%] top-[59%] h-[39%] w-[92%] rotate-[3deg]" />
          <p className="absolute left-[15%] top-[58%] z-10 w-[44%] text-[21px] leading-[1.5] text-[#25217b] [font-family:'SVN_Comic','Comic_Sans_MS',cursive] rotate-[3deg]">
            The program was delivered at 4 secondary schools, reaching 100+
            students through interactive lessons and hands-on experiments. The
            students especially enjoyed making their own butter out of whipping
            cream and watching cheese curds form as heated milk met lime juice!
          </p>
          <ResearchImage
            alt="Students attending a food science lesson"
            className="left-[3%] top-[72%] z-20 w-[31%] -rotate-[3deg]"
            frameClassName="!p-[6px]"
            imageContainerClassName="aspect-[1.5]"
            src={foodImage("photo-04.png")}
          />
          <ResearchImage
            alt="Students trying a food science activity"
            className="left-[29%] top-[79%] z-30 w-[31%] rotate-[1deg]"
            frameClassName="!p-[6px]"
            imageContainerClassName="aspect-[1.52]"
            src={foodImage("photo-05.png")}
          />
          <ResearchImage
            alt="Students taking part in a classroom food science lesson"
            className="right-[12%] top-[70%] z-20 w-[29%] rotate-[4deg]"
            frameClassName="!p-[6px]"
            imageContainerClassName="aspect-[1.5]"
            src={foodImage("photo-06.png")}
          />
        </section>

        <section
          aria-labelledby="khkk-title"
          className="relative mt-8 h-[clamp(650px,73vw,850px)]"
        >
          <PaperSheet className="left-[8%] top-[2%] h-[59%] w-[74%] -rotate-[1deg]" />

          <h2
            className="absolute left-[14%] top-[5%] z-10 max-w-[62%] text-[clamp(2rem,4.5vw,4rem)] leading-[1.2] font-normal text-[#3931c4] [font-family:'Super_Crafty',Impact,sans-serif] uppercase"
            id="khkk-title"
          >
            Khoa học không khó at N-Tech
          </h2>
          <p className="absolute left-[14%] top-[23%] z-10 w-[41%] text-[clamp(0.7rem,0.95vw,0.9rem)] leading-[1.8] text-[#25217b] [font-family:'SVN_Comic','Comic_Sans_MS',cursive]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            Aenean lacinia bibendum nulla sed consectetur.
          </p>

          <ResearchImage
            alt="Students participating in a Khoa học Không Khó N-Tech experiment"
            className="right-[13%] top-[25%] z-20 w-[36%] rotate-[-6deg]"
            frameClassName="!p-[6px]"
            imageContainerClassName="aspect-[1.38]"
            src={khkkImage("photo-01.png")}
          />
          <ResearchImage
            alt="Khoa học Không Khó N-Tech science outreach demonstration"
            className="left-[10%] top-[64%] z-20 w-[27%] rotate-[3deg]"
            frameClassName="!p-[6px]"
            imageContainerClassName="aspect-[1.38]"
            src={khkkImage("photo-02.png")}
          />
          <ResearchImage
            alt="Students learning through a hands-on N-Tech experiment"
            className="left-[38%] top-[67%] z-30 w-[29%] -rotate-[5deg]"
            frameClassName="!p-[6px]"
            imageContainerClassName="aspect-[1.38]"
            src={khkkImage("photo-03.png")}
          />
          <ResearchImage
            alt="Demonstrating an experiment to N-Tech students"
            className="right-[10%] top-[66%] z-20 w-[27%] rotate-[1deg]"
            frameClassName="!p-[6px]"
            imageContainerClassName="aspect-[1.45]"
            src={khkkImage("photo-04.png")}
          />
        </section>

        <footer className="relative z-20 flex justify-between px-2 pt-6 text-sm [font-family:'SVN_Comic','Comic_Sans_MS',cursive]">
          <a
            className="underline underline-offset-4 hover:text-[#67baff]"
            href="/art"
          >
            Back to Art &amp; Design
          </a>
          <a
            className="underline underline-offset-4 hover:text-[#67baff]"
            href="/lab"
          >
            Back to the lab
          </a>
        </footer>
      </div>
    </main>
  );
}
