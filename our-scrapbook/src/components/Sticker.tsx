"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Sticker({
  children,
  className = "",
  rotate = -8,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  rotate?: number;
  delay?: number;
}) {
  return (
    <motion.span
      className={`inline-block select-none drop-shadow-sm ${className}`}
      initial={{ opacity: 0, scale: 0, rotate: 0 }}
      whileInView={{ opacity: 1, scale: 1, rotate }}
      whileHover={{ scale: 1.2, rotate: rotate * -1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200, damping: 10, delay }}
    >
      {children}
    </motion.span>
  );
}
