import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BarChart3, Globe, Users } from "lucide-react";

const evidence = [
  {
    id: "01",
    stat: "$722K",
    label: "Revenue Analysed",
    title: "Attribution Audit",
    challenge: "Fragmented tracking across 3 ad platforms.",
    outcome: "Eliminated 32% waste, reallocating to high-performing search channels.",
    icon: <BarChart3 size={24} />,
    color: "#3ab5d8"
  },
  {
    id: "02",
    stat: "+45%",
    label: "Growth",
    title: "Cohort Analysis",
    challenge: "High churn rates in the D2C subscription layer.",
    outcome: "Identified high-value segments; increased repeat purchase rate by 45%.",
    icon: <Users size={24} />,
    color: "#a8a6a1"
  },
  {
    id: "03",
    stat: "100%",
    label: "NGO Impact",
    title: "M&E Infrastructure",
    challenge: "Manual data collection preventing grant scaling.",
    outcome: "Full digitisation of field metrics; secured 3-year donor extension.",
    icon: <Globe size={24} />,
    color: "#f9f8f6"
  }
];

const EvidenceArchive = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="bg-[#0A0A0A] py-24 md:py-40 px-6 md:px-12 lg:px-24 overflow-hidden">
      
      {/* 1. SECTION HEADER - DRAMATIC DARK MODE */}
      <div className="max-w-[1400px] mx-auto mb-20 md:mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="w-10 h-[1px] bg-[#3ab5d8]"></span>
          <p className="text-[10px] uppercase tracking-[0.6em] text-[#3ab5d8] font-bold">The Evidence Vault</p>
        </motion.div>
        
        <h2 className="text-white text-5xl md:text-8xl font-serif leading-[1.1]">
          Proven <span className="italic text-stone-500">Outcomes.</span>
        </h2>
      </div>

      {/* 2. INTERACTIVE GRID */}
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {evidence.map((item, idx) => (
          <motion.div
            key={item.id}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            animate={{ 
              opacity: hovered === null || hovered === idx ? 1 : 0.3,
              scale: hovered === idx ? 1.02 : 1
            }}
            transition={{ duration: 0.5 }}
            className="relative bg-stone-900/40 border border-white/5 p-10 md:p-14 rounded-sm flex flex-col justify-between min-h-[500px] group cursor-pointer overflow-hidden"
          >
            {/* Background Glow on Hover */}
            <div 
               className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000"
               style={{ background: `radial-gradient(circle at center, ${item.color}, transparent 70%)` }}
            />

            <div>
              <div className="flex justify-between items-start mb-12">
                <div className="text-[#3ab5d8] opacity-60 group-hover:opacity-100 transition-opacity">
                  {item.icon}
                </div>
                <span className="font-mono text-[10px] text-stone-600 uppercase tracking-widest">Case // {item.id}</span>
              </div>

              <h3 className="text-white text-6xl md:text-7xl font-serif italic mb-2 tracking-tighter group-hover:text-[#3ab5d8] transition-colors">
                {item.stat}
              </h3>
              <p className="text-stone-400 text-[10px] uppercase tracking-[0.4em] font-bold mb-10">{item.label}</p>
              
              <div className="space-y-6">
                <h4 className="text-white text-xl font-serif border-b border-white/10 pb-4">{item.title}</h4>
                <p className="text-stone-500 text-xs md:text-sm leading-relaxed uppercase tracking-wider line-clamp-3 group-hover:text-stone-300">
                  {item.challenge}
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
               <p className="text-[9px] text-[#3ab5d8] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                 Read Full Analysis
               </p>
               <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#3ab5d8] transition-all">
                  <ArrowRight size={16} className="text-stone-500 group-hover:text-[#3ab5d8] transition-colors" />
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3. CENTERED CLOSING ACTION */}
      <div className="mt-32 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="inline-block"
        >
          <p className="text-stone-600 text-[10px] uppercase tracking-[0.5em] mb-8 font-bold">
            Data Architecture for the ambitious
          </p>
          <a href="#contact" className="text-white text-2xl md:text-4xl font-serif italic hover:text-[#3ab5d8] transition-colors border-b border-white/10 pb-2">
            Initiate your transformation —
          </a>
        </motion.div>
      </div>

    </section>
  );
};

export default EvidenceArchive;