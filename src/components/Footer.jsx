
import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

import spark from "../images/spark.png";
import logo from "../images/logo.jpeg";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#1b0b2d] via-[#3b1363] to-[#1d1136] text-white">

      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-purple-500/20 blur-[120px]" />
      <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-pink-500/20 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>

            <div className="flex items-center gap-4">

              <div className="rounded-full border border-white/20 bg-white/10 p-1 backdrop-blur-lg">
                <img
                  src={logo}
                  alt="Kimisha Boutique"
                  className="h-16 w-16 rounded-full object-cover"
                />
              </div>

              <div>
                <h2
                  className="text-4xl text-white"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  Kimisha
                </h2>

                <p className="text-xs uppercase tracking-[5px] text-purple-200">
                  Boutique
                </p>
              </div>

            </div>

            <p className="mt-6 text-sm leading-7 text-gray-300">
              Discover timeless elegance with exclusive collections
              crafted for every occasion. Experience luxury,
              sophistication, and style.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="mb-5 text-xl font-semibold">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-300">

              <Link to="/" className="transition hover:text-purple-300">
                Home
              </Link>

              <Link to="/About" className="transition hover:text-purple-300">
                About
              </Link>

              <Link to="/Products" className="transition hover:text-purple-300">
                Collections
              </Link>

              <Link to="/Contact" className="transition hover:text-purple-300">
                Contact
              </Link>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="mb-5 text-xl font-semibold">
              Contact
            </h3>

            <div className="space-y-4 text-gray-300">

              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-1 text-purple-300" />
                <span>+91 90038 66443</span>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-1 text-purple-300" />
                <span>info@kimishaboutique.com</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-purple-300" />
                <span>Tamil Nadu, India</span>
              </div>

            </div>

          </div>

          {/* About */}
          <div>

            <h3 className="mb-5 text-xl font-semibold">
              Our Promise
            </h3>

            <p className="text-sm leading-7 text-gray-300">
              We deliver premium quality fashion with elegant
              craftsmanship, exceptional customer service,
              and timeless designs made for every woman.
            </p>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col lg:flex-row items-center justify-between gap-5">

          <p className="text-sm text-center text-gray-300">
            © {new Date().getFullYear()} Kimisha Boutique.
            All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-purple-200">

            <span>Designed & Developed by</span>

            <span className="font-semibold text-yellow-400">
              Spark Web Studio
            </span>

            <motion.img
              src={spark}
              alt="Spark Web Studio"
              className="h-7 w-7 object-contain"
              animate={{
                y: [0, -6, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.2,
                rotate: 360,
                transition: {
                  duration: 0.6,
                },
              }}
            />

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;