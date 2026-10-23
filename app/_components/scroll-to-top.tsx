"use client";

export function ScrollToTop({
  className = "",
  label = "Back to top",
}: {
  className?: string;
  label?: string;
}) {
  const handleClick = () => {
    if (typeof window === "undefined") {
      return;
    }

    const target = document.getElementById("top") ?? document.body;

    if (target && "scrollIntoView" in target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`cursor-pointer bg-transparent p-0 text-left underline underline-offset-4 hover:text-[#67baff] ${className}`}
    >
      ↑ {label}
    </button>
  );
}
