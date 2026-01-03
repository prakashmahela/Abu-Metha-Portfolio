
import React from 'react';
import { EXPERIENCES } from '../constants';

interface ExperienceProps {
  onNavigateMilestone?: (id: string) => void;
}

const Experience: React.FC<ExperienceProps> = ({ onNavigateMilestone }) => {
  return (
    <section id="experience" className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 space-y-4">
          <div className="inline-block px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-500 text-[10px] font-black uppercase tracking-[0.3em]">Chronicle</div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">Career Milestones</h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg font-light leading-relaxed">The strategic evolution of a visionary leader.</p>
        </div>

        <div className="space-y-6 relative">
          {/* Animated Glowing Path */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5 hidden md:block -translate-x-1/2 overflow-hidden">
             <div className="w-full h-full bg-gradient-to-b from-cyan-500/0 via-cyan-500/40 to-cyan-500/0 animate-scan-y"></div>
          </div>

          {EXPERIENCES.map((exp, index) => (
            <div key={exp.id} className={`flex flex-col md:flex-row items-center gap-4 md:gap-3 group ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Card Container Column */}
              <div className="flex-1 w-full flex justify-center md:justify-end group-even:md:justify-start">
                <div 
                  className="relative w-full max-w-[440px] cursor-pointer"
                  onClick={() => onNavigateMilestone?.(exp.id)}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
                  
                  <div className="relative p-8 md:p-10 bg-black/50 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] transition-all duration-700 group-hover:bg-black/70 group-hover:border-white/20 group-hover:-translate-y-2 shadow-2xl h-full flex flex-col justify-center min-h-[320px]">
                    <span className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block opacity-60 group-hover:opacity-100 transition-opacity">{exp.period}</span>
                    <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-cyan-300 transition-colors mb-2 tracking-tight leading-[1.1]">
                      {exp.title}
                    </h3>
                    <p className="text-slate-400 text-sm font-bold mb-4">{exp.organization}</p>
                    <p className="text-slate-500 leading-relaxed text-sm md:text-base font-light group-hover:text-slate-300 transition-colors mb-6">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="px-3 py-1.5 bg-white/5 border border-white/5 text-slate-500 rounded-xl text-[8px] md:text-[9px] font-black uppercase tracking-widest group-hover:text-white transition-all cursor-default backdrop-blur-sm">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Central Marker Column */}
              <div className="relative z-10 hidden md:flex items-center justify-center">
                <div className="w-14 h-14 bg-[#000105] border border-white/10 rounded-2xl flex items-center justify-center text-white transition-all duration-700 transform rotate-12 group-hover:rotate-0 group-hover:scale-110 group-hover:border-cyan-500/50 shadow-[0_0_30px_rgba(0,0,0,1)] ring-4 ring-[#000105]">
                  <span className="group-hover:text-cyan-400 transition-colors text-base font-black">{index + 1}</span>
                </div>
              </div>

              <div className="flex-1 hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scan-y {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scan-y {
          animation: scan-y 12s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default Experience;
