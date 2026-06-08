import React from "react";
import { motion } from "framer-motion";
import { PlayCircle, Clock, BarChart3, ArrowRight } from "lucide-react";

const TheDecisionRetainer = () => {
  return (
    <section className="relative bg-[#050505] py-32 md:py-56 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-white/5">
      
      {/* 1. THE HEARTBEAT ANIMATION (Subtle Luxury) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 0.05, 0], scale: [0.8, 1.5, 2] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 2.5,
              ease: "linear",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-stone-500 rounded-full"
          />
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10 text-center">
        
        {/* HEADER: THE SEO AUTHORITY (Section 4.2) */}
        <div className="max-w-4xl mx-auto mb-20 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex justify-center items-center gap-4 mb-8"
          >
            <span className="w-10 h-[1px] bg-stone-700"></span>
            <p className="font-mono text-[10px] text-stone-500 tracking-[0.6em] uppercase font-bold">
              Protocol 06 // The Retainer
            </p>
            <span className="w-10 h-[1px] bg-stone-700"></span>
          </motion.div>
          
          <h2 className="text-white text-5xl md:text-8xl font-serif leading-[1.1] tracking-tighter mb-12">
            Marketing Analytics <br /> 
            <span className="italic text-stone-600 font-light text-4xl md:text-7xl">Nairobi & Global E-commerce</span> <br />
            Intelligence on Autopilot.
          </h2>
          
          <p className="text-stone-500 text-sm md:text-xl font-light leading-relaxed max-w-2xl mx-auto italic">
            "Your decisions are only as good as your latest data. We provide the stability required to scale, ensuring you never fly blind again."
          </p>
        </div>

        {/* THE RETAINER CARD (The Peace of Mind) */}
        <div className="grid lg:grid-cols-12 gap-px bg-white/5 border border-white/10 max-w-6xl mx-auto overflow-hidden shadow-2xl">
          
          {/* LEFT: THE SERVICE LEVEL */}
          <div className="lg:col-span-7 bg-[#0A0A0A] p-10 md:p-16 text-left border-b lg:border-b-0 lg:border-r border-white/5">
            <div className="flex items-center gap-4 mb-12">
               <div className="p-3 bg-stone-900 text-stone-400 rounded-sm">
                  <PlayCircle size={24} strokeWidth={1} />
               </div>
               <div>
                  <h3 className="text-white text-2xl font-serif">Decision System Retainer</h3>
                  <p className="text-stone-600 text-[9px] uppercase tracking-widest font-bold">Recurring Commercial Clarity</p>
               </div>
            </div>

            <div className="space-y-10">
               <div className="flex gap-6">
                  <Clock className="text-stone-700 shrink-0" size={18} />
                  <div>
                    <p className="text-white text-sm font-medium mb-1 tracking-tight">Weekly or Monthly Syncs</p>
                    <p className="text-stone-500 text-[11px] leading-relaxed uppercase tracking-widest">
                      Continuous oversight of ad-spend, inventory, and churn risk.
                    </p>
                  </div>
               </div>
               <div className="flex gap-6">
                  <BarChart3 className="text-stone-700 shrink-0" size={18} />
                  <div>
                    <p className="text-white text-sm font-medium mb-1 tracking-tight">Video Walkthrough & Commentary</p>
                    <p className="text-stone-500 text-[11px] leading-relaxed uppercase tracking-widest">
                      We don't just send files. You receive a clinical video briefing explaining the "Why" behind the numbers.
                    </p>
                  </div>
               </div>
            </div>
          </div>

          {/* RIGHT: THE ACQUISITION */}
          <div className="lg:col-span-5 bg-[#050505] p-10 md:p-16 flex flex-col justify-between items-center text-center relative group">
             {/* Hover Glow */}
             <div className="absolute inset-0 bg-stone-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
             
             <div>
                <p className="text-stone-500 text-[9px] uppercase tracking-[0.4em] font-bold mb-4">Starting Price</p>
                <h4 className="text-white text-6xl font-serif mb-2">$150</h4>
                <p className="text-stone-600 font-mono text-[10px] uppercase tracking-widest">/ Per Month</p>
             </div>

             <div className="w-full pt-12">
                <button className="w-full py-6 bg-white text-black text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-stone-200 transition-all shadow-xl flex items-center justify-center gap-4">
                   Initiate Partnership <ArrowRight size={14} />
                </button>
                <p className="mt-6 text-stone-700 text-[8px] uppercase tracking-widest">
                  Priority Access // No-Lock-in Contract
                </p>
             </div>
          </div>

        </div>

        {/* TRUST TAGLINE (Section 3.5) */}
        <div className="mt-32 opacity-20">
           <h3 className="text-[12vw] font-serif font-black uppercase italic whitespace-nowrap leading-none tracking-tighter">
             PEACE OF MIND
           </h3>
        </div>

      </div>
    </section>
  );
};

export default TheDecisionRetainer;