import React from 'react';
import { Download, Users, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <div id="accueil" className="relative min-h-screen bg-[#0a0b1e] text-white pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0b1e]/50 to-[#0a0b1e]"></div>
      
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-[#00f5ff] to-[#ff00ff] text-transparent bg-clip-text">
              STG GEGE V44
            </span>
          </h1>
          <p className="mt-6 text-2xl font-light text-[#b8b8d0]">
            Libre à vous de jouer avec tout le monde
          </p>
          <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="#jeux" className="group relative px-8 py-4 bg-[#00f5ff] text-black rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00f5ff] to-[#ff00ff] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative flex items-center">
                <Download className="mr-2 h-5 w-5" />
                Découvrir les Jeux
              </span>
            </a>
            <div className="flex items-center space-x-8 text-[#b8b8d0]">
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>Communauté Active</span>
              </div>
              <div className="flex items-center">
                <Sparkles className="h-5 w-5 mr-2" />
                <span>100% Gratuit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}