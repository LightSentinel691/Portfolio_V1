"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Download, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", href: "#hero" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Articles", href: "#articles" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  
  // Mounted state to avoid hydration mismatch for theme toggle
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-white/10 shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="#hero" className="flex items-center group">
          <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center group-hover:bg-accent group-hover:text-black group-hover:border-accent transition-colors duration-300">
            <span className="font-serif font-bold text-sm tracking-widest pl-[1px]">TK</span>
          </div>
        </Link>

        {/* Center: Desktop Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-sans uppercase tracking-widest opacity-80 hover:opacity-100 hover:text-accent transition-all duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-accent hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="/cv.pdf"
            download
            className="text-sm font-sans uppercase tracking-widest opacity-80 hover:opacity-100 hover:text-accent transition-colors duration-300 flex items-center gap-2 border border-transparent hover:border-accent px-4 py-2 rounded-none"
          >
            <Download size={16} /> CV
          </a>
          
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {mounted && (
              theme === "dark" ? <Sun size={18} /> : <Moon size={18} />
            )}
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {mounted && (
              theme === "dark" ? <Sun size={18} /> : <Moon size={18} />
            )}
          </button>
          <button
            className="p-2 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Mobile Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex flex-col justify-center px-8"
          >
            <button
              className="absolute top-6 right-8 p-2 text-foreground"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close Mobile Menu"
            >
              <X size={32} />
            </button>

            <nav className="flex flex-col space-y-8 items-start">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-serif text-foreground hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="pt-8 w-full border-t border-white/10 mt-8">
                <a
                  href="/cv.pdf"
                  download
                  className="flex items-center gap-3 text-xl font-sans text-foreground hover:text-accent transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Download size={20} /> Download CV
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
