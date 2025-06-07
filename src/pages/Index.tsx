
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Culture from '@/components/Culture';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="font-bengali">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Culture />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
