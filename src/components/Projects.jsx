import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { SectionWrapper } from './hoc/SectionWrapper';
import { projects } from '../constants';
import ProjectCard from './ProjectCards';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const textVariant = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Projects = () => {
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1.5, slidesToScroll: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: true, centerPadding: '20px' } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: true, centerPadding: '15px' } },
    ],
  };

  return (
    <>
      <motion.div variants={textVariant} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center px-4">
        <p className="sm:text-lg text-base text-neutral-400 uppercase tracking-wider font-poppins">My Work</p>
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-pink-500 font-black md:text-6xl sm:text-5xl text-3xl font-space-grotesk mt-2">
          Projects.
        </h2>
      </motion.div>

      <motion.p
        variants={textVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-6 text-neutral-300 text-base sm:text-lg max-w-3xl mx-auto text-center leading-relaxed font-poppins px-4"
      >
        These projects showcase my skills and experience through real-world examples. Each one includes a live demo and source code, reflecting my ability to create efficient, scalable, and visually appealing solutions.
      </motion.p>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="mt-16 max-w-7xl mx-auto py-4">
        <Slider {...sliderSettings}>
          {projects.map((p, i) => (
            <ProjectCard key={`project-${i}`} {...p} />
          ))}
        </Slider>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Projects, 'projects');
