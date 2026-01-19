import React from "react";
import AllEventsNavbar from "@/components/AllEventsNavbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Sponsors = () => {
  const sponsorTiers = [
    {
      title: "Grand Sponsors",
      amount: "$3000 and above",
      sponsors: [
        "Nandini & Basudeb De",
        "Sarbani & Aniruddha Guha Sarkar",
        "Saswati & Subhadip Chatterjee",
        "Sulekha & RajKumar Natarajan",
        "Arup & Sudebi Aditya",
        "Sudipa & Anando Som",
        "Madhumita & Jyotirmoy Sarkar",
      ],
    },
    {
      title: "Platinum Sponsors",
      amount: "$2000 and above",
      sponsors: [
        "Madhurima & Tapas Das",
        "Sayantani & Anupam Bandyopadhyay",
        "Puja Kathuria & Siddhartha Bose",
        "Trishna & Aninda Sarkar",
        "Sarmishta & Sambit Banerjee",
        "Soma & Sanjoy Moitra",
        "Nivedita & Shivaji Sarkar",
        "Rajkumari & Soumyajyoti Bose",
        "Baishakhi & Sujit Ghosh",
      ],
    },
    {
      title: "Diamond Sponsors",
      amount: "$1500 and above",
      sponsors: [
        "Avantika & Kaushik Sinha",
        "Mahuya Pal & Ambar Basu",
        "Annapurna & Indranil Bagchi",
        "Indranil Sohini Chakravarty",
        "Bijoya & Pratim Bose",
        "Rumela Das",
        "Simonti & Sujoy Choudhri",
        "Shoma & Sumit Ghosh",
        "Kalit & Surajit Roy",
        "Susmita & Somen Adhikari",
        "Swagata Batabyal",
        "Taaza Mart",
      ],
    },
    {
      title: "Gold Sponsors",
      amount: "$1000 and above",
      sponsors: [
        "Ashok Bhatia",
        "Susmita & Sutap Chatterjee",
        "Keya & Argha Mukherjee",
        "Iver Solution",
        "Koruna Dutta Pathak & Sunit Pathak",
        "Pallavi Choudhury & Abhijit Talukdar",
        "Mahasweta & Indrajit Mukherjee",
        "Shilpi & Kunal Rudra",
        "Piyali & Tuhin Saha",
        "Tanzeena & Adhiraj Ghoshal",
        "Moumita Roy Adhikari & Angan Adhikari",
        "Taniya & Anindya Bhowmick",
        "Anurita Bhunia",
        "Sujata Pal Chowdhury & Arijit Chakraborty",
        "Rituparna & Avik Samanta",
        "Dipanwita Chowdhury & Bratin Jana",
        "Pragyamita & Debapriya Kundu",
        "Joita Ghosh & Ramprasad Das",
        "Anindita & Kaushik Dutta",
        "Moumita Bhattacharjee & Manjit Chakraborty",
        "Sathi & Mithu Dastidar",
        "Nisani & Nabin Das",
        "Peu Dutta & Niraj Mishra",
        "Susmita & Parikkhit Nandy",
        "Payel Dutta & Prabir Das",
        "Shreya & Rajarshi Nag",
        "Robi Banerjee",
        "Saket Srivastava",
        "Anasua Chattapadhyay & Sandip Lahiri",
        "Swati Mazumder & Sandip Mukherjee",
        "Srestha & Sarbajit Maitra",
        "Ruma & Saurav Hazra",
        "Priyanka & Sauvik Chatterjee",
        "Priyanka & Shashi Kumar",
        "Priyadarshini & Shubhendro Chatterjee",
        "Somtirtha Banerjee",
        "Arpita & Subhasis Ghosh",
        "Subhashree & Subir Mukherjee",
        "Nandini & Subrata Bandyopadhyay",
        "Sonia Mukherjee Chakraborty & Suman Chakraborty",
        "Suvdip Mukherjee",
        "Triparna Deverdee",
      ],
    },
    {
      title: "Silver Sponsors",
      amount: "$650 and above",
      sponsors: [
        "Manju & Buddhadeb Basu",
        "Anya M. Nath & Saurav Jay Chandra",
        "Paromita & Avik Ganguly",
        "Soma & Joydeep Mukherjee",
        "Anirban Dawn",
        "Mahasweta Das & Anirban Chakraborty",
        "Rituparna & Arijit Saha",
        "Arnab Pandey",
        "Arnab Ray",
        "Swagata & Avik Roy",
        "Susmita & Biswarup Saha",
        "Amrita & Debattam Dey",
        "Amrita & Digbijoy Das",
        "Arundhati & Dipak Roy",
        "Anindita & Dipanjan Ghosh",
        "Pritha & Dwaipayan Chakraborty",
        "Jhuma & Anindya Datta",
        "Tamali & Maloy Roy",
        "Ananwita Das & Manas Subudhi",
        "Pekham Majumder",
        "Priyanka & Pintu Mishra",
        "Koushika Kalyani Guha & Prabhakar Guha",
        "Pranab Pyne",
        "Rabi Ghoshdastidar",
        "Ojaswita & Ritaban Sengupta",
        "Samik Ghatak",
        "Bandita De Bhar & Santanu Bhar",
        "Sayan Dutta",
        "Debarati & Shuvanker Ghosh",
        "Rita & Shyamal Bar",
        "Briti Sen Chakraborty & Sinchan Chakraborty",
        "Sonali Mukherjee & Soumya Roy",
        "Dipanwita & Soumyadeep Chakraborty",
        "Sujoy Chowdhury",
        "Surojit Dutta",
        "Jhumur & Tapan Gosh",
      ],
    },
  ];

  return (
    <div className="font-bengali">
      <AllEventsNavbar />
      <main>
        <section className="py-8 md:py-12 bg-bengali-light">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-5xl font-bold text-bengali-dark">
                <span className="bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">
                  Our 2025-2026 Sponsors
                </span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto mt-4 mb-6"></div>
              <p className="text-bengali-dark/80 max-w-3xl mx-auto">
                We are grateful to our sponsors for their generous support in helping us promote Bengali culture and
                community.
              </p>
            </div>

            <div className="space-y-12">
              {sponsorTiers.map((tier, index) => (
                <div key={index} className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-bengali-dark">{tier.title}</h2>
                    <p className="text-bengali-red font-medium mt-2">{tier.amount}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tier.sponsors.map((sponsor, sponsorIndex) => (
                      <Card key={sponsorIndex} className="border-none shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <p className="text-bengali-dark text-center">{sponsor}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link to="/sponsorship-rates">
                <Button className="bg-bengali-red hover:bg-bengali-red/90">Become a Sponsor</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Sponsors;
