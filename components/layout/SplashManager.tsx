"use client";

import { useEffect, useState } from "react";
import { Splash } from "./Splash";

export function SplashManager() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Lock body scroll while splash screen is active
    if (showSplash) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    // Cleanup if unmounted early
    return () => {
      document.body.style.overflow = "";
    };
  }, [showSplash]);

  if (!showSplash) return null;

  return <Splash onComplete={() => setShowSplash(false)} />;
}
