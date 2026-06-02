import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550741113-50749757364d?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  // Rotate images every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#050505] flex items-end">
      
      {/* 1. ATMOSPHERIC BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img 
            key={index}
            src={images[index]} 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.25, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="w-full h-full object-cover"
            alt="Background"
          />
        </AnimatePresence>

        {/* 2. PREMIUM TEXTURE & GLOWS */}
        {/* Film Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        {/* Soft "Spotlight" Glow in the top right to break the darkness */}
        <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[70%] bg-stone-500/10 blur-[120px] rounded-full" />
        
        {/* Bottom-left glow to highlight the text */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-stone-800/20 blur-[100px] rounded-full" />

        {/* Linear dark gradients to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
      </div>

      {/* 3. CONTENT LAYER */}
      <div className="relative z-10 w-full px-8 md:px-16 pb-16 md:pb-24 max-w-[1400px]">
        <div className="flex flex-col items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="w-12 h-[1px] bg-stone-600"></span>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-stone-500 font-bold">
              Marketing Intelligence — 2024
            </p>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-white text-5xl md:text-8xl font-serif leading-[1.1] mb-10 max-w-4xl"
          >
            Your data is already <br /> 
            <span className="italic font-light text-stone-300">telling a story.</span>
          </motion.h1>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
            <motion.a 
              href="#contact" 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
              className="px-10 py-4 border border-white/20 text-white uppercase text-[9px] tracking-[0.4em] hover:bg-white hover:text-black transition-all duration-500 font-bold"
            >
              Explore Intelligence
            </motion.a>

            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 1.2 }}
              className="text-white text-[10px] max-w-[280px] leading-relaxed uppercase tracking-widest font-medium"
            >
              Advanced marketing analytics & impact reporting for those who value clarity.
            </motion.p>
          </div>
        </div>
      </div>

      {/* 4. SIDE DECORATION */}
      <div className="absolute right-8 md:right-16 bottom-16 md:bottom-24 z-10 flex flex-col items-center gap-8">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown size={20} strokeWidth={1} className="text-stone-600" />
        </motion.div>
        <div className="rotate-90 origin-center whitespace-nowrap">
           <p className="text-[9px] uppercase tracking-[0.5em] text-stone-600 font-bold">
            Scroll to reveal
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;