"use client";

import { useState } from "react";
import ScrapbookFrame from "@/components/ScrapbookFrame";
import FloatingDecorations from "@/components/FloatingDecorations";
import PhotoCard from "@/components/PhotoCard";
import LightboxModal from "@/components/LightboxModal";
import { galleryPhotos } from "@/data/gallery";

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <ScrapbookFrame tint="babyblue">
      <FloatingDecorations density="low" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <h1 className="mb-2 text-center font-display text-5xl text-inkdark sm:text-6xl">Our Gallery 📸</h1>
        <p className="mb-10 text-center font-hand text-base text-ink">a very unorganized, very loved photo pile</p>

        <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
          {galleryPhotos.map((photo, i) => (
            <PhotoCard key={photo.id} photo={photo} onClick={() => setActiveIndex(i)} />
          ))}
        </div>
      </div>

      <LightboxModal
        photos={galleryPhotos}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={(i) => setActiveIndex(i)}
      />
    </ScrapbookFrame>
  );
}
