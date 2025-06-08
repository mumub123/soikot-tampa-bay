
import React from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

const AllEventsNavbar = () => {
  return (
    <nav className="sticky top-0 z-[200] bg-white shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-18 h-auto">
              <img 
                src="/lovable-uploads/ad2030ae-f408-4d3a-9cfe-b559d5c5daec.png" 
                alt="Soikot Logo" 
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Close Button */}
          <Link 
            to="/" 
            className="text-bengali-dark hover:text-bengali-red transition-colors focus:outline-none"
          >
            <X size={24} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default AllEventsNavbar;
