import React from 'react';
import { Link } from 'react-router-dom';
import { Info } from 'lucide-react';

const PermanentToaster = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-bengali-red to-bengali-dark text-white px-4 py-3 shadow-lg">
      <div className="container mx-auto flex items-center justify-center text-center">
        <Info className="w-4 h-4 mr-2 flex-shrink-0" />
        <span className="text-sm font-medium">
          🎉 Durga Puja 2025 - October 3-5 at Indian Cultural Center | For details click 
          <Link 
            to="/durga-puja-details" 
            className="underline hover:text-white/80 ml-1"
          >
            here
          </Link>
          .
        </span>
      </div>
    </div>
  );
};

export default PermanentToaster;