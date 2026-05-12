"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 lg:py-32 px-6 md:px-20 relative">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="headline-font text-3xl md:text-6xl font-bold text-white mb-12 md:mb-20 text-center"
        >
          Educational <span className="text-secondary">Qualification</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative flex justify-center">
          {/* Vertical Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-secondary/80 via-secondary/40 to-transparent origin-top"
          />

          <div className="w-full relative pl-8 md:pl-0">
            {/* Timeline Dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute left-8 md:left-1/2 top-0 -translate-x-1/2 z-10"
            >
              <div className="w-5 h-5 bg-secondary rounded-full border-4 border-background shadow-lg shadow-secondary/40" />
              <div className="absolute inset-0 w-5 h-5 bg-secondary rounded-full animate-ping opacity-30" />
            </motion.div>

            {/* Card */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="md:ml-[calc(50%+2rem)] md:w-[calc(50%-2rem)] w-full"
            >
              <div className="glass p-8 md:p-10 rounded-2xl border-white/5 hover:border-secondary/30 transition-all duration-500 relative group overflow-hidden">
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-secondary/5 blur-[80px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10 space-y-6">
                  {/* Icon & Status Badge */}
                  <div className="flex items-start justify-between">
                    <motion.div
                      initial={{ rotate: -20, opacity: 0 }}
                      whileInView={{ rotate: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="w-14 h-14 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center"
                    >
                      <GraduationCap size={28} className="text-secondary" />
                    </motion.div>
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className="px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-mono uppercase tracking-wider"
                    >
                      Ongoing
                    </motion.span>
                  </div>

                  {/* Degree Title */}
                  <div>
                    <h3 className="headline-font text-2xl md:text-3xl font-bold text-white mb-2">
                      Diploma in Engineering
                    </h3>
                    <p className="text-secondary text-lg font-semibold">
                      Computer Technology
                    </p>
                  </div>

                  {/* Details */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-white/60">
                      <MapPin size={16} className="text-secondary/70 flex-shrink-0" />
                      <span className="text-sm md:text-base">Brahmanbaria Polytechnic Institute</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/60">
                      <Calendar size={16} className="text-secondary/70 flex-shrink-0" />
                      <span className="text-sm md:text-base">2024 — Present</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/60">
                      <BookOpen size={16} className="text-secondary/70 flex-shrink-0" />
                      <span className="text-sm md:text-base">5th Semester · 3rd Year</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="pt-2">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-mono text-white/40 uppercase tracking-wider">Semester Progress</span>
                      <span className="text-xs font-mono text-secondary">5 / 8</span>
                    </div>
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "62.5%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-secondary to-[#A855F7] rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
