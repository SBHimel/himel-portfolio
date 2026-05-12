"use client";

import { motion } from "framer-motion";
import { useOrientation } from "@/hooks/useOrientation";

export default function GlowBackground() {
  const { beta, gamma } = useOrientation();

  // Subtle shift based on tilt: gamma for X, beta for Y
  const translateX = gamma * 0.5; // range ~ -45 to 45px
  const translateY = beta * 0.5;  // range ~ -90 to 90px

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {/* Left Edge Glow */}
      <motion.div
        className="absolute -left-[25%] top-0 w-[60%] h-full blur-[120px] md:blur-[200px] rounded-full"
        animate={{
          backgroundColor: [
            "rgba(249, 115, 22, 0.25)", // Primary Orange
            "rgba(139, 92, 246, 0.25)", // Soft Purple
            "rgba(249, 115, 22, 0.25)"
          ],
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.2, 1],
          x: translateX,
          y: translateY,
        }}
        transition={{
          backgroundColor: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          x: { type: "spring", stiffness: 50, damping: 20 },
          y: { type: "spring", stiffness: 50, damping: 20 },
        }}
      />
      
      {/* Right Edge Glow */}
      <motion.div
        className="absolute -right-[25%] top-0 w-[60%] h-full blur-[120px] md:blur-[200px] rounded-full"
        animate={{
          backgroundColor: [
            "rgba(139, 92, 246, 0.25)", // Soft Purple
            "rgba(249, 115, 22, 0.25)", // Primary Orange
            "rgba(139, 92, 246, 0.25)"
          ],
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.2, 1],
          x: -translateX,
          y: -translateY,
        }}
        transition={{
          backgroundColor: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 },
          opacity: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 },
          scale: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 },
          x: { type: "spring", stiffness: 50, damping: 20 },
          y: { type: "spring", stiffness: 50, damping: 20 },
        }}
      />

      {/* Bottom Edge Glow */}
      <motion.div
        className="absolute -bottom-[20%] left-0 w-full h-[50%] blur-[150px] md:blur-[250px] rounded-full"
        animate={{
          backgroundColor: [
            "rgba(249, 115, 22, 0.2)",
            "rgba(139, 92, 246, 0.2)",
            "rgba(249, 115, 22, 0.2)"
          ],
          opacity: [0.5, 0.8, 0.5],
          scaleY: [1, 1.3, 1],
          y: translateY * 0.8,
        }}
        transition={{
          backgroundColor: { duration: 12, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 12, repeat: Infinity, ease: "easeInOut" },
          scaleY: { duration: 12, repeat: Infinity, ease: "easeInOut" },
          y: { type: "spring", stiffness: 50, damping: 20 },
        }}
      />
    </div>
  );
}

