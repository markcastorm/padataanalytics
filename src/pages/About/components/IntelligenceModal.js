import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Terminal, Share2, Info } from "lucide-react";

const IntelligenceModal = ({ isOpen, onClose, data }) => {
  // Prevent body scroll when modal is open
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
          {/* 1. BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-xl"
          />

          {/* 2. MODAL CASE */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-7xl h-[90vh] bg-[#0D0D0D] border border-white/10 flex flex-col md:flex-row overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)]"
          >
            {/* CLOSE BUTTON */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-50 text-stone-500 hover:text-white hover:rotate-90 transition-all duration-500"
            >
              <X size={32} strokeWidth={1} />
            </button>

            {/* LEFT SIDE: SCROLLABLE DOSSIER (60%) */}
            <div className="flex-1 h-full overflow-y-auto custom-scrollbar p-8 md:p-16 lg:p-24 border-r border-white/5">
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-8 text-[#3AB5D8]">
                   <Terminal size={16} />
                   <span className="font-mono text-[10px] tracking-[0.4em] uppercase font-bold text-white">Depth_Audit // {data.id}</span>
                </div>

                <h2 className="text-white text-4xl md:text-7xl font-serif leading-tight mb-12">
                   {data.title} <br />
                   <span className="italic text-stone-500 font-light italic">Documentation.</span>
                </h2>

                <div className="space-y-12">
                   <section>
                      <p className="font-mono text-[9px] text-stone-600 uppercase tracking-widest mb-6">[ The_Approach ]</p>
                      <p className="text-stone-300 text-lg md:text-xl font-light leading-relaxed italic">
                        {data.desc}
                      </p>
                   </section>

                   <section className="space-y-6">
                      <p className="font-mono text-[9px] text-stone-600 uppercase tracking-widest">[ Methodology_Deep_Dive ]</p>
                      <p className="text-stone-400 text-sm md:text-base leading-loose font-light">
                        {data.longDesc}
                      </p>
                   </section>

                   {/* IMAGE GALLERY SCROLL */}
                   <section className="space-y-8 py-12">
                      <p className="font-mono text-[9px] text-stone-600 uppercase tracking-widest">[ Visual_Evidence_Assets ]</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         {data.gallery.map((img, i) => (
                           <div key={i} className="aspect-square bg-stone-900 border border-white/5 overflow-hidden group">
                              <img src={img} className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" alt="Dossier Detail" />
                           </div>
                         ))}
                      </div>
                   </section>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: TECHNICAL SPECS (40%) */}
            <div className="w-full md:w-[400px] h-full bg-[#080808] p-8 md:p-12 flex flex-col justify-between">
               <div>
                  <div className="flex items-center gap-4 mb-16">
                     <Info size={16} className="text-[#3AB5D8]" />
                     <span className="font-mono text-[10px] text-stone-500 uppercase tracking-[0.3em]">Technical_Manifest</span>
                  </div>

                  <div className="space-y-10">
                     <SpecItem label="Verification" val="ISO_S DATA INTEGRITY" />
                     <SpecItem label="Primary_Tool" val="Python / SQL / Scikit" />
                     <SpecItem label="Security" val="AES_256 ENCRYPTED" />
                     <SpecItem label="Base" val="Nairobi // Kenya" />
                  </div>
               </div>

               <div className="pt-12 border-t border-white/5">
                  <p className="font-mono text-[9px] text-stone-700 uppercase tracking-[0.5em] mb-4 text-center">Protocol_Active</p>
                  <button className="w-full py-5 bg-[#3AB5D8] text-white text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-white hover:text-black transition-all shadow-2xl">
                     Inquire for Method
                  </button>
               </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const SpecItem = ({ label, val }) => (
  <div className="space-y-2">
    <p className="font-mono text-[8px] uppercase tracking-widest text-stone-600 font-bold">{label}</p>
    <p className="text-white text-xs uppercase tracking-[0.2em] font-medium">{val}</p>
  </div>
);

export default IntelligenceModal;