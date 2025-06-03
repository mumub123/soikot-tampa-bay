import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-r from-bengali-red/10 to-bengali-orange/10 overflow-hidden">
      <div className="absolute inset-0 bg-bengali-pattern opacity-10"></div>
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="block text-bengali-red font-bengali">Soikot</span>
            
            <span className="block text-2xl md:text-3xl text-bengali-dark mt-2">Bengali Association of Tampa Bay</span>
          </h1>
          <p className="text-sm md:text-base text-bengali-dark/80 my-4 max-w-2xl mx-auto">
            Celebrating and preserving Bengali culture, language, and traditions through community events, education, and humanitarian efforts.
          </p>

          {/* Featured Event Section */}
          <div className="my-6 w-full max-w-5xl">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-4 md:p-6 mb-4 border border-white/20">
              <div className="text-center mb-4">
                <h3 className="text-3xl md:text-4xl font-bold text-bengali-dark mb-2">
                  <span className="bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">Durga Puja 2025</span>
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto mb-4"></div>
              </div>
              <p className="text-sm md:text-base text-bengali-dark/80 mb-3 max-w-xl mx-auto">
                Join us for the biggest Bengali festival of the year as we celebrate Durga Puja with religious ceremonies, cultural programs, and community feasts.
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                {/* Durga Image with Event Details */}
                <div className="space-y-3">
                  <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img 
                      src="/lovable-uploads/1815910f-4a65-465a-977c-b7adf6a978b0.png" 
                      alt="Maa Durga" 
                      className="w-full h-64 object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white font-semibold text-base drop-shadow-lg">Durga Puja</p>
                    </div>
                  </div>
                  
                  {/* Event Details under Durga photo */}
                  <div className="space-y-2 text-left">
                    <div className="flex items-center text-bengali-dark/70">
                      <Calendar className="w-4 h-4 mr-2 text-bengali-red" />
                      <span className="text-sm md:text-base font-medium">October 3-5, 2025</span>
                    </div>
                    <div className="flex items-center text-bengali-dark/70">
                      <Clock className="w-4 h-4 mr-2 text-bengali-red" />
                      <span className="text-sm md:text-base font-medium">11:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex items-center text-bengali-dark/70">
                      <MapPin className="w-4 h-4 mr-2 text-bengali-red" />
                      <span className="text-sm md:text-base font-medium">Indian Cultural Center</span>
                      <a 
                        href="https://www.google.com/maps/place/Indian+Cultural+Center/@28.0453,-82.5385749,16z/data=!3m1!4b1!4m6!3m5!1s0x88c2c1b69f9c720d:0x4babf99abffac69!8m2!3d28.0453!4d-82.536!16s%2Fg%2F1thd7ggd?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center ml-2 text-bengali-red hover:text-bengali-red/80"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Madhubanti Bagchi Image with Introduction */}
                <div className="space-y-3">
                  <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img 
                      src="/lovable-uploads/00670309-0561-4168-b033-7e0f79ffbc59.png" 
                      alt="Madhubanti Bagchi" 
                      className="w-full h-64 object-cover object-top transform group-hover:scale-95 transition-transform duration-300"
                    />
                    <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white font-semibold text-base drop-shadow-lg">Madhubanti Bagchi</p>
                    </div>
                  </div>
                  
                  {/* Introduction text under Madhubanti's photo */}
                  <div className="text-left">
                    <p className="text-sm md:text-base text-bengali-dark/80">
                      Don't miss the musical extravaganza with <span className="font-semibold text-bengali-red">Madhubanti Bagchi</span> on Sunday, October 5 — a soulful evening that promises to uplift your spirit and celebrate the joy of Durga Puja!
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-center space-y-2">
                <Button className="bg-bengali-red hover:bg-bengali-red/90" disabled>Details Coming Soon</Button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/events">
              <Button className="bg-white hover:bg-gray-50 text-bengali-red border border-bengali-red px-6 py-2 text-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-light">
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-8 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
