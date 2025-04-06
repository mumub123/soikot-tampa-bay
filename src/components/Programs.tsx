
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Music, Heart, Scroll } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: <BookOpen className="w-12 h-12 text-bengali-blue" />,
      title: "Bengali Language School",
      description: "Our language school offers Bengali classes for children and adults, helping to preserve our mother tongue across generations. Classes are held weekly and cover reading, writing, and speaking skills."
    },
    {
      icon: <Music className="w-12 h-12 text-bengali-orange" />,
      title: "Cultural Arts Program",
      description: "Explore Bengali music, dance, and visual arts through our cultural programs. We offer regular workshops, performances, and exhibitions to showcase the rich artistic heritage of Bengal."
    },
    {
      icon: <Scroll className="w-12 h-12 text-bengali-green" />,
      title: "Literary Magazine",
      description: "Our literary magazine publishes poetry, short stories, essays, and artwork from community members, providing a platform for creative expression in the Bengali language."
    },
    {
      icon: <Heart className="w-12 h-12 text-bengali-red" />,
      title: "Humanitarian Initiative",
      description: "Through our humanitarian programs, we provide support to underprivileged communities in Bengal and offer assistance to those affected by natural disasters and other hardships."
    }
  ];

  return (
    <section id="programs" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bengali-dark">Our <span className="text-bengali-red">Programs</span></h2>
          <div className="w-24 h-1 bg-bengali-red mx-auto mt-4 mb-6"></div>
          <p className="text-bengali-dark/80 max-w-3xl mx-auto">
            Discover the various programs we offer to preserve and promote Bengali culture, language, and traditions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="flex-shrink-0">
                    {program.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-bengali-dark mb-3">{program.title}</h3>
                    <p className="text-bengali-dark/80">{program.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-bengali-light rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-semibold text-bengali-dark mb-4">Join Our Programs</h3>
              <p className="text-bengali-dark/80 mb-4">
                Whether you're interested in learning Bengali, exploring cultural arts, contributing to our literary magazine, or participating in humanitarian efforts, we welcome your involvement.
              </p>
              <p className="text-bengali-dark/80">
                Our programs are open to everyone in the Tampa Bay area who is interested in Bengali culture and traditions.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xs">
                <h4 className="text-lg font-medium text-bengali-dark mb-4 text-center">Contact Us</h4>
                <p className="text-bengali-dark/80 text-center mb-4">For more information about our programs</p>
                <button className="w-full py-2 px-4 bg-bengali-red text-white rounded hover:bg-bengali-red/90 transition-colors">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
