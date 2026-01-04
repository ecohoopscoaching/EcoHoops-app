
import React, { useState } from 'react';
import { Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TEAMS } from '../constants';

const RosterSection: React.FC = () => {
  const [activeTeamId, setActiveTeamId] = useState<string>(TEAMS[0].id);

  const activeTeam = TEAMS.find(t => t.id === activeTeamId) || TEAMS[0];

  return (
    <div className="bg-ecoBlack min-h-screen py-24 relative overflow-hidden">
       {/* Background Court Overlay */}
       <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=1920&auto=format&fit=crop" className="w-full h-full object-cover grayscale brightness-50" alt="Roster background court" />
       </div>
       {/* Graffiti Background Text */}
       <div className="absolute top-20 right-0 font-display font-bold text-[200px] leading-none text-white/5 select-none pointer-events-none rotate-90 origin-top-right z-10">
          SQUAD
       </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        <div className="text-center mb-16">
          <h1 className="text-7xl md:text-9xl font-display font-bold text-white mb-4 tracking-tighter uppercase" style={{ textShadow: '4px 4px 0px #001c52' }}>
            THE ROSTER
          </h1>
          <div className="inline-block bg-ecoBaby px-6 py-2 transform -rotate-2">
            <p className="text-ecoNavy font-graffiti text-2xl">
              2025 Season / Born {activeTeam.birthYear}
            </p>
          </div>
        </div>

        {/* Team Tabs */}
        <div className="flex justify-center mb-16 gap-6">
            {TEAMS.map((team) => (
              <button
                key={team.id}
                onClick={() => setActiveTeamId(team.id)}
                className={`px-8 py-4 font-display font-bold text-2xl uppercase tracking-wider transition-all duration-300 transform border-4 ${
                  activeTeamId === team.id
                    ? 'bg-white text-ecoBlack border-white -rotate-2 shadow-[4px_4px_0px_0px_#97b3d2]'
                    : 'bg-transparent text-gray-500 border-gray-500 hover:text-white hover:border-white hover:rotate-1'
                }`}
              >
                {team.name}
              </button>
            ))}
        </div>

        {/* Roster Grid - Polaroids */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
              {activeTeam.roster.map((player, idx) => (
                <Link 
                  to={`/player/${activeTeamId}/${player.number}`}
                  key={player.number} 
                  className={`group relative bg-white p-3 pb-12 shadow-xl transition-transform duration-300 hover:z-20 hover:scale-105 cursor-pointer ${idx % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}
                >
                  {/* Tape */}
                  <div className="tape w-24 h-6 -top-3 left-1/2 -translate-x-1/2 bg-white/40"></div>
                  
                  {/* Image Container */}
                  <div className="aspect-[3/4] bg-gray-200 overflow-hidden relative border-2 border-gray-100">
                     <img 
                       src={`https://picsum.photos/400/500?random=${player.number + (activeTeamId === 'u14-girls' ? 100 : 0)}&grayscale`} 
                       alt={player.name} 
                       className="w-full h-full object-cover filter contrast-125 group-hover:contrast-100 transition-all duration-500"
                     />
                     
                     {/* Number Overlay */}
                     <div className="absolute top-2 right-2 font-display font-bold text-4xl text-white drop-shadow-md">
                        {player.number}
                     </div>
                  </div>
                  
                  {/* Handwritten Name */}
                  <div className="absolute bottom-2 left-0 w-full text-center">
                    <h3 className="font-scribble text-xl text-ecoBlack font-bold transform -rotate-2 group-hover:text-ecoNavy transition-colors">
                        {player.name}
                    </h3>
                  </div>
                  
                  {/* Hover Doodles */}
                  <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <svg width="40" height="40" viewBox="0 0 40 40">
                        <circle cx="20" cy="20" r="18" stroke="#facc15" strokeWidth="3" fill="none" />
                     </svg>
                  </div>
                </Link>
              ))}
        </div>

      </div>
    </div>
  );
};

export default RosterSection;
