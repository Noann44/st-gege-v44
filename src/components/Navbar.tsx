import React from 'react';
import { Menu, X, Gamepad2 } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-[#0a0b1e]/90 backdrop-blur-md text-white fixed w-full z-50 border-b border-[#00f5ff]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Gamepad2 className="h-8 w-8 text-[#00f5ff]" />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-[#00f5ff] to-[#ff00ff] text-transparent bg-clip-text">
              STG GEGE V44
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="hover:text-[#00f5ff] transition-colors">Accueil</a>
            <a href="#jeux" className="hover:text-[#00f5ff] transition-colors">Jeux</a>
            <a href="#categories" className="hover:text-[#00f5ff] transition-colors">Catégories</a>
            <a href="#contact" className="hover:text-[#00f5ff] transition-colors">Contact</a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#161832]/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#accueil" className="block px-3 py-2 hover:text-[#00f5ff] transition-colors">Accueil</a>
            <a href="#jeux" className="block px-3 py-2 hover:text-[#00f5ff] transition-colors">Jeux</a>
            <a href="#categories" className="block px-3 py-2 hover:text-[#00f5ff] transition-colors">Catégories</a>
            <a href="#contact" className="block px-3 py-2 hover:text-[#00f5ff] transition-colors">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}