import React from "react";
import { BookOpen, Sparkles } from "lucide-react";
import { Link } from "react-router";

const LearningJourneyCTA = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-400 text-white py-20 mb-10 rounded-2xl w-11/12 mx-auto  text-center">
      <div className="w-11/12 mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Ready to Start Your Learning Journey?
        </h2>
        <p className="text-lg text-gray-200 mb-8">
          Join thousands of learners and knowledge sharers today
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Start Reading Button */}
         <Link to="/all-articles"> <button className="flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition">
            <BookOpen className="w-5 h-5" />
            Start Reading
          </button></Link>

          {/* Take a Quiz Button */}
          <Link to="/quiz"><button className="flex items-center gap-2 border border-white hover:bg-white hover:text-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition">
            <Sparkles className="w-5 h-5" />
            Take a Quiz
          </button></Link>
        </div>
      </div>
    </section>
  );
};

export default LearningJourneyCTA;
