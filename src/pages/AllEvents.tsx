import React from "react";
import AllEventsNavbar from "@/components/AllEventsNavbar";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Link } from "react-router-dom";

const AllEvents = () => {
  const allEvents = [
    {
      name: "Spring Picnic",
      image: "/lovable-uploads/spring-picnic.png",
      date: "March 14, 2026",
      time: "11:00 AM - 6:00 PM",
      location: "TBD",
      locationLink: "",
      description:
        "Come celebrate at our Spring Picnic! We're gathering for a day of outdoor fun, sports, great food and relaxation as we enjoy the best of Florida's springtime.",
    },
    {
      name: "Rabindra Jayanti",
      image: "/lovable-uploads/90e6dd90-3eb8-4808-9487-bb0c41f7b977.png",
      date: "May 9, 2026",
      time: "4:00 PM - 9:00 PM",
      location: "Land O' Lakes Community Center",
      locationLink: "https://maps.app.goo.gl/BFwzt8imK2yDNcA88",
      description:
        "Celebrate the birth anniversary of Rabindranath Tagore with music, poetry, and cultural performances honoring the Nobel laureate.",
    },
    {
      name: "Durga Puja",
      image: "/lovable-uploads/9b884d7c-7056-4c0d-893a-ad5ceaa5f434.png",
      date: "October 16-18, 2026",
      time: "11:00 AM - 10:00 PM",
      location: "Indian Cultural Center",
      locationLink: "https://maps.app.goo.gl/x6evEUHo7M4oF9A48",
      description:
        "Join us for the biggest Bengali festival of the year as we celebrate Durga Puja with religious ceremonies, cultural programs, and community feasts.",
    },
    {
      name: "Lakshmi Puja",
      image: "/lovable-uploads/Lakshmi.jpeg",
      date: "October 24, 2026",
      time: "5:30 PM - 10:00 PM",
      location: "Land O' Lakes Community Center",
      locationLink: "https://maps.app.goo.gl/BFwzt8imK2yDNcA88",
      description:
        "Celebrate Lakshmi Puja with us as we worship the goddess of wealth and prosperity, following Bengali traditions and rituals.",
    },
    {
      name: "Kali Puja",
      image: "/lovable-uploads/Kali.jpeg",
      date: "November 7, 2026",
      time: "5:30 PM - 10:00 PM",
      location: "Indian Cultural Center",
      locationLink: "https://maps.app.goo.gl/x6evEUHo7M4oF9A48",
      description:
        "Join us for Kali Puja as we honor the goddess Kali with traditional practices, prayers, and celebrations.",
    },
    {
      name: "Saraswati Puja",
      image: "/lovable-uploads/saraswati-puja.jpeg",
      date: "January 24, 2026",
      time: "11:00 AM - 10:00 PM",
      location: "Indian Cultural Center",
      locationLink: "https://maps.app.goo.gl/x6evEUHo7M4oF9A48",
      description:
        "Join us for Saraswati Puja as we honor the goddess of knowledge and learning with traditional ceremonies and cultural performances.",
    },
  ];

  return (
    <div className="font-bengali">
      <AllEventsNavbar />
      <main>
        <section className="py-8 md:py-12 bg-bengali-light">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-5xl font-bold text-bengali-dark">
                <span className="bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">
                  All Events
                </span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto mt-4 mb-6"></div>
              <p className="text-bengali-dark/80 max-w-3xl mx-auto">
                Explore all our upcoming events and festivals celebrating Bengali culture and traditions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allEvents.map((event, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48">
                    <img src={event.image} alt={event.name} className="w-full h-full object-cover" />
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
                    {event.name === "Saraswati Puja" ? (
                      <Link to="/saraswati-puja-details">
                        <Button className="w-full bg-bengali-red hover:bg-bengali-red/90">View Details</Button>
                      </Link>
                    ) : event.name === "Spring Picnic" ? (
                      <div className="w-full bg-gradient-to-r from-bengali-red to-bengali-orange text-white text-center py-3 rounded-xl font-semibold text-lg tracking-wide shadow-md">
                        🎉 See you soon!
                      </div>
                    ) : (
                      <Button className="w-full bg-bengali-red hover:bg-bengali-red/90" disabled>
                        Coming Soon
                      </Button>
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
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AllEvents;
