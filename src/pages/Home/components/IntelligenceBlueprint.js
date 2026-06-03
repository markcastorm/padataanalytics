import React from "react";
import { motion } from "framer-motion";
import { Database, Activity, Target, ShieldCheck } from "lucide-react";

const IntelligenceBlueprint = () => {
  return (
    <section className="w-full bg-[#F2F1ED] py-24 md:py-40 px-6 md:px-12 lg:px-24 selection:bg-[#3ab5d8] selection:text-white">
      
      {/* HEADER SECTION - Constrained to 1400px to match Evidence Header */}
      <div className="max-w-[1400px] mx-auto mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-[#3ab5d8] animate-pulse" />
            <span className="text-[#3ab5d8] font-mono text-[10px] tracking-[0.4em] uppercase font-bold">
              System Architecture // Active
            </span>
          </motion.div>
          <h2 className="text-[#1A1A1A] text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.05] tracking-tight">
            The Engine of <br />
            <span className="italic text-stone-400">Clarity.</span>
          </h2>
        </div>

        <p className="text-stone-500 font-mono text-[10px] uppercase tracking-widest max-w-xs leading-relaxed border-l border-stone-300 pl-6">
          Bypassing surface-level metrics. We build custom infrastructure to extract raw commercial truth.
        </p>
      </div>

      {/* THE ARCHITECTURAL GRID - Expanded to 1600px to match Evidence Grid */}
      <div className="max-w-[1600px] mx-auto w-full border border-stone-300 bg-stone-300 grid grid-cols-1 lg:grid-cols-3 gap-[1px] overflow-hidden">
        
        {/* BLOCK 1: CORE COMPUTATION (Spans 2 columns) */}
        <div className="bg-[#FAF9F6] p-10 md:p-14 lg:p-20 lg:col-span-2 group hover:bg-white transition-colors duration-500 relative flex flex-col justify-between min-h-[400px] md:min-h-[450px]">
           {/* Micro-copy top bar */}
           <div className="flex justify-between items-center w-full mb-16 opacity-50 font-mono text-[9px] uppercase tracking-widest text-stone-500">
              <span>[ Module 01 ]</span>
              <span>SYS.REQ // Core</span>
           </div>

           <div className="relative z-10 flex flex-col md:flex-row gap-10 md:items-end justify-between h-full">
              <div className="max-w-xl">
                 <h3 className="text-[#1A1A1A] text-4xl md:text-6xl font-serif mb-8 tracking-tight leading-[1.1]">
                   Python & SQL <br />
                   <span className="italic text-stone-400">Modeling.</span>
                 </h3>
                 <p className="text-stone-500 text-[11px] leading-[2] uppercase tracking-[0.2em] font-medium max-w-sm">
                   We build custom algorithmic sieves to extract vital signals from fragmented ad-stacks and legacy databases.
                 </p>
              </div>

              {/* Abstract Visual: Terminal/Code Simulation */}
              <div className="w-full md:w-72 bg-[#1A1A1A] p-8 rounded-sm shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                 <div className="flex gap-2 mb-6">
                    <div className="w-2 h-2 rounded-full bg-stone-700" />
                    <div className="w-2 h-2 rounded-full bg-stone-700" />
                    <div className="w-2 h-2 rounded-full bg-stone-700" />
                 </div>
                 <div className="space-y-3 font-mono text-[9px] text-[#3ab5d8]">
                   <p>{">"} EXTRACT_DATA(src="meta")</p>
                   <p className="text-stone-400">{">"} CLEANING_NULL_VALUES...</p>
                   <p>{">"} JOIN_TABLES(key="uid")</p>
                   <p className="text-white animate-pulse">_</p>
                 </div>
              </div>
           </div>
        </div>

        {/* BLOCK 2: VISUALIZATION */}
        <div className="bg-[#FAF9F6] p-10 md:p-14 lg:p-16 group hover:bg-white transition-colors duration-500 relative flex flex-col justify-between min-h-[400px] md:min-h-[450px]">
           <div className="flex justify-between items-center w-full mb-16 opacity-50 font-mono text-[9px] uppercase tracking-widest text-stone-500">
              <span>[ Module 02 ]</span>
              <Activity size={14} />
           </div>
           
           <div>
              <h4 className="text-[#1A1A1A] text-3xl md:text-4xl font-serif mb-6 italic">Power BI <br />War-Rooms</h4>
              <p className="text-stone-500 text-[10px] leading-[2] uppercase tracking-widest font-medium mb-12">
                Executive-level clarity. 5 fragmented sources consolidated into one single, clinical truth.
              </p>
           </div>

           {/* Abstract Visual: CSS Bar Chart */}
           <div className="flex items-end gap-2 h-24 w-full border-b border-stone-200 pb-2">
              <div className="w-1/4 bg-stone-200 h-[30%] group-hover:bg-[#3ab5d8]/20 transition-colors duration-500 delay-75" />
              <div className="w-1/4 bg-stone-300 h-[50%] group-hover:bg-[#3ab5d8]/50 transition-colors duration-500 delay-150" />
              <div className="w-1/4 bg-stone-400 h-[70%] group-hover:bg-[#3ab5d8]/80 transition-colors duration-500 delay-200" />
              <div className="w-1/4 bg-stone-800 h-[100%] group-hover:bg-[#3ab5d8] transition-colors duration-500 delay-300" />
           </div>
        </div>

        {/* BLOCK 3: BEHAVIOURAL */}
        <div className="bg-[#FAF9F6] p-10 md:p-14 lg:p-16 group hover:bg-white transition-colors duration-500 relative flex flex-col justify-between min-h-[400px]">
           <div className="flex justify-between items-center w-full mb-16 opacity-50 font-mono text-[9px] uppercase tracking-widest text-stone-500">
              <span>[ Module 03 ]</span>
              <Target size={14} />
           </div>
           
           <div>
              <h4 className="text-[#1A1A1A] text-3xl md:text-4xl font-serif mb-6 italic">GA4 Behavioral <br />Layer</h4>
              <p className="text-stone-500 text-[10px] leading-[2] uppercase tracking-widest font-medium">
                Tracking the rule of thirds. Deep-dive mapping of how users actually convert.
              </p>
           </div>

           {/* Abstract Visual: Crosshair */}
           <div className="relative w-full aspect-square max-w-[140px] mx-auto mt-10 border border-stone-200 rounded-full flex items-center justify-center group-hover:border-[#3ab5d8] transition-colors duration-700">
              <div className="absolute w-full h-[1px] bg-stone-200 group-hover:bg-[#3ab5d8]/50 transition-colors duration-700" />
              <div className="absolute h-full w-[1px] bg-stone-200 group-hover:bg-[#3ab5d8]/50 transition-colors duration-700" />
              <div className="w-2 h-2 bg-stone-400 rounded-full group-hover:bg-[#3ab5d8] group-hover:scale-150 transition-all duration-500" />
           </div>
        </div>

        {/* BLOCK 4: SPECIALISM & QUOTE (Spans 2 columns) */}
        <div className="bg-[#FAF9F6] lg:col-span-2 group hover:bg-white transition-colors duration-500 flex flex-col lg:flex-row min-h-[400px]">
           
           <div className="p-10 md:p-14 lg:p-16 lg:w-1/2 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-stone-300">
              <div className="flex justify-between items-center w-full mb-12 opacity-50 font-mono text-[9px] uppercase tracking-widest text-stone-500">
                <span>[ Sector Focus ]</span>
                <Database size={14} />
              </div>
              <div>
                 <h3 className="text-[#1A1A1A] text-4xl md:text-5xl font-serif italic mb-8">E-Commerce & <br />NGO Impact.</h3>
                 <div className="flex flex-wrap gap-4">
                    <div className="px-5 py-2.5 border border-stone-300 rounded-full text-[9px] text-stone-600 uppercase tracking-widest font-bold group-hover:border-[#3ab5d8] transition-colors">ROAS Focus</div>
                    <div className="px-5 py-2.5 border border-stone-300 rounded-full text-[9px] text-stone-600 uppercase tracking-widest font-bold group-hover:border-[#3ab5d8] transition-colors delay-75">Grant Proof</div>
                 </div>
              </div>
           </div>
           
           <div className="p-10 md:p-14 lg:p-16 lg:w-1/2 flex flex-col justify-center relative bg-stone-200/20 group-hover:bg-transparent transition-colors duration-500">
              <ShieldCheck size={32} className="text-stone-300 mb-8 group-hover:text-[#3ab5d8] transition-colors duration-500" />
              <p className="text-stone-600 text-base md:text-lg leading-loose font-light italic">
                 "Our technology stack is intentionally clinical. We remove the emotional guesswork from marketing spend by applying cybersecurity-level rigour to data validation."
              </p>
           </div>

        </div>

      </div>
    </section>
  );
};

export default IntelligenceBlueprint;