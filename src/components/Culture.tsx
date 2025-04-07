
import React from 'react';

const Culture = () => {
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
