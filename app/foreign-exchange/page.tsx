import type { Metadata } from "next";
import { ArtNavigation } from "../art/_components/art-navigation";
import { ResearchImage } from "../science-research/_components/research-image";

export const metadata: Metadata = {
  title: "Foreign Exchange | Vuong Ha Chi",
  description:
    "International exchange, presentation, and culture fair experiences by Vuong Ha Chi.",
};

const apylsImage = (name: string) =>
  `/images/foreign-exchange/apyls-2026/${name}`;
const wsifImage = (name: string) =>
  `/images/foreign-exchange/wsif-2025/${name}`;

const ruledPaper =
  "absolute bg-[#faf9f3] bg-[linear-gradient(90deg,transparent_0_10%,rgb(237_93_133_/_36%)_10.1%_10.35%,transparent_10.5%),repeating-linear-gradient(to_bottom,transparent_0,transparent_1.7rem,rgb(65_139_205_/_24%)_1.76rem,transparent_1.82rem)] shadow-[0_5px_16px_rgba(10,8,64,0.24)]";

function PaperSheet({ className }: { className: string }) {
  return <div aria-hidden="true" className={`${ruledPaper} ${className}`} />;
}

export default function ForeignExchangePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#25217b] pb-14 text-white text-justify">
      <ArtNavigation currentHref="/foreign-exchange" />

      <div className="mx-auto w-[min(100%-2rem,1140px)]">
        <section
          aria-labelledby="apyls-title"
          className="relative h-[clamp(1180px,145vw,1580px)]"
        >
          <h1
            className="absolute left-[8%] top-[5%] z-20 max-w-[65%] text-[clamp(2rem,4.1vw,3.7rem)] leading-[1.18] font-normal text-[#b9edff]   [font-family:'Super_Crafty',Impact,sans-serif] uppercase"
            id="apyls-title"
          >
            Asia-Pacific Young Leaders Summit (2026)
          </h1>

          <PaperSheet className="left-[6%] top-[16%] h-[55%] w-[62%] rotate-[2deg]" />
          <p className="absolute left-[14%] top-[18%] z-10 w-[48%] text-[26px]  text-[#25217b] [font-family:'SVN_Comic','Comic_Sans_MS',cursive] rotate-[2deg]">
            Selected as one of four representatives from 3,000 students at
            Newton Grammar School to join 75 delegates from 13 countries under
            the theme “Intelligence by Design, Humanity by Intent.” The program
            brought together students to explore how emerging technologies can
            be developed with human values and social impact in mind.
          </p>

          <h2 className="absolute left-[14%] top-[37%] z-10 text-[52px] leading-tight font-normal text-[#3931c4] [font-family:'SVN_Comic','Comic_Sans_MS',cursive] rotate-[2deg]">
            Presentation
          </h2>
          <p className="absolute left-[14%] top-[42%] z-10 w-[43%] text-[26px] text-[#25217b] [font-family:'SVN_Comic','Comic_Sans_MS',cursive] rotate-[2deg]">
            Working with an international team, I co-developed an AI skills
            resource platform supporting SDG 8, bringing together crowdsourced
            learning resources, AI-linked job listings, and translation tools to
            help young people navigate future opportunities. I also served as
            the principal presenter, sharing our project and discussing the
            ethical use of AI in advancing the Sustainable Development Goals.
          </p>

          <ResearchImage
            alt="Presenting an AI project with the international team at APYLS"
            className="right-[4%] top-[36%] w-[33%] rotate-[9deg]"
            imageContainerClassName="aspect-[1.45]"
            src={apylsImage("presentation-01.png")}
          />
          <ResearchImage
            alt="Delegates collaborating on an APYLS group project"
            className="right-[11%] top-[49%] w-[31%] -rotate-[7deg]"
            imageContainerClassName="aspect-[1.45]"
            src={apylsImage("presentation-02.png")}
          />

          <PaperSheet className="left-[29%] top-[63%] h-[32%] w-[65%] rotate-[1deg]" />
          <ResearchImage
            alt="Performing đàn nhị at the APYLS culture fair"
            className="left-[12%] top-[64%] z-20 w-[30%]  rotate-[8deg]"
            imageContainerClassName="aspect-[0.72]"
            src={apylsImage("culture-fair-01.png")}
          />
          <h2 className="absolute left-[50%] top-[66%] z-10 text-[52px] leading-tight font-normal text-[#3931c4] [font-family:'SVN_Comic','Comic_Sans_MS',cursive]">
            Culture fair
          </h2>
          <p className="absolute left-[45%] top-[71%] z-10 w-[42%] text-[26px]  text-[#25217b] [font-family:'SVN_Comic','Comic_Sans_MS',cursive]">
            Beyond the academic exchange, I performed đàn nhị and helped
            organize a cultural showcase, sharing Vietnamese music and culture
            with delegates from around the world.
          </p>
          <ResearchImage
            alt="Delegates sharing Vietnamese culture at the APYLS culture fair"
            className="left-[34%] top-[82%] z-20 w-[46%] rotate-[0.5deg]"
            imageContainerClassName="aspect-[1.7]"
            src={apylsImage("culture-fair-02.png")}
          />
        </section>

        <section
          aria-labelledby="wsif-title"
          className="relative mt-10 h-[clamp(1500px,170vw,1840px)]  "
        >
          <h2
            className="absolute left-[5%] top-[2%] z-20 max-w-[86%] text-[clamp(2rem,4.2vw,3.8rem)] leading-[1.2] font-normal text-[#b9edff] [font-family:'Super_Crafty',Impact,sans-serif] uppercase"
            id="wsif-title"
          >
            World School International Forum (2025)
          </h2>
          <p className="absolute left-[5%] top-[10%] z-20 max-w-[88%] text-[40px] leading-tight text-[#00d7ff] [font-family:'SVN_Comic','Comic_Sans_MS',cursive]">
            Sayings, proverbs, and folklore:
            <br />
            Life lessons from the wisdom of the world
          </p>
          <a
            className="absolute left-[5%] top-[17%] z-20 rounded-full border border-[#63baff] bg-[#0b42a3] px-5 py-2 text-[clamp(0.95rem,1.5vw,1.3rem)] leading-none font-bold text-[#00d7ff] underline decoration-[#00d7ff] underline-offset-2 transition hover:bg-[#1463c4] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white [font-family:'Super_Crafty',Impact,sans-serif] uppercase"
            href="#wsif-presentation"
          >
            Presentation
          </a>

          <PaperSheet className="left-[5%] top-[21%] h-[29%] w-[79%] rotate-[-0.5deg]" />
          <p className="absolute left-[14%] top-[24%] z-10 w-[54%] text-[24px] leading-[1.9] text-[#25217b] [font-family:'SVN_Comic','Comic_Sans_MS',cursive]">
            I was selected as one of three from 3,000 students at Newton Grammar
            School to join 51 delegates from 17 countries as the Vietnamese
            delegates
          </p>
          <h3
            className="absolute left-[13%] top-[32%] z-10 text-[52px] leading-tight font-normal text-[#3931c4] [font-family:'SVN_Comic','Comic_Sans_MS',cursive]"
            id="wsif-presentation"
          >
            Presentation
          </h3>
          <p className="absolute left-[13%] top-[35%] z-10 w-[48%] text-[24px]  text-[#25217b] [font-family:'SVN_Comic','Comic_Sans_MS',cursive]">
            During the program, I co-led a group of five students from different
            countries to discuss the ethical and efficient use of AI, and
            presented it to others.
          </p>

          <ResearchImage
            alt="Presenting the group project at World School International Forum"
            className="right-[2%] top-[27%] w-[35%] rotate-[-4deg]"
            imageContainerClassName="aspect-[1.14]"
            src={wsifImage("presentation-01.png")}
          />
          <ResearchImage
            alt="Presenting the media coverage project at WSIF"
            className="right-[27%] top-[39%] w-[25%] rotate-[-8deg]"
            imageContainerClassName="aspect-[1.14]"
            src={wsifImage("presentation-02.png")}
          />

          <ResearchImage
            alt="Discussing ideas with international delegates at WSIF"
            className="left-[3%] top-[47%] z-20 w-[40%] -rotate-[4deg]"
            imageContainerClassName="aspect-[1.45]"
            src={wsifImage("discussion.png")}
          />
          <PaperSheet className="left-[20%] top-[52%] h-[39%] w-[76%] rotate-[4deg]" />
          <h3 className="absolute right-[8%] top-[53%] z-10 text-[52px] leading-tight font-normal text-[#3931c4] [font-family:'SVN_Comic','Comic_Sans_MS',cursive] rotate-[4deg]">
            Discussion
          </h3>
          <p className="absolute right-[8%] top-[57%] z-10 w-[46%] text-right text-[24px]  text-[#25217b] [font-family:'SVN_Comic','Comic_Sans_MS',cursive] rotate-[4deg]">
            During the program, I co-led a group of five students from different
            countries to discuss the ethical and efficient use of AI, and
            presented it to others.
          </p>
          <ResearchImage
            alt="Meeting fellow delegates at World School International Forum"
            className="left-[5%] top-[63%] z-20 w-[30%] rotate-[-3deg]"
            imageContainerClassName="aspect-[0.72]"
            src={wsifImage("culture-fair-01.png")}
          />

          <h3 className="absolute right-[10%] top-[68%] z-10 text-[52px] leading-tight font-normal text-[#3931c4] [font-family:'SVN_Comic','Comic_Sans_MS',cursive] rotate-[4deg]">
            Culture fair
          </h3>
          <p className="absolute right-[10%] top-[72%] z-10 w-[50%] text-right text-[24px]  text-[#25217b] [font-family:'SVN_Comic','Comic_Sans_MS',cursive] rotate-[4deg]">
            I planned and directed the team’s performance at the culture fair
            and performed traditional folk songs on the đàn nhị. In addition, my
            teammates and I organized a display booth featuring lesser-known
            Vietnamese traditional sweets. Visitors could have a taste and bring
            home a hand-drawn sticker as a souvenir!
          </p>
          <ResearchImage
            alt="Performing Vietnamese music at the WSIF culture fair"
            className="left-[30%] top-[82%] z-30 w-[45%] rotate-[0.5deg]"
            imageContainerClassName="aspect-[1.7]"
            src={wsifImage("culture-fair-02.png")}
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
