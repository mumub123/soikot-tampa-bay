
import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const FlyerModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const flyers = [
    {
      src: "/lovable-uploads/da0c6adb-fac4-4b3b-9b6f-63a738c42fb0.png",
      alt: "Avid Entertainment Presents Durga Puja Celebration 2025 featuring Madhubanti Bagchi"
    },
    {
      src: "/lovable-uploads/c3a41759-7497-475d-857f-d085285f7727.png",
      alt: "Soikot Culturals Durga Puja 2025 - October 3-5 at ICC"
    },
    {
      src: "/lovable-uploads/139c7fe4-11fb-442a-a7d8-80276722a447.png", 
      alt: "Soikot's Durga Puja with folklore of Fashion & beats of Dhak"
    },
  ];

  useEffect(() => {
    // Show the flyer modal when the component mounts
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000); // Delay of 1 second for better UX

    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isOpen || flyers.length <= 1) return;

    const autoScroll = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % flyers.length);
    }, 4000); // 4 second delay

    return () => clearInterval(autoScroll);
  }, [isOpen, flyers.length]);

  const nextFlyer = () => {
    setCurrentIndex((prev) => (prev + 1) % flyers.length);
  };

  const prevFlyer = () => {
    setCurrentIndex((prev) => (prev - 1 + flyers.length) % flyers.length);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 md:top-16 z-[300] flex items-center justify-center bg-black/70 backdrop-blur-sm md:bg-black/50">
      <div className="relative max-w-2xl md:max-w-lg lg:max-w-xl w-full mx-4 animate-scale-in">
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute -top-4 -right-4 z-[310] bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200"
          aria-label="Close flyer and return to main page"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>
        
        {/* Flyer carousel */}
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="relative">
            {/* Navigation arrows */}
            {flyers.length > 1 && (
              <>
                <button
                  onClick={prevFlyer}
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-[305] bg-white/90 hover:bg-white rounded-full p-1 md:p-2 shadow-lg transition-all duration-200"
                  aria-label="Previous flyer"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                <button
                  onClick={nextFlyer}
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-[305] bg-white/90 hover:bg-white rounded-full p-1 md:p-2 shadow-lg transition-all duration-200"
                  aria-label="Next flyer"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
              </>
            )}
            
            {/* Current flyer */}
            <img
              src={flyers[currentIndex].src}
              alt={flyers[currentIndex].alt}
              className="w-full h-auto object-contain transition-opacity duration-300"
            />
            
            {/* Dots indicator */}
            {flyers.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {flyers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                    aria-label={`Go to flyer ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
          
          {/* Link under the flyer */}
          <div className="p-4 text-center bg-white border-t">
            <p className="text-sm text-gray-600 mb-2">
              For more details about Durga Puja 2025, 
              <a 
                href="/durga-puja-details" 
                className="text-bengali-red hover:text-bengali-red/80 font-medium ml-1"
              >
                click here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlyerModal;
