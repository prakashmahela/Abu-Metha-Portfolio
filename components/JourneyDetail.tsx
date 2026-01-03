
import React, { useEffect } from 'react';
import { DETAILED_JOURNEY } from '../constants';
import AIChat from './AIChat';

const JourneyDetail: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToChat = () => {
    const element = document.getElementById('ai-chat');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pt-24 md:pt-32 bg-[#020617] overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 md:px-6 relative">
        {/* Background Decor */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full -z-10 opacity-30"></div>

        {/* Header Section */}
        <div className="space-y-4 md:space-y-6 mb-16 md:mb-24 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-block px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
            The Journey
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
            {DETAILED_JOURNEY.title}
          </h1>
          <p className="text-lg md:text-2xl text-slate-400 font-medium max-w-3xl mx-auto leading-relaxed">
            {DETAILED_JOURNEY.subtitle}
          </p>
        </div>

        {/* Timeline Section */}
        <div className="relative space-y-12 md:space-y-0 pb-20">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/0 via-slate-800 to-cyan-500/0 hidden md:block -translate-x-1/2"></div>

          {DETAILED_JOURNEY.milestones.map((milestone, idx) => (
            <div key={idx} className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''} animate-in fade-in slide-in-from-bottom-8 duration-700 delay-[${idx * 100}ms]`}>
              {/* Marker */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center z-20">
                <div className="w-12 h-12 bg-[#020617] border-2 border-slate-800 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 hover:border-cyan-500 group/marker">
                  <div className="w-4 h-4 bg-cyan-500 rounded-full group-hover/marker:scale-150 transition-transform"></div>
                </div>
              </div>

              {/* Card */}
              <div className="w-full md:w-[45%] group">
                <div className={`p-8 md:p-12 bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-[2.5rem] transition-all duration-700 hover:border-cyan-500/50 hover:bg-slate-900/80 hover:shadow-[0_20px_50px_-15px_rgba(6,182,212,0.2)] hover:scale-[1.02] ${idx % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`inline-block px-4 py-1 bg-slate-800/80 rounded-xl text-cyan-400 text-xs font-black mb-6 uppercase tracking-widest border border-slate-700 group-hover:border-cyan-500/30 group-hover:bg-slate-950 transition-all ${idx % 2 !== 0 ? 'md:ml-auto' : ''}`}>
                    {milestone.year}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors tracking-tight">
                    {milestone.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base group-hover:text-slate-200 transition-colors">
                    {milestone.description}
                  </p>
                  <div className={`mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-cyan-500 transition-colors ${idx % 2 !== 0 ? 'md:justify-end' : ''}`}>
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse"></span>
                    {milestone.category}
                  </div>
                </div>
              </div>

              <div className="md:w-[10%]"></div>
              <div className="hidden md:block md:w-[45%]"></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Integrated AI Chat for this page */}
      <AIChat 
        title="Discover Abu's Journey"
        initialMessage="Hello! I'm Abu Metha's AI. Since you're exploring his 'Journey' page, feel free to ask me about his transition from journalism to political advisor, or any specific milestones you've just read about." 
      />
    </div>
  );
};

export default JourneyDetail;
