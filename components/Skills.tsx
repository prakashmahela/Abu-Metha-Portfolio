
import React from 'react';
import { SKILLS } from '../constants';

interface SkillsProps {
  onNavigateSkill?: (id: string) => void;
}

const Skills: React.FC<SkillsProps> = ({ onNavigateSkill }) => {
  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em]">Mastery</div>
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter">Strategic Impact</h2>
            <p className="text-slate-500 max-w-2xl text-xl font-light leading-relaxed">Multidisciplinary leadership bridging traditional Naga values with global 21st-century governance.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill) => (
            <div 
              key={skill.id} 
              onClick={() => onNavigateSkill?.(skill.id)}
              className="group relative p-12 bg-black/40 border border-white/5 rounded-[3.5rem] hover:bg-black/60 transition-all duration-700 overflow-hidden hover:border-white/20 hover:scale-[1.03] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 blur-[80px] rounded-full group-hover:bg-cyan-500/10 transition-all duration-1000"></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-10 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 origin-left">
                  {skill.icon}
                </div>
                <p className="text-cyan-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4 opacity-60 group-hover:opacity-100 transition-opacity">{skill.category}</p>
                <h3 className="text-3xl font-black text-white mb-8 tracking-tight group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h3>
                <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden mb-6">
                  <div className="w-0 h-full bg-gradient-to-r from-cyan-600 to-indigo-600 group-hover:w-full transition-all duration-[1.5s] ease-out"></div>
                </div>
                
                <div className="flex items-center gap-2 text-[9px] font-black text-slate-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  Read In-Depth Insight
                  <svg className="w-4 h-4 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
