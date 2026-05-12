"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Opal Tiles Gallery",
    category: "Architecture",
    description: "Premium architectural tile showcase with seamless GSAP transitions.",
    image: "/project-1.png",
    link: "https://tiles-gallery-opal.vercel.app/",
    tech: ["Next.js", "Tailwind"]
  },
  {
    title: "Pixen Studio",
    category: "Agency",
    description: "Minimalist digital portfolio with fluid Framer Motion animations.",
    image: "/project-2.png",
    link: "https://pixen-pearl.vercel.app/",
    tech: ["React", "Vite"]
  },
  {
    title: "Dragon News",
    category: "Media",
    description: "Full-stack news application with real-time Auth.js integration.",
    image: "/project-3.png",
    link: "https://dragon-news-project-in-next.vercel.app/",
    tech: ["Next.js", "Tailwind"]
  },
  {
    title: "Keen Keeper",
    category: "Productivity",
    description: "Smart task management system with real-time Firebase syncing.",
    image: "/project-4.png",
    link: "https://keen-keeper-created-by-himel.netlify.app/",
    tech: ["React", "Firebase"]
  },
  {
    title: "PH Play Store",
    category: "Showcase",
    description: "Interactive application hub built with performant vanilla JS.",
    image: "/project-5.png",
    link: "https://ph-play-store-created-by-himel.netlify.app/",
    tech: ["JavaScript", "CSS"]
  },
  {
    title: "Book Vibe",
    category: "E-Library",
    description: "Dynamic library manager with React Context and LocalStorage.",
    image: "/project-6.png",
    link: "https://book-vibe-created-by-himel.netlify.app/",
    tech: ["React", "Tailwind"]
  },
  {
    title: "Lumina SaaS",
    category: "Dashboard",
    description: "High-performance data visualization platform for modern SaaS.",
    image: "/project-7.png",
    link: "https://incandescent-sunshine-8902d7.netlify.app/",
    tech: ["Vue", "Chart.js"]
  },
  {
    title: "Spontaneous 3D",
    category: "Portfolio",
    description: "Immersive 3D personal brand showcase using Three.js R3F.",
    image: "/project-8.png",
    link: "https://spontaneous-profiterole-c33b49.netlify.app/",
    tech: ["Three.js", "React"]
  }
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="py-20 lg:py-32 px-6 md:px-20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 px-4">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="headline-font text-4xl md:text-7xl font-bold text-white tracking-tighter">
              Selected <span className="text-secondary drop-shadow-[0_0_20px_rgba(249,115,22,0.3)]">Works</span>
            </h2>
            <p className="text-on-surface-variant text-xl max-w-xl font-light">
              Designing digital masterpieces with code and creativity.
            </p>
          </div>
          
          <motion.button 
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll(!showAll)}
            className="group relative px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white headline-font text-sm uppercase tracking-widest overflow-hidden transition-all hover:border-secondary/50"
          >
            <span className="relative z-10 font-bold">
              {showAll ? "Show Less" : "View All Projects"}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity" />
          </motion.button>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.link}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileTap={{ scale: 0.98 }}
                className="group flex flex-col gap-6 cursor-pointer"
              >
                {/* Image Container with Glow */}
                <div className="relative aspect-[16/9] overflow-hidden rounded-[2.5rem] p-px bg-gradient-to-br from-white/10 to-transparent transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(249,115,22,0.15)] group-hover:from-secondary/30 group-hover:to-purple-500/30">
                  <div className="relative w-full h-full overflow-hidden rounded-[2.45rem] bg-background">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Number Index */}
                    <span className="absolute top-6 right-8 text-white/10 font-black text-6xl headline-font select-none pointer-events-none group-hover:text-white/20 transition-colors">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="px-4 space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <h3 className="headline-font text-2xl md:text-3xl font-bold text-white transition-colors group-hover:text-secondary">
                        {project.title}
                      </h3>
                      <p className="text-on-surface-variant font-medium text-sm lg:text-base line-clamp-1 opacity-60 group-hover:opacity-100 transition-opacity">
                        {project.description}
                      </p>
                    </div>
                    <span className="hidden lg:block text-white/20 font-mono text-xs uppercase tracking-widest pt-2">
                      {project.category}
                    </span>
                  </div>

                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                  >
                    <div className="flex gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-mono text-white/40">
                          {t}
                        </span>
                      ))}
                    </div>
                    
                    <motion.a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileTap={{ scale: 0.9 }}
                      className="relative p-[1px] rounded-full bg-gradient-to-r from-secondary/50 to-purple-500/50 group/btn transition-all hover:scale-105"
                    >
                      <div className="relative px-6 py-2.5 rounded-full bg-background transition-all group-hover/btn:bg-transparent">
                        <span className="relative z-10 text-xs font-bold text-white flex items-center gap-2">
                          Live Preview <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </span>
                      </div>
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
