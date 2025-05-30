
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Users, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-bengali-light via-white to-bengali-light py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/8f441cdb-2886-4773-a154-73ae64193a5c.png" 
              alt="Soikot Logo" 
              className="w-48 md:w-64 h-auto mx-auto"
            />
          </div>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-bengali-dark mb-6">
            Bengali Association of Tampa Bay
          </h1>
          
          <p className="text-lg md:text-xl text-bengali-dark/80 max-w-3xl mx-auto mb-8">
            Celebrating Bengali culture, language, and traditions through community events, 
            cultural programs, and educational initiatives in the Tampa Bay area.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/events">
              <Button className="bg-bengali-red hover:bg-bengali-red/90 text-white px-8 py-3 text-lg">
                Upcoming Events
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            
            <Link to="/donate">
              <Button variant="outline" className="border-bengali-red text-bengali-red hover:bg-bengali-red hover:text-white px-8 py-3 text-lg">
                Support Us
                <Heart className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <Calendar className="w-8 h-8 text-bengali-red mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-bengali-dark mb-2">Cultural Events</h3>
              <p className="text-bengali-dark/70">
                Join us for traditional festivals, cultural programs, and community celebrations throughout the year.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <Users className="w-8 h-8 text-bengali-red mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-bengali-dark mb-2">Community</h3>
              <p className="text-bengali-dark/70">
                Connect with fellow Bengali families and friends in the Tampa Bay area through our vibrant community.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <Heart className="w-8 h-8 text-bengali-red mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-bengali-dark mb-2">Heritage</h3>
              <p className="text-bengali-dark/70">
                Preserve and promote Bengali language, literature, arts, and traditions for future generations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
