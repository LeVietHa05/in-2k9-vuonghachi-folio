import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ArtNavigation } from "../art/_components/art-navigation";
import { Footer } from "../art/_components/footer";
import { ResearchImage } from "./_components/research-image";

export const metadata: Metadata = {
  title: "Science Research | Vuong Ha Chi",
  description:
    "Research projects on starch-based biofilm and Senna timoriensis emulgel.",
};

const cannaImage = (name: string) =>
  `/images/science-research/canna-biofilm/${name}`;
const sennaImage = (name: string) =>
  `/images/science-research/senna-emulgel/${name}`;

function ProjectHeading({
  children,
  posterHref,
}: {
  children: string;
  posterHref: string;
}) {
  return (
    <header className="relative z-20 px-[4%] pb-4 pt-10">
      <h1 className="max-w-[1050px] text-[clamp(1.8rem,3.5vw,3.25rem)] leading-[1.08] font-normal text-[#67baff] underline decoration-[#23baff] decoration-[2px] underline-offset-[0.08em] [font-family:'Super_Crafty',Impact,sans-serif] uppercase">
        “{children}”
      </h1>
      <a
        className="mt-4 inline-flex rounded-full border border-[#63baff] bg-[#0b42a3] px-5 py-1.5 text-[clamp(1.3rem,2.1vw,2rem)] leading-none font-bold text-[#00d7ff] underline decoration-[#00d7ff] underline-offset-2 transition hover:bg-[#1463c4] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white [font-family:'Super_Crafty',Impact,sans-serif] uppercase"
        href={posterHref}
      >
        Poster
      </a>
    </header>
  );
}

function ResearchPaper({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`research-paper absolute text-[#25217b] [font-family:'SVN_Comic','Comic_Sans_MS',cursive] ${className}`}
    >
      {children}
    </div>
  );
}

