import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react";

const TransformationLens = () => {
  const containerRef = useRef(null);
  
  // Track scroll progress for the "Wipe" effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll to the width of the "Clarity" layer
  const wipeWidth = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);
  // Map scroll to move the vertical handle
  const handleX = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-[#F9F9F9]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        
        {/* ========================================== */}
        {/* LAYER 1: THE NOISE (BACKGROUND / BEFORE)   */}
        {/* ========================================== */}
        <div className="absolute inset-0 w-full h-full px-8 md:px-24 flex items-center bg-[#F2F0EF]">
          <div className="grid lg:grid-cols-12 w-full items-center">
            <div className="lg:col-span-7 opacity-20 filter blur-[2px] select-none">
              <span className="text-[10px] font-mono tracking-widest text-stone-400 block mb-6">[ FRAGMENTED_STATE_V1 ]</span>
              <h2 className="text-5xl md:text-8xl font-sans font-bold text-stone-400 leading-none tracking-tighter uppercase">
                GUESSING ROAS. <br />
                LOST ATTRIBUTION. <br />
                MANUAL CHAOS.
              </h2>
            </div>
          </div>
        </div>

        {/* ========================================== */}
        {/* LAYER 2: THE CLARITY (WIPE LAYER / AFTER)  */}
        {/* ========================================== */}
        <motion.div 
          style={{ width: wipeWidth }}
          className="absolute inset-0 h-full bg-[#FDFDFC] z-10 overflow-hidden border-r border-[#3ab5d8]/20 shadow-2xl"
        >
          <div className="absolute inset-0 w-screen h-full px-8 md:px-24 flex items-center">
            <div className="grid lg:grid-cols-12 w-full items-center">
              <div className="lg:col-span-8">
                <span className="text-[10px] font-mono tracking-[0.5em] text-[#3ab5d8] block mb-8 font-bold">
                  THE PA REALITY
                </span>
                <h2 className="text-[#111] text-5xl md:text-8xl lg:text-[7.5rem] font-serif leading-[1] tracking-tighter mb-12">
                  Absolute <br />
                  <span className="italic text-stone-400 font-light">Commercial</span> <br />
                  Truth.
                </h2>
                
                <div className="flex flex-col md:flex-row gap-12 mt-10">
                   <div className="max-w-xs">
                      <p className="text-stone-500 text-xs md:text-sm uppercase tracking-widest leading-loose font-medium">
                        We don't provide just data. We provide the exit from uncertainty. One dashboard. One source of truth. Decisive action.
                      </p>
                   </div>
                   <div className="flex items-end">
                      <a href="#contact" className="group flex items-center gap-6">
                        <span className="text-[10px] uppercase tracking-[0.4em] font-bold border-b border-stone-200 pb-2 group-hover:border-[#111] transition-all">
                          Initiate Transformation
                        </span>
                        <ArrowRight size={18} className="mb-2 text-[#3ab5d8]" />
                      </a>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ========================================== */}
        {/* LAYER 3: INTERACTIVE ELEMENTS              */}
        {/* ========================================== */}
        
        {/* The Wipe Handle */}
        <motion.div 
          style={{ left: handleX }}
          className="absolute top-0 bottom-0 w-[1px] bg-[#3ab5d8] z-20 hidden lg:block"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
             <div className="w-10 h-10 rounded-full bg-white border border-stone-200 shadow-xl flex items-center justify-center text-[#3ab5d8]">
                <div className="flex gap-1">
                   <div className="w-1 h-1 bg-[#3ab5d8] rounded-full animate-pulse" />
                   <div className="w-1 h-1 bg-[#3ab5d8] rounded-full animate-pulse delay-75" />
                </div>
             </div>
             <p className="rotate-90 origin-left whitespace-nowrap text-[9px] uppercase tracking-[0.6em] text-[#3ab5d8] font-bold mt-12">
                Scanning Infrastructure
             </p>
          </div>
        </motion.div>

        {/* Floating Comparison Tags */}
        <div className="absolute bottom-12 right-12 z-30 flex flex-col gap-4 text-right">
           <div className="flex items-center justify-end gap-4">
              <p className="text-[10px] text-stone-400 uppercase tracking-widest font-bold">Current State: Noise</p>
              <AlertCircle size={16} className="text-stone-300" />
           </div>
           <div className="flex items-center justify-end gap-4">
              <p className="text-[10px] text-[#3ab5d8] uppercase tracking-widest font-bold">Target State: Signal</p>
              <CheckCircle2 size={16} className="text-[#3ab5d8]" />
           </div>
        </div>

      </div>
    </section>
  );
};

export default TransformationLens;