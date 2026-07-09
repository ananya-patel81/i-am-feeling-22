"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GalleryPhoto } from "@/data/gallery";

const tapeColor: Record<GalleryPhoto["tape"], string> = {
  pink: "#F5D3D8",
  blue: "#D8E7F3",
  yellow: "#F6D879",
  green: "#CBDAC2",
};

export default function PhotoCard({
  photo,
  onClick,
}: {
  photo: GalleryPhoto;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      className="cursor-interactive relative mb-4 block w-full break-inside-avoid rounded-sm border-4 border-white bg-white p-2 text-left shadow-polaroid"
      style={{ rotate: photo.rotation }}
      whileHover={{ scale: 1.04, rotate: 0, zIndex: 10 }}
      transition={{ type: "spring", stiffness: 220, damping: 14 }}
    >
      <div
        className="absolute -top-3 left-1/2 h-6 w-16 -translate-x-1/2 opacity-80"
        style={{ backgroundColor: tapeColor[photo.tape], transform: "translateX(-50%) rotate(-3deg)" }}
      />
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={photo.src}
          alt={photo.caption}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>
      <div className="pt-2 text-center">
        <p className="font-hand text-sm text-inkdark">{photo.caption}</p>
        <p className="font-hand text-xs text-inkdark/50">{photo.date}</p>
      </div>
    </motion.button>
  );
}
