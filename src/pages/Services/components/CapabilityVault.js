import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Terminal, Fingerprint, Code2, ShieldCheck, Activity, ArrowRight } from "lucide-react";

const capabilities = [
  {
    id: "01",
    title: "RFM Modeling",
    slug: "CUSTOMER_INTELLIGENCE",
    desc: "Segmenting your database by Recency, Frequency, and Monetary value to isolate your 'Whales' from 'Churn-risks'.",
    calloutTitle: "Behavioral Clustering",
    calloutPara: "Applying K-Means algorithms to raw transaction logs to identify segments driving 80% of total revenue.",
    metric: "80/20 REVENUE RATIO",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "02",
    title: "Predictive Churn",
    slug: "MACHINE_LEARNING",
    desc: "Using Python-based algorithms to identify behavioral patterns that signal a customer is about to quit before they leave.",
    calloutTitle: "Risk-Probability Model",
    calloutPara: "Our models achieve 92% accuracy by training on multi-platform signals and historical LTV curves.",
    metric: "92% ACCURACY RATE",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "Statistical Significance",
    slug: "PROFIT_INTEGRITY",
    desc: "Moving beyond 'likes' and 'shares' to show real profit and loss. We prove the mathematical validity of every marketing experiment.",
    calloutTitle: "P-Value Integrity",
    calloutPara: "Eliminating ad-waste by auditing the 'Attribution Gap' between platform reports and actual warehouse revenue.",
    metric: "ZERO BUDGET WASTE",
    img: "https://images.unsplash.com/photo-1454165833762-02ab4f40c741?q=80&w=2070&auto=format&fit=crop"
  }
];

const CapabilityVault = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section ref={containerRef} className="relative bg-[#FDFDFC] h-[350vh]">
      
      {/* 1. STICKY LENS CONTAINER */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.02]">
           <h2 className="text-[30vw] font-serif font-black uppercase tracking-tighter">LOGIC</h2>
        </div>

        <div className="max-w-[1700px] w-full mx-auto px-6 md:px-12 lg:px-24 grid lg:grid-cols-12 gap-10 items-center relative z-10">
           
           {/* LEFT SIDE: BRIEFING TEXT */}
           <div className="lg:col-span-5 space-y-12">
              <div className="space-y-6">
                 <div className="flex items-center gap-4">
                    <Fingerprint size={18} className="text-stone-400" />
                    <span className="font-mono text-[10px] text-stone-400 tracking-[0.5em] uppercase font-bold">Protocol_03 // Logic_Vault</span>
                 </div>
                 <h2 className="text-[#111] text-5xl md:text-8xl font-serif leading-[0.9] tracking-tighter">
                   Advanced <br /> 
                   <span className="italic text-stone-300 font-light text-4xl md:text-7xl">Intelligence.</span>
                 </h2>
              </div>

              <div className="relative h-[300px] w-full">
                 {capabilities.map((cap, i) => (
                    <ContentCard 
                      key={cap.id} 
                      index={i} 
                      total={capabilities.length} 
                      progress={smoothProgress} 
                      data={cap} 
                    />
                 ))}
              </div>
           </div>

           {/* RIGHT SIDE: IMAGE ARTIFACTS WITH CALLOUTS */}
           <div className="lg:col-span-7 relative h-[60vh] lg:h-[75vh] flex items-center justify-center">
              <div className="relative w-full h-full border border-stone-100 bg-stone-50 overflow-hidden shadow-2xl">
                 {capabilities.map((cap, i) => (
                    <ImageArtifact 
                      key={cap.id} 
                      index={i} 
                      total={capabilities.length} 
                      progress={smoothProgress} 
                      src={cap.img} 
                      callout={cap}
                    />
                 ))}
                 
                 {/* STATIC HUD (Heads Up Display) */}
                 <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none z-20">
                    <div className="flex justify-between items-start text-[#111]/20">
                       <Terminal size={16} />
                       <span className="font-mono text-[8px] uppercase tracking-widest">Diagnostic_Aperture // VERIFIED</span>
                    </div>
                    <div className="flex justify-between items-end text-[#111]/20">
                       <div className="w-12 h-[1px] bg-[#111]/10" />
                       <span className="font-mono text-[8px] uppercase tracking-widest">Coord: 1.2921° S // 36.8219° E</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

