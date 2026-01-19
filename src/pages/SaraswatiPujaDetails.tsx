import React from 'react';
import AllEventsNavbar from '@/components/AllEventsNavbar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const SaraswatiPujaDetails = () => {
  return (
    <div className="font-bengali">
      <AllEventsNavbar />
      <main>
        {/* Hero Image */}
        <div className="relative w-full h-64 md:h-80 lg:h-[500px] overflow-hidden">
          <img 
            src="/lovable-uploads/0f0a6ef1-6161-4b80-af4d-c09d805ba737.jpeg" 
            alt="Saraswati Puja 2026 - Goddess Saraswati"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>
        
        <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-bengali-light via-white to-bengali-light/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-5xl font-bold text-bengali-dark">
                <span className="bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">Saraswati Puja 2026</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto mt-4 mb-6"></div>
              <p className="text-bengali-dark/80 max-w-3xl mx-auto mb-6">
                Join us for Saraswati Puja as we honor the goddess of knowledge and learning with traditional ceremonies and cultural performances.
              </p>
              
              {/* Basic Event Info */}
              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto border border-bengali-red/20">
                <div className="space-y-3">
                  <div className="flex items-center justify-center text-bengali-dark">
                    <Calendar className="w-5 h-5 mr-3 text-bengali-red" />
                    <div>
                      <strong>Date:</strong> January 24, 2026
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center text-bengali-dark">
                    <Clock className="w-5 h-5 mr-3 text-bengali-red" />
                    <div>
                      <strong>Time:</strong> 11:00 AM - 10:00 PM
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center text-bengali-dark">
                    <MapPin className="w-5 h-5 mr-3 text-bengali-red" />
                    <div className="text-center">
                      <strong>Location:</strong> Indian Cultural Center
                      <a
                        href="https://maps.app.goo.gl/x6evEUHo7M4oF9A48"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center ml-2 text-bengali-red hover:text-bengali-red/80"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Subscription Rates */}
            <div className="bg-bengali-light/50 rounded-lg p-6 max-w-2xl mx-auto mb-12 border border-bengali-red/20">
              <h3 className="text-xl font-bold text-bengali-dark mb-4 text-center">Subscription Rates</h3>
              <p className="text-center text-bengali-red font-semibold mb-2">FREE for Gold Sponsors & above</p>
              <p className="text-center text-bengali-dark/80">
                Regular Subscription: Family $200 | Adult $100 | Student $40
              </p>
            </div>
            
            <div className="flex justify-center mb-12">
              {/* Event Details Card */}
              <Card className="border-none shadow-lg w-full max-w-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-bengali-dark mb-6 text-center">Event Highlights</h3>
                  
                  <div className="space-y-4 text-bengali-dark/80">
                    <p>
                      Saraswati Puja is a celebration dedicated to Goddess Saraswati, the deity of knowledge, music, arts, and learning. 
                      This auspicious occasion is particularly significant for students and scholars who seek blessings for academic success.
                    </p>
                    <p>
                      The celebration includes traditional puja rituals, cultural performances, and a community feast featuring authentic Bengali cuisine.
                    </p>
                    <p className="text-center text-bengali-red font-medium">
                      More details coming soon!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Back to Events */}
            <div className="text-center">
              <Link to="/events">
                <Button variant="outline" className="text-bengali-red border-bengali-red hover:bg-bengali-red hover:text-white">
                  ← Back to All Events
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SaraswatiPujaDetails;
