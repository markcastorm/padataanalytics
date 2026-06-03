import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Lock, Download, Layers } from "lucide-react";

const products = [
  {
    id: "01",
    name: "Revenue Tracking Matrix",
    tag: "E-Commerce",
    price: "$19",
    features: ["ROAS Multi-Platform", "Inventory Correlation", "Daily Pulse"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    desc: "A clinical tracking system for brands spending $5k - $50k monthly on Meta & Google."
  },
  {
    id: "02",
    name: "NGO Impact Framework",
    tag: "Non-Profit",
    price: "$19",
    features: ["M&E Compliance", "Donor Reporting", "Qualitative Mapping"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    desc: "Standardizing the bridge between fieldwork reality and funder expectations."
  },
  {
    id: "03",
    name: "Cohort Retention Model",
    tag: "Analytics",
    price: "$29",
    features: ["LTV Forecasting", "Churn Probability", "Segmentation"],
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=1200",
    desc: "The exact retention logic used in our enterprise audits, portable and deployable."
  }
];

const DigitalProducts = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="w-full bg-[#050505] py-32 md:py-56 px-6 md:px-12 lg:px-24 text-white overflow-hidden">
      
      {/* HEADER: WIDE & EDITORIAL */}
      <div className="max-w-[1800px] mx-auto mb-32 border-b border-white/5 pb-20 flex flex-col lg:flex-row justify-between items-end gap-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-8">
            <Layers size={18} className="text-[#3ab5d8]" />
            <p className="text-[10px] uppercase tracking-[0.5em] text-stone-500 font-bold">Inventory // 2024</p>
          </div>
          <h2 className="text-5xl md:text-8xl font-serif leading-[1] tracking-tighter">
            Deployable <br />
            <span className="italic text-stone-400 font-light">Intelligence.</span>
          </h2>
        </div>
        <div className="max-w-xs">
          <p className="text-stone-500 text-[10px] uppercase tracking-[0.3em] leading-loose font-medium italic">
            Proprietary analytical tools built in Python and refined in Excel. High-end frameworks, accessible instantly.
          </p>
        </div>
      </div>

      {/* THE SLIDING INVENTORY LIST */}
      <div className="max-w-[1800px] mx-auto">
        {products.map((product, idx) => (
          <div
            key={product.id}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group relative w-full border-b border-white/5 py-12 md:py-20 flex flex-col lg:flex-row items-start lg:items-center justify-between cursor-pointer transition-all duration-500 hover:px-8"
          >
            {/* 1. PRODUCT TITLE & TAG */}
            <div className="flex items-center gap-8 md:gap-16 z-10">
              <span className="font-mono text-xs text-stone-600">0{idx + 1}</span>
              <div className="relative">
                <h3 className="text-3xl md:text-6xl font-serif transition-all duration-700 group-hover:italic group-hover:translate-x-4">
                  {product.name}
                </h3>
                <div className="flex gap-4 mt-4 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                  <span className="text-[9px] uppercase tracking-widest font-bold text-[#3ab5d8] border border-[#3ab5d8]/30 px-3 py-1 rounded-full">
                    {product.tag}
                  </span>
                  <span className="text-[9px] uppercase tracking-widest font-bold text-stone-400 flex items-center gap-2">
                    <Download size={10} /> Instantly Available
                  </span>
                </div>
              </div>
            </div>

            {/* 2. DYNAMIC PREVIEW WINDOW (Only visible when hovering) */}
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.div
                  initial={{ opacity: 0, x: -100, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 100, scale: 0.9 }}
                  transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                  className="hidden lg:block absolute left-[45%] top-1/2 -translate-y-1/2 w-[350px] h-[250px] z-0 overflow-hidden pointer-events-none rounded-sm shadow-2xl border border-white/10"
                >
                  <img src={product.image} className="w-full h-full object-cover grayscale brightness-50" alt="Preview" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-[10px] text-stone-400 uppercase tracking-widest font-mono">Module Preview</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* 3. PRICE & CTA */}
            <div className="mt-10 lg:mt-0 flex items-center gap-12 z-10 w-full lg:w-auto justify-between lg:justify-end">
              <div className="text-right">
                <p className="text-[9px] uppercase tracking-[0.4em] text-stone-500 font-bold mb-1">Acquisition Fee</p>
                <p className="text-3xl font-serif text-white">{product.price}</p>
              </div>
              <button className="flex items-center gap-4 bg-white text-black p-4 md:p-6 rounded-full group-hover:bg-[#3ab5d8] group-hover:text-white transition-all duration-500 group/btn shadow-xl">
                 <span className="text-[10px] uppercase tracking-[0.3em] font-bold hidden md:block">Acquire Asset</span>
                 <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Background Text that appears on hover */}
            <div className="absolute top-1/2 left-0 w-full text-center pointer-events-none opacity-0 group-hover:opacity-[0.03] transition-opacity duration-1000">
               <span className="text-[15vw] font-serif font-bold uppercase whitespace-nowrap">Proprietary</span>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER: COMING SOON VAULT */}
      <div className="max-w-[1800px] mx-auto mt-20">
         <div className="w-full py-16 border-t border-dashed border-white/10 flex flex-col md:flex-row items-center justify-between gap-10 opacity-30 hover:opacity-100 transition-opacity duration-700">
            <div className="flex items-center gap-10">
               <Lock size={32} className="text-stone-500" />
               <div>
                  <h4 className="font-serif text-2xl italic text-white mb-2">The 2024 Collection Vault</h4>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-stone-500 font-bold">
                    Next release: Social Growth / Freelance / ROI Radar
                  </p>
               </div>
            </div>
            <button className="px-10 py-4 border border-white/10 text-[9px] uppercase tracking-[0.4em] font-bold hover:bg-white hover:text-black transition-all">
              Notify me of new assets
            </button>
         </div>
      </div>
    </section>
  );
};

export default DigitalProducts;