import React from "react";
import AllEventsNavbar from "@/components/AllEventsNavbar";
import { Card, CardContent } from "@/components/ui/card";

const ExecutiveCommittee = () => {
  const committeeMembers = [
    "Tapas K. Das",
    "Raja Sarker",
    "Anupam Bandyopadhyay",
    "Sanjoy Moitra",
    "Jyotirmoy Sarkar",
    "Aniruddha Sarkar",
    "Siddhartha Bose",
    "Kunal Rudra",
    "Aninda Sarkar",
    "Priyanka Kumar",
    "Pritha Chakraborty",
    "Shivaji Sarkar",
    "Abhijit Talukdar",
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
                  Executive Committee
                </span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto mt-4 mb-6"></div>
              <p className="text-bengali-dark/80 max-w-3xl mx-auto">
                Meet our dedicated team of volunteers who work tirelessly to serve the Bengali community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {committeeMembers.map((member, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-bengali-dark">{member}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ExecutiveCommittee;
