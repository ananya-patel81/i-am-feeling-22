"use client";

import { motion } from "framer-motion";
import ScrapbookFrame from "@/components/ScrapbookFrame";
import FloatingDecorations from "@/components/FloatingDecorations";
import TimelineCard from "@/components/TimelineCard";
import { timelineEvents } from "@/data/timeline";

export default function TimelinePage() {
  return (
    <ScrapbookFrame tint="lavender">
      <FloatingDecorations density="low" />
      <div className="relative z-10 mx-auto max-w-4xl">
        <h1 className="mb-2 text-center font-display text-5xl text-inkdark sm:text-6xl">Our Timeline 📖</h1>
        <p className="mb-12 text-center font-hand text-base text-ink">every little chapter, in order</p>

        <div className="relative">
          <motion.div
            className="absolute left-1/2 top-0 hidden w-1 -translate-x-1/2 rounded-full bg-lavenderdark/50 sm:block"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          />
          <div className="flex flex-col gap-10">
            {timelineEvents.map((event, i) => (
              <TimelineCard key={event.id} event={event} index={i} />
            ))}
          </div>
        </div>
      </div>
    </ScrapbookFrame>
  );
}
