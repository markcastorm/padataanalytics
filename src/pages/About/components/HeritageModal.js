import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Terminal, ShieldCheck, Zap, Layers, Cpu, ArrowRight, CheckCircle2 } from "lucide-react";

const HeritageModal = ({ isOpen, onClose, data }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isOpen]);

  if (!data) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/98 backdrop-blur-2xl" />

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-7xl h-[90vh] bg-[#0D0D0D] border border-white/10 flex flex-col md:flex-row overflow-hidden shadow-2xl"
          >
            {/* 1. SCROLLABLE CONTENT (65%) */}
            <div className="flex-1 h-full overflow-y-auto p-8 md:p-16 lg:p-24 border-r border-white/5 custom-scrollbar">
              <div className="max-w-3xl">
                {/* Header Metadata */}
                <div className="flex items-center gap-6 mb-16 text-stone-600">
                   <div className="p-3 bg-stone-900 border border-white/5 rounded-sm">{data.icon}</div>
                   <div className="h-[1px] w-20 bg-stone-800" />
                   <span className="font-mono text-[10px] tracking-[0.4em] uppercase font-bold text-white">Full_Stack_Audit // 0{data.index + 1}</span>
                </div>

                <h2 className="text-white text-5xl md:text-8xl font-serif leading-none mb-12 italic">
                   {data.category}
                </h2>

                <div className="space-y-24">
                   {/* SECTION: BRIEFING */}
                   <section>
                      <p className="font-mono text-[9px] text-[#3AB5D8] uppercase tracking-[0.5em] mb-8 font-bold">// Strategic_Objective</p>
                      <p className="text-stone-300 text-xl md:text-3xl font-light leading-relaxed italic mb-10 font-serif">
                        "{data.detailedDesc}"
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                         {data.tools.map(tool => (
                           <span key={tool} className="text-[10px] font-mono text-stone-500 border border-stone-800 px-3 py-2 uppercase">{tool}</span>
                         ))}
                      </div>
                   </section>

                   {/* SECTION: PROTOCOL (THE VALUE) */}
                   <section className="space-y-12">
                      <p className="font-mono text-[9px] text-stone-600 uppercase tracking-[0.5em] font-bold">// Implementation_Protocol</p>
                      <div className="space-y-1">
                        {data.protocol.map((step, i) => (
                          <div key={i} className="group p-8 bg-white/[0.01] border-b border-white/5 flex gap-10 hover:bg-white/[0.03] transition-colors">
                             <span className="font-serif italic text-3xl text-stone-800 group-hover:text-[#3AB5D8] transition-colors">{step.step}</span>
                             <div>
                                <h4 className="text-white text-lg font-serif mb-2">{step.title}</h4>
                                <p className="text-stone-500 text-sm leading-relaxed font-light">{step.detail}</p>
                             </div>
                          </div>
                        ))}
                      </div>
                   </section>

                   {/* SECTION: DELIVERABLES */}
                   <section className="pb-12">
                      <p className="font-mono text-[9px] text-stone-600 uppercase tracking-[0.5em] font-bold mb-10">// Project_Deliverables</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         {data.deliverables.map((item, i) => (
                           <div key={i} className="flex items-center gap-4 text-stone-400">
                              <CheckCircle2 size={16} className="text-[#3AB5D8]" />
                              <span className="text-[11px] uppercase tracking-widest font-medium">{item}</span>
                           </div>
                         ))}
                      </div>
                   </section>
                </div>
              </div>
            </div>

            {/* 2. SYSTEM SIDEBAR (35%) */}
            <div className="w-full md:w-[400px] h-full bg-[#090909] p-8 md:p-16 flex flex-col justify-between relative overflow-hidden">
               {/* Decorative Watermark */}
               <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.02] text-[15vw] font-serif font-black italic select-none pointer-events-none text-white">TECH</div>

               <div className="relative z-10 space-y-16">
                  <div className="flex items-center gap-4">
                     <Terminal size={18} className="text-stone-700" />
                     <span className="font-mono text-[10px] text-stone-500 uppercase tracking-widest font-bold">Dossier_Manifest</span>
                  </div>

                  <div className="space-y-12">
                     <div className="space-y-3">
                        <p className="font-mono text-[8px] uppercase tracking-widest text-[#3AB5D8] font-bold">Use Case Audit</p>
                        <p className="text-white text-sm font-serif italic leading-relaxed">{data.useCase}</p>
                     </div>
                     <div className="space-y-8 border-t border-white/5 pt-10">
                        <SidebarStat label="Base_Operations" val="Nairobi Hub" />
                        <SidebarStat label="Security_Standard" val={data.security} />
                        <SidebarStat label="Audit_Ready" val="100% Compliance" />
                        <SidebarStat label="Lead_Analyst" val="Patience Anono" />
                     </div>
                  </div>
               </div>

               <div className="relative z-10 pt-12 border-t border-white/10">
                  <p className="text-stone-600 font-mono text-[8px] uppercase tracking-[0.5em] mb-6 text-center italic">Ready_for_deployment</p>
                  <button className="w-full py-6 bg-white text-black text-[10px] uppercase tracking-[0.6em] font-bold hover:bg-[#3AB5D8] hover:text-white transition-all shadow-xl flex items-center justify-center gap-4">
                     Trace Method <ArrowRight size={14} />
                  </button>
               </div>
            </div>

            <button onClick={onClose} className="absolute top-8 right-8 z-50 text-stone-600 hover:text-white transition-colors">
              <X size={32} strokeWidth={1} />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const SidebarStat = ({ label, val }) => (
  <div className="space-y-2">
    <p className="font-mono text-[8px] uppercase tracking-widest text-stone-700 font-bold">{label}</p>
    <p className="text-white text-[10px] uppercase tracking-[0.2em] font-bold">{val}</p>
  </div>
);

export default HeritageModal;