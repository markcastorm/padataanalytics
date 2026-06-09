import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Terminal, ArrowRight, ShieldCheck, ChevronDown, CheckCircle2, Box, Info } from "lucide-react";
import { impactTiers } from "./data/impactData";

const ImpactAuditModal = ({ isOpen, onClose, initialTierIndex }) => {
  const [activeModule, setActiveModule] = useState(null);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isOpen]);

  if (!isOpen) return null;
  const data = impactTiers[initialTierIndex];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
        {/* BACKDROP */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/98 backdrop-blur-3xl" />

        {/* MODAL CASE */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-7xl h-[90vh] bg-[#0A0A0A] border border-white/10 flex flex-col lg:flex-row overflow-hidden shadow-[0_0_120px_rgba(0,0,0,0.5)]"
        >
          {/* LEFT: FIXED EXECUTIVE SUMMARY (40%) */}
          <div className="w-full lg:w-[450px] h-full bg-[#080808] p-8 md:p-16 border-r border-white/5 flex flex-col justify-between relative overflow-hidden">
             {/* Decorative technical stamp */}
             <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.02] text-[20vw] font-serif font-black italic select-none pointer-events-none text-white">NGO</div>

             <div className="relative z-10">
                <div className="flex items-center gap-4 mb-12">
                   <div className="p-3 bg-stone-900 border border-white/5 rounded-full text-[#3AB5D8]">
                      <data.icon size={24} strokeWidth={1.5} />
                   </div>
                   <span className="font-mono text-[10px] text-stone-500 tracking-[0.4em] uppercase font-bold">Personnel_Brief</span>
                </div>

                <p className="font-mono text-[9px] text-stone-600 uppercase tracking-widest mb-4">Tier_Identification</p>
                <h2 className="text-white text-4xl md:text-6xl font-serif leading-none mb-10 italic">{data.title}</h2>
                
                <div className="space-y-8 pt-10 border-t border-white/5">
                   <div className="space-y-2">
                      <p className="font-mono text-[8px] uppercase tracking-widest text-[#3AB5D8] font-bold">The Mission Logic</p>
                      <p className="text-stone-300 text-lg font-serif italic leading-relaxed">"{data.missionStatement}"</p>
                   </div>
                   <div className="space-y-4">
                      <SummaryStat label="Deployment_Rate" val={data.rate} />
                      <SummaryStat label="Audit_Standard" val={data.compliance} />
                   </div>
                </div>
             </div>

             <div className="relative z-10 pt-10 border-t border-white/5">
                <p className="text-stone-600 font-mono text-[8px] uppercase tracking-[0.5em] mb-6 text-center italic">Awaiting_Instructions</p>
                <a href="/contact" className="w-full py-6 bg-white text-black text-[10px] uppercase tracking-[0.6em] font-bold hover:bg-[#3AB5D8] hover:text-white transition-all shadow-xl flex items-center justify-center gap-4 group">
                   Inquire for Mission <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
             </div>
          </div>

          {/* RIGHT: DEEP-DIVE DOCUMENTATION (60%) */}
          <div className="flex-1 h-full overflow-y-auto custom-scrollbar bg-[#0A0A0A] p-8 md:p-16 lg:p-24">
             <div className="max-w-2xl mx-auto space-y-24">
                
                {/* SECTION 1: INTERACTIVE MODULES */}
                <section>
                   <div className="flex items-center gap-4 mb-12">
                      <Terminal size={16} className="text-[#3AB5D8]" />
                      <p className="font-mono text-[10px] text-stone-500 uppercase tracking-[0.5em] font-bold">Technical_Appendix // Open_Modules</p>
                   </div>

                   <div className="space-y-6">
                      {data.modules.map((module, i) => (
                        <div 
                           key={i} 
                           className={`border border-white/5 transition-all duration-500 overflow-hidden cursor-pointer ${activeModule === i ? "bg-white/[0.03] border-white/10" : "bg-transparent hover:border-white/20"}`}
                           onClick={() => setActiveModule(activeModule === i ? null : i)}
                        >
                           <div className="p-8 flex items-center justify-between gap-10">
                              <div className="flex items-center gap-8">
                                 <span className="font-mono text-xs text-stone-700">0{i + 1}</span>
                                 <div>
                                    <h4 className="text-white text-xl font-serif mb-1">{module.title}</h4>
                                    <p className="text-stone-500 text-[10px] uppercase tracking-widest font-bold">{module.label}</p>
                                 </div>
                              </div>
                              <ChevronDown className={`text-stone-500 transition-transform duration-500 ${activeModule === i ? "rotate-180" : ""}`} size={20} />
                           </div>

                           <AnimatePresence>
                             {activeModule === i && (
                               <motion.div 
                                 initial={{ height: 0, opacity: 0 }}
                                 animate={{ height: "auto", opacity: 1 }}
                                 exit={{ height: 0, opacity: 0 }}
                                 className="px-8 pb-10"
                               >
                                  <div className="pt-6 border-t border-white/5 space-y-8">
                                     <p className="text-stone-300 text-sm md:text-base leading-relaxed font-light italic">
                                        {module.detail}
                                     </p>
                                     <div className="grid grid-cols-2 gap-8 py-6 bg-black/40 px-6 rounded-sm">
                                        <div>
                                           <p className="font-mono text-[8px] uppercase tracking-widest text-[#3AB5D8] mb-2 font-bold">Technical Stack</p>
                                           <p className="text-white text-[10px] font-mono uppercase">{module.tech}</p>
                                        </div>
                                        <div>
                                           <p className="font-mono text-[8px] uppercase tracking-widest text-[#3AB5D8] mb-2 font-bold">Primary Output</p>
                                           <p className="text-white text-[10px] font-mono uppercase">{module.output}</p>
                                        </div>
                                     </div>
                                  </div>
                               </motion.div>
                             )}
                           </AnimatePresence>
                        </div>
                      ))}
                   </div>
                </section>

                {/* SECTION 2: GALLERY / EVIDENCE */}
                <section className="space-y-10">
                   <div className="flex items-center gap-4 mb-6">
                      <Box size={16} className="text-stone-500" />
                      <p className="font-mono text-[10px] text-stone-500 uppercase tracking-[0.5em] font-bold">Field_Visual_Verification</p>
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {data.gallery.map((img, i) => (
                        <div key={i} className="aspect-video overflow-hidden border border-white/5 group">
                           <img src={img} className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[3s]" alt="Dossier evidence" />
                        </div>
                      ))}
                   </div>
                </section>

                {/* SECTION 3: FINAL TRUST */}
                <section className="p-10 border border-white/5 bg-white/[0.01] flex items-center gap-10">
                   <ShieldCheck size={40} strokeWidth={1} className="text-[#3AB5D8] shrink-0" />
                   <div>
                      <h4 className="text-white text-lg font-serif mb-2 italic">Clinical Impact Reporting</h4>
                      <p className="text-stone-500 text-[10px] leading-loose uppercase tracking-[0.2em] font-medium">
                        Every social impact metric delivered is statistically verified and prepared for international donor review cycles.
                      </p>
                   </div>
                </section>

             </div>
          </div>

          <button 
            onClick={onClose} 
            className="absolute top-8 right-8 z-50 p-3 bg-stone-900/50 rounded-full text-stone-500 hover:text-white transition-all hover:bg-stone-800"
          >
            <X size={24} strokeWidth={1} />
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

const SummaryStat = ({ label, val }) => (
  <div className="space-y-1">
    <p className="font-mono text-[8px] uppercase tracking-widest text-stone-600 font-bold">{label}</p>
    <p className="text-white text-xs uppercase tracking-widest font-bold">{val}</p>
  </div>
);

export default ImpactAuditModal;