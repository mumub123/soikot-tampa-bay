
import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-[200] bg-white shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-24 h-auto">
              <img 
                src="/lovable-uploads/ad2030ae-f408-4d3a-9cfe-b559d5c5daec.png" 
                alt="Soikot Logo" 
                className="w-full h-auto"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-bengali-dark hover:text-bengali-red">Home</a>
            <Link to="/events" className="text-bengali-dark hover:text-bengali-red">Events</Link>
            <a href="#about" className="text-bengali-dark hover:text-bengali-red">About</a>
            <a href="#culture" className="text-bengali-dark hover:text-bengali-red">Culture</a>
            <a href="#contact" className="text-bengali-dark hover:text-bengali-red">Contact</a>
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

      {/* Mobile Modal Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-[9999] overflow-y-auto">
          <div className="flex flex-col p-4 h-full">
            <div className="flex justify-end">
              <button 
                onClick={toggleMenu}
                className="text-bengali-dark hover:text-bengali-red"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col space-y-4 mt-8">
              <div className="mx-auto w-32 mb-6">
                <img 
                  src="/lovable-uploads/ad2030ae-f408-4d3a-9cfe-b559d5c5daec.png" 
                  alt="Soikot Logo" 
                  className="w-full h-auto"
                />
              </div>
              <a href="#home" className="text-bengali-dark hover:text-bengali-red text-lg py-2 border-b" onClick={() => handleHashLink('home')}>Home</a>
              <Link to="/events" className="text-bengali-dark hover:text-bengali-red text-lg py-2 border-b" onClick={toggleMenu}>Events</Link>
              <a href="#about" className="text-bengali-dark hover:text-bengali-red text-lg py-2 border-b" onClick={() => handleHashLink('about')}>About</a>
              <a href="#culture" className="text-bengali-dark hover:text-bengali-red text-lg py-2 border-b" onClick={() => handleHashLink('culture')}>Culture</a>
              <a href="#contact" className="text-bengali-dark hover:text-bengali-red text-lg py-2 border-b" onClick={() => handleHashLink('contact')}>Contact</a>
              <Link to="/donate" onClick={toggleMenu}>
                <Button className="bg-bengali-red hover:bg-bengali-red/90 mt-4 w-full">Donate</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
