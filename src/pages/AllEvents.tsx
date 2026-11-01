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
import lakshmiImg from "@/assets/lakshmi-puja-2027.jpeg.asset.json";
import kaliImg from "@/assets/kali-puja-2026-idol.jpeg.asset.json";
import AdjustableEventPhoto from "@/components/AdjustableEventPhoto";

interface EventItem {
  name: string;
  image: string;
  date: string;
  time: string;
  location: string;
  locationLink?: string;
  description: string;
  startDate?: string;
  endDate?: string;
  emph?: string;
}

const allEvents: EventItem[] = [
  {
    name: "Kali Puja",
    image: kaliImg.url,
    date: "November 7, 2026",
    time: "5:30 PM - 10:00 PM",
    location: "Indian Cultural Center",
    locationLink: "https://maps.app.goo.gl/x6evEUHo7M4oF9A48",
    description:
      "Join us for Kali Puja as we honor the goddess Kali with traditional practices, prayers, and vibrant celebrations — and be part of the fun experience of fireworks lighting up the night.",
    startDate: "2026-11-07T17:30:00",
    endDate: "2026-11-07T22:00:00",
  },
  {
    name: "Saraswati Puja 2027",
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
  {
    name: "Summer Picnic 2027",
    image: "/lovable-uploads/spring-picnic.png",
    date: "TBD",
    time: "11:00 AM - 6:00 PM",
    location: "TBD",
    locationLink: "",
    description:
      "Come celebrate at our Summer Picnic! We're gathering for a day of outdoor fun, sports, great food and relaxation as we enjoy the best of Florida's summer.",
    startDate: undefined,
    endDate: undefined,
  },
  {
    name: "Rabindra Jayanti 2027",
    image: "/lovable-uploads/90e6dd90-3eb8-4808-9487-bb0c41f7b977.png",
    date: "May 8, 2027",
    time: "5:00 PM - 9:00 PM",
    location: "Land O' Lakes Heritage Park",
    locationLink: "https://www.google.com/maps/place/Land+O'+Lakes+Heritage+Park",
    description:
      "Celebrate the birth anniversary of Rabindranath Tagore with music, dance, poetry, and cultural performances by the Soikot family.",
    startDate: "2027-05-08T17:00:00",
    endDate: "2027-05-08T21:00:00",
  },
  {
    name: "Durga Puja 2027",
    image: "/lovable-uploads/9b884d7c-7056-4c0d-893a-ad5ceaa5f434.webp",
    date: "October 7-10, 2027",
    time: "11:00 AM - 10:00 PM",
    location: "Indian Cultural Center",
    locationLink: "https://maps.app.goo.gl/x6evEUHo7M4oF9A48",
    description:
      "Celebrate Soikot's 25th year Silver Jubilee Durga Puja — four grand days of religious ceremonies, cultural programs, and community feasts.",
    emph: "Soikot's 25th year Silver Jubilee Durga Puja — four grand days",
    startDate: "2027-10-07T11:00:00",
    endDate: "2027-10-10T22:00:00",
  },
  {
    name: "Lakshmi Puja 2027",
    image: lakshmiImg.url,
    date: "October 17, 2027",
    time: "5:30 PM - 10:00 PM",
    location: "Land O' Lakes Community Center",
    locationLink: "https://maps.app.goo.gl/BFwzt8imK2yDNcA88",
    description:
      "Celebrate Lakshmi Puja with us as we worship the goddess of wealth and prosperity, following Bengali traditions and rituals.",
    startDate: "2027-10-17T17:30:00",
    endDate: "2027-10-17T22:00:00",
  },
  {
    name: "Kali Puja 2027",
    image: kaliImg.url,
    date: "October 30, 2027",
    time: "5:30 PM - 10:00 PM",
    location: "Indian Cultural Center",
    locationLink: "https://maps.app.goo.gl/x6evEUHo7M4oF9A48",
    description:
      "Join us for Kali Puja as we honor the goddess Kali with traditional practices, prayers, and vibrant celebrations — and be part of the fun experience of fireworks lighting up the night.",
    startDate: "2027-10-30T17:30:00",
    endDate: "2027-10-30T22:00:00",
  },
  {
    name: "Saraswati Puja 2028",
    image: "/lovable-uploads/saraswati-puja.jpeg",
    date: "February 5, 2028",
    time: "11:00 AM - 10:00 PM",
    location: "Indian Cultural Center",
    locationLink: "https://maps.app.goo.gl/x6evEUHo7M4oF9A48",
    description:
      "Join us for Saraswati Puja as we honor the goddess of knowledge and learning with traditional ceremonies and cultural performances.",
    startDate: "2028-02-05T11:00:00",
    endDate: "2028-02-05T22:00:00",
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
      <SEO title={"Upcoming Events - Soikot"} description={"Explore upcoming Soikot events including Kali Puja, Saraswati Puja 2027, Durga Puja 2027 and Lakshmi Puja 2027 in the Tampa Bay area."} path={"/events"} />
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
                Explore all our upcoming events and festivals celebrating Bengali culture and traditions — save the dates now!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allEvents.map((event, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  {event.image === kaliImg.url ? (
                    <AdjustableEventPhoto src={event.image} alt={event.name} tileId={`events-${event.name}`} />
                  ) : (
                  <div className="relative h-48">
                    <img
                      src={event.image}
                      alt={event.name}
                      className={`w-full h-full object-cover transition-transform duration-300 ${event.image === lakshmiImg.url ? "scale-[1.15]" : ""}`}
                    />
                  </div>
                  )}
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
                    <p className="text-bengali-dark mb-4">
                      {event.emph
                        ? (() => {
                            const i = event.description.indexOf(event.emph);
                            if (i === -1) return event.description;
                            return (
                              <>
                                {event.description.slice(0, i)}
                                <span className="font-bold text-bengali-red">{event.emph}</span>
                                {event.description.slice(i + event.emph.length)}
                              </>
                            );
                          })()
                        : event.description}
                    </p>
                    {event.name === "Kali Puja" && (
                      <Link to="/donate" className="block">
                        <Button className="w-full bg-bengali-red hover:bg-bengali-red/90">
                          Register and Donate
                        </Button>
                      </Link>
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
      <script type="application/ld+json">{JSON.stringify(eventsStructuredData)}</script>
    </div>
  );
};

export default AllEvents;
