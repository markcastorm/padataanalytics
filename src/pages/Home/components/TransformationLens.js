import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Activity, Shield, Target, TrendingUp, Cpu, Database } from "lucide-react";

const TransformationLens = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const wipeWidth = useTransform(smoothProgress, [0.1, 0.9], ["0%", "100%"]);
  const handleX = useTransform(smoothProgress, [0.1, 0.9], ["0%", "100%"]);
  const lensOpacity = useTransform(smoothProgress, [0.05, 0.1, 0.9, 0.95], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative h-[350vh] bg-[#050505]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* ========================================== */}
        {/* LAYER 1: THE NOISE (BEFORE)                */}
        {/* ========================================== */}
        <div className="absolute inset-0 w-full h-full bg-[#0A0A0A] px-8 md:px-24 flex items-center">
          <div className="w-full grid lg:grid-cols-2 gap-20 items-center">
            <div className="opacity-40 flex flex-col gap-6">
              <div className="h-[1px] w-20 bg-red-500/80" />
              <h2 className="text-6xl md:text-8xl font-sans font-black text-stone-500 leading-none tracking-tighter">
                FRAGMENTED <br /> GUESSWORK.
              </h2>
              <p className="font-mono text-xs text-red-600 uppercase tracking-[0.5em] font-bold">System Status: Unverified / Noisy</p>
            </div>
            
            <div className="hidden lg:grid grid-cols-3 gap-2 opacity-10">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="h-20 border border-stone-800 rounded-sm bg-stone-900/50 animate-pulse" 
                     style={{ animationDelay: `${i * 0.1}s` }} />
              ))}
            </div>
          </div>
        </div>

        {/* ========================================== */}
        {/* LAYER 2: THE CLARITY (AFTER)               */}
        {/* ========================================== */}
        <motion.div 
          style={{ width: wipeWidth }}
          className="absolute inset-0 h-full bg-[#FDFDFC] z-10 overflow-hidden border-r-2 border-[#3ab5d8] shadow-[20px_0_100px_rgba(58,181,216,0.2)]"
        >
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `radial-gradient(#111 1px, transparent 0)`, backgroundSize: '40px 40px' }} />

          <div className="absolute inset-0 w-screen h-full px-8 md:px-24 flex items-center">
            <div className="w-full grid lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-5 space-y-12">
                <div className="space-y-6">
                  <motion.div className="flex items-center gap-4 text-[#3ab5d8]">
                    <Cpu size={16} className="animate-spin-slow" />
                    <span className="text-[10px] font-mono tracking-[0.6em] font-bold uppercase">Clinical Intelligence</span>
                  </motion.div>
                  <h2 className="text-[#111] text-5xl md:text-8xl font-serif leading-[1.05] tracking-tighter">
                    Absolute <br />
                    <span className="italic text-stone-300 font-light">Commercial</span> <br />
                    Truth.
                  </h2>
                </div>
                
                <p className="text-stone-500 text-sm md:text-base leading-loose max-w-sm uppercase tracking-widest font-medium border-l border-stone-200 pl-8">
                  We dismantle fragmented ad-stacks to reveal the clinical reality of your growth. One link. One dashboard. Total control.
                </p>

                <div className="pt-4">
                  <a href="#contact" className="group flex items-center gap-6">
                    <div className="px-12 py-5 bg-[#111] text-white uppercase text-[10px] tracking-[0.5em] group-hover:bg-[#3ab5d8] transition-all duration-500 font-bold shadow-xl">
                      Start Diagnosis
                    </div>
                    <ArrowRight className="text-[#3ab5d8] group-hover:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>

              {/* CARDS WITH ENHANCED SLIDE-IN ANIMATION */}
              <div className="lg:col-span-7 grid grid-cols-2 gap-4 md:gap-6">
                <InstrumentCard 
                  progress={smoothProgress}
                  threshold={0.3}
                  icon={<Target size={20} />}
                  label="Attribution"
                  title="Spend Mapping"
                  value="1:1"
                  desc="Direct correlation between Meta/Google spend and warehouse revenue."
                />
                <InstrumentCard 
                  progress={smoothProgress}
                  threshold={0.45}
                  icon={<TrendingUp size={20} />}
                  label="Waste Recovery"
                  title="Budget Reclamation"
                  value="32%"
                  desc="Average budget redirected from unvalidated high-CPA traffic."
                />
                <InstrumentCard 
                  progress={smoothProgress}
                  threshold={0.6}
                  icon={<Database size={20} />}
                  label="Forecasting"
                  title="Predictive LTV"
                  value="94.8%"
                  desc="Accuracy in 12-month customer value projections via Python."
                />
                <InstrumentCard 
                  progress={smoothProgress}
                  threshold={0.75}
                  icon={<Shield size={20} />}
                  label="Validation"
                  title="Data Integrity"
                  value="ISO-S"
                  desc="Cybersecurity-grade cleaning of messy historical datasets."
                />
              </div>

            </div>
          </div>
        </motion.div>

        {/* ========================================== */}
        {/* LAYER 3: THE SCANNING LENS HANDLE          */}
        {/* ========================================== */}
        <motion.div 
          style={{ left: handleX, opacity: lensOpacity }}
          className="absolute top-0 bottom-0 w-[1px] bg-[#3ab5d8] z-20 hidden lg:block"
        >
          <div className="absolute top-0 bottom-0 -left-1 w-2 bg-gradient-to-r from-[#3ab5d8]/40 to-transparent blur-sm" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
             <div className="w-16 h-16 rounded-full bg-white border border-[#3ab5d8]/20 shadow-[0_0_40px_rgba(58,181,216,0.3)] flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[#3ab5d8] rounded-full animate-ping" />
             </div>
             <p className="rotate-90 origin-left whitespace-nowrap text-[9px] uppercase tracking-[1em] text-[#3ab5d8] font-bold mt-20">
                System Scan In Progress
             </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

