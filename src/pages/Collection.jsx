import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";
import { PRODUCT } from "../assets/data";

const Collection = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  const normalize = (str) =>
    str?.toLowerCase().trim();

  const categoryProducts = PRODUCT.filter(
    (product) =>
      normalize(product.category) ===
      normalize(categoryName)
  );

  const handleInquire = (product) => {
    const WHATSAPP_NUMBER = "9366722532";

    const message = `Hello Kimisha Boutique! 💖

Product: ${product.name}
Category: ${product.category}
Price: ${product.price}

Could you please let me know if this product is available?`;

    window.open(
      `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#05010a]">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-[220px]" />

      <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-pink-600/10 blur-[220px]" />

      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/5 blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="
            flex
            items-center
            gap-3

            text-white/80

            hover:text-white

            transition-all
            duration-300
          "
        >
          <ArrowLeft size={20} />
          Back
        </button>

        {/* Hero */}
        <div className="text-center mt-12 mb-20">
          <div
            className="
              inline-flex
              items-center
              gap-2

              px-5
              py-2

              rounded-full

              bg-white/5

              border
              border-white/10

              text-purple-300
              text-sm
            "
          >
            <Sparkles size={14} />
            Premium Collection
          </div>

          <h1
            className="mt-8 text-5xl md:text-7xl text-white"
            style={{
              fontFamily: "Cormorant Garamond",
            }}
          >
            {categoryName}
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-lg leading-8 text-gray-400">
            Explore our carefully curated {categoryName} collection,
            designed to celebrate elegance, craftsmanship, and timeless
            beauty. Every piece is selected to make your special moments
            unforgettable.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-gray-300">
            {categoryProducts.length} Designs Available
          </div>
        </div>

        {/* Products */}
        {categoryProducts.length === 0 ? (
          <div className="py-32 text-center">
            <h2 className="text-4xl text-white">
              No Products Found
            </h2>

            <p className="mt-4 text-gray-400">
              This collection is currently unavailable.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {categoryProducts.map((product, index) => (
              <div
                key={product.id}
                className="
                  group

                  overflow-hidden

                  rounded-[30px]

                  bg-white/[0.04]

                  backdrop-blur-xl

                  border
                  border-white/10

                  hover:border-purple-400/30

                  transition-all
                  duration-500
                "
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="
                      h-[450px]
                      w-full
                      object-cover

                      transition-all
                      duration-700

                      group-hover:scale-110
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  {/* Price */}
                  <div className="absolute top-5 right-5">
                    <div
                      className="
                        px-4
                        py-2

                        rounded-full

                        bg-black/40

                        backdrop-blur-xl

                        border
                        border-white/10

                        text-white
                      "
                    >
                      {product.price}
                    </div>
                  </div>

                  {/* Product Name */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-purple-300 uppercase tracking-[4px] text-xs">
                      {product.category}
                    </p>

                    <h3
                      className="mt-2 text-4xl text-white"
                      style={{
                        fontFamily:
                          "Cormorant Garamond",
                      }}
                    >
                      {product.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="leading-8 text-gray-400">
                    Handcrafted with attention to detail and designed
                    to bring elegance, confidence, and sophistication
                    to every occasion.
                  </p>

                  <button
                    onClick={() =>
                      handleInquire(product)
                    }
                    className="
                      mt-8
                      w-full

                      py-4

                      rounded-2xl

                      bg-gradient-to-r
                      from-purple-600
                      via-fuchsia-600
                      to-pink-600

                      text-white

                      font-medium

                      hover:scale-[1.02]

                      transition-all
                      duration-300

                      shadow-[0_10px_40px_rgba(168,85,247,0.35)]
                    "
                  >
                    WhatsApp Inquiry
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Collection;