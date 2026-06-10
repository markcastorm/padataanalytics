import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const navConfig = {
  leftLinks: [
    { label: "Services", href: "/services" },
    { label: "Our Work", href: "/ourwork" },
  ],
  rightLinks: [
    { label: "NGO Impact", href: "#ngo" },
    { label: "About", href: "/about" },
  ],
  fullMenu: [
    { title: "Strategy", sub: "Data-driven roadmaps", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" },
    { title: "Analytics", sub: "The core intelligence", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" },
    { title: "Non-Profit", sub: "Impact reporting", img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80" },
    { title: "Products", sub: "Self-service tools", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80" },
  ]
};

// Added variant prop: "dark" (default) or "light"
const Navbar = ({ variant = "dark" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Adaptive Logic
  // If we have scrolled, we always want white text (because the bg becomes black/80)
  // If we haven't scrolled, we use white for dark pages and black for light pages.
  const isTransparentLight = variant === "light" && !isScrolled;
  const textColor = isTransparentLight ? "text-black" : "text-white";
  const burgerBg = isTransparentLight ? "bg-black" : "bg-white";
  const borderColor = isScrolled ? "border-white/10" : (variant === "light" ? "border-black/5" : "border-white/10");

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 px-6 md:px-12 ${
        isScrolled ? "py-4 bg-black/80 backdrop-blur-lg border-b " + borderColor : "py-8 bg-transparent"
      }`}>
        <div className={`max-w-[1800px] mx-auto flex justify-between items-center transition-colors duration-500 ${textColor}`}>
          
          {/* LEFT NAV */}
          <div className="hidden lg:flex gap-10 items-center">
            {navConfig.leftLinks.map(link => (
              <a key={link.label} href={link.href} className={`text-[10px] uppercase tracking-luxury font-medium transition-colors ${isTransparentLight ? "hover:text-stone-500" : "hover:text-stone-400"}`}>
                {link.label}
              </a>
            ))}
          </div>

          {/* CENTER LOGO */}
          <div className="absolute left-1/2 -translate-x-1/2 text-center">
            <a href="/" className="text-xl md:text-2xl font-serif tracking-[0.2em] uppercase inline-block">
              PA<span className="italic opacity-70">Analytics</span>
            </a>
          </div>

          {/* RIGHT NAV */}
          <div className="flex gap-10 items-center">
            <div className="hidden lg:flex gap-10">
              {navConfig.rightLinks.map(link => (
                <a key={link.label} href={link.href} className={`text-[10px] uppercase tracking-luxury font-medium transition-colors ${isTransparentLight ? "hover:text-stone-500" : "hover:text-stone-400"}`}>
                  {link.label}
                </a>
              ))}
            </div>
            
            {/* BURGER BUTTON */}
            <button onClick={() => setIsOpen(true)} className="group flex items-center gap-3">
              <span className={`text-[10px] uppercase tracking-luxury hidden sm:block transition-colors ${isTransparentLight ? "group-hover:text-stone-500" : "group-hover:text-stone-400"}`}>Menu</span>
              <div className="flex flex-col gap-1">
                <span className={`w-5 h-[1px] group-hover:w-8 transition-all ${burgerBg}`}></span>
                <span className={`w-8 h-[1px] ${burgerBg}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* FULL SCREEN OVERLAY - Always stays dark for luxury branding */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#050505] flex flex-col md:flex-row"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 md:top-12 md:right-12 text-white z-[70] hover:rotate-90 transition-transform duration-500"
            >
              <X size={40} strokeWidth={1} />
            </button>

            <div className="hidden md:block w-[60%] h-full relative overflow-hidden bg-stone-900">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={navConfig.fullMenu[activeIndex].img}
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-r from-[#050505] to-transparent" />
            </div>

            <div className="w-full md:w-[40%] h-full flex flex-col justify-center px-10 md:px-20 border-l border-white/5">
              <div className="space-y-8">
                {navConfig.fullMenu.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 + 0.3 }}
                    onMouseEnter={() => setActiveIndex(idx)}
                  >
                    <a href="/" className="group block">
                      <span className="text-[10px] text-stone-500 block mb-2 font-mono uppercase tracking-widest italic">0{idx + 1}</span>
                      <h2 className={`text-4xl md:text-6xl font-serif transition-all duration-500 ${activeIndex === idx ? "pl-4 text-white" : "text-white/20 hover:text-white/50"}`}>
                        {item.title}
                      </h2>
                      <p className={`text-[10px] uppercase tracking-widest mt-2 transition-opacity duration-500 ${activeIndex === idx ? "opacity-60" : "opacity-0"}`}>
                        {item.sub}
                      </p>
                    </a>
                  </motion.div>
                ))}
              </div>

              <div className="mt-20 pt-10 border-t border-white/10">
                <p className="text-[9px] uppercase tracking-[0.4em] text-stone-500 mb-4 font-bold">Contact</p>
                <a href="mailto:hello@padataanalytics.com" className="text-white hover:text-stone-400 transition-colors font-light tracking-wide">
                  hello@padataanalytics.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;