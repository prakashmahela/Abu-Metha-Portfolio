
import React from 'react';

const Gallery: React.FC = () => {
  const row1 = [
    { id: 1, title: 'Hornbill Festival', category: 'Culture', sig: '101' },
    { id: 2, title: 'Olympic Excellence', category: 'Sports', sig: '102' },
    { id: 3, title: 'Governance Summit', category: 'Policy', sig: '103' },
    { id: 4, title: 'Youth Dialogue', category: 'Engagement', sig: '104' },
    { id: 5, title: 'Global Diplomacy', category: 'Culture', sig: '105' },
    { id: 6, title: 'Infrastructure Revitalized', category: 'Progress', sig: '106' },
  ];

  const row2 = [
    { id: 7, title: 'Grassroots Reach', category: 'Politics', sig: '107' },
    { id: 8, title: 'Music Without Borders', category: 'Arts', sig: '108' },
    { id: 9, title: 'Athletic Training', category: 'Sports', sig: '109' },
    { id: 10, title: 'Tech Innovation', category: 'Vision', sig: '110' },
    { id: 11, title: 'Legacy Building', category: 'Leadership', sig: '111' },
    { id: 12, title: 'Heritage Preservation', category: 'Culture', sig: '112' },
  ];

  return (
    <section className="py-20 md:py-24 relative overflow-hidden bg-[#000105]">
      {/* Title & Header */}
      <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-16 text-center md:text-left">
        <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-[9px] font-black uppercase tracking-[0.3em] mb-4">
          Visual Legacy
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4 leading-tight">
          Moments of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Impact</span>
        </h2>
        <p className="text-slate-500 max-w-xl text-sm md:text-base font-light leading-relaxed">
          A curated glimpse into the journey of transformation—where culture meets policy and youth meet opportunity.
        </p>
      </div>

      {/* Scrolling Containers */}
      <div className="space-y-6 md:space-y-8">
        {/* Row 1: Left to Right */}
        <div className="flex overflow-hidden group select-none">
          <div className="flex gap-4 md:gap-6 animate-scroll-left hover:[animation-play-state:paused]">
            {[...row1, ...row1].map((item, idx) => (
              <div 
                key={`${item.id}-${idx}`} 
                className="relative flex-shrink-0 w-48 h-36 md:w-[320px] md:h-[240px] group/item overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border border-white/5 bg-slate-900/50"
              >
                <img 
                  src={`https://picsum.photos/800/600?sig=${item.sig}`} 
                  alt={item.title}
                  className="w-full h-full object-cover brightness-50 group-hover/item:brightness-100 group-hover/item:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 p-4 md:p-8 flex flex-col justify-end">
                  <p className="text-cyan-400 text-[8px] font-black uppercase tracking-widest mb-1">{item.category}</p>
                  <h4 className="text-white text-sm md:text-lg font-black tracking-tight leading-tight">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="flex overflow-hidden group select-none">
          <div className="flex gap-4 md:gap-6 animate-scroll-right hover:[animation-play-state:paused]">
            {[...row2, ...row2].map((item, idx) => (
              <div 
                key={`${item.id}-${idx}`} 
                className="relative flex-shrink-0 w-48 h-36 md:w-[320px] md:h-[240px] group/item overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border border-white/5 bg-slate-900/50"
              >
                <img 
                  src={`https://picsum.photos/800/600?sig=${item.sig}`} 
                  alt={item.title}
                  className="w-full h-full object-cover brightness-50 group-hover/item:brightness-100 group-hover/item:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 p-4 md:p-8 flex flex-col justify-end">
                  <p className="text-indigo-400 text-[8px] font-black uppercase tracking-widest mb-1">{item.category}</p>
                  <h4 className="text-white text-sm md:text-lg font-black tracking-tight leading-tight">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1.5rem)); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(calc(-50% - 1.5rem)); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-scroll-left { animation-duration: 25s; }
          .animate-scroll-right { animation-duration: 25s; }
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 1rem)); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(calc(-50% - 1rem)); }
            100% { transform: translateX(0); }
          }
        }
      `}</style>
    </section>
  );
};

export default Gallery;
