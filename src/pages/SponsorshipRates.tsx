import React from 'react';
import AllEventsNavbar from '@/components/AllEventsNavbar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SponsorshipRates = () => {
  const sponsorshipLevels = [
    {
      title: "Grand Sponsorship",
      amount: "$3000 and above",
      benefits: "Grand Sponsors are eligible to attend Durga Pujo and all events in 2024 for up to four adults and four children. Attendance for all future Society events up to September 1st, 2025 is free for them."
    },
    {
      title: "Platinum Sponsorship",
      amount: "$2000 and above",
      benefits: "Includes the same benefits as Grand Sponsorship"
    },
    {
      title: "Diamond Sponsorship",
      amount: "$1500 and above",
      benefits: "Include the same benefits as Grand and Platinum Sponsorship."
    },
    {
      title: "Gold Sponsorship",
      amount: "$1000 and above",
      benefits: "Includes attendance to Durga Pujo 2024 and all Soikot events throughout the year for up to four adults and four children. You will also receive complimentary access to all Soikot events until May 31st, 2025."
    },
    {
      title: "Silver Sponsorship",
      amount: "$650",
      benefits: "Silver Sponsors are eligible to attend the Durga Pujo and all event till 31st December 2024 for up to two adults and two children."
    }
  ];

  return (
    <div className="font-bengali">
      <AllEventsNavbar />
      <main>
        <section className="py-8 md:py-12 bg-bengali-light">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-5xl font-bold text-bengali-dark">
                <span className="bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">Sponsorship Rates</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto mt-4 mb-6"></div>
              <p className="text-bengali-dark/80 max-w-3xl mx-auto">
                Support our community by becoming a sponsor. Choose from our various sponsorship tiers below.
              </p>
            </div>

            <div className="space-y-8 max-w-4xl mx-auto">
              {sponsorshipLevels.map((level, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h2 className="text-2xl font-bold text-bengali-dark mb-2 md:mb-0">{level.title}</h2>
                      <p className="text-xl font-semibold text-bengali-red">{level.amount}</p>
                    </div>
                    <p className="text-bengali-dark/80">{level.benefits}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center" >
              <Link to="/donate">
                <Button className="bg-bengali-red hover:bg-bengali-red/90">
                  Make a Donation
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SponsorshipRates;
