
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-bengali-dark text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-bengali-red mr-2">সৈকত</span>
              <span className="text-xl font-medium">Soikot</span>
            </div>
            <p className="text-gray-300 mb-4">
              The Bengali Association of Tampa Bay, promoting and preserving Bengali culture, language, and traditions.
            </p>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Soikot. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-bengali-red transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-bengali-red transition-colors">About</a></li>
              <li><a href="#events" className="text-gray-300 hover:text-bengali-red transition-colors">Events</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-bengali-red transition-colors">Gallery</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-bengali-red transition-colors">Bengali Library</a></li>
              <li><a href="#" className="text-gray-300 hover:text-bengali-red transition-colors">Cultural Resources</a></li>
              <li><a href="#" className="text-gray-300 hover:text-bengali-red transition-colors">Language Classes</a></li>
              <li><a href="#" className="text-gray-300 hover:text-bengali-red transition-colors">Newsletter</a></li>
              <li><a href="#" className="text-gray-300 hover:text-bengali-red transition-colors">Volunteer</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter to stay updated with our events and activities.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-grow px-4 py-2 text-bengali-dark rounded-l focus:outline-none"
              />
              <button className="bg-bengali-red hover:bg-bengali-red/90 px-4 py-2 rounded-r transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            Soikot is a 501(c)(3) non-profit organization
          </p>
          
          <div className="flex items-center">
            <span className="text-gray-400 text-sm">Made with</span>
            <Heart className="w-4 h-4 text-bengali-red mx-1" />
            <span className="text-gray-400 text-sm">for the Bengali community</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
