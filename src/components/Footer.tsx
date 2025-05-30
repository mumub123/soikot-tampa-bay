
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-bengali-dark text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center mb-6">
              <span className="text-3xl font-bold text-bengali-yellow mr-3">সৈকত</span>
              <span className="text-2xl font-medium">Soikot</span>
            </div>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              The Bengali Association of Tampa Bay, promoting and preserving Bengali culture, language, and traditions through community events and cultural programs.
            </p>
            <div className="flex items-center text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-2 text-bengali-red fill-current" />
              <span>for our Bengali community</span>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <h4 className="text-xl font-medium mb-6 text-bengali-yellow">Resources</h4>
            <ul className="space-y-3">
              <li><a href="/by-laws" className="text-gray-300 hover:text-blue-300 transition-colors text-lg">By-Laws</a></li>
              <li><a href="/exec-committee" className="text-gray-300 hover:text-blue-300 transition-colors text-lg">Executive Committee</a></li>
              <li><a href="/sponsors" className="text-gray-300 hover:text-blue-300 transition-colors text-lg">Sponsors</a></li>
              <li><a href="/sponsorship-rates" className="text-gray-300 hover:text-blue-300 transition-colors text-lg">Sponsorship Rates</a></li>
              <li><a href="https://anyflip.com/bookcase/qdje" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-300 transition-colors text-lg">Probaho</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Soikot. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Soikot is a 501(c)(3) non-profit organization
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
