"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Facebook, Twitter, Linkedin } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-15 pt-25 px-6 sm:px-10 md:px-20">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
          Contact Us
        </h1>
        <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Have questions, suggestions, or feedback? We’d love to hear from you!  
          The <span className="font-semibold text-blue-500">ThinkTrove</span> team is here to help and collaborate with knowledge enthusiasts like you.
        </p>
      </motion.div>

      {/* Contact Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md"
        >
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-5">
            <div>
              <label className="block mb-1 text-gray-700 dark:text-gray-300 font-medium">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700 dark:text-gray-300 font-medium">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700 dark:text-gray-300 font-medium">
                Message
              </label>
              <textarea
                placeholder="Write your message here..."
                rows="5"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:border-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition"
            >
              <Send size={18} /> Send Message
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-700 dark:text-gray-300 space-y-6"
        >
          <h2 className="text-2xl font-semibold text-blue-600">
            Get in Touch
          </h2>
          <p className="leading-relaxed">
            You can reach us through email or connect with us on social media.  
            Let’s make knowledge accessible and inspiring — together.
          </p>

          <div className="flex items-center gap-3">
            <Mail className="text-blue-500" /> 
            <span>support@thinktrove.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-blue-500" /> 
            <span>+880 1234 567 890</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-blue-500" /> 
            <span>Dhaka, Bangladesh</span>
          </div>

          {/* Social Links */}
          <div className="flex gap-5 mt-4">
            <a href="#" className="hover:text-blue-600 transition">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              <Twitter size={24} />
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
