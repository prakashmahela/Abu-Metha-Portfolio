
import React from 'react';

interface HeroProps {
  onExplore?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <section className="relative min-h-screen flex items-start justify-center pt-48 md:pt-64 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <div className="inline-block px-5 py-2 bg-white/5 border border-white/10 rounded-full text-cyan-400 text-[10px] font-black tracking-[0.4em] uppercase backdrop-blur-sm">
            Leader • Strategist • Visionary
          </div>
          
          <div className="space-y-4">
            <h1 className="text-7xl md:text-9xl font-black text-white leading-[1.1] tracking-tighter cursor-default transition-all group/h1 py-2">
              Shaping <br/>
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 to-indigo-500 animate-gradient-slow pb-6 pt-2">
                Tomorrow
              </span>
              <br/>Today.
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-slate-400 max-w-xl leading-relaxed font-light tracking-tight">
            Abu Metha: A legacy of <span className="text-white font-semibold">visionary governance</span> and cultural excellence, building a global gateway for Nagaland.
          </p>

          <div className="flex flex-wrap gap-6 pt-6">
            <button 
              onClick={onExplore}
              className="group relative px-12 py-6 bg-white text-black font-black text-xs uppercase tracking-[0.3em] rounded-full overflow-hidden transition-all duration-500 transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-transparent to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <span className="relative z-10 flex items-center gap-3">
                Explore The Roadmap
                <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>

            <button className="group relative px-12 py-6 bg-transparent border border-white/10 text-slate-400 font-black text-xs uppercase tracking-[0.3em] rounded-full transition-all duration-500 hover:border-cyan-500/50 hover:text-white overflow-hidden backdrop-blur-sm">
              <span className="relative z-10">Public Service</span>
            </button>
          </div>
        </div>
        
        <div className="flex justify-center items-center animate-in fade-in zoom-in duration-1000 delay-300">
          <div className="relative group w-full max-w-lg">
            {/* Glowing Ring */}
            <div className="absolute -inset-10 bg-gradient-to-tr from-cyan-500/10 via-white/5 to-indigo-500/10 rounded-full blur-[100px] opacity-40 group-hover:opacity-100 transition duration-1000"></div>
            
            <div className="relative aspect-[4/5] bg-black rounded-[4rem] overflow-hidden border border-white/5 shadow-[0_0_100px_-20px_rgba(0,0,0,1)] transition-all duration-1000 group-hover:border-white/20">
              <img 
                src="https://picsum.photos/1000/1250?blur=2" 
                alt="Abu Metha" 
                className="w-full h-full object-cover brightness-[0.4] group-hover:brightness-[0.8] transition-all duration-1000 scale-110 group-hover:scale-100"
              />
              <div className="absolute bottom-0 left-0 w-full p-16 bg-gradient-to-t from-black via-black/80 to-transparent">
                <p className="text-white text-6xl font-black tracking-tighter mb-4">Abu Metha</p>
                <div className="flex items-center gap-4">
                  <div className="h-[2px] w-12 bg-cyan-500"></div>
                  <p className="text-cyan-400 text-xs font-black uppercase tracking-[0.5em]">Visionary Leader</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Indicators */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 opacity-20 hover:opacity-100 transition-opacity duration-700">
        <div className="w-[1px] h-20 bg-gradient-to-b from-white/50 to-transparent"></div>
        <span className="text-[10px] font-black uppercase tracking-[1em] text-white">Scroll Down</span>
      </div>

      <style>{`
        @keyframes gradient-slow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-slow {
          background-size: 200% auto;
          animation: gradient-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
