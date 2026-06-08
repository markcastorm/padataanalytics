import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const FounderAbout = () => {
  return (
    <section className="relative bg-[#FDFDFC] py-32 md:py-56 px-6 md:px-12 lg:px-24 overflow-hidden">
      
      {/* 1. ARCHITECTURAL GRID (Subtle 1px Lines) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-black" />
        <div className="absolute top-0 left-3/4 w-[1px] h-full bg-black" />
      </div>

      <div className="max-w-[1700px] mx-auto relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* LEFT SIDE: THE CINEMATIC PORTRAIT */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden grayscale contrast-125 shadow-2xl">
              <motion.img 
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover"
                alt="Patience Anono - Lead Analyst"
              />
              {/* Overlay for depth */}
              <div className="absolute inset-0 bg-black/5 mix-blend-multiply" />
            </div>
            
            {/* Metadata Footer for Image */}
            <div className="mt-8 flex justify-between items-end">
               <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-stone-400 mb-2">Ref_001 // Personnel</p>
                  <p className="text-[#111] text-lg font-serif">Patience Anono</p>
                  <p className="text-stone-500 text-[10px] uppercase tracking-widest">Founder & Lead Analyst</p>
               </div>
               <div className="text-right">
                  <p className="font-mono text-[8px] uppercase tracking-widest text-stone-300">Nairobi, Kenya</p>
               </div>
            </div>
          </div>

          {/* RIGHT SIDE: THE EDITORIAL STORY */}
          <div className="lg:col-span-7 lg:pt-20">
            
            {/* THE "VOGUE" QUOTE (Section 3.5 Audit) */}
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[#111] text-5xl md:text-8xl font-serif leading-[1.05] tracking-tighter mb-16"
            >
              Data is cold. <br />
              <span className="italic text-stone-300 font-light">Decisions are human.</span>
            </motion.h2>

            <div className="max-w-xl space-y-12">
              
              {/* THE "GAP" STORY (Section 4.5 Audit) */}
              <div className="space-y-6">
                <p className="text-stone-500 font-mono text-[10px] uppercase tracking-[0.5em] font-bold">The Philosophy</p>
                <p className="text-[#111] text-lg md:text-2xl font-light leading-relaxed">
                  "Most organizations have a massive gap between the data they collect and the decisions they make. I built PA Analytics to bridge that gap through technical rigour and strategic storytelling."
                </p>
              </div>

              <div className="space-y-8 border-t border-stone-100 pt-12">
                <p className="text-stone-500 text-sm md:text-base leading-loose">
                  As the <span className="text-[#111] font-bold">Expert Guide</span>, Patience combines high-level data science with business consulting. Whether scaling e-commerce profit or proving NGO social impact, she brings order to chaos, providing the stability required for growth.
                </p>

                <div className="flex flex-wrap gap-12">
                   <div className="space-y-2">
                      <p className="font-mono text-[8px] uppercase tracking-widest text-stone-400 font-bold">Technical Stack</p>
                      <p className="text-[10px] uppercase font-bold tracking-widest text-[#111]">Python / SQL / Power BI</p>
                   </div>
                   <div className="space-y-2">
                      <p className="font-mono text-[8px] uppercase tracking-widest text-stone-400 font-bold">Global Scale</p>
                      <p className="text-[10px] uppercase font-bold tracking-widest text-[#111]">12+ International Entities</p>
                   </div>
                </div>

                {/* FINAL CALL TO ACTION */}
                <div className="pt-10">
                   <button className="group flex items-center gap-8 bg-[#111] text-white px-12 py-6 hover:bg-stone-800 transition-all duration-500">
                      <span className="text-[10px] uppercase tracking-[0.5em] font-bold">Connect with the Lead Analyst</span>
                      <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                   </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* BACKGROUND DECORATION: OVERSIZED SERIAL NUMBER */}
      <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
         <h3 className="text-[30vw] font-serif font-black uppercase italic whitespace-nowrap leading-none">PA_ANALYTICS</h3>
      </div>
    </section>
  );
};

export default FounderAbout;