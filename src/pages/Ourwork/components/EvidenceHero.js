import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Terminal, ShieldCheck, Database, Activity, Target, ChevronDown } from "lucide-react";

const EvidenceHero = () => {
  const [count, setCount] = useState(0);
  const { scrollY } = useScroll();

  // Smooth parallax for depth
  const yWatermark = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityFade = useTransform(scrollY, [0, 300], [1, 0]);

  // High-precision count-up logic
  useEffect(() => {
    let start = 0;
    const end = 722;
    const duration = 2500;
    let timer = setInterval(() => {
      start += 7;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, duration / (end / 7));
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#050505] flex flex-col justify-center pt-32 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      
      {/* 1. BACKGROUND LAYER (The Technical Void) */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          style={{ y: yWatermark }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] select-none"
        >
          <h2 className="text-[35vw] font-serif font-black italic text-white leading-none">ARCHIVE</h2>
        </motion.div>
        
        {/* Fine Grain and Grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '80px 80px' }} />
      </div>

      <div className="max-w-[1800px] mx-auto w-full relative z-10">
        
        {/* MAIN LAYOUT GRID */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* LEFT: THE EDITORIAL CONTENT */}
          <div className="lg:col-span-6 space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex items-center gap-4"
            >
               <div className="w-1.5 h-1.5 rounded-full bg-stone-400 animate-pulse" />
               <span className="font-mono text-[10px] text-stone-500 tracking-[0.5em] uppercase font-bold">Success_Registry // Protocol_03</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-white text-6xl md:text-8xl xl:text-[10rem] font-serif leading-[0.85] tracking-tighter"
            >
              Proven <br /> 
              <span className="italic text-stone-600 font-light">Capital.</span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="max-w-md border-l border-white/10 pl-8 space-y-8"
            >
               <p className="text-stone-400 text-lg md:text-xl font-light leading-relaxed italic">
                  "We dismantle the complexity of fragmented ad-stacks to reveal the clinical reality of your commercial growth."
               </p>
               <div className="flex items-center gap-4 text-stone-600">
                  <Database size={16} strokeWidth={1} />
                  <div className="h-[1px] w-12 bg-white/10" />
                  <span className="font-mono text-[9px] uppercase tracking-widest">Verified_Database: 07_Case_Assets</span>
               </div>
            </motion.div>
          </div>

          {/* RIGHT: THE HOLOGRAPHIC ARTIFACT (Responsive Frame) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="relative w-full max-w-[500px] aspect-[4/5] bg-stone-900 border border-white/10 overflow-hidden shadow-2xl"
            >
               {/* Background Grainy Image */}
               <img 
                 src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop" 
                 className="w-full h-full object-cover grayscale brightness-[0.3] contrast-[1.2]"
                 alt="Technical Architecture"
               />
               
               {/* CENTERING THE NUMBER ON ALL SCREENS */}
               <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <p className="font-mono text-[10px] text-stone-500 tracking-[0.4em] mb-4 uppercase">Commercial_Integrity</p>
                  <h3 className="text-white text-7xl md:text-9xl font-serif leading-none tracking-tighter italic">
                    ${count}K<span className="text-stone-700 not-italic">+</span>
                  </h3>
                  <div className="mt-12 flex flex-col items-center gap-4">
                     <div className="w-[1px] h-16 bg-gradient-to-b from-white/20 to-transparent" />
                     <span className="font-mono text-[9px] text-stone-400 uppercase tracking-[0.4em]">Audit_Result // Global</span>
                  </div>
               </div>

               {/* TECHNICAL HUD OVERLAYS */}
               <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none opacity-20">
                  <div className="flex justify-between items-start">
                     <Terminal size={14} />
                     <ShieldCheck size={14} />
                  </div>
                  <div className="flex justify-between items-end">
                     <Activity size={14} />
                     <span className="font-mono text-[8px] uppercase tracking-widest">Awaiting_Analysis</span>
                  </div>
               </div>
            </motion.div>
          </div>

        </div>

        {/* 2. THE RESPONSIVE METADATA FOOTER (FIXED THE OVERLAP) */}
        <div className="mt-20 pt-10 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
           <MetadataBlock label="System_Coord" val="1.2921° S // 36.8219° E" />
           <MetadataBlock label="Base_Operations" val="Nairobi // Global" />
           <MetadataBlock label="Security_Status" val="Active_Encryption" />
           <MetadataBlock label="Auth_Registry" val="07_Verified_Units" />
        </div>

      </div>

      {/* SCROLL CUE */}
      <div className="absolute bottom-6 right-6 hidden md:block">
         <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }} className="flex items-center gap-4">
            <span className="font-mono text-[8px] uppercase tracking-widest text-stone-600">Trace_Evidence</span>
            <ChevronDown size={14} className="text-stone-700" />
         </motion.div>
      </div>

    </section>
  );
};

// Reusable Sub-component for the footer metadata to ensure responsiveness
const MetadataBlock = ({ label, val }) => (
  <div className="flex flex-col gap-3">
    <p className="font-mono text-[9px] text-stone-600 uppercase tracking-widest font-bold">
      {label}
    </p>
    <div className="flex items-center gap-3">
      <div className="w-1.5 h-1.5 rounded-full bg-stone-700" />
      <p className="text-white font-mono text-[11px] tracking-widest uppercase">
        {val}
      </p>
    </div>
  </div>
);

export default EvidenceHero;