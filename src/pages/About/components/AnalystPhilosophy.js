import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const AnalystPhilosophy = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Different scroll speeds for the three images
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={containerRef} className="relative bg-[#FDFDFC] py-32 md:py-56 px-6 md:px-12 lg:px-24 overflow-hidden">
      
      <div className="max-w-[1700px] mx-auto grid lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* LEFT: THE PHILOSOPHY (7 Columns) */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-10 h-[1px] bg-stone-200" />
            <span className="font-mono text-[10px] text-stone-400 tracking-[0.5em] uppercase font-bold">The Specialist Model</span>
          </motion.div>

          <h2 className="text-[#111] text-4xl md:text-7xl font-serif leading-[1.1] tracking-tighter mb-16">
            A methodology <br /> 
            <span className="italic text-stone-300 font-light text-3xl md:text-6xl">rooted in rigor.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 border-t border-stone-100 pt-16">
            <div className="space-y-6">
              <p className="text-[#111] text-lg font-bold font-serif uppercase tracking-widest italic">01 // Technical Rigor</p>
              <p className="text-stone-500 text-sm leading-relaxed font-light">
                We utilize Python-based churn prediction and SQL data mining to extract absolute truth. This is the clinical foundation of every partnership.
              </p>
              <div className="pt-4 flex gap-4 text-[9px] font-mono text-stone-300 uppercase tracking-widest">
                <span>[ Scikit-Learn ]</span>
                <span>[ Pandas ]</span>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-[#111] text-lg font-bold font-serif uppercase tracking-widest italic">02 // Human Strategy</p>
              <p className="text-stone-500 text-sm leading-relaxed font-light">
                Data is a language. We translate Python models into "human" boardroom narratives that prioritize peace of mind and profit.
              </p>
              <div className="pt-4 flex gap-4 text-[9px] font-mono text-stone-300 uppercase tracking-widest">
                <span>[ ROI Radar ]</span>
                <span>[ Impact Lens ]</span>
              </div>
            </div>
          </div>

          <div className="mt-20 p-10 bg-stone-50 border border-stone-100 relative">
             <p className="text-[#111] text-xl font-serif italic mb-6">"Ethics is our primary performance metric."</p>
             <p className="text-stone-500 text-xs leading-loose uppercase tracking-[0.2em]">
                Unlike standard agencies, PA Data Analytics operates on an **Ethical Intelligence** framework—ensuring data privacy, statistical significance, and transparent profit reporting.
             </p>
          </div>
        </div>

        {/* RIGHT: THE STAGGERED TRIPTYCH (5 Columns) */}
        <div className="lg:col-span-5 grid grid-cols-3 gap-4 h-[600px] md:h-[800px] relative pt-20">
          
          {/* Image 1: The Technical (Moves Up) */}
          <motion.div style={{ y: y1 }} className="h-full mt-20">
            <div className="h-[70%] w-full bg-stone-100 overflow-hidden grayscale">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" className="h-full object-cover opacity-80" alt="Data" />
            </div>
            <p className="font-mono text-[8px] text-stone-300 mt-4 rotate-90 origin-left uppercase tracking-widest">Tech_Extraction</p>
          </motion.div>

          {/* Image 2: The Human (Moves Down) */}
          <motion.div style={{ y: y2 }} className="h-full -mt-20">
            <div className="h-[70%] w-full bg-stone-200 overflow-hidden grayscale contrast-125">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" className="h-full object-cover" alt="Analyst" />
            </div>
            <p className="font-mono text-[8px] text-stone-400 mt-4 uppercase tracking-widest">Expert_Guide</p>
          </motion.div>

          {/* Image 3: The Strategy (Moves Slow) */}
          <motion.div style={{ y: y3 }} className="h-full mt-10">
            <div className="h-[70%] w-full bg-stone-100 overflow-hidden grayscale">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" className="h-full object-cover opacity-60" alt="Strategy" />
            </div>
            <p className="font-mono text-[8px] text-stone-300 mt-4 rotate-90 origin-left uppercase tracking-widest">Business_Impact</p>
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default AnalystPhilosophy;