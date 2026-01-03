
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate: (view: 'home' | 'vision' | 'journey' | 'expertise' | 'chat') => void;
  currentView: 'home' | 'vision' | 'journey' | 'expertise' | 'chat';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed top-0 w-full z-50 transition-all duration-700 ${
    isScrolled || currentView !== 'home' 
    ? 'bg-[#000205]/80 backdrop-blur-3xl border-b border-white/5 py-3' 
    : 'bg-transparent py-6 md:py-8'
  }`;

  const navItems = [
    { label: 'Home', value: 'home' },
    { label: 'Vision', value: 'vision' },
    { label: 'Journey', value: 'journey' },
    { label: 'Expertise', value: 'expertise' },
  ];

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Left Side: Logo + Nav Items */}
        <div className="flex items-center gap-4 md:gap-10 lg:gap-16">
          <button 
            onClick={() => onNavigate('home')}
            className="group relative flex items-center gap-3 md:gap-4 outline-none"
          >
            {/* Layered Glass Logo Mark */}
            <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center flex-shrink-0">
               <div className="absolute inset-0 bg-cyan-500/20 rounded-xl md:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
               <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-xl md:rounded-2xl rotate-45 group-hover:rotate-[135deg] transition-all duration-1000"></div>
               <div className="absolute inset-1.5 bg-[#000205] border border-cyan-500/20 rounded-lg md:rounded-xl rotate-45 group-hover:rotate-[-45deg] transition-all duration-1000 z-10 flex items-center justify-center">
                  <span className="relative z-20 text-[9px] md:text-[11px] font-black text-white tracking-widest -rotate-45 group-hover:rotate-45 transition-all duration-1000">AM</span>
               </div>
            </div>

            <div className="flex flex-col items-center pt-1 overflow-hidden">
              <h1 className="relative flex items-center text-xl md:text-3xl font-black leading-tight transition-all duration-700 py-1 pr-4 md:pr-12">
                <span className="text-white group-hover:text-cyan-50 transition-colors">
                  ABU
                </span>
                <span className="relative ml-1.5 md:ml-2.5 text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 via-indigo-400 to-cyan-400 animate-shimmer-fast bg-[length:200%_auto] pb-1">
                  METHA
                </span>
                <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden rounded-r-xl">
                  <div className="absolute top-0 left-[-100%] w-[70%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] group-hover:premium-sweep-anim"></div>
                </div>
              </h1>
              <div className="flex items-center justify-center w-full">
                <span className="text-[6px] md:text-[7.5px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-slate-500 group-hover:text-cyan-300 transition-colors duration-500 whitespace-nowrap">
                  Visionary Legacy
                </span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10 text-[10px] lg:text-[11px] font-bold tracking-[0.15em] pt-1">
            {navItems.map((item) => (
              <button 
                key={item.value}
                onClick={() => onNavigate(item.value as any)} 
                className={`transition-all relative group/nav py-2 ${currentView === item.value ? 'text-white' : 'text-slate-500 hover:text-white'}`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-[1.5px] bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-500 ${currentView === item.value ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover/nav:w-full group-hover/nav:opacity-100'}`}></span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3 md:gap-6 lg:gap-8">
          <button 
            onClick={() => onNavigate('chat')}
            className="hidden lg:block text-[9px] font-black uppercase tracking-[0.3em] text-slate-500 hover:text-white transition-all hover:tracking-[0.4em]"
          >
            Access Vision
          </button>
          
          <button 
            onClick={() => onNavigate('chat')}
            className={`group relative px-4 py-2.5 md:px-7 md:py-3 text-[8px] md:text-[10px] font-black uppercase tracking-[0.15em] md:tracking-[0.25em] rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_10px_30px_-5px_rgba(255,255,255,0.1)] whitespace-nowrap ${currentView === 'chat' ? 'bg-cyan-500 text-white' : 'bg-white text-black'}`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-white to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10 flex items-center gap-1.5 md:gap-2.5">
              Consult AI
              <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-black group-hover:animate-ping"></div>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
