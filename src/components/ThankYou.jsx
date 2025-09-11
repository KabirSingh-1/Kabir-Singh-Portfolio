import React from "react";

const ThankYou = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold text-green-400">🎉 Thank You!</h1>
      <p className="mt-4 text-lg text-gray-300">
        Your message has been sent successfully. I’ll get back to you soon.
      </p>
    </div>
  );
};

export default ThankYou;
