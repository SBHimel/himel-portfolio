"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGsap } from "@/hooks/useGsap";
import { useOrientation } from "@/hooks/useOrientation";
import { Code2, Layout, Server, Database, Wrench } from "lucide-react";

const skills = [
  { name: "Frontend", icon: Layout, tools: ["React", "Next.js", "Tailwind CSS", "GSAP", "Framer Motion"], color: "from-blue-500/30 to-cyan-500/30" },
  { name: "Backend", icon: Server, tools: ["Node.js", "Express.js"], color: "from-green-500/30 to-emerald-500/30" },
  { name: "Database", icon: Database, tools: ["MongoDB", "MongoDB Atlas"], color: "from-emerald-500/30 to-teal-500/30" },
  { name: "Languages", icon: Code2, tools: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"], color: "from-orange-500/30 to-yellow-500/30" },
  { name: "Tools", icon: Wrench, tools: ["Git", "GitHub", "VS Code", "Vercel", "NPM"], color: "from-red-500/30 to-orange-500/30" },
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { beta, gamma } = useOrientation();

  useGsap(() => {
    const items = containerRef.current?.children;
    if (!items) return;

    Array.from(items).forEach((item) => {
      gsap.from(item, {
        opacity: 0,
        y: 30,
        rotateX: -10,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    });
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(card, {
      rotateY: x * 15,
      rotateX: -y * 15,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      rotateY: 0,
      rotateX: 0,
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
  };

  return (
    <section id="skills" className="py-20 lg:py-32 px-6 md:px-20 bg-black/20 relative z-10 h-auto overflow-visible">
      <div className="max-w-7xl mx-auto h-auto overflow-visible">
        <div className="mb-20 text-center">
          <h2 className="headline-font text-3xl md:text-6xl font-bold text-white mb-6">
            Technical <span className="text-secondary">Arsenal</span>
          </h2>
          <p className="text-on-surface-variant text-xl max-w-2xl mx-auto font-light">
            A curated list of technologies I use to bring ideas to life.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000 h-auto overflow-visible">
          {skills.map((skill, i) => (
            <div
              key={i}
              onMouseMove={(e) => handleMouseMove(e, i)}
              onMouseLeave={handleMouseLeave}
              style={{ 
                transformStyle: "preserve-3d",
                transform: `rotateX(${beta * 0.1}deg) rotateY(${gamma * 0.1}deg)`
              }}
              className="glass p-8 rounded-2xl border-white/5 hover:border-secondary/30 transition-all duration-300 group cursor-default"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform`}>
                <skill.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="headline-font text-2xl font-bold text-white mb-4 group-hover:text-secondary transition-colors">{skill.name}</h3>
              <div className="flex flex-wrap gap-2 w-full">
                {skill.tools.map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-white/15 rounded-full text-xs font-mono text-white border border-white/10 whitespace-nowrap">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

