import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from './hoc/sectionWrapper';
import { skills } from '../constants';

const fadeIn = (direction = 'up', type = 'tween', delay = 0, duration = 1) => ({
  hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

const About = () => {
  return (
    <>
      <motion.div variants={fadeIn('up', 'tween', 0.2, 1)}>
        <p className="sm:text-lg text-base text-neutral-400 uppercase tracking-wider font-poppins">Introduction</p>
        <h2 className="text-white font-black md:text-6xl sm:text-5xl xs:text-4xl text-3xl font-space-grotesk">Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', 'tween', 0.1, 1)}
        className="mt-4 text-neutral-300 text-base sm:text-lg max-w-3xl leading-relaxed font-poppins"
      >
        I'm a passionate and aspiring software engineer with experience in  JavaScript, and expertise in frameworks like React & Node.js. I'm a quick learner and collaborate closely with teams to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's build something amazing together!
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, 'about');
