import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GameList } from './components/GameList';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0b1e]">
      <Navbar />
      <main>
        <Hero />
        <GameList />
        <Contact />
      </main>
      <footer className="bg-[#0a0b1e] text-[#b8b8d0] py-8 border-t border-[#00f5ff]/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 STG GEGE V44. Libre à vous de jouer avec tout le monde.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;