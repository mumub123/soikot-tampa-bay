
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
          <div className="my-12 w-full max-w-5xl">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12 mb-8 border border-white/20">
              <h2 className="text-3xl md:text-4xl font-bold text-bengali-dark mb-8">
                <span className="text-bengali-red">Durga Puja 2025</span>
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Durga Image */}
                <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img 
                    src="/lovable-uploads/e18bfc3e-75e0-4611-ba42-cb68164d6c4e.png" 
                    alt="Maa Durga" 
                    className="w-full h-80 object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-semibold text-lg drop-shadow-lg">Maa Durga</p>
                  </div>
                </div>
                
                {/* Madhubanti Bagchi Image */}
                <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img 
                    src="/lovable-uploads/00670309-0561-4168-b033-7e0f79ffbc59.png" 
                    alt="Madhubanti Bagchi" 
                    className="w-full h-80 object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-semibold text-lg drop-shadow-lg">Madhubanti Bagchi</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center space-y-4">
                <p className="text-lg md:text-xl text-bengali-dark/80 mb-6">
                  Enjoy a spectacular musical evening with <span className="font-semibold text-bengali-red">Madhubanti Bagchi</span>
                </p>
                
                <a 
                  href="#" 
                  className="inline-block text-bengali-red hover:text-bengali-red/80 underline pointer-events-none opacity-60 cursor-not-allowed text-lg"
                  aria-disabled="true"
                >
                  Click here for more details
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              className="bg-bengali-red hover:bg-bengali-red/90 text-white px-8 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
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
