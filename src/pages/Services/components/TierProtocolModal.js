import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, Terminal, ArrowRight, Command, CheckCircle2, ChevronLeft, Info, FileText } from "lucide-react";

const TierProtocolModal = ({ isOpen, onClose, data }) => {
  const [activeQuad, setActiveQuad] = useState(null);

  // Sync scroll lock with modal state
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setActiveQuad(null); 
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
    <AnimatePresence mode="wait">
      {isOpen && data && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-[#050505] text-white flex flex-col overflow-y-auto custom-scrollbar"
        >
          {/* 1. ARCHITECTURAL BACKGROUND */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
             <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white" />
             <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white" />
             <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at center, #fff 1px, transparent 0)`, backgroundSize: '60px 60px' }} />
          </div>

          {/* 2. TOP SYSTEM INTERFACE (STICKY) */}
          <div className="relative z-[110] w-full p-6 md:p-10 flex justify-between items-center border-b border-white/5 bg-[#050505]/95 backdrop-blur-md sticky top-0">
             <div className="flex items-center gap-6">
                <div className="p-3 border border-[#3AB5D8]/40 rounded-full text-[#3AB5D8] animate-pulse">
                   <Command size={18} />
                </div>
                <div>
                   <p className="font-mono text-[9px] text-stone-500 uppercase tracking-[0.5em] font-bold">System_Protocol // 2024</p>
                   <p className="text-white text-xs font-bold uppercase tracking-widest">
                     {data.id} {activeQuad ? `// ${activeQuad.title}` : ""}
                   </p>
                </div>
             </div>
             
             {/* THE ABORT BUTTON - FIXED ONCLICK */}
             <button 
                type="button"
                onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                }}
                className="group flex items-center gap-4 text-stone-500 hover:text-white transition-all cursor-pointer relative z-[120]"
             >
                <span className="font-mono text-[10px] uppercase tracking-widest hidden sm:block">Abort_Session</span>
                <X size={32} strokeWidth={1} />
             </button>
          </div>

          {/* 3. MAIN CONTENT: THE QUADRANT DOSSIER */}
          <div className="relative z-10 max-w-[1700px] mx-auto w-full px-6 md:px-12 lg:px-24 py-20">
             <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
                
                {/* LEFT: INTERACTIVE AREA */}
                <div className="lg:col-span-8 space-y-12 relative min-h-[700px]">
                   <div className="flex justify-between items-center h-10">
                      <p className="font-mono text-[9px] text-stone-500 uppercase tracking-widest font-bold">// Tactical_Capabilities</p>
                      {activeQuad && (
                          <button 
                            onClick={() => setActiveQuad(null)} 
                            className="flex items-center gap-3 text-[#3AB5D8] font-mono text-[10px] uppercase tracking-widest hover:text-white transition-colors"
                          >
                             <ChevronLeft size={14} /> Back to Grid
                          </button>
                      )}
                   </div>

                   <div className="relative">
                      {/* THE GRID (Visible when no quad is active) */}
                      <motion.div 
                        animate={{ opacity: activeQuad ? 0 : 1, y: activeQuad ? 20 : 0, scale: activeQuad ? 0.98 : 1 }}
                        className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${activeQuad ? "pointer-events-none" : ""}`}
                      >
                         {data.quadrants.map((q, i) => (
                           <div 
                              key={i} 
                              onClick={() => setActiveQuad(q)} 
                              className="p-10 bg-white/[0.02] border border-white/5 flex flex-col justify-between group hover:border-[#3AB5D8]/40 transition-all cursor-pointer min-h-[300px] relative overflow-hidden"
                           >
                              <div className="flex justify-between items-start mb-10">
                                 <span className="font-serif italic text-4xl text-stone-800 group-hover:text-[#3AB5D8] transition-colors">0{i+1}</span>
                                 <span className="font-mono text-[8px] text-stone-500 border border-white/10 px-2 py-1 uppercase">{q.tech}</span>
                              </div>
                              <div>
                                 <h4 className="text-white text-xl uppercase tracking-tight font-serif mb-4">{q.title}</h4>
                                 <p className="text-stone-500 text-sm leading-relaxed font-light">{q.desc}</p>
                                 <p className="text-[#3AB5D8] font-mono text-[8px] uppercase tracking-widest mt-6 opacity-0 group-hover:opacity-100 transition-opacity">Inspect Technical Brief_</p>
                              </div>
                           </div>
                         ))}
                      </motion.div>

                      {/* THE SUB-MODAL EXPANSION OVERLAY */}
                      <AnimatePresence>
                         {activeQuad && (
                           <motion.div 
                             initial={{ opacity: 0, scale: 1.02 }} 
                             animate={{ opacity: 1, scale: 1 }} 
                             exit={{ opacity: 0, scale: 1.02 }}
                             className="absolute inset-0 z-30 bg-[#050505] border border-[#3AB5D8]/20 p-10 md:p-16 flex flex-col shadow-2xl min-h-[650px]"
                           >
                              <div className="flex-1 flex flex-col lg:flex-row gap-16 overflow-y-auto custom-scrollbar pr-6">
                                 <div className="lg:w-1/2 space-y-10">
                                    <div className="flex items-center gap-4 text-[#3AB5D8]">
                                       <Terminal size={20} />
                                       <span className="font-mono text-[10px] uppercase tracking-[0.4em] font-bold text-white">Clinical_Brief // {activeQuad.tech}</span>
                                    </div>
                                    <h3 className="text-white text-4xl md:text-6xl font-serif italic uppercase leading-none">
                                      {activeQuad.deepBrief.objective}
                                    </h3>
                                    <p className="text-stone-400 text-lg leading-relaxed font-light uppercase tracking-widest">
                                      Methodology: {activeQuad.title}
                                    </p>
                                 </div>

                                 <div className="lg:w-1/2 space-y-12">
                                    <div>
                                       <p className="font-mono text-[9px] text-stone-600 uppercase tracking-widest font-bold mb-8">Technical_Protocols</p>
                                       <div className="space-y-6">
                                          {activeQuad.deepBrief.points.map((pt, idx) => (
                                            <div key={idx} className="flex gap-6 group">
                                               <div className="h-6 w-6 rounded-full border border-stone-800 flex items-center justify-center text-[#3AB5D8] font-mono text-[10px] shrink-0">
                                                 {idx + 1}
                                               </div>
                                               <p className="text-stone-300 text-sm md:text-base leading-relaxed font-light border-b border-white/5 pb-4 group-hover:text-white transition-colors">
                                                 {pt}
                                               </p>
                                            </div>
                                          ))}
                                       </div>
                                    </div>
                                    
                                    <div className="bg-[#111] p-8 border-l-2 border-[#3AB5D8]">
                                       <p className="font-mono text-[8px] text-stone-500 uppercase mb-2">Final_Output</p>
                                       <p className="text-white text-xl font-serif italic tracking-wide">
                                         {activeQuad.deepBrief.output}
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div className="pt-10 flex justify-between items-center border-t border-white/5 mt-8">
                                 <button onClick={() => setActiveQuad(null)} className="text-stone-500 hover:text-white font-mono text-[9px] uppercase tracking-widest flex items-center gap-3 transition-colors">
                                    <ChevronLeft size={14} /> Close Documentation
                                 </button>
                                 <div className="flex items-center gap-4 text-[9px] uppercase tracking-[0.4em] font-bold text-[#3AB5D8]">
                                    Trace Logical Sequence <ArrowRight size={14} />
                                 </div>
                              </div>
                           </motion.div>
                         )}
                      </AnimatePresence>
                   </div>
                </div>

                {/* RIGHT: SYSTEM CONTEXT */}
                <div className="lg:col-span-4 space-y-20 lg:pt-32">
                   <div className="bg-white/[0.01] border border-white/5 p-10 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-6 opacity-10"><ShieldCheck size={40} /></div>
                      <p className="font-mono text-[9px] text-[#3AB5D8] uppercase tracking-widest mb-10 font-bold">// Quality_Manifest</p>
                      <div className="space-y-10">
                         <div className="flex justify-between items-end border-b border-white/5 pb-4">
                            <p className="font-mono text-[8px] uppercase tracking-widest text-stone-600">Security</p>
                            <p className="text-white text-[10px] uppercase font-bold tracking-widest">AES_256 Bit RSA</p>
                         </div>
                         <div className="flex justify-between items-end border-b border-white/5 pb-4">
                            <p className="font-mono text-[8px] uppercase tracking-widest text-stone-600">Compliance</p>
                            <p className="text-white text-[10px] uppercase font-bold tracking-widest">ISO_S Integrity</p>
                         </div>
                         <div className="flex justify-between items-end border-b border-white/5 pb-4">
                            <p className="font-mono text-[8px] uppercase tracking-widest text-stone-600">Base_Ops</p>
                            <p className="text-white text-[10px] uppercase font-bold tracking-widest">NBO Hub</p>
                         </div>
                      </div>
                   </div>

                   <section className="space-y-10">
                      <p className="font-mono text-[9px] text-stone-500 uppercase tracking-widest font-bold">// System_Interaction</p>
                      <div className="space-y-6">
                         <div className="flex items-center gap-6">
                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-stone-400">
                               <Info size={16} />
                            </div>
                            <div>
                               <p className="text-white text-[10px] uppercase font-bold tracking-widest">Audit Ready</p>
                               <p className="text-stone-600 text-[10px]">100% Traceable Logic.</p>
                            </div>
                         </div>
                         <div className="flex items-center gap-6">
                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-stone-400">
                               <FileText size={16} />
                            </div>
                            <div>
                               <p className="text-white text-[10px] uppercase font-bold tracking-widest">Custom Built</p>
                               <p className="text-stone-600 text-[10px]">Non-templating protocol.</p>
                            </div>
                         </div>
                      </div>
                   </section>
                </div>
             </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TierProtocolModal;