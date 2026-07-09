"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import FloatingDecorations from "@/components/FloatingDecorations";
import Sticker from "@/components/Sticker";
import MusicPlayer from "@/components/MusicPlayer";

// Edit these two lines to personalize the cover.
const NAME_ONE = "Ananya";
const NAME_TWO = "You";

export default function HomePage() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="relative min-h-[calc(100vh-56px)] overflow-hidden bg-gradient-to-b from-blush/30 via-cream to-babyblue/20">
      <FloatingDecorations density="high" />
      <MusicPlayer />

      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.section
            key="cover"
            exit={{ opacity: 0, scale: 1.15, filter: "blur(6px)" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="relative z-10 flex min-h-[calc(100vh-56px)] flex-col items-center justify-center px-6 text-center"
          >
            <Sticker className="absolute left-[8%] top-[14%] text-4xl" rotate={-15} delay={0.1}>
              🌸
            </Sticker>
            <Sticker className="absolute right-[10%] top-[20%] text-3xl" rotate={12} delay={0.3}>
              ⭐
            </Sticker>
            <Sticker className="absolute left-[12%] bottom-[18%] text-3xl" rotate={8} delay={0.5}>
              🎀
            </Sticker>
            <Sticker className="absolute right-[14%] bottom-[22%] text-4xl" rotate={-10} delay={0.2}>
              ☁️
            </Sticker>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mx-auto max-w-2xl rounded-[2rem] border-4 border-dashed border-blushdark/60 bg-cream/80 px-8 py-12 shadow-polaroid backdrop-blur-sm sm:px-14 sm:py-16"
            >
              <p className="font-script text-lg text-inkdark/70 sm:text-xl">a very small, very handmade thing for</p>
              <h1 className="mt-2 font-display text-5xl leading-tight text-inkdark sm:text-7xl">
                {NAME_ONE} <span className="text-sunflowerdark">&amp;</span> {NAME_TWO}
              </h1>
              <p className="mt-4 font-display text-3xl text-blushdark sm:text-4xl">Happy Birthday 🎂</p>
              <p className="mx-auto mt-4 max-w-md font-hand text-base text-ink sm:text-lg">
                every page of this is a little piece of us — open it slowly, there's no rush.
              </p>

              <motion.button
                onClick={() => setOpened(true)}
                whileHover={{ scale: 1.05, rotate: -1 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-interactive mt-8 rounded-full bg-sunflower px-8 py-3 font-display text-2xl text-inkdark shadow-soft"
              >
                Begin Our Story ❤️
              </motion.button>
            </motion.div>
          </motion.section>
        ) : (
          <motion.section
            key="opened"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-10 flex min-h-[calc(100vh-56px)] flex-col items-center justify-center gap-8 px-6 text-center"
          >
            <h2 className="font-display text-4xl text-inkdark sm:text-5xl">the scrapbook is open ✿</h2>
            <p className="max-w-md font-hand text-base text-ink sm:text-lg">
              wander through in any order you like — every tab has a little piece of us waiting for you.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { href: "/timeline", label: "📖 Our Timeline" },
                { href: "/letters", label: "💌 Open When Letters" },
                { href: "/gallery", label: "📸 Our Gallery" },
                { href: "/messages", label: "❤️ Messages From Loved Ones" },
                { href: "/dreams", label: "📅 Future Dreams" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="cursor-interactive rounded-full border-2 border-beige bg-cream px-4 py-2 font-body text-sm text-inkdark shadow-soft hover:bg-beige/60"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}
