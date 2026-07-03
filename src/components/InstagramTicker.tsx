import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { brand } from "../data/content";

/**
 * Instagram ticker — horizontal auto-scrolling marquee showing recent posts.
 *
 * Currently uses static tiles (the Wassersport media we already have). Two ways
 * to make it AUTO-UPDATE:
 *
 * A) Swap in an embed widget (Framer original used CommonNinja):
 *    Sign up at commoninja.com / elfsight.com / lightwidget.com,
 *    connect the @wassersportmikulan account, get an iframe snippet,
 *    and replace <StaticTiles /> below with the iframe.
 *
 * B) Use Instagram Graph API + a serverless endpoint (heavier setup).
 *
 * For now: static tiles + link to full Instagram profile.
 */

// Manually curated post tiles — update these when you post new content.
const posts = [
  { src: "/media/images/kevin-captain.jpg", caption: "Dein Kapitän Kevin" },
  { src: "/media/images/nkt20-motorboot.jpg", caption: "NKT 20 in Action" },
  { src: "/media/images/wave-overlay.png", caption: "Waves like these 🌊" },
  { src: "/media/images/kevin-captain.jpg", caption: "Cruise am See" },
  { src: "/media/images/nkt20-motorboot.jpg", caption: "Sunset Runde" },
  { src: "/media/images/wave-overlay.png", caption: "Wakeboard Session" },
];

// Duplicate the list so the marquee loops seamlessly
const ticker = [...posts, ...posts];

export function InstagramTicker() {
  return (
    <section id="instagram" className="relative bg-cream py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10 mb-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <Reveal>
              <p className="text-coral text-[11px] uppercase tracking-[0.4em] mb-4 font-medium">
                Instagram · @wassersportmikulan
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display font-bold text-ink text-4xl md:text-5xl lg:text-6xl leading-[0.95] uppercase tracking-[-0.02em]">
                Sag Hi auf
                <br />
                <span className="text-coral">Insta.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <a
              href={brand.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-ink text-cream px-6 py-3 text-[12px] uppercase tracking-[0.24em] font-bold hover:bg-coral transition-colors"
            >
              Profil öffnen
              <span>↗</span>
            </a>
          </Reveal>
        </div>
      </div>

      {/* Marquee — CSS-driven infinite horizontal scroll */}
      <div className="relative">
        {/* Left/right fade masks */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 z-10 pointer-events-none bg-gradient-to-r from-cream to-transparent" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 z-10 pointer-events-none bg-gradient-to-l from-cream to-transparent" />

        <motion.div
          className="flex gap-4 md:gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {ticker.map((post, i) => (
            <a
              key={i}
              href={brand.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block h-52 w-52 md:h-64 md:w-64 shrink-0 overflow-hidden rounded-sm shadow-lg"
            >
              <img
                src={post.src}
                alt={post.caption}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay on hover with caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 bg-coral text-cream px-2 py-0.5 text-[9px] uppercase tracking-[0.24em] font-bold mb-2">
                    📸 Insta
                  </span>
                  <p className="text-cream text-sm font-medium leading-tight">
                    {post.caption}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </motion.div>
      </div>

      <Reveal delay={0.2}>
        <p className="mt-10 text-center text-xs italic text-ink-soft/70 max-w-md mx-auto px-6">
          Für den Live-Feed — folge uns auf Instagram.
        </p>
      </Reveal>
    </section>
  );
}
