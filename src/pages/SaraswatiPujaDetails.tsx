import React, { useState } from "react";
import AllEventsNavbar from "@/components/AllEventsNavbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, ExternalLink, UtensilsCrossed, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
const SaraswatiPujaDetails = () => {
  const [showFoodFlyer, setShowFoodFlyer] = useState(false);

  return (
    <div className="font-bengali">
      <AllEventsNavbar />
      <main>
        {/* Hero Image */}
        <div className="relative w-full h-64 md:h-80 lg:h-[500px] overflow-hidden">
          <img
            src="/lovable-uploads/saraswati-puja.jpeg"
            alt="Saraswati Puja 2026 - Goddess Saraswati"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>

        <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-bengali-light via-white to-bengali-light/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-5xl font-bold text-bengali-dark">
                <span className="bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">
                  Saraswati Puja 2026
                </span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto mt-4 mb-6"></div>
              <p className="text-bengali-dark/80 max-w-3xl mx-auto mb-6">
                Join us for Saraswati Puja as we honor the goddess of knowledge and learning with traditional ceremonies
                and cultural performances.
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
                      Saraswati Puja is a celebration dedicated to Goddess Saraswati, the deity of knowledge, music,
                      arts, and learning. This auspicious occasion is particularly significant for students and scholars
                      who seek blessings for academic success.
                    </p>
                    <p>
                      The celebration includes traditional puja rituals, cultural performances, and a community feast
                      featuring authentic Bengali cuisine.
                    </p>

                    <div className="mt-6 pt-6 border-t border-bengali-red/20">
                      <h4 className="text-lg font-semibold text-bengali-dark mb-4 text-center">Event Schedule</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-center">
                        <div className="bg-bengali-light/50 rounded-lg p-3">
                          <span className="font-medium text-bengali-dark">Pujo</span>
                          <span className="text-bengali-red ml-2">11:00 AM</span>
                        </div>
                        <div className="bg-bengali-light/50 rounded-lg p-3">
                          <span className="font-medium text-bengali-dark">Haate Khori</span>
                          <span className="text-bengali-red ml-2">12:30 PM</span>
                        </div>
                        <div className="bg-bengali-light/50 rounded-lg p-3">
                          <span className="font-medium text-bengali-dark">Anjali</span>
                          <span className="text-bengali-red ml-2">1:00 PM</span>
                        </div>
                        <div className="bg-bengali-light/50 rounded-lg p-3">
                          <span className="font-medium text-bengali-dark">Bhog Prosad</span>
                          <span className="text-bengali-red ml-2">2:00 PM</span>
                        </div>
                        <div className="bg-bengali-light/50 rounded-lg p-3">
                          <span className="font-medium text-bengali-dark">Sit and Draw</span>
                          <span className="text-bengali-red ml-2">3:30 PM</span>
                        </div>
                        <div className="bg-bengali-light/50 rounded-lg p-3">
                          <span className="font-medium text-bengali-dark">Quiz</span>
                          <span className="text-bengali-red ml-2">5:00 PM</span>
                        </div>
                        <div className="bg-bengali-light/50 rounded-lg p-3">
                          <span className="font-medium text-bengali-dark">Cultural Program</span>
                          <span className="text-bengali-red ml-2">6:30 PM onwards</span>
                        </div>
                        <div className="bg-bengali-light/50 rounded-lg p-3">
                          <span className="font-medium text-bengali-dark">Dinner</span>
                          <span className="text-bengali-red ml-2">9:00 PM</span>
                        </div>
                      </div>
                    </div>

                    {/* Food Menu Flyer */}
                    <div className="mt-6 pt-6 border-t border-bengali-red/20">
                      <h4 className="text-lg font-semibold text-bengali-dark mb-4 text-center flex items-center justify-center">
                        <UtensilsCrossed className="w-5 h-5 mr-2 text-bengali-red" />
                        Food Menu
                      </h4>
                      <div className="flex justify-center">
                        <img
                          src="/lovable-uploads/saraswati-puja-food-menu.jpg"
                          alt="Saraswati Puja 2026 Food Menu"
                          className="w-full max-w-md rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-shadow duration-300 border border-bengali-red/20"
                          onClick={() => setShowFoodFlyer(true)}
                        />
                      </div>
                      <p className="text-center text-sm text-bengali-dark/60 mt-2">Click to enlarge</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Back to Events */}
            <div className="text-center">
              <Link to="/events">
                <Button
                  variant="outline"
                  className="text-bengali-red border-bengali-red hover:bg-bengali-red hover:text-white"
                >
                  ← Back to All Events
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Food Flyer Modal */}
        <Dialog open={showFoodFlyer} onOpenChange={setShowFoodFlyer}>
          <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
            <button
              onClick={() => setShowFoodFlyer(false)}
              className="absolute top-2 right-2 z-10 bg-white/90 rounded-full p-2 hover:bg-white transition-colors"
            >
              <X className="w-6 h-6 text-bengali-dark" />
            </button>
            <img
              src="/lovable-uploads/saraswati-puja-food-menu.jpg"
              alt="Saraswati Puja 2026 Food Menu"
              className="w-full h-auto rounded-lg"
            />
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
};

export default SaraswatiPujaDetails;
