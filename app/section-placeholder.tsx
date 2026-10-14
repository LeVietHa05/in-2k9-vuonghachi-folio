import Link from "next/link";

export function SectionPlaceholder({ title }: { title: string }) {
  return (
    <main className="sectionPage">
      <section className="sectionCard" aria-labelledby="section-title">
        <p className="sectionEyebrow">A LITTLE EXPERIMENT IS BREWING</p>
        <h1 id="section-title">{title}</h1>
        <p>This corner of Chi’s lab is still taking shape. Come back soon!</p>
        <Link className="sectionBackLink" href="/lab">
          Back to the lab
        </Link>
      </section>
    </main>
  );
}
