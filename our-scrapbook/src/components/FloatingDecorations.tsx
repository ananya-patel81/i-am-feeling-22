"use client";

import { motion } from "framer-motion";

const clouds = [
  { top: "8%", scale: 1, duration: 55, delay: 0 },
  { top: "22%", scale: 0.7, duration: 70, delay: -20 },
  { top: "4%", scale: 0.5, duration: 45, delay: -10 },
];

const petals = ["🌸", "🌷", "🌼", "🌿", "🍃"];
const stars = ["✦", "✧", "⋆", "✨"];

function Cloud({ top, scale, duration, delay }: { top: string; scale: number; duration: number; delay: number }) {
  return (
    <motion.div
      className="absolute left-0 opacity-70"
      style={{ top }}
      initial={{ x: "-15vw" }}
      animate={{ x: "115vw" }}
      transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
    >
      <svg width={120 * scale} height={60 * scale} viewBox="0 0 120 60">
        <ellipse cx="30" cy="40" rx="28" ry="18" fill="#FFFFFF" />
        <ellipse cx="60" cy="28" rx="34" ry="24" fill="#FFFFFF" />
        <ellipse cx="90" cy="40" rx="26" ry="17" fill="#FFFFFF" />
      </svg>
    </motion.div>
  );
}

export default function FloatingDecorations({ density = "normal" }: { density?: "low" | "normal" | "high" }) {
  const petalCount = density === "high" ? 10 : density === "low" ? 4 : 7;
  const starCount = density === "high" ? 12 : density === "low" ? 5 : 8;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {clouds.map((c, i) => (
        <Cloud key={i} {...c} />
      ))}

      {Array.from({ length: petalCount }).map((_, i) => (
        <motion.span
          key={`petal-${i}`}
          className="absolute select-none text-2xl opacity-80"
          style={{ left: `${(i * 97) % 100}%` }}
          initial={{ y: "-10vh", rotate: 0 }}
          animate={{ y: "110vh", rotate: 360 }}
          transition={{
            duration: 18 + (i % 5) * 4,
            delay: i * 1.7,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {petals[i % petals.length]}
        </motion.span>
      ))}

      {Array.from({ length: starCount }).map((_, i) => (
        <motion.span
          key={`star-${i}`}
          className="absolute select-none text-lg text-sunflowerdark opacity-70"
          style={{ left: `${(i * 53) % 100}%`, top: `${(i * 37) % 100}%` }}
          animate={{ opacity: [0.2, 0.9, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{
            duration: 3 + (i % 4),
            delay: i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {stars[i % stars.length]}
        </motion.span>
      ))}
    </div>
  );
}
