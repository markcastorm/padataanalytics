import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const FounderAbout = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax for the portrait
  const yImage = useTransform(scrollYProgress, [0.6, 1], ["0%", "20%"]);
  const opacityText = useTransform(scrollYProgress, [0.7, 0.85], [0, 1]);

  return (
    <section className="relative w-full bg-[#FAF9F6] py-32 md:py-64 px-6 md:px-16 lg:px-24 overflow-hidden border-t border-stone-200">
      
      <div className="max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        
        {/* LEFT: THE PORTRAIT (The Human) */}
        <div className="lg:col-span-5 relative group">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-stone-200 shadow-2xl z-10"
          >
            <motion.img 
              style={{ y: yImage }}
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-full object-cover grayscale contrast-[1.1] brightness-90 group-hover:brightness-100 transition-all duration-1000"
              alt="Founder Portrait"
            />
            {/* Soft overlay to blend into the porcelain background */}
            <div className="absolute inset-0 bg-stone-900/10 pointer-events-none" />
          </motion.div>

          {/* Decorative Framing */}
          <div className="absolute -top-10 -left-10 w-32 h-32 border-t border-l border-stone-300 z-0 hidden md:block" />
          <div className="absolute -bottom-10 -right-10 w-64 h-64 border-b border-r border-stone-200 z-0 hidden md:block" />
        </div>

        {/* RIGHT: THE NARRATIVE (The Mind) */}
        <div className="lg:col-span-7 flex flex-col items-start z-20">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-[10px] uppercase tracking-[0.6em] text-[#3ab5d8] font-bold block mb-12">
              The Architect's Mindset
            </span>
            
            <h2 className="text-[#111] text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.05] tracking-tighter mb-12 max-w-4xl">
              Data is a human language. <br />
              <span className="italic text-stone-400 font-light">I simply translate it.</span>
            </h2>

            <div className="max-w-xl space-y-10">
              <p className="text-stone-600 text-sm md:text-lg leading-relaxed font-light italic">
                "Behind every dataset is a commercial objective or a mission outcome. My role is to remove the fog of technical complexity, providing the clarity required for decisive action."
              </p>
              
              <div className="space-y-4">
                 <p className="text-[#111] text-xs md:text-sm uppercase tracking-[0.2em] font-bold">
                    Patience Anono — Founder & Lead Analyst
                 </p>
                 <p className="text-stone-400 text-[11px] leading-relaxed max-w-sm uppercase tracking-widest font-medium">
                    Nairobi based. Serving a global network of e-commerce brands and NGOs with clinical precision.
                 </p>
              </div>
            </div>

            {/* INTERACTIVE SIGNATURE / CALL TO ACTION */}
            <motion.div 
              style={{ opacity: opacityText }}
              className="mt-20 pt-10 border-t border-stone-200 w-full"
            >
               <div className="flex flex-wrap gap-12">
                  <div className="space-y-1">
                     <p className="text-[9px] uppercase tracking-widest text-stone-400 font-bold">Background</p>
                     <p className="text-[11px] uppercase tracking-widest text-[#111] font-bold">Cybersecurity & Stats</p>
                  </div>
                  <div className="space-y-1">
                     <p className="text-[9px] uppercase tracking-widest text-stone-400 font-bold">Specialism</p>
                     <p className="text-[11px] uppercase tracking-widest text-[#111] font-bold">Predictive Modeling</p>
                  </div>
                  <div className="space-y-1">
                     <p className="text-[9px] uppercase tracking-widest text-stone-400 font-bold">Impact</p>
                     <p className="text-[11px] uppercase tracking-widest text-[#111] font-bold">12+ Global Partners</p>
                  </div>
               </div>

               <div className="mt-16 group inline-block">
                  <a href="#contact" className="flex items-center gap-6">
                    <span className="font-serif text-3xl italic text-stone-300 group-hover:text-[#3ab5d8] transition-colors">Read the full story —</span>
                    <div className="w-12 h-[1px] bg-stone-300 group-hover:w-20 group-hover:bg-[#3ab5d8] transition-all duration-700" />
                  </a>
               </div>
            </motion.div>
          </motion.div>
        </div>

      </div>

      {/* BACKGROUND ACCENT */}
      <div className="absolute bottom-0 right-0 pointer-events-none opacity-[0.03] select-none translate-y-1/2">
         <p className="text-[30vw] font-serif font-bold text-[#111] leading-none">PATIENCE</p>
      </div>

    </section>
  );
};

export default FounderAbout;