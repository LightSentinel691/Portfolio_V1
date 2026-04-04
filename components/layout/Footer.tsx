"use client";

import { motion } from "framer-motion";
import { ArrowUp, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/5 relative">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* Scroll to Top button */}
        <button 
          onClick={scrollToTop}
          className="absolute -top-6 bg-background border border-white/10 w-12 h-12 flex items-center justify-center rounded-sm hover:bg-accent hover:border-accent hover:text-black transition-colors duration-300 group"
          aria-label="Back to Top"
        >
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full mb-16 text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start space-y-4">
            {/* Logo */}
            <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center mb-2">
              <span className="font-serif font-bold text-lg tracking-widest pl-[1px]">TK</span>
            </div>
            <p className="text-muted font-sans text-sm tracking-widest uppercase">
              Timothy Kiige
            </p>
            <p className="text-muted/60 font-sans text-xs max-w-xs">
              Architecting the future through code. Building scalable, high-performance, and beautiful web applications.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-4">
            <h4 className="text-white font-sans text-sm tracking-widest uppercase mb-2">Navigation</h4>
            <div className="flex flex-col space-y-2">
              <Link href="#skills" className="text-muted/80 hover:text-accent text-sm transition-colors">Skills</Link>
              <Link href="#projects" className="text-muted/80 hover:text-accent text-sm transition-colors">Projects</Link>
              <Link href="#articles" className="text-muted/80 hover:text-accent text-sm transition-colors">Articles</Link>
              <Link href="#about" className="text-muted/80 hover:text-accent text-sm transition-colors">About</Link>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-4">
            <h4 className="text-white font-sans text-sm tracking-widest uppercase mb-2">Connect</h4>
            <div className="flex space-x-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted/80 hover:text-accent transition-colors" aria-label="GitHub">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted/80 hover:text-accent transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted/80 hover:text-accent transition-colors" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

        </div>

        <div className="w-full border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted/50 font-sans text-xs">
            © {currentYear} Timothy Kiige. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-muted/50 font-sans text-xs">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <a href="/sitemap.xml" className="hover:text-white transition-colors">sitemap.xml</a>
          </div>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted/50 font-sans text-xs hover:text-accent transition-colors flex items-center">
            View source on GitHub <ArrowRight size={12} className="ml-1" />
          </a>
        </div>

      </div>
    </footer>
  );
}
