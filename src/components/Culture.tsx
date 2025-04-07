
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Culture = () => {
  const culturalElements = [
    {
      image: "/lovable-uploads/8ac16baf-a424-4e32-84a2-d851678b3db7.png",
      title: "Traditional Arts",
      description: "Bengali culture is known for its rich artistic traditions, including alpana (floor paintings), kantha embroidery, and clay pottery."
    },
    {
      image: "/lovable-uploads/dff634a3-b92c-463c-8fc5-c77e27734cd6.png",
      title: "Music & Dance",
      description: "Bengali music encompasses various forms including Rabindra Sangeet, Nazrul Geeti, and folk traditions like Baul, complemented by classical dance forms."
    },
    {
      image: "https://images.unsplash.com/photo-1546549039-326f1424e000?q=80&w=1854&auto=format&fit=crop",
      title: "Literature",
      description: "From Nobel laureate Rabindranath Tagore to modern authors, Bengali literature has a distinguished history of poetry, novels, and short stories."
    },
    {
      image: "https://images.unsplash.com/photo-1538128844159-f08f41bfb169?q=80&w=1964&auto=format&fit=crop",
      title: "Cuisine",
      description: "Bengali cuisine is known for its subtle flavors, emphasis on fish, extensive use of spices, and famous sweets like rasgulla and sandesh."
    }
  ];

  return (
    <section id="culture" className="py-16 md:py-24 bg-gradient-to-b from-bengali-blue/5 to-bengali-red/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bengali-dark">Bengali <span className="text-bengali-red">Culture</span></h2>
          <div className="w-24 h-1 bg-bengali-red mx-auto mt-4 mb-6"></div>
          <p className="text-bengali-dark/80 max-w-3xl mx-auto">
            Explore the rich cultural heritage of Bengal, from traditional arts and music to literature and cuisine.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {culturalElements.map((element, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img 
                  src={element.image} 
                  alt={element.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-bengali-dark mb-2">{element.title}</h3>
                <p className="text-bengali-dark/80">{element.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
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
      </div>
    </section>
  );
};

export default Culture;
