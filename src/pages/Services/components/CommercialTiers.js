import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Terminal, 
  Box, 
  Globe 
} from "lucide-react";
import TierProtocolModal from "./TierProtocolModal";

// FULL TECHNICAL DATA CONSTANT
const tiers = [
  {
    id: "TIER_01",
    label: "Passive / Digital",
    title: "The Shop",
    price: "$19 — $49",
    icon: Box,
    focus: "Self-Service Intelligence",
    detailedBrief: "Immediate analytical leverage via proprietary spreadsheet frameworks.",
    detailedPara: "Our entry-level tier is designed to democratize high-end logic. We have extracted the core logic used in our enterprise audits and ported it into portable Excel/Google Sheets environments for instant deployment.",
    quadrants: [
      { 
        title: "Logic Portability", 
        tech: "VBA / Apps Script",
        desc: "Built with non-breaking formulas that mimic Python-based protocols.",
        deepBrief: {
          objective: "To provide a scalable logic foundation that remains valid as your database grows.",
          points: [
            "Recursive logic mapping to prevent circular reference errors.",
            "Cross-platform compatibility between Google Sheets and Excel.",
            "Pre-built API hooks for future transition into Python/SQL cloud infra."
          ],
          output: "Architecture-agnostic logic layer."
        }
      },
      { 
        title: "KPI Standardization", 
        tech: "Metadata Standard",
        desc: "Establishing a clinical baseline for ROAS and LTV tracking.",
        deepBrief: {
          objective: "To eliminate reporting fragmentation across all sales channels.",
          points: [
            "Harmonization of fragmented UTM parameters into a unified view.",
            "Standardization of LTV calculation windows (30, 60, 90-day cohorts).",
            "Automatic outlier detection for unverified referral traffic."
          ],
          output: "Consolidated Source of Truth."
        }
      },
      { 
        title: "Data Sanitization", 
        tech: "Error-Logic",
        desc: "Templates that automatically flag outlier data and entry errors.",
        deepBrief: {
          objective: "Ensuring data integrity at the point of entry to prevent 'Garbage In' scenarios.",
          points: [
            "Statistical outlier flagging via Z-Score calculations.",
            "Conditional formatting triggers for inconsistent metadata.",
            "Validation rules designed to mirror SQL database constraints."
          ],
          output: "Audit-Ready Raw Datasets."
        }
      },
      { 
        title: "Instant Access", 
        tech: "AWS S3",
        desc: "Delivered via secure encrypted links immediately upon acquisition.",
        deepBrief: {
          objective: "Immediate deployment of analytical infrastructure.",
          points: [
            "Encrypted S3 bucket delivery with one-time access tokens.",
            "Included video-walkthrough guide for technical setup.",
            "Access to the 2024 Metadata Standard Updates library."
          ],
          output: "Zero-Latency Deployment."
        }
      }
    ],
    items: ["Sales Matrix", "ROI Radar", "Inventory Sheet"]
  },
  {
    id: "TIER_02",
    label: "Standard / Analytical",
    title: "Project Base",
    price: "$75 — $300",
    icon: Zap,
    focus: "Specific Problem Solving",
    detailedBrief: "Targeted technical interventions to resolve localized commercial gaps.",
    detailedPara: "Tier 02 is a clinical audit of your existing infrastructure. We eliminate 'Platform Hallucinations'—the distance between what your dashboard says and what your bank account reflects.",
    quadrants: [
      { 
        title: "GA4 Integrity Audit", 
        tech: "GTM / BigQuery",
        desc: "A 50-point technical verification of your tracking tags and triggers.",
        deepBrief: {
          objective: "To identify and eliminate tracking leaks causing conversion discrepancies.",
          points: [
            "Audit of GTM Server-Side tagging to bypass cookie restrictions.",
            "De-duplication of transaction IDs to prevent inflated revenue.",
            "Verification of BigQuery raw event exports for historical accuracy."
          ],
          output: "100% Verified Event Stream."
        }
      },
      { 
        title: "Attribution Cleanup", 
        tech: "Linear & Position Models",
        desc: "Mapping the non-linear path of your customers across all platforms.",
        deepBrief: {
          objective: "To move beyond 'Last Click' bias and understand top-of-funnel value.",
          points: [
            "Cross-device path mapping to link mobile to desktop conversions.",
            "Weighting touchpoints based on time-decay and position logic.",
            "Identification of assisted conversion value for organic search."
          ],
          output: "Clinical Attribution Roadmap."
        }
      },
      { 
        title: "Dashboard Build", 
        tech: "SQL / API Mapping",
        desc: "Building a custom Power BI 'War Room' for fragmented data.",
        deepBrief: {
          objective: "Consolidating 5+ fragmented silos into a single executive narrative.",
          points: [
            "Custom SQL views to join Shopify, Meta, and Google Ads layers.",
            "UI/UX design of dashboards to highlight ROAS leakage instantly.",
            "Automated daily API refreshes ensuring real-time commercial pulse."
          ],
          output: "Automated Executive War-Room."
        }
      },
      { 
        title: "Waste Recovery", 
        tech: "Statistical P-Value",
        desc: "Isolating high-CPA traffic segments to reclaim marketing budget.",
        deepBrief: {
          objective: "Stop the financial bleeding on ad-campaigns that are statistically unproven.",
          points: [
            "Confidence interval testing on creative and audience segments.",
            "Identification of 'Negative ROAS' keywords for exclusion.",
            "Scaling budget only into channels with proven significance."
          ],
          output: "Reclaimed Profit Margin."
        }
      }
    ],
    items: ["GA4 Clinical Audits", "SEO Intelligence", "KPI Dashboard Builds"]
  },
  {
    id: "TIER_03",
    label: "Strategic / Predictive",
    title: "Intelligence",
    price: "$350 — $1000+",
    icon: ShieldCheck,
    focus: "Long-term Partnership",
    detailedBrief: "High-stakes customer intelligence and predictive modeling.",
    detailedPara: "The flagship partnership tier. We deploy advanced machine learning models directly into your database. We don't just look at history; we forecast the future with clinical accuracy.",
    quadrants: [
      { 
        title: "Predictive Churn", 
        tech: "Python / ML",
        desc: "Utilizing Scikit-learn to identify 'At-Risk' segments before they quit.",
        deepBrief: {
          objective: "To intervene with high-value customers before they abandon the brand.",
          points: [
            "Training Random Forest models on historical behavioral signals.",
            "Generating individual 'Churn Probability' scores for your database.",
            "Automation hooks for triggered re-engagement email flows."
          ],
          output: "Churn Risk HUD / Alert System."
        }
      },
      { 
        title: "RFM Segmentation", 
        tech: "K-Means Clustering",
        desc: "Clustering your database to isolate your 'Whale' customers.",
        deepBrief: {
          objective: "To identify the 20% of customers driving 80% of growth.",
          points: [
            "Recency, Frequency, and Monetary (RFM) scoring of every unique ID.",
            "Cluster analysis to define 'Champions' and 'Hibernating' segments.",
            "Tailored strategy for LTV expansion within each cohort."
          ],
          output: "Behavioral Customer Database."
        }
      },
      { 
        title: "Decision Retainer", 
        tech: "Executive Briefings",
        desc: "Weekly video walkthroughs explaining the 'Why' behind the numbers.",
        deepBrief: {
          objective: "Providing absolute peace of mind through recurring clinical oversight.",
          points: [
            "Personalized video walkthrough of the week's performance data.",
            "Direct access to the Lead Analyst for strategic pivots.",
            "Continuous maintenance of the technical data stack."
          ],
          output: "Long-Term Strategic Stability."
        }
      },
      { 
        title: "LTV Forecasting", 
        tech: "Predictive Regressions",
        desc: "Clinical 12-month revenue forecast based on historical behavior.",
        deepBrief: {
          objective: "Predicting future cash flow based on existing value curves.",
          points: [
            "Cohort-based LTV decay modeling over a 12-month window.",
            "Sensitivity analysis of acquisition costs vs. future revenue.",
            "Funder-ready revenue projections for next-stage scaling."
          ],
          output: "12-Month Commercial Forecast."
        }
      }
    ],
    items: ["Churn Engine", "RFM Clusters", "LTV Models"]
  }
];

