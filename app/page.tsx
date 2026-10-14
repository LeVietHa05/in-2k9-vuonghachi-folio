"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="relative flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {!clicked && (
        <Image
          src={"/1.png"}
          onClick={() => setClicked(true)}
          fill
          alt=""
        ></Image>
      )}
      {clicked && (
        <main className="aboutPage">
          <Image
            className="aboutDoodle aboutCurl"
            src="/images/doodles/about-01.svg"
            width={229}
            height={263}
            alt=""
            aria-hidden="true"
          />
          <Image
            className="aboutDoodle aboutSparkle"
            src="/images/doodles/about-04.svg"
            width={61}
            height={65}
            alt=""
            aria-hidden="true"
          />
          <Image
            className="aboutDoodle aboutStar"
            src="/images/doodles/about-05.svg"
            width={180}
            height={189}
            alt=""
            aria-hidden="true"
          />
          <Image
            className="aboutDoodle aboutHeart"
            src="/images/doodles/about-03.svg"
            width={106}
            height={104}
            alt=""
            aria-hidden="true"
          />

          <section className="aboutCopy" aria-labelledby="about-title">
            <div className="aboutHeading">
              <Image
                className="aboutDoodle aboutBlueCurl"
                src="/images/doodles/about-02.svg"
                width={97}
                height={111}
                alt=""
                aria-hidden="true"
              />
              <h1 id="about-title">
                <span>ABOUT</span> <span className="aboutMe">ME</span>
              </h1>
              <p className="aboutName">(VUONG HA CHI)</p>
            </div>

            <p className="aboutBio">
              Hi! I’m Chi, a 12th-grader from Hanoi, Vietnam. I am passionate
              about science, especially biochemistry, and hope to be an R&D
              researcher one day! My current research interest is sustainable
              and bioactive packaging, as I believe this field is very promising
              in both alleviating pollution and revolutionizing food
              preservation. Outside of academics, I love drawing (especially
              cute animals!), playing music, igniting a passion for science in
              younger students with interactive classes, and collecting stamps.
              With every activity, I want to spread my enthusiasm and whimsy and
              bring sparkling joy to the world.
            </p>

            <Link className="aboutLab" href="/lab">
              <span>TO THE</span>
              <strong>LAB</strong>
              <span className="aboutArrow" aria-hidden="true">
                <Image
                  src="/images/doodles/about-07.svg"
                  width={81}
                  height={4}
                  alt=""
                />
                <Image
                  src="/images/doodles/about-06.svg"
                  width={25}
                  height={45}
                  alt=""
                />
              </span>
            </Link>
          </section>

          <div
            className="aboutPortrait"
            aria-label="Chi dressed in a red costume"
          >
            <Image
              className="aboutPhoto"
              src="/images/intro/about-portrait.png"
              width={1988}
              height={2528}
              alt="Chi smiling in a red costume"
              priority
            />
            <Image
              className="aboutFrame"
              src="/images/intro/polaroid-frame.png"
              width={800}
              height={600}
              alt=""
              aria-hidden="true"
            />
          </div>
        </main>
      )}
    </div>
  );
}
