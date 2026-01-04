
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Play, Camera, Film, Zap } from 'lucide-react';
import { TEAMS } from '../constants';

const PlayerProfile: React.FC = () => {
  const { teamId, playerNumber } = useParams<{ teamId: string; playerNumber: string }>();

  const team = TEAMS.find(t => t.id === teamId);
  const player = team?.roster.find(p => p.number === parseInt(playerNumber || '0'));

  if (!team || !player) {
    return <Navigate to="/teams" replace />;
  }

  const mockStats = {
    ppg: (Math.random() * 10 + 5).toFixed(1),
    rpg: (Math.random() * 8 + 2).toFixed(1),
    apg: (Math.random() * 6 + 1).toFixed(1),
    gamesPlayed: Math.floor(Math.random() * 5 + 10),
  };

  const highlights = [
    { title: "Training Chaos", id: 1 },
    { title: "Game Winner", id: 2 },
    { title: "Street Moves", id: 3 },
  ];

  return (
    <div className="min-h-screen bg-ecoBlack text-white pb-24 relative overflow-x-hidden">
      {/* Background Splashes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ecoNavy rounded-full blur-[120px] opacity-40 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-ecoBaby rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

      {/* Navigation */}
      <div className="pt-8 px-6 lg:px-12 relative z-10">
        <Link 
          to="/teams" 
          className="inline-flex items-center text-white hover:text-ecoBaby transition-colors font-display font-bold uppercase tracking-wider text-lg"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Roster
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start mb-24">
          
          {/* Left Column: Image Polaroid */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white p-4 pb-16 transform -rotate-2 shadow-2xl relative z-10">
               <div className="tape w-32 h-8 -top-4 left-1/3 bg-white/40 absolute rotate-2"></div>
               <div className="aspect-[4/5] bg-gray-200 overflow-hidden grayscale contrast-125 border-2 border-gray-300">
                  <img 
                    src={`https://picsum.photos/600/800?random=${player.number + (teamId === 'u14-girls' ? 100 : 0)}&grayscale`} 
                    alt={player.name}
                    className="w-full h-full object-cover"
                  />
               </div>
               <div className="absolute bottom-4 right-6">
                 <span className="font-graffiti text-4xl text-ecoBlack">{player.name}</span>
               </div>
               <div className="absolute top-10 -left-6 bg-ecoRed text-white font-display font-bold text-3xl px-3 py-1 -rotate-6 shadow-md z-20">
                 #{player.number}
               </div>
            </div>
            
            {/* Decorative Arrow */}
            <div className="absolute -bottom-10 -right-10 hidden md:block">
               <svg width="100" height="100" viewBox="0 0 100 100">
                  <path d="M10 10 Q 50 50 90 20" stroke="#facc15" strokeWidth="4" fill="none" />
                  <path d="M90 20 L80 15 M90 20 L85 30" stroke="#facc15" strokeWidth="4" />
               </svg>
            </div>
          </div>

          {/* Right Column: Stats & Info */}
          <div className="lg:col-span-7 pt-8">
            <div className="mb-12">
               <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-2 uppercase leading-none" style={{ textShadow: '3px 3px 0px #001c52' }}>
                 {player.name}
               </h1>
               <div className="flex items-center gap-4 mb-6">
                 <span className="bg-white text-ecoBlack font-bold font-mono px-2">PLAYER PROFILE</span>
                 <span className="text-ecoBaby font-scribble text-lg">{team.name} Squad</span>
               </div>

               <div className="relative p-6 border-l-4 border-white bg-white/5 backdrop-blur-sm">
                  <p className="text-gray-300 text-lg leading-relaxed font-sans">
                    {player.name} brings that street energy to the hardwood. A true creative operating within the chaos. 
                    <span className="text-ecoBaby font-bold mx-1">Play + Learn + Grow</span> 
                    embodied. No robotic movements here.
                  </p>
               </div>
            </div>

            {/* Scribbled Stats */}
            <div className="mb-12">
              <h3 className="text-3xl font-graffiti text-white mb-6 transform -rotate-1 flex items-center gap-3">
                <Zap className="h-6 w-6 text-ecoYellow" /> The Numbers
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: 'PTS', val: mockStats.ppg },
                  { label: 'REB', val: mockStats.rpg },
                  { label: 'AST', val: mockStats.apg },
                  { label: 'GP', val: mockStats.gamesPlayed }
                ].map((stat) => (
                   <div key={stat.label} className="relative group">
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                         <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" fill="none" strokeDasharray="5,5" className="opacity-50 group-hover:opacity-100 transition-opacity" />
                      </svg>
                      <div className="text-center py-6">
                         <div className="text-4xl font-display font-bold text-ecoBaby">{stat.val}</div>
                         <div className="font-scribble text-sm text-gray-400">{stat.label}</div>
                      </div>
                   </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- NEW SECTION: THE FILM ROOM --- */}
        <div className="relative">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 border-b-8 border-ecoNavy pb-6">
            <h2 className="text-7xl md:text-9xl font-display font-bold text-white uppercase tracking-tighter leading-none" style={{ textShadow: '4px 4px 0px #001c52' }}>
              THE FILM <span className="text-ecoBaby">ROOM</span>
            </h2>
            <p className="font-graffiti text-ecoYellow text-2xl md:text-3xl -rotate-2 mb-2">RAW & UNCUT</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Highlights Video Placeholder */}
            <div className="lg:col-span-7 relative group">
               <div className="bg-ecoNavy p-1 transform rotate-1 shadow-[10px_10px_0px_0px_rgba(151,179,210,1)]">
                  <div className="aspect-video bg-gray-900 overflow-hidden relative border-4 border-white">
                     {/* Static Overlay Effect */}
                     <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay pointer-events-none"></div>
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                     
                     <img 
                       src={`https://picsum.photos/1280/720?random=${player.number + 50}&grayscale`} 
                       alt="Highlight Clip"
                       className="w-full h-full object-cover grayscale opacity-60"
                     />

                     <div className="absolute inset-0 flex items-center justify-center">
                        <button className="bg-white/90 text-ecoNavy p-6 rounded-full transform hover:scale-110 transition-transform shadow-xl group-hover:bg-ecoBaby">
                           <Play className="h-10 w-10 fill-current" />
                        </button>
                     </div>

                     <div className="absolute top-4 left-4 font-mono text-xs text-ecoBaby uppercase flex items-center gap-2">
                        <div className="w-2 h-2 bg-ecoRed rounded-full animate-pulse"></div>
                        REC 00:42:15:09
                     </div>

                     <div className="absolute bottom-6 left-6">
                        <h4 className="font-display text-3xl font-bold text-white uppercase italic">SEASON HIGHLIGHTS REEL</h4>
                        <p className="font-scribble text-ecoBaby text-sm mt-1">Mixed by EcoHoops Lab</p>
                     </div>
                  </div>
               </div>
               
               {/* Video Metadata Doodles */}
               <div className="absolute -bottom-8 -left-4 font-scribble text-lg text-ecoYellow -rotate-6">
                  Check the footwork!
               </div>
            </div>

            {/* Gallery Side: Scrapbook Collage */}
            <div className="lg:col-span-5 relative h-[500px]">
               <div className="absolute top-0 right-0 w-full h-full">
                  
                  {/* Polaroid 1 */}
                  <div className="absolute top-4 right-10 w-48 h-60 bg-white p-2 pb-10 shadow-lg transform rotate-6 hover:rotate-2 hover:scale-105 transition-all duration-300 z-10 cursor-pointer">
                     <div className="w-full h-full bg-gray-200 overflow-hidden">
                        <img src={`https://picsum.photos/300/400?random=${player.number + 10}&grayscale`} className="object-cover w-full h-full" />
                     </div>
                     <div className="mt-2 text-center font-scribble text-ecoBlack text-xs">Morning Grind</div>
                     <div className="tape w-20 h-5 -top-3 left-1/4 bg-white/40 absolute -rotate-3"></div>
                  </div>

                  {/* Polaroid 2 */}
                  <div className="absolute top-40 left-0 w-56 h-72 bg-white p-3 pb-12 shadow-xl transform -rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-300 z-20 cursor-pointer">
                     <div className="w-full h-full bg-gray-200 overflow-hidden">
                        <img src={`https://picsum.photos/300/400?random=${player.number + 20}&grayscale`} className="object-cover w-full h-full" />
                     </div>
                     <div className="mt-3 text-center font-scribble text-ecoBlack text-sm font-bold">The Chaos Lab</div>
                     <div className="tape w-24 h-6 -top-2 right-10 bg-white/60 absolute rotate-2"></div>
                  </div>

                  {/* Polaroid 3 */}
                  <div className="absolute bottom-4 right-4 w-52 h-64 bg-white p-3 pb-12 shadow-2xl transform rotate-3 hover:rotate-1 hover:scale-110 transition-all duration-300 z-30 cursor-pointer">
                     <div className="w-full h-full bg-gray-300 overflow-hidden">
                        <img src={`https://picsum.photos/300/400?random=${player.number + 30}&grayscale`} className="object-cover w-full h-full" />
                     </div>
                     <div className="mt-3 text-center font-graffiti text-ecoBlack text-lg">CLUTCH</div>
                     <div className="tape w-28 h-8 -bottom-4 left-4 bg-ecoBaby/50 absolute rotate-1 z-[-1]"></div>
                  </div>

                  {/* Scribble Overlay */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20">
                     <Camera className="w-48 h-48 text-white" />
                  </div>
               </div>
            </div>

          </div>

          {/* Bottom Call to Action */}
          <div className="mt-24 text-center">
             <div className="inline-block relative">
                <div className="absolute inset-0 bg-ecoBaby blur-2xl opacity-20 animate-pulse"></div>
                <button className="relative bg-white text-ecoBlack font-display font-bold text-3xl uppercase px-12 py-4 shadow-[8px_8px_0px_0px_rgba(0,28,82,1)] hover:-translate-y-1 active:translate-y-1 transition-transform border-4 border-ecoNavy">
                   Download Full Reel
                </button>
                <div className="font-scribble text-white mt-4 block">Total size: 42MB .mp4</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Fixed: Added missing default export
export default PlayerProfile;