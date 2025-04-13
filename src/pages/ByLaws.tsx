import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ByLaws = () => {
  return (
    <div className="font-bengali">
      <Navbar />
      <main>
        <section className="py-16 md:py-24 bg-bengali-light">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between mb-8">
              <Link to="/" className="flex items-center text-bengali-red hover:text-bengali-red/80 transition-colors">
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span>Back to Home</span>
              </Link>
            </div>
            
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-5xl font-bold text-bengali-dark">By <span className="text-bengali-red">Laws</span></h1>
              <div className="w-24 h-1 bg-bengali-red mx-auto mt-4 mb-6"></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ByLaws; 