
import React, { useEffect } from 'react';
import { SKILLS } from '../constants';
import AIChat from './AIChat';

interface SkillDetailProps {
  id: string;
  onBack: () => void;
}

const SkillDetail: React.FC<SkillDetailProps> = ({ id, onBack }) => {
  const skill = SKILLS.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!skill) return null;

  return (
    <div className="min-h-screen pt-24 md:pt-32 bg-[#020617] pb-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-3 text-slate-500 hover:text-white transition-colors mb-16 uppercase text-[10px] font-black tracking-widest"
        >
          <svg className="w-5 h-5 transform group-hover:-translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back to Overview
        </button>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="inline-flex items-center gap-4">
              <div className="text-5xl">{skill.icon}</div>
              <div className="px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em]">
                {skill.category} Impact
              </div>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.1] tracking-tighter py-2">
              {skill.name}
            </h1>
            <p className="text-2xl text-slate-400 font-light leading-relaxed italic">
              "{skill.detailedContent?.overview}"
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 animate-in fade-in zoom-in duration-1000">
            {skill.detailedContent?.impactMetrics.map((metric, idx) => (
              <div key={idx} className="p-10 bg-slate-900/50 border border-white/5 rounded-[3rem] text-center hover:border-cyan-500/30 transition-all hover:-translate-y-2">
                <h4 className="text-4xl md:text-6xl font-black text-white mb-2">{metric.value}</h4>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Deep Dive Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <div className="lg:col-span-2 space-y-16">
            <div className="space-y-10">
              <h2 className="text-white text-3xl font-black flex items-center gap-4">
                <span className="w-12 h-[3px] bg-cyan-500"></span>
                Strategic Insight
              </h2>
              <div className="text-slate-400 text-lg md:text-xl leading-relaxed font-light space-y-8">
                <p className="first-letter:text-7xl first-letter:font-black first-letter:text-white first-letter:mr-3 first-letter:float-left">
                  {skill.detailedContent?.longFormInsight}
                </p>
                <p>
                  By focusing on the long-term sustainability of every initiative, Abu Metha ensures that these strategic impacts are not temporary spikes in data but permanent shifts in the societal landscape. The integration of community feedback loops ensures that these strategies remain agile and responsive to the evolving needs of the Naga people.
                </p>
              </div>
            </div>

            <div className="space-y-10">
              <h2 className="text-white text-3xl font-black flex items-center gap-4">
                <span className="w-12 h-[3px] bg-indigo-500"></span>
                Key Focus Areas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skill.detailedContent?.keyFocusAreas.map((area, idx) => (
                  <div key={idx} className="group p-8 bg-white/5 border border-white/5 rounded-[2.5rem] hover:bg-white/10 transition-all">
                    <h4 className="text-white font-black text-xl mb-3 group-hover:text-cyan-400 transition-colors">{area.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-12 lg:sticky lg:top-32">
            <div className="p-8 bg-gradient-to-br from-indigo-900/20 to-cyan-900/20 border border-white/10 rounded-[3rem] backdrop-blur-xl">
              <h4 className="text-white font-black text-xs uppercase tracking-widest mb-6">Expertise Pillar</h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-8">
                This domain is a core pillar of Abu Metha's roadmap for 2030, aiming to position Nagaland as a leader in regional excellence and modern governance.
              </p>
              <div className="flex flex-col gap-4">
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-500 w-[85%]"></div>
                </div>
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-500">
                  <span>Implementation Progress</span>
                  <span className="text-cyan-400">85%</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-white font-black text-xs uppercase tracking-widest">Connect on this Topic</h4>
              <p className="text-slate-500 text-xs">Interested in learning more about our roadmap in this specific domain? Use the AI consultant below for real-time insights.</p>
            </div>
          </aside>
        </div>
      </div>

      {/* Tailored AI Chat */}
      <AIChat 
        title={`Consulting: ${skill.name}`}
        initialMessage={`I'm here to provide deep insights into Abu Metha's strategy regarding ${skill.name}. From policy specifics to long-term impact metrics, feel free to ask anything about this domain.`}
      />
    </div>
  );
};

export default SkillDetail;
