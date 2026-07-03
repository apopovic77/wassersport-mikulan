import { useEffect, useRef } from "react";
import { Reveal } from "./Reveal";
import { brand } from "../data/content";

/**
 * Instagram ticker — CommonNinja embed.
 *
 * The script scans the DOM for .commonninja_component divs on load and mounts
 * the widget. Since we're a SPA, we inject the script imperatively when the
 * component first mounts and let CN re-scan when navigating back.
 */
const CN_WIDGET_ID = "cb4be9ad-666a-499c-b5b8-9e596f2ec5b6";
const CN_SCRIPT_SRC = "https://cdn.commoninja.com/sdk/latest/commonninja.js";

export function InstagramTicker() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If the SDK is already loaded (e.g. after client-side nav), ask it to rescan
    const w = window as any;
    if (w.commonninja?.load) {
      w.commonninja.load();
      return;
    }
    // Otherwise load the script once
    const existing = document.querySelector(`script[src="${CN_SCRIPT_SRC}"]`);
    if (existing) return;
    const s = document.createElement("script");
    s.src = CN_SCRIPT_SRC;
    s.defer = true;
    document.head.appendChild(s);
  }, []);

  return (
    <section id="instagram" className="relative bg-cream py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10 mb-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <Reveal>
              <p className="text-coral text-[11px] uppercase tracking-[0.4em] mb-4 font-medium">
                Instagram · {brand.instagramHandle}
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

      {/* CommonNinja live Instagram feed */}
      <Reveal delay={0.15}>
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div
            ref={ref}
            className={`commonninja_component pid-${CN_WIDGET_ID}`}
          />
        </div>
      </Reveal>
    </section>
  );
}
