
import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Intro = () => {
  return (
    <section id="home" className="relative bg-gradient-to-r from-bengali-red/5 to-bengali-orange/5 overflow-hidden">
      <div className="absolute inset-0 bg-bengali-pattern opacity-10"></div>
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="block text-bengali-red font-bengali">Soikot</span>
            <span className="block text-2xl md:text-3xl text-bengali-dark mt-2">Bengali Association of Tampa Bay</span>
          </h1>
          <p className="text-sm md:text-base text-bengali-dark/80 my-6 max-w-2xl mx-auto">
            Celebrating and preserving Bengali culture, language, and traditions through community events, education, and humanitarian efforts.
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4">
            <a href="https://www.facebook.com/soikotflorida" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full text-white transition-colors duration-300 shadow-lg hover:shadow-xl">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/soikotflorida" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 p-3 rounded-full text-white transition-all duration-300 shadow-lg hover:shadow-xl">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com/@soikottampabay6527" target="_blank" rel="noopener noreferrer" className="relative group transition-all duration-300">
              <img 
                src="/lovable-uploads/9f4f36a8-f7e0-48d2-8951-51cd16731586.png" 
                alt="YouTube" 
                className="w-11 h-11 rounded-full"
              />
              <div className="absolute inset-0 bg-red-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-8 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Intro;
