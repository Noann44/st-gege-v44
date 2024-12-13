import React from 'react';
import { Github, Download, Star } from 'lucide-react';
import { Game } from '../types/game';

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  return (
    <div className="group bg-[#161832] rounded-xl overflow-hidden shadow-lg hover:shadow-[#00f5ff]/20 transition-all duration-300 border border-[#00f5ff]/10 hover:border-[#00f5ff]/30">
      <div className="relative">
        <img src={game.imageUrl} alt={game.title} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#161832] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-white group-hover:text-[#00f5ff] transition-colors">
            {game.title}
          </h3>
          <span className="bg-[#00f5ff]/10 text-[#00f5ff] text-xs px-3 py-1 rounded-full border border-[#00f5ff]/20">
            {game.category}
          </span>
        </div>
        <p className="mt-2 text-[#b8b8d0]">{game.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {game.tags.map((tag) => (
            <span key={tag} className="bg-[#0a0b1e] text-[#b8b8d0] text-xs px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 flex justify-between">
          <a
            href={game.githubUrl}
            className="flex items-center text-[#b8b8d0] hover:text-[#00f5ff] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5 mr-2" />
            Code Source
          </a>
          <a
            href={game.githubUrl + '/archive/main.zip'}
            className="flex items-center text-[#00f5ff] hover:text-[#ff00ff] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="h-5 w-5 mr-2" />
            Télécharger
          </a>
        </div>
      </div>
    </div>
  );
}