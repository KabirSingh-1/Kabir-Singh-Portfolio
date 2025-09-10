// import React from 'react';
// import { motion } from 'framer-motion';
// import Tilt from 'react-parallax-tilt'; // Import Tilt for the parallax effect
// import { SectionWrapper } from './hoc/SectionWrapper';
// import { certifications } from '../constants';

// const fadeIn = (direction = 'up', type = 'spring', delay = 0, duration = 0.75) => ({
//   hidden: {
//     x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
//     y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
//     opacity: 0,
//   },
//   show: {
//     x: 0,
//     y: 0,
//     opacity: 1,
//     transition: { type, delay, duration, ease: 'easeOut' },
//   },
// });

// const CertificationCard = ({ index, name, issuer, date, image, link }) => {
//   return (
//     <motion.div
//       variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
//       className="sm:w-[360px] w-full" // Ensure responsive width
//     >
//       <Tilt
//         glareEnable={true}
//         glareMaxOpacity={0.4}
//         glareColor="#ffffff"
//         glarePosition="all"
//         scale={1.03} // Slightly larger scale on hover for more depth
//         transitionSpeed={400} // Smoother tilt transition
//         className="bg-neutral-800/70 backdrop-blur-lg border border-neutral-700 rounded-2xl shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 h-full flex flex-col items-center p-6 transform hover:-translate-y-2" // Added translate-y for lift effect
//       >
//         {/* Certification Image */}
//         <motion.img
//           src={image}
//           alt={name}
//           className="w-full h-40 object-contain mb-4 rounded-lg shadow-md"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }} // Staggered and slightly delayed image animation
//         />

//         {/* Certification Details */}
//         <div className="text-center flex-grow"> {/* flex-grow to push link to bottom */}
//           <h3 className="text-white font-bold text-xl font-space-grotesk mt-2">{name}</h3>
//           <p className="text-neutral-300 text-sm mt-1">{issuer}</p>
//           <p className="text-neutral-400 text-xs mt-1">{date}</p>
//         </div>

//         {/* View Certificate Link */}
//         {link && (
//           <motion.a
//             href={link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="mt-6 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
//             whileHover={{ scale: 1.05, boxShadow: '0 8px 16px rgba(0, 200, 200, 0.3)' }} // Hover effect on button
//             whileTap={{ scale: 0.95 }}
//           >
//             View Certificate{' '}
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
//             </svg>
//           </motion.a>
//         )}
//       </Tilt>
//     </motion.div>
//   );
// };

// const Certifications = () => {
//   return (
//     <>
//       <motion.div
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//         className="text-center"
//       >
//         <p className="sm:text-lg text-base text-neutral-400 uppercase tracking-wider font-poppins">
//           What I've Learned
//         </p>
//         <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 font-black md:text-6xl sm:text-5xl xs:text-4xl text-3xl font-space-grotesk">
//           Certifications.
//         </h2>
//       </motion.div>

//       <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center">
//         {certifications.map((certification, index) => (
//           <CertificationCard key={`certification-${index}`} index={index} {...certification} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(Certifications, 'certifications');

import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import Slider from 'react-slick'; // Import Slider
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
    <div className="px-3 py-2"> {/* Added padding for spacing between carousel items */}
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.4}
        glareColor="#ffffff"
        glarePosition="all"
        scale={1.03}
        transitionSpeed={400}
        className="bg-neutral-800/70 backdrop-blur-lg border border-neutral-700 rounded-2xl shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 h-full flex flex-col items-center p-6 transform hover:-translate-y-2"
        style={{ minHeight: '420px' }} // Adjusted minHeight to ensure consistent card size in carousel
      >
        {/* Certification Image */}
        <motion.img
          src={image}
          alt={name}
          className="w-full h-40 object-contain mb-4 rounded-lg shadow-md"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }} // Removed delay here, as slider handles entry
        />

        {/* Certification Details */}
        <div className="text-center flex-grow">
          <h3 className="text-white font-bold text-xl font-space-grotesk mt-2">{name}</h3>
          <p className="text-neutral-300 text-sm mt-1">{issuer}</p>
          <p className="text-neutral-400 text-xs mt-1">{date}</p>
        </div>

        {/* View Certificate Link */}
        {link && (
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
            whileHover={{ scale: 1.05, boxShadow: '0 8px 16px rgba(0, 200, 200, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            View Certificate{' '}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </motion.a>
        )}
      </Tilt>
    </div>
  );
};

const Certifications = () => {
  // react-slick settings
  const sliderSettings = {
    dots: true,
    infinite: false, // Set to false if you don't want it to loop
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
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="sm:text-lg text-base text-neutral-400 uppercase tracking-wider font-poppins">
          What I've Learned
        </p>
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 font-black md:text-6xl sm:text-5xl xs:text-4xl text-3xl font-space-grotesk">
          Certifications.
        </h2>
      </motion.div>

      {/* Use the Slider component */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }} // Adjust amount for when animation triggers
        variants={fadeIn('up', 'spring', 0.2, 0.75)} // Apply overall fade-in to the slider container
        className="mt-12 max-w-7xl mx-auto" // Added max-width and auto margins for centering
      >
        <Slider {...sliderSettings}>
          {certifications.map((certification, index) => (
            // Each card is now a child of the Slider
            <CertificationCard key={`certification-${index}`} {...certification} />
          ))}
        </Slider>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Certifications, 'certifications');