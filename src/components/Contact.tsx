"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGsap } from "@/hooks/useGsap";
import { Send, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGsap(() => {
    gsap.from(containerRef.current?.children || [], {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
    });
  });

  return (
    <section id="contact-me" className="py-32 px-10 md:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div>
              <h2 className="headline-font text-4xl md:text-6xl font-bold text-white mb-6">
                Let's build <br />
                <span className="text-secondary">something great.</span>
              </h2>
              <p className="text-on-surface-variant text-xl font-light max-w-md leading-relaxed">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-white/60 text-sm font-mono uppercase">Email</p>
                  <p className="text-white text-lg">s.b.himel21@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-white/60 text-sm font-mono uppercase">Location</p>
                  <p className="text-white text-lg">Brahmanbaria, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-10 rounded-3xl border-white/5 relative group">
            <div className="absolute inset-0 bg-secondary/5 blur-[100px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <form className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-mono text-white/60 uppercase">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-secondary/50 transition-colors" placeholder="Tareq Rahman" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-mono text-white/60 uppercase">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-secondary/50 transition-colors" placeholder="tareq@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-mono text-white/60 uppercase">Subject</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-secondary/50 transition-colors" placeholder="Project Inquiry" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-mono text-white/60 uppercase">Message</label>
                <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-secondary/50 transition-colors resize-none" placeholder="How can I help you?"></textarea>
              </div>
              <button className="w-full bg-secondary text-white headline-font font-bold py-5 rounded-xl flex items-center justify-center gap-3 hover:brightness-110 transition-all shadow-xl shadow-secondary/20 group">
                Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
