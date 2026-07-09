import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FBF4E7",
        blush: "#F5D3D8",
        blushdark: "#E8B4BC",
        lavender: "#E4D9F0",
        lavenderdark: "#C9B6E4",
        sage: "#CBDAC2",
        sagedark: "#A8C29B",
        babyblue: "#D8E7F3",
        babybluedark: "#B7D3E8",
        beige: "#F0E4D0",
        sunflower: "#F6D879",
        sunflowerdark: "#EEC24A",
        ink: "#6B5645",
        inkdark: "#4A3B2E",
      },
      fontFamily: {
        display: ["var(--font-caveat)", "cursive"],
        script: ["var(--font-shadows)", "cursive"],
        body: ["var(--font-patrick)", "cursive"],
        hand: ["var(--font-nunito)", "sans-serif"],
      },
      backgroundImage: {
        paper:
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.6), transparent 40%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.4), transparent 40%)",
      },
      boxShadow: {
        polaroid: "0 8px 20px -6px rgba(107, 86, 69, 0.35)",
        soft: "0 6px 16px -4px rgba(107, 86, 69, 0.2)",
        pin: "0 3px 6px rgba(0,0,0,0.25)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        drift: {
          "0%": { transform: "translateX(-10vw)" },
          "100%": { transform: "translateX(110vw)" },
        },
        bloom: {
          "0%": { transform: "scale(1) rotate(0deg)" },
          "50%": { transform: "scale(1.25) rotate(8deg)" },
          "100%": { transform: "scale(1) rotate(0deg)" },
        },
        squish: {
          "0%": { transform: "scale(1)" },
          "40%": { transform: "scale(0.75, 1.15)" },
          "100%": { transform: "scale(1)" },
        },
        sparkle: {
          "0%": { opacity: "0", transform: "scale(0)" },
          "50%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        driftSlow: "drift 60s linear infinite",
        driftMed: "drift 40s linear infinite",
        bloom: "bloom 0.6s ease-in-out",
        squish: "squish 0.35s ease-in-out",
        sparkle: "sparkle 0.8s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
