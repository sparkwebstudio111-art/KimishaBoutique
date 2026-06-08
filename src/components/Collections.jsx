
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import category from "../assets/categories";

function Collections() {
  return (
    <section className="relative overflow-hidden px-6 py-24 lg:px-20">
      {/* Background Glow */}
      <div className="absolute -top-32 left-0 h-72 w-72 rounded-full bg-amber-400/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-400/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p
            className="text-sm uppercase tracking-[8px] text-amber-300"
            style={{ fontFamily: "Inter" }}
          >
            EXCLUSIVE COLLECTIONS
          </p>

          <h2
            className="mt-5 text-5xl leading-tight text-white md:text-7xl"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            Crafted for{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              Elegance
            </span>
          </h2>

          <div className="mx-auto mt-6 h-[3px] w-28 rounded-full bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400" />

          <p
            className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300"
            style={{ fontFamily: "Inter" }}
          >
            Explore our signature collections where timeless craftsmanship
            meets modern sophistication. Every piece is designed to celebrate
            elegance, confidence, and individuality.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {category.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Link to={item.link}>
                <div
                  className="
                    overflow-hidden
                    rounded-[32px]
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:border-amber-400/50
                    hover:shadow-[0_25px_60px_rgba(251,191,36,0.25)]
                  "
                >
                  {/* Image */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                      "
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Badge */}
                    <div className="absolute left-2 top-2 sm:left-4 sm:top-4 md:left-5 md:top-5 rounded-full border border-white/20 bg-white/10 px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 backdrop-blur-md">
  <span
    className="text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[1px] sm:tracking-[2px] md:tracking-[3px] text-white"
    style={{ fontFamily: "Inter" }}
  >
    Premium
  </span>
</div>
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    <p
                      className="text-xs uppercase tracking-[4px] text-amber-300"
                      style={{ fontFamily: "Inter" }}
                    >
                      Signature Collection
                    </p>

                    <h3
                      className="mt-3 text-4xl text-white transition-colors duration-300 group-hover:text-amber-300"
                      style={{ fontFamily: "Cormorant Garamond" }}
                    >
                      {item.name}
                    </h3>

                    <div className="mt-4 h-[2px] w-16 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 transition-all duration-500 group-hover:w-28" />

                    <p
                      className="mt-5 leading-7 text-gray-300"
                      style={{ fontFamily: "Inter" }}
                    >
                      Discover luxurious fabrics, handcrafted detailing, and
                      timeless silhouettes designed to make every occasion
                      extraordinary.
                    </p>

                    {/* Bottom */}
                    <div className="mt-8 flex items-center justify-between">
                      <span
                        className="text-sm uppercase tracking-[3px] text-amber-300"
                        style={{ fontFamily: "Inter" }}
                      >
                        Explore
                      </span>

                      {/* Animated Button */}
                      <motion.div
                        whileHover={{
                          scale: 1.12,
                          x: 6,
                          boxShadow:
                            "0px 0px 25px rgba(251,191,36,0.6)",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 15,
                        }}
                        className="
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-full
                          bg-gradient-to-br
                          from-yellow-300
                          via-amber-400
                          to-orange-500
                          text-black
                          shadow-lg
                        "
                      >
                        <motion.div
                          animate={{ x: [0, 3, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <ArrowRight size={18} />
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Collections;

