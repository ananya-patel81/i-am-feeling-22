export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  caption: string;
  photos: string[];
  sticker: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: "t1",
    date: "March 14, 2022",
    title: "The Day We Met",
    caption:
      "You spilled coffee on my notes and apologized for ten straight minutes. I knew right then you were trouble — the good kind.",
    photos: ["https://picsum.photos/seed/meet1/500/600"],
    sticker: "✨",
  },
  {
    id: "t2",
    date: "May 2, 2022",
    title: "First Date",
    caption:
      "That tiny noodle shop with the wobbly table. We stayed until they turned the chairs up on the tables around us.",
    photos: [
      "https://picsum.photos/seed/date1/500/600",
      "https://picsum.photos/seed/date2/500/600",
    ],
    sticker: "🍜",
  },
  {
    id: "t3",
    date: "August 19, 2022",
    title: "Our First Trip",
    caption:
      "Three days, one tiny rental car, and a map we never actually used. Got lost twice and didn't mind at all.",
    photos: ["https://picsum.photos/seed/trip1/500/600"],
    sticker: "🗺️",
  },
  {
    id: "t4",
    date: "January 1, 2023",
    title: "New Year, Same Us",
    caption:
      "Watched the fireworks from the rooftop, freezing, wrapped in one blanket that was definitely made for one person.",
    photos: ["https://picsum.photos/seed/nye1/500/600"],
    sticker: "🎆",
  },
  {
    id: "t5",
    date: "June 6, 2023",
    title: "Moving In Together",
    caption:
      "Fourteen boxes, one very confused cat, and the best decision we ever made without overthinking it.",
    photos: [
      "https://picsum.photos/seed/move1/500/600",
      "https://picsum.photos/seed/move2/500/600",
    ],
    sticker: "🏡",
  },
  {
    id: "t6",
    date: "Today",
    title: "Still Choosing You",
    caption:
      "Every single day, on purpose. This whole scrapbook is proof.",
    photos: ["https://picsum.photos/seed/today1/500/600"],
    sticker: "❤️",
  },
];
