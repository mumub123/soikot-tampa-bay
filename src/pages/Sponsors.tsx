import React from "react";
import AllEventsNavbar from "@/components/AllEventsNavbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEO from "@/components/SEO";

const Sponsors = () => {
  const sponsorTiers = [
    {
      title: "Grand Sponsors",
      amount: "$3000 and above",
      sponsors: [
        "Anindita & Raja Sarker",
        "Madhumita & Jyotirmoy Sarkar **",
        "Sudipa & Anando Som",
      ],
    },
    {
      title: "Platinum Sponsors",
      amount: "$2000 and above",
      sponsors: [
        "Anasua Chattapadhyay & Sandip Lahiri",
        "Debarati & Shuvanker Ghosh **",
        "Madhurima & Tapas Das",
        "Nandini De",
        "Nivedita & Shivaji Sarkar **",
        "Piyali & Tuhin Saha **",
        "Pragyamita & Debapriya Kundu **",
        "Puja Kathuria & Siddhartha Bose",
        "Rajkumari & Soumyajyoti Bose",
        "Rumela Das",
        "Sarbani & Aniruddha Guha Sarkar **",
        "Sarmishta & Sambit Banerjee",
        "Saswati & Subhadip Chatterjee",
        "Sayantani & Anupam Bandyopadhyay **",
        "Simonti & Sujoy Choudhri",
        "Sudebi & Arup Aditya",
        "Sohini Mukherjee & Indranil Chakravarty **",
        "Soma & Sanjoy Moitra",
        "Sulekha & RajKumar Natarajan",
        "Susmita & Somen Adhikari",
        "Trishna & Aninda Sarkar",
      ],
    },
    {
      title: "Diamond Sponsors",
      amount: "$1500 and above",
      sponsors: [
        "Anandita Karmakar & Arindam Sabui",
        "Avantika & Kaushik Sinha",
        "Bijoya & Pratim Bose",
        "Soma & Sumon Roy **",
        "Sujata Pal Chowdhury & Arijit Chakraborty",
        "Swagata Batabyal",
      ],
    },
    {
      title: "Gold Sponsors",
      amount: "$1000 and above",
      sponsors: [
        "Amrita Homchoudhury & Suvdip Mukherjee",
        "Anindita & Kaushik Dutta",
        "Annapurna & Indranil Bagchi",
        "Anurita Bhunia",
        "Arpita & Subhasis Ghosh",
        "Arundhati & Dipak Roy",
        "Briti Sen & Sinchan Chakraborty",
        "Chandrima Palit & Jyotishko Dutta",
        "Dipanwita Chowdhury & Bratin Jana",
        "Gopa & Somtirtha Banerjee",
        "Jhuma & Anindya Datta",
        "Kalit & Surajit Roy",
        "Keya & Argha Mukherjee",
        "Koruna Dutta & Sunit Pathak",
        "Mahasweta & Indrajit Mukherjee",
        "Mahuya Pal & Ambar Basu",
        "Manisha & Amal Chakraburtty",
        "Manishi & Dipak K Mukherjee",
        "Manju & Buddhadeb Basu",
        "Megha & Ashok Bhatia **",
        "Moumita & Angan Adhikari",
        "Moumita Bhattacharjee & Manjit Chakraborty",
        "Nandini & Subrata Bandyopadhyay",
        "Nisani & Nabin Das",
        "Pallavi Choudhury & Abhijit Talukdar",
        "Peu Dutta & Niraj Mishra",
        "Piue Tewary **",
        "Priyanka & Sauvik Chatterjee",
        "Priyanka & Shashi Kumar **",
        "Ruma & Saurav Hazra",
        "Seema Kumari Soni & Santosh Verma",
        "Sharmistha & Arabinda Banerjee",
        "Shikha & Saket Srivastava **",
        "Shilpi & Kunal Rudra",
        "Shoma & Sumit Ghosh",
        "Sonia Mukherjee & Suman Chakraborty",
        "Srestha & Sarbajit Maitra",
        "Srijita Mukherjee & Arnab Pandey",
        "Subhashree & Subir Mukherjee **",
        "Suparna & Debasis Basu",
        "Susmita & Parikkhit Nandy",
        "Swati Mazumder & Sandip Mukherjee",
        "Taniya & Anindya Bhowmick",
        "Tapas Roy **",
      ],
    },
    {
      title: "Silver Sponsors",
      amount: "$650 and above",
      sponsors: [
        "Amrita & Debattam Dey",
        "Amrita & Digbijoy Das",
        "Ananwita Das & Manas Subudhi",
        "Bandita De & Santanu Bhar",
        "Bhootnath Singh",
        "Debasmita Banerjee & Anirban Dawn",
        "Dipanwita & Soumyadeep Chakraborty",
        "Joita Ghosh & Ramprasad Das",
        "Koushika Kalyani Guha & Prabhakar Guha",
        "Mahasweta Das & Anirban Chakraborty",
        "Nilanjan Dey",
        "Papri & Anupam Rishi",
        "Paromita & Avik Ganguly",
        "Pratibha & Samik Ghatak",
        "Priyadarshini & Shubhendro Chatterjee",
        "Priyanka & Pintu Mishra",
        "Pritha & Dwaipayan Chakraborty",
        "Rajesh Gautam",
        "Rita & Shyamal Bar",
        "Rituparna & Arnab Ray",
        "Rituparna Sen & Arijit Saha",
        "Sahana & Somenath Banerjee **",
        "Sharmila & Priyankur Roy",
        "Sonali Mukherjee & Soumya Roy",
        "Somdutta & Surojit Dutta",
        "Swagata & Avik Roy",
        "Susmita & Biswarup Saha",
        "Susmita & Sutap Chatterjee",
      ],
    },
  ];

  return (
    <div className="font-bengali">
      <SEO
        title={"Our Sponsors - Soikot"}
        description={
          "Meet the generous sponsors supporting Soikot's Bengali cultural events and community programs in Tampa Bay."
        }
        path={"/sponsors"}
      />
      <AllEventsNavbar />
      <main>
        <section className="py-8 md:py-12 bg-bengali-light">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-5xl font-bold text-bengali-dark">
                <span className="bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">
                  Our 2026-2027 Sponsors
                </span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto mt-4 mb-6"></div>
              <p className="text-bengali-dark max-w-3xl mx-auto">
                We are grateful to our sponsors for their generous support in helping us promote Bengali culture and
                community.
              </p>
            </div>

            <div className="max-w-3xl mx-auto mb-10">
              <div className="bg-white border-l-4 border-bengali-red shadow-sm rounded-lg p-4 md:p-5 flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-bengali-red mt-0.5 shrink-0" />
                <p className="text-sm md:text-base text-bengali-dark text-left">
                  <span className="font-bold">**</span> indicates sponsors whose gifts were matched by their employer's
                  company matching program. A sponsor's tier is determined by their combined contribution — personal
                  donation plus company matching.
                </p>
              </div>
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

            <p className="mt-8 text-center text-sm text-bengali-dark/80">
              <span className="font-bold">**</span> indicates sponsors whose gifts were matched by their employer's
              company matching program. A sponsor's tier is determined by their combined contribution — personal
              donation plus company matching.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Sponsors;
