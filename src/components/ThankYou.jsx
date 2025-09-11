import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-900 text-white">
      <div className="bg-neutral-800 shadow-lg rounded-2xl p-8 text-center max-w-md">
        <h1 className="text-3xl font-bold text-green-400">✅ Thank You!</h1>
        <p className="mt-4 text-gray-300">
          Your message has been successfully sent. I’ll get back to you soon.
        </p>

        <div className="mt-6 flex flex-col gap-3">
          <Link
            to="/"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Go Back Home
          </Link>
          <Link
            to="/projects"
            className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition"
          >
            View My Work
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
