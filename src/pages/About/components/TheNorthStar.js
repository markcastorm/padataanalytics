import React from "react";
import { motion } from "framer-motion";
import { Compass, Target, ArrowRight } from "lucide-react";

const TheNorthStar = () => {
  return (
    <section className="relative bg-[#0A0A0A] py-32 md:py-56 px-6 md:px-12 lg:px-24 overflow-hidden">
      
      {/* BACKGROUND DECORATION: ORDER TO CHAOS GRID */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%" className="text-white">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          
          {/* LEFT: THE PROBLEM (Chaos) */}
          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <Compass size={20} className="text-[#3ab5d8]" />
              <span className="font-mono text-[10px] text-[#3ab5d8] tracking-[0.6em] uppercase font-bold">The Problem</span>
            </motion.div>

            <h2 className="text-white text-4xl md:text-6xl font-serif leading-tight tracking-tight">
              Most organizations have a <br />
              <span className="italic text-stone-500 font-light text-3xl md:text-5xl">massive gap</span> <br />
              between data and decision.
            </h2>

            <p className="text-stone-400 text-sm md:text-lg leading-relaxed max-w-md font-light">
              You collect metrics, you track users, and you store logs. But when it's time to grow, you're still relying on guesswork. The noise has become the barrier.
            </p>
          </div>

          {/* RIGHT: THE MISSION (Order) */}
          <div className="space-y-12 lg:pt-32">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 lg:justify-end"
            >
              <span className="font-mono text-[10px] text-[#3ab5d8] tracking-[0.6em] uppercase font-bold">The Solution</span>
              <Target size={20} className="text-[#3ab5d8]" />
            </motion.div>

            <div className="lg:text-right flex flex-col lg:items-end">
              <h3 className="text-white text-3xl md:text-5xl font-serif leading-tight italic mb-8">
                "We make enterprise-grade analytics <br /> accessible to all budgets."
              </h3>
              
              <div className="max-w-md bg-white/5 border border-white/10 p-8 md:p-12 text-left backdrop-blur-sm">
                <p className="text-stone-300 text-sm leading-relaxed mb-8">
                  PA Data Analytics bridges this gap through a combination of technical rigour (Python, SQL) and strategic business communication. We don't just find the numbers; we tell the story that drives revenue.
                </p>
                <div className="flex items-center gap-4 text-[#3ab5d8]">
                  <div className="h-[1px] w-12 bg-[#3ab5d8]" />
                  <span className="text-[10px] uppercase tracking-widest font-bold font-mono">Mission_Locked</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* CENTER DECORATION: THE BRIDGE LINE */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block" />
    </section>
  );
};

export default TheNorthStar;