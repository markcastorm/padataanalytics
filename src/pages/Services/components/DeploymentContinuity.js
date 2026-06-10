
import React from "react";
import { motion } from "framer-motion";
import { PlayCircle, Clock, RefreshCw, ShieldCheck, ArrowRight, Terminal } from "lucide-react";

const DeploymentContinuity = () => {
  return (
    <section className="relative bg-[#FDFDFC] py-32 md:py-64 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-stone-100">
      
      {/* 1. THE PULSE ANIMATION (Subtle Luxury) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-[0.03]">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-black rounded-full"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] border border-black rounded-full"
        />
      </div>

      <div className="max-w-[1700px] mx-auto relative z-10">
        
        {/* HEADER: CONTINUITY MANIFESTO */}
        <div className="grid lg:grid-cols-12 gap-10 mb-32 items-end">
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <RefreshCw size={16} className="text-stone-400" />
              <span className="font-mono text-[9px] text-stone-400 tracking-[0.5em] uppercase font-bold">Protocol_05 // Continuity_Retainer</span>
            </motion.div>
            <h2 className="text-[#111] text-5xl md:text-8xl lg:text-9xl font-serif leading-[0.9] tracking-tighter">
              A Perpetual <br /> 
              <span className="italic text-stone-300 font-light">Commercial Pulse.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pb-4">
             <div className="max-w-xs space-y-8 border-l border-stone-200 pl-10">
                <p className="text-stone-500 text-sm md:text-base leading-relaxed font-light italic">
                   "We don't just dump data and leave. We maintain the integrity of your decisions through recurring clinical oversight."
                </p>
                <div className="h-[1px] w-12 bg-[#111]" />
             </div>
          </div>
        </div>

        {/* THE RETAINER SPECIFICATION */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* LEFT: THE SERVICE GUARANTEE */}
          <div className="lg:col-span-6 space-y-16">
             <div className="space-y-6">
                <div className="flex items-center gap-4 text-stone-400">
                   <PlayCircle size={20} strokeWidth={1.5} />
                   <span className="font-mono text-[10px] uppercase tracking-widest font-bold">Visual_Briefing_Protocol</span>
                </div>
                <h3 className="text-[#111] text-3xl md:text-5xl font-serif leading-tight">Video Walkthroughs & <br /> Strategic Commentary.</h3>
                <p className="text-stone-500 text-sm md:text-lg leading-loose font-light max-w-xl">
                   Every cycle, you receive a personalized video walkthrough of your performance data. We don't just report what happened; we explain the **'Why'** and the **'What Next,'** providing total peace of mind for high-stakes strategic pivots.
                </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-stone-100">
                <div className="space-y-3">
                   <div className="flex items-center gap-3">
                      <Clock size={16} className="text-stone-300" />
                      <p className="text-[#111] text-xs font-bold uppercase tracking-widest">Update Frequency</p>
                   </div>
                   <p className="text-stone-500 text-sm font-serif italic">Weekly or Monthly Syncs</p>
                </div>
                <div className="space-y-3">
                   <div className="flex items-center gap-3">
                      <ShieldCheck size={16} className="text-stone-300" />
                      <p className="text-[#111] text-xs font-bold uppercase tracking-widest">Oversight Level</p>
                   </div>
                   <p className="text-stone-500 text-sm font-serif italic">Lead Analyst Maintenance</p>
                </div>
             </div>
          </div>

          {/* RIGHT: THE SUBSCRIPTION ARTIFACT */}
          <div className="lg:col-span-6">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="bg-[#0A0A0A] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl"
             >
                {/* Internal HUD Decoration */}
                <div className="absolute top-0 right-0 p-8 opacity-10">
                   <Terminal size={40} strokeWidth={1} />
                </div>
                
                <div className="relative z-10 space-y-12">
                   <div>
                      <p className="font-mono text-[9px] text-[#3AB5D8] uppercase tracking-[0.5em] mb-4">Recurring_Value</p>
                      <h4 className="text-4xl md:text-6xl font-serif italic tracking-tighter">Decision <br /> System Retainer.</h4>
                   </div>

                   <div className="space-y-4">
                      {[
                        "Continuous ad-spend optimization",
                        "Inventory & ROAS correlation",
                        "Predictive churn probability alerts",
                        "Live Dashboard maintenance"
                      ].map(item => (
                        <div key={item} className="flex items-center gap-4 text-stone-500 group hover:text-white transition-colors">
                           <div className="h-[1px] w-4 bg-[#3AB5D8]" />
                           <span className="text-[10px] uppercase tracking-widest font-medium">{item}</span>
                        </div>
                      ))}
                   </div>

                   <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                      <div className="text-center md:text-left">
                         <p className="font-mono text-[8px] uppercase tracking-widest text-stone-600 mb-1">Baseline_Price</p>
                         <p className="text-3xl font-serif">$150<span className="text-xs font-mono text-stone-600 ml-2">/MO</span></p>
                      </div>
                      <a href="/contact" className="px-10 py-5 bg-white text-black text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-[#3AB5D8] hover:text-white transition-all shadow-xl flex items-center gap-4">
                         Initiate Retainer <ArrowRight size={14} />
                      </a>
                   </div>
                </div>
             </motion.div>
          </div>

        </div>

      </div>

      {/* BACKGROUND DECORATION */}
      <div className="absolute bottom-10 right-10 opacity-[0.015] pointer-events-none select-none">
         <h3 className="text-[15vw] font-serif font-black uppercase italic leading-none">CONTINUITY</h3>
      </div>
    </section>
  );
};

export default DeploymentContinuity;