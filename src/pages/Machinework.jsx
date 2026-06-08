import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import tailer1 from "../images/tailer2.png";
import tailer2 from "../images/tailer1.png";
import tailer3 from "../images/tailer3.png";
import tailer4 from "../images/tailer4.png";


const machineWorks = [
  {
    image: tailer1,
    title: "Designer Blouse Stitching",
    desc: "Precision tailoring with perfect fitting and finishing.",
  },
  {
    image: tailer2,
    title: "Kids Wear Stitching",
    desc: "Comfortable and stylish stitching for children.",
  },
  {
    image: tailer3,
    title: "Ladies Fashion Wear",
    desc: "Custom stitching for modern and traditional outfits.",
  },
  {
    image: tailer4,
    title: "Bridal Dress Stitching",
    desc: "Exclusive bridal tailoring crafted with perfection.",
  },
];


function Machinework() {
    const navigate = useNavigate();
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0d0516] via-[#13061f] to-[#09030f] pb-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
<motion.button
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => navigate(-1)}
  className="
    mb-10
    flex
    items-center
    gap-3
    px-5
    py-3
    rounded-2xl
    border
    border-white/10
    bg-white/5
    backdrop-blur-xl
    text-white
    hover:border-pink-400/30
    hover:bg-pink-500/10
    transition-all
    duration-300
    w-fit
  "
>
  <ArrowLeft size={20} />
  <span>Back</span>
</motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="px-5 py-2 rounded-full border border-pink-400/20 bg-pink-500/10 text-pink-300 text-xs tracking-[4px] uppercase">
            Our Gallery
          </span>

          <h1
            className="text-5xl md:text-7xl text-white mt-6 mb-6"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            Crafting Beauty
            <span className="block bg-gradient-to-r from-pink-300 via-purple-300 to-fuchsia-400 bg-clip-text text-transparent">
              With Every Stitch
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-gray-400 text-lg">
            Explore our premium machine stitching services and handcrafted
            Aari work collections created with passion, creativity and
            precision.
          </p>
        </motion.div>

        {/* Machine Work */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-[2px] w-16 bg-gradient-to-r from-pink-500 to-transparent"></div>

            <h2
              className="text-4xl text-white"
              style={{ fontFamily: "Cormorant Garamond" }}
            >
              Machine Stitching
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {machineWorks.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl text-white mb-3">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="absolute inset-0 border border-pink-400/0 group-hover:border-pink-400/30 rounded-3xl transition-all duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

     

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <h3
            className="text-4xl text-white mb-4"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            Custom Designs Crafted For You
          </h3>

          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            From bridal blouses and designer kurtis to intricate Aari work,
            every piece is tailored to reflect your unique style.
          </p>

      
        </motion.div>
      </div>
    </section>
  );
}

export default Machinework;