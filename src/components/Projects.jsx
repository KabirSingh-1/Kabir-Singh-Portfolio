import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick'; // Import Slider
import { SectionWrapper } from './hoc/SectionWrapper';
import { projects } from '../constants';
import ProjectCard from './ProjectCards';

// Import slick carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Animation Variants
const textVariant = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const Projects = () => {
  // react-slick settings for Project Cards
  const sliderSettings = {
    dots: true,
    infinite: false, // Set to true if you want it to loop
    speed: 500,
    slidesToShow: 3, // Default to show 3 cards
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Laptop/large tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 640, // Tablet/mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      {/* Section Heading */}
      <motion.div
        variants={textVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="sm:text-lg text-base text-neutral-400 uppercase tracking-wider font-poppins">
          My Work
        </p>
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-pink-500 font-black md:text-6xl sm:text-5xl xs:text-4xl text-3xl font-space-grotesk">
          Projects.
        </h2>
      </motion.div>

      {/* Intro Text */}
      <motion.p
        variants={textVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-6 text-neutral-300 text-base sm:text-lg max-w-3xl mx-auto text-center leading-relaxed font-poppins"
      >
        These projects showcase my skills and experience through real-world examples. Each one includes a live demo and source code, reflecting my ability to create efficient, scalable, and visually appealing solutions.
      </motion.p>

      {/* Project Cards Slider */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-16 max-w-7xl mx-auto" // Added max-width and auto margins for centering
      >
        <Slider {...sliderSettings}>
          {projects.map((project, index) => (
            // Each card is now a child of the Slider
            <ProjectCard key={`project-${index}`} {...project} />
          ))}
        </Slider>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Projects, 'projects');