import { Reveal } from "./Reveal";
import { brand, services } from "../data/content";

export function Booking() {
  return (
    <section
      id="buchen"
      className="relative bg-forest-deep text-cream py-24 md:py-36 overflow-hidden"
    >
      {/* Wave video background */}
      <div className="absolute inset-0 opacity-30">
        <video
          src="/media/videos/wave-1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-forest-deep/60" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <p className="text-coral-light text-[11px] uppercase tracking-[0.4em] mb-6 font-medium">
              Jetzt buchen
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display font-bold text-cream text-5xl md:text-7xl lg:text-8xl leading-[0.9] uppercase tracking-[-0.02em]">
              Bereit für's
              <br />
              <span className="text-coral">Abenteuer?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-cream/85 text-lg leading-relaxed">
              Ruf an, schreib eine WhatsApp, oder komm direkt am Seecorso vorbei.
              Wir freuen uns auf dich.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          <Reveal delay={0.15}>
            <a
              href={`tel:${brand.phone.replace(/\s/g, "")}`}
              className="group block rounded-sm bg-coral text-cream p-8 shadow-xl transition-all hover:bg-coral-deep hover:scale-[1.02]"
            >
              <p className="text-[10px] uppercase tracking-[0.32em] opacity-80 font-medium mb-3">
                Anrufen
              </p>
              <p className="font-display text-2xl md:text-3xl font-bold leading-tight">
                {brand.phoneDisplay}
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.24em] group-hover:translate-x-1 transition-transform">
                📞 Sofort verbinden →
              </p>
            </a>
          </Reveal>

          <Reveal delay={0.2}>
            <a
              href={`https://wa.me/${brand.phone.replace(/[^\d]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-sm bg-cream text-forest-deep p-8 shadow-xl transition-all hover:bg-cream-deep hover:scale-[1.02]"
            >
              <p className="text-[10px] uppercase tracking-[0.32em] opacity-70 font-medium mb-3">
                WhatsApp
              </p>
              <p className="font-display text-2xl md:text-3xl font-bold leading-tight">
                Kurz schreiben
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.24em] text-coral-deep group-hover:translate-x-1 transition-transform">
                💬 Nachricht senden →
              </p>
            </a>
          </Reveal>

          <Reveal delay={0.25}>
            <a
              href={brand.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-sm bg-forest border border-cream/20 text-cream p-8 shadow-xl transition-all hover:bg-forest-light hover:scale-[1.02]"
            >
              <p className="text-[10px] uppercase tracking-[0.32em] opacity-70 font-medium mb-3">
                Instagram
              </p>
              <p className="font-display text-2xl md:text-3xl font-bold leading-tight">
                Follow us
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.24em] text-coral-light group-hover:translate-x-1 transition-transform">
                📸 {brand.instagramHandle} →
              </p>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.35}>
          <div className="mt-16 text-center">
            <p className="text-cream/60 text-[11px] uppercase tracking-[0.32em] mb-3">
              Unsere Services
            </p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-cream/85 text-sm md:text-base">
              {services.map((s, i) => (
                <span key={s} className="whitespace-nowrap">
                  {s}
                  {i < services.length - 1 && (
                    <span className="ml-4 text-coral-light">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
