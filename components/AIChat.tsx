
import React, { useState, useRef, useEffect } from 'react';
import { askAbuAI } from '../services/geminiService';
import { ChatMessage } from '../types';

interface AIChatProps {
  initialMessage?: string;
  title?: string;
  context?: string;
  isFullPage?: boolean;
}

const AIChat: React.FC<AIChatProps> = ({ 
  initialMessage = "Greetings. I am Abu Metha's digital consciousness. Ask me anything about our roadmap for Nagaland, youth policies, or cultural diplomacy initiatives.",
  title = "Visionary AI Agent",
  context = "general",
  isFullPage = false
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const chatInterfaceRef = useRef<HTMLDivElement>(null);

  // Ensure page opens from the top
  useEffect(() => {
    if (isFullPage) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
    setMessages([{ role: 'model', text: initialMessage }]);
  }, [initialMessage, isFullPage]);

  const scrollToBottom = (behavior: ScrollBehavior = 'smooth') => {
    if (scrollContainerRef.current) {
      const { scrollHeight, clientHeight } = scrollContainerRef.current;
      scrollContainerRef.current.scrollTo({
        top: scrollHeight - clientHeight,
        behavior
      });
    }
  };

  useEffect(() => {
    const behavior = messages.length <= 1 ? 'auto' : 'smooth';
    scrollToBottom(behavior);
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const response = await askAbuAI(userMessage);
    setMessages(prev => [...prev, { role: 'model', text: response.text }]);
    setIsLoading(false);
  };

  return (
    <section id="ai-chat" className={`${isFullPage ? 'pt-24 pb-12' : 'py-12'} relative overflow-hidden`}>
      {/* Maximum width capped at 2xl for a hyper-compact feel */}
      <div className={`mx-auto px-6 relative z-10 transition-all duration-700 max-w-2xl`}>
        
        {/* Compact Header Section */}
        <div className={`mb-6 space-y-3 ${isFullPage ? 'text-left flex flex-col items-start' : 'text-center flex flex-col items-center'}`}>
          {isFullPage && (
            <button 
              onClick={() => window.history.back()}
              className="group flex items-center gap-2 text-slate-500 hover:text-white transition-all mb-1 uppercase text-[8px] md:text-[9px] font-black tracking-widest"
            >
              <svg className="w-3.5 h-3.5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Home
            </button>
          )}

          <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em]">
            Digital Consciousness
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tighter leading-tight">
            {title}
          </h2>
          
          <p className={`text-slate-500 font-light text-xs md:text-sm leading-relaxed ${isFullPage ? 'max-w-md' : 'max-w-sm mx-auto'}`}>
            Ask anything about our roadmap for Nagaland and youth policies.
          </p>
        </div>

        {/* Hyper-Compact Chat Interface Container - Height reduced significantly */}
        <div 
          ref={chatInterfaceRef}
          className="bg-black/60 backdrop-blur-3xl border border-white/5 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden flex flex-col h-[320px] md:h-[380px] shadow-[0_20px_50px_-10px_rgba(0,0,0,1)] transition-all hover:border-white/10"
        >
          <div 
            ref={scrollContainerRef}
            className="flex-1 overflow-y-auto p-5 md:p-8 space-y-5 md:space-y-6 scrollbar-hide"
          >
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-top-2 duration-400`}
              >
                <div className={`max-w-[94%] md:max-w-[88%] px-4 py-2.5 md:px-5 md:py-3 rounded-[1rem] md:rounded-[1.4rem] shadow-lg ${
                  msg.role === 'user' 
                  ? 'bg-white text-black font-extrabold text-[11px] md:text-[13px] rounded-tr-none' 
                  : 'bg-white/5 text-slate-300 rounded-tl-none border border-white/5 text-[11px] md:text-[13px] font-light leading-relaxed'
                }`}>
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 px-4 py-2.5 rounded-[1rem] rounded-tl-none border border-white/5 flex gap-1.5 items-center">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse"></span>
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSend} className="p-3 md:p-4 bg-black/40 border-t border-white/5 flex gap-2 md:gap-3">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Query the vision..."
              className="flex-1 bg-white/5 border border-white/10 rounded-lg md:rounded-xl px-4 md:px-5 py-2.5 md:py-3 text-[11px] md:text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/30 transition-all font-light tracking-wide"
            />
            <button 
              type="submit"
              disabled={isLoading}
              className="bg-white hover:bg-cyan-50 disabled:bg-slate-900 disabled:text-slate-600 text-black w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 shadow-lg flex-shrink-0"
            >
              <svg className="w-4 h-4 md:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AIChat;
