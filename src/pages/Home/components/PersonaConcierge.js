import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Target, Heart, Zap, ArrowRight } from "lucide-react";

const personas = [
  {
    id: "01",
    title: "E-Commerce Founder",
    headache: "I’m spending thousands on ads but I don't know my actual profit per customer.",
    solution: "LTV & Churn Analysis",
    path: "Strategic Consulting",
    icon: <Target size={20} />,
    tag: "Scale"
  },
  {
    id: "02",
    title: "NGO Director",
    headache: "I have the impact, but I can't visualize it well enough to win the next big grant.",
    solution: "Impact Dashboards",
    path: "NGO Specialism",
    icon: <Heart size={20} />,
    tag: "Social Impact"
  },
  {
    id: "03",
    title: "Marketing Lead",
    headache: "I have data everywhere, but it takes me 3 days to make one simple report.",
    solution: "KPI Automation",
    path: "Decision Systems",
    icon: <Zap size={20} />,
    tag: "Efficiency"
  },
  {
    id: "04",
    title: "The Solopreneur",
    headache: "I know I should track my data, but I can't afford a $500 audit yet.",
    solution: "Self-Service Trackers",
    path: "The Digital Shop",
    icon: <Search size={20} />,
    tag: "Growth"
  }
];

const PersonaConcierge = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full bg-[#FCFCFB] py-24 md:py-40 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        
        {/* TOP BOX: THE QUESTION */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-[1px] bg-[#3ab5d8]"></span>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#3ab5d8] font-bold">Protocol 01 // Identification</p>
            </motion.div>
            <h2 className="text-[#1A1A1A] text-4xl md:text-6xl font-serif leading-tight">
              Where is the <span className="italic text-stone-400">complexity</span> <br /> 
              stalling your progress?
            </h2>
          </div>
          <p className="text-stone-500 font-mono text-[10px] uppercase tracking-widest leading-loose max-w-[240px]">
            [ Select your profile to reveal the strategic blueprint ]
          </p>
        </div>

        {/* MAIN INTERACTIVE AREA */}
        <div className="grid lg:grid-cols-12 border-t border-stone-200">
          
          {/* LEFT: PERSONA LIST */}
          <div className="lg:col-span-5 border-r border-stone-200">
            {personas.map((p, idx) => (
              <button
                key={p.id}
                onMouseEnter={() => setActiveTab(idx)}
                className={`w-full flex items-center justify-between p-8 md:p-12 border-b border-stone-200 transition-all duration-500 group relative overflow-hidden ${
                  activeTab === idx ? "bg-white" : "bg-transparent hover:bg-stone-50"
                }`}
              >
                {/* Active Indicator Bar */}
                {activeTab === idx && (
                  <motion.div layoutId="activeBar" className="absolute left-0 top-0 bottom-0 w-1 bg-[#3ab5d8]" />
                )}
                
                <div className="flex items-center gap-8">
                  <span className={`font-mono text-xs transition-colors duration-500 ${activeTab === idx ? "text-[#3ab5d8]" : "text-stone-300"}`}>
                    {p.id}
                  </span>
                  <h3 className={`text-xl md:text-2xl font-serif transition-all duration-500 ${activeTab === idx ? "translate-x-2 text-[#111]" : "text-stone-400"}`}>
                    {p.title}
                  </h3>
                </div>
                
                <div className={`transition-all duration-500 ${activeTab === idx ? "opacity-100 rotate-0" : "opacity-0 -rotate-45"}`}>
                  <ArrowRight size={20} className="text-[#3ab5d8]" />
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT: DYNAMIC SOLUTION PANEL */}
          <div className="lg:col-span-7 bg-white p-10 md:p-20 flex flex-col justify-between min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="space-y-12"
              >
                <div>
                  <span className="px-4 py-2 bg-stone-100 rounded-full text-[9px] uppercase tracking-widest font-bold text-stone-500">
                    The Headache
                  </span>
                  <p className="mt-8 text-2xl md:text-4xl font-serif text-[#111] leading-snug italic">
                    "{personas[activeTab].headache}"
                  </p>
                </div>

                <div className="flex flex-col md:flex-row gap-12 pt-12 border-t border-stone-100">
                  <div className="flex-1">
                    <p className="text-[9px] uppercase tracking-widest font-bold text-stone-400 mb-4">The "Hero" Solution</p>
                    <div className="flex items-center gap-4 text-[#111]">
                      <div className="p-3 bg-[#3ab5d8]/10 text-[#3ab5d8] rounded-sm">
                        {personas[activeTab].icon}
                      </div>
                      <h4 className="text-xl font-serif">{personas[activeTab].solution}</h4>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-[9px] uppercase tracking-widest font-bold text-stone-400 mb-4">Deployment Path</p>
                    <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#111]">{personas[activeTab].path}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-12 flex justify-end"
            >
              <button className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-bold text-[#3ab5d8]">
                Explore this path
                <div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-[#3ab5d8] group-hover:border-[#3ab5d8] group-hover:text-white transition-all">
                  <ArrowRight size={16} />
                </div>
              </button>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PersonaConcierge;