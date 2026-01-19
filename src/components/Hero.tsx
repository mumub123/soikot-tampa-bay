import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-b from-white via-bengali-orange/15 to-bengali-light/40 overflow-hidden">
      <div className="absolute inset-0 bg-bengali-pattern opacity-10"></div>
      <div className="container mx-auto px-4 md:px-6 py-4 md:py-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="block text-bengali-red font-bengali">Soikot</span>
            
            <span className="block text-2xl md:text-3xl text-bengali-dark mt-2">Bengali Association of Tampa Bay</span>
          </h1>
          <p className="text-sm md:text-base text-bengali-dark/80 my-4 max-w-2xl mx-auto">
            Celebrating and preserving Bengali culture, language, and traditions through community events, education, and humanitarian efforts.
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 mb-6">
            <a href="https://www.facebook.com/soikotflorida" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full text-white transition-colors duration-300 shadow-lg hover:shadow-xl">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/soikotflorida" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 p-3 rounded-full text-white transition-all duration-300 shadow-lg hover:shadow-xl">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com/@soikottampabay6527" target="_blank" rel="noopener noreferrer" className="relative group transition-all duration-300">
              <img 
                src="/lovable-uploads/9f4f36a8-f7e0-48d2-8951-51cd16731586.png" 
                alt="YouTube" 
                className="w-11 h-11 rounded-full"
              />
              <div className="absolute inset-0 bg-red-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Featured Events Section */}
          <div className="my-6 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Saraswati Puja Tile */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/20">
              <div className="text-center pt-4 pb-2 px-4">
                <h3 className="text-2xl md:text-3xl font-bold text-bengali-dark mb-2">
                  <span className="bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">Saraswati Puja 2026</span>
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto"></div>
              </div>
              
              <div className="relative h-48">
                <img 
                  src="/lovable-uploads/0f0a6ef1-6161-4b80-af4d-c09d805ba737.jpeg" 
                  alt="Saraswati Puja" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-bengali-dark/70 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">January 24, 2026</span>
                </div>
                <div className="flex items-center text-bengali-dark/70 mb-2">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">11:00 AM - 10:00 PM</span>
                </div>
                <div className="flex items-center text-bengali-dark/70 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">Indian Cultural Center</span>
                </div>
                <p className="text-bengali-dark/80 mb-3">
                  Join us for Saraswati Puja as we honor the goddess of knowledge and learning with traditional ceremonies and cultural performances.
                </p>
                <div className="bg-bengali-light/50 rounded-lg p-3 mb-4 text-center">
                  <p className="text-sm font-semibold text-bengali-red mb-1">FREE for Gold Sponsors & above</p>
                  <p className="text-sm text-bengali-dark/80">Regular Subscription: Family $200 | Adult $100 | Student $40</p>
                </div>
                <Link to="/saraswati-puja-details">
                  <Button className="w-full bg-bengali-red hover:bg-bengali-red/90">View Details</Button>
                </Link>
              </div>
            </div>

            {/* Rabindra Jayanti Tile */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/20">
              <div className="text-center pt-4 pb-2 px-4">
                <h3 className="text-2xl md:text-3xl font-bold text-bengali-dark mb-2">
                  <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Rabindra Jayanti 2026</span>
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto"></div>
              </div>
              
              <div className="relative h-48">
                <img 
                  src="/lovable-uploads/90e6dd90-3eb8-4808-9487-bb0c41f7b977.png" 
                  alt="Rabindra Jayanti" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-bengali-dark/70 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">May 9, 2026</span>
                </div>
                <div className="flex items-center text-bengali-dark/70 mb-2">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">4:00 PM - 9:00 PM</span>
                </div>
                <div className="flex items-center text-bengali-dark/70 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">Land O' Lakes Community Center</span>
                </div>
                <p className="text-bengali-dark/80 mb-3">
                  Celebrate the birth anniversary of Rabindranath Tagore with music, poetry, and cultural performances honoring the Nobel laureate.
                </p>
                <div className="bg-bengali-light/50 rounded-lg p-3 mb-4 text-center">
                  <p className="text-sm font-semibold text-bengali-red mb-1">FREE for Gold Sponsors & above</p>
                  <p className="text-sm text-bengali-dark/80">Subscription: TBD</p>
                </div>
                <Button className="w-full bg-bengali-red hover:bg-bengali-red/90" disabled>Coming Soon</Button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/events">
              <Button className="bg-white hover:bg-bengali-red/10 text-bengali-red border border-bengali-red px-6 py-2 text-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-light hover:border-bengali-red/80">
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
