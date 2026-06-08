import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useMotionValueEvent, useSpring } from "framer-motion";
import { ArrowRight, Terminal, ShieldCheck, Activity } from "lucide-react";
import IntelligenceModal from "./IntelligenceModal";

const segments = [
  {
    id: "01",
    title: "Technical Extraction",
    subtitle: "PHASE_01 // THE RIGOR",
    desc: "Bypassing the vanity metrics of standard agency reporting. We interact directly with raw SQL databases and Python modeling environments to find the clinical truth.",
    longDesc: "Our extraction phase moves beyond standard Google Analytics. We build custom API connectors to ingest raw financial logs, warehouse data, and ad-spend from Meta/Google into a unified Python-ready environment.",
    gallery: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070"],
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    calloutTitle: "Data Mining Protocol",
    calloutPara: "Using SQL-based deep-mining to identify hidden attribution gaps in your architecture.",
    tags: ["Python Modeling", "SQL Data Mining"]
  },
  {
    id: "02",
    title: "Predictive Intelligence",
    subtitle: "PHASE_02 // THE FORECAST",
    desc: "Using Scikit-learn algorithms to identify 'at-risk' customer segments before they churn. We translate historical noise into a clinical 12-month revenue forecast.",
    longDesc: "Leveraging RFM segmentation, we train machine learning models on your specific customer behavior to deploy marketing budget with high-precision confidence.",
    gallery: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070"],
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    calloutTitle: "Predictive Scoping",
    calloutPara: "Our models achieve 90%+ accuracy by training on multi-platform behavioral signals.",
    tags: ["RFM Segmentation", "Churn Prediction"]
  },
  {
    id: "03",
    title: "Strategic Synthesis",
    subtitle: "PHASE_03 // THE DECISION",
    desc: "The final transition from technical complexity to boardroom clarity. We bridge the gap with automated Power BI infrastructure designed for high-stakes decisions.",
    longDesc: "The result of the synthesis phase is a live, clinical 'War-Room' dashboard. We consolidate fragmented reporting into a single narrative that a CEO can read in 60 seconds.",
    gallery: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"],
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    calloutTitle: "Executive Reporting",
    calloutPara: "Bridging the gap between data science and strategic intuition through automated KPI narratives.",
    tags: ["BI Architecture", "Executive KPI"]
  }
];

const MethodologyDossier = () => {
  const [index, setIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // 1. DYNAMIC COLOR TRANSITION: Fades to black at the end to blend with next section
  const sectionBg = useTransform(scrollYProgress, [0.9, 1], ["#F9F8F6", "#0D0D0D"]);
  const rightSideOpacity = useTransform(scrollYProgress, [0.9, 0.98], [1, 0]);

  useMotionValueEvent(smoothScroll, "change", (latest) => {
    if (latest < 0.33) { if (index !== 0) setIndex(0); } 
    else if (latest < 0.66) { if (index !== 1) setIndex(1); } 
    else { if (index !== 2) setIndex(2); }
  });

  return (
    <motion.section 
      ref={containerRef} 
      style={{ backgroundColor: sectionBg }} // Apply dynamic background
      className="relative h-[350vh] transition-colors duration-500"
    >
      <IntelligenceModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        data={segments[index]} 
      />

      <div className="sticky top-0 h-screen w-full flex flex-col lg:flex-row overflow-hidden">
        
        {/* LEFT SIDE: FIXED CONTROL PANEL */}
        <div className="w-full lg:w-1/2 h-full bg-[#0D0D0D] p-8 md:p-16 lg:p-24 flex flex-col justify-between relative overflow-hidden">
           <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none text-white font-serif text-[20vw]">METHOD</div>
           <div className="relative z-10">
              <div className="flex items-center gap-4 mb-12">
                 <div className="w-2 h-2 bg-[#3AB5D8] rounded-full animate-pulse shadow-[0_0_10px_#3AB5D8]" />
                 <span className="font-mono text-[9px] text-stone-500 tracking-[0.5em] uppercase font-bold">PA_Analytics // Dossier_v1</span>
              </div>
              <div className="space-y-4">
                 {segments.map((item, i) => (
                   <button key={item.id} className="block text-left group py-2">
                     <div className="flex items-center gap-6">
                        <span className={`font-mono text-[10px] transition-colors duration-500 ${index === i ? "text-[#3AB5D8]" : "text-stone-800"}`}>
                           {item.id}
                        </span>
                        <h3 className={`text-3xl md:text-5xl lg:text-6xl font-serif transition-all duration-700 ${index === i ? "text-white italic translate-x-4" : "text-white/10 hover:text-white/30"}`}>
                           {item.title}
                        </h3>
                     </div>
                   </button>
                 ))}
              </div>
           </div>
           <div className="relative z-10 max-w-md pt-20 border-t border-white/5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, ease: "circOut" }}
                  className="space-y-8"
                >
                   <p className="text-[#3AB5D8] font-mono text-[9px] tracking-[0.4em] uppercase font-bold">{segments[index].subtitle}</p>
                   <p className="text-stone-400 text-sm md:text-base leading-loose font-light italic">
                      "{segments[index].desc}"
                   </p>
                </motion.div>
              </AnimatePresence>
           </div>
        </div>

        {/* RIGHT SIDE: Fades out smoothly at the end of the scroll */}
        <motion.div 
          style={{ opacity: rightSideOpacity }} 
          className="w-full lg:w-1/2 h-full relative"
        >
           <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="relative w-full h-[80%] overflow-hidden border border-stone-200">
                 <AnimatePresence mode="wait">
                    <motion.div
                      key={index}
                      initial={{ scale: 1.1, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 1.05, opacity: 0 }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full h-full relative"
                    >
                       <img src={segments[index].img} className="w-full h-full object-cover grayscale brightness-75 contrast-125" alt="Visual Evidence" />
                       <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end items-end">
                          <motion.div className="w-full max-w-[280px] bg-black/60 backdrop-blur-xl border border-white/10 p-6 md:p-8 text-left shadow-2xl">
                             <div className="flex items-center gap-3 mb-6 text-[#3AB5D8]">
                                <Terminal size={14} />
                                <span className="font-mono text-[9px] uppercase tracking-widest font-bold text-white">Clinical_Audit</span>
                             </div>
                             <h4 className="text-white text-xl font-serif italic mb-4 leading-tight">{segments[index].calloutTitle}</h4>
                             <p className="text-stone-300 text-[11px] leading-relaxed mb-8 font-light">{segments[index].calloutPara}</p>
                             <button 
                                onClick={() => setIsModalOpen(true)}
                                className="flex items-center gap-4 text-[9px] uppercase tracking-[0.3em] font-bold text-white group"
                             >
                                Know More
                                <ArrowRight size={14} className="text-[#3AB5D8] group-hover:translate-x-1 transition-transform" />
                             </button>
                          </motion.div>
                       </div>
                    </motion.div>
                 </AnimatePresence>
              </div>
           </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MethodologyDossier;