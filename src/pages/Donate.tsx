import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, CheckCircle2, CreditCard, QrCode } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const Donate = () => {
  return (
    <div className="font-bengali">
      <div className="pointer-events-none opacity-50">
        <Navbar />
      </div>
      <main>
        <section className="py-16 md:py-24 bg-gradient-to-b from-bengali-light to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between mb-8">
              <Link to="/" className="flex items-center text-bengali-red hover:text-bengali-red/80 transition-colors">
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span>Back to Home</span>
              </Link>
            </div>
            
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-5xl font-bold text-bengali-dark">Support Our Community</h1>
              <div className="w-24 h-1 bg-bengali-red mx-auto mt-4 mb-6"></div>
              <p className="text-bengali-dark/80 max-w-3xl mx-auto">
                Your contribution helps us promote and preserve Bengali culture, language, and traditions.
              </p>
              <div className="mt-4 p-4 bg-green-50 rounded-lg inline-block">
                <p className="text-green-800 font-medium">
                  Soikot is a 501(c)(3) non-profit organization.<br />
                  All donations to Soikot are tax deductible.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-none bg-white/50 backdrop-blur">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <QrCode className="w-8 h-8 text-bengali-red mr-3" />
                    <h2 className="text-2xl font-bold text-bengali-dark">Pay with Zelle</h2>
                  </div>
                  <div className="space-y-4">
                    <p className="text-bengali-dark/80">
                      <i>Scan the QR code or send payment to:</i>
                    </p>
                    <p className="text-bengali-red font-medium text-lg">soikotflorida@gmail.com</p>
                    <div className="mt-4">
                      <img 
                        src="/lovable-uploads/zelle-code-for-soikot-1200x998.jpeg" 
                        alt="Zelle QR Code for Soikot" 
                        className="max-w-[200px] w-full"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-none bg-white/50 backdrop-blur">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <CreditCard className="w-8 h-8 text-bengali-red mr-3" />
                    <h2 className="text-2xl font-bold text-bengali-dark">Pay by Check</h2>
                  </div>
                  <div className="space-y-4">
                    <p className="text-bengali-dark/80">Make checks payable to:</p>
                    <p className="font-medium text-bengali-dark">Soikot</p>
                    <p className="text-bengali-dark/80">Mail to:</p>
                    <p className="text-bengali-dark">
                      Soikot<br />
                      17310 Chenango Ln<br />
                      Tampa FL 33647-3503
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Link to="/sponsorship-rates">
                <Button className="bg-bengali-red hover:bg-bengali-red/90">
                  View Sponsorship Tiers
                </Button>
              </Link>
              <div className="mt-4 flex items-center justify-center space-x-2 text-bengali-dark/60">
                <CheckCircle2 className="w-4 h-4" />
                <span>See all benefits and sponsorship options</span>
              </div>
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

export default Donate; 