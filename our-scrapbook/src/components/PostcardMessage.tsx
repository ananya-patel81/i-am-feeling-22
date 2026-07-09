"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { LovedMessage } from "@/data/messages";

export default function PostcardMessage({ message }: { message: LovedMessage }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="relative" style={{ perspective: 1200 }}>
      {/* pin */}
      <div className="absolute -top-3 left-1/2 z-20 h-4 w-4 -translate-x-1/2 rounded-full bg-blushdark shadow-pin" />

      <motion.div
        className="cursor-interactive relative h-64 w-full"
        style={{ rotate: message.rotation, transformStyle: "preserve-3d" }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        onClick={() => setFlipped(!flipped)}
        whileHover={{ y: -4 }}
      >
        {/* front */}
        <div
          className="absolute inset-0 flex flex-col justify-between rounded-sm border border-inkdark/10 bg-cream p-4 shadow-soft"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div>
            <p className="font-display text-xl text-inkdark">{message.from}</p>
            <p className="mb-2 font-hand text-xs uppercase tracking-wide text-inkdark/50">
              {message.relation}
            </p>

            {message.type === "text" && (
              <p className="font-hand text-sm leading-relaxed text-ink line-clamp-5">
                {message.content}
              </p>
            )}
            {message.type === "image" && (
              <p className="font-hand text-sm text-ink">📷 {message.content}</p>
            )}
            {message.type === "video" && (
              <p className="font-hand text-sm text-ink">🎬 {message.content}</p>
            )}
            {message.type === "voice" && (
              <p className="font-hand text-sm text-ink">🎙️ {message.content}</p>
            )}
          </div>
          <p className="text-right font-hand text-xs text-inkdark/40">tap to flip →</p>
        </div>

        {/* back */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-sm border border-inkdark/10 bg-beige p-4 shadow-soft"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          {message.type === "image" && message.mediaSrc && (
            <div className="relative h-40 w-full overflow-hidden rounded-sm">
              <Image src={message.mediaSrc} alt={message.from} fill className="object-cover" sizes="300px" />
            </div>
          )}
          {message.type === "video" && (
            <div className="flex h-40 w-full items-center justify-center rounded-sm bg-inkdark/10 font-hand text-sm text-ink">
              🎬 video placeholder — add mediaSrc to play
            </div>
          )}
          {message.type === "voice" && (
            <div className="flex w-full flex-col items-center gap-2">
              <span className="text-3xl">🎙️</span>
              <audio controls src={message.mediaSrc} className="w-full" onClick={(e) => e.stopPropagation()} />
              <p className="font-hand text-xs text-inkdark/50">add file to /public/audio</p>
            </div>
          )}
          {message.type === "text" && (
            <p className="font-hand text-sm italic text-ink">With so much love, {message.from} 💛</p>
          )}
        </div>
      </motion.div>
    </div>
  );
}
