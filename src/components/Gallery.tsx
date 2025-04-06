
import React from 'react';

const Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1600077106724-946750eeaf3c?q=80&w=1780&auto=format&fit=crop",
      alt: "Durga Puja Celebration"
    },
    {
      url: "https://images.unsplash.com/photo-1628615547358-d5e9bf0eaf16?q=80&w=1966&auto=format&fit=crop",
      alt: "Traditional Dance Performance"
    },
    {
      url: "https://images.unsplash.com/photo-1606293926249-d5c780e2fa44?q=80&w=1965&auto=format&fit=crop",
      alt: "Cultural Festival"
    },
    {
      url: "https://images.unsplash.com/photo-1588075346300-f87b1d8836f4?q=80&w=1973&auto=format&fit=crop",
      alt: "Bengali Food Festival"
    },
    {
      url: "https://images.unsplash.com/photo-1623595119708-26b1f7500dec?q=80&w=1974&auto=format&fit=crop",
      alt: "Community Gathering"
    },
    {
      url: "https://images.unsplash.com/photo-1610613135504-247d5fd7844c?q=80&w=1856&auto=format&fit=crop",
      alt: "Children's Program"
    }
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bengali-dark">Our <span className="text-bengali-red">Gallery</span></h2>
          <div className="w-24 h-1 bg-bengali-red mx-auto mt-4 mb-6"></div>
          <p className="text-bengali-dark/80 max-w-3xl mx-auto">
            Glimpses of our community events, cultural celebrations, and other activities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg shadow-md group h-64"
            >
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-medium">{image.alt}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-transparent hover:bg-bengali-red text-bengali-red hover:text-white border border-bengali-red font-semibold py-2 px-6 rounded transition-colors duration-300">
            View More Photos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
