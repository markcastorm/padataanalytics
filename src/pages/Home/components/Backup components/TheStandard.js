import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const values = [
  {
    id: "accuracy",
    title: "Accuracy",
    tagline: "The Clinical Scalpel",
    desc: "We never guess. Every insight we deliver is cross-validated through three layers of data cleaning. Accuracy is our primary currency.",
    detail: "ISO 27001 Compliant / Verified Datasets"
  },
  {
    id: "speed",
    title: "Speed",
    tagline: "Velocity of Decision",
    desc: "Data is perishable. We build automated pipelines that transform real-time ad spend into immediate strategy, not last week's news.",
    detail: "Automated API Integration / Real-time Sync"
  },
  {
    id: "integrity",
    title: "Integrity",
    tagline: "Unbiased Evidence",
    desc: "We tell you what the data actually says, even when it challenges your marketing assumptions. Truth over comfort, always.",
    detail: "Independent Audit Standard"
  },
  {
    id: "clarity",
    title: "Clarity",
    tagline: "The Final Lens",
    desc: "Complexity is easy; clarity is hard. We translate millions of rows into a single narrative that a CEO can act on in 10 seconds.",
    detail: "Executive Narrative Framework"
  }
];

const TheStandard = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="relative w-full bg-white py-32 md:py-60 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-stone-100">
      
      {/* 1. SECTION HEADER */}
      <div className="max-w-[1800px] mx-auto mb-24 md:mb-40">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-12 h-[1px] bg-[#3ab5d8]"></div>
          <p className="text-[10px] uppercase tracking-[0.6em] text-stone-400 font-bold">The Standard</p>
        </motion.div>
        <h2 className="text-[#111] text-5xl md:text-8xl font-serif leading-[1.05] tracking-tighter">
          The Logic of <br /> <span className="italic text-stone-300 font-light">Excellence.</span>
        </h2>
      </div>

      {/* 2. INTERACTIVE VALUE COLUMNS */}
      <div className="max-w-[1800px] mx-auto flex flex-col lg:flex-row h-auto lg:h-[600px] border-t border-stone-200">
        {values.map((val, idx) => (
          <div
            key={val.id}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            className="flex-1 relative border-b lg:border-b-0 lg:border-r border-stone-200 p-10 md:p-12 flex flex-col justify-between group transition-all duration-700 hover:bg-stone-50"
          >
            {/* Value ID */}
            <div className="flex justify-between items-start">
               <span className="font-mono text-[10px] text-stone-300 font-bold uppercase tracking-widest italic group-hover:text-[#3ab5d8] transition-colors">
                 Criteria // 0{idx + 1}
               </span>
               <div className={`w-2 h-2 rounded-full bg-[#3ab5d8] transition-transform duration-500 ${hovered === idx ? 'scale-150 animate-pulse' : 'scale-0'}`} />
            </div>

            {/* Main Title - Magnetic Feel */}
            <div className="relative">
              <h3 className={`text-4xl md:text-6xl font-serif transition-all duration-700 ${hovered === idx ? 'text-[#111] -translate-y-4' : 'text-stone-200 opacity-60'}`}>
                {val.title}
              </h3>
              
              <AnimatePresence>
                {hovered === idx && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-4"
                  >
                    <p className="text-[#3ab5d8] text-[10px] uppercase tracking-[0.4em] font-bold italic">
                      {val.tagline}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Description - Fades in on Hover */}
            <div className="mt-20">
               <p className={`text-stone-500 text-sm md:text-base leading-relaxed transition-all duration-700 ${hovered === idx ? 'opacity-100' : 'opacity-0 transform translate-y-4'}`}>
                 {val.desc}
               </p>
               
               <div className={`mt-8 pt-8 border-t border-stone-200 transition-all duration-1000 ${hovered === idx ? 'opacity-100' : 'opacity-0'}`}>
                  <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-stone-400">
                    Verification Method:
                  </p>
                  <p className="text-[11px] text-[#111] font-medium uppercase tracking-widest mt-1">
                    {val.detail}
                  </p>
               </div>
            </div>

            {/* Background Accent Numbers */}
            <div className="absolute bottom-0 right-0 pointer-events-none p-4 opacity-[0.05] group-hover:opacity-10 transition-opacity">
               <span className="font-serif italic text-9xl text-[#111]">0{idx + 1}</span>
            </div>
          </div>
        ))}
      </div>

      {/* 3. FINAL SUMMARY THOUGHT */}
      <div className="max-w-[1800px] mx-auto mt-24 flex flex-col md:flex-row justify-between items-center opacity-40">
         <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-stone-400">Data &rarr; Decisions &rarr; Growth</p>
         <div className="h-[1px] flex-1 bg-stone-200 mx-10 hidden md:block"></div>
         <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-stone-400 italic">Clinical / Evidence / Impact</p>
      </div>

    </section>
  );
};

export default TheStandard;