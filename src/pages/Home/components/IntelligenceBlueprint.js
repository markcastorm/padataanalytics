import React from "react";
import { motion } from "framer-motion";
import { database, Code, BarChart3, Globe, Shield } from "lucide-react";

const IntelligenceBlueprint = () => {
  return (
    <section className="relative w-full bg-[#0D0D0D] py-24 md:py-44 px-6 md:px-12 lg:px-24 overflow-hidden">
      
      {/* BACKGROUND TECHNICAL LINES */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-[10%] w-[1px] h-full bg-gradient-to-b from-white via-white/20 to-transparent" />
        <div className="absolute top-0 left-[30%] w-[1px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <div className="absolute top-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-[#3ab5d8] font-mono text-xs tracking-[0.3em] uppercase italic">System Architecture</span>
            <div className="h-[1px] w-12 bg-[#3ab5d8]/30"></div>
          </motion.div>
          <h2 className="text-white text-4xl md:text-7xl font-serif leading-tight">
            The Engine of <span className="italic text-stone-500">Clarity.</span>
          </h2>
        </div>

        {/* THE BENTO GRID OF FINESSE */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[300px] md:auto-rows-[350px]">
          
          {/* BLOCK 1: CORE COMPUTATION (Large) */}
          <div className="md:col-span-8 relative group bg-stone-900/30 border border-white/5 rounded-sm p-10 overflow-hidden">
             <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity">
                <Code size={120} strokeWidth={1} />
             </div>
             <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                   <p className="text-[#3ab5d8] font-mono text-[10px] uppercase tracking-widest mb-4">Core Computation</p>
                   <h3 className="text-white text-3xl md:text-5xl font-serif">Python & SQL <br />Modeling.</h3>
                </div>
                <p className="text-stone-500 text-sm max-w-md leading-relaxed uppercase tracking-wider font-medium">
                  We build custom algorithmic sieves to extract vital signals from fragmented ad-stacks and legacy databases.
                </p>
             </div>
             {/* Glowing corner decoration */}
             <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#3ab5d8]/5 blur-[60px]" />
          </div>

          {/* BLOCK 2: VISUALIZATION (Small) */}
          <div className="md:col-span-4 relative group bg-[#111] border border-white/5 rounded-sm p-10 flex flex-col justify-between overflow-hidden">
             <div className="text-[#3ab5d8]">
                <BarChart3 size={32} strokeWidth={1.5} />
             </div>
             <div>
                <h4 className="text-white text-xl font-serif mb-4 italic">Power BI War-Rooms</h4>
                <p className="text-stone-500 text-xs leading-relaxed uppercase tracking-widest">
                  Executive-level clarity. 5 fragmented sources consolidated into one single, clinical truth.
                </p>
             </div>
             <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-20 transition-opacity rotate-12">
                <BarChart3 size={200} />
             </div>
          </div>

          {/* BLOCK 3: BEHAVIOURAL (Small) */}
          <div className="md:col-span-4 relative group bg-[#111] border border-white/5 rounded-sm p-10 flex flex-col justify-between overflow-hidden">
             <div className="text-stone-400">
                <Globe size={32} strokeWidth={1.5} />
             </div>
             <div>
                <h4 className="text-white text-xl font-serif mb-4 italic">GA4 Behavioral Layer</h4>
                <p className="text-stone-500 text-xs leading-relaxed uppercase tracking-widest">
                  Tracking the rule of thirds. Deep-dive mapping of how users actually convert.
                </p>
             </div>
          </div>

          {/* BLOCK 4: SPECIALISM (Large) */}
          <div className="md:col-span-8 relative group bg-stone-900/30 border border-white/5 rounded-sm p-10 overflow-hidden">
             <div className="flex flex-col lg:flex-row h-full gap-10">
                <div className="lg:w-1/2 flex flex-col justify-between">
                   <div>
                      <p className="text-[#3ab5d8] font-mono text-[10px] uppercase tracking-widest mb-4">Focus Specialism</p>
                      <h3 className="text-white text-3xl font-serif italic">E-Commerce & <br />NGO Impact.</h3>
                   </div>
                   <div className="flex gap-4">
                      <div className="px-4 py-2 border border-white/10 rounded-full text-[9px] text-stone-400 uppercase tracking-widest font-bold">ROAS Focus</div>
                      <div className="px-4 py-2 border border-white/10 rounded-full text-[9px] text-stone-400 uppercase tracking-widest font-bold">Grant Proof</div>
                   </div>
                </div>
                <div className="lg:w-1/2 bg-white/5 backdrop-blur-md border border-white/5 p-8 flex flex-col justify-center relative">
                   <p className="text-stone-300 text-sm leading-loose font-light italic">
                      "Our technology stack is intentionally clinical. We remove the emotional guesswork from marketing spend by applying cybersecurity-level rigour to data validation."
                   </p>
                   <div className="absolute top-0 right-0 p-4 opacity-20">
                      <Shield size={24} />
                   </div>
                </div>
             </div>
          </div>

        </div>

        {/* FOOTER CALL-IN */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-10">
           <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-stone-800" />
           <p className="text-stone-600 font-mono text-[10px] uppercase tracking-[0.5em] px-10">Systems Operational — 2024</p>
           <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-stone-800" />
        </div>
      </div>
    </section>
  );
};

export default IntelligenceBlueprint;