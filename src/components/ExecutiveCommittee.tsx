
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const ExecutiveCommittee = () => {
  const committeeMembers = [
    "Tapas K. Das",
    "Manoj K. Lahiri",
    "Sanjoy Moitra",
    "Raja Sarker",
    "Jyotirmoy Sarkar",
    "Anupam Bandyopadhyay",
    "Aniruddha Sarkar",
    "Siddhartha Bose",
    "Kunal Rudra",
    "Aninda Sarkar",
    "Parikhit Nandy",
    "Priyanka Kumar",
    "Pritha Chakraborty"
  ];

  return (
    <div className="font-bengali">
      <div className="pointer-events-none opacity-50">
        <Navbar />
      </div>
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
              <h1 className="text-3xl md:text-5xl font-bold text-bengali-dark">Executive <span className="text-bengali-red">Committee</span></h1>
              <div className="w-24 h-1 bg-bengali-red mx-auto mt-4 mb-6"></div>
              <p className="text-bengali-dark/80 max-w-3xl mx-auto">
                Meet our dedicated team of volunteers who work tirelessly to serve the Bengali community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {committeeMembers.map((member, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-bengali-dark">{member}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <div className="pointer-events-none opacity-50">
        <Footer />
      </div>
    </div>
  );
};

export default ExecutiveCommittee;
