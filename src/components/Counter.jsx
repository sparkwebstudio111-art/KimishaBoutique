
import React from "react";
import { motion } from "framer-motion";
import CountUpImport from "react-countup";

const CountUp = CountUpImport.default || CountUpImport;

function Counter() {
  const stats = [
    {
      number: 700,
      label: "Happy Customers",
    },
    {
      number: 500,
      label: "Exclusive Designs",
    },
    {
      number: 4,
      label: "Years of Excellence",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 px-6 lg:px-20">
      {/* Background Glow */}
      <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-amber-400/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-500/10 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p
            className="uppercase tracking-[8px] text-sm text-amber-300"
            style={{ fontFamily: "Inter" }}
          >
            OUR ACHIEVEMENTS
          </p>

          <h2
            className="mt-5 text-5xl md:text-7xl text-white"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            Trusted by{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              Hundreds
            </span>
          </h2>

          <div className="mx-auto mt-6 h-[3px] w-24 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400" />

          <p
            className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-gray-300"
            style={{ fontFamily: "Inter" }}
          >
            Every milestone reflects the trust, loyalty, and love of our
            customers who continue to inspire us to craft timeless fashion.
          </p>
        </motion.div>

        {/* Stats */}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="
                group
                rounded-[30px]
                border
                border-white/10
                bg-white/5
                p-10
                text-center
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-amber-400/40
                hover:shadow-[0_25px_60px_rgba(251,191,36,0.18)]
              "
            >
              <motion.h3
                animate={{
                  scale: [1, 1.04, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="text-5xl md:text-6xl font-semibold text-white"
                style={{ fontFamily: "Cormorant Garamond" }}
              >
                <CountUp
                  start={0}
                  end={item.number}
                  duration={3}
                  enableScrollSpy
                />
                +
              </motion.h3>

              <div className="mx-auto mt-5 h-[2px] w-14 rounded-full bg-gradient-to-r from-purple-300 to-purple-400 transition-all duration-500 group-hover:w-24" />

              <p
                className="mt-6 uppercase tracking-[4px] text-sm text-amber-300"
                style={{ fontFamily: "Inter" }}
              >
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <h3
            className="text-4xl md:text-5xl text-white"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            A Place to Discover
            <span className="block bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              Timeless Collections
            </span>
          </h3>

          <p
            className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-300"
            style={{ fontFamily: "Inter" }}
          >
            For more than four years, we've been creating elegant styles with
            exceptional craftsmanship, earning the confidence of hundreds of
            satisfied customers.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Counter;
