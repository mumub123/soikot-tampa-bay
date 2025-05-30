
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-bengali-dark text-white">
      <div className="container mx-auto px-4 md:px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <div className="flex items-center justify-center md:justify-start mb-2">
              <span className="text-2xl font-bold text-bengali-yellow mr-2">সৈকত</span>
              <span className="text-xl font-medium">Soikot</span>
            </div>
            <p className="text-gray-300 text-sm max-w-md">
              The Bengali Association of Tampa Bay, promoting and preserving Bengali culture, language, and traditions.
            </p>
          </div>
          
          <div className="text-center md:text-right mb-4 md:mb-0">
            <h4 className="text-lg font-medium mb-3 text-bengali-yellow">Resources</h4>
            <ul className="space-y-2">
              <li><a href="/by-laws" className="text-gray-300 hover:text-blue-300 transition-colors text-sm">By-Laws</a></li>
              <li><a href="/exec-committee" className="text-gray-300 hover:text-blue-300 transition-colors text-sm">Executive Committee</a></li>
              <li><a href="/sponsors" className="text-gray-300 hover:text-blue-300 transition-colors text-sm">Sponsors</a></li>
              <li><a href="/sponsorship-rates" className="text-gray-300 hover:text-blue-300 transition-colors text-sm">Sponsorship Rates</a></li>
              <li><a href="https://anyflip.com/bookcase/qdje" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-300 transition-colors text-sm">Probaho</a></li>
            </ul>
          </div>

          <div className="text-center md:text-right text-sm">
            <p className="text-gray-400 mb-1">
              © {new Date().getFullYear()} Soikot. All rights reserved.
            </p>
            <p className="text-gray-400">
              Soikot is a 501(c)(3) non-profit organization
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
