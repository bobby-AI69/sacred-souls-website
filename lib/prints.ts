export type Print = {
  id: string;
  title: string;
  subtitle: string;
  priceAUD: number; // in dollars
  description: string;
  palette: string; // CSS gradient for placeholder artwork
};

export const PRINTS: Print[] = [
  {
    id: "print-ghost-bride",
    title: "The Ghost Bride",
    subtitle: "A3 · Digital Print",
    priceAUD: 32,
    description:
      "A veil that moves on its own. Burgundy smoke, candle-light, and a vow written in disappearing ink.",
    palette:
      "radial-gradient(ellipse at 30% 25%, rgba(232,164,160,0.55), transparent 55%), radial-gradient(ellipse at 70% 80%, rgba(92,26,27,0.85), transparent 60%), linear-gradient(180deg, #1a0d0e 0%, #050303 100%)",
  },
  {
    id: "print-written-in-the-walls",
    title: "Written in the Walls",
    subtitle: "A2 · Digital Print",
    priceAUD: 48,
    description:
      "Wallpaper peeled back to reveal a name. Her name. Yours, maybe. Gold leaf bleeding into shadow.",
    palette:
      "radial-gradient(ellipse at 60% 30%, rgba(212,162,76,0.5), transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(232,164,160,0.35), transparent 60%), linear-gradient(180deg, #120e0c 0%, #040404 100%)",
  },
  {
    id: "print-she-wasnt-there",
    title: "she wasn't there",
    subtitle: "A4 · Digital Print",
    priceAUD: 24,
    description:
      "An empty chair. A breath on the glass. The moment the frame remembers who left.",
    palette:
      "radial-gradient(ellipse at 50% 20%, rgba(232,164,160,0.4), transparent 60%), radial-gradient(ellipse at 50% 100%, rgba(10,10,10,1), transparent 60%), linear-gradient(180deg, #0e0b0c 0%, #050505 100%)",
  },
];
