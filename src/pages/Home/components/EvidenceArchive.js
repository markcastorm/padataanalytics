import React from "react";
import { motion } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";

const evidence = [
  {
    id: "01",
    stat: "$722K",
    label: "Revenue Analysed",
    title: "The Attribution Audit",
    challenge: "Client spending across Google, Meta, and TikTok with zero visibility into actual profit attribution.",
    outcome: "Identified 32% waste in TikTok spend. Reallocated to high-intent Search, doubling overall ROAS in 90 days."
  },
  {
    id: "02",
    stat: "+45%",
    label: "Retention Growth",
    title: "Consumer Cohort Analysis",
    challenge: "E-commerce brand assuming healthy growth while acquisition costs were silently climbing.",
    outcome: "Analysis revealed 99% revenue from returning users. Built a new acquisition funnel targeting high-LTV lookalikes."
  },
  {
    id: "03",
    stat: "100%",
    label: "Impact Transparency",
    title: "NGO Monitoring System",
    challenge: "A Nairobi-based NGO needing to prove programme efficacy to international institutional donors.",
    outcome: "Built a real-time M&E system. Secured a 3-year funding extension within 4 months of implementation."
  }
];

const EvidenceArchive = () => {
  return (
    <section className="bg-[#FBFBF9] py-24 md:py-40">
      {/* SECTION HEADER */}
      <div className="px-6 md:px-16 lg:px-24 mb-32">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-[1px] bg-stone-300"></div>
          <p className="text-[10px] uppercase tracking-[0.6em] text-stone-400 font-bold">Selected Evidence</p>
        </div>
        <h2 className="text-[#111] text-5xl md:text-8xl font-serif leading-tight">
          Quantifying <span className="italic text-stone-400">Success.</span>
        </h2>
      </div>

      {/* EVIDENCE BLOCKS */}
      <div className="space-y-0">
        {evidence.map((item, idx) => (
          <div key={item.id} className="border-t border-stone-200 group">
            <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[60vh]">
              
              {/* LEFT: THE STAT (PINNED FEEL) */}
              <div className="lg:col-span-5 flex flex-col justify-center p-8 md:p-16 lg:p-24 border-r border-stone-200 bg-white/50 group-hover:bg-white transition-colors duration-700">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="font-mono text-xs text-stone-400 mb-8 block italic"
                >
                  Project Archive — {item.id}
                </motion.span>
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-7xl md:text-9xl font-serif italic text-[#111] leading-none mb-4"
                >
                  {item.stat}
                </motion.h3>
                <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#3ab5d8]">
                  {item.label}
                </p>
              </div>

              {/* RIGHT: THE NARRATIVE */}
              <div className="lg:col-span-7 flex flex-col justify-center p-8 md:p-16 lg:p-24 space-y-12">
                <div>
                  <h4 className="text-2xl md:text-4xl font-serif text-[#111] mb-6">
                    {item.title}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <p className="text-[9px] uppercase tracking-widest font-bold text-stone-400">The Challenge</p>
                      <p className="text-stone-600 text-sm leading-relaxed">
                        {item.challenge}
                      </p>
                    </div>
                    <div className="space-y-4">
                      <p className="text-[9px] uppercase tracking-widest font-bold text-[#3ab5d8]">The Outcome</p>
                      <p className="text-stone-800 text-sm leading-relaxed font-medium">
                        {item.outcome}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-stone-100 flex justify-between items-center">
                  <div className="flex gap-4">
                    <span className="text-[8px] uppercase tracking-widest font-bold px-3 py-1 border border-stone-200 text-stone-400 rounded-full">Analysis</span>
                    <span className="text-[8px] uppercase tracking-widest font-bold px-3 py-1 border border-stone-200 text-stone-400 rounded-full">Strategy</span>
                  </div>
                  <button className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400 hover:text-[#111] transition-colors group/btn">
                    Details <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* BOTTOM FOOTER */}
      <div className="border-t border-stone-200 py-20 px-8 flex justify-center bg-white">
         <div className="text-center">
            <p className="text-stone-400 text-xs uppercase tracking-widest mb-8">Ready to see these numbers in your business?</p>
            <a href="#contact" className="group flex flex-col items-center">
               <span className="font-serif text-4xl md:text-6xl italic text-[#111] mb-4 hover:text-[#3ab5d8] transition-colors cursor-pointer">Start the Audit</span>
               <div className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-[#111] transition-all duration-500">
                  <Plus size={20} className="group-hover:text-white transition-colors" />
               </div>
            </a>
         </div>
      </div>
    </section>
  );
};

export default EvidenceArchive;