export default function ScienceResearchPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#25217b] pb-16 text-white">
      <ArtNavigation currentHref="/science-research" />

      <div className="mx-auto w-[min(100%-2rem,1140px)] max-[640px]:w-[min(100%-1rem,35rem)]">
        <section id="canna-biofilm" className="relative">
          <ProjectHeading posterHref="https://docs.google.com/presentation/d/1vX4avq7D0VT84aPO8ijzwE-_THFZeKum/edit?slide=id.p3#slide=id.p3">
            Evaluating the antimicrobial activity of a starch-based biofilm from
            Canna edulis
          </ProjectHeading>

          <div className="relative h-[760px]">
            <ResearchPaper className="right-[5%] top-[9%] h-[73%] w-[63%] rotate-[5deg] pl-[8%] pr-[2%] pt-[2%] pb-[5%]">
              <ul className="relative z-[1] ml-[8%] list-disc space-y-2 text-[24px] leading-8  text-justify">
                <li>
                  What started as a YouTube experiment quickly became a real
                  research project. I first tried making bioplastic from cassava
                  starch at home, and after 5–6 failed trials, finally produced
                  my first working prototype. Bringing the idea into the lab, I
                  shifted to canna starch—a more abundant and affordable
                  alternative—and began investigating its potential for
                  biodegradable food packaging.
                </li>
                <li>
                  Under the mentorship of a professor at VNU University of
                  Science, I led two team members in developing starch-based
                  biofilms from canna starch, glycerol, and acetic acid. We
                  evaluated their thickness, moisture content, water-vapor
                  resistance, solubility, and antimicrobial activity as part of
                  the project “Evaluating the Antimicrobial Activity of a
                  Starch-Based Biofilm from Canna edulis.” We presented our work
                  at the Innoverse Invention & Innovation Expo Georgia and
                  received a Gold Medal.
                </li>
              </ul>
            </ResearchPaper>

            <ResearchImage
              alt="Canna roots prepared for biofilm research"
              className="left-[15%] top-[4%] w-[24%] rotate-[4deg]"
              imageContainerClassName="aspect-[0.89]"
              src={cannaImage("photo-01.png")}
            />
            <ResearchImage
              alt="Biofilm sample on a petri dish"
              className="left-[15%] top-[59%] w-[25%] rotate-[1deg]"
              imageContainerClassName="aspect-[0.89]"
              src={cannaImage("photo-03.png")}
            />
            <ResearchImage
              alt="Preparing canna roots in a laboratory"
              className="left-[5%] top-[25%] w-[25%] -rotate-[1deg]"
              imageContainerClassName="aspect-[0.89]"
              src={cannaImage("photo-02.png")}
            />
          </div>

          <section
            id="canna-process"
            aria-label="Canna biofilm preparation and material testing"
            className="relative h-[1320px]"
          >
            <ResearchPaper className="left-[5%] top-[5%] h-[87%] w-[88%] -rotate-[3deg]">
              <p className="absolute left-[8%] top-[35%] w-[48%] text-[40px] leading-relaxed">
                Evaluating <br />
                the film’s physical properties
              </p>
              {/* <p className="absolute bottom-[11%] left-[10%] w-[35%] text-[clamp(0.8rem,1.2vw,1.05rem)] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p> */}
            </ResearchPaper>

            <ResearchImage
              alt="Canna biofilm prepared in a laboratory"
              caption="The lab-made, much more plastic-like prototype"
              className="left-[7%] top-[3%] w-[28%] -rotate-[4deg]"
              imageContainerClassName="aspect-[1.28]"
              src={cannaImage("photo-04.png")}
            />
            <ResearchImage
              alt="Testing the biofilm prototype"
              className="left-[35%] top-[5%] w-[26%] rotate-[1deg]"
              imageContainerClassName="aspect-[1.28]"
              src={cannaImage("photo-05.png")}
            />
            <ResearchImage
              alt="Handling a prepared biofilm sheet"
              className="left-[62%] top-[4%] w-[27%] rotate-[3deg]"
              imageContainerClassName="aspect-[1.28]"
              src={cannaImage("photo-06.png")}
            />

            <ResearchImage
              alt="Measuring a sample with laboratory equipment"
              className="right-[7%] top-[43%] w-[30%]  "
              imageContainerClassName="aspect-[0.74]"
              src={cannaImage("photo-08.png")}
            />
            <ResearchImage
              alt="Biofilm sample in a laboratory test"
              className="left-[51%] top-[29%] w-[19%]  "
              imageContainerClassName="aspect-[0.74]"
              src={cannaImage("photo-07.png")}
            />
            <ResearchImage
              alt="Weighing a biofilm sample"
              className="left-[47%] top-[60%] w-[20%] "
              imageContainerClassName="aspect-[0.74]"
              src={cannaImage("photo-09.png")}
            />
            <ResearchImage
              alt="Measuring biofilm thickness"
              className="right-[3%] top-[70%] w-[18%] "
              imageContainerClassName="aspect-[0.74]"
              src={cannaImage("photo-10.png")}
            />
          </section>

          <section
            aria-label="Canna biofilm antimicrobial evaluation"
            className="relative h-[1060px]"
          >
            <ResearchPaper className="left-[5%] top-[4%] h-[87%] w-[87%] rotate-[3deg]">
              <p className="absolute right-[7%] top-[5%] w-[39%] text-[30px] leading-relaxed list-disc list-item">
                Evaluating toxicity on macrophages
              </p>
              <p className="absolute left-[12%] top-[41%] w-[34%] text-[30px] leading-relaxed list-disc list-item">
                Cultivating E.coli for the film’s antioxidant properties
                evaluation
              </p>
              <p className="absolute bottom-[5%] right-[25%] w-[40%] text-[30px] leading-relaxed list-disc list-item">
                Results of the antioxidant properties evaluation
              </p>
            </ResearchPaper>

            <ResearchImage
              alt="Laboratory work with a biofilm sample"
              className="left-[7%] top-[0%] w-[20%]  "
              imageContainerClassName="aspect-[0.74]"
              src={cannaImage("photo-11.png")}
            />
            <ResearchImage
              alt="Preparing a sample in the laboratory"
              className="left-[28%] top-[0%] w-[20%]  "
              imageContainerClassName="aspect-[0.74]"
              src={cannaImage("photo-12.png")}
            />
            <ResearchImage
              alt="Laboratory test of the biofilm sample"
              className="right-[6%] top-[29%] w-[32%]  "
              imageContainerClassName="aspect-[1.25]"
              src={cannaImage("photo-13.png")}
            />
            <ResearchImage
              alt="Biofilm sample being handled in the laboratory"
              className="left-[45%] top-[48%] w-[29%]  "
              imageContainerClassName="aspect-[1.4]"
              src={cannaImage("photo-14.png")}
            />
            <ResearchImage
              alt="Petri dish from antimicrobial testing"
              className="left-[2%] top-[68%] w-[18%] -rotate-[9deg]"
              imageContainerClassName="aspect-square"
              rounded
              src={cannaImage("photo-15.png")}
            />
            <ResearchImage
              alt="Close view of a petri dish result"
              className="left-[12%] top-[75%] w-[15%] rotate-[7deg]"
              imageContainerClassName="aspect-square"
              rounded
              src={cannaImage("photo-16.png")}
            />
          </section>
        </section>

        <section id="senna-emulgel" className="relative">
          <ProjectHeading posterHref="https://docs.google.com/presentation/d/1vX4avq7D0VT84aPO8ijzwE-_THFZeKum/edit?slide=id.p3#slide=id.p3">
            Development and Evaluation of an Antioxidant Emulgel Containing
            Senna timoriensis Bark Extract
          </ProjectHeading>

          <section
            id="senna-process"
            aria-label="Senna emulgel research process"
            className="relative h-[1040px]"
          >
            <ResearchPaper className="left-[6%] top-[4%] h-[89%] w-[86%] -rotate-[4deg]">
              <ul className="absolute left-[13%] top-[3%] w-[80%] list-disc space-y-5 text-[24px] text-justify">
                <li>
                  As part of a four-member summer research team at Hanoi
                  University of Pharmacy, I investigated Senna timoriensis, a
                  medicinal plant with promising antioxidant properties but
                  limited research on its potential for topical applications.
                  Under the mentorship of university professors and graduate
                  students, we first compared extracts from different plant
                  parts to identify the most promising source. We found that the
                  bark extract showed the strongest potential and used it to
                  develop a hydrating antioxidant emulgel.
                </li>
                <li>
                  I then helped evaluate the product’s physicochemical
                  properties and skin permeability and served as one of two
                  principal presenters at the International Conference on
                  Pharmacy and Pharmaceutical Sciences in Ho Chi Minh City,
                  where our project received the Best Poster Award.
                </li>
              </ul>
            </ResearchPaper>

            <ResearchImage
              alt="Laboratory procedure for Senna extract"
              caption="Carry out Thin-layer chromatography on four different samples"
              className="left-[8%] top-[49%] w-[27%] -rotate-[3deg]"
              imageContainerClassName="aspect-[0.98]"
              src={sennaImage("tlc-procedure.png")}
            />
            <ResearchImage
              alt="Thin-layer chromatography results"
              caption="Chromatography results"
              className="left-[37%] top-[47%] w-[24%] rotate-[2deg]"
              imageContainerClassName="aspect-[0.77]"
              src={sennaImage("tlc-result.png")}
            />
            <ResearchImage
              alt="DPPH and ABTS assay results"
              caption="DPPH and ABTS asay results for one of four samples"
              className="left-[64%] top-[50%] w-[25%] rotate-[5deg]"
              imageContainerClassName="aspect-[0.79]"
              src={sennaImage("dpph-abts-assay.png")}
            />
          </section>

          <section
            aria-label="Senna emulgel evaluation and presentation"
            className="relative h-[1260px]"
          >
            <ResearchPaper className="left-[8%] top-[4%] h-[84%] w-[83%] rotate-[3deg]">
              
              <p className="absolute bottom-[5%] left-[11%] w-[37%] text-[20px] leading-[1.6]">
                Presented the project and won Best Poster Award for the Formulation division at the International Conference on Pharmacy and Pharmaceutical Sciences held in Ho Chi Minh City.
              </p>
            </ResearchPaper>

            <ResearchImage
              alt="Adding plant extract during the research"
              caption="Adding the extract in different concentrations to the E.coli population"
              className="left-[12%] top-[6%] w-[29%] -rotate-[2deg]"
              imageContainerClassName="aspect-[1.2]"
              src={sennaImage("ecoli-extract.png")}
            />
            <ResearchImage
              alt="Using a spectrophotometer for sample evaluation"
              caption="Using spectrophotometry to determine the sample's antioxidant impact on E.coli populations affected by H2O2 "
              className="left-[47%] top-[10%] w-[29%] rotate-[3deg]"
              imageContainerClassName="aspect-[1.2]"
              src={sennaImage("spectrophotometry.png")}
            />
            <ResearchImage
              alt="Quantifying polyphenols in the sample"
              caption="Quantifying the amount of polyphenols in the chosen sample"
              className="left-[8%] top-[35%] w-[30%] -rotate-[3deg]"
              imageContainerClassName="aspect-[0.98]"
              src={sennaImage("polyphenol-quantification.png")}
            />
            <ResearchImage
              alt="Presenting the research poster at a conference"
              className="right-[7%] top-[50%] w-[28%] rotate-[5deg]"
              imageContainerClassName="aspect-[1.4]"
              src={sennaImage("poster-presentation.png")}
            />
            <ResearchImage
              alt="Research team receiving a poster award"
              className="right-[10%] top-[69%] w-[43%] -rotate-[1deg]"
              imageContainerClassName="aspect-[1.95]"
              src={sennaImage("best-poster-award.png")}
            />
          </section>
        </section>

        <Footer />
      </div>
    </main>
  );
}
