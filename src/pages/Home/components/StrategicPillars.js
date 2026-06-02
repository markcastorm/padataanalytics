import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";

const services = [
  {
    num: "01",
    title: "E-Commerce Intelligence",
    statement: "Your ad spend is bleeding. We stop it.",
    desc: "We bridge the gap between Meta, Google, and your actual warehouse data. No more guessing ROAS—we provide a single, clinical source of truth.",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
    tags: ["D2C Strategy", "Attribution"]
  },
  {
    num: "02",
    title: "Growth & Retention",
    statement: "Acquisition is expensive. Retention is profit.",
    desc: "Moving beyond 'last-click' metrics. We use predictive modeling and cohort analysis to identify which customers will drive your next year of growth.",
    img: "https://images.unsplash.com/photo-1550741113-50749757364d?auto=format&fit=crop&q=80",
    tags: ["Predictive", "LTV Modeling"]
  },
  {
    num: "03",
    title: "NGO Impact",
    statement: "Impact isn't an emotion. It's a metric.",
    desc: "Turning fieldwork into funder-ready evidence. We build the M&E systems and dashboards required to secure international grants.",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80",
    tags: ["Impact Tracking", "Grant Logic"]
  }
];

const StrategicPillars = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={targetRef} className="relative w-full bg-[#FBFBF9] text-[#1A1A1A]">
      <div className="w-full flex flex-col lg:flex-row">
        
        {/* LEFT SIDE: THE ANCHOR */}
        <div className="lg:w-[45%] lg:h-screen lg:sticky lg:top-0 flex flex-col justify-center p-8 md:p-16 lg:p-24 bg-[#FBFBF9] z-30">
          {/* Progress Indicator */}
          <div className="absolute left-8 lg:left-12 top-1/4 bottom-1/4 w-[1px] bg-stone-200 hidden lg:block">
            <motion.div style={{ scaleY }} className="w-full bg-[#3ab5d8] origin-top h-full" />
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-4 mb-10"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-stone-400">Section 02 — Pillars</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.05] tracking-tight mb-12">
            We don't just <br />
            report data. <br />
            <span className="italic text-stone-300 font-light">We distill it.</span>
          </h2>
          
          <div className="max-w-xs space-y-6">
            <p className="text-[#888] text-[11px] uppercase tracking-[0.2em] leading-relaxed">
              Bespoke analytical frameworks built to transform raw complexity into absolute commercial clarity.
            </p>
            <div className="w-12 h-[1px] bg-[#3ab5d8]"></div>
          </div>
        </div>

        {/* RIGHT SIDE: THE MOTION STORY */}
        <div className="lg:w-[55%] flex flex-col relative z-10">
          {services.map((service, idx) => (
            <ServiceBlock key={service.num} service={service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceBlock = ({ service, index }) => {
  const blockRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: blockRef,
    offset: ["start end", "end start"]
  });

  // Parallax Values for deep depth
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const numY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const cardY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <div ref={blockRef} className="relative w-full min-h-screen flex items-center justify-center py-20 px-6 lg:px-20 overflow-hidden border-b border-stone-100">
      
      {/* Ghost Number (Slow Parallax) */}
      <motion.div style={{ y: numY }} className="absolute top-20 left-10 lg:left-20 select-none z-0">
        <span className="text-[30vw] font-serif italic text-stone-100/60 leading-none">
          {service.num}
        </span>
      </motion.div>

      <div className="relative z-10 w-full max-w-4xl">
        {/* Mobile Title */}
        <h3 className="lg:hidden text-4xl font-serif mb-8">{service.title}</h3>

        <div className="relative flex flex-col items-center">
          
          {/* Main Visual Frame */}
          <div className="relative w-full lg:w-[85%] aspect-[16/10] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] bg-stone-200">
             <motion.img 
               style={{ y: imgY }}
               src={service.img} 
               className="absolute inset-0 w-full h-[130%] object-cover grayscale brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-1000 ease-out"
             />
             {/* Dynamic Dark Gradient */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>

          {/* Overlapping Narrative Card */}
          <motion.div 
            style={{ y: cardY }}
            className="w-[90%] lg:w-[55%] bg-white p-8 lg:p-14 lg:absolute lg:right-0 lg:-bottom-20 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] z-20"
          >
            <div className="flex items-center justify-between mb-8">
               <div className="flex gap-2">
                  {service.tags.map(tag => (
                    <span key={tag} className="text-[8px] uppercase tracking-widest font-bold text-stone-400">
                      {tag}
                    </span>
                  ))}
               </div>
               <span className="font-serif italic text-stone-200 text-2xl">0{index + 1}</span>
            </div>

            <h3 className="hidden lg:block text-2xl font-serif mb-6 text-stone-300 tracking-tight">
               {service.title}
            </h3>

            <h4 className="font-serif text-2xl lg:text-3xl italic mb-6 leading-[1.2] text-[#111]">
               "{service.statement}"
            </h4>

            <p className="text-stone-500 text-sm leading-relaxed mb-10 font-light">
              {service.desc}
            </p>

            <button className="group flex items-center gap-6">
               <span className="text-[10px] uppercase tracking-[0.4em] font-bold border-b border-stone-100 pb-1 group-hover:border-stone-800 transition-all">
                  Read Method
               </span>
               <div className="w-8 h-8 rounded-full border border-stone-100 flex items-center justify-center group-hover:bg-[#3ab5d8] group-hover:border-[#3ab5d8] transition-all">
                  <ArrowUpRight size={14} className="group-hover:text-white transition-colors" />
               </div>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StrategicPillars;