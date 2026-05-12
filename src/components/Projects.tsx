"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Layers, AlertTriangle, Rocket, Eye } from "lucide-react";
import { GithubIcon } from "./Icons";
import Image from "next/image";

const projects = [
  {
    title: "Opal Tiles Gallery",
    category: "Architecture",
    description: "Premium architectural tile showcase with seamless GSAP transitions.",
    image: "/project-1.png",
    link: "https://tiles-gallery-opal.vercel.app/",
    github: "https://github.com/SBHimel/Tiles-Gallery",
    tech: ["Next.js", "Tailwind"],
    challenges: "Implementing smooth GSAP scroll-triggered animations while keeping performance optimal across devices was tricky. Ensuring the tile grid layout remained pixel-perfect on all screen sizes required extensive responsive testing.",
    futurePlans: "Planning to add a CMS backend so clients can upload and manage their own tile catalogs. Will also integrate a 3D tile preview feature using Three.js for a more immersive experience."
  },
  {
    title: "Pixen Studio",
    category: "Agency",
    description: "Minimalist digital portfolio with fluid Framer Motion animations.",
    image: "/project-2.png",
    link: "https://pixen-pearl.vercel.app/",
    github: "https://github.com/SBHimel/pixen",
    tech: ["React", "Vite"],
    challenges: "Achieving the perfect balance between minimalism and visual richness was the key challenge. Fine-tuning Framer Motion page transitions to feel natural without causing layout shifts required careful orchestration of animation timings.",
    futurePlans: "Looking to add a dark/light mode toggle with smooth theme transitions. Will also implement a blog section with MDX support to showcase design case studies."
  },
  {
    title: "Dragon News",
    category: "Media",
    description: "Full-stack news application with real-time Auth.js integration.",
    image: "/project-3.png",
    link: "https://dragon-news-project-in-next.vercel.app/",
    github: "https://github.com/SBHimel/dragon-news-project-in-next",
    tech: ["Next.js", "Tailwind"],
    challenges: "Integrating Auth.js for secure authentication while handling session management across server and client components was complex. Building the category-based filtering system with server-side rendering required deep understanding of Next.js data fetching.",
    futurePlans: "Will add a bookmark feature so users can save articles for later reading. Planning to implement push notifications for breaking news and a comment system with real-time updates."
  },
  {
    title: "Keen Keeper",
    category: "Productivity",
    description: "Smart task management system with real-time Firebase syncing.",
    image: "/project-4.png",
    link: "https://keen-keeper-created-by-himel.netlify.app/",
    github: "https://github.com/SBHimel/Assignment-7-for-submit",
    tech: ["React", "Firebase"],
    challenges: "Setting up real-time Firebase listeners while avoiding memory leaks and unnecessary re-renders was a significant challenge. Designing an intuitive drag-and-drop interface for task reordering required careful state management.",
    futurePlans: "Planning to add team collaboration features with shared boards and role-based permissions. Will integrate calendar sync and deadline reminders with email notifications."
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

type Project = typeof projects[number];

function DetailsButton({ onClick }: { onClick: (e: React.MouseEvent) => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      layout
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileTap={{ scale: 0.9 }}
      className="relative flex items-center gap-2 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-secondary/50 hover:bg-secondary/10 hover:shadow-[0_0_15px_rgba(249,115,22,0.2)] transition-all duration-300 overflow-hidden"
      style={{ opacity: isHovered ? 1 : 0.6, padding: isHovered ? "10px 16px" : "12px" }}
    >
      <motion.span layout="position">
        <Eye size={16} />
      </motion.span>
      <AnimatePresence>
        {isHovered && (
          <motion.span
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="text-xs font-bold font-mono uppercase tracking-wider whitespace-nowrap overflow-hidden"
          >
            Details
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
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

                  <div className="flex justify-between items-center">
                    {/* Always-visible Details Button */}
                    <div className="flex items-center gap-3">
                      {project.challenges && (
                        <DetailsButton onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }} />
                      )}
                    </div>

                    {/* Hover-only buttons */}
                    <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileTap={{ scale: 0.9 }}
                          className="relative p-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-secondary/50 hover:bg-secondary/10 hover:shadow-[0_0_15px_rgba(249,115,22,0.2)] transition-all duration-300"
                        >
                          <GithubIcon size={16} />
                        </motion.a>
                      )}
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
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedProject(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#0d0d0d] shadow-2xl shadow-secondary/10"
            >
              {/* Header Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-3xl">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
                
                {/* Close Button */}
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white/70 hover:text-white hover:border-secondary/50 transition-all z-20"
                >
                  <X size={18} />
                </motion.button>

                {/* Category Badge */}
                <span className="absolute bottom-6 left-8 px-4 py-1.5 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-xs font-mono uppercase tracking-wider">
                  {selectedProject.category}
                </span>
              </div>

              {/* Modal Body */}
              <div className="p-8 space-y-8">
                {/* Title & Description */}
                <div className="space-y-3">
                  <h3 className="headline-font text-3xl md:text-4xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="text-on-surface-variant text-base leading-relaxed font-light">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                      <Layers size={16} className="text-secondary" />
                    </div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wider font-mono">Technology Stack</h4>
                  </div>
                  <div className="flex flex-wrap gap-2 pl-12">
                    {selectedProject.tech.map(t => (
                      <span key={t} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-mono text-white/70">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Challenges */}
                {selectedProject.challenges && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                        <AlertTriangle size={16} className="text-amber-400" />
                      </div>
                      <h4 className="text-white font-bold text-sm uppercase tracking-wider font-mono">Challenges Faced</h4>
                    </div>
                    <p className="text-on-surface-variant text-sm leading-relaxed font-light pl-12">
                      {selectedProject.challenges}
                    </p>
                  </div>
                )}

                {/* Future Plans */}
                {selectedProject.futurePlans && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                        <Rocket size={16} className="text-purple-400" />
                      </div>
                      <h4 className="text-white font-bold text-sm uppercase tracking-wider font-mono">Future Plans</h4>
                    </div>
                    <p className="text-on-surface-variant text-sm leading-relaxed font-light pl-12">
                      {selectedProject.futurePlans}
                    </p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5">
                  <motion.a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 min-w-[160px] bg-secondary text-white headline-font font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-lg shadow-secondary/20 text-sm"
                  >
                    Live Preview <ArrowUpRight size={16} />
                  </motion.a>
                  {selectedProject.github && (
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 min-w-[160px] bg-white/5 border border-white/10 text-white headline-font font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:border-secondary/50 hover:bg-white/10 transition-all text-sm"
                    >
                      <GithubIcon size={18} /> Source Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
