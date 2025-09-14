import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import Slider from 'react-slick';
import { SectionWrapper } from './hoc/SectionWrapper';
import { certifications } from '../constants';

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

const CertificationCard = ({ name, issuer, date, image, link }) => (
  <div className="px-2 py-4 sm:px-3 sm:py-2">
    <Tilt
      glareEnable
      glareMaxOpacity={0.4}
      glareColor="#ffffff"
      glarePosition="all"
      scale={1.03}
      transitionSpeed={400}
      className="uniform-card glow-card hover:scale-[1.02] transition-transform"
    >
      {/* Image */}
      <motion.img
        src={image}
        alt={name}
        loading="lazy"
       className="w-full h-32 sm:h-40 object-contain mt-3 mb-4 rounded-lg shadow-md"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Details */}
      <div className="text-center flex-grow">
        <h3 className="text-white font-bold text-lg sm:text-xl font-space-grotesk mt-2 line-clamp-1">
          {name}
        </h3>
        <p className="text-neutral-300 text-sm mt-1 line-clamp-1">{issuer}</p>
        <p className="text-neutral-400 text-xs mt-1 line-clamp-1">{date}</p>
      </div>

      {/* Link */}
     {link && (
  <div className="mt-3 flex justify-center">
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center 
                 bg-gradient-to-r from-teal-500 to-cyan-600 
                 hover:from-teal-600 hover:to-cyan-700 
                 text-white px-3 py-1.5 rounded-md text-sm font-medium 
                 gap-1.5 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      View Certificate
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </motion.a>
  </div>
)}

    </Tilt>
  </div>
);

const Certifications = () => {
 const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3, // default desktop
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1280, // large screens
      settings: { slidesToShow: 3, slidesToScroll: 1 },
    },
    {
      breakpoint: 1024, // tablets
      settings: { slidesToShow: 2, slidesToScroll: 1 },
    },
    {
      breakpoint: 768, // medium phones
      settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: false, centerPadding: '0px' },
    },
    {
      breakpoint: 480, // small phones
      settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: false, centerPadding: '0px' },
    },
  ],
};


  return (
    <>
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center">
        <p className="sm:text-lg text-base text-neutral-400 uppercase tracking-wider font-poppins">What I've Learned</p>
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 font-black md:text-6xl sm:text-5xl text-3xl font-space-grotesk">
          Certifications.
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeIn('up', 'spring', 0.2, 0.75)}
        className="mt-12 max-w-7xl mx-auto px-2"
      >
        <Slider {...sliderSettings}>
          {certifications.map((c, i) => (
            <CertificationCard key={`cert-${i}`} {...c} />
          ))}
        </Slider>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Certifications, 'certifications');
