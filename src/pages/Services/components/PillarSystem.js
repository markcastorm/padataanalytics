import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Cpu, Database, BarChart3, Globe, Plus, Shield } from "lucide-react";

const pillars = [
  {
    id: "01",
    title: "Growth Intelligence",
    tagline: "Marketing ROI & Attribution",
    price: "$150 — $350",
    result: "STOP AD-SPEND BLEEDING",
    tech: ["GA4", "HubSpot", "Meta Ads"],
    icon: <BarChart3 size={24} />,
    desc: "Bypassing surface-level metrics to reveal real profit and loss. We map every touchpoint to a clinical source of truth."
  },
  {
    id: "02",
    title: "Predictive Analytics",
    tagline: "Churn & LTV Modeling",
    price: "$300 — $450",
    result: "FORECAST REVENUE CHURN",
    tech: ["Python", "Scikit-Learn", "SQL"],
    icon: <Cpu size={24} />,
    desc: "Utilizing machine learning algorithms to identify high-risk customer segments and forecast future revenue with 90%+ accuracy."
  },
  {
    id: "03",
    title: "Decision Systems",
    tagline: "Automated KPI Reporting",
    price: "$150/mo Retainer",
    result: "100% MANUAL ELIMINATION",
    tech: ["Power BI", "Tableau", "SQL"],
    icon: <Database size={24} />,
    desc: "Replace manual spreadsheets with automated infrastructure. Includes personalized video walkthroughs of your performance."
  },
  {
    id: "04",
    title: "NGO & Impact",
    tagline: "Grant & M&E Compliance",
    price: "Tiered / Pro Bono",
    result: "SECURE NEXT-STAGE GRANTS",
    tech: ["Impact Logic", "Excel", "SQL"],
    icon: <Globe size={24} />,
    desc: "Turning field reality into funder-ready evidence. Specialized analytical support for missions focused on social impact."
  }
];

const PillarSystem = () => {
  const [expanded, setExpanded] = useState(0);

  return (
    <section className="relative w-full min-h-screen bg-[#050505] py-24 md:py-40 px-6 md:px-12 lg:px-24 overflow-hidden">
      
      {/* 1. HEADER: MINIMALIST AUTHORITY */}
      <div className="max-w-[1800px] mx-auto mb-20 md:mb-32">
        <div className="flex items-center gap-4 mb-8">
           <div className="w-12 h-[1px] bg-stone-800" />
           <p className="font-mono text-[9px] uppercase tracking-[0.6em] text-stone-500 font-bold">Protocol_02 // Pillar_Selection</p>
        </div>
        <h2 className="text-white text-4xl md:text-7xl font-serif leading-tight">
          Select Your <span className="italic text-stone-500 font-light">Intervention.</span>
        </h2>
      </div>

      {/* 2. THE ARCHITECTURAL ACCORDION */}
      <div className="max-w-[1800px] mx-auto flex flex-col lg:flex-row h-full lg:h-[70vh] gap-4">
        {pillars.map((pillar, idx) => (
          <motion.div
            key={pillar.id}
            initial={false}
            animate={{ 
              flex: expanded === idx ? 3 : 1,
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setExpanded(idx)}
            className={`relative overflow-hidden cursor-pointer border border-white/5 group transition-colors duration-500 ${
              expanded === idx ? "bg-stone-900/40 border-white/10" : "bg-stone-900/10 hover:bg-stone-900/20"
            }`}
          >
            {/* BACKGROUND SERIAL NUMBER */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] select-none pointer-events-none transition-all duration-700 ${expanded === idx ? "scale-150" : "scale-100"}`}>
               <span className="text-[30vw] font-serif font-black italic text-white">{pillar.id}</span>
            </div>

            <div className="relative h-full w-full p-8 md:p-12 flex flex-col justify-between z-10">
              
              {/* TOP: IDENTITY */}
              <div className="flex justify-between items-start">
                 <div className={`transition-all duration-500 ${expanded === idx ? "text-white" : "text-stone-600"}`}>
                    {pillar.icon}
                 </div>
                 <div className="text-right">
                    <p className={`font-mono text-[10px] transition-colors ${expanded === idx ? "text-stone-300" : "text-stone-700"}`}>
                      PHASE_0{pillar.id}
                    </p>
                 </div>
              </div>

              {/* CENTER: TITLES (Adaptive Rotation) */}
              <div className={`transition-all duration-700 ${expanded === idx ? "mt-0" : "lg:rotate-[-90deg] lg:origin-center lg:translate-y-[-50%]"}`}>
                 <h3 className={`text-2xl md:text-4xl font-serif transition-all duration-500 ${expanded === idx ? "text-white" : "text-stone-500 text-center whitespace-nowrap"}`}>
                    {pillar.title}
                 </h3>
                 {expanded === idx && (
                   <motion.p 
                     initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                     className="text-stone-400 font-mono text-[10px] uppercase tracking-widest mt-4"
                   >
                     {pillar.tagline}
                   </motion.p>
                 )}
              </div>

              {/* BOTTOM: BRIEFING (Only visible when expanded) */}
              <div className="overflow-hidden">
                <AnimatePresence>
                  {expanded === idx && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="space-y-12"
                    >
                      <p className="text-stone-300 text-sm md:text-base leading-relaxed font-light italic max-w-md">
                        "{pillar.desc}"
                      </p>

                      <div className="grid grid-cols-2 gap-8 border-y border-white/5 py-8">
                         <div className="space-y-2">
                            <p className="font-mono text-[8px] uppercase tracking-widest text-stone-500 font-bold">Tech_Stack</p>
                            <div className="flex flex-wrap gap-2">
                               {pillar.tech.map(t => (
                                 <span key={t} className="text-[9px] font-mono text-white/60 border border-white/10 px-2 py-1 uppercase">{t}</span>
                               ))}
                            </div>
                         </div>
                         <div className="space-y-2">
                            <p className="font-mono text-[8px] uppercase tracking-widest text-stone-500 font-bold">Acquisition_Fee</p>
                            <p className="text-white text-xl font-serif italic">{pillar.price}</p>
                         </div>
                      </div>

                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                         <div className="bg-white text-black p-4 inline-block">
                            <p className="text-[8px] uppercase tracking-[0.3em] font-bold opacity-60 mb-1">Expected Outcome</p>
                            <p className="text-xs font-serif italic font-bold tracking-widest">{pillar.result}</p>
                         </div>
                         <button className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-bold text-white">
                            Trace Method <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                         </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {expanded !== idx && (
                   <div className="flex justify-center lg:justify-start">
                      <Plus className="text-stone-800 group-hover:text-stone-500 transition-colors" size={20} />
                   </div>
                )}
              </div>

            </div>
          </motion.div>
        ))}
      </div>

      {/* 3. FOOTER: SYSTEM NOTES */}
      <div className="max-w-[1800px] mx-auto mt-20 flex flex-wrap gap-12 opacity-[0.15]">
         <div className="flex items-center gap-4">
            <Shield size={14} className="text-white" />
            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white">Clinical_Verification_Standard</p>
         </div>
         <div className="flex items-center gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white">Real_Time_Audit_Logic</p>
         </div>
      </div>

    </section>
  );
};

export default PillarSystem;