"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TimelineEvent } from "@/data/timeline";

export default function TimelineCard({
  event,
  index,
}: {
  event: TimelineEvent;
  index: number;
}) {
  const isLeft = index % 2 === 0;

  return (
    <div className={`relative flex w-full items-center ${isLeft ? "sm:justify-start" : "sm:justify-end"}`}>
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -60 : 60, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`w-full rounded-2xl border-2 border-beige bg-cream/90 p-4 shadow-soft sm:w-[46%] ${
          isLeft ? "sm:mr-auto" : "sm:ml-auto"
        }`}
        style={{ rotate: isLeft ? -1.5 : 1.5 }}
        whileHover={{ rotate: 0, scale: 1.02 }}
      >
        <div className="mb-2 flex items-center justify-between">
          <span className="font-hand text-xs uppercase tracking-wide text-inkdark/60">{event.date}</span>
          <span className="text-xl">{event.sticker}</span>
        </div>
        <h3 className="font-display text-2xl text-inkdark sm:text-3xl">{event.title}</h3>

        <div className={`my-3 flex gap-3 ${event.photos.length > 1 ? "flex-wrap" : ""}`}>
          {event.photos.map((src, i) => (
            <div
              key={i}
              className="rotate-[-3deg] rounded-sm border-4 border-white bg-white p-1 shadow-polaroid even:rotate-[3deg]"
              style={{ width: 130 }}
            >
              <div className="relative h-32 w-full overflow-hidden">
                <Image src={src} alt={event.title} fill className="object-cover" sizes="130px" />
              </div>
            </div>
          ))}
        </div>

        <p className="font-hand text-sm leading-relaxed text-ink">{event.caption}</p>
      </motion.div>
    </div>
  );
}
