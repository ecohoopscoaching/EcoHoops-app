
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Play, SkipForward, SkipBack, Volume2, Instagram, Heart, MessageCircle, Maximize2, Target, Waves, Zap } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import PhilosophySection from './components/PhilosophySection';
import RosterSection from './components/RosterSection';
import CoachChat from './components/CoachChat';
import PlayerProfile from './components/PlayerProfile';
import AILab from './components/AILab';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="fixed bottom-8 left-8 z-[60] group">
      <div className="bg-white text-ecoBlack p-4 shadow-[8px_8px_0px_0px_rgba(0,28,82,1)] border-2 border-ecoNavy transform -rotate-1 hover:rotate-0 transition-transform duration-300 w-64">
        <div className="flex items-center gap-4 mb-3">
          <div className="w-12 h-12 bg-ecoNavy flex items-center justify-center animate-pulse">
            <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
               <div className={`w-2 h-2 bg-ecoBaby rounded-full ${isPlaying ? 'scale-150' : 'scale-100'}`}></div>
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="font-display font-bold text-sm uppercase truncate">The Lab Sessions</div>
            <div className="font-scribble text-[10px] text-ecoNavy/70 animate-bounce truncate">Vibe: High Frequency</div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button className="hover:scale-110 transition-transform"><SkipBack size={18} /></button>
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-ecoNavy text-white p-2 rounded-full hover:bg-ecoRed transition-colors"
          >
            {isPlaying ? <span className="block w-4 h-4 border-l-4 border-r-4 border-white mx-auto"></span> : <Play size={18} fill="currentColor" />}
          </button>
          <button className="hover:scale-110 transition-transform"><SkipForward size={18} /></button>
          <div className="flex items-center gap-1 text-ecoNavy/40">
             <Volume2 size={14} />
             <div className="w-8 h-1 bg-ecoNavy/20 relative">
               <div className="absolute top-0 left-0 h-full w-2/3 bg-ecoNavy"></div>
             </div>
          </div>
        </div>
      </div>
      <div className="tape w-20 h-4 -top-2 left-1/2 -translate-x-1/2 bg-ecoBaby/40"></div>
    </div>
  );
};

