"use client";

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import {Suspense, useEffect, useState} from "react";


// Dynamically import the 3D scene with no SSR
const BlobScene = dynamic(() => import("./BlobScene"), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center">
      <img 
        src="/fallback-abstract.webp" 
        alt="Abstract 3D fluid art representing creative full-stack development"
        className="w-full h-full object-cover opacity-50 rounded-full blur-sm"
        onError={(e) => { e.currentTarget.style.display = 'none' }} // Hide if missing
      />
    </div>
  )
});

export function Hero() {

  const [splashDelay, setSplashDelay] = useState(0);

  useEffect(() => {
    const count = parseInt(sessionStorage.getItem("splashCount") || "0");
    setSplashDelay(count >= 2 ? 0 : 1);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column - Typography (60%) */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: splashDelay ? 3.2 : 0.1 }} // Delay for splash screen
          >
            <span className="text-muted font-sans text-lg tracking-widest uppercase mb-4 block">
              Hi, I'm
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: splashDelay ? 3.4 : 0.2 }}
            className="text-6xl md:text-8xl lg:text-[96px] font-serif leading-none tracking-tight mb-4 max-w-full drop-shadow-lg"
          >
            Timothy Kiige
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: splashDelay ? 3.6 : 0.3 }}
            className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold text-accent mb-6"
          >
            Full-Stack Developer
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: splashDelay ? 3.8 : 0.4 }}
            className="text-muted text-lg md:text-xl font-sans max-w-2xl leading-relaxed mb-10"
          >
            Building elegant interfaces. Securing the systems beneath.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: splashDelay ? 4.0 : 0.5 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <Link 
              href="#projects" 
              className="bg-accent text-black px-8 py-4 font-sans font-medium tracking-widest uppercase text-sm hover:bg-white transition-colors duration-300 flex items-center gap-2 group"
            >
              Explore My Work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#articles" 
              className="text-foreground border-b border-muted hover:border-accent hover:text-accent pb-1 font-sans tracking-wider uppercase text-sm transition-all duration-300"
            >
              View Articles
            </Link>
          </motion.div>
        </div>

        {/* Right Column - 3D Blob (40%) */}
        <div className="lg:col-span-5 relative w-full h-[50vh] lg:h-[80vh] flex items-center justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: splashDelay ? 4.2 : 0.6 }}
            className="w-full h-full max-w-lg absolute lg:right-0 pointer-events-auto"
          >
            <Suspense fallback={null}>
              <BlobScene />
            </Suspense>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1,   delay: splashDelay ? 4.5 : 0.7 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link href="#skills" aria-label="Scroll down">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-10 h-10 border border-muted/30 rounded-full flex items-center justify-center text-muted hover:border-accent hover:text-accent transition-colors"
          >
            <ChevronDown size={18} />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
