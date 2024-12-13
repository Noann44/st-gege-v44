import React from 'react';
import { Code, Palette, Globe, MessageSquare } from 'lucide-react';

export function Services() {
  const services = [
    {
      title: 'Développement Web',
      description: 'Création de sites web modernes et réactifs',
      icon: Code,
    },
    {
      title: 'Design UI/UX',
      description: 'Interfaces utilisateur intuitives et esthétiques',
      icon: Palette,
    },
    {
      title: 'SEO',
      description: 'Optimisation pour les moteurs de recherche',
      icon: Globe,
    },
    {
      title: 'Support Client',
      description: 'Assistance technique 24/7',
      icon: MessageSquare,
    },
  ];

  return (
    <div id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Nos Services</h2>
          <p className="mt-4 text-lg text-gray-600">
            Des solutions complètes pour votre présence numérique
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-lg shadow-lg p-6 hover:transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center">
                <service.icon className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900 text-center">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}