import React from 'react';

const AboutUs = () => {
  return (
    <div className="w-11/12 max-w-5xl mx-auto py-12 px-4 bg-white my-12">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-3">About Us</h1>
      <p className="text-lg text-gray-700 mb-10 text-center">
        Welcome to our Knowledge Sharing Platform — a space where students connect, learn, and grow together. 
        We believe that sharing ideas, experiences, and insights can create a powerful learning community.
      </p>
      <div className="grid md:grid-cols-2  gap-10 items-start">
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Our Mission</h2>
          <p className="text-gray-700">
            Our mission is to empower students to share knowledge, collaborate on ideas, and support one another in their academic and creative journeys. 
            We provide a platform for publishing articles, asking questions, and inspiring innovation.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>User-friendly platform for all students</li>
            <li>Rich articles and insightful content</li>
            <li>Interactive community support</li>
            <li>Safe and inclusive environment</li>
          </ul>
        </div>
      </div>
      <p className="mt-10 mb-8 text-center text-gray-600">
        Together, let’s build a brighter future — one idea at a time.
      </p>
    </div>
  );
};

export default AboutUs;
