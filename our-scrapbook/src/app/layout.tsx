import type { Metadata } from "next";
import { Caveat, Shadows_Into_Light, Patrick_Hand, Nunito } from "next/font/google";
import "./globals.css";
import { CursorProvider } from "@/lib/CursorContext";
import SunflowerCursor from "@/components/SunflowerCursor";
import Navbar from "@/components/Navbar";

const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat", weight: ["500", "600", "700"] });
const shadows = Shadows_Into_Light({ subsets: ["latin"], variable: "--font-shadows", weight: "400" });
const patrick = Patrick_Hand({ subsets: ["latin"], variable: "--font-patrick", weight: "400" });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });

export const metadata: Metadata = {
  title: "Our Scrapbook 💛",
  description: "A handmade digital scrapbook, made with love.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${caveat.variable} ${shadows.variable} ${patrick.variable} ${nunito.variable} bg-cream font-hand text-ink`}
      >
        <CursorProvider>
          <SunflowerCursor />
          <Navbar />
          {children}
        </CursorProvider>
      </body>
    </html>
  );
}
