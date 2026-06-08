import React from "react";
import { motion } from "framer-motion";
import { Database, Activity, Cpu, Box, LayoutPanelLeft, ShieldCheck, Microscope } from "lucide-react";

const TechnicalAuthority = () => {
  return (
    <section className="relative w-full bg-[#050505] py-24 md:py-40 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-white/5">
      
      {/* 1. THE ARCHITECTURAL GRID (BACKGROUND) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(#3ab5d8 1px, transparent 1px), linear-gradient(90deg, #3ab5d8 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        
        {/* HEADER: SYSTEM STATUS */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-10">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#3ab5d8] animate-pulse" />
              <p className="font-mono text-[9px] uppercase tracking-[0.5em] text-[#3ab5d8] font-bold">System_Auth // Verified</p>
            </div>
            <h2 className="text-white text-5xl md:text-7xl font-serif leading-[1.1] max-w-2xl">
              The Engine of <br />
              <span className="italic text-stone-500 font-light text-4xl md:text-6xl">Empirical Evidence.</span>
            </h2>
          </div>
          <div className="flex flex-col items-end text-right">
             <p className="text-stone-500 font-mono text-[9px] uppercase tracking-widest mb-2">[ Location: Nairobi_HQ ]</p>
             <p className="text-stone-500 font-mono text-[9px] uppercase tracking-widest">[ Status: Operating_Globally ]</p>
          </div>
        </div>

        {/* BENTO GRID: PERFORMANCE PROOF */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* BLOCK 1: MAIN STAT (REVENUE) */}
          <div className="md:col-span-7 bg-stone-900/20 border border-white/5 p-10 md:p-16 flex flex-col justify-between group hover:border-[#3ab5d8]/30 transition-all duration-700 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 transition-opacity">
                <Activity size={40} className="text-[#3ab5d8]" strokeWidth={1} />
             </div>
             <div>
                <p className="font-mono text-[9px] uppercase tracking-widest text-stone-500 mb-12">Total_Revenue_Analyzed</p>
                <h3 className="text-white text-7xl md:text-9xl font-serif tracking-tighter leading-none mb-4 italic">
                  $722<span className="text-[#3ab5d8] not-italic">K+</span>
                </h3>
             </div>
             <div className="pt-8 border-t border-white/5 flex justify-between items-center">
                <p className="text-stone-400 text-[10px] uppercase tracking-[0.4em] font-bold">Clinical Attribution Audit</p>
                <span className="font-mono text-[9px] text-[#3ab5d8]">[ 100% Integrity ]</span>
             </div>
          </div>

          {/* BLOCK 2: GLOBAL CLIENTS */}
          <div className="md:col-span-5 bg-stone-900/40 border border-white/5 p-10 flex flex-col justify-between hover:bg-stone-900/60 transition-all group">
             <div className="flex justify-between items-start">
                <div className="p-3 border border-white/10 text-stone-500 group-hover:text-white transition-colors">
                   <Box size={20} />
                </div>
                <span className="font-mono text-[9px] text-stone-600">Metric_02</span>
             </div>
             <div>
                <h4 className="text-white text-6xl font-serif mb-2 tracking-tighter">12+</h4>
                <p className="text-stone-500 text-[10px] uppercase tracking-[0.4em] font-bold">Global Entities</p>
             </div>
             <p className="text-stone-600 text-[11px] leading-relaxed font-light">
               Securing technical clarity for D2C brands and international NGOs across 4 continents.
             </p>
          </div>

          {/* BLOCK 3: TOOLKIT / TECH STACK */}
          <div className="md:col-span-4 bg-[#0A0A0A] border border-white/5 p-8 flex flex-col justify-between min-h-[350px] relative">
             <div className="flex items-center gap-3 mb-8">
                <Cpu size={16} className="text-[#3ab5d8]" />
                <span className="font-mono text-[9px] text-stone-400 uppercase tracking-[0.3em]">Technical_Toolkit</span>
             </div>
             <div className="space-y-4">
                <ToolRow label="Modeling" value="Python / SQL" />
                <ToolRow label="Visuals" value="Power BI / Tableau" />
                <ToolRow label="Platforms" value="GA4 / HubSpot" />
                <ToolRow label="Infrastructure" value="GitHub / Jupyter" />
             </div>
          </div>

          {/* BLOCK 4: CASE STUDIES */}
          <div className="md:col-span-4 bg-stone-900/10 border border-white/5 p-8 flex flex-col justify-center items-center text-center group hover:bg-[#3ab5d8]/5 transition-all duration-700">
             <Microscope size={32} className="text-stone-700 mb-6 group-hover:text-[#3ab5d8] transition-colors" />
             <h4 className="text-white text-3xl font-serif italic mb-2">07+</h4>
             <p className="text-stone-500 text-[9px] uppercase tracking-[0.4em] font-bold">Detailed Success Archives</p>
          </div>

          {/* BLOCK 5: IMPACT / SECURITY */}
          <div className="md:col-span-4 bg-stone-900/30 border border-white/10 p-8 flex flex-col justify-between relative overflow-hidden">
             {/* Decorative Scanline */}
             <motion.div 
               animate={{ y: [0, 300, 0] }}
               transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
               className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#3ab5d8]/40 to-transparent"
             />
             <div className="flex justify-between items-center">
                <ShieldCheck size={18} className="text-[#3ab5d8]" />
                <span className="font-mono text-[8px] text-stone-600 uppercase">Sys_Security: ISO_S</span>
             </div>
             <div>
                <p className="text-white text-xs font-mono mb-2 tracking-tighter">DATA INTEGRITY PROTOCOL</p>
                <p className="text-stone-500 text-[10px] leading-relaxed uppercase tracking-widest">
                  We apply cybersecurity-level rigour to ensure your decisions are based on clinical, unpolluted truth.
                </p>
             </div>
          </div>

        </div>

        {/* BOTTOM DECORATION: TERMINAL TEXT */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap gap-12 opacity-20">
           <p className="font-mono text-[8px] text-white tracking-[0.3em] uppercase">Churn_Prediction_Active</p>
           <p className="font-mono text-[8px] text-white tracking-[0.3em] uppercase">RFM_Segmentation_Live</p>
           <p className="font-mono text-[8px] text-white tracking-[0.3em] uppercase">LTV_Modeling_Running</p>
           <p className="font-mono text-[8px] text-white tracking-[0.3em] uppercase">Grant_Compliance_Locked</p>
        </div>

      </div>
    </section>
  );
};

const ToolRow = ({ label, value }) => (
  <div className="flex justify-between items-center border-b border-white/5 pb-3">
    <span className="font-mono text-[8px] text-stone-600 uppercase tracking-widest">{label}</span>
    <span className="text-white text-[11px] font-medium tracking-wide">{value}</span>
  </div>
);

export default TechnicalAuthority;