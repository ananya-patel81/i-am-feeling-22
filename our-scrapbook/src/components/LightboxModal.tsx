"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { GalleryPhoto } from "@/data/gallery";

export default function LightboxModal({
  photos,
  index,
  onClose,
  onNavigate,
}: {
  photos: GalleryPhoto[];
  index: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}) {
  if (index === null) return null;
  const photo = photos[index];

  const prev = () => onNavigate((index - 1 + photos.length) % photos.length);
  const next = () => onNavigate((index + 1) % photos.length);

  return (
    <AnimatePresence>
      {photo && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-inkdark/60 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            className="relative w-full max-w-lg rounded-sm border-8 border-white bg-white p-2 shadow-polaroid"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="cursor-interactive absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-blush text-inkdark shadow-pin"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image src={photo.src} alt={photo.caption} fill className="object-cover" sizes="500px" />
            </div>
            <div className="pt-3 text-center">
              <p className="font-hand text-base text-inkdark">{photo.caption}</p>
              <p className="font-hand text-xs text-inkdark/50">{photo.date}</p>
            </div>

            <button
              onClick={prev}
              className="cursor-interactive absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-inkdark shadow-pin"
              aria-label="Previous photo"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="cursor-interactive absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-inkdark shadow-pin"
              aria-label="Next photo"
            >
              ›
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
