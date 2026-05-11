"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGsap } from "@/hooks/useGsap";
import { Code2, Layout, Server, Database, Wrench } from "lucide-react";

const skills = [
  { name: "Frontend", icon: Layout, tools: ["React", "Next.js", "Tailwind CSS", "GSAP", "Framer Motion"], color: "from-blue-500/20 to-cyan-500/20" },
  { name: "Backend", icon: Server, tools: ["Node.js", "Express.js"], color: "from-green-500/20 to-emerald-500/20" },
  { name: "Database", icon: Database, tools: ["MongoDB", "MongoDB Atlas"], color: "from-emerald-500/20 to-teal-500/20" },
  { name: "Languages", icon: Code2, tools: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"], color: "from-orange-500/20 to-yellow-500/20" },
  { name: "Tools", icon: Wrench, tools: ["Git", "GitHub", "VS Code", "Vercel", "NPM"], color: "from-red-500/20 to-orange-500/20" },
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGsap(() => {
    gsap.from(containerRef.current?.children || [], {
      opacity: 0,
      y: 50,
      rotateX: -15,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
    });
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
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
    <section id="skills" className="py-32 px-10 md:px-20 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="headline-font text-4xl md:text-6xl font-bold text-white mb-6">
            Technical <span className="text-secondary">Arsenal</span>
          </h2>
          <p className="text-on-surface-variant text-xl max-w-2xl mx-auto font-light">
            A curated list of technologies I use to bring ideas to life.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {skills.map((skill, i) => (
            <div
              key={i}
              onMouseMove={(e) => handleMouseMove(e, i)}
              onMouseLeave={handleMouseLeave}
              style={{ transformStyle: "preserve-3d" }}
              className="glass p-8 rounded-2xl border-white/5 hover:border-secondary/30 transition-colors group cursor-default"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform`}>
                <skill.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="headline-font text-2xl font-bold text-white mb-4">{skill.name}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.tools.map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-on-surface-variant border border-white/5">
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
