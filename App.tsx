
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import AIChat from './components/AIChat';
import Footer from './components/Footer';
import VisionDetail from './components/VisionDetail';
import JourneyDetail from './components/JourneyDetail';
import ExpertiseDetail from './components/ExpertiseDetail';
import MilestoneDetail from './components/MilestoneDetail';
import SkillDetail from './components/SkillDetail';
import Gallery from './components/Gallery';

type View = 'home' | 'vision' | 'journey' | 'expertise' | 'milestone' | 'skill' | 'chat';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [selectedMilestoneId, setSelectedMilestoneId] = useState<string | null>(null);
  const [selectedSkillId, setSelectedSkillId] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      document.querySelectorAll('.reveal:not(.active)').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          el.classList.add('active');
        }
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.hash;
      if (path === '#vision') setView('vision');
      else if (path === '#journey') setView('journey');
      else if (path === '#expertise') setView('expertise');
      else if (path === '#chat') setView('chat');
      else if (path.startsWith('#milestone-')) {
        const id = path.split('-')[1];
        setSelectedMilestoneId(id);
        setView('milestone');
      }
      else if (path.startsWith('#skill-')) {
        const id = path.replace('#skill-', '');
        setSelectedSkillId(id);
        setView('skill');
      }
      else setView('home');
      window.scrollTo(0, 0);
    };
    
    handlePopState();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (newView: View, subId?: string) => {
    setView(newView);
    let hash = '';
    if (newView === 'vision') hash = '#vision';
    else if (newView === 'journey') hash = '#journey';
    else if (newView === 'expertise') hash = '#expertise';
    else if (newView === 'chat') hash = '#chat';
    else if (newView === 'milestone' && subId) {
      hash = `#milestone-${subId}`;
      setSelectedMilestoneId(subId);
    }
    else if (newView === 'skill' && subId) {
      hash = `#skill-${subId}`;
      setSelectedSkillId(subId);
    }
    
    window.history.pushState({ view: newView, subId }, '', hash || '/');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen bg-[#000105] text-slate-200 antialiased font-sans relative">
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#000105]">
        <div 
          className="absolute inset-0 opacity-20"
          style={{ 
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
            transform: `translate3d(0, ${-scrollY * 0.05}px, 0)`
          }}
        />
        <div className="absolute top-[-20%] left-[-10%] w-[90vw] h-[90vw] bg-cyan-600/5 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-30%] right-[-15%] w-[80vw] h-[80vw] bg-indigo-700/5 blur-[180px] rounded-full" />
        <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.9)]"></div>
      </div>

      <div className="relative z-10">
        <Navbar 
          onNavigate={(v) => handleNavigate(v as View)} 
          currentView={view === 'chat' ? 'home' : (view === 'milestone' || view === 'skill') ? 'home' : (view as any)} 
        />
        
        <main className="transition-opacity duration-300">
          {view === 'home' && (
            <div>
              <Hero onExplore={() => handleNavigate('vision')} />
              <div className="reveal"><About /></div>
              <div className="reveal"><Experience onNavigateMilestone={(id) => handleNavigate('milestone', id)} /></div>
              <div className="reveal"><Gallery /></div>
              <div className="reveal"><Skills onNavigateSkill={(id) => handleNavigate('skill', id)} /></div>
              <div className="reveal"><AIChat /></div>
            </div>
          )}
          {view === 'vision' && <div className="animate-in fade-in slide-in-from-top-4 duration-500"><VisionDetail /></div>}
          {view === 'journey' && <div className="animate-in fade-in slide-in-from-top-4 duration-500"><JourneyDetail /></div>}
          {view === 'expertise' && <div className="animate-in fade-in slide-in-from-top-4 duration-500"><ExpertiseDetail /></div>}
          {view === 'chat' && <div className="animate-in fade-in slide-in-from-top-4 duration-500"><AIChat isFullPage /></div>}
          {view === 'milestone' && selectedMilestoneId && (
            <div className="animate-in fade-in slide-in-from-top-4 duration-500">
              <MilestoneDetail id={selectedMilestoneId} onBack={() => handleNavigate('home')} />
            </div>
          )}
          {view === 'skill' && selectedSkillId && (
            <div className="animate-in fade-in slide-in-from-top-4 duration-500">
              <SkillDetail id={selectedSkillId} onBack={() => handleNavigate('home')} />
            </div>
          )}
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default App;
