import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Mail, Calendar, Terminal } from "lucide-react";

const ServiceCTA = () => {
  return (
    <section className="relative bg-[#050505] py-32 md:py-64 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-white/5">
      
      {/* 1. BACKGROUND TEXTURE (The "Technical blueprint" Grid) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '150px 150px' }} />
      </div>

      <div className="max-w-[1700px] mx-auto relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          
          {/* LEFT: THE FINAL STRATEGIC ARGUMENT (SEO HEAVY) */}
          <div className="lg:col-span-8 space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <ShieldCheck size={18} className="text-stone-500" />
              <span className="font-mono text-[9px] text-stone-500 tracking-[0.5em] uppercase font-bold">
                Verification_Complete // Final_Protocol
              </span>
            </motion.div>

            <h2 className="text-white text-5xl md:text-8xl lg:text-9xl font-serif leading-[0.95] tracking-tighter">
              Ready to <br />
              <span className="italic text-stone-600 font-light text-4xl md:text-7xl lg:text-[7rem]">Activate Intelligence?</span>
            </h2>

            <div className="max-w-2xl border-l border-stone-800 pl-10">
              <p className="text-stone-400 text-lg md:text-xl font-light leading-relaxed mb-8">
                Bypass the noise of standard agency reporting. Secure a technical partnership designed for clinical accuracy and sustainable commercial growth.
              </p>
              
              {/* SEO KEYWORD INJECTION (Section 4.2 Audit) */}
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="px-4 py-2 border border-white/5 rounded-full">
                  <p className="font-mono text-[8px] uppercase tracking-widest text-stone-500">Marketing Analytics Nairobi</p>
                </div>
                <div className="px-4 py-2 border border-white/5 rounded-full">
                  <p className="font-mono text-[8px] uppercase tracking-widest text-stone-500">E-commerce Data Intelligence</p>
                </div>
                <div className="px-4 py-2 border border-white/5 rounded-full">
                  <p className="font-mono text-[8px] uppercase tracking-widest text-stone-500">Predictive Churn Modelling</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: THE HIGH-CONTRAST TRIGGER CARD */}
          <div className="lg:col-span-4">
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="relative group p-[1px] bg-gradient-to-br from-white/20 to-transparent"
            >
              <div className="bg-[#0A0A0A] p-10 md:p-14 relative overflow-hidden">
                
                {/* HUD Internal Decoration */}
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                   <Terminal size={60} className="text-white" strokeWidth={1} />
                </div>

                <div className="space-y-12 relative z-10">
                  <div>
                    <p className="text-stone-500 font-mono text-[9px] uppercase tracking-widest mb-4">Availability: Immediate_Selection</p>
                    <h3 className="text-white text-3xl font-serif">Initiate your <br /> specialist audit.</h3>
                  </div>

                  <div className="space-y-4">
                    {/* PRIMARY ACTION */}
                    <a 
                      href="/contact"
                      className="w-full py-6 bg-white text-black text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-stone-200 transition-all shadow-2xl flex items-center justify-center gap-4 group/btn"
                    >
                      Book Discovery Call
                      <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </a>
                    
                    {/* SECONDARY ACTION */}
                    <a 
                      href="mailto:hello@padataanalytics.com"
                      className="w-full py-6 border border-white/10 text-white text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-white hover:text-black transition-all flex items-center justify-center gap-4"
                    >
                      Direct Briefing
                      <Mail size={14} />
                    </a>
                  </div>

                  <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                     <div className="flex gap-2">
                        {[...Array(3)].map((_, i) => (
                           <div key={i} className="w-1 h-1 bg-stone-700 rounded-full" />
                        ))}
                     </div>
                     <p className="text-stone-600 font-mono text-[8px] uppercase tracking-widest italic">Auth_ID: PA_SERVICE_2024</p>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>

      </div>

      {/* 3. BACKGROUND DECORATION */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full opacity-[0.02] pointer-events-none select-none text-center">
         <h3 className="text-[25vw] font-serif font-black uppercase italic whitespace-nowrap leading-none tracking-tighter">
            EXECUTION
         </h3>
      </div>
    </section>
  );
};

export default ServiceCTA;