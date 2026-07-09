export type DreamStatus = "Not Started" | "Planned" | "In Progress" | "Completed";

export interface Dream {
  id: string;
  title: string;
  description: string;
  status: DreamStatus;
  targetDate?: string;
  notes?: string;
  link?: string;
  image?: string;
}

export const initialDreams: Dream[] = [
  {
    id: "d1",
    title: "Road trip down the coast",
    description: "Windows down, no fixed itinerary, stop wherever looks pretty.",
    status: "Planned",
    targetDate: "2027-06-01",
    image: "https://picsum.photos/seed/dream1/500/400",
  },
  {
    id: "d2",
    title: "Learn to cook a full holiday dinner together",
    description: "No recipes we've never tried before. Chaos, but the fun kind.",
    status: "In Progress",
    image: "https://picsum.photos/seed/dream2/500/400",
  },
  {
    id: "d3",
    title: "See the northern lights",
    description: "Somewhere cold, with too many blankets and a thermos of cocoa.",
    status: "Not Started",
    link: "https://en.wikipedia.org/wiki/Aurora",
  },
  {
    id: "d4",
    title: "Adopt a ridiculous dog",
    description: "Something with too much energy and even more personality.",
    status: "Not Started",
  },
  {
    id: "d5",
    title: "Weekend camping trip",
    description: "First one went so well we're doing it again.",
    status: "Completed",
    notes: "10/10, minus the raccoon incident.",
    image: "https://picsum.photos/seed/dream5/500/400",
  },
];
