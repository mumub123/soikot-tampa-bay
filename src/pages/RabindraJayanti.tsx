
import React, { useEffect } from 'react';
import AllEventsNavbar from '@/components/AllEventsNavbar';
import { Calendar, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const RabindraJayanti = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-bengali">
      <AllEventsNavbar />
      <main>
        <section className="py-16 md:py-24 bg-bengali-light">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden mb-8">
                <img 
                  src="/lovable-uploads/90e6dd90-3eb8-4808-9487-bb0c41f7b977.png"
                  alt="Rabindra Jayanti Celebration"
                  className="w-full h-[300px] md:h-[400px] object-cover"
                />
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h1 className="text-3xl md:text-5xl font-bold text-bengali-dark mb-4">Rabindra Jayanti</h1>
                <p className="text-lg md:text-xl text-bengali-dark/80 mb-8">
                  Celebrating the birth anniversary of Rabindranath Tagore
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-6 h-6 text-bengali-red" />
                    <div>
                      <p className="text-sm text-bengali-dark/60">Date</p>
                      <p className="text-bengali-dark font-medium">May 3, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-bengali-red" />
                    <div>
                      <p className="text-sm text-bengali-dark/60">Time</p>
                      <p className="text-bengali-dark font-medium">5:00 PM - 9:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-bengali-red" />
                    <div>
                      <p className="text-sm text-bengali-dark/60">Location</p>
                      <a 
                        href="https://www.google.com/maps/place/Land+O'+Lakes+Heritage+Park"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-bengali-dark font-medium hover:text-bengali-red"
                      >
                        Land O' Lakes Heritage Park
                      </a>
                    </div>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-bold text-bengali-dark mb-4">About the Event</h2>
                  <p className="text-bengali-dark/80 mb-4">
                    Join us for a special cultural program commemorating the birth anniversary of Rabindranath Tagore, 
                    the legendary Bengali polymath who reshaped Bengali literature and music. The evening will be filled 
                    with performances celebrating his profound legacy.
                  </p>

                  <h3 className="text-xl font-bold text-bengali-dark mb-3">Program Highlights</h3>
                  <ul className="list-disc pl-6 text-bengali-dark/80 mb-6">
                    <li>Rabindra Sangeet performances</li>
                    <li>Dance recitals based on Tagore's works</li>
                    <li>Poetry recitations</li>
                    <li>Theatrical presentations</li>
                    <li>Cultural activities for children</li>
                  </ul>

                  <h3 className="text-xl font-bold text-bengali-dark mb-3">What to Expect</h3>
                  <ul className="list-disc pl-6 text-bengali-dark/80 mb-6">
                    <li>Traditional Bengali refreshments followed by dinner</li>
                    <li>Interactive cultural activities</li>
                    <li>Photo opportunities</li>
                    <li>Community gathering</li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                  <h3 className="text-xl font-bold text-bengali-dark mb-4">Registration & Donation</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-bengali-red" />
                      <span className="text-bengali-dark">$25 per adult</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-bengali-red" />
                      <span className="text-bengali-dark">Free for Gold, Diamond, Platinum, and Grand Sponsors</span>
                    </div>
                  </div>
                </div>
                <Link to="/donate">
                  <Button className="bg-bengali-red hover:bg-bengali-red/90">
                    Register Now
                  </Button>
                </Link>
                <p className="mt-4 text-sm text-bengali-dark/60">
                  Registration required for attendance. Limited seats available.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default RabindraJayanti;