const CommercialTiers = () => {
  const [selectedTier, setSelectedTier] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (tier) => {
    setSelectedTier(tier);
    setIsModalOpen(true);
  };

  return (
    <section className="relative w-full bg-[#050505] py-20 md:py-40 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-white/5">
      <TierProtocolModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} data={selectedTier} />

      {/* 1. BACKGROUND DECORATION */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '120px 120px' }} />

      <div className="max-w-[1700px] mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="grid lg:grid-cols-12 gap-10 mb-16 md:mb-32 items-end">
          <div className="lg:col-span-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="flex items-center gap-4 mb-8">
              <Terminal size={16} className="text-stone-600" />
              <span className="font-mono text-[9px] text-stone-500 tracking-[0.5em] uppercase font-bold">Protocol_04 // Commercial_Tiers</span>
            </motion.div>
            <h2 className="text-white text-4xl md:text-8xl lg:text-9xl font-serif leading-[0.9] tracking-tighter">
                The Value <br /><span className="italic text-stone-600 font-light">Ladder.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
             <p className="text-stone-500 text-sm md:text-base leading-relaxed font-light italic">"Enterprise-grade analytics made accessible to organizations of all sizes and budgets."</p>
          </div>
        </div>

        {/* THE MONOLITH GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 shadow-2xl">
           {tiers.map((tier, idx) => (
             <motion.div
               key={tier.id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: idx * 0.1 }}
               className="bg-[#050505] p-8 md:p-14 flex flex-col justify-between group hover:bg-[#0A0A0A] transition-all duration-700 min-h-[650px] lg:min-h-[700px] relative overflow-hidden"
             >
                {/* INTERACTIVE CLICKABLE AREA (Opens Modal) */}
                <div onClick={() => handleOpenModal(tier)} className="cursor-pointer">
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] text-[15vw] font-serif font-black italic text-white">{idx + 1}</div>
                   <div className="relative z-10">
                      <div className="flex justify-between items-start mb-12">
                         <div className="p-3 bg-stone-900 border border-white/5 rounded-sm text-stone-400 group-hover:text-[#3AB5D8] transition-colors">
                           <tier.icon size={20} />
                         </div>
                         <span className="font-mono text-[9px] text-stone-600 uppercase tracking-widest italic hover:text-[#3AB5D8]">Inspect Manifest_</span>
                      </div>

                      <div className="mb-10">
                         <p className="text-stone-500 font-mono text-[10px] uppercase tracking-widest mb-2 italic">{tier.label}</p>
                         <h3 className="text-white text-3xl md:text-5xl font-serif mb-4 tracking-tight">{tier.title}</h3>
                         <p className="text-[#3AB5D8] text-xs uppercase tracking-[0.2em] font-bold">{tier.focus}</p>
                      </div>

                      <div className="mb-12">
                         <p className="font-mono text-[8px] uppercase tracking-widest text-stone-600 mb-2 font-bold">Baseline_Acquisition</p>
                         <p className="text-white text-4xl md:text-5xl font-serif italic">{tier.price}</p>
                      </div>

                      <div className="space-y-4">
                         <p className="font-mono text-[8px] uppercase tracking-widest text-stone-700 font-bold mb-4">Initial_Deliverables</p>
                         {tier.items.map((item, i) => (
                           <div key={i} className="flex items-center gap-4 text-stone-500 group-hover:text-stone-300 transition-colors">
                              <div className="w-1 h-1 rounded-full bg-stone-800" />
                              <span className="text-[10px] uppercase tracking-widest font-medium">{item}</span>
                           </div>
                         ))}
                      </div>
                   </div>
                </div>

                {/* DIRECT ACTION LINK (Goes to Contact) */}
                <div className="relative z-10 pt-12 mt-auto">
                   <a 
                    href="/contact" 
                    className="w-full py-5 bg-white text-black text-[10px] uppercase tracking-[0.6em] font-bold group-hover:bg-[#3AB5D8] group-hover:text-white transition-all shadow-xl flex items-center justify-center gap-4 group/btn"
                   >
                      Trace Protocol <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                   </a>
                </div>
             </motion.div>
           ))}
        </div>

        {/* NGO SPECIALISM CALLOUT */}
        <div className="mt-20 p-8 md:p-12 bg-white/[0.02] border border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-6 md:gap-8">
              <div className="p-4 bg-stone-900 border border-white/10 rounded-full text-stone-500">
                 <Globe size={24} strokeWidth={1.2} />
              </div>
              <div>
                 <h4 className="text-white text-xl font-serif italic mb-1">Mission-Driven Pricing</h4>
                 <p className="text-stone-500 text-[10px] uppercase tracking-widest leading-loose">Specialized sliding-scale tiers for Grassroots and Established NGOs.</p>
              </div>
           </div>
           <button className="px-10 py-5 border border-white/10 text-white text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-white hover:text-black transition-all">
              View Ethical Tiers
           </button>
        </div>
      </div>
    </section>
  );
};

export default CommercialTiers;