import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Sparkles } from "lucide-react";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">

        {/* Top Label */}

        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-2 backdrop-blur-md"
        >
          <Sparkles
            size={15}
            className="text-yellow-300"
          />

          <span
            className="text-sm uppercase tracking-[4px] text-gray-200"
            style={{ fontFamily: "Inter" }}
          >
            Kimisha Boutique
          </span>
        </motion.div>

        {/* Main Title */}

        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="max-w-4xl text-6xl font-semibold leading-tight text-[#E8D6FF] md:text-7xl lg:text-8xl"
          style={{
            fontFamily: "Cormorant Garamond",
          }}
        >
          Elevate Your
          <br />

          <span className="text-[#E8D6FF]">
            Style with Elegance
          </span>
        </motion.h1>

        {/* Divider */}

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{
            delay: 0.8,
            duration: 0.8,
          }}
          className="my-8 h-[2px] bg-[#d4b4ff]"
        />

        {/* Subtitle */}

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
          }}
          className="max-w-2xl text-lg leading-9 text-gray-300 md:text-xl"
          style={{
            fontFamily: "Inter",
          }}
        >
          Curated collections designed to celebrate timeless beauty,
          exceptional craftsmanship, and effortless sophistication for
          every occasion.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.7,
            duration: 0.8,
          }}
          className="mt-12 flex flex-wrap items-center justify-center gap-5"
        >
          <NavLink to="/products">
            <button
              className="rounded-full border border-[#d4b4ff] bg-[#5B2C6F] px-9 py-4 text-white transition-all duration-300 hover:scale-105 hover:bg-[#6e3488]"
              style={{ fontFamily: "Inter" }}
            >
              Explore Collection
            </button>
          </NavLink>

          <NavLink to="/contact">
            <button
              className="rounded-full border border-white/20 bg-white/10 px-9 py-4 text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
              style={{ fontFamily: "Inter" }}
            >
              Get in Touch
            </button>
          </NavLink>
        </motion.div>

        {/* Bottom Text */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.2,
            duration: 1,
          }}
          className="mt-20"
        >
          <p
            className="text-sm uppercase tracking-[6px] text-yellow-400"
            style={{ fontFamily: "Inter" }}
          >
            Luxury • Elegance • Confidence
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;