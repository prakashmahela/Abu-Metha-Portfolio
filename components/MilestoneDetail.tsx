
import React, { useEffect } from 'react';
import { EXPERIENCES } from '../constants';
import AIChat from './AIChat';

interface MilestoneDetailProps {
  id: string;
  onBack: () => void;
}

const MilestoneDetail: React.FC<MilestoneDetailProps> = ({ id, onBack }) => {
  const milestone = EXPERIENCES.find(e => e.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!milestone) return null;

  return (
    <div className="min-h-screen pt-24 md:pt-32 bg-[#020617] pb-20">
      <div className="max-w-5xl mx-auto px-5 md:px-6">
        {/* Back Navigation */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-3 text-slate-500 hover:text-white transition-colors mb-12 uppercase text-[10px] font-black tracking-widest"
        >
          <svg className="w-5 h-5 transform group-hover:-translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back to Profile
        </button>

        {/* Header Section */}
        <div className="space-y-6 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex items-center gap-4">
            <div className="px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em]">
              {milestone.period}
            </div>
            <div className="text-slate-600 font-black text-xs uppercase tracking-widest">
              {milestone.organization}
            </div>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.1] tracking-tighter py-2">
            {milestone.title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed max-w-3xl">
            {milestone.detailedContent?.overview || milestone.description}
          </p>
        </div>

        {/* Hero Image / Content Section */}
        {milestone.detailedContent?.image && (
          <div className="relative aspect-[21/9] rounded-[3rem] overflow-hidden border border-white/5 mb-20 group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10"></div>
            <img 
              src={milestone.detailedContent.image} 
              alt={milestone.title}
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
            />
          </div>
        )}

        {/* Detailed Insights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-white text-3xl font-black mb-8 flex items-center gap-4 tracking-tight">
                <span className="w-8 h-[2px] bg-cyan-500"></span>
                Key Achievements
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {milestone.detailedContent?.keyAchievements.map((ach, idx) => (
                  <div key={idx} className="p-8 bg-white/5 border border-white/5 rounded-[2rem] hover:bg-white/10 transition-all group">
                    <div className="flex gap-6 items-start">
                      <span className="text-cyan-500 font-black text-xl opacity-40 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
                      <p className="text-slate-300 text-lg leading-relaxed">{ach}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-white text-xl font-black mb-6 uppercase tracking-widest flex items-center gap-3">
                <span className="w-4 h-4 rounded-full bg-cyan-500"></span>
                Strategic Impact
              </h2>
              <div className="p-8 bg-cyan-500/5 border border-cyan-500/10 rounded-[2.5rem] relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 text-cyan-500/20">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                </div>
                <p className="text-slate-200 text-lg font-medium leading-relaxed italic relative z-10">
                  "{milestone.detailedContent?.impact}"
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-white text-xl font-black mb-6 uppercase tracking-widest">Competencies</h2>
              <div className="flex flex-wrap gap-2">
                {milestone.tags.map(tag => (
                  <span key={tag} className="px-5 py-2 bg-slate-900 border border-white/10 text-slate-400 rounded-xl text-[10px] font-black uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tailored AI Chat */}
      <AIChat 
        title={`Inquire about ${milestone.organization}`}
        initialMessage={`Welcome! I can provide specific insights into Abu Metha's tenure as ${milestone.title} at ${milestone.organization}. What details regarding this milestone can I share with you today?`}
      />
    </div>
  );
};

export default MilestoneDetail;
