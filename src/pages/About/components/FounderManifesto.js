import React from "react";
import { motion } from "framer-motion";
import { Quote, ArrowUpRight } from "lucide-react";

const FounderManifesto = () => {
  return (
    <section className="relative bg-[#FDFDFC] py-32 md:py-56 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-stone-100">
      
      {/* 1. BACKGROUND TEXTURE (Ultra-subtle grid) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: `radial-gradient(#111 1px, transparent 0)`, backgroundSize: '40px 40px' }} 
      />

      <div className="max-w-[1700px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-32 items-center">
          
          {/* LEFT: THE PHILOSOPHY (6 Columns) */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-12"
            >
              <div className="p-2 bg-stone-100 rounded-full">
                <Quote size={20} className="text-stone-400" fill="currentColor" />
              </div>
              <span className="font-mono text-[10px] text-stone-400 tracking-[0.5em] uppercase font-bold">The Expert Guide // Persona</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[#111] text-4xl md:text-7xl font-serif leading-[1.1] tracking-tighter mb-16"
            >
              Data is cold. <br />
              <span className="italic text-stone-300 font-light text-3xl md:text-6xl">Decisions are human.</span>
            </motion.h2>

            <div className="max-w-2xl space-y-12">
              <div className="space-y-8 border-l-2 border-stone-100 pl-10">
                <p className="text-[#111] text-xl md:text-2xl font-light leading-relaxed">
                  "Most organizations have a massive gap between the data they collect and the decisions they make. PA Data Analytics exists to bridge that gap through technical rigour and strategic storytelling."
                </p>
                <p className="text-stone-500 text-sm md:text-base leading-loose font-medium">
                  People hire Patience Anono for <span className="text-[#111] font-bold">peace of mind</span>. While the technology is clinical—Python models, SQL extractions, and statistical significance—the outcome is always about providing the stability required for sustainable growth.
                </p>
              </div>

              {/* TECHNICAL CREDENTIALS BOX */}
              <div className="grid grid-cols-2 gap-12 pt-12 border-t border-stone-100">
                <div className="space-y-2">
                  <p className="font-mono text-[8px] uppercase tracking-widest text-stone-400 font-bold">Role</p>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-[#111]">Lead Analyst & Founder</p>
                </div>
                <div className="space-y-2">
                  <p className="font-mono text-[8px] uppercase tracking-widest text-stone-400 font-bold">Specialism</p>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-[#111]">Predictive Intelligence</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: THE CINEMATIC PROFILE (5 Columns) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] overflow-hidden grayscale contrast-125 border border-stone-100 shadow-2xl">
              <motion.img 
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover brightness-90"
                alt="Patience Anono"
              />
              <div className="absolute inset-0 bg-stone-900/5 mix-blend-multiply" />
            </div>

            {/* FLOATING SIGN-OFF */}
            <div className="absolute -bottom-8 -right-8 bg-white p-10 shadow-2xl border border-stone-50 hidden md:block">
               <p className="text-[#111] text-2xl font-serif italic mb-2 font-medium">Patience Anono</p>
               <div className="flex items-center gap-4">
                  <div className="h-[1px] w-8 bg-stone-300" />
                  <p className="text-stone-400 font-mono text-[8px] uppercase tracking-widest">Bridging The Gap</p>
               </div>
            </div>
          </div>

        </div>
      </div>

      {/* BACKGROUND DECORATION: LARGE SERIF OVERLAY */}
      <div className="absolute bottom-10 left-10 opacity-[0.02] pointer-events-none select-none">
        <h3 className="text-[18vw] font-serif font-black uppercase italic leading-none">SIGNATURE</h3>
      </div>
    </section>
  );
};

export default FounderManifesto;