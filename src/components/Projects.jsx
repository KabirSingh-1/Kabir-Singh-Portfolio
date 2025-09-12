import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
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
    dots: true, // Show navigation dots
    infinite: false, // Set to true if you want it to loop
    speed: 500,
    slidesToShow: 3, // Default for larger screens
    slidesToScroll: 1,
    arrows: false, // Typically hide arrows on mobile, dots are sufficient
    responsive: [
      {
        breakpoint: 1024, // Laptop/large tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 768, // Tablet
        settings: {
          slidesToShow: 1.5, // Show 1.5 cards to hint there's more content
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 640, // Small tablet/large mobile
        settings: {
          slidesToShow: 1, // Full card view
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          arrows: false,
          centerMode: true, // Center the single card for better aesthetics
          centerPadding: '20px', // Padding around the centered card
        },
      },
      {
        breakpoint: 480, // Mobile devices
        settings: {
          slidesToShow: 1, // Full card view
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          arrows: false,
          centerMode: true,
          centerPadding: '15px', // Slightly less padding for smaller screens
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
        className="text-center px-4" // Added horizontal padding for mobile
      >
        <p className="sm:text-lg text-base text-neutral-400 uppercase tracking-wider font-poppins">
          My Work
        </p>
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-pink-500 font-black md:text-6xl sm:text-5xl xs:text-4xl text-3xl font-space-grotesk mt-2">
          Projects.
        </h2>
      </motion.div>

      {/* Intro Text */}
      <motion.p
        variants={textVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-6 text-neutral-300 text-base sm:text-lg max-w-3xl mx-auto text-center leading-relaxed font-poppins px-4" // Added horizontal padding for mobile
      >
        These projects showcase my skills and experience through real-world examples. Each one includes a live demo and source code, reflecting my ability to create efficient, scalable, and visually appealing solutions.
      </motion.p>

      {/* Project Cards Slider */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        // Adjusted padding for slider wrapper to ensure cards don't touch screen edges
        className="mt-16 max-w-7xl mx-auto py-4"
      >
        <Slider {...sliderSettings}>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} {...project} />
          ))}
        </Slider>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Projects, 'projects');