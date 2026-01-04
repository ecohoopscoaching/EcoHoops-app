
import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Microscope, Heart, Sprout, PlayCircle, BookOpen, Quote, Brain, Target, Waves } from 'lucide-react';
import { PHILOSOPHY_PILLARS } from '../constants';

const PhilosophySection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Zap': return <Zap className="h-12 w-12 text-white" />;
      case 'Microscope': return <Microscope className="h-12 w-12 text-white" />;
      case 'Heart': return <Heart className="h-12 w-12 text-white" />;
      default: return null;
    }
  };

  return (
    <div className="bg-ecoBlack min-h-screen relative pb-24">
      
      {/* Header Area */}
      <div className="bg-ecoNavy py-24 px-4 relative overflow-hidden clip-tear mb-12">
         {/* Background Court & Splatters */}
         <div className="absolute inset-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=1920&auto=format&fit=crop" className="w-full h-full object-cover grayscale contrast-150" alt="Court header background" />
         </div>
         <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 right-20 w-64 h-64 bg-ecoBaby rounded-full blur-[100px] opacity-30"></div>
            <div className="absolute bottom-10 left-20 w-80 h-80 bg-white rounded-full blur-[100px] opacity-10"></div>
         </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block border-4 border-white px-8 py-2 transform -rotate-2 mb-6 bg-ecoBlack">
            <h1 className="text-6xl md:text-8xl font-display font-bold text-white uppercase tracking-tighter">
              OUR DNA
            </h1>
          </div>
          <p className="text-2xl font-scribble text-ecoBaby -rotate-1">
            Play + Learn + Grow
          </p>
        </div>
      </div>

      {/* Founder & Mission - Gardener vs Carpenter */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="bg-white p-3 pb-16 transform -rotate-2 shadow-2xl relative">
                <div className="tape w-32 h-8 -top-4 left-1/4 bg-gray-200 absolute rotate-1"></div>
                <div className="aspect-[4/5] bg-gray-800 overflow-hidden grayscale contrast-125 border-4 border-ecoNavy">
                   <img src="https://picsum.photos/600/800?random=founder&grayscale" className="w-full h-full object-cover" alt="Coach Adrian Sapp" />
                </div>
                <div className="absolute bottom-4 right-6 text-right">
                  <h3 className="font-graffiti text-3xl text-ecoBlack">Adrian Sapp</h3>
                  <p className="font-display text-xs text-ecoNavy font-bold uppercase tracking-widest">Lead Performance Coach</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-white text-ecoBlack p-8 transform rotate-1 shadow-[8px_8px_0px_0px_#001c52]">
                <Quote className="text-ecoBaby mb-4" />
                <h2 className="text-4xl font-display font-bold mb-4 bg-ecoNavy text-white inline-block px-2 uppercase tracking-tighter">The Gardener Mindset</h2>
                <div className="font-sans text-xl leading-relaxed space-y-4">
                  <p>
                    At EcoHoops, we reject the <strong>Carpenter mindset</strong>—trying to carve 
                    athletes into a predetermined mold. Instead, we are <strong>Gardeners</strong>. 
                  </p>
                  <p>
                    We don't "force" growth; we create the perfect environment (the constraints) 
                    and let the kids evolve into their best selves.
                  </p>
                  <p className="font-graffiti text-2xl text-ecoNavy/80 mt-4 italic">
                    "The goal isn't to build pros; it's to build people."
                  </p>
                </div>
              </div>
            </div>
         </div>
      </div>

      {/* Ecological Dynamics Deep Dive */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative">
         <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white uppercase tracking-tighter">The Science of Adaptation</h2>
            <div className="h-1 w-32 bg-ecoYellow mx-auto mt-2"></div>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-ecoNavy/40 border-2 border-white p-8 group hover:bg-ecoNavy transition-colors">
               <Brain className="text-ecoBaby mb-4 w-10 h-10 group-hover:animate-pulse" />
               <h3 className="text-2xl font-display font-bold text-white uppercase mb-4">Representative Design</h3>
               <p className="text-gray-400 font-sans leading-relaxed">Training must look and feel like the game. No line drills, no cones—just environments that force real basketball decisions.</p>
            </div>
            <div className="bg-ecoNavy/40 border-2 border-white p-8 group hover:bg-ecoNavy transition-colors">
               <Waves className="text-ecoYellow mb-4 w-10 h-10 group-hover:scale-110 transition-transform" />
               <h3 className="text-2xl font-display font-bold text-white uppercase mb-4">Self-Organization</h3>
               <p className="text-gray-400 font-sans leading-relaxed">The brain learns best by solving problems, not by mimicking instructions. We facilitate the struggle, you discover the solution.</p>
            </div>
            <div className="bg-ecoNavy/40 border-2 border-white p-8 group hover:bg-ecoNavy transition-colors">
               <Target className="text-white mb-4 w-10 h-10 group-hover:animate-spin-slow" />
               <h3 className="text-2xl font-display font-bold text-white uppercase mb-4">Variable Practice</h3>
               <p className="text-gray-400 font-sans leading-relaxed">"Repeating the outcome, not the movement." We introduce noise and pressure so your skills become robust, not robotic.</p>
            </div>
         </div>
      </div>

      {/* 3 Pillars - Play Learn Grow */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=1920&auto=format&fit=crop" className="w-full h-full object-cover" alt="Section background court" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {PHILOSOPHY_PILLARS.map((pillar, idx) => (
            <div 
              key={pillar.title} 
              className={`bg-ecoBlack border-2 border-white p-8 relative hover:z-10 transition-transform duration-300 hover:scale-105 ${idx % 2 === 0 ? '-rotate-1' : 'rotate-2'}`}
            >
              <div className="tape w-24 h-8 -top-4 left-10 bg-white/30 absolute -rotate-2"></div>
              <div className="mb-6 flex justify-center">
                 <div className="bg-ecoNavy p-4 rounded-full border-2 border-ecoBaby shadow-[4px_4px_0px_0px_#ffffff]">
                    {getIcon(pillar.iconName)}
                 </div>
              </div>
              <h3 className="text-4xl font-display font-bold text-white text-center mb-4 uppercase">{pillar.title}</h3>
              <p className="text-gray-300 font-sans text-center text-lg leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Methodology & Practice */}
      <div className="bg-ecoBaby py-20 clip-tear relative">
        {/* Subtle court texture for methodology */}
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1519861531158-2283b35b7a73?q=80&w=1920&auto=format&fit=crop" className="w-full h-full object-cover grayscale" alt="Methodology court" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
             
             {/* Text Side */}
             <div>
               <h2 className="text-6xl font-display font-bold text-ecoNavy mb-8 relative inline-block">
                 HOW WE WORK
                 <svg className="absolute w-full h-6 -bottom-2 left-0" viewBox="0 0 200 20" preserveAspectRatio="none">
                    <path d="M0 10 Q 100 20 200 10" stroke="#001c52" strokeWidth="5" fill="none" />
                 </svg>
               </h2>
               
               <div className="space-y-6">
                 <div className="bg-white p-6 transform -rotate-1 shadow-[5px_5px_0px_0px_#001c52]">
                    <h3 className="text-2xl font-graffiti text-ecoNavy mb-2">01. FREE PLAY</h3>
                    <p className="font-bold text-gray-800">No whistles. No lines. Just ball. Authentic street energy.</p>
                 </div>
                 <div className="bg-white p-6 transform rotate-1 shadow-[5px_5px_0px_0px_#001c52]">
                    <h3 className="text-2xl font-graffiti text-ecoNavy mb-2">02. SMALL SIDED GAMES</h3>
                    <p className="font-bold text-gray-800">3v3 is the teacher. More touches, more decisions, more growth.</p>
                 </div>
                 <div className="bg-white p-6 transform -rotate-1 shadow-[5px_5px_0px_0px_#001c52]">
                    <h3 className="text-2xl font-graffiti text-ecoNavy mb-2">03. CONSTRAINTS (CLA)</h3>
                    <p className="font-bold text-gray-800">We change the environment to force the brain to adapt.</p>
                 </div>
               </div>
             </div>

             {/* Visual/Mental Side */}
             <div className="relative mt-12 lg:mt-0">
               {/* Video Box */}
               <div className="bg-ecoBlack p-2 transform rotate-2 border-2 border-white">
                  <div className="aspect-video bg-gray-800 relative flex items-center justify-center overflow-hidden group cursor-pointer">
                     <div className="absolute inset-0 bg-ecoNavy mix-blend-hard-light opacity-50"></div>
                     <PlayCircle className="w-20 h-20 text-white z-10 group-hover:scale-110 transition-transform" />
                     <div className="absolute bottom-4 left-4 font-display text-white text-xl z-10 uppercase">Watch The Chaos</div>
                  </div>
               </div>
               
               {/* Book Club Note */}
               <div className="bg-yellow-400 p-6 absolute -bottom-10 -left-10 w-64 transform -rotate-6 shadow-xl border-2 border-black">
                  <div className="flex items-center gap-2 mb-2 border-b-2 border-black pb-2">
                     <BookOpen className="w-5 h-5 text-black" />
                     <span className="font-display font-bold text-black uppercase">Mindset Lab</span>
                  </div>
                  <p className="font-scribble text-sm text-black">
                    Reading "The Inner Game of Tennis". 
                    <br/><span className="font-bold">Focus:</span> Quiet the mind.
                  </p>
               </div>
             </div>

          </div>
        </div>
      </div>

      {/* Philosophy Call to Action */}
      <div className="mt-24 max-w-4xl mx-auto px-4 text-center">
         <div className="bg-ecoNavy p-12 border-4 border-white shadow-[15px_15px_0px_0px_#97b3d2] relative">
            <div className="tape w-48 h-10 -top-5 left-1/2 -translate-x-1/2 bg-white/40 absolute"></div>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white uppercase mb-6 italic tracking-tighter">Are You Ready to Grow?</h3>
            <p className="text-gray-300 text-xl font-sans mb-8">
              Registration for 2025 squads is live. EcoHoops for Kids Canada is a non-profit dedicated to holistic youth development.
            </p>
            <Link to="/teams" className="inline-block bg-white text-ecoNavy px-12 py-4 font-display font-bold text-2xl uppercase hover:bg-ecoBaby transition-colors">
               Apply Now
            </Link>
         </div>
      </div>

    </div>
  );
};

export default PhilosophySection;
