
import React, { useEffect } from 'react';
import { DETAILED_EXPERTISE } from '../constants';
import AIChat from './AIChat';

const ExpertiseDetail: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToChat = () => {
    const element = document.getElementById('ai-chat');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pt-24 md:pt-32 bg-[#020617] overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-6 relative">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[120%] h-[600px] bg-cyan-500/5 blur-[120px] rounded-full -z-10 opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-[80%] h-[400px] bg-indigo-500/5 blur-[100px] rounded-full -z-10 opacity-20"></div>

        {/* Header Section */}
        <div className="space-y-4 md:space-y-6 mb-16 md:mb-24 text-center">
          <div className="inline-block px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
            Professional Domain
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
            {DETAILED_EXPERTISE.title}
          </h1>
          <p className="text-lg md:text-2xl text-slate-400 font-medium max-w-3xl mx-auto leading-relaxed">
            {DETAILED_EXPERTISE.subtitle}
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pb-20 items-stretch">
          {DETAILED_EXPERTISE.areas.map((area, idx) => (
            <div 
              key={idx} 
              className="group relative p-8 md:p-12 bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-[3rem] transition-all duration-700 hover:bg-slate-900/70 hover:border-cyan-500/50 hover:-translate-y-3 overflow-hidden flex flex-col h-full hover:shadow-[0_30px_60px_-15px_rgba(6,182,212,0.2)]"
            >
              {/* Sweep Shine Effect */}
              <div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-[shimmer_2s_infinite] pointer-events-none"></div>

              <div className="relative z-10 flex flex-col h-full">
                {/* Logo/Icon Container */}
                <div className="w-16 h-16 bg-slate-800 border border-slate-700/50 rounded-2xl flex items-center justify-center text-3xl shadow-xl group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-cyan-500/20 transition-all duration-700 mb-8">
                  {area.icon}
                </div>
                
                {/* Heading */}
                <h3 className="text-2xl md:text-4xl font-black text-white group-hover:text-cyan-400 transition-colors mb-4 tracking-tight">
                  {area.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-400 leading-relaxed text-base md:text-lg mb-8 flex-grow group-hover:text-slate-200 transition-colors">
                  {area.description}
                </p>

                {/* Tags Section */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {area.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="px-5 py-2.5 bg-slate-950/80 border border-slate-800/80 rounded-xl text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-500 hover:text-cyan-400 hover:border-cyan-500/50 transition-all cursor-default shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expertise Stats */}
        <div className="mt-4 p-8 md:p-16 bg-gradient-to-br from-slate-900/80 to-slate-950/80 border border-slate-800/50 rounded-[3rem] backdrop-blur-md relative mb-12 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-[3rem] blur opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 text-center items-center">
            <div className="space-y-2">
              <h4 className="text-4xl md:text-7xl font-black text-white group-hover:text-cyan-400 transition-colors duration-700">20+</h4>
              <p className="text-slate-500 text-xs md:text-sm font-bold uppercase tracking-[0.3em]">Years of Policy Experience</p>
            </div>
            <div className="space-y-4 px-4">
              <p className="text-slate-400 italic text-sm md:text-lg leading-relaxed">
                "True expertise is not just about knowledge, but about the wisdom to apply it for the common good."
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-4xl md:text-7xl font-black text-white group-hover:text-cyan-400 transition-colors duration-700">50+</h4>
              <p className="text-slate-500 text-xs md:text-sm font-bold uppercase tracking-[0.3em]">Global Collaborations</p>
            </div>
          </div>
        </div>
      </div>
      
      <AIChat 
        title="Consult the Expertise"
        initialMessage="Greetings! I'm Abu Metha's AI Consultant. I have extensive knowledge of his expertise in Cultural Diplomacy, Strategic Policy, and Sports Management. What professional domain can I clarify for you today?" 
      />
      <style>{`
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 200%; }
        }
      `}</style>
    </div>
  );
};

export default ExpertiseDetail;
