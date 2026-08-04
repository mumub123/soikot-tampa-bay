import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, BookOpen, Globe, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-bengali-red" />,
      title: "Community",
      description: "Building a strong Bengali community through shared experiences and support."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-bengali-orange" />,
      title: "Education",
      description: "Passing down Bengali language, history, and cultural knowledge to future generations."
    },
    {
      icon: <Globe className="w-8 h-8 text-bengali-blue" />,
      title: "Culture",
      description: "Celebrating and preserving Bengali cultural heritage, traditions, and arts."
    },
    {
      icon: <Users className="w-8 h-8 text-bengali-green" />,
      title: "Service",
      description: "Providing humanitarian assistance and supporting community upliftment."
    }
  ];

  return (
    <section id="about" className="py-8 md:py-12 bg-gradient-to-b from-bengali-light/40 via-white to-bengali-light/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">About Us</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto mt-4 mb-6"></div>
          <p className="text-bengali-dark max-w-3xl mx-auto">
            Soikot is the Bengali Association of the Tampa Bay area, a not-for-profit corporation dedicated to the preservation, promotion, and celebration of Bengali culture, language, traditions, and values through cultural events, educational activities, and community gatherings.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-bengali-light p-6 rounded-lg">
            <h3 className="text-xl md:text-2xl font-semibold text-bengali-dark mb-4">Our Mission</h3>
            <p className="text-bengali-dark mb-4">
              To create opportunities for the preservation, promotion, and celebration of Bengali culture, language, traditions, and values while fostering an open, inclusive, and welcoming community.
            </p>
            <p className="text-bengali-dark">
              We are committed to engaging, supporting, and integrating Bengali families in the Tampa Bay area, providing opportunities for them to participate in cultural, educational, and community activities, and to build meaningful connections with existing members&mdash;regardless of sponsorship level, tenure, or background&mdash;while continuing to serve and value the broader Soikot family.
            </p>
          </div>
          
          <div className="bg-bengali-light p-6 rounded-lg">
            <h3 className="text-xl md:text-2xl font-semibold text-bengali-dark mb-4">Our Vision</h3>
            <p className="text-bengali-dark mb-4">
              A vibrant, inclusive, and ever-growing Bengali community where new and existing families feel equally welcomed, connected, and valued.
            </p>
            <p className="text-bengali-dark">
              We aspire to be a trusted cultural home for Bengali families relocating to the Tampa Bay area&mdash;helping them blend seamlessly into the community&mdash;while honoring our shared heritage, nurturing future generations, and strengthening bonds across all stages of membership and participation.
            </p>
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold text-bengali-dark text-center mb-8">Our Core Values</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="flex flex-col items-center p-6">
                <div className="mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-medium text-bengali-dark mb-2">{value.title}</h4>
                <p className="text-bengali-dark text-center">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
