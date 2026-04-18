export type Episode = {
  id: string;
  number: string;
  title: string;
  blurb: string;
  status: "released" | "coming";
};

export const EPISODES: Episode[] = [
  {
    id: "ep-1",
    number: "EP·01",
    title: "The First Door",
    blurb: "A house that remembers. A girl who shouldn't.",
    status: "released",
  },
  {
    id: "ep-2",
    number: "EP·02",
    title: "Letters to No One",
    blurb: "She writes to him every night. He has never existed.",
    status: "released",
  },
  {
    id: "ep-3",
    number: "EP·03",
    title: "The Wall Is Listening",
    blurb: "The wallpaper peels. The name underneath is her own.",
    status: "coming",
  },
];
