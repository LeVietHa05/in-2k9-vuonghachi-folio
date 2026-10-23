import Link from "next/link";
import { ScrollToTop } from "../../_components/scroll-to-top";

export function Footer() {
  return (
    <footer className="relative z-20 flex justify-between px-2 pt-6 text-2xl [font-family:'SVN_Comic','Comic_Sans_MS',cursive]">
      <ScrollToTop label="Back to top" />

      <Link
        className="underline underline-offset-4 hover:text-[#67baff]"
        href="/lab"
      >
       ← Back to the lab
      </Link>
    </footer>
  );
}
