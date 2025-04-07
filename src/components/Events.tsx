
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Events = () => {
  const events = [
    {
      name: "Durga Puja",
      image: "/lovable-uploads/9b884d7c-7056-4c0d-893a-ad5ceaa5f434.png",
      date: "October 9-13, 2024",
      time: "Various Times",
      location: "Tampa Community Center",
      description: "Join us for the biggest Bengali festival of the year as we celebrate Durga Puja with religious ceremonies, cultural programs, and community feasts."
    },
    {
      name: "Saraswati Puja",
      image: "https://images.unsplash.com/photo-1614368558175-ad4a95a6d8d6?q=80&w=1970&auto=format&fit=crop",
      date: "February 4, 2025",
      time: "9:00 AM - 8:00 PM",
      location: "Soikot Cultural Center",
      description: "Celebrate the goddess of knowledge, music, art, and learning with traditional prayers, cultural performances, and community gatherings."
    },
    {
      name: "Rabindra Jayanti",
      image: "https://images.unsplash.com/photo-1615266508074-7a4cf659be54?q=80&w=2069&auto=format&fit=crop",
      date: "May 8, 2025",
      time: "5:00 PM - 9:00 PM",
      location: "Performing Arts Center",
      description: "Commemorate the birth anniversary of Rabindranath Tagore with a special cultural program featuring his songs, poems, and plays."
    }
  ];

  return (
    <section id="events" className="py-16 md:py-24 bg-bengali-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bengali-dark">Upcoming <span className="text-bengali-red">Events</span></h2>
          <div className="w-24 h-1 bg-bengali-red mx-auto mt-4 mb-6"></div>
          <p className="text-bengali-dark/80 max-w-3xl mx-auto">
            Join us in celebrating Bengali culture and traditions through our upcoming events and festivals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <img 
                  src={event.image} 
                  alt={event.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">{event.name}</h3>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-bengali-dark/70 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <div className="flex items-center text-bengali-dark/70 mb-2">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">{event.time}</span>
                </div>
                <div className="flex items-center text-bengali-dark/70 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{event.location}</span>
                </div>
                <p className="text-bengali-dark/80 mb-4">{event.description}</p>
                <Button className="w-full bg-bengali-red hover:bg-bengali-red/90">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="border-bengali-red text-bengali-red hover:bg-bengali-red/10">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;
