import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Culture from '@/components/Culture';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SEO from "@/components/SEO";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "Soikot — Bengali Association of Tampa Bay",
      "url": "https://soikot.org/",
      "logo": "https://soikot.org/lovable-uploads/8f441cdb-2886-4773-a154-73ae64193a5c.png",
      "sameAs": [
        "https://www.facebook.com/soikotflorida",
        "https://www.instagram.com/soikotflorida",
        "https://www.youtube.com/@soikottampabay6527"
      ]
    },
    {
      "@type": "WebSite",
      "name": "Soikot — Bengali Association of Tampa Bay",
      "url": "https://soikot.org/"
    }
  ]
};

const Index = () => {
  return (
    <div className="font-bengali">
      <SEO title={"Soikot — Bengali Association of Tampa Bay"} description={"Soikot is the Bengali Association of Tampa Bay, celebrating Bengali culture, language, and traditions through festivals and community events."} path={"/"} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Culture />
        <Contact />
      </main>
      <Footer />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </div>
  );
};

export default Index;
