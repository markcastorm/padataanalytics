import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
    title: "NGO & Impact",
    statement: "Impact isn't an emotion. It's a metric.",
    desc: "You do the vital work on the ground. We build the monitoring & evaluation (M&E) systems, impact trackers, and donor-ready dashboards required to prove your efficacy and win global funding.",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80"
  }
];

const StrategicPillars = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    // Bright, expansive background. No squeezing.
    <section ref={containerRef} className="relative w-full bg-[#FAFAFA] text-[#0A0A0A]">
      
      <div className="w-full flex flex-col lg:flex-row">
        
        {/* ========================================== */}
        {/* LEFT SIDE: STICKY MANIFESTO                */}
        {/* ========================================== */}
        <div className="lg:w-1/2 lg:h-screen lg:sticky lg:top-0 flex flex-col justify-between p-8 md:p-16 lg:p-24 border-b lg:border-b-0 lg:border-r border-stone-200">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <span className="w-8 h-[1px] bg-stone-400"></span>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-stone-500">
              The Architecture of Insight
            </span>
          </motion.div>

          <div className="mt-20 lg:mt-0">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif leading-[1.05] tracking-tight mb-10"
            >
              We don't just <br />
              report the past. <br />
              <span className="italic text-stone-400 font-light">We engineer the future.</span>
            </motion.h2>

            <p className="text-stone-600 text-sm md:text-base leading-relaxed max-w-md font-medium uppercase tracking-widest">
              Four pillars of intelligence designed for organizations serious about scaling through evidence, not intuition.
            </p>
          </div>

          <div className="hidden lg:block pb-8">
             <div className="text-[9px] uppercase tracking-[0.4em] font-bold text-stone-400">
               Scroll to explore the pillars ↓
             </div>
          </div>
        </div>

        {/* ========================================== */}
        {/* RIGHT SIDE: SCROLLING EVIDENCE             */}
        {/* ========================================== */}
        <div className="lg:w-1/2 flex flex-col">
          {services.map((service, idx) => (
            <ServiceBlock key={service.num} service={service} isLast={idx === services.length - 1} />
          ))}
        </div>

      </div>
    </section>
  );
};

// Sub-component for the scrolling blocks to handle individual image parallax
const ServiceBlock = ({ service, isLast }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Subtle parallax effect on the image
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div 
      ref={ref} 
      className={`w-full flex flex-col p-8 md:p-16 lg:p-24 bg-[#FAFAFA] ${!isLast ? 'border-b border-stone-200' : ''}`}
    >
      <div className="flex items-start justify-between mb-12">
        <h3 className="text-3xl md:text-5xl font-serif leading-tight max-w-[80%]">
          {service.title}
        </h3>
        <span className="font-mono text-sm md:text-base text-stone-400">
          {service.num}
        </span>
      </div>

      <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-stone-200 mb-12">
        <motion.img 
          style={{ y }}
          src={service.img} 
          alt={service.title}
          className="absolute inset-0 w-full h-[120%] object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
        />
      </div>

      <div>
        <h4 className="text-lg md:text-xl font-medium mb-4 tracking-wide text-[#1A1A1A]">
          {service.statement}
        </h4>
        <p className="text-stone-500 text-sm md:text-base leading-loose max-w-xl">
          {service.desc}
        </p>
      </div>

      <div className="mt-12">
        <a href="#contact" className="inline-flex items-center gap-4 group">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#1A1A1A] group-hover:text-[#3ab5d8] transition-colors">
            View Capabilities
          </span>
          <span className="block w-8 h-[1px] bg-stone-300 group-hover:bg-[#3ab5d8] group-hover:w-12 transition-all duration-300"></span>
        </a>
      </div>
    </div>
  );
};

export default StrategicPillars;