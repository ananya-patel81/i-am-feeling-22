export interface Letter {
  id: string;
  title: string;
  color: "blush" | "lavender" | "sage" | "babyblue" | "beige" | "sunflower";
  message: string;
}

// To add a new letter, just add another object to this array.
// To remove one, delete its object. That's it.
export const letters: Letter[] = [
  {
    id: "l1",
    title: "Open when you're sad",
    color: "blush",
    message:
      "Hey you. I know something's sitting heavy on your chest right now. I wish I could climb through this page and just sit with you. Whatever it is, it doesn't get to stay forever — I promise. Go put on the hoodie that smells like me, breathe for a second, and remember: you have survived every hard day so far. This one is no different. I'm so proud of you, and I love you more than this tiny envelope could ever hold.",
  },
  {
    id: "l2",
    title: "Open when you miss me",
    color: "lavender",
    message:
      "Missing you is my favorite inconvenience. If you're reading this, close your eyes for five seconds and picture me making that ridiculous face I make when I'm trying not to laugh. There — a little less far away now, right? I'm never more than a phone call from you. Text me something dumb. I'll answer immediately.",
  },
  {
    id: "l3",
    title: "Open when you're stressed",
    color: "sage",
    message:
      "Deep breath in. Hold it. Let it out slowly. Again. Okay — now listen: whatever deadline or chaos is circling you right now, it is temporary, and you are so much more capable than your anxious brain is letting you believe. Make a list. Do one thing. Then the next. I believe in you completely, and I'll be here when you come up for air.",
  },
  {
    id: "l4",
    title: "Open when you can't sleep",
    color: "babyblue",
    message:
      "3am thoughts lie. Every single one of them. Put your phone face down, count backward from one hundred by sevens (it's annoying enough to distract you, I promise), and picture us on that lazy Sunday morning with too much sunlight and not enough reason to get up. You're safe. You're loved. Sleep now, love — tomorrow can wait.",
  },
  {
    id: "l5",
    title: "Open when you need motivation",
    color: "sunflower",
    message:
      "Remember every single thing you said you'd never manage, and then did anyway? This is one of those. You don't need to feel ready — you just need to start. I've watched you turn 'I can't' into 'I did' more times than I can count. Go be relentless. I'm cheering loud enough for both of us.",
  },
  {
    id: "l6",
    title: "Open when you're lonely",
    color: "blush",
    message:
      "You are thought of more than you know — mid-meeting, mid-commute, completely at random. Loneliness lies about how alone you actually are. I'm in your corner even on the days I can't say it out loud. Call someone who loves you. Call me. We'll fix the quiet together.",
  },
  {
    id: "l7",
    title: "Open when you're sick",
    color: "sage",
    message:
      "Ugh, I hate this for you. Soup, fluids, terrible daytime television, and absolutely zero guilt about doing nothing today. If I could trade places I would (okay, mostly). Rest hard. I'll check on you in a bit — don't you dare 'I'm fine' me.",
  },
  {
    id: "l8",
    title: "Open on your birthday",
    color: "sunflower",
    message:
      "Happy birthday to the best part of my every ordinary day. I hope this year hands you everything you deserve and then a little more, just because. Thank you for existing, for choosing me back, and for letting me build this ridiculous, wonderful little scrapbook life with you. Here's to another year of us.",
  },
  {
    id: "l9",
    title: "Open after we fight",
    color: "lavender",
    message:
      "First — I love you, and that hasn't changed, even for one second. We're allowed to disagree loudly and still be soft with each other after. Take the time you need, then come find me. I'll be here, ready to actually listen. We're a team, even mid-argument. Especially then.",
  },
  {
    id: "l10",
    title: "Open when you want a hug",
    color: "beige",
    message:
      "Arms open, right here, always. Since I can't physically reach through this page (working on it), wrap yourself in a blanket and pretend it's me — I promise I squeeze just as tight. See you soon, in person, for the real thing.",
  },
  {
    id: "l11",
    title: "Open when you're doubting yourself",
    color: "babyblue",
    message:
      "Whoever put that doubt in your head clearly hasn't seen what I've seen: every quiet act of kindness, every problem you solved at 1am, every time you showed up for people who needed you. You are not the worst version of yourself that your brain likes to replay. You're the person I chose, and I choose really, really carefully. Trust yourself. I do.",
  },
];
