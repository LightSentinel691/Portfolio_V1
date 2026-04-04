"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

// Mock data (would be replaced by Sanity CMS fetch)
const articles = [
  {
    slug: "optimizing-serverless-cold-starts",
    title: "Optimizing Serverless Cold Starts with AWS Lambda and Node.js",
    excerpt: "Learn how to mitigate cold start latency in serverless environments using provisioned concurrency and execution environment optimizations.",
    date: "April 2, 2026",
    readTime: "8 min read",
    category: "Architecture"
  },
  {
    slug: "building-accessible-web-interfaces",
    title: "Building Accessible Web Interfaces in React",
    excerpt: "A deep dive into WCAG 2.1 guidelines and practical approaches to implementing them in modern React applications.",
    date: "March 15, 2026",
    readTime: "6 min read",
    category: "Frontend"
  },
  {
    slug: "microservices-vs-monoliths",
    title: "Microservices vs. Monoliths: A Practical Guide to Architectural Choices",
    excerpt: "When should a startup adopt microservices? Evaluating trade-offs based on team size, domain complexity, and operational maturity.",
    date: "February 28, 2026",
    readTime: "12 min read",
    category: "Backend"
  }
];

export function Articles() {
  return (
    <section id="articles" className="py-24 bg-zinc-50 dark:bg-[#050505] transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 flex flex-col items-start"
        >
          <span className="text-accent text-sm tracking-[0.3em] font-sans uppercase mb-4 pl-1">
            Blog
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-light tracking-tight text-foreground lg:w-1/2">
            Technical Insights & Thoughts
          </h2>
          <div className="w-24 h-[1px] bg-accent mt-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group border border-muted/10 bg-background hover:border-accent/50 p-8 transition-colors duration-300 flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-sans tracking-widest uppercase text-accent">
                  {article.category}
                </span>
                <div className="flex items-center text-muted text-xs font-sans">
                  <Clock size={12} className="mr-1" />
                  {article.readTime}
                </div>
              </div>
              
              <h3 className="text-2xl font-serif text-foreground mb-4 leading-tight group-hover:text-accent transition-colors">
                <Link href={`/articles/${article.slug}`}>
                  {article.title}
                </Link>
              </h3>
              
              <p className="text-muted font-sans text-sm leading-relaxed mb-8 flex-grow">
                {article.excerpt}
              </p>
              
              <div className="mt-auto border-t border-muted/10 pt-4 flex items-center justify-between">
                <span className="text-muted font-sans text-xs">
                  {article.date}
                </span>
                <Link 
                  href={`/articles/${article.slug}`}
                  className="flex items-center text-foreground font-sans text-xs tracking-widest uppercase group-hover:text-accent transition-colors"
                >
                  Read <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
