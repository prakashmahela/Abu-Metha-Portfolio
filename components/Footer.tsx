
import React from 'react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'Twitter',
      url: '#',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      url: '#',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: '#',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
        </svg>
      ),
    },
    {
      name: 'Facebook',
      url: '#',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      ),
    },
  ];

  return (
    <footer id="contact" className="py-24 bg-[#020617] border-t border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-2 space-y-8">
            {/* Premium Logo Implementation (Footer) */}
            <div className="group relative flex items-center gap-4 cursor-default w-fit">
              <div className="relative w-12 h-12 flex items-center justify-center flex-shrink-0">
                <div className="absolute inset-0 bg-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-2xl rotate-45 group-hover:rotate-[135deg] transition-all duration-1000"></div>
                <div className="absolute inset-1.5 bg-[#000205] border border-cyan-500/20 rounded-xl rotate-45 group-hover:rotate-[-45deg] transition-all duration-1000 z-10 flex items-center justify-center">
                  <span className="relative z-20 text-[11px] font-black text-white tracking-widest -rotate-45 group-hover:rotate-45 transition-all duration-1000">AM</span>
                </div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full blur-[2px] animate-pulse"></div>
              </div>

              <div className="flex flex-col items-center pt-1">
                <h2 className="relative flex items-center text-2xl md:text-3xl font-black leading-tight transition-all duration-700 py-1 pr-12">
                  <span className="text-white group-hover:text-cyan-50 transition-colors">
                    ABU
                  </span>
                  <span className="relative ml-2.5 text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 via-indigo-400 to-cyan-400 animate-shimmer-fast bg-[length:200%_auto] pb-1">
                    METHA
                  </span>
                  <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden rounded-r-xl">
                    <div className="absolute top-0 left-[-100%] w-[70%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] group-hover:premium-sweep-anim"></div>
                  </div>
                </h2>
                <div className="flex items-center justify-center w-full">
                  <span className="text-[7.5px] font-black uppercase tracking-[0.6em] text-slate-500 group-hover:text-cyan-300 transition-colors duration-500 whitespace-nowrap">
                    Visionary Legacy
                  </span>
                </div>
              </div>
            </div>

            <p className="text-slate-400 max-w-md text-lg leading-relaxed">
              Empowering Nagaland through visionary leadership, cultural diplomacy, and a relentless focus on youth development. Join the journey towards a resurgent future.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(social => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  className="group relative w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 hover:border-cyan-500/50 hover:shadow-[0_0_20px_-5px_rgba(6,182,212,0.4)]"
                >
                  <span className="sr-only">{social.name}</span>
                  <div className="relative z-10 transition-transform duration-300 group-hover:-rotate-12">
                    {social.icon}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 to-cyan-500/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em]">Quick Links</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#" className="hover:text-cyan-400 transition-all flex items-center gap-2 group"><span className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Home</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-all flex items-center gap-2 group"><span className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Vision</a></li>
              <li><a href="#experience" className="hover:text-cyan-400 transition-all flex items-center gap-2 group"><span className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Journey</a></li>
              <li><a href="#ai-chat" className="hover:text-cyan-400 transition-all flex items-center gap-2 group"><span className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Ask AI Assistant</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em]">Get in Touch</h4>
            <div className="space-y-6 text-slate-400">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/30 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <p className="font-bold text-white text-sm">Location</p>
                  <p className="text-sm">Kohima, Nagaland, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/30 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <p className="font-bold text-white text-sm">Email</p>
                  <p className="text-sm">contact@abumetha.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-600 text-xs font-medium tracking-wider uppercase">
          <p>© {new Date().getFullYear()} Abu Metha • Vision for Excellence</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Digital Identity</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
