"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-background transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Column - Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col"
        >
          <span className="text-accent text-sm tracking-[0.3em] font-sans uppercase mb-4 pl-1">
            Biography
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-light tracking-tight text-foreground mb-10">
            About Timothy
          </h2>
          
          <div className="space-y-6 text-muted font-sans text-lg leading-relaxed mb-10">
            <p>
              I am a Full-Stack Developer based in <span className="text-foreground">Nairobi, Kenya</span>, with a profound focus on crafting high-performance, accessible, and dynamic digital experiences. Driven by a passion for scalable architecture, I bridge the gap between complex backend systems and intuitive, engaging front-end interfaces.
            </p>
            <p>
              My approach aligns modern engineering practices with a keen eye for aesthetic precision. I believe that performance and design are inextricably linked—an application must not only function flawlessly at scale but also deliver a premium, seamless user journey.
            </p>
            <p>
              Outside of the code editor, I draw inspiration from architecture, modern art, and electronic music—influences that shape my dedication to structure, minimalism, and rhythm in digital product design.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="/cv.pdf"
              download
              className="bg-foreground text-background px-8 py-4 font-sans font-medium tracking-widest uppercase text-sm hover:bg-accent hover:text-black transition-colors duration-300 flex items-center gap-3 w-max"
            >
              <Download size={18} />
              Download My CV (PDF)
            </a>
          </div>
        </motion.div>

        {/* Right Column - Decorative Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-full aspect-square max-w-md mx-auto lg:ml-auto select-none"
        >
          {/* Abstract geometric illustration instead of a photo */}
          <div className="absolute inset-0 border border-muted/20 rotate-45 transform transition-transform duration-1000 hover:rotate-90"></div>
          <div className="absolute inset-8 border border-muted/30 rotate-12 transform transition-transform duration-1000 hover:rotate-45"></div>
          <div className="absolute flex items-center justify-center inset-0">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[60%] h-[60%] opacity-50 text-accent">
              <path d="M50 0V100M0 50H100" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
              <path d="M10 10L90 90M10 90L90 10" stroke="currentColor" strokeWidth="0.5" />
            </svg>
          </div>
          
          {/* Timeline snippet */}
          <div className="absolute -bottom-10 -left-10 md:bottom-10 md:-left-12 bg-background border border-muted/20 p-6 shadow-2xl">
            <h4 className="font-serif text-xl border-b border-muted/20 pb-2 mb-4">Journey Snapshot</h4>
            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="text-accent text-xs font-sans tracking-widest uppercase">Present</span>
                <span className="text-foreground text-sm font-sans block">Freelance Full-Stack Developer</span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted text-xs font-sans tracking-widest uppercase">2021 - 2025</span>
                <span className="text-foreground text-sm font-sans block">Software Engineering Degree</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
