import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import kimishaBackground from "../images/ban.png";
import {
  Sparkles,
  LayoutGrid,
  Search,
  Filter,
  X,
} from "lucide-react";
import { PRODUCT } from "../assets/data";


const FILTERS = [
  { key: "all", label: "All Collections", icon: LayoutGrid },
  { key: "saree", label: "Saree", icon: Sparkles },
  { key: "halfsaree", label: "Half Saree", icon: Sparkles },
  { key: "formalwear", label: "Formal Wear", icon: Sparkles },
  { key: "aarwork", label: "Aari Work", icon: Sparkles },
  { key: "anarkali", label: "Anarkali", icon: Sparkles },
  { key: "westernwear", label: "Western Wear", icon: Sparkles },
  { key: "blouse", label: "Blouse Model", icon: Sparkles },
  { key: "partywear", label: "Party Wear", icon: Sparkles },
   { key: "nighty", label: "nighty", icon: Sparkles },
];

function Product() {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  

 useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, [filter]);

  const filteredProducts = PRODUCT.filter((item) => {
    const matchFilter =
      filter === "all" || item.category === filter;

    const matchSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.desc.toLowerCase().includes(search.toLowerCase());

    return matchFilter && matchSearch;
  });

  const handleInquire = (item) => {
    const phone = "9003866443";

    const message = `Hello Kimisha Boutique 👋

I'm interested in this product.

Product : ${item.name}
Category : ${item.category}
Price : ${item.price}

Please share more details and availability.

Thank You ❤️`;

    window.open(
      `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };



  return (

      <div>
            <div className="fixed inset-0  -z-50 bg-[#14091d] overflow-hidden">
    <img
  src={kimishaBackground}
  alt="Kimisha Boutique"
  className="
    w-full
    h-full
    object-contain
    object-top
    pt-28
    md:pt-24
    lg:pt-60
    select-none
    pointer-events-none
  "
/>
      </div >

      {/* Soft Overlay */}

      <div className="fixed inset-0 -z-40 bg-gradient-to-b from-black/30 via-black/30 to-black/30" />
 <div className="relative z-10 min-h-screen">


   <section className="relative md:mt-[10px]  min-h-screen overflow-hidden bg-black/[0.37] ">
  {/* Luxury Background */}
  <div className="absolute inset-0">
    <div className="absolute top-0 left-0 h-[700px] w-[700px] rounded-full bg-fuchsia-700/10 blur-[220px]" />
    <div className="absolute bottom-0 right-0 h-[700px] w-[700px] rounded-full bg-violet-700/10 blur-[220px]" />
    <div className="absolute left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/5 blur-[180px]" />
  </div>

  {/* Grid Pattern */}
  <div
    className="absolute inset-0 opacity-[0.03]"
    style={{
      backgroundImage:
        "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
      backgroundSize: "80px 80px",
    }}
  />

  <div className="relative z-10 max-w-[1600px] mx-auto px-6 py-6">
    {/* Hero */}
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="text-center mb-24"
    >
      <span className="inline-block px-6 py-2  rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-xs tracking-[5px] uppercase text-purple-300">
        Exclusive Fashion Collections
      </span>

      <h1
         className="
    mt-6
    text-4xl
    sm:text-5xl
    md:text-7xl
    lg:text-8xl
    font-light
    text-white
    leading-tight
  "
        style={{
          fontFamily: "Cormorant Garamond ",
        }}
      >
        Luxury Fashion
        <br />
        <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-violet-300 bg-clip-text text-transparent">
          Reimagined
        </span>
      </h1>

      <p  className="
    max-w-3xl
    mx-auto
    mt-6
    px-4
    text-sm
    sm:text-base
    md:text-lg
    text-gray-100
    leading-7
    md:leading-9
  ">
        Curated collections of designer sarees, bridal couture,
        premium Anarkalis and handcrafted fashion pieces created
        for timeless elegance.
      </p>

      {/* Search */}
      <div className="relative mt-12 mx-auto w-full max-w-4xl px-4 sm:px-0">
  <Search
    size={20}
    className="
      absolute
      left-8
      top-1/2
      -translate-y-1/2
      text-purple-100
      pointer-events-none
    "
  />

  <input
    type="text"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    placeholder="Search luxury collections..."
    className="
      w-full

      h-14
      sm:h-16

      pl-9
      sm:pl-16

      pr-5
      sm:pr-6

      rounded-full

      bg-white/5
      backdrop-blur-2xl

      border
      border-white/10

      text-white
      text-sm
      sm:text-base

      placeholder:text-gray-400

      focus:outline-none
      focus:border-purple-400/50
      focus:bg-white/10

      transition-all
      duration-300
    "
  />
</div>
    </motion.div>

    {/* Mobile Filter Button */}
   <button
  onClick={() => setOpen(true)}
  className="
    lg:hidden
    fixed
    bottom-20
    right-6
    z-50

    flex
    items-center
    justify-center

    h-14
    w-14

    rounded-2xl

    bg-white/10
    backdrop-blur-xl

    border
    border-white/20

    text-white

    shadow-[0_8px_30px_rgba(168,85,247,0.35)]

    hover:scale-110
    hover:bg-white/15

    active:scale-95

    transition-all
    duration-300
  "
>
  <Filter size={22} />
</button>
    {open && (
      <div
        onClick={() => setOpen(false)}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
      />
    )}

    <div className="flex bg-[#05010a] p-3 rounded-xl gap-10">
      {/* Sidebar */}
  <aside
  className={`
    fixed lg:sticky
    top-0 left-0
    h-screen
    w-[85vw]
max-w-[320px]
lg:w-80

    flex
    flex-col

    bg-[#0c0c0f]

    border-r
    border-white/5

    z-50

    transition-transform
    duration-300

    ${
      open
        ? "translate-x-0"
        : "-translate-x-full lg:translate-x-0"
    }
  `}
>
  {/* Header */}
  <div className="shrink-0 px-8 pt-28 pb-8 border-b border-white/5">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-xs uppercase tracking-[4px] text-purple-400">
          Collections
        </p>

        <h2
          className="mt-2 text-3xl text-white"
          style={{
            fontFamily: "Cormorant Garamond",
          }}
        >
          Categories
        </h2>
      </div>

      <button
        onClick={() => setOpen(false)}
        className="
          lg:hidden
          h-10
          w-10
          flex
          items-center
          justify-center
          rounded-full
          bg-white/5
          text-white
          hover:bg-white/10
          transition
        "
      >
        <X size={18} />
      </button>
    </div>
  </div>

  {/* Scrollable Categories */}
  <div
    className="
      flex-1
      overflow-y-auto

      py-6
      px-4

      [scrollbar-width:none]
      [-ms-overflow-style:none]

      [&::-webkit-scrollbar]:hidden
    "
  >
    <div className="space-y-2">
      {FILTERS.map((item) => {
        const Icon = item.icon;

        return (
          <button
            key={item.key}
            onClick={() => {
              setFilter(item.key);
              setOpen(false);
            }}
            className={`
              group
              w-full

              flex
              items-center
              gap-4

              px-5
              py-4

              rounded-xl

              transition-all
              duration-300

              ${
                filter === item.key
                  ? `
                    bg-white
                    text-black
                    shadow-lg
                  `
                  : `
                    text-gray-400
                    hover:text-white
                    hover:bg-white/5
                  `
              }
            `}
          >
            <Icon
              size={18}
              className="shrink-0"
            />

            <span className="text-sm font-medium">
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  </div>

  {/* Bottom Fade Effect */}
  <div className="pointer-events-none absolute bottom-20 left-0 right-0 h-16 bg-gradient-to-t from-[#0c0c0f] to-transparent" />

  {/* Footer */}
  <div className="shrink-0 p-6 border-t border-white/5 bg-[#0c0c0f]">
    <div className="flex items-center justify-between">
      <span className="text-gray-500 text-sm">
        Available
      </span>

      <span className="text-white font-medium">
        {filteredProducts.length}
      </span>
    </div>
  </div>
</aside>

      {/* Products */}
      <div className="flex-1 ">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2
              className="text-5xl text-white"
              style={{
                fontFamily: "Cormorant Garamond",
              }}
            >
              Luxury Collections
            </h2>

            <p className="text-gray-400 mt-3">
              {filteredProducts.length} Exclusive Designs
            </p>
          </div>
        </div>

        <div  className="
    grid
    grid-cols-1
    sm:grid-cols-2
    xl:grid-cols-3
    gap-5
    sm:gap-6
    lg:gap-8
  ">
          {filteredProducts.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -12,
              }}
              className="
                group
                overflow-hidden
                rounded-[32px]
                bg-white/[0.04]
                backdrop-blur-sm
                border
                border-white/10
                hover:border-purple-400/30
                transition-all
                duration-500
              "
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="
                     h-[320px]
  sm:h-[400px]
  lg:h-[500px]
  w-full
  object-cover
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <div className="absolute top-5 right-5">
                  <div className="px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 text-white">
                    {item.price}
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-purple-300 uppercase tracking-[4px] text-xs">
                    {item.category}
                  </p>

                  <h3
                    className="text-4xl text-white mt-2"
                    style={{
                      fontFamily: "Cormorant Garamond",
                    }}
                  >
                    {item.name}
                  </h3>
                </div>
              </div>

              <div className="p-5 sm:p-6 lg:p-8">
                <p className="text-gray-400 leading-8">
                  {item.desc}
                </p>

                <button
                  onClick={() => handleInquire(item)}
                  className="
                    mt-6
  sm:mt-8
  w-full
  py-3
  sm:py-4
                    rounded-2xl
                    bg-gradient-to-r
                    from-purple-400
                    via-purple-500
                    to-purple-600
                    text-white
                    font-medium
                    hover:scale-[1.02]
                    transition-all
                    duration-300
                    shadow-[0_10px_40px_rgba(168,85,247,0.35)]
                  "
                >
                  <p className="text-sm md:text-md">Enquire on WhatsApp</p>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
 </div>
      </div>
  );
}

export default Product;