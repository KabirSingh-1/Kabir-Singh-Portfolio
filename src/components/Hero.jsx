// import React from 'react';
// import { motion } from 'framer-motion';
// import { ReactTyped } from "react-typed";

// const Hero = () => {
//   return (
//     <section className="relative w-full h-screen mx-auto flex flex-col items-center justify-center">
//       <motion.h1
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="font-space-grotesk font-bold text-white text-5xl sm:text-6xl lg:text-8xl bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent animate-gradient"
//       >
//         Hi, I'm Kabir Singh
//       </motion.h1>

//       {/* ✅ use ReactTyped instead of Typed */}
//       <ReactTyped
//         strings={['Software Engineer', 'Full-Stack Developer', 'AI Enthusiast']}
//         typeSpeed={50}
//         backSpeed={30}
//         loop
//         className="mt-4 text-neutral-300 text-xl sm:text-2xl font-poppins"
//       />

//       <div className="mt-8 flex gap-4">
//         <a href="#projects" className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-xl shadow-lg transition">
//           View Projects
//         </a>
//         <a href="#contact" className="bg-transparent border border-violet-600 text-violet-400 px-6 py-3 rounded-xl hover:bg-violet-600 hover:text-white transition">
//           Contact Me
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import StarsCanvas from './canvas/Stars'; // Optional if you want animated star background

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Optional Background Animation */}
      <StarsCanvas />

      {/* Hero Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10"
      >
        {/* Gradient Animated Name */}
        <h1 className="font-space-grotesk font-bold text-4xl sm:text-6xl lg:text-8xl bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent animate-gradient">
          Hi, I'm Kabir Singh
        </h1>

        {/* Typing Effect for Roles */}
        <ReactTyped
          strings={['Software Engineer', 'Full-Stack Developer', 'AI Enthusiast']}
          typeSpeed={60}
          backSpeed={40}
          loop
          className="mt-6 block text-neutral-300 text-lg sm:text-2xl font-poppins"
        />


        {/* Call-to-Action Buttons */}
        <div className="mt-8 flex gap-4 justify-center">
          <a
            href="#projects"
            className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-violet-500/40 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="bg-transparent border border-violet-500 text-violet-400 px-6 py-3 rounded-xl font-semibold hover:bg-violet-600 hover:text-white transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 flex justify-center w-full z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-neutral-400 flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className="w-3 h-3 rounded-full bg-neutral-400 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

