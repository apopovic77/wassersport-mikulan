import { Link } from "react-router-dom";
import { brand } from "../data/content";

export function Footer() {
  return (
    <footer className="bg-ink text-cream/75 relative overflow-hidden">
      {/* Subtle wave animation at top */}
      <div className="absolute inset-x-0 top-0 h-40 pointer-events-none opacity-30">
        <video
          src="/media/videos/wave-2.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ink" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-16 pt-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/media/images/logo.png" alt="" className="h-10 w-10 object-contain" />
              <span className="font-display font-bold text-cream text-xl uppercase tracking-[0.12em]">
                {brand.short}
              </span>
            </div>
            <p className="text-sm text-cream/60 leading-relaxed max-w-xs">
              {brand.tagline}. Am Wörthersee.
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-coral-light font-medium mb-3">
              Standort
            </p>
            <address className="not-italic text-cream leading-relaxed">
              {brand.address}
              <br />
              {brand.zip} {brand.city}
              <br />
              {brand.country}
            </address>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-coral-light font-medium mb-3">
              Kontakt
            </p>
            <div className="space-y-1">
              <a
                href={`tel:${brand.phone.replace(/\s/g, "")}`}
                className="block text-cream hover:text-coral transition-colors"
              >
                📞 {brand.phoneDisplay}
              </a>
              <a
                href={brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-cream hover:text-coral transition-colors"
              >
                📸 Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-cream/10 pt-6">
          <p className="text-xs text-cream/40">
            © {brand.copyrightYear} {brand.name}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.24em] font-medium">
            <Link to="/impressum" className="text-cream/60 hover:text-coral-light transition-colors">
              Impressum
            </Link>
            <Link to="/datenschutz" className="text-cream/60 hover:text-coral-light transition-colors">
              Datenschutz
            </Link>
            <a
              href="#top"
              className="text-cream/60 hover:text-coral-light transition-colors"
            >
              ↑ Nach oben
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
