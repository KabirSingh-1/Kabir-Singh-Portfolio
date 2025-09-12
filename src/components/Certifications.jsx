import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import Slider from 'react-slick'; 
import { SectionWrapper } from './hoc/SectionWrapper';
import { certifications } from '../constants';

// Import slick carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const fadeIn = (direction = 'up', type = 'spring', delay = 0, duration = 0.75) => ({
  hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { type, delay, duration, ease: 'easeOut' },
  },
});

const CertificationCard = ({ name, issuer, date, image, link }) => {
  return (
    <div className="px-2 sm:px-3 py-2">
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.4}
        glareColor="#ffffff"
        glarePosition="all"
        scale={1.03}
        transitionSpeed={400}
        className="bg-neutral-800/70 backdrop-blur-lg border border-neutral-700 rounded-2xl shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 h-full flex flex-col items-center p-4 sm:p-6 transform hover:-translate-y-2 overflow-hidden"
      >
        {/* Certification Image */}
        <motion.img
          src={image}
          alt={name}
          className="w-full h-28 sm:h-36 md:h-40 object-contain mb-3 sm:mb-4 rounded-lg shadow-md"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Certification Details */}
        <div className="text-center flex-grow">
          <h3 className="text-white font-bold text-lg sm:text-xl font-space-grotesk mt-1 sm:mt-2 line-clamp-2">{name}</h3>
          <p className="text-neutral-300 text-xs sm:text-sm mt-1 line-clamp-1">{issuer}</p>
          <p className="text-neutral-400 text-xs mt-1">{date}</p>
        </div>

        {/* View Certificate Link */}
        {link && (
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 sm:mt-6 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1.5 sm:gap-2 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
            whileHover={{ scale: 1.05, boxShadow: '0 8px 16px rgba(0, 200, 200, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            View Certificate
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </motion.a>
        )}
      </Tilt>
    </div>
  );
};

const Certifications = () => {
  // Enhanced react-slick settings
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          dots: true,
          centerMode: true,
          centerPadding: '40px',
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          dots: true,
          centerMode: true,
          centerPadding: '30px',
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          centerMode: true,
          centerPadding: '20px',
        },
      },
    ],
  };

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center px-4"
      >
        <p className="sm:text-lg text-sm text-neutral-400 uppercase tracking-wider font-poppins">
          What I've Learned
        </p>
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 font-black md:text-6xl sm:text-5xl text-4xl font-space-grotesk mt-2">
          Certifications.
        </h2>
      </motion.div>

      {/* Slider Section */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeIn('up', 'spring', 0.2, 0.75)}
        className="mt-8 sm:mt-12 max-w-7xl mx-auto px-2 sm:px-4"
      >
        <Slider {...sliderSettings}>
          {certifications.map((certification, index) => (
            <CertificationCard key={`certification-${index}`} {...certification} />
          ))}
        </Slider>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Certifications, 'certifications');