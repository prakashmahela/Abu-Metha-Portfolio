
import React, { useEffect } from 'react';
import { DETAILED_VISION } from '../constants';
import AIChat from './AIChat';

const VisionDetail: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 md:pt-32 bg-[#020617]">
      <div className="max-w-5xl mx-auto px-5 md:px-6">
        {/* Header Section */}
        <div className="space-y-4 md:space-y-6 mb-12 md:mb-20 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-block px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
            Detailed Roadmap
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
            {DETAILED_VISION.title}
          </h1>
          <p className="text-lg md:text-2xl text-slate-400 font-medium max-w-3xl mx-auto">
            {DETAILED_VISION.subtitle}
          </p>
        </div>

        {/* Vision Image/Quote */}
        <div className="relative mb-12 md:mb-20 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 rounded-[3rem] blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative bg-slate-900/80 backdrop-blur-2xl border border-slate-800 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 overflow-hidden transition-all duration-700 group-hover:border-slate-700">
            <div className="absolute top-0 right-0 p-4 md:p-8 text-slate-800 pointer-events-none select-none">
              <svg className="w-24 h-24 md:w-48 md:h-48 opacity-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L14.017 3H21.017V21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H5.017C3.91243 8 3.017 7.10457 3.017 6V3L3.017 3H10.017V21H3.017Z" />
              </svg>
            </div>
            <p className="text-xl md:text-4xl text-white font-semibold leading-relaxed md:leading-snug relative z-10 italic text-center md:text-left">
              "We are not merely catching up with the world; we are preparing to lead it. Our strength lies in our identity, and our success lies in our innovation."
            </p>
            <div className="mt-8 flex flex-col md:flex-row items-center gap-4 relative z-10">
              <div className="w-14 h-14 rounded-full bg-cyan-500 overflow-hidden border-2 border-slate-800 shadow-xl group-hover:scale-110 transition-transform">
                <img src="https://picsum.photos/100/100" alt="Abu Metha" className="w-full h-full object-cover" />
              </div>
              <div className="text-center md:text-left">
                <p className="text-white font-bold text-lg">Abu Metha</p>
                <p className="text-cyan-400 text-xs md:text-sm font-bold tracking-widest uppercase">Vision Statement, 2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pb-20">
          {DETAILED_VISION.pillars.map((pillar, idx) => (
            <div key={idx} className="p-8 md:p-12 bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-[2.5rem] hover:bg-slate-900/70 hover:border-cyan-500/40 transition-all duration-500 group flex flex-col items-center md:items-start text-center md:text-left hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.15)]">
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-cyan-500/10 border border-slate-700/50">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors tracking-tight">
                {pillar.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm md:text-base group-hover:text-slate-300 transition-colors">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      <AIChat 
        title="Discuss the Vision"
        initialMessage="Namaste! As you review Abu Metha's vision for a resurgent Nagaland, I'm here to dive deeper. Ask me how we're empowering the youth, preserving our culture through modernity, or any specific pillar of the roadmap." 
      />
    </div>
  );
};

export default VisionDetail;
