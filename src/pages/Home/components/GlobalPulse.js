import React from "react";
import { motion } from "framer-motion";
import { Globe, Heart, Shield, Share2, ArrowRight } from "lucide-react";

const GlobalPulse = () => {
  const metrics = [
    { id: "01", val: "04", label: "Continents", sub: "Global Network" },
    { id: "02", val: "12+", label: "NGO Partners", sub: "Mission Driven" },
    { id: "03", val: "1.2M", label: "Data Points", sub: "Verified Signal" },
    { id: "04", val: "NBO", label: "Headquarters", sub: "Nairobi, Kenya" },
  ];

  return (
    <section className="relative w-full bg-[#050505] py-32 md:py-56 px-6 md:px-12 lg:px-24 overflow-hidden">
      
      {/* 1. THE DATA CONSTELLATION (ABSTRACT BG) */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
        <svg viewBox="0 0 1000 1000" className="w-full h-full">
          <circle cx="500" cy="500" r="400" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="20 20" />
          <motion.circle 
            cx="500" cy="500" r="300" fill="none" stroke="#3ab5d8" strokeWidth="1" 
            animate={{ r: [300, 305, 300], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <line x1="100" y1="100" x2="900" y2="900" stroke="currentColor" strokeWidth="0.5" />
          <line x1="900" y1="100" x2="100" y2="900" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-[1700px] mx-auto relative z-10">
        
        {/* HEADER: SCALE & SOUL */}
        <div className="grid lg:grid-cols-12 gap-10 mb-32 items-start">
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              className="flex items-center gap-4 mb-8"
            >
               <div className="w-2 h-2 rounded-full bg-[#3ab5d8] animate-pulse" />
               <p className="text-[10px] uppercase tracking-[0.5em] text-stone-500 font-bold">Protocol 05 // Global Infrastructure</p>
            </motion.div>
            <h2 className="text-white text-5xl md:text-8xl font-serif leading-[1.05] tracking-tighter">
              Bridges built on <br />
              <span className="italic text-stone-600 font-light">empirical evidence.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pt-32">
             <div className="max-w-xs space-y-6">
                <p className="text-stone-500 text-xs md:text-sm leading-relaxed uppercase tracking-[0.3em] font-medium">
                  Operating from Nairobi at the intersection of high-growth commerce and mission-critical humanitarian impact.
                </p>
                <div className="h-[1px] w-20 bg-[#3ab5d8]" />
             </div>
          </div>
        </div>

        {/* METRICS GRID: INTERACTIVE CARDS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-32">
           {metrics.map((m, i) => (
             <motion.div
               key={m.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               className="relative group p-10 md:p-14 border border-white/5 bg-stone-900/20 hover:bg-[#111] transition-all duration-700 overflow-hidden"
             >
                <span className="relative z-10 font-mono text-[10px] text-stone-600 group-hover:text-[#3ab5d8] transition-colors uppercase">Metric_{m.id}</span>
                <div className="relative z-10 mt-16">
                   <h3 className="text-5xl md:text-8xl font-serif text-white group-hover:italic transition-all leading-none mb-4">
                     {m.val}
                   </h3>
                   <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-stone-500">
                     {m.label}
                   </p>
                </div>
                {/* Visual Flair: Shadow text in background */}
                <div className="absolute -bottom-6 -right-6 opacity-[0.02] group-hover:opacity-10 transition-opacity">
                   <p className="text-9xl font-serif font-bold italic text-white">{m.val}</p>
                </div>
             </motion.div>
           ))}
        </div>

        {/* THE IMPACT STORY: THE NGO TIERING */}
        <div className="grid lg:grid-cols-12 gap-16 items-center pt-32 border-t border-white/5">
           <div className="lg:col-span-6">
              <div className="relative aspect-[16/9] overflow-hidden rounded-sm group shadow-2xl border border-white/5">
                 <img 
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200" 
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                    alt="NGO Fieldwork"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-80" />
                 <div className="absolute bottom-8 left-8">
                    <p className="text-white text-[10px] uppercase tracking-[0.4em] font-bold">Field Perspective // Nairobi Hub</p>
                 </div>
              </div>
           </div>
           
           <div className="lg:col-span-6 space-y-12">
              <div className="flex flex-col items-start max-w-xl">
                 <div className="flex items-center gap-6 mb-8">
                    <div className="p-4 bg-stone-900 rounded-full text-[#3ab5d8] border border-white/5">
                       <Heart size={28} strokeWidth={1.2} />
                    </div>
                    <h4 className="font-serif text-4xl md:text-6xl text-white italic">Ethical Intelligence.</h4>
                 </div>
                 
                 <p className="text-stone-400 text-sm md:text-lg leading-loose font-light italic mb-12">
                    "Data shouldn't just drive profit; it should drive change. We offer a dedicated, funder-ready impact reporting tier, including pro-bono support for emerging grassroots missions."
                 </p>
                 
                 {/* THE NGO SLIDING SCALE - THE CORE INFO */}
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
                    <div className="space-y-2 border-l border-[#3ab5d8] pl-4">
                       <p className="text-[9px] uppercase tracking-widest font-bold text-[#3ab5d8]">Grassroots</p>
                       <p className="text-xs text-white uppercase font-bold tracking-widest">Pro Bono ($0)</p>
                    </div>
                    <div className="space-y-2 border-l border-stone-800 pl-4">
                       <p className="text-[9px] uppercase tracking-widest font-bold text-stone-500">Mid-Sized</p>
                       <p className="text-xs text-white uppercase font-bold tracking-widest">NP Rate ($100+)</p>
                    </div>
                    <div className="space-y-2 border-l border-stone-800 pl-4">
                       <p className="text-[9px] uppercase tracking-widest font-bold text-stone-500">Large NGO</p>
                       <p className="text-xs text-white uppercase font-bold tracking-widest">Corporate Rate</p>
                    </div>
                 </div>

                 <button className="group flex items-center gap-8">
                    <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-stone-400 group-hover:text-white transition-colors">Inquire for Impact Support</span>
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                       <ArrowRight size={20} strokeWidth={1.5} />
                    </div>
                 </button>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default GlobalPulse;