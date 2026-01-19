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
        "Anindita & Raja Sarker",
        "Baishakhi & Sujit Ghosh",
        "Madhurima & Tapas Das",
        "Puja Kathuria & Siddhartha Bose",
        "Sayantani & Anupam Bandyopadhyay",
        "Sudipa & Anando Som",
      ],
    },
    {
      title: "Diamond Sponsors",
      amount: "$1500 and above",
      sponsors: [
        "Annapurna & Indranil Bagchi",
        "Ashru & Liton Saha",
        "Avantika & Kaushik Sinha",
        "Nivedita & Shivaji Sarkar",
        "Rajkumari & Soumyajyoti Bose",
        "Soma & Sanjoy Moitra",
        "Sudebi & Arup Aditya",
        "Susmita & Somen Adhikari",
        "Trishna & Aninda Sarkar",
      ],
    },
    {
      title: "Gold Sponsors",
      amount: "$1000 and above",
      sponsors: [
        "Anandita Karmakar & Arindam Sabui",
        "Anindita & Kaushik Dutta",
        "Anurita Bhunia",
        "Jhuma Nath & Anindya Datta",
        "Kalit & Surajit Roy",
        "Keya & Argha Mukherjee",
        "Koruna Dutta Pathak & Sunit Pathak",
        "Mahasweta & Indrajit Mukherjee",
        "Mahuya Pal & Ambar Basu",
        "Moumita Bhattacharjee & Manjit Chakraborty",
        "Nandini & Subrata Bandyopadhyay",
        "Nishani & Nabin Das",
        "Pallavi Choudhury & Abhijit Talukdar",
        "Paromita & Avik Ganguly",
        "Payel Dutta & Prabir Das",
        "Peu Dutta & Niraj Mishra",
        "Pragyamita & Debapriya Kundu",
        "Sandhyasree & Gautam Bose",
        "Sarmishta & Sambit Banerjee",
        "Seema & Santosh Verma",
        "Sharmistha & Arabinda Banerjee",
        "Shilpi & Kunal Rudra",
        "Shoma & Sumit Ghosh",
        "Sohini Mukherjee & Neil Chakravarty",
        "Sonia Mukherjee Chakraborty & Suman Chakraborty",
        "Sujata Pal Chowdhury & Arijit Chakraborty",
        "Susmita & Parikkhit Nandy",
        "Susmita & Sutap Chatterjee",
        "Taniya & Anindya Bhowmick",
        "Lajawab - Cater4U Hospitality LLC",
      ],
    },
    {
      title: "Silver Sponsors",
      amount: "$650 and above",
      sponsors: [
        "Amrita & Digbijoy Das",
        "Anandita Ghosh & Arunava Roy",
        "Ananwita Das & Manas Subudhi",
        "Anya M. Nath & Saurav Jay Chandra",
        "Arpita & Subhasis Ghosh",
        "Arunima Ghose & Tapan Bagui",
        "Bandita De Bhar & Santanu Bhar",
        "Briti Sen Chakraborty & Sinchan Chakraborty",
        "Debarati & Shuvanker Ghosh",
        "Dipanwita Bhattacharya & Soumyadeep Chakraborty",
        "Dipanwita Chowdhury & Bratin Jana",
        "Gopa & Somtirtha Banerjee",
        "Joita Ghosh & Ramprasad Das",
        "Koushika Kalyani Guha & Prabhakar Guha",
        "Mahasweta Das & Anirban Chakraborty",
        "Manju & Buddhadeb Basu",
        "Moumita Roy Adhikari & Angan Adhikari",
        "Ojaswita Chatterjee Sengupta & Ritaban Sengupta",
        "Piyali & Tuhin Saha",
        "Poly & Ranjan Chowdhury",
        "Pooja & Joy Upadhyay",
        "Pritha & Dwaipayan Chakraborty",
        "Priyanka & Pintu Mishra",
        "Priyanka & Shashi Kumar",
        "Priyanka Dasgupta Chatterjee & Sauvik Chatterjee",
        "Rabi Ghoshdastidar",
        "Rita & Shyamal Bar",
        "Rituparna Sen & Arijit Saha",
        "Ruma Dey Hazra & Saurav Hazra",
        "Sathi & Mithu Dastidar",
        "Shreya Guha Roy & Rajarshi Nag",
        "Srestha & Sarbajit Maitra",
        "Subhashree & Subir Mukherjee",
        "Susmita Paul Saha & Biswarup Saha",
        "Swati Mazumder & Sandip Mukherjee",
        "Tanzeena Mukherjee & Adhiraj Ghoshal",
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
