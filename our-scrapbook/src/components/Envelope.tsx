"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Letter } from "@/data/letters";

const colorMap: Record<Letter["color"], { bg: string; flapHex: string; text: string }> = {
  blush: { bg: "bg-blush", flapHex: "#E8B4BC", text: "text-inkdark" },
  lavender: { bg: "bg-lavender", flapHex: "#C9B6E4", text: "text-inkdark" },
  sage: { bg: "bg-sage", flapHex: "#A8C29B", text: "text-inkdark" },
  babyblue: { bg: "bg-babyblue", flapHex: "#B7D3E8", text: "text-inkdark" },
  beige: { bg: "bg-beige", flapHex: "#E4D4B8", text: "text-inkdark" },
  sunflower: { bg: "bg-sunflower", flapHex: "#EEC24A", text: "text-inkdark" },
};

export default function Envelope({ letter }: { letter: Letter }) {
  const [open, setOpen] = useState(false);
  const colors = colorMap[letter.color];

  return (
    <>
      <motion.button
        layoutId={`envelope-${letter.id}`}
        onClick={() => setOpen(true)}
        className={`cursor-interactive group relative flex h-40 w-full flex-col items-center justify-end rounded-md ${colors.bg} p-3 text-left shadow-soft`}
        whileHover={{ y: -6, rotate: -1 }}
        whileTap={{ scale: 0.97 }}
      >
        {/* flap */}
        <div
          className="absolute left-0 top-0 h-0 w-0 border-l-[100px] border-r-[100px] border-t-[55px] border-l-transparent border-r-transparent opacity-90 transition-transform group-hover:-translate-y-1"
          style={{ borderTopColor: colors.flapHex }}
        />
        <span className="absolute right-3 top-3 text-lg">💌</span>
        <p className={`relative z-10 font-display text-lg leading-tight ${colors.text} sm:text-xl`}>
          {letter.title}
        </p>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-inkdark/40 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              layoutId={`envelope-${letter.id}`}
              className="relative w-full max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                initial={{ scale: 0.9, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 30, opacity: 0 }}
                transition={{ type: "spring", stiffness: 180, damping: 20 }}
                className={`relative rounded-lg ${colors.bg} p-6 shadow-polaroid sm:p-8`}
              >
                <button
                  onClick={() => setOpen(false)}
                  className="cursor-interactive absolute right-3 top-3 text-xl text-inkdark/60 hover:text-inkdark"
                  aria-label="Close letter"
                >
                  ✕
                </button>

                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                  className="rounded-md border border-inkdark/10 bg-cream p-5 shadow-inner sm:p-8"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(transparent, transparent 27px, rgba(107,86,69,0.08) 28px)",
                  }}
                >
                  <h3 className="mb-4 font-display text-2xl text-inkdark sm:text-3xl">
                    {letter.title}
                  </h3>
                  <p className="font-hand text-base leading-8 text-ink whitespace-pre-line sm:text-lg">
                    {letter.message}
                  </p>
                  <p className="mt-6 text-right font-display text-xl text-inkdark">— always yours</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
