import React from "react";
import { motion } from "framer-motion";

import one from "../images/servieOne.png";
import machine from "../images/serviceTwo.png";
import thread from "../images/serviceThree.png";
import { link } from "framer-motion/client";
import {Link} from "react-router-dom"

const services = [
  {
    id: "01",
    title: "Dress Collections",
    desc: "Exclusive bridal wear, kids collections, party dresses and designer outfits crafted with elegance and attention to every detail.",
    image: one,
    link: "/Products"
  },
  {
    id: "02",
    title: "Machine Work",
    desc: "Designer blouses, Anarkali suits, maxi dresses, half sarees and customized stitching tailored perfectly for you.",
    image: machine,
    link:"machineWork"
  },
  {
    id: "03",
    title: "Aari & Thread Work",
    desc: "Premium embroidery, Aari work and handcrafted thread designs that add luxury and uniqueness to every outfit.",
    image: thread,
    link:"/aari"
  },
];

function Service() {
  return (
    <section className="relative overflow-hidden py-24 px-6 lg:px-20">

      {/* Background Effects */}

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-purple-500/10 blur-[180px]" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-pink-400/10 blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-20"
        >
          <span
            className="uppercase tracking-[7px] text-sm text-[#d9b8ff]"
            style={{ fontFamily: "Inter" }}
          >
            OUR SERVICES
          </span>

          <h2
            className="mt-4 text-5xl md:text-6xl text-white"
            style={{
              fontFamily: "Cormorant Garamond",
            }}
          >
            Tailored With Perfection
          </h2>

          <p
            className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-gray-300"
            style={{
              fontFamily: "Inter",
            }}
          >
            Every stitch reflects elegance, precision and craftsmanship,
            creating timeless fashion designed exclusively for you.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
  {services.map((service, index) => (
    <motion.div
      key={service.id}
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: index * 0.2,
      }}
      whileHover={{
        y: -12,
      }}
      className="
        group
        overflow-hidden
        rounded-[28px]
        bg-white/10
        backdrop-blur-xl
        border
        border-white/10
        shadow-xl
      "
    >
      {/* Image */}

      <div className="relative overflow-hidden">

        <img
          src={service.image}
          alt={service.title}
          className="
            h-72
            w-full
            object-cover
            transition-all
            duration-700
            group-hover:scale-110
          "
        />

        {/* Gradient */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Number */}

        <div
          className="absolute left-6 top-6 text-6xl text-white/20"
          style={{
            fontFamily: "Cormorant Garamond",
          }}
        >
          {service.id}
        </div>

        {/* Title on image */}

        <div className="absolute bottom-6 left-6">

          <h3
            className="md:text-4xl text-white text-2xl"
            style={{
              fontFamily: "Cormorant Garamond",
            }}
          >
            {service.title}
          </h3>

        </div>
      </div>

      {/* Content */}

      <div className="p-8">

        <p
          className="leading-8 text-gray-300"
          style={{
            fontFamily: "Inter",
          }}
        >
          {service.desc}
        </p>

        <motion.div
          whileHover={{
            x: 6,
          }}
          className="mt-8 inline-flex items-center gap-2 text-[#d4b4ff]"
        >
          <span 
            style={{
              fontFamily: "Inter",
            }}
            className="font-medium"
          >
           <Link to={service.link} > Discover More</Link>
          </span>

          <span>→</span>
        </motion.div>

      </div>

    </motion.div>
  ))}
</div>

      </div>
    </section>
  );
}

export default Service;