const InstrumentCard = ({ progress, threshold, icon, label, title, value, desc }) => {
  // ANIMATION LOGIC: The cards slide in from the right (x) and slightly from the bottom (y) 
  // as the scroll progress approaches the threshold
  const opacity = useTransform(progress, [threshold - 0.15, threshold], [0, 1]);
  const scale = useTransform(progress, [threshold - 0.15, threshold], [0.8, 1]);
  const x = useTransform(progress, [threshold - 0.2, threshold], [100, 0]);
  const y = useTransform(progress, [threshold - 0.2, threshold], [20, 0]);
  
  const borderOpacity = useTransform(progress, [threshold - 0.1, threshold], ["rgba(0,0,0,0.05)", "rgba(58,181,216,0.3)"]);

  return (
    <motion.div 
      style={{ opacity, scale, x, y, borderColor: borderOpacity }}
      className="p-8 bg-white border rounded-sm flex flex-col justify-between min-h-[220px] shadow-sm relative group cursor-crosshair transition-shadow duration-500 hover:shadow-xl"
    >
      <div className="flex justify-between items-start">
        <div className="text-[#3ab5d8] opacity-60 group-hover:opacity-100 transition-opacity">
          {icon}
        </div>
        <span className="font-mono text-[9px] text-stone-300 uppercase tracking-widest font-bold">Instrument_{label}</span>
      </div>
      
      <div className="mt-6">
        <p className="text-[9px] uppercase tracking-widest font-bold text-stone-400 mb-1">{title}</p>
        <h4 className="text-4xl md:text-5xl font-serif text-[#111] mb-3 tracking-tighter">
          {value}
        </h4>
        <p className="text-[11px] text-stone-500 uppercase leading-relaxed font-medium">
          {desc}
        </p>
      </div>

      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-stone-100 group-hover:border-[#3ab5d8] transition-colors" />
    </motion.div>
  );
};

export default TransformationLens;