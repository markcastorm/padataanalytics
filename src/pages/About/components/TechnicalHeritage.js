import React, { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Database, Cpu, Layers, HardDrive, ShieldCheck } from "lucide-react";
import HeritageModal from "./HeritageModal"; // Ensure path is correct

const techStack = [
  { 
    category: "Languages & Libraries", 
    tools: ["Python", "SQL", "Pandas", "Scikit-Learn"], 
    icon: <Cpu size={20} />,
    brief: "The core computational engine for high-precision modeling.",
    detailedDesc: "We bypass standard UI limitations by interacting directly with raw data layers. Our Python environment is designed for heavy-duty statistical analysis, ensuring that your business decisions are backed by math, not just 'vibe.'",
    protocol: [
      { step: "01", title: "ETL Pipeline", detail: "Automated extraction and transformation of raw JSON/CSV logs into structured SQL environments." },
      { step: "02", title: "Feature Engineering", detail: "Isolating behavioral variables (RFM) to train machine learning models for churn prediction." },
      { step: "03", title: "Validation", detail: "Applying p-value tests and cross-validation to ensure 95%+ confidence in our forecasts." }
    ],
    deliverables: ["Custom Churn Prediction Scripts", "Automated Attribution Models", "Legacy Database Connectors"],
    security: "Environment: Isolated Jupyter Server // Encryption: AES-256"
  },
  { 
    category: "Data Visualization", 
    tools: ["Power BI", "Tableau", "Looker Studio"], 
    icon: <Layers size={20} />,
    brief: "Executive-level war rooms for real-time commercial clarity.",
    detailedDesc: "Standard dashboards show what happened yesterday. Our Decision Systems show you why it happened and what to do tomorrow. We consolidate fragmented reporting into a single, clinical narrative.",
    protocol: [
      { step: "01", title: "Truth Consolidation", detail: "Merging 5+ fragmented sources (Ad-spend, Warehouse, CRM) into one unified data model." },
      { step: "02", title: "Narrative Design", detail: "Applying UI/UX principles to dashboards so stakeholders can identify ROAS leakage in < 60 seconds." },
      { step: "03", title: "Automated Sync", detail: "Setting up real-time API refreshes to eliminate manual report-building labor (saving 3 days/mo)." }
    ],
    deliverables: ["Live War-Room Dashboards", "Automated KPI Briefings", "Mobile-Ready Executive Views"],
    security: "Access: Role-Based (RBAC) // Protocol: Live API Handshake"
  },
  { 
    category: "Intelligence Platforms", 
    tools: ["GA4", "HubSpot", "Meta Ads", "Google Ads"], 
    icon: <Database size={20} />,
    brief: "Platform auditing to reclaim wasted marketing spend.",
    detailedDesc: "Standard platforms often over-report success. We audit the 'Attribution Gap' to find out exactly where your ad spend is bleeding and reallocate it to high-performing segments.",
    protocol: [
      { step: "01", title: "Attribution Audit", detail: "Verifying platform 'Clicks' vs 'Warehouse Conversions' to identify over-reporting errors." },
      { step: "02", title: "Behavioral Mapping", detail: "Using GA4 BigQuery exports to track the non-linear path of high-value customers." },
      { step: "03", title: "Waste Recovery", detail: "Isolating high-CPA traffic segments and creating 'Exclusion Lists' to protect your budget." }
    ],
    deliverables: ["Attribution Gap Report", "Waste Recovery Blueprint", "Platform Integrity Audit"],
    security: "Audit Level: Full Compliance // Standard: Privacy-First Mapping"
  },
  { 
    category: "Infrastructure", 
    tools: ["GitHub", "Jupyter", "AWS", "API Connectors"], 
    icon: <HardDrive size={20} />,
    brief: "The foundation of technical stability and audit-ready data.",
    detailedDesc: "For international NGOs and growing D2C brands, data integrity is everything. We build the secure infrastructure that ensures your data is traceable, reproducible, and ready for donor audits.",
    protocol: [
      { step: "01", title: "Version Control", detail: "Using GitHub for 100% traceability of all analytical logic and modeling scripts." },
      { step: "02", title: "Scalability Setup", detail: "Building robust API orchestration that handles data growth without breaking the report logic." },
      { step: "03", title: "Audit Log", detail: "Maintaining a clinical record of data transformations for international funder compliance." }
    ],
    deliverables: ["Secure Data Infrastructure", "Compliance Documentation", "Automated API Connectors"],
    security: "Infrastructure: Secure Cloud // Redundancy: 99.9% Up-time"
  }
];

