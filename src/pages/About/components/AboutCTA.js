import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Mail, Calendar } from "lucide-react";

const AboutCTA = () => {
  return (
    <section className="relative bg-[#050505] py-32 md:py-64 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-white/5">
      
      {/* 1. BACKGROUND TEXTURE (The "Blue-Print" Ghost) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '150px 150px' }} />
      </div>

      <div className="max-w-[1700px] mx-auto relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          
          {/* LEFT: THE FINAL ARGUMENT */}
          <div className="lg:col-span-8 space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <ShieldCheck size={18} className="text-stone-500" />
              <span className="font-mono text-[9px] text-stone-500 tracking-[0.5em] uppercase font-bold">
                Verification_Complete // Protocol_07
              </span>
            </motion.div>

            <h2 className="text-white text-5xl md:text-8xl lg:text-9xl font-serif leading-[0.95] tracking-tighter">
              Ready to <br />
              <span className="italic text-stone-600 font-light">Bridge the Gap?</span>
            </h2>

            <div className="max-w-2xl border-l border-stone-800 pl-10">
              <p className="text-stone-400 text-lg md:text-xl font-light leading-relaxed mb-8">
                Whether scaling a global e-commerce entity or proving the impact of an NGO mission, we provide the clinical rigour required for sustainable growth.
              </p>
              {/* SEO KEYWORD INJECTION (Section 4.2) */}
              <p className="font-mono text-[10px] uppercase tracking-widest text-stone-600">
                Marketing Analytics Nairobi // E-commerce Data Intelligence // Predictive Modeling
              </p>
            </div>
          </div>

          {/* RIGHT: THE HIGH-CONTRAST TRIGGER */}
          <div className="lg:col-span-4">
            <div className="relative group p-1 bg-gradient-to-br from-white/10 to-transparent">
              <div className="bg-[#0A0A0A] p-10 md:p-14 border border-white/5 relative overflow-hidden">
                
                {/* Internal Decoration */}
                <div className="absolute top-0 right-0 p-6 opacity-10">
                   <Calendar size={40} className="text-white" strokeWidth={1} />
                </div>

                <div className="space-y-10 relative z-10">
                  <div>
                    <p className="text-stone-500 font-mono text-[9px] uppercase tracking-widest mb-4">Availability: Active</p>
                    <h3 className="text-white text-3xl font-serif">Inquire for <br /> Specialist Partnership.</h3>
                  </div>

                  <div className="space-y-4">
                    <button className="w-full py-6 bg-white text-black text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-stone-300 transition-all shadow-2xl flex items-center justify-center gap-4 group/btn">
                      Book Discovery Call
                      <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </button>
                    
                    <button className="w-full py-6 border border-white/10 text-white text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-white hover:text-black transition-all flex items-center justify-center gap-4">
                      Direct Email
                      <Mail size={14} />
                    </button>
                  </div>

                  {/* THE TIERED REMAINDER (Section 2.5) */}
                  <div className="pt-8 border-t border-white/5 grid grid-cols-3 gap-2 text-center">
                     <div>
                        <p className="text-[7px] font-mono text-stone-600 uppercase">Pro Bono</p>
                        <p className="text-[9px] text-stone-400">NGO</p>
                     </div>
                     <div className="border-x border-white/5">
                        <p className="text-[7px] font-mono text-stone-600 uppercase">Nonprofit</p>
                        <p className="text-[9px] text-stone-400">Tiered</p>
                     </div>
                     <div>
                        <p className="text-[7px] font-mono text-stone-600 uppercase">Standard</p>
                        <p className="text-[9px] text-stone-400">Corporate</p>
                     </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>

      {/* BACKGROUND DECORATION: HUGE SERIF FADE */}
      <div className="absolute -bottom-20 left-0 w-full opacity-[0.02] pointer-events-none select-none text-center">
         <h3 className="text-[30vw] font-serif font-black uppercase italic whitespace-nowrap leading-none">STRATEGY</h3>
      </div>
    </section>
  );
};

export default AboutCTA;