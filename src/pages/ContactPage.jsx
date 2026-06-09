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



function ContactPage() {
  return (
   <div className="relative min-h-screen overflow-hidden bg-[#05010a]">
  {/* Background Effects */}
  <div className="absolute inset-0">
    <div className="absolute top-0 left-0 h-[700px] w-[700px] rounded-full bg-fuchsia-700/10 blur-[220px]" />
    <div className="absolute bottom-0 right-0 h-[700px] w-[700px] rounded-full bg-violet-700/10 blur-[220px]" />
    <div className="absolute left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[180px]" />
  </div>

  <div
    className="absolute inset-0 opacity-[0.03]"
    style={{
      backgroundImage:
        "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
      backgroundSize: "80px 80px",
    }}
  />

  <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">

    {/* Hero Section */}
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <span
        className="
          inline-block
          px-5
          py-2
          rounded-full
          border
          border-white/10
          bg-white/5
          text-purple-300
          tracking-[4px]
          uppercase
          text-xs
        "
      >
        Contact Kimisha Boutique
      </span>

      <h1
        className="
          mt-6
          text-5xl
          md:text-7xl
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

      <p className="max-w-2xl mx-auto mt-6 text-gray-300">
        Looking for custom Aari work, designer blouses,
        bridal collections or premium boutique fashion?
        Send us your enquiry and we'll contact you shortly.
      </p>
    </motion.div>

    {/* Contact Cards */}
    <div className="grid md:grid-cols-3 gap-6 mb-12">
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

    {/* Main Section */}
    <div className="grid lg:grid-cols-12 gap-8">

      {/* FORM */}
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
            p-8
            shadow-[0_20px_80px_rgba(168,85,247,0.15)]
          "
        >
          <h2
            className="text-3xl text-white mb-6"
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
            <div className="grid md:grid-cols-2 gap-5">
              <InputField
                icon={<User size={18} />}
                label="Full Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                error={errors.name}
                placeholder="Enter your name"
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

            <div className="grid md:grid-cols-2 gap-5">
              <InputField
                icon={<Phone size={18} />}
                label="Phone Number"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                error={errors.phone}
                placeholder="+91"
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

            <SelectField
              icon={<ShoppingBag size={18} />}
              label="Product / Service"
              name="product"
              value={form.product}
              onChange={handleChange}
              options={products}
            />

            <InputField
              icon={<IndianRupee size={18} />}
              label="Estimated Budget"
              name="budget"
              value={form.budget}
              onChange={handleChange}
              placeholder="₹ 2500"
            />

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
                  py-4
                  text-white
                  placeholder:text-gray-500
                  backdrop-blur-xl
                  focus:outline-none
                  focus:border-purple-400
                "
                placeholder="Tell us about your requirements..."
              />
            </div>

            <button
              type="submit"
              className="
                w-full
                py-4
                rounded-2xl
                bg-gradient-to-r
                from-purple-500
                via-fuchsia-500
                to-violet-600
                text-white
                font-medium
                flex
                items-center
                justify-center
                gap-3
                hover:scale-[1.02]
                transition-all
                duration-300
                shadow-[0_10px_40px_rgba(168,85,247,0.35)]
              "
            >
              <Send size={18} />
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
            p-8
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
                className="text-2xl text-white"
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

          <div className="space-y-4 text-gray-300">
            <p>
              ✨ Custom Aari Work Designs
            </p>

            <p>
              ✨ Designer Blouse Stitching
            </p>

            <p>
              ✨ Bridal Collections
            </p>

            <p>
              ✨ Premium Boutique Fashion
            </p>

            <p>
              ✨ Personalized Customer Support
            </p>
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
              py-4
              rounded-2xl
              bg-gradient-to-r
              from-purple-500
              via-fuchsia-500
              to-violet-600
              text-white
              font-medium
              transition-all
              duration-300
              hover:scale-[1.02]
            "
          >
            Chat on WhatsApp
          </button>
        </div>

        {/* Google Map */}
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
          <div className="p-6">
            <h3
              className="text-3xl text-white mb-2"
              style={{
                fontFamily: "Cormorant Garamond",
              }}
            >
              Visit Our Store
            </h3>

            <p className="text-gray-400">
              We are located in Nagercoil. Come visit us.
            </p>
          </div>

          <iframe
            title="Kimisha Boutique Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7898.746934322957!2d77.40935999038611!3d8.165076467462809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f0e49e483ac3%3A0xcab66a3d1b1269c6!2sChurch%20Of%20Our%20Lady%20Of%20Lourdes%2C%20Punnai%20Nagar.!5e0!3m2!1sen!2sin!4v1777471380505!5m2!1sen!2sin"
            width="100%"
            height="400"
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

export default ContactPage