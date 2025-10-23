import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Users, Edit3, Award } from "lucide-react";

const steps = [
  {
    icon: <Lightbulb size={40} className="text-yellow-500" />,
    title: "Share Your Ideas",
    description:
      "Write and publish your articles on any topic you’re passionate about. ThinkTrove is your space to inspire others.",
  },
  {
    icon: <Users size={40} className="text-blue-500" />,
    title: "Connect with Community",
    description:
      "Engage with readers and fellow contributors through comments, likes, and discussions.",
  },
  {
    icon: <Edit3 size={40} className="text-green-500" />,
    title: "Collaborate & Learn",
    description:
      "Co-author articles, exchange knowledge, and grow your expertise with peer feedback.",
  },
  {
    icon: <Award size={40} className="text-purple-500" />,
    title: "Earn Recognition",
    description:
      "Get featured as a Top Contributor and showcase your work to a wider audience.",
  },
];

const HowThinkTroveWorks = () => {
  return (
    <div className="w-11/12 mx-auto mt-18 ">
      <h2 className="text-3xl font-bold text-center mb-5">
        How <span className="text-blue-500">ThinkTrove</span> Works
      </h2>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
        ThinkTrove is a community-driven platform where knowledge flows freely.
        Here’s how you can be part of it:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="bg-base-100  rounded-2xl p-6 text-center border border-blue-300 hover:shadow-xl"
          >
            <div className="flex justify-center mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-500">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HowThinkTroveWorks;