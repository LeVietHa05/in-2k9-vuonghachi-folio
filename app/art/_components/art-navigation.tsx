import Link from "next/link";

const navigationItems = [
  { label: "About me", href: "/" },
  { label: "The Lab", href: "/lab" },
  { label: "Art & Design", href: "/art" },
  { label: "Music", href: "/music" },
  { label: "Science Research", href: "/science-research" },
  { label: "Foreign Exchange", href: "/foreign-exchange" },
  { label: "Teaching", href: "/teaching" },
];

export function ArtNavigation({ currentHref = "/art" }: { currentHref?: string }) {
  return (
    <nav className="artNavigation text-[24px]" aria-label="Main navigation">
      <div className="artNavigationInner">
        {navigationItems.map((item) => (
          <Link
            aria-current={item.href === currentHref ? "page" : undefined}
            className={
              item.href === currentHref
                ? "artNavigationLink isCurrent"
                : "artNavigationLink"
            }
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
