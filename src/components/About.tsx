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
    <section id="about" className="py-8 md:py-12 bg-gradient-to-b from-bengali-light/30 via-white to-bengali-light/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">About Us</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto mt-4 mb-6"></div>
          <p className="text-bengali-dark/80 max-w-3xl mx-auto">
            Soikot is the Bengali Association of the Tampa Bay area, proudly dedicated to preserving and promoting the rich culture, language, and traditions of Bengal. Through cultural events, and community gatherings, we strive to foster a deeper connection to our heritage and pass it on to future generations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-bengali-light p-6 rounded-lg">
            <h3 className="text-xl md:text-2xl font-semibold text-bengali-dark mb-4">Our Mission</h3>
            <p className="text-bengali-dark/80 mb-4">
              To celebrate Bengali religious and cultural festivals, express creativity through literature, poetry, drama, and music in the Bengali language, and preserve our heritage for future generations.
            </p>
            <p className="text-bengali-dark/80">
              We are committed to teaching written and spoken Bengali, particularly to children, along with the history, cultural values, and traditions of Bengal.
            </p>
          </div>
          
          <div className="bg-bengali-light p-6 rounded-lg">
            <h3 className="text-xl md:text-2xl font-semibold text-bengali-dark mb-4">Our Vision</h3>
            <p className="text-bengali-dark/80 mb-4">
              To create a thriving Bengali cultural hub in the Tampa Bay area that serves as a bridge between our ancestral heritage and our new home.
            </p>
            <p className="text-bengali-dark/80">
              We envision a community where Bengali language and culture flourish, where we can provide humanitarian assistance to those in need, and where we can contribute to the rich cultural tapestry of America.
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
                <p className="text-bengali-dark/70 text-center">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
