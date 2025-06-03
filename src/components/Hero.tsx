
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
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="block text-bengali-red font-bengali">Soikot</span>
            
            <span className="block text-2xl md:text-3xl text-bengali-dark mt-2">Bengali Association of Tampa Bay</span>
          </h1>
          <p className="text-lg md:text-xl text-bengali-dark/80 my-8 max-w-2xl mx-auto">
            Celebrating and preserving Bengali culture, language, and traditions through community events, education, and humanitarian efforts.
          </p>

          {/* Featured Event Section */}
          <div className="my-12 w-full max-w-4xl">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-8 mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-bengali-dark mb-6">
                <span className="text-bengali-red">Durga Puja 2025</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Durga Image */}
                <div className="relative overflow-hidden rounded-lg shadow-md">
                  <img 
                    src="/lovable-uploads/fdef4dcd-a5aa-4946-a601-78714e4fcaee.png" 
                    alt="Maa Durga" 
                    className="w-full h-64 object-cover object-center"
                  />
                </div>
                
                {/* Madhubanti Bagchi Image */}
                <div className="relative overflow-hidden rounded-lg shadow-md">
                  <img 
                    src="/lovable-uploads/78d61cf1-6de9-48cf-b963-7ac07fc30f5b.png" 
                    alt="Madhubanti Bagchi" 
                    className="w-full h-64 object-cover object-center"
                  />
                </div>
              </div>
              
              <p className="text-lg text-bengali-dark/80 mb-4">
                Enjoy a spectacular musical evening with <span className="font-semibold text-bengali-red">Madhubanti Bagchi</span>
              </p>
              
              <a 
                href="#" 
                className="text-bengali-red hover:text-bengali-red/80 underline pointer-events-none opacity-60 cursor-not-allowed"
                aria-disabled="true"
              >
                Details coming soon
              </a>
            </div>
          </div>

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
