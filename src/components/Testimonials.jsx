
import React from "react";
import { motion } from "framer-motion";
import SliderImport from "react-slick";
import { Quote } from "lucide-react";
import { Testimonial } from "../assets/Testimonial";

const Slider = SliderImport.default || SliderImport;

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    cssEase: "ease-in-out",

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="relative overflow-hidden py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-20">
      {/* Background Blur */}

      <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-purple-600/10 blur-[130px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-pink-500/10 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 md:mb-20"
        >
          <p
            className="uppercase tracking-[6px] text-xs sm:text-sm text-purple-300"
            style={{ fontFamily: "Inter" }}
          >
            TESTIMONIALS
          </p>

          <h2
            className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-white"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            What Our
            <span className="block bg-gradient-to-r from-purple-300 via-pink-300 to-fuchsia-300 bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>

          <div className="mx-auto mt-6 h-[3px] w-20 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />

          <p
            className="mt-6 max-w-2xl mx-auto px-2 text-sm sm:text-base md:text-lg leading-7 md:leading-8 text-gray-300"
            style={{ fontFamily: "Inter" }}
          >
            Discover why our customers trust us for timeless elegance,
            exceptional craftsmanship, and personalized service.
          </p>
        </motion.div>

        {/* Slider */}

        <Slider {...settings}>
          {Testimonial.map((item, index) => (
            <div key={item.id} className="px-2 sm:px-3 md:px-4 py-3">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  relative
                  flex
                  min-h-[320px]
                  md:min-h-[360px]
                  flex-col
                  justify-between
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-white/10
                  bg-white/5
                  p-6
                  md:p-8
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:border-purple-900/40
                  hover:shadow-[0_20px_60px_rgba(168,85,247,0.25)]
                "
              >
                {/* Quote */}

                <div className="absolute right-5 top-5 opacity-10 text-white">
                  <Quote className="w-10 h-10 md:w-16 md:h-16 lg:w-[70px] lg:h-[70px]" />
                </div>

                {/* Customer */}

                <div className="flex items-center gap-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-14 w-14 sm:h-16 sm:w-16 rounded-full border border-white/20 object-cover"
                  />

                  <div>
                    <h3
                      className="text-xl sm:text-2xl text-white"
                      style={{
                        fontFamily: "Cormorant Garamond",
                      }}
                    >
                      {item.name}
                    </h3>

                    <p
                      className="mt-1 text-xs sm:text-sm uppercase tracking-[2px] text-purple-300"
                      style={{ fontFamily: "Inter" }}
                    >
                      {item.place}
                    </p>
                  </div>
                </div>

                {/* Review */}

                <div className="my-6 flex-1">
                  <p
                    className="text-sm sm:text-base leading-7 text-gray-300"
                    style={{ fontFamily: "Inter" }}
                  >
                    "{item.text}"
                  </p>
                </div>

                {/* Footer */}

                <div className="flex items-center justify-between">
                  <div className="text-yellow-400 text-base sm:text-lg tracking-wide">
                    ★★★★★
                  </div>

                  <div className="h-[2px] w-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials;
