
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="w-11/12 mx-auto p-6 mb-10 mt-16 bg-base-100 ">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p>Effective Date:12 Augest 2025</p>
      
      <section className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Introduction</h2>
        <p>
          Welcome to [ThinkTrove] ("we," "our," or "us"). Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.
        </p>
      </section>

      <section className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
        <ul className="list-disc ml-6">
          <li>Personal Information such as your name, email, and profile photo.</li>
          <li>Usage Data including IP address and browsing activity.</li>
          <li>Cookies and Tracking Technologies.</li>
        </ul>
      </section>

      <section className="mt-4">
        <h2 className="text-xl font-semibold mb-2">How We Use Your Information</h2>
        <p>We use the information to operate, maintain, and improve our services, communicate with you, and comply with laws.</p>
      </section>

      {/* Add more sections as needed */}

      <section className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p>
          If you have questions or concerns, please contact us at: <br />
          <a href="mailto:sharminakter0sr@gmail.com" className="text-blue-600 underline">sharminakter0sr@gmail.com</a>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;