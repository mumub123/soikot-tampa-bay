import React, { useState } from 'react';
import AllEventsNavbar from '@/components/AllEventsNavbar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, ExternalLink, Phone, Mail, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const DurgaPujaDetails = () => {
  const [selectedFlyer, setSelectedFlyer] = useState<string | null>(null);

  const flyers = [
    {
      src: "/lovable-uploads/da0c6adb-fac4-4b3b-9b6f-63a738c42fb0.png", 
      title: "Featuring Madhubanti Bagchi",
      description: "Oct 5, 2025 at 5:00 pm"
    },
    {
      src: "/lovable-uploads/c3a41759-7497-475d-857f-d085285f7727.png",
      title: "Cultural Programs - Request for slots",
      description: "Oct 4, 2025 between 4:30 and 8:00 pm"
    },
    {
      src: "/lovable-uploads/139c7fe4-11fb-442a-a7d8-80276722a447.png",
      title: "Fashion Show - How to participate",
      description: "Oct 3, 2025 at 9:00 pm"
    },
    {
      src: "/lovable-uploads/3cbf2f89-c537-4a89-9d49-2cdf4f050aa5.png",
      title: "Prabaho - Our Online Magazine",
      description: "Article submission deadline: September 20"
    }
  ];

  return (
    <div className="font-bengali">
      <AllEventsNavbar />
      <main>
        {/* Hero Image */}
        <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden">
          <img 
            src="/lovable-uploads/74a0e9c4-2966-43b7-ac69-06aa3a563bed.png" 
            alt="Durga Puja 2025 - Beautiful decoration with Ma Durga and other deities"
            className="w-full h-full object-cover"
          />
        </div>
        
        <section className="py-8 md:py-12 bg-bengali-light">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-5xl font-bold text-bengali-dark">
                <span className="bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">Durga Puja 2025</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto mt-4 mb-6"></div>
              <p className="text-bengali-dark/80 max-w-3xl mx-auto mb-8">
                Join us for the biggest Bengali festival of the year celebrating the divine feminine power of Ma Durga.
              </p>
              
              {/* Basic Event Info */}
              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto border border-bengali-red/20">
                <div className="space-y-3">
                  <div className="flex items-center justify-center text-bengali-dark">
                    <Calendar className="w-5 h-5 mr-3 text-bengali-red" />
                    <div>
                      <strong>Date:</strong> October 3-5, 2025
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
                      <br />
                      <a 
                        href="https://www.google.com/maps/place/Indian+Cultural+Center/@28.0453,-82.5385749,16z/data=!3m1!4b1!4m6!3m5!1s0x88c2c1b69f9c720d:0x4babf99abffac69!8m2!3d28.0453!4d-82.536!16s%2Fg%2F1thd7ggd?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-bengali-red hover:text-bengali-red/80 inline-flex items-center"
                      >
                        View on Google Maps <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mb-12">
              {/* Event Details Card */}
              <Card className="border-none shadow-lg w-full max-w-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-bengali-dark mb-6 text-center">Event Schedule</h3>
                  
                  <div className="space-y-6 flex-grow">
                    {/* Oct 3 */}
                    <div>
                      <h4 className="text-lg font-semibold text-bengali-red mb-3">Oct 3</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-bengali-dark/70">11:00 am</span>
                          <span className="text-bengali-dark">Pandal Setup</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-bengali-dark/70">6:00 pm</span>
                          <span className="text-bengali-dark">Debir Bodhon</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-bengali-dark/70">7:30 pm</span>
                          <span className="text-bengali-dark">Pushpanjali</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-bengali-dark/70">8:00 pm</span>
                          <span className="text-bengali-dark">Fashion Show</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-bengali-dark/70">9:00 pm</span>
                          <span className="text-bengali-dark">Dinner</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-bengali-dark/70">10:00 pm</span>
                          <span className="text-bengali-dark">Natok</span>
                        </div>
                      </div>
                    </div>

                    {/* Oct 4 */}
                    <div>
                      <h4 className="text-lg font-semibold text-bengali-red mb-3">Oct 4</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-bengali-dark/70">10:30 am</span>
                          <span className="text-bengali-dark">Pujo</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-bengali-dark/70">1:30 pm</span>
                          <span className="text-bengali-dark">Pushpanjali</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-bengali-dark/70">2:00 pm</span>
                          <span className="text-bengali-dark">Prasad</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-bengali-dark/70">2:30 pm</span>
                          <span className="text-bengali-dark">Bhog</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-bengali-dark/70">4:00 pm</span>
                          <span className="text-bengali-dark">Cultural Program</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-bengali-dark/70">8:00 pm</span>
                          <span className="text-bengali-dark">Sandhya Arati</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-bengali-dark/70">8:30 pm</span>
                          <span className="text-bengali-dark">Dhunuchi Nach</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-bengali-dark/70">9:00 pm</span>
                          <span className="text-bengali-dark">Dinner</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-bengali-dark/70">10:00 pm</span>
                          <span className="text-bengali-dark">Cultural Program</span>
                        </div>
                      </div>
                    </div>

                    {/* Oct 5 */}
                    <div>
                      <h4 className="text-lg font-semibold text-bengali-red mb-3">Oct 5</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-bengali-dark/70">10:30 am</span>
                          <span className="text-bengali-dark">Pujo</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-bengali-dark/70">12:30 pm</span>
                          <span className="text-bengali-dark">Pushpanjali</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-bengali-dark/70">1:30 pm</span>
                          <span className="text-bengali-dark">Debi Baron & Sindur Khela</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-bengali-dark/70">3:00 pm</span>
                          <span className="text-bengali-dark">Lunch</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-bengali-dark/70">6:00 pm</span>
                          <span className="text-bengali-dark">Madhubanti Bagchi Live</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Donation Rates */}
            <Card className="border-none shadow-lg mb-12">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-bengali-dark mb-6 text-center">Donation Rates</h3>
                
                {/* Payment Information */}
                <div className="mb-6 p-4 bg-bengali-red/5 rounded-lg border border-bengali-red/20 text-center">
                  <p className="text-bengali-dark font-medium mb-3">
                    Zelle payments to: <span className="text-bengali-red">soikotflorida@gmail.com</span>
                  </p>
                  <Link to="/donate">
                    <Button variant="outline" size="sm" className="text-bengali-red border-bengali-red hover:bg-bengali-red hover:text-white">
                      More Payment Options
                    </Button>
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Annual Sponsorship Section */}
                  <div>
                    <h4 className="text-lg font-semibold text-bengali-red mb-3">Annual Sponsorship</h4>
                    <p className="text-bengali-dark/80 mb-6">
                      Join our family of sponsors — your support makes all the difference.
                    </p>
                    <div className="space-y-6">
                      <div>
                        <div className="overflow-hidden rounded-lg border border-bengali-red/20">
                          <table className="w-full">
                            <thead>
                              <tr className="bg-bengali-red/10">
                                <th className="text-left py-3 px-4 font-medium text-bengali-dark">Sponsorship</th>
                                <th className="text-center py-3 px-4 font-medium text-bengali-dark">Amount</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-bengali-red/10">
                                <td className="py-3 px-4 font-medium text-bengali-dark">Grand</td>
                                <td className="text-center py-3 px-4 text-bengali-dark font-medium">$3,000</td>
                              </tr>
                              <tr className="border-b border-bengali-red/10">
                                <td className="py-3 px-4 font-medium text-bengali-dark">Platinum</td>
                                <td className="text-center py-3 px-4 text-bengali-dark font-medium">$2,000</td>
                              </tr>
                              <tr className="border-b border-bengali-red/10">
                                <td className="py-3 px-4 font-medium text-bengali-dark">Diamond</td>
                                <td className="text-center py-3 px-4 text-bengali-dark font-medium">$1,500</td>
                              </tr>
                              <tr className="border-b border-bengali-red/10">
                                <td className="py-3 px-4 font-medium text-bengali-dark">Gold</td>
                                <td className="text-center py-3 px-4 text-bengali-dark font-medium">$1,000</td>
                              </tr>
                              <tr className="border-b border-bengali-red/10">
                                <td className="py-3 px-4 font-medium text-bengali-dark">Silver</td>
                                <td className="text-center py-3 px-4 text-bengali-dark font-medium">$650</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <p>
                        <Link to="/sponsorship-rates">
                          <Button variant="outline" size="sm" className="text-bengali-red border-bengali-red hover:bg-bengali-red hover:text-white">
                            View Additional Details
                          </Button>
                        </Link>
                      </p>
                    </div>
                  </div>

                  {/* General Event Subscription Section */}
                  <div>
                    <h4 className="text-lg font-semibold text-bengali-red mb-3">General Event Subscription</h4>
                    <p className="text-bengali-dark/80 mb-6">
                      Subscription includes access to all three days of festivities, cultural programs, and traditional Bengali cuisine.
                    </p>
                    <div className="space-y-6">
                      <div>
                        <div className="overflow-hidden rounded-lg border border-bengali-red/20">
                          <table className="w-full">
                            <thead>
                              <tr className="bg-bengali-red/10">
                                <th className="text-left py-3 px-4 font-medium text-bengali-dark">Category</th>
                                <th className="text-center py-3 px-4 font-medium text-white bg-bengali-red">Pre-registration
                                  <div className="text-center font-medium text-white">(ends 9/21)</div>
                                </th>
                                <th className="text-center py-3 px-4 font-medium text-bengali-dark">Regular</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-bengali-red/10">
                                <td className="py-3 px-4 font-medium text-bengali-dark">Family</td>
                                <td className="text-center py-3 px-4 text-white font-semibold bg-bengali-red/90">$450</td>
                                <td className="text-center py-3 px-4 text-bengali-dark font-medium">$550</td>
                              </tr>
                              <tr className="border-b border-bengali-red/10">
                                <td className="py-3 px-4 font-medium text-bengali-dark">Individual</td>
                                <td className="text-center py-3 px-4 text-white font-semibold bg-bengali-red/90">$225</td>
                                <td className="text-center py-3 px-4 text-bengali-dark font-medium">$275</td>
                              </tr>
                              <tr>
                                <td className="py-3 px-4 font-medium text-bengali-dark">Student</td>
                                <td colSpan={2} className="text-center py-3 px-4 text-bengali-dark/70 italic">Contact for discounted rates</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Contact Information */}
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto border border-bengali-red/20 mb-12">
              <div className="space-y-3">
                <div className="flex items-center justify-center text-bengali-dark">
                  <Phone className="w-5 h-5 mr-3 text-bengali-red" />
                  <div>
                    <strong>Phone:</strong> (727) 643-3691
                  </div>
                </div>
                
                <div className="flex items-center justify-center text-bengali-dark">
                  <Mail className="w-5 h-5 mr-3 text-bengali-red" />
                  <div>
                    <strong>Email:</strong> <a href="mailto:soikotflorida@gmail.com" className="text-bengali-red hover:text-bengali-red/80">soikotflorida@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Event Flyers */}
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-bengali-dark mb-6 text-center">More Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {flyers.map((flyer, index) => (
                  <Card 
                    key={index}
                    className="border-none shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
                    onClick={() => setSelectedFlyer(flyer.src)}
                  >
                    <CardContent className="p-0">
                      <div className="aspect-[4/5] overflow-hidden">
                        <img
                          src={flyer.src}
                          alt={flyer.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-bengali-dark mb-2">{flyer.title}</h3>
                        <p className="text-bengali-dark/70 text-sm">
                          {flyer.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* View All Events Button */}
            <div className="text-center">
              <Link to="/events">
                <Button className="bg-bengali-red hover:bg-bengali-red/90 text-white px-8 py-3">
                  View All Events
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Modal for flyer display */}
      {selectedFlyer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative animate-scale-in">
            <button
              onClick={() => setSelectedFlyer(null)}
              className="absolute -top-4 -right-4 z-50 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Close flyer modal"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              <img
                src={selectedFlyer}
                alt="Event flyer"
                className="block max-w-none max-h-[90vh] w-auto h-auto"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DurgaPujaDetails;