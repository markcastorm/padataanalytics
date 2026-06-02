import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Maximize2 } from "lucide-react";

const services = [
  {
    num: "01",
    title: "E-Commerce Intelligence",
    statement: "Your ad spend is bleeding. We stop it.",
    desc: "We bridge the gap between Meta, Google, and your actual warehouse data. No more guessing ROAS—we provide a single, clinical source of truth.",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
    tags: ["D2C Strategy", "Attribution", "Funnel Audit"]
  },
  {
    num: "02",
    title: "Growth & Retention",
    statement: "Acquisition is expensive. Retention is profit.",
    desc: "Moving beyond 'last-click' metrics. We use predictive modeling and cohort analysis to identify which customers will drive your next year of growth.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    tags: ["Predictive Analytics", "RFM", "LTV Modeling"]
  },
  {
    num: "03",
    title: "NGO Impact",
    statement: "Impact isn't an emotion. It's a metric.",
    desc: "Turning fieldwork into funder-ready evidence. We build the M&E systems and dashboards required to secure international grants and scale your mission.",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80",
    tags: ["Grant Support", "Impact Tracking", "Visualization"]
  }
];

const StrategicPillars = () => {
  return (
    <section className="relative w-full bg-[#F9F8F6] text-[#111111]">
      <div className="w-full flex flex-col lg:flex-row">
        
        {/* LEFT SIDE: THE FIXED MANIFESTO */}
        <div className="lg:w-[45%] lg:h-screen lg:sticky lg:top-0 flex flex-col justify-center p-8 md:p-16 lg:p-24 bg-[#F9F8F6] z-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="w-8 h-[1px] bg-[#3ab5d8]"></span>
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-stone-400">Pillar Strategy</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] tracking-tight mb-8">
            We don't just <br />
            report data. <br />
            <span className="italic text-stone-300 font-light italic">We distill it.</span>
          </h2>
          
          <div className="max-w-xs border-t border-stone-200 pt-8 mt-4">
            <p className="text-[#666] text-[10px] uppercase tracking-[0.3em] leading-relaxed font-semibold">
              Bespoke analytical frameworks built to transform raw complexity into absolute commercial clarity.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: THE LAYERED SCROLLING PILLARS */}
        <div className="lg:w-[55%] flex flex-col relative z-10 bg-[#F9F8F6]">
          {services.map((service, idx) => (
            <ServiceBlock key={service.num} service={service} isLast={idx === services.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceBlock = ({ service, isLast }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen flex items-center py-20 px-8 md:px-16 lg:px-20 overflow-hidden">
      
      {/* Background Ghost Number */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none z-0">
        <span className="text-[25vw] font-serif italic text-stone-100/80 leading-none">{service.num}</span>
      </div>

      <div className="relative z-10 w-full">
        {/* Title Area */}
        <div className="mb-12">
          <h3 className="text-4xl md:text-6xl font-serif text-[#111] relative z-20">
            {service.title}
          </h3>
        </div>

        {/* Layered Image & Text Composition */}
        <div className="flex flex-col lg:flex-row items-end gap-12">
          
          {/* IMAGE PORTAL */}
          <div className="relative w-full lg:w-[70%] aspect-[4/5] lg:aspect-[16/11] overflow-hidden rounded-sm bg-stone-200 group shadow-2xl">
            <motion.img 
              style={{ y }}
              src={service.img} 
              className="absolute inset-0 w-full h-[120%] object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-out group-hover:scale-105"
            />
            {/* Scanline Effect on Hover */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-[linear-gradient(transparent_0%,rgba(58,181,216,0.5)_50%,transparent_100%)] bg-[length:100%_4px] animate-[scan_3s_linear_infinite]" />
            <div className="absolute bottom-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               <Maximize2 size={20} strokeWidth={1} />
            </div>
          </div>

          {/* OVERLAPPING INFO CARD */}
          <div className="w-full lg:w-[45%] bg-white p-8 md:p-12 lg:-ml-32 relative z-20 shadow-xl border border-stone-100">
            <div className="flex gap-2 mb-6 flex-wrap">
               {service.tags.map(tag => (
                 <span key={tag} className="text-[8px] uppercase tracking-widest font-bold px-3 py-1 border border-stone-200 text-stone-400">
                   {tag}
                 </span>
               ))}
            </div>
            <h4 className="font-serif text-xl md:text-2xl italic mb-4 leading-snug">
               "{service.statement}"
            </h4>
            <p className="text-[#666] text-xs md:text-sm leading-relaxed mb-8 uppercase tracking-widest font-medium">
              {service.desc}
            </p>
            <a href="/" className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold">
               Explore <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}} />
    </div>
  );
};

export default StrategicPillars;