"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Splash({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide splash after 2200ms grace period
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1200); // give time for the ethereal exit animation
    }, 2200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -60, filter: "blur(10px)" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden"
        >
          {/* Logo Container */}
          <div className="flex flex-col items-center select-none w-full max-w-sm">
            {/* Biometric Respiration Logo */}
            <motion.div
              initial={{ opacity: 0.3, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                repeatType: "reverse", 
                ease: [0.4, 0, 0.2, 1] 
              }}
              className="relative flex items-center justify-center mb-8 w-44 h-44"
            >
              <svg
                viewBox="0 0 300 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full drop-shadow-lg"
              >
                {/* The Ring and TK Logo combined into one path group */}
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M138.5 22.9c-19.7 3.3-38.5 10.7-55.4 22l-8.5 5.6 7.9.3c6.9.2 8.2 0 11.5-2.2 9.6-6.3 23.1-11.7 37-14.9 13.8-3 38.7-3 51.7 0 13.8 3.3 29.5 9.7 37.5 15.3 2.8 2 18.5 2.9 17.3.9-.8-1.2-15.9-11-21.2-13.7-7.9-4-20-8.4-29.9-10.9-10.9-2.7-37.9-4-48-2.4zM54.6 55.9c-1.1 1.8-5.6 33.9-5.6 39.8 0 .2 1.4.3 3.1.1 2.9-.3 3.3-.8 4.4-5.2 3.8-15.1 16.5-21.2 42.6-20.5l10.4.3v83.5c0 89.3 0 88.9-5 94.8-2.4 2.9-10.5 6.2-15.1 6.2-1.9 0-2.4.5-2.4 2.6v2.7l10.3-.5c12.2-.6 17.8-2.8 23.5-9.3 8-9.1 7.6-4.7 8.2-89V161.5c.5-73.5.5-75.1 2.6-79.5 4.7-10.1 10.8-12.4 30.6-11.7 12.3.4 14.3.8 19.2 3.2 7.4 3.6 12.2 9.1 14.4 16.6 1.7 5.8 1.9 6 5.1 6 3.3 0 3.4-.1 2.8-3.3-.3-1.8-1.1-7.8-1.6-13.3-1.4-13.4-3-23.5-3.8-23.5-.4 0-2.9.7-5.6 1.5-4.1 1.3-14.7 1.5-66 1.5-56.5 0-61.5-.2-66.4-1.9-2.9-1-5.4-1.5-5.6-1.2zM217 62c0 2.6.4 3 2.6 3 1.4 0 4.1.7 6 1.6 6.8 3.3 4.2 10.3-9.8 26.5-3.5 4.1-17.1 19.9-30.1 35.1-13 15.2-24.1 28-24.7 28.3-.7.5-1-11.8-1-38.9V78h-6.4c-3.5 0-7.6.4-9 1l-2.6 1v75.7c0 62.5-.3 77-1.5 82.7-1.5 7.4-5 13-9.1 14.9-1.4.6-3.1 2.3-3.9 3.8l-1.4 2.7 12.2.7c6.7.4 19.4.5 28.2.4l16-.3.3-2.6c.3-2.4 0-2.6-4.7-3.2-10-1.2-15.5-6.4-17.1-16.3-.5-3.2-.9-18.4-.9-33.6v-27.8l9.2-10.7c5.1-5.9 16.3-18.8 24.9-28.7 8.6-9.9 23.6-27.2 33.4-38.5 9.7-11.3 19.5-22 21.8-23.9 6-4.9 14.9-8.8 21.6-9.6 6-.7 6.1-.7 5.2-5.7-.1-.4-13.4-.7-29.6-.7H217v3zM258.3 78c-1.8 1.1-3.3 2.2-3.3 2.5 0 .3 1.7 3.1 3.9 6.3 19.1 28.2 24.8 68.3 14.4 101.7-3 9.6-9.9 23.8-14.8 30.5l-3.6 4.9 2.8 3.5c1.5 2 3 3.5 3.3 3.5.9 0 10.8-15.3 13.6-20.9 4.1-8.4 7.3-17.4 10.2-29 3.7-14.9 3.9-38.4.4-54.1-2.7-11.9-6.5-22.9-11.2-32.2-3.9-7.6-10.9-18.8-11.8-18.8-.4 0-2.1.9-3.9 2zM38.8 96.5c-3.3 6.3-7 16.4-9.6 26-2.5 9.3-2.7 11.5-2.7 30.5 0 19.2.2 21.1 2.7 30.5 7.8 28.8 22 51.3 44.3 69.8l6 5-1.1-5.1c-.8-5.2-.8-5.2-5-8.9-27.2-23.8-41.7-55.3-41.7-90.5 0-14.6 2.6-30.3 6.7-40.6 2.5-6.3 2.5-6.6.9-11.6-.9-2.8-1.8-5.8-2-6.6-.3-1-1-1-2 1.5l.4-.1zM184.2 160.6l-10.1 11.7 14.6 21.6c15.2 22.6 22.6 33.4 30 43.8 12 17 26.9 23.3 55.4 23.3 10.2 0 10.7-.1 11.3-2.3.9-3.4.9-3.4-3.4-4.1-9.8-1.5-22.2-10.4-31.4-22.4-2.4-3.1-15.9-23-30.1-44.1-14.2-21.2-25.9-38.6-26-38.8-.2-.1-4.8 5-10.3 11.4zM214.1 259.1c-17.5 10.1-31.2 13.9-53.1 14.6-17.3.6-27.5-.8-40.2-5.3-6.8-2.4-7.4-2.5-15.6-1.3l-8.6 1.2 2.9 1.6c11.7 6.2 34.3 12.4 49.9 13.7 14.3 1.2 37.3-2.5 52.1-8.3 8-3.2 25.5-12.5 27.2-14.5 1.1-1.3-.7-3.4-5.3-6-.5-.3-4.7 1.6-9.3 4.3z"
                />
              </svg>
            </motion.div>

            {/* Monogram text */}
            <h1 className="text-white text-3xl md:text-4xl font-serif tracking-[0.25em] mb-4 whitespace-nowrap text-center drop-shadow-md">
              Timothy Kiige
            </h1>

            {/* Subtitle */}
            <p className="text-white text-[9px] md:text-[10px] font-sans tracking-[0.4em] uppercase text-center opacity-70 whitespace-nowrap">
              Architecting the future through code
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
