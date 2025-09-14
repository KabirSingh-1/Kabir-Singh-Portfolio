// import React from 'react';
// import { motion } from 'framer-motion';
// import Slider from 'react-slick';
// import { SectionWrapper } from './hoc/SectionWrapper';
// import { projects } from '../constants';
// import ProjectCard from './ProjectCards';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const textVariant = {
//   hidden: { opacity: 0, y: 50 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
// };

// const Projects = () => {
//   const sliderSettings = {
//   dots: true,
//   speed: 500,
//   slidesToShow: Math.min(3, projects.length),
//   slidesToScroll: 1,
//   arrows: false,
//   infinite: projects.length > 3, // desktop default
//   responsive: [
//     {
//       breakpoint: 1280,
//       settings: { slidesToShow: Math.min(3, projects.length), slidesToScroll: 1, infinite: projects.length > 3 },
//     },
//     {
//       breakpoint: 1024,
//       settings: { slidesToShow: Math.min(2, projects.length), slidesToScroll: 1, infinite: projects.length > 2 },
//     },
//     {
//       breakpoint: 768,
//       settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: false, centerPadding: '0px', infinite: true },
//     },
//     {
//       breakpoint: 480,
//       settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: false, centerPadding: '0px', infinite: true },
//     },
//   ],
// };


//   return (
//     <>
//       <motion.div
//         variants={textVariant}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//         className="text-center px-4"
//       >
//         <p className="sm:text-lg text-base text-neutral-400 uppercase tracking-wider font-poppins">My Work</p>
//         <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-pink-500 font-black md:text-6xl sm:text-5xl text-3xl font-space-grotesk mt-2">
//           Projects.
//         </h2>
//       </motion.div>

//       <motion.p
//         variants={textVariant}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//         className="mt-6 text-neutral-300 text-base sm:text-lg max-w-3xl mx-auto text-center leading-relaxed font-poppins px-4"
//       >
//         These projects showcase my skills and experience through real-world examples. Each one includes a live demo and source code, reflecting my ability to create efficient, scalable, and visually appealing solutions.
//       </motion.p>

//       <motion.div
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.1 }}
//         className="mt-16 max-w-7xl mx-auto py-4"
//       >
//         <Slider {...sliderSettings}>
//           {projects.map((p, i) => (
//             <div key={`project-${i}`} className="px-2">
//               <ProjectCard {...p} />
//             </div>
//           ))}
//         </Slider>
//       </motion.div>
//     </>
//   );
// };

// export default SectionWrapper(Projects, 'projects');

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { SectionWrapper } from "./hoc/SectionWrapper";
import { projects } from "../constants";
import ProjectCard from "./ProjectCards";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const fadeIn = (direction = "up", type = "spring", delay = 0, duration = 0.75) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { type, delay, duration, ease: "easeOut" },
  },
});

const Projects = () => {
  return (
    <>
      {/* Section Title */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center px-4"
      >
        <p className="sm:text-lg text-base text-neutral-400 uppercase tracking-wider font-poppins">
          My Work
        </p>
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-pink-500 font-black md:text-6xl sm:text-5xl text-3xl font-space-grotesk mt-2">
          Projects.
        </h2>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        variants={fadeIn("up", "spring", 0.2, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-6 text-neutral-300 text-base sm:text-lg max-w-3xl mx-auto text-center leading-relaxed font-poppins px-4"
      >
        These projects showcase my skills and experience through real-world
        examples. Each one includes a live demo and source code, reflecting my
        ability to create efficient, scalable, and visually appealing solutions.
      </motion.p>

      {/* Swiper Slider */}
      <motion.div
        variants={fadeIn("up", "spring", 0.3, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-12 max-w-7xl mx-auto px-2"
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1280: { slidesPerView: 3 },
            1024: { slidesPerView: 2 },
            768: { slidesPerView: 1 },
            480: { slidesPerView: 1 },
          }}
        >
          {projects.map((p, i) => (
            <SwiperSlide key={`project-${i}`}>
              <div className="px-2 py-4 sm:px-3 sm:py-2">
                <ProjectCard {...p} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
