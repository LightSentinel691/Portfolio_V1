"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Splash({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide splash after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // give time for the exit animation
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden"
        >
          {/* Logo Container */}
          <div className="flex flex-col items-center select-none w-full max-w-sm">
            {/* Blinking Logo */}
            <motion.div
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
              className="relative flex items-center justify-center mb-8 w-40 h-40"
            >
              <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Thin circular ring */}
                <circle cx="60" cy="60" r="58" stroke="white" strokeWidth="1.5" />
                
                {/* Overlapping T and K using the serif font */}
                {/* To approximate the custom ligature in SVG */}
                <text x="35" y="85" fill="white" fontFamily="var(--font-serif)" fontSize="76" fontWeight="400" letterSpacing="-4">T</text>
                <text x="50" y="85" fill="white" fontFamily="var(--font-serif)" fontSize="76" fontWeight="400">K</text>
              </svg>
            </motion.div>

            {/* Monogram text */}
            <h1 className="text-white text-3xl md:text-5xl font-serif tracking-[0.25em] mb-4 whitespace-nowrap text-center drop-shadow-md">
              Timothy Kiige
            </h1>

            {/* Subtitle */}
            <p className="text-white text-[9px] md:text-xs font-sans tracking-[0.4em] uppercase text-center opacity-70 whitespace-nowrap">
              Architecting the future through code
            </p>
          </div>

          {/* Decorative Star/Diamond at Bottom Right */}
          <div className="absolute bottom-12 right-12 md:bottom-16 md:right-16 opacity-50">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 0 C16 12 20 16 32 16 C20 16 16 20 16 32 C16 20 12 16 0 16 C12 16 16 12 16 0 Z" fill="white" />
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
