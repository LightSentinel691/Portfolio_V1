"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

export function Sidebar() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 3.5, duration: 0.8 }}
      className="hidden md:flex fixed left-4 lg:left-8 bottom-0 top-0 flex-col justify-center items-center z-40 pointer-events-none"
    >
      <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-muted/30 to-transparent flex flex-col items-center justify-center gap-12 pointer-events-auto">
        
        {/* FIND ME ON - Rotated Text */}
        <div className="absolute top-[30%] -rotate-90 origin-center whitespace-nowrap hidden lg:block">
          <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-muted">Find Me On</span>
        </div>

        {/* Social Icons */}
        <div className="absolute bottom-[20%] flex flex-col items-center space-y-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent hover:-translate-y-1 transition-all duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent hover:-translate-y-1 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent hover:-translate-y-1 transition-all duration-300"
            aria-label="Twitter"
          >
            <FaTwitter size={20} />
          </a>
          <div className="h-16 w-[1px] bg-muted/50 mt-6"></div>
        </div>

      </div>
    </motion.div>
  );
}
