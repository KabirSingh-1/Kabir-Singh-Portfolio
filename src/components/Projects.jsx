// import React from 'react';
// import { motion } from 'framer-motion';
// import { SectionWrapper } from './hoc/sectionWrapper';
// import { projects } from '../constants';
// import ProjectCard from './ProjectCards';

// const fadeIn = (direction = 'up', type = 'tween', delay = 0, duration = 1) => ({
//   hidden: {
//     x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
//     y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
//     opacity: 0,
//   },
//   show: {
//     x: 0,
//     y: 0,
//     opacity: 1,
//     transition: {
//       type,
//       delay,
//       duration,
//       ease: 'easeOut',
//     },
//   },
// });

// const Projects = () => {
//   return (
//     <>
//       <motion.div variants={fadeIn("up", "tween", 0.2, 1)}>
//         <p className="sm:text-lg text-base text-neutral-400 uppercase tracking-wider font-poppins">
//           My Work
//         </p>
//         <h2 className="text-white font-black md:text-6xl sm:text-5xl xs:text-4xl text-3xl font-space-grotesk">
//           Projects.
//         </h2>
//       </motion.div>

//       <div className="w-full flex">
//         <motion.p
//           variants={fadeIn("", "tween", 0.1, 1)}
//           className="mt-3 text-neutral-300 text-base sm:text-lg max-w-3xl leading-relaxed font-poppins"
//         >
//           Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
//         </motion.p>
//       </div>

//       <div className="mt-20 flex flex-wrap gap-7 justify-center">
//         {projects.map((project, index) => (
//           <ProjectCard key={`project-${index}`} index={index} {...project} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(Projects, 'projects');

import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from './hoc/SectionWrapper';
import { projects } from '../constants';
import ProjectCard from './ProjectCards';

// Animation Variants
const textVariant = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const Projects = () => {
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

      {/* Project Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-center"
      >
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Projects, 'projects');

