export interface LovedMessage {
  id: string;
  from: string;
  relation: string;
  type: "text" | "image" | "video" | "voice";
  content: string; // text message, or media URL
  mediaSrc?: string;
  rotation: number;
}

export const lovedMessages: LovedMessage[] = [
  {
    id: "m1",
    from: "Mom",
    relation: "Mother",
    type: "text",
    content:
      "Happy birthday! Thank you for making our kid so happy. Watching the two of you together is one of my favorite things. We love you already.",
    rotation: -3,
  },
  {
    id: "m2",
    from: "Sam",
    relation: "Best Friend",
    type: "text",
    content:
      "Bro. Happy birthday. Thanks for putting up with my terrible advice for a decade and still turning out this well-adjusted. Love you, man.",
    rotation: 4,
  },
  {
    id: "m3",
    from: "Priya",
    relation: "Sister",
    type: "text",
    content:
      "Happy birthday to the best big brother! Thank you for always answering my 11pm phone calls. This scrapbook is adorable, by the way — did NOT think you two had this in you.",
    rotation: -2,
  },
  {
    id: "m4",
    from: "Grandma",
    relation: "Grandmother",
    type: "text",
    content:
      "Happy birthday, sweetheart. I remember when you were this tall. Now look at you, all grown, with someone who lights up every time your name comes up. I couldn't be prouder.",
    rotation: 3,
  },
  {
    id: "m5",
    from: "Jordan",
    relation: "College Roommate",
    type: "image",
    content: "That photo from the dorm days you'll never live down",
    mediaSrc: "https://picsum.photos/seed/friend1/500/500",
    rotation: -4,
  },
  {
    id: "m6",
    from: "Dad",
    relation: "Father",
    type: "voice",
    content: "A short birthday message — press play",
    rotation: 2,
  },
];
