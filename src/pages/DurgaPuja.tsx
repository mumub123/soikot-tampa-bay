import React from 'react';
import { Button } from '@/components/ui/button';

const DurgaPuja = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-bengali-blue/5 to-bengali-red/5">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-bengali-dark mb-6">
            Durga <span className="text-bengali-red">Puja</span>
          </h1>
          <div className="w-24 h-1 bg-bengali-red mb-8"></div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
            <p className="text-bengali-dark/80 mb-4">
              Details coming soon...
            </p>
          </div>
          
          <div className="flex justify-center">
            <Button 
              className="bg-bengali-red hover:bg-bengali-red/90"
              onClick={() => window.history.back()}
            >
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DurgaPuja; 