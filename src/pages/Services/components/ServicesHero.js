import React from "react";
import { motion } from "framer-motion";
import { Terminal, Shield, Activity } from "lucide-react";

const ServicesHero = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#050505] flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden pt-32 pb-12">
      
      {/* 1. ATMOSPHERE */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.02)_0%,_transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="max-w-[1800px] mx-auto w-full relative z-10 flex flex-col flex-grow justify-between">
        
        {/* HEADER AREA */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#3AB5D8] animate-pulse" />
              <p className="font-mono text-[9px] text-stone-500 tracking-[0.6em] uppercase font-bold">
                System_Module // 02
              </p>
            </div>
            <h1 className="text-white text-5xl md:text-8xl lg:text-[10rem] font-serif leading-[0.85] tracking-tighter">
              Clinical <br /> 
              <span className="italic text-stone-500 font-light">Architecture.</span>
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="lg:text-right flex flex-col lg:items-end"
          >
             <p className="text-stone-400 font-mono text-[9px] uppercase tracking-[0.4em] mb-2">Base_Operations</p>
             <h3 className="text-white text-xl md:text-2xl font-serif italic mb-2">Nairobi, Kenya</h3>
             <p className="text-stone-600 font-mono text-[9px] uppercase tracking-widest leading-loose max-w-[280px]">
               Securing technical integrity for global e-commerce & NGO impact data.
             </p>
          </motion.div>
        </div>

        {/* 2. THE CINEMATIC APERTURE */}
        <motion.div 
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
          className="relative w-full aspect-[21/9] lg:h-[35vh] lg:aspect-auto bg-stone-900 overflow-hidden border-y border-white/10"
        >
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale brightness-50 contrast-125"
            alt="Technical Architecture"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] opacity-80" />
          
          {/* HUD OVERLAY - Hidden on small mobile for clarity */}
          <div className="absolute inset-0 p-4 md:p-10 flex flex-col justify-between pointer-events-none">
            <div className="flex justify-between items-start text-white/20">
               <div className="flex items-center gap-2">
                  <Terminal size={12} />
                  <span className="font-mono text-[7px] md:text-[9px] uppercase tracking-widest">Diagnostic_Node: Active</span>
               </div>
               <span className="font-mono text-[7px] md:text-[9px] uppercase tracking-widest hidden sm:block">Security: AES_256</span>
            </div>
            <div className="flex items-end justify-between">
               <div className="p-3 md:p-6 bg-black/40 backdrop-blur-md border border-white/5 max-w-[200px] md:max-w-xs">
                  <p className="text-white/80 text-[8px] md:text-[10px] uppercase tracking-widest leading-relaxed font-light">
                    Mapping the distance between fragmented datasets and absolute commercial truth.
                  </p>
               </div>
            </div>
          </div>
        </motion.div>

        {/* 3. THE INTERFACE FOOTER (The part that was getting cut) */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10 border-l border-white/10 pl-6 md:pl-8">
             <div className="space-y-1">
                <p className="font-mono text-[8px] uppercase text-stone-600 font-bold tracking-widest underline decoration-[#3AB5D8]">Primary_Focus</p>
                <h4 className="text-white text-base md:text-lg font-serif italic">Marketing Analytics Nairobi</h4>
             </div>
             <div className="space-y-1">
                <p className="font-mono text-[8px] uppercase text-stone-600 font-bold tracking-widest">Target_Sector</p>
                <h4 className="text-white text-base md:text-lg font-serif">E-commerce Data Intelligence</h4>
             </div>
          </div>

          <div className="flex flex-wrap gap-6 lg:gap-12">
             {["Growth", "Predictive", "Decision", "Ethical"].map((p, i) => (
               <div key={i} className="flex items-center gap-3">
                  <span className="font-mono text-[8px] text-[#3AB5D8] opacity-40">0{i+1}</span>
                  <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-stone-600">
                    {p}
                  </span>
               </div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesHero;