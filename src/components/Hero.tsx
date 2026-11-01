import React from "react";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  MapPin,
  Facebook,
  Instagram,
  ExternalLink,
  BookOpen,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import probahoCoverImg from "@/assets/probaho-2026-cover.jpg.asset.json";
import kaliIdolImg from "@/assets/kali-puja-2026-idol.jpeg.asset.json";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-b from-white via-bengali-orange/15 to-bengali-light/40 overflow-hidden"
    >
      <div className="absolute inset-0 bg-bengali-pattern opacity-10"></div>
      <div className="container mx-auto px-4 md:px-6 py-4 md:py-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="block text-bengali-red font-bengali">Soikot</span>

            <span className="block text-2xl md:text-3xl text-bengali-dark mt-2">Bengali Association of Tampa Bay</span>
          </h1>
          <p className="text-sm md:text-base text-bengali-dark my-4 max-w-2xl mx-auto">
            Celebrating and preserving Bengali culture, language, and traditions through community events, education,
            and humanitarian efforts.
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 mb-6">
            <a
              href="https://www.facebook.com/soikotflorida"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full text-white transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/soikotflorida"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 p-3 rounded-full text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/@soikottampabay6527"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group transition-all duration-300"
            >
              <img
                src="/lovable-uploads/9f4f36a8-f7e0-48d2-8951-51cd16731586.png"
                alt="YouTube"
                width={1024}
                height={1024}
                className="w-11 h-11 rounded-full"
              />
              <div className="absolute inset-0 bg-red-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Probaho 2026 Published Splash */}
          <div className="w-full max-w-4xl mx-auto mb-10">
            <a
              href="https://anyflip.com/srkj/qtnj"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-2xl border border-bengali-red/25 bg-gradient-to-r from-bengali-red/10 via-bengali-orange/10 to-bengali-yellow/15 p-6 md:p-8 shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
            >
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 animate-sheen bg-gradient-to-r from-transparent via-white/55 to-transparent"></div>
              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 md:gap-8">
                <img
                  src={probahoCoverImg.url}
                  alt="Probaho 2026 magazine cover"
                  width={583}
                  height={754}
                  loading="lazy"
                  decoding="async"
                  className="w-36 sm:w-44 shrink-0 rounded-xl shadow-2xl ring-4 ring-white/70 -rotate-3 transition-transform duration-300 group-hover:rotate-0 group-hover:scale-105"
                />
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-bengali-dark">Probaho 2026</h3>
                  <p className="text-sm md:text-base text-bengali-dark/90 max-w-xl mx-auto sm:mx-0 mt-2">
                    Probaho, our annual magazine, brings together stories, poems, art, and memories contributed by the
                    whole Soikot family — a celebration of our community's creativity. Tap here to read it.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 rounded-xl bg-bengali-red px-5 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:gap-3 group-hover:bg-bengali-red/90">
                    <BookOpen className="h-4 w-4" aria-hidden="true" />
                    Read the Magazine
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* Silver Jubilee Durga Puja 2027 Banner */}
          <div className="w-full max-w-4xl mx-auto mb-10">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-bengali-red via-bengali-orange to-bengali-yellow p-1 shadow-2xl">
              <div className="relative rounded-[14px] bg-white/95 px-6 py-8 md:px-10 text-center">
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 animate-sheen bg-gradient-to-r from-transparent via-bengali-orange/25 to-transparent"></div>
                <div className="relative z-10">
                  <span className="inline-flex items-center gap-2 rounded-full bg-bengali-red px-5 py-2 text-xs md:text-sm font-extrabold uppercase tracking-[0.15em] text-white shadow-lg">
                    <Sparkles className="h-4 w-4 shrink-0" aria-hidden="true" />
                    25 Years of Soikot Durga Puja
                    <Sparkles className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-2xl md:text-4xl font-extrabold text-bengali-dark">
                    <span className="bg-gradient-to-r from-bengali-red to-bengali-orange bg-clip-text text-transparent">
                      Silver Jubilee Durga Puja 2027
                    </span>
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-bengali-dark/90 max-w-2xl mx-auto">
                    Soikot will host its{" "}
                    <span className="font-bold text-bengali-red">
                      25th year Silver Jubilee Durga Puja celebration for four grand days
                    </span>{" "}
                    — October 7–10, 2027 — at the Indian Cultural Center. Save the dates now — bigger festivities,
                    bigger blessings, and we want you to be part of it from the very start.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Event Section */}
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">
              Upcoming Events
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto mt-4 mb-6"></div>
          <div className="my-6 w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Kali Puja Tile */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/20 w-full">
              <div className="text-center pt-4 pb-2 px-4">
                <h3 className="text-2xl md:text-3xl font-bold text-bengali-dark mb-2">
                  <span className="bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent">
                    Kali Puja
                  </span>
                </h3>
              </div>

              <div className="relative h-48">
                <img
                  src={kaliIdolImg.url}
                  alt="Kali Puja"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 text-left">
                <div className="flex items-center text-bengali-dark mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">November 7, 2026</span>
                </div>
                <div className="flex items-center text-bengali-dark mb-2">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">6:00 PM - 10:30 PM</span>
                </div>
                <div className="flex items-center text-bengali-dark mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">Indian Cultural Center</span>
                  <a
                    href="https://www.google.com/maps/place/Indian+Cultural+Center/@28.0453,-82.5385749,16z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center ml-2 text-bengali-red hover:text-bengali-red/80"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-bengali-dark mb-3">
                  Join us for Kali Puja as we honor the goddess Kali with traditional practices, prayers, and vibrant
                  celebrations — and be part of the fun experience of fireworks lighting up the night.
                </p>
                <div className="flex justify-center">
                  <Link to="/donate" className="w-48">
                    <Button className="w-full bg-bengali-red hover:bg-bengali-red/90 text-white px-4 py-2 text-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold">
                      Register and Donate
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Saraswati Puja 2027 Tile */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/20 w-full">
              <div className="text-center pt-4 pb-2 px-4">
                <h3 className="text-2xl md:text-3xl font-bold text-bengali-dark mb-2">
                  <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                    Saraswati Puja
                  </span>
                </h3>
              </div>

              <div className="relative h-48">
                <img
                  src="/lovable-uploads/saraswati-puja.jpeg"
                  alt="Saraswati Puja"
                  width={640}
                  height={275}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 text-left">
                <div className="flex items-center text-bengali-dark mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">February 13, 2027</span>
                </div>
                <div className="flex items-center text-bengali-dark mb-2">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">11:00 AM - 10:00 PM</span>
                </div>
                <div className="flex items-center text-bengali-dark mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">Indian Cultural Center</span>
                </div>
                <p className="text-bengali-dark mb-3">
                  Join us for Saraswati Puja as we honor the goddess of knowledge and learning with traditional
                  ceremonies and cultural performances.
                </p>
                <div className="flex justify-center">
                  <Button
                    className="w-48 bg-bengali-red hover:bg-bengali-red/90 text-white px-4 py-2 text-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
                    disabled
                  >
                    Coming Soon
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/events">
              <Button className="bg-white hover:bg-bengali-red/10 text-bengali-red border border-bengali-red px-6 py-2 text-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-light hover:border-bengali-red/80">
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
