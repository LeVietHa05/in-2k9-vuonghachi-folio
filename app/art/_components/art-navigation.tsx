import Link from "next/link";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Art & Design", href: "/art" },
  { label: "Music", href: "/music" },
  { label: "Science Research", href: "/science-research" },
  { label: "Teaching", href: "/teaching" },
  { label: "Foreign Exchange", href: "/foreign-exchange" },
];

export function ArtNavigation({ currentHref = "/art" }: { currentHref?: string }) {
  return (
    <nav className="artNavigation" aria-label="Main navigation">
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
