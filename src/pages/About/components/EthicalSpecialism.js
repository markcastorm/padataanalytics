import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Heart, Globe, Building2, MapPin } from "lucide-react";

const tiers = [
  {
    id: "01",
    phase: "Grassroots_Initiative",
    title: "Pro Bono Support",
    rate: "$0.00",
    desc: "Direct analytical intervention for emerging missions with limited infrastructure. We provide the technical heart required for continental scale.",
    deliverable: "Impact Framework v1.0",
    icon: <Heart size={18} strokeWidth={1.5} />
  },
  {
    id: "02",
    phase: "Established_Mission",
    title: "Nonprofit Rate",
    rate: "$100 — $200",
    desc: "Standardizing the bridge between fieldwork reality and international funder expectations. Specialized M&E data for growth-stage NGOs.",
    deliverable: "Donor Data Infrastructure",
    icon: <Globe size={18} strokeWidth={1.5} />
  },
  {
    id: "03",
    phase: "Humanitarian_System",
    title: "Corporate Standard",
    rate: "Quote_On_Audit",
    desc: "Large-scale data orchestration and automated impact narratives for multi-country humanitarian programs and international entities.",
    deliverable: "Full-Stack System Design",
    icon: <Building2 size={18} strokeWidth={1.5} />
  }
];

