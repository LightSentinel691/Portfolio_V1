"use client";
import { useEffect, useState, useLayoutEffect } from "react";
import { Splash } from "./Splash";
import { motion } from "framer-motion";

type Status = "pending" | "show-splash" | "skip-splash";

const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function SplashManager({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<Status>("pending");
  const [isExiting, setIsExiting] = useState(false);
  const [splashDone, setSplashDone] = useState(false);

  useIsomorphicLayoutEffect(() => {
    const count = parseInt(sessionStorage.getItem("splashCount") || "0");

    if (count >= 2) {
      document.body.style.overflow = "";
      setStatus("skip-splash");
    } else {
      sessionStorage.setItem("splashCount", (count + 1).toString());
      setStatus("show-splash");
    }
  }, []);

  useEffect(() => {
    if (status === "show-splash" && !splashDone) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [status, splashDone]);

  // ✅ While we're deciding, show NOTHING (black screen = invisible seam)
  if (status === "pending") {
    return <div className="fixed inset-0 bg-black z-[9999]" />;
  }

  const showSplash = status === "show-splash";

  return (
      <>
        {showSplash && !splashDone && (
            <Splash
                onExitStart={() => setIsExiting(true)}
                onComplete={() => setSplashDone(true)}
            />
        )}

        <motion.div
            initial={showSplash ? { opacity: 0, scale: 0.95 } : { opacity: 1, scale: 1 }}
            animate={
              isExiting || !showSplash
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.95 }
            }
            transition={
              showSplash
                  ? { duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }
                  : { duration: 0 }
            }
            className="w-full h-full relative"
        >
          {children}
        </motion.div>
      </>
  );
}