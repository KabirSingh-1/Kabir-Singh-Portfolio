import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { SectionWrapper } from './hoc/SectionWrapper';
import { projects } from '../constants';
import ProjectCard from './ProjectCards';

// Import slick carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Import custom CSS for the glow and custom dots
import '../index.css'; // Make sure this path is correct for your custom CSS

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
  const [activeSlide, setActiveSlide] = useState(0); // State to track active slide

  // Custom Paging Dots Component
  const CustomPaging = (i) => (
    <div
      className={`h-2 w-2 rounded-full mx-1 transition-all duration-300 ${
        i === activeSlide ? 'bg-violet-500 w-6' : 'bg-neutral-600'
      }`}
      style={{
        display: 'inline-block', // Ensure dots are inline
        margin: '0 4px', // Adjust spacing between dots
      }}
    ></div>
  );

  // Enhanced react-slick settings for Project Cards
  const sliderSettings = {
    dots: true,
    infinite: true, // Changed to true for continuous looping
    speed: 700, // Slightly slower transition
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true, // Enable center mode for the highlighted card effect
    centerPadding: '60px', // Adjust padding to reveal parts of next/prev cards
    beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex), // Update active slide before change
    appendDots: (dots) => (
      <div style={{ position: 'absolute', bottom: '-40px', width: '100%', textAlign: 'center' }}>
        <ul style={{ margin: '0', padding: '0', display: 'inline-block' }}> {dots} </ul>
      </div>
    ),
    customPaging: CustomPaging, // Use custom paging dots
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: '40px',
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: '80px', // More padding for 2 items
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Only one full card at a time
          slidesToScroll: 1,
          centerPadding: '80px', // Show more of the next/prev cards
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '40px', // Adjust as needed for smaller screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '20px', // Minimal padding for very small screens
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
        className="text-center px-4"
      >
        <p className="sm:text-lg text-sm text-neutral-400 uppercase tracking-wider font-poppins">
          My Work
        </p>
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-pink-500 font-black md:text-6xl sm:text-5xl text-4xl font-space-grotesk mt-2">
          Projects.
        </h2>
      </motion.div>

      {/* Intro Text */}
      <motion.p
        variants={textVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-4 sm:mt-6 text-neutral-300 text-sm sm:text-base max-w-3xl mx-auto text-center leading-relaxed font-poppins px-4"
      >
        These projects showcase my skills and experience through real-world examples. Each one includes a live demo and source code, reflecting my ability to create efficient, scalable, and visually appealing solutions.
      </motion.p>

      {/* Project Cards Slider */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-12 max-w-7xl mx-auto py-4 px-2 sm:px-4"
      >
        <Slider {...sliderSettings}>
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              {...project}
              isActive={index === activeSlide} // Pass isActive prop
            />
          ))}
        </Slider>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Projects, 'projects');