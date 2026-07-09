"use client";

import { useEffect, useRef, useState } from "react";
import { useCursorPref } from "@/lib/CursorContext";

interface Sparkle {
  id: number;
  x: number;
  y: number;
}

let sparkleId = 0;

export default function SunflowerCursor() {
  const { cursorEnabled, isTouch } = useCursorPref();
  const dotRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const lastSparkle = useRef(0);

  useEffect(() => {
    if (!cursorEnabled || isTouch) return;

    const move = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
      }
      const now = Date.now();
      if (now - lastSparkle.current > 90) {
        lastSparkle.current = now;
        const id = sparkleId++;
        setSparkles((prev) => [
          ...prev.slice(-8),
          { id, x: e.clientX + (Math.random() * 16 - 8), y: e.clientY + (Math.random() * 16 - 8) },
        ]);
        setTimeout(() => {
          setSparkles((prev) => prev.filter((s) => s.id !== id));
        }, 700);
      }

      const target = e.target as HTMLElement;
      const interactive = target.closest(
        "a, button, [role='button'], input, textarea, select, .cursor-interactive"
      );
      setHovering(Boolean(interactive));
    };

    const down = () => {
      setClicking(true);
      setTimeout(() => setClicking(false), 350);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
    };
  }, [cursorEnabled, isTouch]);

  if (!cursorEnabled || isTouch) return null;

  return (
    <>
      <style jsx global>{`
        html,
        body,
        * {
          cursor: none !important;
        }
      `}</style>

      {sparkles.map((s) => (
        <div
          key={s.id}
          className="pointer-events-none fixed z-[9998] animate-sparkle"
          style={{ left: s.x, top: s.y }}
        >
          <span className="block text-sunflowerdark text-xs">✦</span>
        </div>
      ))}

      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] transition-transform duration-75 ease-out"
      >
        <div
          className={[
            "relative h-10 w-10 transition-all duration-300",
            hovering ? "scale-125 drop-shadow-[0_0_10px_rgba(246,216,121,0.85)]" : "scale-100",
            clicking ? "animate-squish" : "",
            hovering ? "animate-bloom" : "",
          ].join(" ")}
        >
          <svg viewBox="0 0 60 60" className="h-full w-full">
            {/* petals */}
            {Array.from({ length: 8 }).map((_, i) => (
              <ellipse
                key={i}
                cx="30"
                cy="12"
                rx="7"
                ry="12"
                fill="#F6D879"
                stroke="#C99B2E"
                strokeWidth="1"
                transform={`rotate(${i * 45} 30 30)`}
                opacity={0.95}
              />
            ))}
            {/* center */}
            <circle cx="30" cy="30" r="10" fill="#8B5E34" stroke="#6B4423" strokeWidth="1" />
            <circle cx="26" cy="27" r="1.4" fill="#5C3A1E" />
            <circle cx="33" cy="26" r="1.2" fill="#5C3A1E" />
            <circle cx="30" cy="33" r="1.3" fill="#5C3A1E" />
            <circle cx="34" cy="32" r="1" fill="#5C3A1E" />
            <circle cx="27" cy="33" r="1" fill="#5C3A1E" />
          </svg>
        </div>
      </div>
    </>
  );
}
