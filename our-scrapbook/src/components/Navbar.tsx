"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { useCursorPref } from "@/lib/CursorContext";

const tabs = [
  { href: "/", label: "Home", emoji: "🏠" },
  { href: "/timeline", label: "Our Timeline", emoji: "📖" },
  { href: "/letters", label: "Open When Letters", emoji: "💌" },
  { href: "/gallery", label: "Our Gallery", emoji: "📸" },
  { href: "/messages", label: "Messages From Loved Ones", emoji: "❤️" },
  { href: "/dreams", label: "Future Dreams", emoji: "📅" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { cursorEnabled, setCursorEnabled, isTouch } = useCursorPref();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-dashed border-beige bg-cream/90 backdrop-blur-sm shadow-soft">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:py-3">
        <Link href="/" className="font-display text-2xl text-inkdark sm:text-3xl">
          our scrapbook <span className="text-sunflowerdark">✿</span>
        </Link>

        <button
          className="cursor-interactive rounded-full bg-blush/60 px-3 py-1 font-body text-sm text-inkdark sm:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? "close" : "menu"}
        </button>

        <nav className="hidden items-center gap-1 sm:flex">
          {tabs.map((tab) => {
            const active = pathname === tab.href;
            return (
              <Link key={tab.href} href={tab.href} className="cursor-interactive relative px-2 py-1">
                <motion.span
                  className={`font-body flex items-center gap-1 rounded-xl px-3 py-1.5 text-sm transition-colors ${
                    active
                      ? "bg-sunflower/70 text-inkdark shadow-pin"
                      : "text-ink hover:bg-beige/70"
                  }`}
                  whileHover={{ rotate: -1, scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <span>{tab.emoji}</span>
                  <span className="hidden lg:inline">{tab.label}</span>
                  <span className="lg:hidden">{tab.label.split(" ")[0]}</span>
                </motion.span>
              </Link>
            );
          })}
        </nav>

        {!isTouch && (
          <button
            onClick={() => setCursorEnabled(!cursorEnabled)}
            className="cursor-interactive hidden rounded-full border border-beige px-3 py-1 font-hand text-xs text-ink hover:bg-beige/50 sm:block"
            title="Toggle sunflower cursor"
          >
            🌻 cursor: {cursorEnabled ? "on" : "off"}
          </button>
        )}
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-dashed border-beige bg-cream px-4 pb-3 sm:hidden">
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              onClick={() => setOpen(false)}
              className={`font-body rounded-lg px-3 py-2 text-sm ${
                pathname === tab.href ? "bg-sunflower/70" : "hover:bg-beige/60"
              }`}
            >
              {tab.emoji} {tab.label}
            </Link>
          ))}
          {!isTouch && (
            <button
              onClick={() => setCursorEnabled(!cursorEnabled)}
              className="mt-1 rounded-lg border border-beige px-3 py-2 text-left font-hand text-xs text-ink"
            >
              🌻 sunflower cursor: {cursorEnabled ? "on" : "off"}
            </button>
          )}
        </nav>
      )}
    </header>
  );
}
