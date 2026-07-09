"use client";

import { ReactNode } from "react";

export default function ScrapbookFrame({
  children,
  tint = "cream",
}: {
  children: ReactNode;
  tint?: "cream" | "blush" | "lavender" | "sage" | "babyblue" | "beige";
}) {
  const tintMap: Record<string, string> = {
    cream: "from-cream via-cream to-beige/60",
    blush: "from-blush/40 via-cream to-cream",
    lavender: "from-lavender/40 via-cream to-cream",
    sage: "from-sage/40 via-cream to-cream",
    babyblue: "from-babyblue/40 via-cream to-cream",
    beige: "from-beige/60 via-cream to-cream",
  };

  return (
    <div className={`relative min-h-screen bg-gradient-to-b ${tintMap[tint]}`}>
      {/* torn top edge */}
      <svg
        className="absolute top-0 left-0 w-full text-cream"
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        style={{ height: 24 }}
      >
        <path
          d="M0,0 L0,20 Q30,35 60,18 T120,20 T180,15 T240,22 T300,12 T360,20 T420,18 T480,25 T540,15 T600,20 T660,18 T720,22 T780,14 T840,20 T900,18 T960,24 T1020,16 T1080,20 T1140,18 T1200,20 L1200,0 Z"
          fill="currentColor"
        />
      </svg>
      <div className="relative z-10 px-4 pb-24 pt-10 sm:px-8">{children}</div>
    </div>
  );
}
