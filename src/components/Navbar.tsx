
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-bold text-bengali-red mr-2">সৈকত</span>
              <span className="text-xl font-medium text-bengali-dark">Soikot</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-bengali-dark hover:text-bengali-red transition-colors duration-200">Home</a>
            <a href="#about" className="text-bengali-dark hover:text-bengali-red transition-colors duration-200">About</a>
            <a href="#events" className="text-bengali-dark hover:text-bengali-red transition-colors duration-200">Events</a>
            <a href="#programs" className="text-bengali-dark hover:text-bengali-red transition-colors duration-200">Programs</a>
            <a href="#culture" className="text-bengali-dark hover:text-bengali-red transition-colors duration-200">Culture</a>
            <a href="#gallery" className="text-bengali-dark hover:text-bengali-red transition-colors duration-200">Gallery</a>
            <a href="#contact" className="text-bengali-dark hover:text-bengali-red transition-colors duration-200">Contact</a>
            <Button className="bg-bengali-red hover:bg-bengali-red/90">Donate</Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-bengali-dark hover:text-bengali-red focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden fixed inset-0 z-40 bg-white p-4 transition-transform duration-300 ease-in-out transform",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex justify-end">
          <button 
            onClick={toggleMenu}
            className="text-bengali-dark hover:text-bengali-red"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col space-y-4 mt-8">
          <a href="#home" className="text-bengali-dark hover:text-bengali-red text-lg py-2 border-b border-gray-100" onClick={toggleMenu}>Home</a>
          <a href="#about" className="text-bengali-dark hover:text-bengali-red text-lg py-2 border-b border-gray-100" onClick={toggleMenu}>About</a>
          <a href="#events" className="text-bengali-dark hover:text-bengali-red text-lg py-2 border-b border-gray-100" onClick={toggleMenu}>Events</a>
          <a href="#programs" className="text-bengali-dark hover:text-bengali-red text-lg py-2 border-b border-gray-100" onClick={toggleMenu}>Programs</a>
          <a href="#culture" className="text-bengali-dark hover:text-bengali-red text-lg py-2 border-b border-gray-100" onClick={toggleMenu}>Culture</a>
          <a href="#gallery" className="text-bengali-dark hover:text-bengali-red text-lg py-2 border-b border-gray-100" onClick={toggleMenu}>Gallery</a>
          <a href="#contact" className="text-bengali-dark hover:text-bengali-red text-lg py-2 border-b border-gray-100" onClick={toggleMenu}>Contact</a>
          <Button className="bg-bengali-red hover:bg-bengali-red/90 mt-4">Donate</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
