import { motion } from "framer-motion";
import { hero, services } from "../data/content";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-forest-deep text-cream">
      {/* Background video — Velden Schloss aerial */}
      <div className="absolute inset-0">
        <video
          src="/media/videos/velden-schloss.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/50 via-forest-deep/30 to-forest-deep/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-coral/25 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-24 pt-32 md:px-10 md:pb-32">
        {/* Services scroll — top overlay */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="absolute top-24 md:top-28 left-6 right-6 md:left-10 md:right-10"
        >
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] md:text-[11px] uppercase tracking-[0.32em] text-cream/70 font-medium">
            {services.map((s) => (
              <span key={s} className="whitespace-nowrap">{s}</span>
            ))}
          </div>
        </motion.div>

        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="text-cream/85 text-[11px] uppercase tracking-[0.4em] mb-6 font-medium"
          >
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold text-cream text-[2.5rem] sm:text-6xl md:text-7xl lg:text-[7rem] leading-[0.9] tracking-[-0.02em] uppercase"
          >
            A little
            <br />
            party
            <br />
            <span className="text-coral">never killed</span>
            <br />
            nobody. <span className="text-[0.6em] align-middle">{hero.emoji}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.75 }}
            className="mt-10 max-w-xl text-cream/90 text-base md:text-lg leading-relaxed"
          >
            {hero.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#buchen"
              className="group inline-flex items-center gap-3 rounded-full bg-coral-grad px-8 py-4 text-sm uppercase tracking-[0.22em] font-bold text-cream shadow-xl transition-all hover:bg-coral-grad-deep hover:scale-[1.02]"
            >
              Jetzt buchen
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#boot"
              className="inline-flex items-center gap-3 rounded-full border-2 border-cream/60 bg-cream/10 backdrop-blur-sm px-8 py-4 text-sm uppercase tracking-[0.22em] font-medium text-cream transition-all hover:bg-cream/25 hover:border-cream"
            >
              Boot ansehen
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.4 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/70 text-[11px] uppercase tracking-[0.4em]"
        >
          ↓ scroll
        </motion.div>
      </div>

      {/* Location bug — top right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        className="absolute top-20 md:top-24 right-6 md:right-10 hidden sm:flex items-center gap-2 text-cream/80 text-[11px] uppercase tracking-[0.32em]"
      >
        <span>📍</span>
        <span>Wir sind hier</span>
      </motion.div>
    </section>
  );
}
