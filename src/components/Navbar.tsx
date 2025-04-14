import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleHashLink = (hash: string) => {
    setIsOpen(false);
    window.location.href = `/#${hash}`;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="w-32 h-auto mr-2">
                <img 
                  src="/lovable-uploads/ad2030ae-f408-4d3a-9cfe-b559d5c5daec.png" 
                  alt="Soikot Logo" 
                  className="w-full h-auto"
                />
              </div>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-bengali-dark hover:text-bengali-red transition-colors duration-200">Home</a>
            <a href="#about" className="text-bengali-dark hover:text-bengali-red transition-colors duration-200">About</a>
            <a href="#events" className="text-bengali-dark hover:text-bengali-red transition-colors duration-200">Events</a>
            <a href="#culture" className="text-bengali-dark hover:text-bengali-red transition-colors duration-200">Culture</a>
            <a href="#contact" className="text-bengali-dark hover:text-bengali-red transition-colors duration-200">Contact</a>
            <Link to="/donate">
              <Button className="bg-bengali-red hover:bg-bengali-red/90">Donate</Button>
            </Link>
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
        "md:hidden fixed inset-0 z-[100] bg-white transition-transform duration-300 ease-in-out transform",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="absolute inset-0 bg-white/95 backdrop-blur-md"></div>
        <div className="relative z-10 p-4">
          <div className="flex justify-end">
            <button 
              onClick={toggleMenu}
              className="text-bengali-dark hover:text-bengali-red"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col space-y-4 mt-8">
            <div className="mx-auto w-40 mb-6">
              <img 
                src="/lovable-uploads/ad2030ae-f408-4d3a-9cfe-b559d5c5daec.png" 
                alt="Soikot Logo" 
                className="w-full h-auto"
              />
            </div>
            <a href="#home" className="text-bengali-dark hover:text-bengali-red text-lg py-2 border-b border-gray-100" onClick={() => handleHashLink('home')}>Home</a>
            <a href="#about" className="text-bengali-dark hover:text-bengali-red text-lg py-2 border-b border-gray-100" onClick={() => handleHashLink('about')}>About</a>
            <a href="#events" className="text-bengali-dark hover:text-bengali-red text-lg py-2 border-b border-gray-100" onClick={() => handleHashLink('events')}>Events</a>
            <a href="#culture" className="text-bengali-dark hover:text-bengali-red text-lg py-2 border-b border-gray-100" onClick={() => handleHashLink('culture')}>Culture</a>
            <a href="#contact" className="text-bengali-dark hover:text-bengali-red text-lg py-2 border-b border-gray-100" onClick={() => handleHashLink('contact')}>Contact</a>
            <Link to="/donate" onClick={toggleMenu}>
              <Button className="bg-bengali-red hover:bg-bengali-red/90 mt-4 w-full">Donate</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
