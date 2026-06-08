import React, { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.jpeg";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Collections", href: "/Products" },
  { name: "Contact", href: "/Contact" },
];

function Navbar() {
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-2 sm:top-4 left-0 right-0 z-50 px-3 sm:px-4">
        <div
          className={`max-w-7xl mx-auto rounded-full border border-white/40 backdrop-blur-xl transition-all duration-500 ${
            scrolled
              ? "bg-white/90 shadow-xl"
              : "bg-white/70 shadow-lg"
          }`}
        >
          <nav className="h-16 sm:h-20 px-4 sm:px-6 flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 sm:gap-3 shrink-0"
            >
              <img
                src={logo}
                alt="Kimisha Boutique"
                className="
                  w-10 h-10
                  sm:w-12 sm:h-12
                  md:w-14 md:h-14
                  rounded-full
                  object-cover
                  border
                  border-white
                  shadow-md
                "
              />

              <div className="leading-tight">
                <h2
                  className="
                    text-lg
                    sm:text-xl
                    md:text-2xl
                    font-semibold
                    text-[#4b2354]
                  "
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  Kimisha
                </h2>

                <p
                  className="
                    text-[8px]
                    sm:text-[10px]
                    uppercase
                    tracking-[2px]
                    sm:tracking-[4px]
                    text-gray-700
                  "
                >
                  Boutique
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6 lg:gap-10">
              {navItems.map((item) => {
                const active = location.pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="relative group"
                  >
                    <span
                      className={`text-sm lg:text-[15px] font-medium transition duration-300 ${
                        active
                          ? "text-[#6B2D84]"
                          : "text-gray-700 group-hover:text-[#6B2D84]"
                      }`}
                    >
                      {item.name}
                    </span>

                    <span
                      className={`absolute left-0 -bottom-2 h-[2px] rounded-full bg-[#6B2D84] transition-all duration-300 ${
                        active
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="tel:+919003866443"
                className="
                  hidden
                  lg:flex
                  items-center
                  gap-2
                  bg-[#5B2C6F]
                  hover:bg-[#6d3c84]
                  text-white
                  px-5
                  py-2.5
                  rounded-full
                  text-sm
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                <Phone size={16} />
                +91 90038 66443
              </a>

              <button
                onClick={() => setOpen(true)}
                className="
                  md:hidden
                  p-2
                  rounded-full
                  hover:bg-white/50
                  transition
                "
              >
                <Menu size={24} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm transition-all duration-300 md:hidden ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Drawer */}
      <div
        className={`
          fixed
          top-2
          right-2
          bottom-2
          z-[100]
          
          w-[280px]
          sm:w-[320px]
          max-w-[90vw]
          
          bg-white
          rounded-[28px]
          shadow-2xl
          
          flex
          flex-col
          
          transition-all
          duration-500
          
          ${
            open
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }
        `}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-5 sm:p-6">
          <div>
            <p className="text-xs uppercase tracking-[3px] text-gray-400">
              Boutique
            </p>

            <h2
              className="text-2xl text-[#4b2354]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Kimisha
            </h2>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="
              h-10
              w-10
              rounded-full
              bg-gray-100
              hover:bg-gray-200
              flex
              items-center
              justify-center
              transition
            "
          >
            <X size={18} />
          </button>
        </div>

        <div className="mx-6 h-px bg-gray-100" />

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-2">
            {navItems.map((item) => {
              const active =
                location.pathname === item.href;

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between px-4 py-4 rounded-2xl transition-all duration-300 ${
                    active
                      ? "bg-[#6B2D84] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span className="font-medium">
                    {item.name}
                  </span>

                  {active && (
                    <div className="h-2 w-2 rounded-full bg-white" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Contact Card */}
        <div className="p-4 sm:p-6">
          <div className="bg-[#f8f4fb] rounded-2xl p-4">
            <p className="text-xs text-gray-500 mb-2">
              Contact Us
            </p>

            <a
              href="tel:+919003866443"
              className="
                flex
                items-center
                gap-3
                text-[#6B2D84]
                font-medium
                text-sm
              "
            >
              <Phone size={18} />
              +91 90038 66443
            </a>
          </div>
        </div>
      </div>

      {/* Navbar Spacer */}
      <div className="h-20 sm:h-24 md:h-28" />
    </>
  );
}

export default Navbar;