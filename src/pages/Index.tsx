
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Culture from '@/components/Culture';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import PermanentToaster from '@/components/PermanentToaster';

const Index = () => {
  return (
    <div className="font-bengali">
      <PermanentToaster />
      <div className="pt-12"> {/* Add padding to account for fixed toaster */}
        <Navbar />
        <main>
          <Hero />
          <About />
          <Culture />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
