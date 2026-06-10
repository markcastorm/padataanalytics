import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Database, ArrowRight, ArrowLeft, Maximize2 } from "lucide-react";
import { successProjects } from "./data/successData";
import SuccessDossierModal from "./SuccessDossierModal";

const SuccessGallery = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // MINIMAL CHANGE: Projects per page changed to 3 for a better grid-fit
  const projectsPerPage = 3;
  const totalPages = Math.ceil(successProjects.length / projectsPerPage);
  
  const startIndex = currentPage * projectsPerPage;
  const currentProjects = successProjects.slice(startIndex, startIndex + projectsPerPage);

  const nextSegment = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevSegment = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  return (
    <section className="relative w-full bg-[#050505] py-24 md:py-40 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-white/5">
      <SuccessDossierModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        project={selectedProject} 
      />

      <div className="max-w-[1800px] mx-auto">
        
        {/* TOP HEADER & HUD CONTROLS */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-10">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
               <Terminal size={14} className="text-[#3AB5D8]" />
               <p className="font-mono text-[8px] text-stone-500 uppercase tracking-[0.5em] font-bold">
                 Registry_v2.1 // Condensed_View
               </p>
            </div>
            <h2 className="text-white text-4xl md:text-6xl font-serif leading-none tracking-tighter">
              The Evidence <br /> <span className="italic text-stone-600 font-light text-3xl md:text-5xl">Registry.</span>
            </h2>
          </div>

          {/* TECHNICAL NAVIGATION */}
          <div className="flex items-center gap-6 bg-stone-900/10 p-3 border border-white/5">
             <div className="space-y-1">
                <p className="font-mono text-[7px] text-stone-600 uppercase font-bold tracking-widest">Active_Segment</p>
                <p className="text-white font-mono text-[10px]">0{currentPage + 1} / 0{totalPages}</p>
             </div>
             <div className="h-6 w-[1px] bg-white/10" />
             <div className="flex gap-2">
                <button onClick={prevSegment} className="p-2 border border-white/5 text-stone-600 hover:text-white transition-all"><ArrowLeft size={16} /></button>
                <button onClick={nextSegment} className="group flex items-center gap-4 px-5 py-2 bg-white text-black text-[9px] uppercase tracking-[0.2em] font-bold hover:bg-[#3AB5D8] hover:text-white transition-all">
                   Next <ArrowRight size={12} />
                </button>
             </div>
          </div>
        </div>

        {/* 2. THE 3-COLUMN COMPACT GRID */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              // MINIMAL CHANGE: Switched to 3 columns
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {currentProjects.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => { setSelectedProject(item); setIsModalOpen(true); }}
                  className="group relative bg-[#0A0A0A] border border-white/5 flex flex-col overflow-hidden cursor-pointer hover:border-white/20 transition-all duration-500"
                >
                   {/* Wide Aspect Ratio Frame */}
                   <div className="relative aspect-[3/2] overflow-hidden grayscale brightness-50 group-hover:brightness-100 transition-all duration-700">
                      <img src={item.img} className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110" alt="Evidence" />
                      
                      <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-black/90 backdrop-blur-sm">
                         <p className="text-white text-[11px] font-light leading-relaxed">
                            {item.outcome.split("**").map((part, i) => i % 2 === 1 ? <span key={i} className="text-[#3AB5D8] font-bold">{part}</span> : part)}
                         </p>
                         <div className="mt-4 flex items-center gap-2 text-[#3AB5D8] text-[8px] uppercase font-bold tracking-[0.2em]">
                            Full Audit <Maximize2 size={10} />
                         </div>
                      </div>
                   </div>

                   {/* Tightened Data Brief */}
                   <div className="p-6 flex flex-col justify-between flex-grow">
                      <div className="flex justify-between items-start">
                         <div className="max-w-[80%]">
                            <p className="font-mono text-[7px] text-stone-600 uppercase tracking-widest mb-1">{item.cat}</p>
                            <h3 className="text-white text-lg md:text-xl font-serif italic leading-tight">{item.title}</h3>
                         </div>
                         <span className="font-mono text-[8px] text-stone-800">#0{item.id}</span>
                      </div>
                      
                      <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-end">
                         <div>
                            <p className="font-mono text-[7px] text-stone-600 uppercase font-bold">Key_Metric</p>
                            <p className="text-[#3AB5D8] text-base font-serif italic">{item.metric}</p>
                         </div>
                         <div className="p-1.5 border border-white/5 rounded-full text-stone-800 group-hover:text-stone-500 transition-colors">
                            <Database size={12} />
                         </div>
                      </div>
                   </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default SuccessGallery;