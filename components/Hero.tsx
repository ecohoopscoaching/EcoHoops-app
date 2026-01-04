
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Zap, Info } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-ecoBlack min-h-[90vh] flex items-center">
      
      {/* Background Texture & Collage Elements */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=1920&auto=format&fit=crop"
          alt="Urban Basketball Court"
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ecoBlack via-transparent to-ecoBlack/50"></div>
        
        {/* Graffiti Splash Background */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ecoNavy rounded-full mix-blend-hard-light filter blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ecoBaby rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-float"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Text Content */}
          <div className="lg:w-3/5 relative">
            
            {/* Basquiat Crown Doodle */}
            <div className="absolute -top-16 -left-4 animate-jitter">
              <svg width="100" height="80" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 50 L25 20 L40 50 L55 10 L70 50 L85 20 L90 60 H10 Z" stroke="#facc15" strokeWidth="4" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>

            <div className="inline-block transform -rotate-2 mb-4 bg-white px-4 py-1 shadow-[4px_4px_0px_0px_#facc15]">
              <span className="font-graffiti text-ecoBlack text-xl">2025 SEASON LIVE</span>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-display font-bold text-white leading-[0.85] mb-6 drop-shadow-lg">
              BEYOND <br />
              <span className="relative inline-block text-ecoBaby">
                THE BALL
                <svg className="absolute w-full h-4 -bottom-2 left-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="#facc15" strokeWidth="3" fill="none" />
                </svg>
              </span>
              <br />
              <span className="text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 font-graffiti italic">CHAOS IS THE CLASSROOM.</span>
            </h1>
            
            <p className="mt-6 max-w-xl text-xl text-gray-300 font-sans border-l-4 border-ecoBaby pl-6 bg-black/40 backdrop-blur-sm p-4 transform rotate-1">
              <span className="text-white font-bold italic">Ecological Dynamics is the foundation.</span> <br/>
              We don't fix what isn't broken. We grow what is. <br/>
              Play, Learn, Grow.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-6">
              <Link 
                to="/teams"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-ecoBaby text-ecoNavy font-display font-bold text-2xl uppercase tracking-wider overflow-hidden transform hover:-rotate-2 transition-all duration-300 shadow-[6px_6px_0px_0px_#ffffff]"
              >
                <span className="relative z-10">Join The Movement</span>
                <ArrowRight className="ml-2 h-6 w-6 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                to="/philosophy"
                className="group inline-flex items-center justify-center px-8 py-4 border-4 border-white text-white font-display font-bold text-2xl uppercase tracking-wider hover:bg-white hover:text-ecoBlack transition-all duration-300 transform hover:rotate-2"
              >
                <span className="mr-2">Our DNA</span>
                <Info className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Right Visual Collage */}
          <div className="lg:w-2/5 relative hidden lg:block">
             <div className="relative w-full h-[600px]">
                {/* Image 1: Background Polaroid */}
                <div className="absolute top-10 right-10 w-64 h-80 bg-white p-3 shadow-2xl transform rotate-6 z-10">
                   <div className="w-full h-4/5 bg-gray-800 overflow-hidden grayscale contrast-125">
                      <img src="https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=400&auto=format&fit=crop" className="object-cover w-full h-full" />
                   </div>
                   <div className="mt-2 font-graffiti text-ecoBlack text-center text-xl">Play</div>
                   <div className="tape w-24 h-6 top-[-10px] left-[30%] bg-white/50 absolute rotate-2"></div>
                </div>

                {/* Image 2: Foreground Polaroid */}
                <div className="absolute top-40 left-0 w-72 h-96 bg-white p-3 shadow-2xl transform -rotate-3 z-20">
                   <div className="w-full h-4/5 bg-gray-800 overflow-hidden sepia contrast-125">
                      <img src="https://images.unsplash.com/photo-1519861531158-2283b35b7a73?q=80&w=400&auto=format&fit=crop" className="object-cover w-full h-full" />
                   </div>
                   <div className="mt-4 font-graffiti text-ecoBlack text-center text-2xl font-bold flex justify-between px-4">
                      <span>Grow</span>
                      <Zap className="h-6 w-6 text-ecoBlack fill-current" />
                   </div>
                   <div className="tape w-32 h-8 top-[-15px] right-[20%] bg-white/50 absolute -rotate-2"></div>
                </div>

                {/* Graffiti Elements over Collage */}
                <div className="absolute bottom-20 -right-10 z-30 font-graffiti text-6xl text-ecoBaby rotate-12 drop-shadow-md animate-float">
                   ECO
                </div>
                <div className="absolute top-20 -left-10 z-30">
                   <Zap size={48} className="text-ecoYellow fill-current animate-jitter" />
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
