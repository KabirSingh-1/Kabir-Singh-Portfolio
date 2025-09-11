import React from "react";
import { motion } from "framer-motion";

const ThankYou = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-br from-neutral-900 via-black to-neutral-950">
      {/* Animated Confetti Emoji */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
        <h1 className="text-7xl mb-6">🎉</h1>
      </motion.div>

      {/* Thank You Heading */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-500 drop-shadow-lg"
      >
        Thank You!
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-6 text-lg text-gray-300 max-w-xl"
      >
        Your message has been sent successfully 🚀. <br />
        I’ll get back to you as soon as possible!
      </motion.p>

      {/* Button Back to Home */}
      <motion.a
        href="/"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-10 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-pink-500 text-white font-semibold shadow-lg hover:shadow-pink-500/50 transition"
      >
        ⬅ Back to Home
      </motion.a>

      {/* Floating Glow Effect */}
      <div className="absolute -z-10 w-[500px] h-[500px] bg-violet-600/20 blur-3xl rounded-full top-20 left-10 animate-pulse"></div>
      <div className="absolute -z-10 w-[400px] h-[400px] bg-pink-500/20 blur-3xl rounded-full bottom-20 right-10 animate-pulse"></div>
    </div>
  );
};

export default ThankYou;
