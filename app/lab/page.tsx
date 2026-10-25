import Image from "next/image";
import Link from "next/link";

const flasks = [
  {
    name: "Art",
    href: "/art",
    image: "/images/lab/flask-art.png",
    smoke: "/images/lab/smoke.png",
    transform: "translateY(-90%) ",
  },
  {
    name: "Science Research",
    href: "/science-research",
    image: "/images/lab/flask-science-research.png",
    smoke: "/images/lab/smoke.png",
    transform: "translateY(-60%) ",
  },
  {
    name: "Music",
    href: "/music",
    image: "/images/lab/flask-music.png",
    smoke: "/images/lab/smoke.png",
    transform: "translateY(-90%) ",
  },
  {
    name: "Foreign Exchange",
    href: "/foreign-exchange",
    image: "/images/lab/flask-foreign-exchange.png",
    smoke: "/images/lab/smoke.png",
    transform: "translateY(-60%) ",
  },
  {
    name: "Teaching",
    href: "/teaching",
    image: "/images/lab/flask-teaching.png",
    smoke: "/images/lab/smoke.png",
    transform: "translateY(-90%) ",
  },
];

export default function Lab() {
  return (
    <main className="labPage aspect-1440/738" aria-labelledby="lab-title">
      <h1 id="lab-title" className="labTitle">
        Welcome to Chi’s lab!
      </h1>

      <nav className="labFlasks" aria-label="Explore Chi’s interests">
        {flasks.map((flask) => (
          <div className="labFlask" key={flask.name}>
            <Link
              className="labFlask"
              href={flask.href}
              key={flask.name}
              aria-label={`Explore ${flask.name}`}
            >
              <span className="labFlaskVisual">
                <Image
                  className="labFlaskImage"
                  src={flask.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 27vw, 40vw"
                />
                <Image
                  className="labSmokeImage"
                  src={"/images/lab/smoke 1.png"}
                  alt=""
                  width={500}
                  height={500}
                  aria-hidden="true"
                  style={{
                    maxWidth: "100%",
                    transform: flask.transform,
                  }}
                />
              </span>
              <span className="sr-only">{flask.name}</span>
            </Link>
          </div>
        ))}
      </nav>
    </main>
  );
}
