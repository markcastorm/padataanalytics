import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const NarrativeExpertise = () => {
  const { scrollYProgress } = React.useRef(null); // Local ref for better performance

  return (
    <section className="relative w-full bg-[#FCFAF9] py-32 md:py-60 px-6 md:px-20 overflow-hidden">
      
      {/* 01. THE OPENING THESIS */}
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 mb-40 md:mb-80">
        <div className="lg:col-span-8">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.6em] text-stone-400 font-bold mb-12"
          >
            01 / The Core Mission
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#1A1A1A] text-5xl md:text-8xl font-serif leading-[1.05] tracking-tight"
          >
            Intelligence is <span className="italic">more</span> <br /> 
            than just a report.
          </motion.h2>
        </div>
        <div className="lg:col-span-4 flex items-end">
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ delay: 0.5 }}
             className="text-stone-500 text-xs md:text-sm leading-relaxed uppercase tracking-widest font-medium"
          >
            Most organisations are drowning in data but starving for insight. 
            We provide the analytical lens required to turn noise into decisive action.
          </motion.p>
        </div>
      </div>

      {/* 02. THE THREE PILLARS (ASYMMETRIC FLOW) */}
      <div className="max-w-[1800px] mx-auto space-y-40 md:space-y-80">
        
        {/* PILLAR 1: E-COMMERCE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
             <div className="relative group">
                <motion.div 
                   whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
                   initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                   transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
                   className="aspect-[3/4] bg-stone-200 overflow-hidden"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80" 
                    className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
                    alt="Commerce"
                  />
                </motion.div>
                {/* Asymmetric Label */}
                <div className="absolute -top-10 -right-10 hidden xl:block">
                   <p className="font-serif text-6xl italic text-[#1A1A1A] opacity-10">Retail</p>
                </div>
             </div>
          </div>
          <div className="lg:col-span-6 lg:offset-1 order-1 lg:order-2">
            <h3 className="text-[#1A1A1A] text-4xl md:text-6xl font-serif mb-8 leading-tight">
              Predicting the <br /> <span className="italic">Purchase Path.</span>
            </h3>
            <p className="text-stone-500 text-xs md:text-sm uppercase tracking-[0.3em] font-bold mb-6">Sector: E-Commerce & D2C</p>
            <p className="text-stone-600 text-base md:text-lg leading-relaxed max-w-lg mb-10">
              We go beyond ROAS. We analyze lifetime value, churn probabilities, and cohort behavior to tell you not just who is buying, but who will stay.
            </p>
            <ul className="space-y-4 border-t border-stone-200 pt-8">
              {['Attribution Modeling', 'RFM Segmentation', 'LTV Forecasting'].map(item => (
                <li key={item} className="text-[10px] uppercase tracking-[0.4em] text-stone-400 font-bold flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3ab5d8]"></span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* PILLAR 2: NGO (REVERSED) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 order-1">
            <h3 className="text-[#1A1A1A] text-4xl md:text-6xl font-serif mb-8 leading-tight">
              Proving the <br /> <span className="italic">Human Impact.</span>
            </h3>
            <p className="text-stone-500 text-xs md:text-sm uppercase tracking-[0.3em] font-bold mb-6">Sector: Non-Profit & NGO</p>
            <p className="text-stone-600 text-base md:text-lg leading-relaxed max-w-lg mb-10">
              Your impact is real—now make it visible. We transform complex fieldwork data into transparent, funder-ready dashboards that win grants.
            </p>
            <a href="#ngo" className="inline-block px-10 py-4 border border-stone-200 text-[#1A1A1A] uppercase text-[9px] tracking-[0.4em] hover:bg-black hover:text-white transition-all duration-500 font-bold">
              The NGO Tier
            </a>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 order-2">
            <motion.div 
               whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
               initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
               transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
               className="aspect-[3/4] bg-stone-200 overflow-hidden relative group"
            >
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80" 
                className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
                alt="Impact"
              />
               <div className="absolute bottom-8 left-8">
                  <p className="font-serif text-4xl italic text-white opacity-40 leading-none">Evidence</p>
               </div>
            </motion.div>
          </div>
        </div>

      </div>

      {/* BACKGROUND ACCENT TEXT */}
      <div className="absolute top-1/2 left-0 w-full pointer-events-none overflow-hidden opacity-[0.02] select-none">
        <p className="text-[25vw] font-serif font-bold whitespace-nowrap leading-none">PRECISION DATA</p>
      </div>

    </section>
  );
};

export default NarrativeExpertise;