const TechnicalHeritage = () => {
  const [selectedStack, setSelectedStack] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (item, index) => {
    setSelectedStack({ ...item, index });
    setIsModalOpen(true);
  };

  return (
    <section className="relative bg-[#0D0D0D] py-32 md:py-56 px-6 md:px-12 lg:px-24 overflow-hidden">
      
      {/* 1. THE ARCHITECTURAL BACKDROP (Your Original Grid) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '120px 120px' }} />
      </div>

      <div className="max-w-[1700px] mx-auto relative z-10">
        
        {/* HEADER (Your Original Design) */}
        <div className="grid lg:grid-cols-12 gap-10 mb-32 items-end">
          <div className="lg:col-span-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="flex items-center gap-4 mb-8">
              <Terminal size={16} className="text-stone-500" />
              <span className="font-mono text-[10px] text-stone-500 tracking-[0.5em] uppercase font-bold">Protocol_03 // Technical_Heritage</span>
            </motion.div>
            <h2 className="text-white text-5xl md:text-8xl font-serif leading-none tracking-tighter">
              The Artifacts of <br />
              <span className="italic text-stone-600 font-light text-4xl md:text-7xl">Verified Intelligence.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pb-4">
             <div className="max-w-xs space-y-6">
                <p className="text-stone-500 text-xs md:text-sm uppercase tracking-widest leading-loose font-medium">
                  We maintain a full-stack technical capability spanning 11 distinct services, from localized SEO intelligence to Python-based predictive modeling.
                </p>
                <div className="h-[1px] w-20 bg-stone-800" />
             </div>
          </div>
        </div>

        {/* THE VAULT GRID (Click functionality added here) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-900 border border-stone-800">
           {techStack.map((item, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: idx * 0.1 }}
               onClick={() => handleOpenModal(item, idx)}
               className="bg-[#0D0D0D] p-10 md:p-14 flex flex-col justify-between group hover:bg-[#111] transition-all duration-700 min-h-[450px] cursor-crosshair"
             >
                <div className="relative">
                   <div className="text-stone-700 group-hover:text-[#3AB5D8] transition-colors mb-12">
                      {item.icon}
                   </div>
                   <h3 className="text-white text-xl font-serif mb-8 uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-500">{item.category}</h3>
                   
                   <ul className="space-y-4">
                      {item.tools.map(tool => (
                        <li key={tool} className="flex items-center gap-3">
                           <div className="w-1 h-1 rounded-full bg-stone-800 group-hover:bg-[#3AB5D8] transition-colors" />
                           <span className="text-stone-500 group-hover:text-stone-300 transition-colors font-mono text-[10px] uppercase tracking-widest">{tool}</span>
                        </li>
                      ))}
                   </ul>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                   <span className="font-mono text-[8px] text-[#3AB5D8] uppercase tracking-widest italic">Open_Dossier_Asset</span>
                </div>
             </motion.div>
           ))}
        </div>

        {/* FOOTER (Your Original Design) */}
        <div className="mt-32 grid lg:grid-cols-12 gap-10 items-center border-t border-white/5 pt-20">
           <div className="lg:col-span-4">
              <div className="flex items-center gap-6">
                 <ShieldCheck size={32} strokeWidth={1} className="text-stone-700" />
                 <div>
                    <h4 className="text-white text-2xl font-serif italic tracking-wide">Data Integrity Protocol</h4>
                    <p className="text-stone-600 font-mono text-[9px] uppercase tracking-widest mt-1">Status: AES_256 Encrypted</p>
                 </div>
              </div>
           </div>
           <div className="lg:col-span-8">
              <div className="flex flex-wrap gap-x-12 gap-y-6 lg:justify-end">
                 {["SEO Intelligence", "GA4 Audits", "Predictive Churn", "RFM Modeling", "LTV Forecasting", "KPI Dashboards", "Grant Compliance", "Impact Narratives"].map(service => (
                   <span key={service} className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-800 hover:text-stone-400 cursor-default transition-colors">{service}</span>
                 ))}
              </div>
           </div>
        </div>

      </div>

      <div className="absolute top-1/2 left-0 w-full text-center opacity-[0.02] pointer-events-none select-none">
         <h3 className="text-[25vw] font-serif font-black uppercase italic leading-none text-white">HERITAGE</h3>
      </div>

      {/* THE MODAL (Z-100) */}
      <HeritageModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        data={selectedStack} 
      />
    </section>
  );
};

export default TechnicalHeritage;