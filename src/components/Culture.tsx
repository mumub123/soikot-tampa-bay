import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Culture = () => {
  const culturalElements = [
    {
      image: "/lovable-uploads/8ac16baf-a424-4e32-84a2-d851678b3db7.png",
      title: "Traditional Arts",
      description: "Bengali culture shines through its intricate alpana (floor art), kantha embroidery, and beautifully crafted clay pottery — each telling a story of tradition and creativity."
    },
    {
      image: "/lovable-uploads/dff634a3-b92c-463c-8fc5-c77e27734cd6.png",
      title: "Music & Dance",
      description: "From Rabindra Sangeet and Nazrul Geeti to Baul folk songs, Bengali music resonates with depth and emotion — often brought to life through graceful folks and classical dances."
    },
    {
      image: "/lovable-uploads/d5b139dc-295e-438f-b0b5-2dd2f6ec6881.png",
      title: "Literature",
      description: "Bengali literature, shaped by legends like Rabindranath Tagore, is rich with poetry, compelling novels, and evocative short stories that have stood the test of time."
    },
    {
      image: "/lovable-uploads/3904dac5-b307-43cc-bbc0-272a5903016b.png",
      title: "Cuisine",
      description: "Bengali cuisine delights with its subtle flavors, love for fish, vibrant spices, and world-renowned sweets like rasgulla and sandesh."
    }
  ];

  return (
    <section id="culture" className="py-8 md:py-12 bg-gradient-to-b from-bengali-light/40 via-bengali-blue/20 to-bengali-red/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">Bengali Culture</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto mt-4 mb-6"></div>
          <p className="text-bengali-dark/80 max-w-3xl mx-auto">
            Rooted in community and driven by passion, we take pride in preserving and celebrating the rich heritage of Bengali culture — from its artistic expressions to its musical, literary, and culinary legacy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {culturalElements.map((element, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <AspectRatio ratio={4/3} className="h-full">
                  <img 
                    src={element.image} 
                    alt={element.title} 
                    className={`w-full h-full object-cover transition-transform duration-500 hover:scale-110 ${
                      index === 1 ? 'object-top' : 
                      index === 2 ? 'object-center scale-100' : 
                      'object-center'
                    }`}
                  />
                </AspectRatio>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-bengali-dark mb-2">{element.title}</h3>
                <p className="text-bengali-dark/80">{element.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-bengali-pattern bg-opacity-10 p-8 md:p-12">
              <h3 className="text-2xl font-semibold text-bengali-dark mb-4">Cultural Preservation</h3>
              <p className="text-bengali-dark/80 mb-4">
                At Soikot, we are committed to preserving the rich cultural heritage of Bengal for future generations. Through our various programs and events, we aim to keep alive the traditions, arts, and language that define our cultural identity.
              </p>
              <p className="text-bengali-dark/80">
                Our efforts include language education, cultural performances, literary publications, and the celebration of traditional festivals. We believe that by maintaining these connections to our heritage, we enrich both our community and the broader cultural tapestry of America.
              </p>
            </div>
            <div className="md:w-1/2 bg-bengali-red p-8 md:p-12">
              <h3 className="text-2xl font-semibold text-white mb-4">Cultural Exchange</h3>
              <p className="text-white/90 mb-4">
                Beyond preservation, we actively promote cultural exchange and sharing. We invite everyone, regardless of their background, to experience and appreciate Bengali culture through our open events and programs.
              </p>
              <p className="text-white/90">
                By fostering greater understanding and appreciation of Bengali traditions in the Tampa Bay area, we contribute to the vibrant multicultural mosaic that makes our community special. We believe that cultural sharing builds bridges and creates a more inclusive society for all.
              </p>
            </div>
          </div>
        </div>

        {/* YouTube Subscription Section */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="text-lg text-bengali-dark">Subscribe to our Youtube channel</span>
            <a 
              href="https://www.youtube.com/@soikottampabay6527" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group transition-all duration-300"
            >
              <img 
                src="/lovable-uploads/20354388-8850-4816-9002-5231a4e22537.png" 
                alt="YouTube" 
                className="w-8 h-8"
              />
              <div className="absolute inset-0 bg-red-600/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
