import { useEffect } from "react";
import { Link } from "react-router-dom";
import { brand } from "../data/content";

type Props = { kind: "impressum" | "datenschutz" };
const TITLES = { impressum: "Impressum", datenschutz: "Datenschutz" };

export function LegalPage({ kind }: Props) {
  useEffect(() => {
    const prev = document.title;
    document.title = `${TITLES[kind]} — ${brand.name}`;
    window.scrollTo(0, 0);
    return () => { document.title = prev; };
  }, [kind]);

  return (
    <article className="bg-cream pt-32 md:pt-40 pb-24 min-h-screen">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-ink-soft hover:text-coral transition-colors mb-10 font-medium"
        >
          ← zurück
        </Link>
        <p className="text-coral text-[11px] uppercase tracking-[0.4em] mb-6 font-medium">
          {TITLES[kind]}
        </p>
        {kind === "impressum" ? <Impressum /> : <Datenschutz />}
      </div>
    </article>
  );
}

function H1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="font-display font-bold text-ink text-4xl md:text-5xl leading-[0.95] tracking-[-0.02em] uppercase">
      {children}
    </h1>
  );
}
function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display font-bold text-ink text-xl md:text-2xl mt-10 mb-2 leading-tight uppercase tracking-[0.02em]">
      {children}
    </h2>
  );
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="text-ink-soft leading-[1.75] mt-3">{children}</p>;
}

function Impressum() {
  return (
    <>
      <H1>Impressum</H1>
      <P>Angaben gemäß § 5 E-Commerce-Gesetz und § 25 Mediengesetz.</P>

      <H2>Anbieter</H2>
      <P>
        <strong>{brand.name}</strong>
        <br />
        {brand.address}
        <br />
        {brand.zip} {brand.city}
        <br />
        {brand.country}
      </P>
      <P>
        Telefon:{" "}
        <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="text-coral-deep hover:underline">
          {brand.phoneDisplay}
        </a>
        <br />
        E-Mail:{" "}
        <a href={`mailto:${brand.email}`} className="text-coral-deep hover:underline">
          {brand.email}
        </a>
      </P>

      <H2>Unternehmensgegenstand</H2>
      <P>Wassersport-Vermietung · Motorboot-Charter · Wasserski und Wakesurfen · Seerundfahrten am Wörthersee.</P>

      <H2>Berufsrecht</H2>
      <P>
        Gewerbeordnung — abrufbar unter{" "}
        <a
          href="https://www.ris.bka.gv.at"
          target="_blank"
          rel="noopener noreferrer"
          className="text-coral-deep hover:underline decoration-coral/30"
        >
          ris.bka.gv.at
        </a>
        . Zuständige Kammer: Wirtschaftskammer Kärnten.
      </P>

      <H2>Online-Streitbeilegung</H2>
      <P>
        Plattform der EU-Kommission:{" "}
        <a
          href="https://ec.europa.eu/odr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-coral-deep hover:underline decoration-coral/30"
        >
          ec.europa.eu/odr
        </a>
        . Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren teilzunehmen.
      </P>

      <H2>Haftungshinweis</H2>
      <P>
        Wassersport auf eigenes Risiko. Sicherheitseinweisungen und Ausrüstung sind Teil jeder Buchung.
        Für Personen- und Sachschäden bei nicht bestimmungsgemäßem Gebrauch übernehmen wir keine Haftung.
      </P>
    </>
  );
}

function Datenschutz() {
  return (
    <>
      <H1>Datenschutz</H1>

      <H2>Verantwortliche Stelle</H2>
      <P>
        {brand.name}
        <br />
        {brand.address}, {brand.zip} {brand.city}
        <br />
        {brand.email} · {brand.phoneDisplay}
      </P>

      <H2>Allgemeine Hinweise</H2>
      <P>
        Die Verwendung personenbezogener Daten richtet sich nach den geltenden gesetzlichen Bestimmungen
        (DSGVO, Telekommunikationsgesetz) sowie der durch die Nutzer:innen erteilten Einwilligung.
      </P>

      <H2>Datenerfassung</H2>
      <P>
        Diese Website erfasst technische Daten (Browser, Betriebssystem, Uhrzeit) automatisch zur
        fehlerfreien Bereitstellung. Es werden keine personenbezogenen Tracker, kein Analytics und
        keine Marketing-Cookies eingesetzt.
      </P>

      <H2>Kontaktaufnahme</H2>
      <P>
        Wenn Sie uns per Telefon, WhatsApp oder E-Mail kontaktieren, werden die übermittelten Daten
        zur Bearbeitung Ihrer Buchungsanfrage gespeichert. Eine Weitergabe an Dritte erfolgt nicht.
      </P>

      <H2>Externe Dienste</H2>
      <P>
        Beim Anzeigen der Karte werden Kartenkacheln von{" "}
        <a href="https://openfreemap.org" target="_blank" rel="noopener noreferrer" className="text-coral-deep hover:underline">
          OpenFreeMap
        </a>{" "}
        (basierend auf OpenStreetMap) geladen. Schriftarten werden über das Google-Fonts-CDN geladen.
      </P>

      <H2>Ihre Rechte</H2>
      <P>
        Sie haben jederzeit das Recht auf Auskunft, Berichtigung oder Löschung Ihrer gespeicherten
        personenbezogenen Daten sowie Beschwerderecht bei der Datenschutzbehörde Österreich.
      </P>

      <H2>SSL / TLS</H2>
      <P>
        Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung — erkennbar am
        Schloss-Symbol im Browser.
      </P>
    </>
  );
}
