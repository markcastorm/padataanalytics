import React, { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Heart, Shield, Share2 } from "lucide-react";

const GlobalImpact = () => {
  const [hoveredMetric, setHoveredMetric] = useState(null);

  const metrics = [
    { id: "01", label: "Continents", value: "04", sub: "Global Reach" },
    { id: "02", label: "NGO Partners", value: "12+", sub: "Mission Driven" },
    { id: "03", label: "Data Points", value: "1.2M", sub: "Clinical Sieve" },
    { id: "04", label: "HQ Nairobi", value: "KE", sub: "African Innovation" },
  ];

  return (
    <section className="relative w-full bg-[#FDFDFC] py-32 md:py-56 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-stone-100">
      
      {/* 1. THE DATA MAP (ABSTRACT BACKGROUND) */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 1000 1000" className="w-full h-full">
          <circle cx="500" cy="500" r="400" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10 10" />
          <circle cx="500" cy="500" r="300" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="500" cy="500" r="200" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />
          <line x1="0" y1="500" x2="1000" y2="500" stroke="currentColor" strokeWidth="0.5" />
          <line x1="500" y1="0" x2="500" y2="1000" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-[1700px] mx-auto relative z-10">
        
        {/* TOP ROW: THE MISSION STATEMENT */}
        <div className="grid lg:grid-cols-12 gap-10 mb-32 items-start">
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-4 mb-8">
               <div className="w-2 h-2 rounded-full bg-[#3ab5d8] animate-pulse" />
               <p className="text-[10px] uppercase tracking-[0.5em] text-stone-400 font-bold italic">Nairobi HQ / Global Footprint</p>
            </motion.div>
            <h2 className="text-[#111] text-5xl md:text-8xl font-serif leading-[1.05] tracking-tighter">
              Bridges built on <br />
              <span className="italic text-stone-300 font-light">empirical evidence.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 pt-10 lg:pt-32">
             <div className="max-w-sm space-y-8">
                <p className="text-stone-500 text-xs md:text-sm leading-relaxed uppercase tracking-[0.3em] font-medium">
                  We operate at the intersection of high-growth commerce and mission-critical humanitarian work.
                </p>
                <div className="h-[1px] w-20 bg-[#3ab5d8]" />
             </div>
          </div>
        </div>

        {/* MIDDLE ROW: THE INTERACTIVE METRICS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
           {metrics.map((m, i) => (
             <motion.div
               key={m.id}
               onMouseEnter={() => setHoveredMetric(i)}
               onMouseLeave={() => setHoveredMetric(null)}
               className="relative group p-10 md:p-16 border border-stone-100 bg-white hover:bg-[#111] transition-all duration-700 cursor-help overflow-hidden"
             >
                <span className="relative z-10 font-mono text-[10px] text-stone-300 group-hover:text-stone-600 transition-colors">0{i+1}</span>
                <div className="relative z-10 mt-12">
                   <h3 className="text-5xl md:text-8xl font-serif text-[#111] group-hover:text-white transition-colors leading-none mb-4 italic">
                     {m.value}
                   </h3>
                   <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-stone-400 group-hover:text-[#3ab5d8] transition-colors">
                     {m.label}
                   </p>
                </div>
                {/* Background ghost label */}
                <div className="absolute -bottom-4 -right-4 opacity-[0.02] group-hover:opacity-10 transition-opacity">
                   <p className="text-8xl font-serif font-bold italic">{m.value}</p>
                </div>
             </motion.div>
           ))}
        </div>

        {/* BOTTOM ROW: THE NGO PRESTIGE LAYER */}
        <div className="mt-32 grid lg:grid-cols-12 gap-16 items-center">
           <div className="lg:col-span-5">
              <div className="relative aspect-[16/10] overflow-hidden group">
                 <img 
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200" 
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                    alt="NGO Impact"
                 />
                 <div className="absolute inset-0 bg-[#3ab5d8]/10 mix-blend-overlay" />
              </div>
           </div>
           <div className="lg:col-span-7">
              <div className="flex flex-col items-start max-w-2xl">
                 <div className="flex items-center gap-6 mb-10">
                    <div className="p-4 bg-stone-50 rounded-full text-[#3ab5d8]">
                       <Heart size={24} strokeWidth={1.5} />
                    </div>
                    <h4 className="font-serif text-3xl md:text-5xl text-[#111]">The NGO Specialism</h4>
                 </div>
                 <p className="text-stone-600 text-sm md:text-lg leading-loose font-light italic mb-10">
                    "We believe that data shouldn't just drive profit, it should drive change. We offer a dedicated, funder-ready impact reporting tier, including pro-bono support for grassroots organizations."
                 </p>
                 <div className="flex flex-wrap gap-12">
                    <div className="flex items-center gap-3">
                       <Shield size={16} className="text-stone-300" />
                       <span className="text-[9px] uppercase tracking-widest font-bold text-stone-500">M&E Infrastructure</span>
                    </div>
                    <div className="flex items-center gap-3">
                       <Share2 size={16} className="text-stone-300" />
                       <span className="text-[9px] uppercase tracking-widest font-bold text-stone-500">Donor Dashboards</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default GlobalImpact;