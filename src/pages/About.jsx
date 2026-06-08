import React from "react";
import { motion } from "framer-motion";
import about from "../images/about.png"
import aboutbanner from "../images/aboutImg.png"
import aboutImg from "../images/kimishaBackground.png"; // Replace with your boutique image
import {Link} from "react-router-dom"

function About() {
  return (

<div>
    
        <div className="fixed inset-0 -z-50 overflow-hidden bg-[#14091d]">
  <img
    src={aboutbanner}
    alt="Kimisha Boutique"
    className="
      absolute
      inset-0
      h-full
      w-full
      object-cover
      object-center
      scale-105
      select-none
      pointer-events-none
    "
  />

  <div className="absolute inset-0 bg-black/45" />

  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-[#14091d]/90" />
</div>
       
             {/* Soft Overlay */}
       
             <div className="fixed inset-0 -z-40 bg-gradient-to-b from-black/30 via-black/30 to-black/30" />
      
    <div className="relative z-10 min-h-screen">
<section className="relative overflow-hidden pb-24 md:pt-22 pt-10 px-6 lg:px-20">
      {/* Background Effects */}
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-purple-500/10 blur-[180px]" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-pink-400/10 blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span
            className="uppercase tracking-[7px] text-sm text-[#d9b8ff]"
            style={{ fontFamily: "Inter" }}
          >
            ABOUT US
          </span>

          <h2
            className="mt-4 text-5xl md:text-6xl text-white"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            Crafting Elegance With Every Stitch
          </h2>

          <p
            className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-gray-300"
            style={{ fontFamily: "Inter" }}
          >
            Blending timeless craftsmanship with modern fashion to create
            personalized designs that celebrate your unique style.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
              <img
                src={about }
                alt="Boutique"
                className="h-[650px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

        
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3
              className="text-4xl text-white leading-tight"
              style={{ fontFamily: "Cormorant Garamond" }}
            >
              Fashion That Reflects Your Personality
            </h3>

            <p
              className="mt-8 text-gray-300 leading-8 text-lg"
              style={{ fontFamily: "Inter" }}
            >
              At our boutique, every outfit is designed with passion,
              creativity, and precision. We specialize in designer wear,
              bridal collections, customized stitching, machine work, and
              exquisite Aari & thread embroidery that transforms fabric into
              timeless art.
            </p>

            <p
              className="mt-6 text-gray-300 leading-8 text-lg"
              style={{ fontFamily: "Inter" }}
            >
              Our experienced artisans focus on premium quality, perfect
              fitting, and attention to detail, ensuring every creation is as
              unique as the person wearing it. From concept to completion, we
              are committed to delivering elegance in every stitch.
            </p>

            {/* Features */}
            <div className="grid gap-5 mt-10 sm:grid-cols-2">
              {[
                "Customized Designer Wear",
                "Premium Aari Work",
                "Perfect Tailoring",
                "Bridal Collections",
                "Luxury Embroidery",
                "Personalized Service",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-lg"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d9b8ff] text-black font-bold">
                    ✓
                  </div>

                  <span
                    className="text-gray-200"
                    style={{ fontFamily: "Inter" }}
                  >
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Button */}
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="mt-12 rounded-full border border-[#d9b8ff] px-8 py-4 text-white transition hover:bg-[#d9b8ff] hover:text-black"
              style={{ fontFamily: "Inter" }}
            >
             <Link to="/Products" > Explore Our Collections →</Link>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
    </div>

    
    </div>
  );
}

export default About;