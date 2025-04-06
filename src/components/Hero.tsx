
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-r from-bengali-red/10 to-bengali-orange/10 overflow-hidden">
      <div className="absolute inset-0 bg-bengali-pattern opacity-10"></div>
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-bengali-dark mb-4">
              <span className="text-bengali-red">সৈকত</span>
              <span className="block mt-2">Bengali Association of Tampa Bay</span>
            </h1>
            <p className="text-lg md:text-xl text-bengali-dark/80 mb-8 max-w-lg">
              Celebrating and preserving Bengali culture, language, and traditions through community events, education, and humanitarian efforts.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-bengali-red hover:bg-bengali-red/90 text-white">Upcoming Events</Button>
              <Button variant="outline" className="border-bengali-red text-bengali-red hover:bg-bengali-red/10">Learn More</Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-[300px] md:h-[450px] rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-bengali-blue to-bengali-red opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1580220183587-9a2a26b4f524?q=80&w=1974&auto=format&fit=crop" 
                alt="Durga Puja Celebration" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
