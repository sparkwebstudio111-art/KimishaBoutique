import React from "react";
import { ShoppingBag } from "lucide-react";
import banner from "../images/k.png";

function Banner() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-purple-200 py-10 sm:py-14 md:py-20 px-4">

      {/* Main Container */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden shadow-2xl">

        {/* LEFT SIDE */}
        <div className="bg-[#f6efe8] flex flex-col justify-center p-6 sm:p-8 md:p-12 lg:p-16">

          {/* Tagline */}
          <p className="text-xs sm:text-sm tracking-widest text-gray-500 mb-3 [font-family:'Poppins']">
            ELEVATE YOUR STYLE
          </p>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-purple-900 tracking-wide [font-family:'Playfair_Display']">
            KIMISHA
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-600 tracking-wide [font-family:'Playfair_Display']">
            BOUTIQUE
          </h2>

          {/* Subtitle */}
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg italic text-purple-800 [font-family:'Poppins']">
            Where Fashion Meets Elegance
          </p>

          {/* Description */}
          <div className="mt-4 sm:mt-6 text-gray-600 text-xs sm:text-sm leading-5 sm:leading-6 [font-family:'Poppins']">
            <p>ETHNIC WEAR | WESTERN WEAR | PARTY WEAR</p>
            <p>CUSTOM STITCHING | ACCESSORIES</p>
          </div>

          {/* ICON FEATURES */}
          <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:flex gap-4 sm:gap-6 text-center text-xs text-gray-600 [font-family:'Poppins']">

            {[
              { icon: "👗", label: "Exclusive" },
              { icon: "🌿", label: "Premium" },
              { icon: "✂️", label: "Perfect Fit" },
              { icon: "👜", label: "Shop Style" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 border rounded-full flex items-center justify-center mb-1 sm:mb-2">
                  {item.icon}
                </div>
                <p>{item.label}</p>
              </div>
            ))}

          </div>

          {/* BUTTON */}
          <div className="flex justify-center">
            <button className="mt-6 sm:mt-8 md:mt-10 w-fit px-6 sm:px-8 py-2 sm:py-3 bg-purple-900 text-white rounded-full text-sm sm:text-base  shadow-lg hover:scale-105 transition duration-300 flex items-center gap-2 sm:gap-3 [font-family:'Poppins']">
              SHOP NOW
              <ShoppingBag />
            </button>
          </div>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative w-full h-64 sm:h-80 md:h-auto">
          <img
            src={banner}
            alt="Boutique Model"
            className="w-full h-full object-cover md:object-contain md:p-6 lg:p-10"
          />
        </div>

      </div>
    </div>
  );
}

export default Banner;