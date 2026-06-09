import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { impactTiers } from "./data/impactData"; // Adjust path as needed
import ImpactAuditModal from "./ImpactAuditModal";

const EthicalSpecialism = () => {
  const [selectedTierIndex, setSelectedTierIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (index) => {
    setSelectedTierIndex(index); // This should be 0, 1, or 2
    setIsModalOpen(true);
  };

  return (
    <section className="relative bg-[#FDFDFC] py-32 md:py-64 px-6 md:px-12 lg:px-24 overflow-hidden">
      <ImpactAuditModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} initialTierIndex={selectedTierIndex} />

      {/* HEADER SECTION (Restored exactly as your original) */}
      <div className="max-w-[1700px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-40 items-start">
          <div className="lg:col-span-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="flex items-center gap-4 mb-10">
              <div className="w-2 h-2 rounded-full bg-stone-300 animate-pulse" />
              <span className="font-mono text-[10px] text-stone-400 tracking-[0.6em] uppercase font-bold">Ethical_Intelligence</span>
            </motion.div>
            <h2 className="text-[#111] text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.9] tracking-tighter">
              Bridges for <br />
              <span className="italic text-stone-300 font-light text-5xl md:text-7xl">Missions.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pt-32">
             <div className="max-w-xs space-y-10 border-l border-stone-200 pl-10">
                <p className="text-stone-500 text-sm md:text-base leading-relaxed font-light italic">
                   "We do not view data as cold logic. We view it as the evidence required to prove that change is possible."
                </p>
             </div>
          </div>
        </div>

        {/* THE SLIDING SCALE LIST */}
        <div className="space-y-1 w-full border-t border-stone-100">
           {impactTiers.map((tier, idx) => (
             <motion.div
               key={tier.id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: idx * 0.1 }}
               onClick={() => handleOpenModal(idx)}
               className="group grid lg:grid-cols-12 gap-10 py-16 md:py-24 border-b border-stone-100 hover:bg-stone-50 transition-colors duration-700 items-center px-4 cursor-pointer"
             >
                <div className="lg:col-span-1">
                   <span className="font-mono text-xs text-stone-300 group-hover:text-[#111] transition-colors">{tier.id}</span>
                </div>
                <div className="lg:col-span-4 space-y-4">
                   <div className="flex items-center gap-3 text-stone-400">
                      <tier.icon size={18} strokeWidth={1.5} />
                      <span className="font-mono text-[9px] uppercase tracking-widest">{tier.phase}</span>
                   </div>
                   <h3 className="text-[#111] text-3xl md:text-5xl font-serif group-hover:italic transition-all duration-500">{tier.title}</h3>
                </div>
                <div className="lg:col-span-4">
                   <p className="text-stone-500 text-sm leading-loose font-light max-w-sm">{tier.summary}</p>
                </div>
                <div className="lg:col-span-3 text-right space-y-4">
                   <div><p className="text-[#111] text-2xl font-serif italic">{tier.rate}</p></div>
                   <button className="inline-flex items-center gap-4 text-[9px] uppercase tracking-[0.4em] font-bold text-stone-400 group-hover:text-stone-900 transition-colors">
                      Open Mission Audit <ArrowUpRight size={14} />
                   </button>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default EthicalSpecialism;