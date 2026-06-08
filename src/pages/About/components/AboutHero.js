import React from "react";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="relative w-full min-h-[90vh] bg-[#FDFDFC] flex items-center pt-24 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden">
      
      {/* 1. ARCHITECTURAL GRID LINES (Subtle 1px Texture) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-black" />
        <div className="absolute top-0 left-2/4 w-[1px] h-full bg-black" />
        <div className="absolute top-0 left-3/4 w-[1px] h-full bg-black" />
      </div>

      <div className="max-w-[1700px] mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: THE MANIFESTO */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="font-mono text-[10px] text-stone-400 tracking-[0.6em] uppercase font-bold">
                Protocol_01 // Identity
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#111] text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.95] tracking-tighter mb-12"
            >
              Intelligence with a <br />
              <span className="italic text-stone-300 font-light">Human Signature.</span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="max-w-xl border-l border-stone-200 pl-8"
            >
              <p className="text-stone-500 text-lg md:text-xl font-light leading-relaxed italic mb-8">
                "We dismantle the technical noise that surrounds modern organizations to reveal the clinical reality of their growth."
              </p>
              <p className="text-stone-400 font-mono text-[9px] uppercase tracking-[0.4em] leading-loose">
                PA Data Analytics bridges the gap between raw datasets and decisive action through advanced modeling and strategic storytelling.
              </p>
            </motion.div>
          </div>

          {/* RIGHT: THE ABSTRACT SYMBOL (The Bridge) */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative aspect-[4/5] grayscale contrast-125 border border-stone-100 shadow-2xl overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-[3s]"
                alt="Architectural structure representing stability"
              />
              {/* Subtle film grain overlay */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
            </motion.div>

            {/* TECHNICAL STAMP */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 border border-stone-100 shadow-xl hidden lg:block">
               <p className="font-mono text-[8px] uppercase tracking-widest text-stone-400 mb-1">Base_Operations</p>
               <p className="text-[#111] text-xs font-bold tracking-widest">NAIROBI, KENYA // 1.2921° S</p>
            </div>
          </div>

        </div>
      </div>

      {/* BACKGROUND ACCENT: OVERSIZED SERIAL */}
      <div className="absolute bottom-10 right-10 opacity-[0.02] pointer-events-none select-none">
        <h3 className="text-[15vw] font-serif font-black uppercase italic leading-none">MANIFESTO</h3>
      </div>
    </section>
  );
};

export default AboutHero;