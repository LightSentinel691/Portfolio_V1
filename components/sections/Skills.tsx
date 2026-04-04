"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend Engineering",
    skills: [
      { name: "React / Next.js", desc: "Server-side rendering & static generation" },
      { name: "TypeScript", desc: "Type-safe robust application architecture" },
      { name: "Tailwind CSS", desc: "Utility-first responsive design systems" },
      { name: "Vue.js", desc: "Reactive progressive web interfaces" },
      { name: "Three.js / R3F", desc: "Immersive 3D web experiences" },
      { name: "HTML5 & CSS3/SASS", desc: "Semantic structure and modular styling" },
    ]
  },
  {
    title: "Backend Architecture",
    skills: [
      { name: "Node.js / Express", desc: "High-performance non-blocking APIs" },
      { name: "Python / Django", desc: "Rapid framework-driven development" },
      { name: "PHP / Laravel", desc: "Robust MVC monolithic architecture" },
      { name: "Serverless Auth", desc: "OAuth, JWT, NextAuth integrations" },
    ]
  },
  {
    title: "Database Systems",
    skills: [
      { name: "PostgreSQL", desc: "Advanced relational database management" },
      { name: "MySQL", desc: "Reliable structured data storage" },
      { name: "MongoDB", desc: "Flexible NoSQL document databases" },
      { name: "Firebase", desc: "Real-time updates and cloud storage" },
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", desc: "Version control and CI/CD workflows" },
      { name: "Docker", desc: "Containerized reproducible environments" },
      { name: "AWS", desc: "Cloud infrastructure and serverless scaling" },
      { name: "Vercel / Netlify", desc: "Continuous deployment and edge networks" },
      { name: "Figma", desc: "UI/UX wireframing and prototyping" },
    ]
  }
];

// Stagger variants for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-zinc-50 dark:bg-[#050505] transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 flex flex-col items-start"
        >
          <span className="text-accent text-sm tracking-[0.3em] font-sans uppercase mb-4 pl-1">
            Expertise
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-light tracking-tight text-foreground">
            My Core Technologies
          </h2>
          <div className="w-24 h-[1px] bg-accent mt-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-x-20 lg:gap-y-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col"
            >
              <h3 className="text-2xl font-serif text-foreground mb-8 border-b border-muted/20 pb-4">
                {category.title}
              </h3>
              <ul className="space-y-6">
                {category.skills.map((skill, i) => (
                  <motion.li key={i} variants={itemVariants} className="group flex flex-col">
                    <span className="text-foreground font-sans font-medium text-lg mb-1 group-hover:text-accent transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-muted font-sans text-sm tracking-wide">
                      {skill.desc}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
