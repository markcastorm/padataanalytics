import React from "react";
import { motion } from "framer-motion";
import { Heart, Globe, Building2, ArrowRight, ShieldCheck } from "lucide-react";

const tiers = [
  {
    id: "01",
    type: "Grassroots",
    title: "Pro Bono Support",
    price: "$0 / Pro Bono",
    desc: "Building the brand heart. We offer full analytical support for emerging missions with limited budgets across the continent.",
    benefit: "Building Brand Heart",
    icon: <Heart size={24} />
  },
  {
    id: "02",
    type: "Mid-Sized",
    title: "Nonprofit Rate",
    price: "$100 — $200",
    desc: "Targeted interventions for established NGOs needing to standardize their M&E data for international funders.",
    benefit: "Grant Readiness",
    icon: <Globe size={24} />
  },
  {
    id: "03",
    type: "Large NGO",
    title: "Standard Corporate",
    price: "Custom Quote",
    desc: "Full-scale data infrastructure and automated impact dashboards for multi-country humanitarian programs.",
    benefit: "Systemic Clarity",
    icon: <Building2 size={24} />
  }
];

const ImpactInfrastructure = () => {
  return (
    <section className="relative w-full bg-[#FDFDFC] py-32 md:py-56 px-6 md:px-12 lg:px-24 overflow-hidden">
      
      {/* BACKGROUND DECORATION: THIN ARCHITECTURAL LINES */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-stone-900" />
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-stone-900" />
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="grid lg:grid-cols-2 gap-10 mb-24 items-end">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <ShieldCheck size={18} className="text-[#3ab5d8]" />
              <p className="text-[10px] uppercase tracking-[0.5em] text-[#3ab5d8] font-bold">Protocol 04 // Ethical Intelligence</p>
            </div>
            <h2 className="text-[#1E2280] text-5xl md:text-8xl font-serif leading-none tracking-tighter">
              Impact <br /> <span className="italic text-stone-300 font-light">Infrastructure.</span>
            </h2>
          </div>
          <div className="max-w-md">
             <p className="text-stone-500 text-sm md:text-lg leading-relaxed font-light italic">
                "Data shouldn't just drive profit; it should drive change. We bridge the gap between fieldwork reality and funder-ready visual narratives."
             </p>
          </div>
        </div>

        {/* THE SLIDING SCALE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-stone-200 border border-stone-200">
           {tiers.map((tier, idx) => (
             <motion.div
               key={tier.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: idx * 0.1 }}
               className="bg-[#FDFDFC] p-10 md:p-16 flex flex-col justify-between group hover:bg-white transition-colors duration-500 min-h-[500px]"
             >
                <div>
                   <div className="flex justify-between items-start mb-12">
                      <div className="p-4 bg-stone-50 text-[#3ab5d8] rounded-full group-hover:bg-[#1E2280] group-hover:text-white transition-all duration-700">
                         {tier.icon}
                      </div>
                      <span className="font-mono text-[10px] text-stone-300 uppercase tracking-widest italic">{tier.type}</span>
                   </div>
                   
                   <h3 className="text-[#1E2280] text-3xl font-serif mb-4 group-hover:translate-x-2 transition-transform duration-500">
                      {tier.title}
                   </h3>
                   <p className="text-[#3ab5d8] font-mono text-[10px] uppercase tracking-[0.3em] font-bold mb-8">
                      {tier.benefit}
                   </p>
                   <p className="text-stone-500 text-sm leading-relaxed font-light mb-12">
                      {tier.desc}
                   </p>
                </div>

                <div className="pt-8 border-t border-stone-100 flex flex-col gap-6">
                   <div>
                      <p className="text-stone-400 text-[8px] uppercase tracking-widest font-bold mb-1">Sliding Scale Fee</p>
                      <p className="text-[#111] text-2xl font-serif italic">{tier.price}</p>
                   </div>
                   <button className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-bold text-stone-400 group-hover:text-[#3ab5d8] transition-colors">
                      Discuss Mission <ArrowRight size={14} />
                   </button>
                </div>
             </motion.div>
           ))}
        </div>

        {/* FOOTER CALLOUT: THE "WHY" */}
        <div className="mt-24 p-10 border border-stone-100 flex flex-col md:flex-row justify-between items-center gap-10 bg-white shadow-sm">
           <div className="max-w-2xl">
              <h4 className="font-serif text-2xl text-[#1E2280] mb-4">Turning boring donor data into funder-ready evidence.</h4>
              <p className="text-stone-500 text-xs uppercase tracking-widest leading-loose">
                 Specialized analytical frameworks designed for the NGO sector. We ensure your field metrics meet the highest standards of international grant compliance.
              </p>
           </div>
           <button className="px-10 py-5 bg-[#1E2280] text-white uppercase text-[10px] tracking-[0.4em] font-bold hover:bg-[#3ab5d8] transition-colors shadow-xl">
              View NGO Portfolio
           </button>
        </div>

      </div>
    </section>
  );
};

export default ImpactInfrastructure;