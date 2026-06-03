import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Search, PenTool, Activity, ShieldCheck } from "lucide-react";

const steps = [
  {
    id: "01",
    phase: "Discovery",
    title: "Landscape Analysis",
    desc: "A 30-minute clinical review of your current data situation. We listen to the business objectives and identify where the 'noise' is strongest.",
    icon: <Search size={20} strokeWidth={1.5} />
  },
  {
    id: "02",
    phase: "Audit",
    title: "Leakage Diagnosis",
    desc: "We dive into your existing ad platforms and sales records. We find the tracking gaps, the wasted spend, and the hidden high-value customer segments.",
    icon: <PenTool size={20} strokeWidth={1.5} />
  },
  {
    id: "03",
    phase: "Execution",
    title: "System Architecture",
    desc: "The build phase. We clean your data, write the Python models, and construct the Power BI war-rooms tailored to your specific decision cycles.",
    icon: <Activity size={20} strokeWidth={1.5} />
  },
  {
    id: "04",
    phase: "Empowerment",
    title: "Strategic Handover",
    desc: "We don't just deliver a file. We walk your team through the logic, provide the strategic roadmap, and ensure you are ready to operate independently.",
    icon: <ShieldCheck size={20} strokeWidth={1.5} />
  }
];

const WorkProtocol = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="relative w-full bg-[#F9F8F6] py-32 md:py-60 px-6 md:px-12 lg:px-24">
      
      <div className="max-w-[1800px] mx-auto flex flex-col lg:flex-row">
        
        {/* LEFT: THE STICKY HEADER */}
        <div className="lg:w-1/3 lg:h-[60vh] lg:sticky lg:top-40 mb-20 lg:mb-0">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-10 h-[1px] bg-[#3ab5d8]"></span>
            <p className="text-[10px] uppercase tracking-[0.5em] text-[#8b8984] font-bold">The Protocol</p>
          </div>
          <h2 className="text-[#111] text-5xl md:text-7xl font-serif leading-[1.1] mb-8">
            The Path to <br /> <span className="italic text-[#a8a6a1] font-light">Absolute Clarity.</span>
          </h2>
          <p className="text-[#666] text-xs md:text-sm uppercase tracking-widest leading-loose max-w-xs font-medium">
            A systematic descent into your business logic, ensuring every insight is traceable, valid, and actionable.
          </p>
        </div>

        {/* RIGHT: THE INTERACTIVE TIMELINE */}
        <div className="lg:w-2/3 relative pl-4 md:pl-20">
          
          {/* THE GROWING LINE */}
          <div className="absolute left-0 lg:left-10 top-0 bottom-0 w-[1px] bg-stone-200">
            <motion.div 
              style={{ scaleY: pathLength }}
              className="absolute top-0 left-0 w-full h-full bg-[#3ab5d8] origin-top"
            />
          </div>

          <div className="space-y-32 md:space-y-52">
            {steps.map((step, idx) => (
              <ProtocolStep key={step.id} step={step} index={idx} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

const ProtocolStep = ({ step, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0.2, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, margin: "-20%" }}
      transition={{ duration: 0.8 }}
      className="relative group"
    >
      {/* Node on the line */}
      <div className="absolute -left-[21px] md:-left-[85px] lg:-left-[45px] top-0 w-3 h-3 bg-[#F9F8F6] border-2 border-stone-200 rounded-full z-10 group-hover:border-[#3ab5d8] transition-colors duration-500" />
      
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Big Number Accent */}
        <span className="font-serif italic text-6xl md:text-8xl text-stone-200/60 leading-none select-none">
          {step.id}
        </span>
        
        <div className="pt-2 md:pt-4 max-w-xl">
          <div className="flex items-center gap-4 mb-4">
             <div className="text-[#3ab5d8] opacity-60">
                {step.icon}
             </div>
             <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-stone-400">
               Phase {step.id} — {step.phase}
             </p>
          </div>
          
          <h3 className="text-[#111] text-2xl md:text-4xl font-serif mb-6 group-hover:translate-x-2 transition-transform duration-500">
            {step.title}
          </h3>
          
          <p className="text-[#666] text-sm md:text-base leading-relaxed font-light tracking-wide">
            {step.desc}
          </p>

          <div className="mt-8 flex gap-2">
             {[1,2,3].map(i => (
               <div key={i} className="w-1 h-1 bg-stone-300 rounded-full" />
             ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkProtocol;