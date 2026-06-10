import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Terminal, ShieldCheck, Activity, Code2, Globe, ArrowRight } from "lucide-react";

const SuccessDossierModal = ({ isOpen, onClose, project }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-[#050505] flex flex-col md:flex-row overflow-hidden"
        >
          {/* 1. LEFT SIDE: TECHNICAL BRIEFING (60%) */}
          <div className="w-full lg:w-[60%] h-full overflow-y-auto custom-scrollbar p-8 md:p-16 lg:p-24 border-r border-white/5 bg-[#050505] relative">
            {/* CLOSE BUTTON */}
            <button onClick={onClose} className="absolute top-8 right-8 text-stone-500 hover:text-white transition-all"><X size={32} strokeWidth={1} /></button>

            <div className="max-w-3xl space-y-20">
               <div className="space-y-6">
                  <div className="flex items-center gap-4 text-[#3AB5D8]">
                     <Terminal size={18} />
                     <span className="font-mono text-[10px] tracking-[0.4em] uppercase font-bold text-white">Full_Audit_Documentation // {project.id}</span>
                  </div>
                  <h2 className="text-white text-5xl md:text-8xl font-serif leading-none tracking-tighter uppercase italic">{project.title}</h2>
               </div>

               <section className="space-y-10">
                  <p className="font-mono text-[9px] text-stone-600 uppercase tracking-widest font-bold">// Strategic_Objective</p>
                  <p className="text-stone-300 text-xl md:text-3xl font-light leading-relaxed italic font-serif max-w-2xl">"{project.longDesc}"</p>
               </section>

               {/* BOLD OUTCOME BLOCK (PDF Section 4.5) */}
               <div className="p-10 border-l-2 border-[#3AB5D8] bg-white/[0.02] space-y-6">
                  <p className="font-mono text-[9px] text-[#3AB5D8] uppercase tracking-widest font-bold">Verified_Outcome</p>
                  <p className="text-white text-lg md:text-xl font-bold uppercase tracking-tight leading-relaxed">
                     {project.outcome.split("**").map((part, i) => i % 2 === 1 ? <span key={i} className="text-[#3AB5D8]">{part}</span> : part)}
                  </p>
               </div>

               {/* INTERNAL LOGIC ARTIFACT */}
               <section className="space-y-8">
                  <p className="font-mono text-[9px] text-stone-600 uppercase tracking-widest font-bold">// Technical_Protocol</p>
                  <div className="bg-stone-900/40 p-8 border border-white/5 relative">
                     <div className="flex justify-between mb-8 opacity-40"><Code2 size={16}/><span className="font-mono text-[8px]">PYTHON_v3.1</span></div>
                     <pre className="font-mono text-xs text-[#3AB5D8] leading-relaxed"><code>{project.pythonlogic}</code></pre>
                  </div>
               </section>

               {/* GALLARY SCROLL (Responsive) */}
               <section className="space-y-8 pb-20">
                  <p className="font-mono text-[9px] text-stone-600 uppercase tracking-widest font-bold">// Visual_Evidence_Assets</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {project.gallery.map((img, i) => (
                        <div key={i} className="aspect-video border border-white/5 overflow-hidden group">
                           <img src={img} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" alt="Detail" />
                        </div>
                     ))}
                  </div>
               </section>
            </div>
          </div>

          {/* 2. RIGHT SIDE: SYSTEM DATA (40%) */}
          <div className="hidden lg:flex lg:w-[40%] h-full bg-[#080808] p-16 flex-col justify-between relative overflow-hidden">
             <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.02] text-[15vw] font-serif font-black italic select-none pointer-events-none text-white">PROOF</div>
             <div className="relative z-10 space-y-16">
                <div className="flex items-center gap-4 text-stone-500"><Activity size={20} /><span className="font-mono text-[10px] tracking-widest font-bold uppercase">Metadata_Manifest</span></div>
                <div className="space-y-12">
                   <div className="space-y-4">
                      <p className="font-mono text-[8px] uppercase tracking-widest text-[#3AB5D8] font-bold">Project Integrity</p>
                      <div className="flex items-center gap-4 text-white text-3xl font-serif italic">100% Verified <ShieldCheck size={24} className="text-[#3AB5D8]" /></div>
                   </div>
                   <div className="space-y-10 border-t border-white/5 pt-10">
                      <StatItem label="Operational_Base" val="NBO_HQ" />
                      <StatItem label="Client_Entity" val={project.metadata.client} />
                      <StatItem label="Sector_Target" val={project.cat} />
                      <StatItem label="Audit_Year" val={project.metadata.year} />
                   </div>
                </div>
             </div>
             <div className="relative z-10">
                <a href="/contact" className="w-full py-6 bg-white text-black text-[10px] uppercase tracking-[0.6em] font-bold hover:bg-[#3AB5D8] hover:text-white transition-all shadow-xl flex items-center justify-center gap-4">
                   Inquire for Protocol <ArrowRight size={14} />
                </a>
             </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const StatItem = ({ label, val }) => (
  <div className="flex justify-between items-end border-b border-white/5 pb-4">
    <p className="font-mono text-[8px] uppercase tracking-widest text-stone-600">{label}</p>
    <p className="text-white text-[10px] uppercase font-bold tracking-widest">{val}</p>
  </div>
);

export default SuccessDossierModal;