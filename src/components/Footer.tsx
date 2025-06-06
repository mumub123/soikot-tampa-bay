
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-3">
              <div className="w-16 h-auto">
                <img 
                  src="/lovable-uploads/ad2030ae-f408-4d3a-9cfe-b559d5c5daec.png" 
                  alt="Soikot Logo" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            <p className="text-gray-200 text-sm max-w-md leading-relaxed">
              The Bengali Association of Tampa Bay, promoting and preserving Bengali culture, language, and traditions.
            </p>
          </div>
          
          {/* Resources Section */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-4 text-bengali-yellow">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="/by-laws" className="text-gray-200 hover:text-bengali-yellow transition-colors duration-300 text-sm flex items-center justify-center md:justify-start">
                  By-Laws
                </a>
              </li>
              <li>
                <a href="/exec-committee" className="text-gray-200 hover:text-bengali-yellow transition-colors duration-300 text-sm flex items-center justify-center md:justify-start">
                  Executive Committee
                </a>
              </li>
              <li>
                <a href="/sponsors" className="text-gray-200 hover:text-bengali-yellow transition-colors duration-300 text-sm flex items-center justify-center md:justify-start">
                  Sponsors
                </a>
              </li>
              <li>
                <a href="/sponsorship-rates" className="text-gray-200 hover:text-bengali-yellow transition-colors duration-300 text-sm flex items-center justify-center md:justify-start">
                  Sponsorship Rates
                </a>
              </li>
              <li>
                <a href="https://anyflip.com/bookcase/qdje" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-bengali-yellow transition-colors duration-300 text-sm flex items-center justify-center md:justify-start">
                  Probaho
                </a>
              </li>
            </ul>

            {/* Follow Us Section */}
            <div className="mt-8">
              <h5 className="text-lg font-medium mb-3 text-bengali-yellow">Follow Us</h5>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <a 
                  href="https://www.instagram.com/soikottampabay/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img 
                    src="/lovable-uploads/90e6dd90-3eb8-4808-9487-bb0c41f7b977.png" 
                    alt="Instagram" 
                    className="w-8 h-8"
                  />
                </a>
                <a 
                  href="https://www.youtube.com/@soikottampabay6527" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img 
                    src="/lovable-uploads/112e519c-ec0b-4ecd-8784-a18319be92cc.png" 
                    alt="YouTube" 
                    className="w-8 h-8"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="text-center md:text-right">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-gray-200 mb-2 text-sm font-medium">
                © {new Date().getFullYear()} Soikot
              </p>
              <p className="text-gray-300 text-xs">
                All rights reserved
              </p>
              <p className="text-gray-300 text-xs mt-2">
                501(c)(3) non-profit organization
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Border */}
      <div className="border-t border-bengali-yellow/20">
        <div className="container mx-auto px-4 md:px-6 py-3">
          <div className="text-center">
            <p className="text-xs text-gray-400">
              Preserving Bengali heritage for future generations
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
