import React from 'react';
import { Mail, Github, Globe } from 'lucide-react';

export function Contact() {
  return (
    <div id="contact" className="bg-[#0a0b1e] text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#00f5ff]/5 bg-[radial-gradient(circle_at_50%_120%,rgba(0,245,255,0.1),rgba(255,0,255,0.05))]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#00f5ff] to-[#ff00ff] text-transparent bg-clip-text">
            Contact
          </h2>
          <p className="mt-4 text-lg text-[#b8b8d0]">
            Rejoignez la communauté STG GEGE V44
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center space-y-6">
          <a
            href="mailto:noannpiton@gmail.com"
            className="flex items-center text-[#b8b8d0] hover:text-[#00f5ff] transition-colors"
          >
            <Mail className="h-6 w-6 mr-2" />
            noannpiton@gmail.com
          </a>
          <a
            href="https://github.com/yourusername"
            className="flex items-center text-[#b8b8d0] hover:text-[#00f5ff] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-6 w-6 mr-2" />
            Suivez-nous sur GitHub
          </a>
        </div>
      </div>
    </div>
  );
}