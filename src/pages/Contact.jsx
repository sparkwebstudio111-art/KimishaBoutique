import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Clock,
  IndianRupee,
  ShoppingBag,
  Send,
  MapPin,
  MessageCircle,
  AlertCircle,
} from "lucide-react";

const products = [
  "Aari Work",
  "Designer Blouse",
  "Bridal Collection",
  "Saree Work",
  "Kids Wear",
  "Custom Order",
];

const ContactCard = ({ icon, title, value }) => (
  <div
    className="
      rounded-3xl
      border
      border-white/10
      bg-white/[0.04]
      backdrop-blur-xl
      p-5
      sm:p-6
      text-center
    "
  >
    <div className="text-purple-300 flex justify-center mb-4">
      {icon}
    </div>

    <h3 className="text-white font-semibold text-sm sm:text-base mb-2">
      {title}
    </h3>

    <p className="text-gray-400 text-sm">
      {value}
    </p>
  </div>
);

const InputField = ({
  icon,
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
}) => (
  <div>
    <label className="text-sm text-gray-300 block mb-2">
      {label}
    </label>

    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        {icon}
      </span>

      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full
          pl-12
          pr-4
          py-3
          sm:py-4
          rounded-2xl
          bg-white/5
          border
          border-white/10
          text-white
          text-sm
          sm:text-base
          placeholder:text-gray-500
          focus:outline-none
          focus:border-purple-400
        "
      />
    </div>

    {error && (
      <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
        <AlertCircle size={14} />
        {error}
      </p>
    )}
  </div>
);

