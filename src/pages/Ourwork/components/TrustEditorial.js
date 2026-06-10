import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ShieldCheck, Terminal, ArrowRight, Zap, Target, Activity } from "lucide-react";

const testimonials = [
  {
    id: "01",
    entity: "E-COM FOUNDER",
    sector: "D2C_REVENUE",
    quote: "Patience didn't just give us a dashboard; she gave us the clinical truth. We saved $14k in the first month by stopping the noise.",
    deliverable: "Protocol: Revenue_Audit",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop"
  },
  {
    id: "02",
    entity: "NGO DIRECTOR",
    sector: "IMPACT_LOGIC",
    quote: "The impact mapping was the key. We secured our largest grant to date because our evidence was statistically undeniable.",
    deliverable: "Protocol: Grant_Evidence",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop"
  },
  {
    id: "03",
    entity: "MARKETING LEAD",
    sector: "SCALING_STRATEGY",
    quote: "Peace of mind is rare in data science. PA Analytics provides the stability we need for high-stakes strategic decisions.",
    deliverable: "Protocol: Decision_Retainer",
    img: "https://images.unsplash.com/photo-1507537362145-5f031c620ddd?q=80&w=1400&auto=format&fit=crop"
  }
];

const TrustEditorial = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section ref={containerRef} className="relative bg-[#050505] min-h-[300vh]">
      
      <div className="sticky top-0 h-screen w-full flex flex-col lg:flex-row overflow-hidden">
        
        {/* LEFT SIDE: THE FIXED HUB (50%) */}
        <div className="w-full lg:w-1/2 h-full border-r border-white/5 flex flex-col justify-between p-8 md:p-16 lg:p-24 relative overflow-hidden">
           
           <div className="relative z-10">
              <motion.div 
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                className="flex items-center gap-4 mb-12"
              >
                 <div className="w-2 h-2 bg-stone-500 rounded-full animate-pulse" />
                 <span className="font-mono text-[9px] text-stone-500 tracking-[0.5em] uppercase font-bold">
                    Trust_Archive // 2024.Success
                 </span>
              </motion.div>

              <h2 className="text-white text-5xl md:text-8xl font-serif leading-[0.9] tracking-tighter max-w-sm">
                Voices of <br /> 
                <span className="italic text-stone-600 font-light">Authority.</span>
              </h2>
           </div>

           {/* SYSTEM STATUS BAR */}
           <div className="relative z-10 space-y-12">
              <div className="space-y-6">
                 <p className="text-stone-500 text-sm md:text-base leading-relaxed font-light italic max-w-xs">
                    "We do not view testimonials as praise. We view them as verified evidence of commercial and social transformation."
                 </p>
                 <div className="flex items-center gap-4 text-stone-700">
                    <ShieldCheck size={16} />
                    <span className="font-mono text-[8px] uppercase tracking-widest">Integrity_Protocol_Active</span>
                 </div>
              </div>

              <div className="flex items-center gap-20">
                 <div className="space-y-1">
                    <p className="font-mono text-[8px] uppercase text-stone-600 font-bold">Registry_ID</p>
                    <p className="text-white font-mono text-xs uppercase tracking-widest">PA_Success_v.1</p>
                 </div>
                 <div className="space-y-1">
                    <p className="font-mono text-[8px] uppercase text-stone-600 font-bold">Scan_Progress</p>
                    <div className="w-32 h-[1px] bg-stone-900 relative overflow-hidden">
                       <motion.div style={{ scaleX: smoothProgress }} className="absolute inset-0 bg-[#3AB5D8] origin-left" />
                    </div>
                 </div>
              </div>
           </div>

           {/* Background ghost text */}
           <div className="absolute bottom-10 left-[-10%] opacity-[0.02] rotate-[-90deg] origin-left pointer-events-none select-none">
              <h3 className="text-[25vw] font-serif font-black uppercase italic whitespace-nowrap leading-none text-white">EVIDENCE</h3>
           </div>
        </div>

        {/* RIGHT SIDE: THE SCROLLING STREAM (50%) */}
        <div className="w-full lg:w-1/2 h-full relative bg-stone-900">
           {testimonials.map((item, i) => (
             <QuoteSlide key={item.id} index={i} total={testimonials.length} progress={smoothProgress} data={item} />
           ))}
        </div>

      </div>
    </section>
  );
};

// --- SUB-COMPONENT: SLIDING CURTAIN QUOTE ---
const QuoteSlide = ({ index, total, progress, data }) => {
  const start = index * (1 / total);
  const end = (index + 1) * (1 / total);

  // The curtain effect: Slide up and stay, then next one slides over it
  const y = useTransform(progress, [start - 0.2, start], ["100%", "0%"]);
  const imgScale = useTransform(progress, [start, end], [1.1, 1]);
  const textOpacity = useTransform(progress, [start, start + 0.1, end - 0.05, end], [0, 1, 1, 0.4]);

  return (
    <motion.div 
      style={{ y, zIndex: index + 10 }}
      className="absolute inset-0 w-full h-full bg-[#0D0D0D] border-t border-white/5 overflow-hidden flex flex-col"
    >
       {/* Background Image Frame */}
       <div className="relative h-[40%] w-full overflow-hidden border-b border-white/5">
          <motion.img 
            style={{ scale: imgScale }}
            src={data.img} 
            className="w-full h-full object-cover grayscale brightness-50 contrast-125"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-6 left-8 flex items-center gap-4 text-white/40">
             <Target size={14} />
             <span className="font-mono text-[8px] uppercase tracking-widest">{data.sector} // AUDIT_REF_{data.id}</span>
          </div>
       </div>

       {/* Content Area */}
       <div className="flex-1 p-8 md:p-16 lg:p-20 flex flex-col justify-between">
          <motion.div style={{ opacity: textOpacity }} className="space-y-10">
             <div className="flex items-center gap-6 text-stone-500">
                <Terminal size={16} />
                <span className="font-mono text-[9px] uppercase tracking-[0.5em] font-bold">Briefing_ID_{data.id}</span>
             </div>

             <h3 className="text-white text-3xl md:text-5xl font-serif italic leading-snug tracking-tight">
                "{data.quote}"
             </h3>

             <div className="flex items-center gap-6 pt-10">
                <div className="h-[1px] w-12 bg-stone-800" />
                <div className="space-y-1">
                   <p className="text-white text-xs uppercase tracking-[0.2em] font-bold">{data.entity}</p>
                   <p className="text-[#3AB5D8] font-mono text-[9px] uppercase tracking-widest">{data.deliverable}</p>
                </div>
             </div>
          </motion.div>

          <div className="flex justify-end opacity-20">
             <Activity size={32} strokeWidth={1} className="text-stone-500" />
          </div>
       </div>
    </motion.div>
  );
};

export default TrustEditorial;