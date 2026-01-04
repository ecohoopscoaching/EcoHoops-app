
import React, { useState } from 'react';
import { Menu, X, Dribbble, FlaskConical } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Philosophy', path: '/philosophy' },
    { name: 'Teams', path: '/teams' },
    { name: 'The Lab', path: '/lab' },
    { name: 'Coach AI', path: '/ai-coach' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-ecoBlack border-b-4 border-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3 group relative">
              <div className="absolute inset-0 bg-ecoBaby/50 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <Dribbble className="h-10 w-10 text-white relative z-10" />
              <div className="flex flex-col relative z-10">
                <span className="font-display font-bold text-4xl tracking-tighter text-white" style={{ textShadow: '2px 2px 0px #001c52' }}>
                  ECOHOOPS
                </span>
                <span className="font-scribble text-xs text-ecoBaby -mt-1 -rotate-2">Play, Learn, Grow</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 text-lg font-display font-bold uppercase tracking-wide transition-all duration-200 transform hover:-translate-y-1 flex items-center gap-2 ${
                    isActive(link.path)
                      ? 'text-ecoBlack bg-ecoBaby -rotate-2 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]'
                      : 'text-gray-300 hover:text-white hover:rotate-2'
                  }`}
                >
                  {link.name === 'The Lab' && <FlaskConical size={18} />}
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-ecoBaby focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-ecoBlack border-b-4 border-white relative z-50">
          <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 text-2xl font-display font-bold uppercase text-center ${
                  isActive(link.path)
                    ? 'bg-ecoBaby text-ecoBlack -rotate-1'
                    : 'text-white hover:text-ecoBaby'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// Fixed: Added missing default export
export default Navbar;