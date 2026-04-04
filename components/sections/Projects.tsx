"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Mock data for projects
const projects = [
  {
    slug: "fintech-dashboard",
    title: "FinTech Analytics Dashboard",
    tagline: "Real-time financial data visualization platform for enterprise users.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    image: "/fallback-abstract.webp", // Placeholder
    github: "#",
    demo: "#"
  },
  {
    slug: "ecommerce-platform",
    title: "Headless E-Commerce Platform",
    tagline: "Scalable digital storefront with Sanity CMS and Shopify integration.",
    tags: ["Next.js", "Sanity CMS", "Stripe", "Framer Motion"],
    image: "/fallback-abstract.webp", // Placeholder
    github: "#",
    demo: "#"
  },
  {
    slug: "ai-content-generator",
    title: "AI Content Generator",
    tagline: "SaaS application utilizing OpenAI API to generate marketing copy.",
    tags: ["Node.js", "React", "OpenAI", "PostgreSQL"],
    image: "/fallback-abstract.webp", // Placeholder
    github: "#",
    demo: "#"
  },
  {
    slug: "logistics-erp",
    title: "Supply Chain ERP System",
    tagline: "Internal operational tool for tracking global logistics and shipments.",
    tags: ["Vue.js", "Laravel", "MySQL", "Docker"],
    image: "/fallback-abstract.webp", // Placeholder
    github: "#",
    demo: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-background transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 flex flex-col items-start"
        >
          <span className="text-accent text-sm tracking-[0.3em] font-sans uppercase mb-4 pl-1">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-light tracking-tight text-foreground">
            Featured Projects
          </h2>
          <div className="w-24 h-[1px] bg-accent mt-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col"
            >
              <Link href={`/projects/${project.slug}`} className="block relative overflow-hidden aspect-[4/3] mb-6 bg-zinc-900 border border-white/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100 blur-sm group-hover:blur-none grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </Link>
              
              <div className="flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-sans tracking-wider uppercase text-muted border border-muted/30 px-2 py-1 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-3xl font-serif text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted font-sans text-base leading-relaxed mb-6 flex-grow">
                  {project.tagline}
                </p>
                
                <div className="flex items-center gap-6 mt-auto">
                  <Link 
                    href={`/projects/${project.slug}`}
                    className="flex items-center gap-2 text-foreground font-sans text-sm tracking-widest uppercase hover:text-accent transition-colors"
                  >
                    Case Study <ArrowUpRight size={16} />
                  </Link>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted font-sans text-sm tracking-widest uppercase hover:text-foreground transition-colors"
                  >
                    Live Demo <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
