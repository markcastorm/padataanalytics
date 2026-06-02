import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Introduction = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Scroll effect for the text to float up slightly as we reach it
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[80vh] flex items-center justify-center bg-[#050505] overflow-hidden py-40 px-6"
    >
      {/* 1. THE INTERACTIVE SPOTLIGHT */}
      <div 
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.06), transparent 80%)`,
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* EYEBROW */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex justify-center mb-12"
        >
          <span className="text-[10px] uppercase tracking-[0.6em] text-[#3ab5d8] font-bold">
            The Philosophy
          </span>
        </motion.div>

        {/* MAIN MANIFESTO */}
        <motion.div style={{ y }} className="relative">
          <h2 className="text-center font-serif text-4xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight select-none">
            <span className="text-white/10 transition-colors duration-700 hover:text-white">
              Raw data is just noise. 
            </span>
            <br />
            <span className="text-white/10 transition-colors duration-700 hover:text-white italic">
              Strategy is the filter.
            </span>
            <br />
            <span className="text-white/10 transition-colors duration-700 hover:text-white">
              We provide the clarity.
            </span>
          </h2>
        </motion.div>

        {/* SECONDARY STATEMENT */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.4 }}
          transition={{ delay: 0.5 }}
          className="mt-20 max-w-2xl mx-auto text-center"
        >
          <p className="text-white text-sm md:text-lg font-light leading-relaxed tracking-wide">
            In an era of information overflow, the advantage belongs to those who can see through the fog. PA Analytics bridges the gap between complex datasets and decisive action.
          </p>
        </motion.div>

        {/* DECORATIVE LINE */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "circOut" }}
          className="w-full h-[1px] bg-gradient-to-r from-transparent via-stone-800 to-transparent mt-24"
        />
      </div>

      {/* SIDE DATA DECORATION */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden 2xl:block opacity-20">
        <p className="rotate-[-90deg] origin-left text-[9px] uppercase tracking-[0.4em] text-white font-mono">
          Precision / Evidence / Insight
        </p>
      </div>
    </section>
  );
};

export default Introduction;