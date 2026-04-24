export type Print = {
  id: string;
  title: string;
  subtitle: string;
  priceAUD: number; // in dollars
  description: string;
  palette: string; // CSS gradient for placeholder artwork
  image?: string; // optional actual image path (in /public)
};

export const PRINTS: Print[] = [
  {
    id: "print-chains-1",
    title: "she held the chain loosely",
    subtitle: "Digital Print · Chained Love Series",
    priceAUD: 34,
    description: "Power was never in the iron. It was in the hand that held it without tightening.",
    palette: "linear-gradient(180deg, #0a0608 0%, #1a0d14 100%)",
    image: "/renderedsoulschains1.png",
  },
  {
    id: "print-chains-2",
    title: "willing",
    subtitle: "Digital Print · Chained Love Series",
    priceAUD: 34,
    description: "He could have left at any time. That was the whole point.",
    palette: "linear-gradient(180deg, #0a0608 0%, #1a0d14 100%)",
    image: "/renderedsoulchains2.png",
  },
  {
    id: "print-chains-3",
    title: "the weight of staying",
    subtitle: "Digital Print · Chained Love Series",
    priceAUD: 34,
    description: "Not every chain is a prison. Some are a promise.",
    palette: "linear-gradient(180deg, #0a0608 0%, #1a0d14 100%)",
    image: "/renderedsoulchains3.png",
  },
  {
    id: "print-chains-4",
    title: "devotion",
    subtitle: "Digital Print · Chained Love Series",
    priceAUD: 34,
    description: "The smoke remembered them long after the candles went cold.",
    palette: "linear-gradient(180deg, #0a0608 0%, #1a0d14 100%)",
    image: "/renderedsoulchains4.png",
  },
  {
    id: "print-chains-5",
    title: "coral and iron",
    subtitle: "Digital Print · Chained Love Series",
    priceAUD: 34,
    description: "Beautiful things and brutal things are not always different things.",
    palette: "linear-gradient(180deg, #0a0608 0%, #1a0d14 100%)",
    image: "/renderedsoulchains5.png",
  },
  {
    id: "print-chains-6",
    title: "surrender",
    subtitle: "Digital Print · Chained Love Series",
    priceAUD: 34,
    description: "She didn't ask him to kneel. He just did.",
    palette: "linear-gradient(180deg, #0a0608 0%, #1a0d14 100%)",
    image: "/renderedsoulchains6.png",
  },
  {
    id: "print-chains-7",
    title: "the last room",
    subtitle: "Digital Print · Chained Love Series",
    priceAUD: 34,
    description: "Every corridor led here. Every door opened into her.",
    palette: "linear-gradient(180deg, #0a0608 0%, #1a0d14 100%)",
    image: "/renderedsoulchains7.png",
  },
  {
    id: "print-chains-8",
    title: "still here",
    subtitle: "Digital Print · Chained Love Series",
    priceAUD: 34,
    description: "The smoke cleared. He hadn't moved.",
    palette: "linear-gradient(180deg, #0a0608 0%, #1a0d14 100%)",
    image: "/renderedsoulchains8.png",
  },
];
