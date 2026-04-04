"use client";

import { useEffect, useState } from "react";
import { Splash } from "./Splash";
import { motion } from "framer-motion";

export function SplashManager({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [splashExited, setSplashExited] = useState(false);
  const [shouldRenderSplash, setShouldRenderSplash] = useState(true); // default true to avoid flash on SSR

  useEffect(() => {
    // Session-aware gatekeeper logic: permit exactly two introductions per session
    const countStr = sessionStorage.getItem("splashCount");
    const count = countStr ? parseInt(countStr) : 0;
    
    if (count < 2) {
      setShouldRenderSplash(true);
      sessionStorage.setItem("splashCount", (count + 1).toString());
    } else {
      setShouldRenderSplash(false);
      setShowSplash(false);
      setSplashExited(true);
    }
  }, []);

  useEffect(() => {
    // Lock body scroll while splash screen is active or exiting, unlock 100% after complete
    if (shouldRenderSplash && !splashExited) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [splashExited, shouldRenderSplash]);

  return (
    <>
      {shouldRenderSplash && showSplash && (
        <Splash 
          onExitStart={() => setIsExiting(true)}
          onComplete={() => {
            setShowSplash(false);
            setSplashExited(true);
          }} 
        />
      )}
      
      {/* Underlying content Entrance Animation */}
      <motion.div
        initial={shouldRenderSplash ? { opacity: 0, scale: 0.95 } : { opacity: 1, scale: 1 }}
        animate={isExiting || !shouldRenderSplash ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={
          shouldRenderSplash
            ? { duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }
            : { duration: 0 } // Quantum Bypass: instantaneous zero-gravity load
        }
        className="w-full h-full relative"
      >
        {children}
      </motion.div>
    </>
  );
}
