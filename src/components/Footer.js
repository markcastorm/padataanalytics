import React from "react";
import { ArrowUpRight, MapPin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Custom SVG for Instagram to avoid library version errors
  const InstagramIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );

  // Custom SVG for LinkedIn to avoid library version errors
  const LinkedinIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );

  return (
    <footer className="bg-[#050505] pt-32 pb-12 px-6 md:px-12 lg:px-24 border-t border-white/5 relative overflow-hidden">
      
      {/* 1. THE BIG SIGN-OFF */}
      <div className="max-w-[1600px] mx-auto mb-32">
        <div className="grid lg:grid-cols-2 gap-20 items-end">
          <div>
            <h2 className="text-white text-5xl md:text-8xl font-serif leading-none tracking-tighter mb-10">
              Translate the <br /> 
              <span className="italic text-stone-600 font-light">Noise.</span>
            </h2>
            <a 
              href="mailto:hello@padataanalytics.com" 
              className="group flex items-center gap-6 text-stone-400 hover:text-white transition-colors duration-500"
            >
              <span className="text-xl md:text-3xl font-serif border-b border-stone-800 pb-2">
                hello@padataanalytics.com
              </span>
              <div className="w-12 h-12 rounded-full border border-stone-800 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                 <ArrowUpRight size={20} />
              </div>
            </a>
          </div>

          <div className="flex flex-col lg:items-end space-y-12">
             <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-left lg:text-right">
                <div className="space-y-4">
                   <p className="font-mono text-[9px] uppercase tracking-widest text-stone-600 font-bold">Services</p>
                   <ul className="space-y-2 text-[10px] uppercase tracking-widest text-white/60">
                      <li className="hover:text-white cursor-pointer transition-colors">Growth Intelligence</li>
                      <li className="hover:text-white cursor-pointer transition-colors">Predictive Analytics</li>
                      <li className="hover:text-white cursor-pointer transition-colors">Decision Systems</li>
                   </ul>
                </div>
                <div className="space-y-4">
                   <p className="font-mono text-[9px] uppercase tracking-widest text-stone-600 font-bold">Foundation</p>
                   <ul className="space-y-2 text-[10px] uppercase tracking-widest text-white/60">
                      <li className="hover:text-white cursor-pointer transition-colors">Our Work</li>
                      <li className="hover:text-white cursor-pointer transition-colors">NGO Impact</li>
                      <li className="hover:text-white cursor-pointer transition-colors">The Founder</li>
                   </ul>
                </div>
                <div className="space-y-4">
                   <p className="font-mono text-[9px] uppercase tracking-widest text-stone-600 font-bold">Social</p>
                   <ul className="space-y-2 text-[10px] uppercase tracking-widest text-white/60">
                      <li className="hover:text-white cursor-pointer flex items-center gap-2 justify-end">Instagram <InstagramIcon /></li>
                      <li className="hover:text-white cursor-pointer flex items-center gap-2 justify-end">LinkedIn <LinkedinIcon /></li>
                   </ul>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* 2. THE NAIROBI PRIDE BAR */}
      <div className="max-w-[1600px] mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex items-center gap-8">
           <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-stone-700 animate-pulse" />
              <p className="text-white text-sm font-serif tracking-widest uppercase">PA Analytics</p>
           </div>
           <div className="h-4 w-[1px] bg-stone-800 hidden md:block" />
           <div className="flex items-center gap-2 text-stone-500 font-mono text-[9px] uppercase tracking-widest">
              <MapPin size={10} />
              Nairobi, Kenya [Operating Globally]
           </div>
        </div>

        <div className="text-center md:text-right">
           <p className="text-stone-500 font-mono text-[8px] uppercase tracking-[0.4em] mb-2">
              Data —{">"} Decisions —{">"} Growth
           </p>
           <p className="text-stone-700 font-mono text-[8px] uppercase tracking-widest">
              © {currentYear} PA Data Analytics. All Rights Reserved.
           </p>
        </div>
      </div>

      {/* 3. BACKGROUND DECORATIVE LOGO */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-full text-center opacity-[0.02] pointer-events-none select-none">
         <h3 className="text-[25vw] font-serif font-black uppercase italic whitespace-nowrap">ANALYTICS</h3>
      </div>

    </footer>
  );
};

export default Footer;