// --- SUB-COMPONENT: TEXT TRANSITION ---
const ContentCard = ({ index, total, progress, data }) => {
  const start = index * (1 / total);
  const end = (index + 1) * (1 / total);
  
  // FIX: For the last item (index === total - 1), we don't fade out to 0 at the end.
  const isLast = index === total - 1;
  const exitOpacity = isLast ? 1 : 0;
  const exitY = isLast ? 0 : -20;

  const opacity = useTransform(progress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, exitOpacity]);
  const y = useTransform(progress, [start, start + 0.1, end - 0.1, end], [20, 0, 0, exitY]);

  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex flex-col justify-center">
       <div className="space-y-8">
          <div>
             <p className="font-mono text-[10px] text-stone-400 mb-2 uppercase tracking-widest italic">{data.slug}</p>
             <h3 className="text-3xl md:text-5xl font-serif text-[#111]">{data.title}</h3>
          </div>
          <p className="text-stone-500 text-sm md:text-lg leading-relaxed font-light italic max-w-sm">
             "{data.desc}"
          </p>
          <div className="flex items-center gap-6 pt-6 border-t border-stone-100">
             <div className="space-y-1">
                <p className="font-mono text-[8px] uppercase text-stone-300 font-bold">Verification_Status</p>
                <p className="text-[#111] text-xs font-bold tracking-widest">CLINICAL_GRADE_95%</p>
             </div>
             <div className="p-3 bg-stone-50 border border-stone-100 rounded-full">
                <ShieldCheck size={14} className="text-[#111]" />
             </div>
          </div>
       </div>
    </motion.div>
  );
};

// --- SUB-COMPONENT: IMAGE + CALLOUT ---
const ImageArtifact = ({ index, total, progress, src, callout }) => {
  const start = index * (1 / total);
  const end = (index + 1) * (1 / total);
  
  // FIX: Keep last image visible
  const isLast = index === total - 1;
  const exitOpacity = isLast ? 1 : 0;

  const opacity = useTransform(progress, [start - 0.05, start, end - 0.05, end], [0, 1, 1, exitOpacity]);
  const scale = useTransform(progress, [start, end], [1.1, 1]);
  
  // Callout animation (sliding from right inside the image)
  const calloutX = useTransform(progress, [start, start + 0.1], [40, 0]);
  const calloutOpacity = useTransform(progress, [start, start + 0.1], [0, 1]);

  return (
    <motion.div style={{ opacity }} className="absolute inset-0">
      <motion.img 
        style={{ scale }}
        src={src} 
        className="w-full h-full object-cover grayscale contrast-125 brightness-90"
        alt="Technical visual"
      />
      
      {/* FLOATING INTELLIGENCE BRIEF (The requested text on top of image) */}
      <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end items-end">
        <motion.div 
          style={{ x: calloutX, opacity: calloutOpacity }}
          className="w-full max-w-[280px] bg-black/60 backdrop-blur-xl border border-white/10 p-6 md:p-8 text-left shadow-2xl"
        >
           <div className="flex items-center gap-3 mb-6 text-stone-400">
              <Code2 size={14} />
              <span className="font-mono text-[9px] uppercase tracking-widest font-bold text-white">Clinical_Audit</span>
           </div>
           
           <h4 className="text-white text-xl font-serif italic mb-4 leading-tight">
              {callout.calloutTitle}
           </h4>
           
           <p className="text-stone-300 text-[11px] leading-relaxed mb-8 font-light tracking-wide">
              {callout.calloutPara}
           </p>

           <div className="flex items-center justify-between border-t border-white/10 pt-6">
              <div className="space-y-1">
                 <p className="font-mono text-[7px] text-stone-500 uppercase font-bold">Metric</p>
                 <p className="text-white text-[9px] font-bold tracking-widest">{callout.metric}</p>
              </div>
              <button className="p-3 bg-white text-black rounded-full hover:bg-stone-200 transition-colors">
                 <ArrowRight size={14} />
              </button>
           </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-[#0D0D0D]/10 mix-blend-overlay" />
    </motion.div>
  );
};

export default CapabilityVault;