const SelectField = ({
  icon,
  label,
  name,
  value,
  onChange,
  options,
}) => (
  <div>
    <label className="text-sm text-gray-300 block mb-2">
      {label}
    </label>

    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        {icon}
      </span>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className="
          w-full
          pl-12
          pr-4
          py-3
          sm:py-4
          rounded-2xl
          bg-white/5
          border
          border-white/10
          text-white
          text-sm
          sm:text-base
          focus:outline-none
          focus:border-purple-400
        "
      >
        <option value="">Select</option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
            className="bg-black"
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  </div>
);

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    contactMethod: "",
    product: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.phone) newErrors.phone = "Phone is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const whatsappMessage = `
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Preferred Contact: ${form.contactMethod}
Product: ${form.product}
Budget: ${form.budget}
Message: ${form.message}
`;

    window.open(
      `https://wa.me/919003866443?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05010a]">

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div
          className="
            absolute
            top-0
            left-0
            h-[350px]
            w-[350px]
            sm:h-[500px]
            sm:w-[500px]
            lg:h-[700px]
            lg:w-[700px]
            rounded-full
            bg-fuchsia-700/10
            blur-[220px]
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            h-[350px]
            w-[350px]
            sm:h-[500px]
            sm:w-[500px]
            lg:h-[700px]
            lg:w-[700px]
            rounded-full
            bg-violet-700/10
            blur-[220px]
          "
        />

        <div
          className="
            absolute
            left-1/2
            -translate-x-1/2
            h-[250px]
            w-[250px]
            sm:h-[350px]
            sm:w-[350px]
            lg:h-[500px]
            lg:w-[500px]
            rounded-full
            bg-purple-500/10
            blur-[180px]
          "
        />
      </div>

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16">

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <span
            className="
              inline-block
              px-4
              sm:px-5
              py-2
              rounded-full
              border
              border-white/10
              bg-white/5
              text-purple-300
              tracking-[3px]
              uppercase
              text-[10px]
              sm:text-xs
            "
          >
            Contact Kimisha Boutique
          </span>

          <h1
            className="
              mt-5
              text-3xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              text-white
              leading-tight
            "
            style={{
              fontFamily: "Cormorant Garamond",
            }}
          >
            Let's Create
            <br />

            <span
              className="
                bg-gradient-to-r
                from-purple-300
                via-pink-300
                to-violet-300
                bg-clip-text
                text-transparent
              "
            >
              Something Beautiful
            </span>
          </h1>

          <p className="max-w-2xl mx-auto mt-5 text-sm sm:text-base text-gray-300 px-2">
            Looking for custom Aari work, designer blouses,
            bridal collections or premium boutique fashion?
            Send us your enquiry and we'll contact you shortly.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 md:mb-12">
          <ContactCard
            icon={<Phone size={28} />}
            title="Call Us"
            value="+91 90038 66443"
          />

          <ContactCard
            icon={<Mail size={28} />}
            title="Email Us"
            value="kimishaboutique@gmail.com"
          />

          <ContactCard
            icon={<Clock size={28} />}
            title="Working Hours"
            value="9:00 AM - 8:00 PM"
          />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

                    {/* FORM SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div
              className="
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-xl
                p-5
                sm:p-6
                md:p-8
                shadow-[0_20px_80px_rgba(168,85,247,0.15)]
              "
            >
              <h2
                className="text-2xl sm:text-3xl text-white mb-6"
                style={{
                  fontFamily: "Cormorant Garamond",
                }}
              >
                Send Your Enquiry
              </h2>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <InputField
                    icon={<User size={18} />}
                    label="Full Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    error={errors.name}
                    placeholder="Enter your full name"
                  />

                  <InputField
                    icon={<Mail size={18} />}
                    label="Email Address"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    error={errors.email}
                    placeholder="your@email.com"
                  />
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <InputField
                    icon={<Phone size={18} />}
                    label="Phone Number"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    error={errors.phone}
                    placeholder="Your number"
                  />

                  <SelectField
                    icon={<MessageCircle size={18} />}
                    label="Preferred Contact"
                    name="contactMethod"
                    value={form.contactMethod}
                    onChange={handleChange}
                    options={[
                      "WhatsApp",
                      "Phone Call",
                      "Email",
                    ]}
                  />
                </div>

                {/* Product */}
                <SelectField
                  icon={<ShoppingBag size={18} />}
                  label="Product / Service"
                  name="product"
                  value={form.product}
                  onChange={handleChange}
                  options={products}
                />

                {/* Budget */}
                <InputField
                  icon={<IndianRupee size={18} />}
                  label="Estimated Budget"
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  placeholder="₹ 2500"
                />

                {/* Message */}
                <div>
                  <label className="text-sm text-gray-300 block mb-2">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className="
                      w-full
                      rounded-2xl
                      bg-white/5
                      border
                      border-white/10
                      px-4
                      py-3
                      sm:py-4
                      text-white
                      text-sm
                      sm:text-base
                      placeholder:text-gray-500
                      backdrop-blur-xl
                      focus:outline-none
                      focus:border-purple-400
                    "
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="
                    w-full
                    py-3
                    sm:py-4
                    rounded-2xl
                    bg-gradient-to-r
                    from-purple-500
                    via-fuchsia-500
                    to-violet-600
                    text-white
                    text-sm
                    sm:text-base
                    font-medium
                    flex
                    items-center
                    justify-center
                    gap-2
                    hover:scale-[1.02]
                    transition-all
                    duration-300
                    shadow-[0_10px_40px_rgba(168,85,247,0.35)]
                  "
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </motion.div>

                    {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Boutique Card */}
            <div
              className="
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-xl
                p-5
                sm:p-6
                md:p-8
                shadow-[0_20px_80px_rgba(168,85,247,0.15)]
              "
            >
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="
                    h-14
                    w-14
                    rounded-2xl
                    bg-purple-500/10
                    border
                    border-purple-400/20
                    flex
                    items-center
                    justify-center
                    text-purple-300
                  "
                >
                  <MapPin size={26} />
                </div>

                <div>
                  <h3
                    className="text-xl sm:text-2xl text-white"
                    style={{
                      fontFamily: "Cormorant Garamond",
                    }}
                  >
                    Kimisha Boutique
                  </h3>

                  <p className="text-gray-400 text-sm">
                    Fashion • Aari Work • Boutique
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-gray-300 text-sm sm:text-base">
                <p>✨ Custom Aari Work Designs</p>
                <p>✨ Designer Blouse Stitching</p>
                <p>✨ Bridal Collections</p>
                <p>✨ Premium Boutique Fashion</p>
                <p>✨ Personalized Customer Support</p>
              </div>

              <button
                onClick={() =>
                  window.open(
                    "https://api.whatsapp.com/send?phone=919003866443",
                    "_blank"
                  )
                }
                className="
                  mt-6
                  w-full
                  py-3
                  sm:py-4
                  rounded-2xl
                  bg-gradient-to-r
                  from-purple-500
                  via-fuchsia-500
                  to-violet-600
                  text-white
                  font-medium
                  text-sm
                  sm:text-base
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                "
              >
                Chat on WhatsApp
              </button>
            </div>

            {/* Map Section */}
            <div
              className="
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-xl
                shadow-[0_20px_80px_rgba(168,85,247,0.15)]
              "
            >
              <div className="p-5 sm:p-6">
                <h3
                  className="text-2xl sm:text-3xl text-white mb-2"
                  style={{
                    fontFamily: "Cormorant Garamond",
                  }}
                >
                  Visit Our Store
                </h3>

                <p className="text-gray-400 text-sm sm:text-base">
                  We are located in Nagercoil. Come visit us.
                </p>
              </div>

              <iframe
                title="Kimisha Boutique Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7898.746934322957!2d77.40935999038611!3d8.165076467462809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f0e49e483ac3%3A0xcab66a3d1b1269c6!2sChurch%20Of%20Our%20Lady%20Of%20Lourdes%2C%20Punnai%20Nagar.!5e0!3m2!1sen!2sin!4v1777471380505!5m2!1sen!2sin"
                className="w-full h-[250px] sm:h-[350px] md:h-[400px]"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;