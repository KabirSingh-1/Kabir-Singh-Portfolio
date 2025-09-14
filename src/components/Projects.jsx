import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { SectionWrapper } from './hoc/SectionWrapper';
import { projects } from '../constants';
import ProjectCard from './ProjectCards';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Heading & intro animation
const textVariant = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

// Staggered card animation
const cardVariant = {
  hidden: { opacity: 0, x: 50 },
  show: i => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const Projects = () => {
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    touchMove: true,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1, centerMode: false },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: true, centerPadding: '40px' },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: true, centerPadding: '20px' },
      },
    ],
  };

  return (
    <div className="w-full px-4 sm:px-6">
      {/* Heading */}
      <motion.div
        variants={textVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="sm:text-lg text-base text-neutral-400 uppercase tracking-wider font-poppins">My Work</p>
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-pink-500 font-black md:text-6xl sm:text-5xl text-3xl font-space-grotesk mt-2">
          Projects.
        </h2>
      </motion.div>

      {/* Intro text */}
      <motion.p
        variants={textVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-6 text-neutral-300 text-base sm:text-lg max-w-3xl mx-auto text-center leading-relaxed font-poppins"
      >
        These projects showcase my skills and experience through real-world examples. Each one includes a live demo and source code, reflecting my ability to create efficient, scalable, and visually appealing solutions.
      </motion.p>

      {/* Project Slider */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-16 max-w-full mx-auto"
      >
        <Slider {...sliderSettings}>
          {projects.map((project, index) => (
            <motion.div key={`project-${index}`} custom={index} variants={cardVariant} className="px-2">
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
