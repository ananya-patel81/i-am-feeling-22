"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [errored, setErrored] = useState(false);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().catch(() => setErrored(true));
      setPlaying(true);
    }
  };

  return (
    <div className="cursor-interactive fixed bottom-5 right-5 z-40">
      <audio
        ref={audioRef}
        src="/audio/music.mp3"
        loop
        onError={() => setErrored(true)}
      />
      <motion.button
        onClick={toggle}
        whileHover={{ scale: 1.08, rotate: -4 }}
        whileTap={{ scale: 0.9 }}
        className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-beige bg-cream shadow-soft"
        title={
          errored
            ? "Add music.mp3 to /public/audio to enable this"
            : playing
            ? "Pause our song"
            : "Play our song"
        }
      >
        <span className="text-2xl">{playing ? "⏸️" : "🎵"}</span>
      </motion.button>
      {playing && (
        <motion.div
          className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-sunflower"
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
        />
      )}
    </div>
  );
}
