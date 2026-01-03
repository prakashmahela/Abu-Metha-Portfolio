
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="grid grid-cols-2 gap-6 perspective-1000">
            <div className="space-y-6 pt-12">
              <div className="group relative h-48 bg-slate-900/30 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/5 transition-all duration-700 hover:border-cyan-500/30">
                <img 
                  src="https://picsum.photos/401/301" 
                  alt="Culture" 
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out" 
                />
              </div>

              <div className="group relative h-64 bg-slate-900/40 backdrop-blur-md rounded-[2.5rem] p-8 flex flex-col justify-end border border-white/5 shadow-2xl transition-all duration-500 hover:shadow-cyan-500/10 hover:-translate-y-2">
                <div className="relative z-10">
                  <h3 className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tighter transition-all duration-500 group-hover:text-cyan-400 origin-left">10M+</h3>
                  <p className="text-cyan-500/70 text-xs font-extrabold uppercase tracking-[0.2em] leading-tight">Youth Targeted <br/>Policy Impact</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="group relative h-72 bg-slate-900/40 backdrop-blur-md rounded-[2.5rem] p-8 flex flex-col justify-end border border-white/5 shadow-2xl transition-all duration-500 hover:shadow-indigo-500/10 hover:-translate-y-2">
                <div className="relative z-10">
                  <h3 className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tighter transition-all duration-500 group-hover:text-indigo-400 origin-left">Global</h3>
                  <p className="text-indigo-500/70 text-xs font-extrabold uppercase tracking-[0.2em] leading-tight">Cultural Diplomacy <br/>Reach</p>
                </div>
              </div>

              <div className="group relative h-48 bg-slate-900/30 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/5 transition-all duration-700 hover:border-indigo-500/30">
                <img 
                  src="https://picsum.photos/402/302" 
                  alt="Governance" 
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all duration-[2s] ease-out" 
                />
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-cyan-400 font-bold text-xs uppercase tracking-[0.4em] block">Legacy & Mission</span>
              <h2 className="text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
                A commitment to the <span className="text-cyan-400">Youth</span> and cultural excellence.
              </h2>
            </div>
            
            <p className="text-slate-400 text-xl leading-relaxed font-medium">
              Abu Metha's journey is defined by a deep-seated belief that the progress of any society lies in the potential of its youth. Through strategic governance and global cultural outreach, he has redefined the narrative of Nagaland.
            </p>

            <div className="grid grid-cols-1 gap-8">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-slate-900/60 backdrop-blur-sm border border-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                  <span className="text-3xl grayscale group-hover:grayscale-0 transition-all">🌱</span>
                </div>
                <div className="space-y-1">
                  <h4 className="text-white font-bold text-xl group-hover:text-cyan-400 transition-colors">Naga Innovation</h4>
                  <p className="text-slate-500 leading-snug">Promoting indigenous talent and modern technological adoption across the Northeast.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
