import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    num: "01",
    title: "E-Commerce Intelligence",
    statement: "Your ad spend is bleeding. We stop it.",
    desc: "You are spending on Meta, Google, and TikTok with no clear picture of true ROAS. We connect your ad platforms, sales data, and customer behavior into one single, undeniable source of truth.",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80"
  },
  {
    num: "02",
    title: "Growth & Retention",
    statement: "Acquisition is expensive. Retention is profit.",
    desc: "Most analysts tell you what happened yesterday. We use predictive analytics, RFM modeling, and cohort analysis to tell you what your customers will do tomorrow—and who is likely to churn.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
  },
  {
    num: "03",
    title: "NGO Impact",
    statement: "Impact isn't an emotion. It's a metric.",
    desc: "You do the vital work on the ground. We build the monitoring & evaluation (M&E) systems, impact trackers, and donor-ready dashboards required to prove your efficacy and win global funding.",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80"
  }
];

const StrategicPillars = () => {
  return (
    // Warmer, softer background color to reduce eye strain
    <section className="relative w-full bg-[#F9F8F6] text-[#111111]">
      <div className="w-full flex flex-col lg:flex-row max-w-[1800px] mx-auto">
        
        {/* ========================================== */}
        {/* LEFT SIDE: STICKY MANIFESTO                */}
        {/* ========================================== */}
        <div className="lg:w-1/2 lg:h-screen lg:sticky lg:top-0 flex flex-col justify-center p-8 md:p-16 lg:p-24 z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-4 mb-12"
          >
            <span className="w-8 h-[1px] bg-[#a8a6a1]"></span>
            <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-[#8b8984]">
              The Architecture of Insight
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif leading-[1.05] tracking-tight mb-8"
          >
            We don't just <br />
            report the past. <br />
            <span className="italic text-[#8b8984] font-light">We engineer the future.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-[#666666] text-xs md:text-sm leading-relaxed max-w-md font-medium uppercase tracking-widest"
          >
            Four pillars of intelligence designed for organizations serious about scaling through evidence, not intuition.
          </motion.p>
        </div>

        {/* ========================================== */}
        {/* RIGHT SIDE: SCROLLING EVIDENCE             */}
        {/* ========================================== */}
        <div className="lg:w-1/2 flex flex-col pt-10 lg:pt-0">
          {services.map((service, idx) => (
            <ServiceBlock key={service.num} service={service} isLast={idx === services.length - 1} />
          ))}
        </div>

      </div>
    </section>
  );
};

// ==========================================
// INDIVIDUAL SCROLLING BLOCK COMPONENT
// ==========================================
const ServiceBlock = ({ service, isLast }) => {
  const containerRef = useRef(null);
  
  // Track scroll progress of THIS specific block for parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Smooth parallax translation for the image
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full flex flex-col justify-center min-h-screen p-8 md:p-16 lg:py-32 lg:px-24 ${!isLast ? 'border-b border-[#e8e6e1]' : ''}`}
    >
      {/* Block Header */}
      <div className="flex items-start justify-between mb-10">
        <h3 className="text-3xl md:text-5xl font-serif leading-tight max-w-[80%] text-[#111111]">
          {service.title}
        </h3>
        <span className="font-mono text-sm md:text-base text-[#a8a6a1] mt-2">
          {service.num}
        </span>
      </div>

      {/* Interactive Image Container */}
      <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-2xl bg-[#e8e6e1] mb-12 shadow-sm group">
        <motion.img 
          style={{ y }}
          src={service.img} 
          alt={service.title}
          className="absolute inset-0 w-full h-[130%] object-cover grayscale opacity-90 transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.02]"
        />
        {/* Soft inner shadow for depth */}
        <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_20px_rgba(0,0,0,0.05)] pointer-events-none" />
      </div>

      {/* Block Content */}
      <div className="pl-0 md:pl-8 lg:pl-12 border-l border-[#e8e6e1]">
        <h4 className="text-lg md:text-xl font-medium mb-4 tracking-wide text-[#111111]">
          {service.statement}
        </h4>
        <p className="text-[#666666] text-sm md:text-base leading-relaxed max-w-lg mb-10">
          {service.desc}
        </p>

        {/* Magnetic / Interactive Link */}
        <a href="#contact" className="inline-flex items-center gap-4 group">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#111111] group-hover:text-[#3ab5d8] transition-colors duration-300">
            View Capabilities
          </span>
          <div className="w-8 h-8 rounded-full border border-[#d1cfca] flex items-center justify-center group-hover:bg-[#3ab5d8] group-hover:border-[#3ab5d8] transition-all duration-300 transform group-hover:translate-x-2">
            <ArrowUpRight size={14} className="text-[#111] group-hover:text-white transition-colors" />
          </div>
        </a>
      </div>
    </motion.div>
  );
};

export default StrategicPillars;