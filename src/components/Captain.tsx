import { Reveal } from "./Reveal";
import { brand, captain } from "../data/content";

export function Captain() {
  return (
    <section
      id="kapitaen"
      className="relative bg-coral text-cream py-24 md:py-36 overflow-hidden"
    >
      {/* Subtle wave-pattern backdrop */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: "url('/media/images/wave-overlay.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "multiply",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <Reveal className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-forest rounded-sm -rotate-1 opacity-90" />
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-2xl">
                <img
                  src={captain.image}
                  alt={captain.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-cream text-forest-deep px-5 py-3 rounded-sm shadow-xl">
                <p className="text-[10px] uppercase tracking-[0.3em] font-mono opacity-70">
                  Your Captain
                </p>
                <p className="font-display text-2xl font-bold uppercase">{captain.name}</p>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <Reveal>
              <p className="text-cream/85 text-[11px] uppercase tracking-[0.4em] mb-6 font-medium">
                {captain.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display font-bold text-cream text-5xl md:text-6xl lg:text-8xl leading-[0.9] uppercase tracking-[-0.02em]">
                Hey, ich bin
                <br />
                <span className="text-forest-deep">{captain.name}.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-12 border-l-4 border-cream/60 pl-6 max-w-2xl">
                <p className="text-cream/85 text-lg mb-4 font-medium">
                  {captain.intro}
                </p>
                <p className="font-display italic text-cream text-2xl md:text-3xl leading-snug">
                  „{captain.quote}"
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-12 flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${brand.phone.replace(/\s/g, "")}`}
                  className="group inline-flex items-center gap-3 rounded-full bg-cream text-coral-deep px-8 py-4 text-sm uppercase tracking-[0.22em] font-bold shadow-lg transition-all hover:bg-cream-deep"
                >
                  {captain.cta}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
                <a
                  href={`https://wa.me/${brand.phone.replace(/[^\d]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full border-2 border-cream/70 px-8 py-4 text-sm uppercase tracking-[0.22em] font-medium text-cream transition-all hover:bg-cream/20"
                >
                  WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
