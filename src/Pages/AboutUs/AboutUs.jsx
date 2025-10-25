
import React from "react";
import { motion } from "framer-motion";
import { Users, BookOpen, Lightbulb, ShieldCheck } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-base-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-6 md:px-16 lg:px-24">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400">
          About ThinkTrove
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
          Welcome to <span className="font-semibold text-blue-500">ThinkTrove</span> — 
          a collaborative knowledge-sharing platform built for learners, thinkers, and creators.  
          Our goal is to make knowledge accessible, inspiring, and impactful for everyone.
        </p>
      </motion.div>

      {/* Mission and Vision */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-8 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition"
        >
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="text-blue-500 w-8 h-8" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Our Mission
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Our mission is to empower people to **share ideas, learn collaboratively, and grow intellectually**.  
            We aim to foster a community that encourages curiosity, creativity, and open dialogue 
            across all fields of knowledge.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-8 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition"
        >
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="text-blue-500 w-8 h-8" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Our Vision
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            We envision a world where **knowledge knows no boundaries** — 
            where learners from every background can connect, exchange insights, 
            and inspire one another to create positive change in society.
          </p>
        </motion.div>
      </div>

      {/* Why Choose Us Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-16 text-center"
      >
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Why Choose ThinkTrove?</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
            <Users className="text-blue-500 mx-auto mb-3 w-8 h-8" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Collaborative Community
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Engage with learners and experts from diverse fields to exchange insights.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
            <BookOpen className="text-blue-500 mx-auto mb-3 w-8 h-8" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Rich Learning Resources
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Explore in-depth articles, guides, and discussions tailored to your interests.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
            <ShieldCheck className="text-blue-500 mx-auto mb-3 w-8 h-8" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Safe & Inclusive
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              A respectful and inclusive platform for all voices to be heard and valued.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
            <Lightbulb className="text-blue-500 mx-auto mb-3 w-8 h-8" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Inspire & Innovate
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Empowering you to think critically and share ideas that spark innovation.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Closing Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-center mt-20"
      >
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Together, let’s build a brighter future — one idea at a time.
        </p>
        <p className="text-blue-500 font-semibold mt-3">
          Think. Share. Grow with ThinkTrove.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutUs;
