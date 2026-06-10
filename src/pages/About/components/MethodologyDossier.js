import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
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

// --- SUB-COMPONENTS (Defined outside to fix ESLint Hook errors) ---

const NavTitle = ({ i, total, progress, title, id }) => {
  const start = i * (1 / total);
  const end = (i + 1) * (1 / total);
  const isLast = i === total - 1;

  // Hooks are now called at the top level of this component
  const opacity = useTransform(progress, [start - 0.1, start, end - 0.1, end], [0.1, 1, 1, isLast ? 1 : 0.1]);
  const x = useTransform(progress, [start - 0.1, start, end - 0.1, end], [0, 20, 20, isLast ? 20 : 0]);
  const fontStyle = useTransform(progress, [start - 0.1, start, end - 0.1, end], ["normal", "italic", "italic", isLast ? "italic" : "normal"]);

  return (
    <motion.div style={{ x, opacity }} className="flex items-center gap-6 py-2">
      <span className="font-mono text-[10px] text-[#3AB5D8]">{id}</span>
      <motion.h3 style={{ fontStyle }} className="text-3xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight">
        {title}
      </motion.h3>
    </motion.div>
  );
};

const BriefingText = ({ i, total, progress, data }) => {
  const start = i * (1 / total);
  const end = (i + 1) * (1 / total);
  const isLast = i === total - 1;

  const opacity = useTransform(progress, [start - 0.05, start, end - 0.05, end], [0, 1, 1, isLast ? 1 : 0]);
  const y = useTransform(progress, [start - 0.05, start, end - 0.05, end], [20, 0, 0, isLast ? 0 : -20]);

  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 pt-10">
       <p className="text-[#3AB5D8] font-mono text-[9px] tracking-[0.4em] uppercase font-bold mb-6">{data.subtitle}</p>
       <p className="text-stone-400 text-sm md:text-base leading-loose font-light italic">"{data.desc}"</p>
    </motion.div>
  );
};

const DossierImage = ({ i, total, progress, item, onKnowMore }) => {
  const start = i * (1 / total);
  const end = (i + 1) * (1 / total);
  const isLast = i === total - 1;

  const opacity = useTransform(progress, [start - 0.1, start, end - 0.1, end], [0, 1, 1, isLast ? 1 : 0]);
  const scale = useTransform(progress, [start, end], [1.1, 1]);
  const calloutX = useTransform(progress, [start, start + 0.1], [40, 0]);

  return (
    <motion.div style={{ opacity }} className="absolute inset-0">
      <motion.img style={{ scale }} src={item.img} className="w-full h-full object-cover grayscale brightness-75 contrast-125" />
      <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end items-end">
        <motion.div style={{ x: calloutX }} className="w-full max-w-[280px] bg-black/60 backdrop-blur-xl border border-white/10 p-6 md:p-8 text-left shadow-2xl">
           <div className="flex items-center gap-3 mb-6 text-[#3AB5D8]">
              <Terminal size={14} />
              <span className="font-mono text-[9px] uppercase tracking-widest font-bold text-white">Clinical_Audit</span>
           </div>
           <h4 className="text-white text-xl font-serif italic mb-4 leading-tight">{item.calloutTitle}</h4>
           <p className="text-stone-300 text-[11px] leading-relaxed mb-8 font-light">{item.calloutPara}</p>
           <button onClick={onKnowMore} className="flex items-center gap-4 text-[9px] uppercase tracking-[0.3em] font-bold text-white group">
              Know More
              <ArrowRight size={14} className="text-[#3AB5D8] group-hover:translate-x-1 transition-transform" />
           </button>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-[#0D0D0D]/20 mix-blend-overlay" />
    </motion.div>
  );
};

// --- MAIN COMPONENT ---

const MethodologyDossier = () => {
  const [modalIndex, setModalIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const sectionBg = useTransform(smoothProgress, [0.9, 1], ["#F9F8F6", "#0D0D0D"]);

  return (
    <motion.section 
      ref={containerRef} 
      style={{ backgroundColor: sectionBg }}
      className="relative h-[350vh]"
    >
      <IntelligenceModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        data={segments[modalIndex]} 
      />

      <div className="sticky top-0 h-screen w-full flex flex-col lg:flex-row overflow-hidden">
        
        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 h-full bg-[#0D0D0D] p-8 md:p-16 lg:p-24 flex flex-col justify-between relative overflow-hidden">
           <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none text-white font-serif text-[20vw]">METHOD</div>
           
           <div className="relative z-10">
              <div className="flex items-center gap-4 mb-12">
                 <div className="w-2 h-2 bg-[#3AB5D8] rounded-full animate-pulse shadow-[0_0_10px_#3AB5D8]" />
                 <span className="font-mono text-[9px] text-stone-500 tracking-[0.5em] uppercase font-bold">PA_Analytics // Dossier_v1</span>
              </div>

              <div className="space-y-4">
                 {segments.map((item, i) => (
                    <NavTitle 
                      key={item.id} 
                      i={i} 
                      total={segments.length} 
                      progress={smoothProgress} 
                      title={item.title} 
                      id={item.id} 
                    />
                 ))}
              </div>
           </div>

           <div className="relative z-10 max-w-md pt-20 border-t border-white/5 h-[250px]">
              {segments.map((item, i) => (
                <BriefingText 
                  key={i} 
                  i={i} 
                  total={segments.length} 
                  progress={smoothProgress} 
                  data={item} 
                />
              ))}
           </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-1/2 h-full relative">
           <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="relative w-full h-[80%] overflow-hidden border border-stone-200">
                 {segments.map((item, i) => (
                    <DossierImage 
                      key={i} 
                      i={i} 
                      total={segments.length} 
                      progress={smoothProgress} 
                      item={item} 
                      onKnowMore={() => { setModalIndex(i); setIsModalOpen(true); }}
                    />
                 ))}
              </div>
           </div>
        </div>

      </div>
    </motion.section>
  );
};

export default MethodologyDossier;