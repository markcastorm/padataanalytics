import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const FounderManifesto = () => {
  const { scrollYProgress } = useScroll();
  // Image moves slower for a parallax effect
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section className="relative w-full bg-[#FAF9F6] py-32 md:py-64 px-6 md:px-16 overflow-hidden">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
        
        {/* LEFT: THE PORTRAIT (The Human) */}
        <div className="lg:col-span-5 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="aspect-[4/5] bg-stone-200 overflow-hidden rounded-sm relative z-10 shadow-2xl"
          >
            <motion.img 
              style={{ y: yImage }}
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000" 
              className="w-full h-full object-cover grayscale brightness-90"
              alt="Patience Anono - Founder"
            />
          </motion.div>
          
          {/* Subtle Background Shape */}
          <div className="absolute -top-10 -left-10 w-40 h-40 border-l border-t border-stone-200 z-0" />
          
          {/* Label */}
          <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-xl z-20 hidden md:block">
            <p className="text-[10px] uppercase tracking-[0.4em] text-stone-400 font-bold mb-1">Position</p>
            <p className="font-serif text-[#111] text-lg italic leading-none">Lead Architect</p>
          </div>
        </div>

        {/* RIGHT: THE STATEMENT (The Mind) */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-[10px] uppercase tracking-[0.6em] text-[#3ab5d8] font-bold block mb-12">
              The Human Element
            </span>
            
            <h2 className="text-[#111] text-4xl md:text-7xl font-serif leading-[1.1] mb-12 tracking-tight">
              Data is a human language. <br />
              <span className="italic text-stone-400 font-light text-3xl md:text-6xl">I simply translate it.</span>
            </h2>

            <div className="max-w-xl space-y-8">
              <p className="text-stone-600 text-sm md:text-lg leading-loose font-light">
                Behind every algorithm and every automated dashboard is a commercial objective. I founded PA Analytics to bridge the gap between technical complexity and the human intuition required to scale a brand.
              </p>
              
              <p className="text-stone-500 text-xs md:text-sm uppercase tracking-widest leading-relaxed">
                Nairobi-born. Data-driven. <br /> 
                Specializing in Marketing Intelligence and NGO Impact Reporting for those who value absolute clarity.
              </p>
            </div>

            {/* THE SIGN-OFF */}
            <div className="mt-16">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mb-4"
              >
                {/* A sophisticated script font or just elegant italics */}
                <p className="font-serif text-3xl md:text-4xl italic text-[#111]">Patience Anono</p>
              </motion.div>
              <div className="w-20 h-[1px] bg-[#3ab5d8]" />
            </div>

            {/* CREDENTIALS STRIP */}
            <div className="mt-20 flex gap-12 border-t border-stone-200 pt-10 w-full">
               <div>
                  <p className="text-[9px] uppercase tracking-widest font-bold text-stone-300 mb-2">Background</p>
                  <p className="text-[11px] text-stone-500 font-bold uppercase">Cybersecurity / Stats</p>
               </div>
               <div>
                  <p className="text-[9px] uppercase tracking-widest font-bold text-stone-300 mb-2">Partners</p>
                  <p className="text-[11px] text-stone-500 font-bold uppercase">12+ Global Teams</p>
               </div>
               <div>
                  <p className="text-[9px] uppercase tracking-widest font-bold text-stone-300 mb-2">Location</p>
                  <p className="text-[11px] text-stone-500 font-bold uppercase">Nairobi / Remote</p>
               </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default FounderManifesto;