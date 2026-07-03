import { Reveal } from "./Reveal";
import { boat } from "../data/content";

export function Boat() {
  return (
    <section
      id="boot"
      className="relative bg-forest text-cream py-24 md:py-36 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="text-coral-light text-[11px] uppercase tracking-[0.4em] mb-6 font-medium">
                {boat.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display font-bold text-cream text-5xl md:text-6xl lg:text-8xl leading-[0.9] uppercase tracking-[-0.02em]">
                {boat.title}
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-3 text-cream/60 text-sm uppercase tracking-[0.28em] font-medium">
                {boat.subtitle}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-10 text-cream/85 text-lg md:text-xl leading-relaxed max-w-xl">
                {boat.body}
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <ul className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 max-w-lg">
                {boat.specs.map((spec) => (
                  <li key={spec.label}>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-coral-light font-mono mb-1">
                      {spec.label}
                    </p>
                    <p className="font-display text-2xl md:text-3xl font-medium">
                      {spec.value}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.35}>
              <a
                href="#buchen"
                className="group mt-12 inline-flex items-center gap-3 rounded-full bg-coral-grad px-8 py-4 text-sm uppercase tracking-[0.22em] font-bold text-cream shadow-lg transition-all hover:bg-coral-grad-deep"
              >
                {boat.cta}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-6">
            <div className="relative">
              <div className="absolute -inset-4 bg-coral-grad rounded-sm rotate-1 opacity-90" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-2xl">
                <img
                  src={boat.image}
                  alt={boat.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 hidden md:block bg-cream text-forest-deep px-5 py-3 rounded-sm shadow-xl">
                <p className="text-[10px] uppercase tracking-[0.3em] font-mono opacity-70">
                  Best on
                </p>
                <p className="font-display text-2xl font-bold uppercase">Wörthersee</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
