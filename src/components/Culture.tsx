
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Music, Palette, BookOpen, Users } from 'lucide-react';

const Culture = () => {
  const activities = [
    {
      icon: <Music className="w-8 h-8 text-bengali-red" />,
      title: "Music & Dance",
      description: "Traditional Bengali music, dance performances, and cultural programs celebrating our artistic heritage."
    },
    {
      icon: <Palette className="w-8 h-8 text-bengali-orange" />,
      title: "Arts & Crafts",
      description: "Workshops on Bengali art forms, handicrafts, and traditional skills passed down through generations."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-bengali-blue" />,
      title: "Literature",
      description: "Poetry recitations, storytelling sessions, and discussions on Bengali literature and writers."
    },
    {
      icon: <Users className="w-8 h-8 text-bengali-green" />,
      title: "Community Events",
      description: "Regular gatherings, festivals, and celebrations that bring our community together."
    }
  ];

  return (
    <section id="culture" className="py-8 md:py-12 bg-gradient-to-b from-white via-bengali-light/30 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">Cultural Activities</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto mt-4 mb-6"></div>
          <p className="text-bengali-dark/80 max-w-3xl mx-auto">
            Experience the richness of Bengali culture through our diverse range of activities, events, and programs designed to connect our community with our heritage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {activities.map((activity, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="flex flex-col items-center p-6">
                <div className="mb-4">
                  {activity.icon}
                </div>
                <h4 className="text-xl font-medium text-bengali-dark mb-2">{activity.title}</h4>
                <p className="text-bengali-dark/70 text-center">{activity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* YouTube Subscription Section */}
        <div className="text-center">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg p-6 mb-4 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-bengali-dark mb-4">
              Subscribe to our <span className="text-red-600">YouTube</span> channel
            </h3>
            <p className="text-bengali-dark/80 mb-6">
              Stay connected with our community events, cultural programs, and celebrations. Subscribe to never miss our latest videos!
            </p>
            <a 
              href="https://www.youtube.com/@soikottampabay6527" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <img 
                src="/lovable-uploads/9f4f36a8-f7e0-48d2-8951-51cd16731586.png" 
                alt="YouTube" 
                className="w-6 h-6 mr-3"
              />
              Subscribe Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
