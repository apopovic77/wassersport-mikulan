import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { brand } from "../data/content";

const links = [
  { hash: "boot", label: "Boot" },
  { hash: "standort", label: "Standort" },
  { hash: "kapitaen", label: "Kapitän" },
  { hash: "buchen", label: "Buchen" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
    }
  }, [location]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-coral text-cream border-b border-coral-deep/40 shadow-lg"
          : "bg-transparent text-cream"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" className="flex items-center gap-3">
          <img src="/media/images/logo.png" alt="" className="h-9 w-9 object-contain" />
          <span className="font-display font-bold text-xl md:text-2xl tracking-[0.12em] uppercase">
            {brand.short}
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-[12px] uppercase tracking-[0.24em] font-medium">
          {links.map((l) => (
            <li key={l.hash}>
              <Link to={`/#${l.hash}`} className="transition-colors hover:text-cream-deep">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={`tel:${brand.phone.replace(/\s/g, "")}`}
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-cream/60 bg-cream/15 backdrop-blur-sm px-5 py-2 text-[12px] uppercase tracking-[0.24em] font-medium transition-all hover:bg-cream hover:text-coral-deep"
        >
          📞 {brand.phoneDisplay}
        </a>

        <button
          aria-label="Menü"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-cream"
        >
          <span className="block h-0.5 w-8 bg-current mb-1.5" />
          <span className="block h-0.5 w-8 bg-current mb-1.5" />
          <span className="block h-0.5 w-6 bg-current" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-cream/20 bg-coral text-cream">
          <ul className="flex flex-col gap-1 px-6 py-4 text-[14px] uppercase tracking-[0.22em] font-medium">
            {links.map((l) => (
              <li key={l.hash}>
                <Link to={`/#${l.hash}`} onClick={() => setOpen(false)} className="block py-3">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={`tel:${brand.phone.replace(/\s/g, "")}`}
                onClick={() => setOpen(false)}
                className="block py-3"
              >
                📞 {brand.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
