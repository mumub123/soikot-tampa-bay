import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToEvents = () => {
    const eventsSection = document.getElementById('events');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-r from-bengali-red/10 to-bengali-orange/10 overflow-hidden">
      <div className="absolute inset-0 bg-bengali-pattern opacity-10"></div>
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="w-56 md:w-72 mb-6">
            <img 
              src="/lovable-uploads/ad2030ae-f408-4d3a-9cfe-b559d5c5daec.png" 
              alt="Soikot Logo" 
              className="w-full h-auto"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-bengali-dark">
            <span className="block mt-2">Soikot—Bengali Association of Tampa Bay</span>
          </h1>
          <p className="text-lg md:text-xl text-bengali-dark/80 my-8 max-w-2xl mx-auto">
            Celebrating and preserving Bengali culture, language, and traditions through community events, education, and humanitarian efforts.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              className="bg-bengali-red hover:bg-bengali-red/90 text-white"
              onClick={scrollToEvents}
            >
              Upcoming Events
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
