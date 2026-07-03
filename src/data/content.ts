export const brand = {
  name: "Wassersport Mikulan",
  short: "Mikulan",
  tagline: "Motorboot · Seerundfahrten · Bootscharter",
  slogan: "A little party never killed nobody",
  sloganEmoji: "🥂🏄‍♂️☀️",
  captain: "Kevin",
  address: "Seecorso 11",
  city: "Velden am Wörthersee",
  zip: "9220",
  country: "Österreich",
  phone: "+43 664 220 34 00",
  phoneDisplay: "+43 664 2203400",
  email: "info@wassersport-mikulan.at",
  instagram: "https://www.instagram.com/wassersport.mikulan/",
  instagramHandle: "@wassersport.mikulan",
  year: new Date().getFullYear(),
  copyrightYear: 2024,
  coords: [14.0443, 46.6114] as [number, number], // Direkt vor dem Schlosshotel Velden am Ufer
} as const;

export const services = [
  "Motorboot",
  "Seerundfahrten",
  "Bootscharter",
  "Wassertaxi",
  "Wasserski",
  "Wakesurfen",
];

export const hero = {
  eyebrow: "Velden am Wörthersee · seit 1988",
  slogan: "A little party never killed nobody",
  emoji: "🥂🏄‍♂️☀️",
  intro:
    "Im Hause Mikulan Wassersport sind wir der Meinung, dass das Leben ein ständiges Fest sein sollte — und ein bisschen Feiern hat bis dato niemandem geschadet.",
  body:
    "Erkunden Sie die spannende Welt des Wassersports, wo jeder neue Tag Chancen bereithält, die Wellen zu beherrschen und das Leben voll und ganz auszuschöpfen.",
  cta: "Ich will mehr wissen",
};

export const boat = {
  eyebrow: "Unser Motorboot",
  title: "NKT 20",
  subtitle: "MasterCraft",
  body:
    "Stürzen Sie sich mit unserem NKT 20 Motorboot in das Abenteuer — Ihr perfekter Begleiter auf dem Wasser, der Geschwindigkeit, Komfort und unvergessliche Momente garantiert.",
  specs: [
    { label: "Länge", value: "6,10 m" },
    { label: "Motor", value: "MasterCraft" },
    { label: "Kapazität", value: "10 Personen" },
    { label: "Wakesurf", value: "Ready" },
  ],
  cta: "Jetzt starten",
  image: "/media/images/nkt20-motorboot.jpg",
};

export const location = {
  eyebrow: "Hier findest du uns",
  title: "Direkt am Seecorso.",
  body:
    "Seecorso 11, Velden am Wörthersee. Unser Boot liegt direkt im Zentrum Veldens — dort findest du unser Boot sowie unsere Crew-Mitglieder, die dich gerne begleiten.",
  cta: "Kontakt aufnehmen",
};

export const captain = {
  eyebrow: "Dein Kapitän",
  name: "Kevin",
  intro: "Ab wann darf man sich bei dir melden? ☺️",
  quote:
    "Ja, auf Anfrage wirds früher gehen. Das Boot kommt so Mitte Mai ins Wasser — also ab Anfang Juni geht's auf jeden Fall. Zeit und Tag ist ab Anfang Juni egal, nur das Wetter muss passen 👍",
  cta: "Kevin kontaktieren",
  image: "/media/images/kevin-captain.jpg",
};

export const gallery = [
  { label: "Wörthersee im Sommer", src: "" },
];

export const testimonialQuotes = [
  {
    text: "Für's Erste kann man sicher durch die Ledereitel.",
    author: "",
  },
  {
    text: "Voller Spaß hier am ganzefliegen, weiten Team ist super.",
    author: "",
  },
  {
    text: "Krasse Stimmulierung wenn ein Ort weiten TV.",
    author: "",
  },
  {
    text: "Spitze den Adrenalitäk beim Ansienterken kein Ur...",
    author: "",
  },
];

export const footerNote = {
  headline: "Meer Ansehen dies auch",
  body:
    "Es geht darum, sich zu erlauben, genau dort zu sein, wo man ist — und genau so zu sein, wie man ist. Ein Tag am See, ein Tag der zählt.",
};
