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
import SEO from "@/components/SEO";

const allEvents = [
  {
    name: "Durga Puja",
    image: "/lovable-uploads/9b884d7c-7056-4c0d-893a-ad5ceaa5f434.webp",
    date: "October 16-18, 2026",
    time: "11:00 AM - 10:00 PM",
    location: "Indian Cultural Center",
    locationLink: "https://maps.app.goo.gl/x6evEUHo7M4oF9A48",
    description:
      "Join us for the biggest Bengali festival of the year as we celebrate Durga Puja with religious ceremonies, cultural programs, and community feasts.",
    startDate: "2026-10-16T11:00:00",
    endDate: "2026-10-18T22:00:00",
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
    startDate: "2026-10-24T17:30:00",
    endDate: "2026-10-24T22:00:00",
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
    startDate: "2026-11-07T17:30:00",
    endDate: "2026-11-07T22:00:00",
  },
  {
    name: "Saraswati Puja",
    image: "/lovable-uploads/saraswati-puja.jpeg",
    date: "February 13, 2027",
    time: "11:00 AM - 10:00 PM",
    location: "Indian Cultural Center",
    locationLink: "https://maps.app.goo.gl/x6evEUHo7M4oF9A48",
    description:
      "Join us for Saraswati Puja as we honor the goddess of knowledge and learning with traditional ceremonies and cultural performances.",
    startDate: "2027-02-13T11:00:00",
    endDate: "2027-02-13T22:00:00",
  },
];

const eventsStructuredData = {
  "@context": "https://schema.org",
  "@graph": allEvents.map((event) => ({
    "@type": "Event",
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    image: `https://soikot.org${event.image}`,
    location: {
      "@type": "Place",
      name: event.location,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tampa Bay",
        addressRegion: "FL",
        addressCountry: "US",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Soikot — Bengali Association of Tampa Bay",
      url: "https://soikot.org/",
    },
  })),
};

const AllEvents = () => {
  return (
    <div className="font-bengali">
      <SEO title={"Upcoming Events - Soikot"} description={"Explore upcoming Soikot events including Durga Puja, Lakshmi Puja, Kali Puja and Saraswati Puja in the Tampa Bay area."} path={"/events"} />
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
              <p className="text-bengali-dark max-w-3xl mx-auto">
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
                    <div className="flex items-center text-bengali-dark mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-bengali-dark mb-2">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center text-bengali-dark mb-4">
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
                    <p className="text-bengali-dark mb-4">{event.description}</p>
                    <Button className="w-full bg-bengali-red hover:bg-bengali-red/90" disabled>
                      Coming Soon
                    </Button>
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
      <script type="application/ld+json">{JSON.stringify(eventsStructuredData)}</script>
    </div>
  );
};

export default AllEvents;