const EthicalSpecialism = () => {
  return (
    <section className="relative bg-[#FDFDFC] py-32 md:py-64 px-6 md:px-12 lg:px-24 overflow-hidden">
      
      {/* 1. BACKGROUND ANNOTATIONS (Subtle technical markers) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-black" />
        <div className="absolute top-3/4 left-0 w-full h-[1px] bg-black" />
        <p className="absolute top-[26%] left-10 font-mono text-[8px] uppercase tracking-widest text-black">Section_Ref // 04.A</p>
      </div>

      <div className="max-w-[1700px] mx-auto relative z-10">
        
        {/* HEADER: ASYMMETRICAL PROPORTIONS */}
        <div className="grid lg:grid-cols-12 gap-10 mb-40 items-start">
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="w-2 h-2 rounded-full bg-stone-300 animate-pulse" />
              <span className="font-mono text-[9px] text-stone-400 tracking-[0.6em] uppercase font-bold">Ethical_Intelligence</span>
            </motion.div>
            <h2 className="text-[#111] text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.9] tracking-tighter">
              Bridges for <br />
              <span className="italic text-stone-300 font-light">Missions.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pt-32">
             <div className="max-w-xs space-y-10 border-l border-stone-200 pl-10">
                <p className="text-stone-500 text-sm md:text-base leading-relaxed font-light italic">
                   "We do not view data as cold logic. We view it as the evidence required to prove that change is possible."
                </p>
                <div className="flex flex-col gap-2">
                   <p className="font-mono text-[8px] uppercase tracking-widest text-stone-300">Lead Analyst Strategy</p>
                   <p className="text-[10px] uppercase font-bold tracking-widest text-[#111]">Patience Anono // 2024</p>
                </div>
             </div>
          </div>
        </div>

        {/* THE SLIDING SCALE: STAGGERED VERTICAL FLOW */}
        <div className="space-y-1 w-full border-t border-stone-100">
           {tiers.map((tier, idx) => (
             <motion.div
               key={tier.id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: idx * 0.1 }}
               className="group grid lg:grid-cols-12 gap-10 py-16 md:py-24 border-b border-stone-100 hover:bg-stone-50 transition-colors duration-700 items-center px-4"
             >
                <div className="lg:col-span-1">
                   <span className="font-mono text-xs text-stone-300 group-hover:text-[#111] transition-colors">{tier.id}</span>
                </div>
                
                <div className="lg:col-span-4 space-y-4">
                   <div className="flex items-center gap-3 text-stone-400">
                      {tier.icon}
                      <span className="font-mono text-[9px] uppercase tracking-widest">{tier.phase}</span>
                   </div>
                   <h3 className="text-[#111] text-3xl md:text-5xl font-serif group-hover:italic transition-all duration-500">{tier.title}</h3>
                </div>

                <div className="lg:col-span-4">
                   <p className="text-stone-500 text-sm leading-loose font-light max-w-sm">
                      {tier.desc}
                   </p>
                </div>

                <div className="lg:col-span-3 text-right space-y-4">
                   <div>
                      <p className="font-mono text-[8px] uppercase tracking-widest text-stone-300 mb-1">Sliding_Scale</p>
                      <p className="text-[#111] text-2xl font-serif italic">{tier.rate}</p>
                   </div>
                   <button className="inline-flex items-center gap-4 text-[9px] uppercase tracking-[0.4em] font-bold text-stone-400 group-hover:text-stone-900 transition-colors">
                      Inquire <ArrowUpRight size={14} />
                   </button>
                </div>
             </motion.div>
           ))}
        </div>

        {/* BASE OPERATIONS: THE VALIDATION STAMP */}
        <div className="mt-40 md:mt-64 grid lg:grid-cols-12 gap-16 lg:gap-32 items-center">
           <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative aspect-square overflow-hidden grayscale contrast-125 border border-stone-100 shadow-2xl">
                 <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop" 
                    className="w-full h-full object-cover brightness-90 hover:scale-105 transition-transform duration-[3s]" 
                    alt="Nairobi Hub" 
                 />
                 <div className="absolute inset-0 bg-stone-900/5 mix-blend-multiply" />
              </div>
              
              {/* Technical Seal Overlay */}
              <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full border border-stone-200 backdrop-blur-md flex items-center justify-center text-center p-8 shadow-xl bg-white/50">
                 <div className="space-y-1">
                    <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-stone-400">Verified_Base</p>
                    <p className="text-[#111] text-xs font-bold uppercase tracking-widest">NBO // HQ</p>
                    <div className="h-[1px] w-8 bg-stone-300 mx-auto my-2" />
                    <p className="font-mono text-[7px] text-stone-300">1.2921° S // 36.8219° E</p>
                 </div>
              </div>
           </div>

           <div className="lg:col-span-7 space-y-12 order-1 lg:order-2">
              <div className="space-y-8">
                 <div className="flex items-center gap-4">
                    <MapPin size={18} className="text-stone-300" strokeWidth={1} />
                    <span className="font-mono text-[10px] text-stone-400 tracking-[0.5em] uppercase font-bold">Nairobi_Base // Global_Reach</span>
                 </div>
                 <h4 className="text-[#111] text-5xl md:text-8xl font-serif italic tracking-tighter leading-none">
                    Rooted in <br /> Kenya.
                 </h4>
                 <p className="text-stone-500 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                    While our analytical interventions scale D2C brands across 4 continents, our heart remains in **Nairobi**. We leverage this local presence to provide clinical impact reporting for the NGOs shaping the future of the continent.
                 </p>
              </div>

              <div className="flex flex-wrap gap-12 border-t border-stone-100 pt-12">
                 {[
                    { l: "Status", v: "Active_HQ" },
                    { l: "Radius", v: "Operating_Globally" },
                    { l: "Specialism", v: "African NGO" }
                 ].map((stat, i) => (
                    <div key={i} className="space-y-2">
                       <p className="font-mono text-[8px] uppercase tracking-widest text-stone-400 font-bold">{stat.l}</p>
                       <p className="text-[10px] uppercase font-bold tracking-widest text-[#111]">{stat.v}</p>
                    </div>
                 ))}
              </div>
           </div>
        </div>

      </div>

      {/* BACKGROUND DECORATION */}
      <div className="absolute bottom-10 left-10 opacity-[0.02] pointer-events-none select-none">
         <h3 className="text-[25vw] font-serif font-black uppercase italic leading-none">ETHICAL</h3>
      </div>
    </section>
  );
};

export default EthicalSpecialism;