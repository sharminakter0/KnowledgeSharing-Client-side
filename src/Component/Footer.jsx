import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

import { Link } from "react-router";
import logo from "../assets/Logo/ThinkTroveLogo.png"

const Footer = () => {
  return (
    <footer className="bg-base-100 border-t border-gray-400 mt-12">
      <div className="w-11/12 mx-auto py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* ===== Left Section (Logo + Description + Socials) ===== */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="">
            <img src={logo} alt="logo" className="size-5 md:size-8 " />
            </div>
            <h2 className="text-xl md:text-2xl font-bold">
              <span className="text-blue-600">ThinkTrove</span>
              
            </h2>
          </div>

          <p className="text-sm text-gray-500 mb-4">
            Empowering minds through shared knowledge. Join our community of
            learners and share your expertise.
          </p>

          {/* Social icons */}
          <div className="flex gap-3 mt-3">
            <a href="https://www.facebook.com/" className="bg-gray-100 p-2 rounded-lg hover:bg-blue-100 transition">
              <FaFacebookF className="text-gray-800" />
            </a>
            <a href="https://twitter.com/" className="bg-gray-100 p-2 rounded-lg hover:bg-blue-100 transition">
              <FaTwitter className="text-gray-800" />
            </a>
            <a href="https://www.instagram.com/" className="bg-gray-100 p-2 rounded-lg hover:bg-blue-100 transition">
              <FaInstagram className="text-gray-800" />
            </a>
            <a href="https://www.linkedin.com/" className="bg-gray-100 p-2 rounded-lg hover:bg-blue-100 transition">
              <FaLinkedinIn className="text-gray-800" />
            </a>
          </div>
        </div>

        {/* ===== Platform ===== */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Platform</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link to="/all-articles" className="hover:text-blue-600">Articles</Link></li>
            <li><Link to="/quiz" className="hover:text-blue-600">Quiz</Link></li>
          </ul>
        </div>

        {/* ===== Company ===== */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about-us" className="hover:text-blue-600">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
            <li><Link to="/terms" className="hover:text-blue-600">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* ===== Resources ===== */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/help" className="hover:text-blue-600">Help Center</Link></li>
            <li><Link to="/privacy" className="hover:text-blue-600">Privacy Policy</Link></li>
            <li><Link to="/guidelines" className="hover:text-blue-600">Community Guidelines</Link></li>
          </ul>
        </div>
      </div>

      {/* ===== Bottom Copyright Bar ===== */}
      <div className="border-t w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center py-4 text-sm text-gray-500">
        <p>© 2025 ThinkTrove. All rights reserved.</p>
        <a href="mailto:contact@thinktrove.com" className="flex items-center gap-2 hover:text-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0l-4-4m4 4l-4 4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          contact@thinktrove.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
