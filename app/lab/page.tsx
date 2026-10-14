import Image from "next/image";
import Link from "next/link";

const flasks = [
  {
    name: "Art",
    href: "/art",
    image: "/images/lab/flask-art.png",
    smoke: "/images/lab/smoke.png",
  },
  {
    name: "Science Research",
    href: "/science-research",
    image: "/images/lab/flask-science-research.png",
    smoke: "/images/lab/flask-science-research-smoking.png",
  },
  {
    name: "Music",
    href: "/music",
    image: "/images/lab/flask-music.png",
    smoke: "/images/lab/smoke.png",
  },
  {
    name: "Foreign Exchange",
    href: "/foreign-exchange",
    image: "/images/lab/flask-foreign-exchange.png",
    smoke: "/images/lab/beaker-smoke.png",
  },
  {
    name: "Teaching",
    href: "/teaching",
    image: "/images/lab/flask-teaching.png",
    smoke: "/images/lab/smoke.png",
  },
];

export default function Lab() {
  return (
    <main className="labPage" aria-labelledby="lab-title">
      <h1 id="lab-title" className="labTitle">
        Welcome to Chi’s lab!
      </h1>

      <nav className="labFlasks" aria-label="Explore Chi’s interests">
        {flasks.map((flask) => (
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
                sizes="(max-width: 640px) 27vw, 20vw"
              />
              <Image
                className="labSmokeImage"
                src={flask.smoke}
                alt=""
                fill
                sizes="(max-width: 640px) 27vw, 20vw"
                aria-hidden="true"
              />
            </span>
            <span className="sr-only">{flask.name}</span>
          </Link>
        ))}
      </nav>
    </main>
  );
}