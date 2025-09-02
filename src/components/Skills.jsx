// import React from 'react';
// import { SectionWrapper } from './hoc/sectionWrapper';
// import BallCanvas from './canvas/Ball';
// import { skills } from '../constants';
// import { motion } from 'framer-motion';

// const textVariant = (delay = 0) => {
//   return {
//     hidden: {
//       y: -50,
//       opacity: 0,
//     },
//     show: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         duration: 1.25,
//         delay,
//       },
//     },
//   };
// };

// const Skills = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className="sm:text-lg text-base text-neutral-400 uppercase tracking-wider font-poppins">My Abilities</p>
//         <h2 className="text-white font-black md:text-6xl sm:text-5xl xs:text-4xl text-3xl font-space-grotesk">Tech Stack.</h2>
//       </motion.div>
//       <div className="mt-10 flex flex-row flex-wrap justify-center gap-10">
//         {skills.map((skill) => (
//           <div className="w-28 h-28" key={skill.name}>
//             <BallCanvas icon={skill.icon} />
//             <p className="text-center mt-2 text-neutral-300 font-poppins">{skill.name}</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(Skills, 'skills');

import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from './hoc/SectionWrapper';
import BallCanvas from './canvas/Ball';
import { skills } from '../constants';

const textVariant = (delay = 0) => ({
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', duration: 1.25, delay },
  },
});

const Skills = () => {
  return (
    <>
      {/* Heading */}
      <motion.div
        variants={textVariant(0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="sm:text-lg text-base text-neutral-400 uppercase tracking-wider font-poppins">
          My Abilities
        </p>
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-black md:text-6xl sm:text-5xl xs:text-4xl text-3xl font-space-grotesk">
          Tech Stack
        </h2>
      </motion.div>

      {/* Skills Grid */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center group"
          >
            {/* BallCanvas with hover scale effect */}
            <div className="w-28 h-28 transition-transform duration-300 group-hover:scale-110">
              <BallCanvas icon={skill.icon} />
            </div>
            {/* Skill Name */}
            <p className="mt-3 text-neutral-300 text-base font-poppins">
              {skill.name}
            </p>
            {/* Tooltip (on hover) */}
            {skill.description && (
              <div className="absolute opacity-0 group-hover:opacity-100 transition bg-neutral-900 text-white text-sm p-2 rounded-lg mt-2 shadow-lg z-10 w-40 text-center">
                {skill.description}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, 'skills');

