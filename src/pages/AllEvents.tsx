import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, MapPin, ExternalLink, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';

const AllEvents = () => {
  const allEvents = [
    {
      name: "Rabindra Jayanti",
      image: "/lovable-uploads/90e6dd90-3eb8-4808-9487-bb0c41f7b977.png",
      date: "May 3, 2025",
      time: "5:00 PM - 9:00 PM",
      location: "Land O' Lakes Heritage Park",
      locationLink: "https://www.google.com/maps/place/Land+O'+Lakes+Heritage+Park/data=!4m2!3m1!1s0x0:0x9c3fe4d21c61b81c?sa=X&ved=1t:2428&ictx=111",
      description: "Commemorate the birth anniversary of Rabindranath Tagore with a special cultural program featuring his songs, poems, and plays."
    },
    {
      name: "Durga Puja",
      image: "/lovable-uploads/9b884d7c-7056-4c0d-893a-ad5ceaa5f434.png",
      date: "October 3-5, 2025",
      time: "11:00 AM - 10:00 PM",
      location: "Indian Cultural Center",
      locationLink: "https://www.google.com/maps/place/Indian+Cultural+Center/@28.0453,-82.5385749,16z/data=!3m1!4b1!4m6!3m5!1s0x88c2c1b69f9c720d:0x4babf99abffac69!8m2!3d28.0453!4d-82.536!16s%2Fg%2F1thd7ggd?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D",
      description: "Join us for the biggest Bengali festival of the year as we celebrate Durga Puja with religious ceremonies, cultural programs, and community feasts."
    },
    {
      name: "Lakshmi Puja",
      image: "/lovable-uploads/Lakshmi.jpeg",
      date: "October 11, 2025",
      time: "5:30 PM - 10:00 PM",
      location: "Venue TBD",
      locationLink: "",
      description: "Celebrate Lakshmi Puja with us as we worship the goddess of wealth and prosperity, following Bengali traditions and rituals."
    },
    {
      name: "Kali Puja",
      image: "/lovable-uploads/Kali.jpeg",
      date: "October 19, 2025",
      time: "5:30 PM - 10:00 PM",
      location: "Indian Cultural Center",
      locationLink: "https://www.google.com/maps/place/Indian+Cultural+Center/@28.0453,-82.5385749,16z/data=!3m1!4b1!4m6!3m5!1s0x88c2c1b69f9c720d:0x4babf99abffac69!8m2!3d28.0453!4d-82.536!16s%2Fg%2F1thd7ggd?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D",
      description: "Join us for Kali Puja as we honor the goddess Kali with traditional practices, prayers, and celebrations."
    },
    {
      name: "Saraswati Puja",
      image: "/lovable-uploads/0f0a6ef1-6161-4b80-af4d-c09d805ba737.jpeg",
      date: "January 24, 2026",
      time: "11:00 AM - 10:00 PM",
      location: "Venue TBD",
      locationLink: "",
      description: "Join us for Saraswati Puja as we honor the goddess of knowledge and learning with traditional ceremonies and cultural performances."
    }
  ];

  return (
    <div className="font-bengali">
      <div className="pointer-events-none opacity-50">
        <Navbar />
      </div>
      <main>
        <section className="py-16 md:py-24 bg-bengali-light">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between mb-8">
              <Link to="/" className="flex items-center text-bengali-red hover:text-bengali-red/80 transition-colors">
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span>Back to Home</span>
              </Link>
            </div>
            
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-5xl font-bold text-bengali-dark">All <span className="text-bengali-red">Events</span></h1>
              <div className="w-24 h-1 bg-bengali-red mx-auto mt-4 mb-6"></div>
              <p className="text-bengali-dark/80 max-w-3xl mx-auto">
                Explore all our upcoming events and festivals celebrating Bengali culture and traditions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allEvents.map((event, index) => (
                <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <img 
                      src={event.image} 
                      alt={event.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-bengali-dark mb-4">{event.name}</h3>
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
                      {event.locationLink && (
                        <a 
                          href={event.locationLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center ml-2 text-bengali-red hover:text-bengali-red/80"
                        >
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                    <p className="text-bengali-dark/80 mb-4">{event.description}</p>
                    {event.name === "Rabindra Jayanti" ? (
                      <Link to="/events/rabindra-jayanti">
                        <Button className="w-full bg-bengali-red hover:bg-bengali-red/90">Learn More</Button>
                      </Link>
                    ) : (
                      <Button className="w-full bg-bengali-red hover:bg-bengali-red/90" disabled>Coming Soon</Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Pagination className="mt-12">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </section>
      </main>
      <div className="pointer-events-none opacity-50">
        <Footer />
      </div>
    </div>
  );
};

export default AllEvents;
