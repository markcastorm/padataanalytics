import { Heart, Globe, Building2 } from "lucide-react";

export const impactTiers = [
  {
    id: "01",
    title: "Pro Bono Support",
    phase: "Grassroots_Initiative",
    slug: "grassroots",
    rate: "$0.00",
    icon: Heart,
    missionStatement: "To establish technical legitimacy for emerging missions that possess high social potential but lack the 'Evidence Proof' required for international funding.",
    // THE "SATISFYING" DETAIL
    modules: [
      {
        title: "Impact Logic Model",
        label: "Strategic_Foundations",
        short: "Establishing the 'Theory of Change'.",
        detail: "We audit your qualitative field notes and mission goals to build a mathematical Logic Model. This translates 'doing good' into 'proving impact'.",
        tech: "Python / Logic Mapping",
        output: "Standardized KPI Framework"
      },
      {
        title: "Fieldwork Data Cleaning",
        label: "Technical_Extraction",
        short: "Turning messy logs into clean datasets.",
        detail: "Emerging NGOs often have fragmented data in WhatsApp, paper, or basic Excel. We use Python scripts to clean and unify these logs into an audit-ready format.",
        tech: "Pandas / SQL / ETL",
        output: "Unified Impact Database"
      },
      {
        title: "Donor Readiness Deck",
        label: "Funder_Alignment",
        short: "Preparing for the first big grant.",
        detail: "We build a technical 'Evidence Portfolio' that shows regional donors exactly how their money will be tracked and validated from day one.",
        tech: "Power BI / Narrative Design",
        output: "Technical Fundraising Brief"
      }
    ],
    compliance: "Local Regional Grant Standards",
    gallery: ["https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80", "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80"]
  },
  {
    id: "02",
    title: "Nonprofit Rate",
    phase: "Established_Mission",
    slug: "mid-sized",
    rate: "$100 — $200",
    icon: Globe,
    missionStatement: "Eliminating the 'Reporting Gap' for established NGOs to ensure long-term grant security and multi-year extensions.",
    modules: [
      {
        title: "M&E Digitization",
        label: "Operational_Scale",
        short: "Automating the field-to-boardroom pipeline.",
        detail: "We replace manual data entry with automated API collectors. Field staff enter data once; it updates your global donor dashboard instantly.",
        tech: "Custom API / SQL / Power BI",
        output: "Live Impact Portal"
      },
      {
        title: "USAID/EU Compliance Audit",
        label: "Governance_Rigor",
        short: "Aligning with international funder standards.",
        detail: "Ensuring your data structures meet the specific transparency and P-value requirements of major international donors like USAID, UN, and EU funds.",
        tech: "Statistical Verification",
        output: "Audit-Ready Transparency Log"
      }
    ],
    compliance: "International Donor Standards (USAID/UN/EU)",
    gallery: ["https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80", "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80"]
  },
  {
    id: "03",
    title: "Corporate Standard",
    phase: "Humanitarian_System",
    slug: "corporate",
    rate: "Quote_On_Audit",
    icon: Building2,
    missionStatement: "Enterprise-grade data orchestration for global missions requiring absolute traceability and ISO-grade integrity.",
    modules: [
      {
        title: "Global Data Orchestration",
        label: "Systemic_Design",
        short: "Unifying multi-country humanitarian streams.",
        detail: "Centralizing fragmented data from 5+ countries into a single clinical source of truth for public accountability and internal scaling.",
        tech: "AWS / Full-Stack Data Infra",
        output: "Global Intelligence Hub"
      },
      {
        title: "Predictive scaling",
        label: "Intelligence_Layer",
        short: "Forecasting future community needs.",
        detail: "Using machine learning to predict resource shortages or community needs based on historical trend lines and external variables.",
        tech: "Scikit-Learn / ML Models",
        output: "Strategic Scaling Blueprint"
      }
    ],
    compliance: "Global ISO-S / High-Stakes Accountability",
    gallery: ["https://images.unsplash.com/photo-1507537362145-5f031c620ddd?q=80", "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80"]
  }
];