
import React from 'react';
import { Instagram, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ecoBlack text-white border-t-8 border-ecoNavy relative overflow-hidden">
      {/* Graffiti footer background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <div className="font-display font-bold text-9xl absolute -bottom-10 -left-10 text-white transform -rotate-12">ECO</div>
         <div className="font-display font-bold text-9xl absolute -top-10 -right-10 text-white transform rotate-12">HOOPS</div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-4xl font-display font-bold tracking-tighter mb-4 text-white uppercase">ECOHOOPS INC</h3>
            <p className="text-gray-400 text-sm leading-relaxed font-sans mb-4">
              <span className="text-white font-bold">EcoHoops for Kids Canada</span> (Non-Profit).<br/>
              Founded by Lead Performance Coach Adrian Sapp.
            </p>
            <div className="inline-block bg-white text-ecoBlack px-2 py-1 transform -rotate-2 font-graffiti text-lg">
               Play, Learn, Grow
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-xl font-display font-bold text-ecoBaby mb-6 uppercase">The Program</h4>
            <ul className="space-y-3 font-display text-lg tracking-wide">
              <li><span className="text-white hover:text-ecoBaby hover:translate-x-2 transition-transform cursor-pointer block">Elite Squads</span></li>
              <li><span className="text-white hover:text-ecoBaby hover:translate-x-2 transition-transform cursor-pointer block">The Lab Clinics</span></li>
              <li><span className="text-white hover:text-ecoBaby hover:translate-x-2 transition-transform cursor-pointer block">Methodology</span></li>
              <li><span className="text-white hover:text-ecoBaby hover:translate-x-2 transition-transform cursor-pointer block">Mindset Lab</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h4 className="text-xl font-display font-bold text-ecoBaby mb-6 uppercase">Link Up</h4>
            <div className="flex space-x-6">
              <a href="https://instagram.com/ecohoops" className="text-white hover:text-ecoBaby transform hover:scale-125 transition-transform">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-8 w-8" />
              </a>
              <a href="#" className="text-white hover:text-ecoBaby transform hover:scale-125 transition-transform">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-8 w-8" />
              </a>
              <a href="mailto:info@ecohoops.ca" className="text-white hover:text-ecoBaby transform hover:scale-125 transition-transform">
                <span className="sr-only">Email</span>
                <Mail className="h-8 w-8" />
              </a>
            </div>
            <div className="mt-8 text-xs text-gray-500 font-mono">
              &copy; 2025 EcoHoops for Kids Canada. Registered Non-Profit.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