const Home = () => (
  <>
    <Hero />
    <MusicPlayer />

    {/* THE PROGRAMS SECTION - New Content from ecohoops.ca */}
    <section className="py-24 bg-ecoNavy relative overflow-hidden">
       <div className="absolute inset-0 opacity-10 grayscale">
          <img src="https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=1920&auto=format&fit=crop" className="w-full h-full object-cover" />
       </div>
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
             <h2 className="text-6xl md:text-8xl font-display font-bold text-white uppercase tracking-tighter leading-none">
               THE <span className="text-ecoBaby">LABS</span>
             </h2>
             <p className="font-scribble text-ecoYellow text-2xl -rotate-2">Choose your pathway.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
             {/* Elite Teams */}
             <div className="bg-ecoBlack border-4 border-white p-8 relative transform hover:-rotate-1 transition-transform group">
                <div className="tape w-24 h-6 -top-3 left-10 bg-white/20 absolute"></div>
                <Target className="text-ecoBaby mb-4 h-12 w-12 group-hover:animate-pulse" />
                <h3 className="text-3xl font-display font-bold text-white uppercase mb-4 tracking-tighter">Elite Teams</h3>
                <p className="text-gray-400 font-sans mb-6">U15 Boys (2011) & U14 Girls (2012). Intense focus on tactical autonomy and representative design.</p>
                <Link to="/teams" className="inline-block bg-white text-ecoBlack px-6 py-2 font-display font-bold uppercase tracking-widest hover:bg-ecoBaby transition-colors">
                  Check Roster
                </Link>
             </div>

             {/* The Lab Sessions */}
             <div className="bg-ecoBlack border-4 border-white p-8 relative transform rotate-1 transition-transform group">
                <div className="tape w-24 h-6 -top-3 right-10 bg-white/20 absolute rotate-6"></div>
                <Waves className="text-ecoYellow mb-4 h-12 w-12 group-hover:scale-110 transition-transform" />
                <h3 className="text-3xl font-display font-bold text-white uppercase mb-4 tracking-tighter">Lab Clinics</h3>
                <p className="text-gray-400 font-sans mb-6">Skill acquisition clinics focusing on perceptual-action coupling. No line drills, just adaptive problem solving.</p>
                <Link to="/lab" className="inline-block bg-ecoYellow text-ecoNavy px-6 py-2 font-display font-bold uppercase tracking-widest hover:bg-white transition-colors">
                  Enter Lab
                </Link>
             </div>

             {/* Non-Profit */}
             <div className="bg-white p-8 relative transform -rotate-1 transition-transform group text-ecoNavy shadow-[12px_12px_0px_0px_rgba(255,255,255,0.2)]">
                <div className="tape w-24 h-6 -top-3 left-1/4 bg-ecoNavy/20 absolute -rotate-3"></div>
                <Heart className="text-ecoRed mb-4 h-12 w-12 group-hover:animate-jitter" />
                <h3 className="text-3xl font-display font-bold uppercase mb-4 tracking-tighter">EcoHoops Canada</h3>
                <p className="text-gray-700 font-sans mb-6 font-bold">Our non-profit mission to revolutionize youth sport across Canada through Ecological Dynamics.</p>
                <button className="bg-ecoNavy text-white px-6 py-2 font-display font-bold uppercase tracking-widest hover:bg-ecoBaby transition-colors">
                  Support Mission
                </button>
             </div>
          </div>
       </div>
    </section>

    {/* VIDEO SECTION: THE CINEMA */}
    <section className="py-24 bg-ecoBlack relative">
       {/* Background Court */}
       <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=1920&auto=format&fit=crop" className="w-full h-full object-cover grayscale" alt="Court background" />
       </div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative mb-12 flex items-end justify-between border-b-4 border-white pb-6">
            <h2 className="text-6xl md:text-8xl font-display font-bold text-white uppercase tracking-tighter">
              ECO<span className="text-ecoBaby">CINEMA</span>
            </h2>
            <p className="font-graffiti text-ecoYellow text-2xl -rotate-2">UNFILTERED</p>
          </div>
          
          <div className="relative group">
            <div className="bg-white p-1 transform rotate-1 shadow-[20px_20px_0px_0px_rgba(151,179,210,0.3)]">
               <div className="aspect-video bg-gray-900 relative overflow-hidden border-4 border-ecoNavy">
                  <div className="absolute inset-0 bg-noise opacity-20 z-10 pointer-events-none"></div>
                  <img src="https://images.unsplash.com/photo-1519861531158-2283b35b7a73?q=80&w=1920&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 grayscale" alt="Basketball mix background" />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                     <button className="w-24 h-24 bg-white text-ecoNavy rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl group-hover:bg-ecoBaby">
                        <Play size={48} fill="currentColor" />
                     </button>
                  </div>
                  <div className="absolute top-6 left-6 flex items-center gap-2 text-ecoRed font-mono font-bold animate-pulse z-20">
                    <div className="w-3 h-3 bg-ecoRed rounded-full"></div> REC 04:20:11
                  </div>
                  <div className="absolute bottom-6 left-6 z-20">
                    <h3 className="text-4xl font-display font-bold text-white uppercase italic">THE 2025 WINTER MIXTAPE</h3>
                    <p className="font-scribble text-ecoBaby mt-2">Chaos has a rhythm.</p>
                  </div>
                  <button className="absolute top-6 right-6 text-white/50 hover:text-white z-20"><Maximize2 size={24} /></button>
               </div>
            </div>
            <div className="absolute -bottom-10 -right-4 font-scribble text-ecoYellow text-xl -rotate-6 hidden lg:block">Watch the progress.</div>
          </div>
       </div>
    </section>

    {/* IMAGE GRID: THE SCRAPBOOK */}
    <section className="py-24 bg-ecoNavy relative overflow-hidden">
       {/* Background Court Overlay */}
       <div className="absolute inset-0 opacity-5">
          <img src="https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=1920&auto=format&fit=crop" className="w-full h-full object-cover" alt="Court overlay" />
       </div>
       {/* Background spray effect */}
       <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-[800px] h-[800px] bg-white rounded-full blur-[200px]"></div>
       </div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
             <div className="inline-block bg-white px-8 py-3 transform -rotate-2 shadow-[8px_8px_0px_0px_#000000]">
                <h2 className="text-5xl md:text-7xl font-display font-bold text-ecoNavy uppercase">THE SCRAPBOOK</h2>
             </div>
             <p className="font-scribble text-white text-xl mt-6">Snapshots from the lab.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
             {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div 
                  key={i} 
                  className={`relative group cursor-pointer ${i % 3 === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                >
                  <div className={`bg-white p-2 pb-8 shadow-xl transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl ${i % 2 === 0 ? 'rotate-2' : '-rotate-1'}`}>
                     <div className="aspect-[3/4] overflow-hidden grayscale contrast-125 border-2 border-gray-100">
                        <img 
                          src={`https://picsum.photos/800/1000?random=${i + 200}&grayscale`} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                        />
                     </div>
                     <div className="mt-2 text-center font-scribble text-[10px] text-ecoBlack/50 uppercase">Session #{100 + i}</div>
                     <div className="tape w-16 h-4 -top-2 left-1/4 bg-white/40 absolute -rotate-6"></div>
                  </div>
                </div>
             ))}
          </div>
       </div>
    </section>

    {/* INSTAGRAM FEED: STREET FEED */}
    <section className="py-24 bg-ecoBlack">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
             <div className="flex items-center gap-4">
                <div className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-1 rounded-2xl transform -rotate-3 shadow-lg">
                   <div className="bg-ecoBlack p-3 rounded-xl border-2 border-white">
                      <Instagram className="h-10 w-10 text-white" />
                   </div>
                </div>
                <div>
                   <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tighter">STREET FEED</h2>
                   <p className="font-mono text-ecoBaby text-xs uppercase tracking-widest">Follow @ECOHOOPSLAB</p>
                </div>
             </div>
             <button className="bg-white text-ecoBlack px-8 py-3 font-display font-bold uppercase tracking-widest hover:bg-ecoBaby transition-colors transform hover:rotate-1">
                View Full Feed
             </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
             {[1, 2, 3].map((i) => (
                <div key={i} className="bg-ecoNavy/20 border border-white/10 rounded-sm overflow-hidden group">
                   <div className="p-4 flex items-center justify-between border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-ecoBaby overflow-hidden border border-white">
                           <img src="https://picsum.photos/50/50?grayscale" alt="Avatar" />
                        </div>
                        <span className="font-bold text-sm tracking-tight">ecohoopslab</span>
                      </div>
                      <div className="w-4 h-4 rounded-full border border-white/30 flex items-center justify-center text-[8px]">...</div>
                   </div>
                   <div className="aspect-square bg-gray-900 overflow-hidden relative">
                      <img 
                        src={`https://picsum.photos/600/600?random=${i + 300}&grayscale`} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-8 text-white">
                         <div className="flex items-center gap-2"><Heart fill="white" /> 1.2k</div>
                         <div className="flex items-center gap-2"><MessageCircle fill="white" /> 42</div>
                      </div>
                   </div>
                   <div className="p-4">
                      <div className="flex gap-4 mb-3">
                        <Heart className="h-6 w-6 text-white cursor-pointer hover:text-ecoRed" />
                        <MessageCircle className="h-6 w-6 text-white cursor-pointer hover:text-ecoBaby" />
                      </div>
                      <p className="text-xs font-sans text-gray-300">
                        <span className="font-bold text-white mr-2">ecohoopslab</span>
                        {i === 1 ? "The work never stops in the Lab. Sunday morning session was electric! ⚡️" : i === 2 ? "Focus on the process, the result is a byproduct. #StreetScienceSoul" : "Join the movement. Building people, not just pros."}
                      </p>
                      <div className="mt-3 font-scribble text-[10px] text-ecoBaby">#YouthBasketball #EcologicalDynamics #EcoHoops</div>
                   </div>
                </div>
             ))}
          </div>
       </div>
    </section>

    <section className="py-24 bg-ecoBlack relative overflow-hidden border-t-4 border-white">
      {/* Background Court */}
      <div className="absolute inset-0 opacity-5">
          <img src="https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=1920&auto=format&fit=crop" className="w-full h-full object-cover grayscale" alt="News section court" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 relative">
            <h2 className="text-6xl md:text-8xl font-display font-bold text-white mb-4 uppercase tracking-tighter" style={{ textShadow: '4px 4px 0px #001c52' }}>
              The Word On The Street
            </h2>
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-full max-w-lg h-24 bg-ecoBaby/20 blur-3xl -z-10"></div>
            <p className="font-scribble text-ecoBaby text-xl -rotate-2 mt-4">Latest Drops & Updates</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="group relative bg-ecoBlack border-2 border-white p-6 transition-transform hover:-rotate-1 hover:scale-105 duration-300">
              <div className="tape w-32 h-8 top-[-15px] left-[30%]"></div>
              <div className="font-display text-4xl text-white/10 absolute top-2 right-4 font-bold">01</div>
              <div className="text-ecoBaby font-graffiti text-lg mb-2">MARCH 10, 2025</div>
              <h3 className="text-2xl font-display font-bold text-white mb-3 uppercase">Book Club: "The Inner Game"</h3>
              <p className="text-gray-400 font-sans border-l-2 border-ecoBaby pl-4">Focus: Quieting the mind. We building mental fortresses out here.</p>
           </div>
           
           <div className="group relative bg-ecoBaby p-6 transition-transform hover:rotate-2 hover:scale-105 duration-300 text-ecoNavy">
              <div className="tape w-32 h-8 top-[-15px] right-[20%] rotate-3"></div>
              <div className="font-display text-4xl text-ecoNavy/20 absolute bottom-2 right-4 font-bold">02</div>
              <div className="text-ecoNavy font-graffiti text-lg mb-2">FEB 28, 2025</div>
              <h3 className="text-3xl font-display font-bold mb-3 uppercase italic">NO LINE DRILLS.</h3>
              <p className="text-ecoNavy/80 font-bold font-sans">Policy Reminder: We don't build robots. Ecological Dynamics only.</p>
           </div>
           
           <div className="group relative bg-ecoBlack border-2 border-white p-6 transition-transform hover:-rotate-1 hover:scale-105 duration-300">
              <div className="tape w-24 h-8 bottom-[-15px] left-[10%] -rotate-2"></div>
              <div className="font-display text-4xl text-white/10 absolute top-2 right-4 font-bold">03</div>
              <div className="text-ecoBaby font-graffiti text-lg mb-2">FEB 15, 2025</div>
              <h3 className="text-2xl font-display font-bold text-white mb-3 uppercase">Rosters Live</h3>
              <p className="text-gray-400 font-sans border-l-2 border-ecoBaby pl-4">U15 Boys & U14 Girls. The squad is set. Let's work.</p>
           </div>
        </div>
      </div>
    </section>
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-ecoBlack flex flex-col font-sans text-white relative">
        <div className="fixed inset-0 bg-noise pointer-events-none z-[100] mix-blend-overlay"></div>
        
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/philosophy" element={<PhilosophySection />} />
            <Route path="/teams" element={<RosterSection />} />
            <Route path="/lab" element={<AILab />} />
            <Route path="/player/:teamId/:playerNumber" element={<PlayerProfile />} />
            <Route path="/ai-coach" element={<CoachChat />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
