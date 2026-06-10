import React from "react";
import { motion } from "framer-motion";
import { Activity, ShieldCheck, TrendingUp, Zap } from "lucide-react";

const aggregates = [
  {
    id: "01",
    label: "AVERAGE_PROFIT_LIFT",
    value: "+24%",
    desc: "Net margin expansion achieved across audited D2C portfolios.",
    icon: <TrendingUp size={16} />
  },
  {
    id: "02",
    label: "PREDICTIVE_ACCURACY",
    value: "92%",
    desc: "Clinical precision in 12-month churn and revenue forecasting.",
    icon: <Activity size={16} />
  },
  {
    id: "03",
    label: "GRANT_COMPLIANCE",
    value: "100%",
    desc: "Success rate in securing funding extensions via impact evidence.",
    icon: <ShieldCheck size={16} />
  },
  {
    id: "04",
    label: "BUDGET_RECLAMATION",
    value: "32%",
    desc: "Average reduction in wasted ad-spend via attribution auditing.",
    icon: <Zap size={16} />
  }
];

const MetricHorizon = () => {
  return (
    <section className="relative w-full bg-[#FDFDFC] py-24 md:py-48 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-stone-100">
      
      {/* 1. BACKGROUND ANNOTATIONS */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-black" />
        <div className="absolute top-0 left-[25%] w-[1px] h-full bg-black" />
        <div className="absolute top-0 left-[50%] w-[1px] h-full bg-black" />
        <div className="absolute top-0 left-[75%] w-[1px] h-full bg-black" />
      </div>

      <div className="max-w-[1800px] mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-10">
           <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                 <span className="font-mono text-[9px] text-stone-400 tracking-[0.5em] uppercase font-bold">Protocol_04 // Aggregate_Averages</span>
              </div>
              <h2 className="text-[#111] text-5xl md:text-8xl font-serif leading-[0.95] tracking-tighter">
                 The Logic of <br />
                 <span className="italic text-stone-300 font-light">Consistency.</span>
              </h2>
           </div>
           <div className="md:text-right max-w-xs">
              <p className="text-stone-500 font-mono text-[9px] uppercase tracking-widest leading-loose">
                 [ Systematic verification of multi-sector performance metrics ]
              </p>
           </div>
        </div>

        {/* 2. THE HORIZON GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200 border border-stone-200">
           {aggregates.map((item, idx) => (
             <motion.div
               key={item.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: idx * 0.1, duration: 0.8 }}
               className="bg-[#FDFDFC] p-10 md:p-14 flex flex-col justify-between group hover:bg-stone-50 transition-colors duration-500 min-h-[400px]"
             >
                <div className="space-y-12">
                   <div className="flex justify-between items-start">
                      <div className="text-stone-300 group-hover:text-black transition-colors">
                        {item.icon}
                      </div>
                      <span className="font-mono text-[9px] text-stone-300 uppercase tracking-widest italic">Unit_0{idx + 1}</span>
                   </div>
                   
                   <div>
                      <p className="font-mono text-[8px] text-stone-400 uppercase tracking-[0.4em] font-bold mb-4">{item.label}</p>
                      <h3 className="text-[#111] text-6xl md:text-8xl font-serif tracking-tighter leading-none group-hover:italic transition-all duration-700">
                         {item.value}
                      </h3>
                   </div>
                </div>

                <div className="pt-10 border-t border-stone-100">
                   <p className="text-stone-500 text-[11px] leading-relaxed uppercase tracking-widest font-medium">
                      {item.desc}
                   </p>
                </div>
             </motion.div>
           ))}
        </div>

      </div>

      {/* 3. FOOTER STAMP: FIXED ARROW ERROR */}
      <div className="max-w-[1800px] mx-auto mt-20 flex flex-wrap justify-between items-center opacity-30 gap-8">
         <div className="flex gap-8">
            <p className="font-mono text-[8px] uppercase tracking-widest">Auth_Token: 1.2921.S</p>
            <p className="font-mono text-[8px] uppercase tracking-widest">Integrity: Verified</p>
         </div>
         {/* Fixed text string and arrow below */}
         <p className="font-mono text-[8px] uppercase tracking-widest italic">
            {"Data -> Decisions -> Growth"}
         </p>
      </div>

    </section>
  );
};

export default MetricHorizon;