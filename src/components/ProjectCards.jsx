// import React from 'react';
// import { motion } from 'framer-motion';

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

// const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_demo_link }) => {
//   return (
//     <motion.div
//       variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
//       className="bg-neutral-800 p-5 rounded-2xl sm:w-[360px] w-full"
//     >
//       <div className="relative w-full h-[230px]">
//         <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
//         <div className="absolute inset-0 flex justify-end m-3">
//           <div
//             onClick={() => window.open(source_code_link, '_blank')}
//             className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-gray-900 hover:bg-gray-700 transition-colors"
//           >
//             {/* GitHub Icon */}
//             <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 
//                 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416
//                 -.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 
//                 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 
//                 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467
//                 -5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 
//                 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 
//                 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 
//                 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 
//                 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 
//                 5.921.43.372.823 1.102.823 2.222v3.293c0 
//                 .319.192.694.801.576 4.765-1.589 8.199-6.086 
//                 8.199-11.386 0-6.627-5.373-12-12-12z" />
//             </svg>
//           </div>
//         </div>
//       </div>

//       <div className="mt-5">
//         <h3 className="text-white font-bold text-2xl font-space-grotesk">{name}</h3>
//         <p className="mt-2 text-neutral-300 text-sm font-poppins">{description}</p>
//       </div>

//       <div className="mt-4 flex flex-wrap gap-2">
//         {tags.map((tag) => (
//           <p key={tag.name} className={`text-sm font-medium ${tag.color}`}>
//             #{tag.name}
//           </p>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default ProjectCard;

import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

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

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.3, 0.75)}
      className="sm:w-[360px] w-full"
    >
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.3}
        scale={1.05}
        transitionSpeed={250}
        className="bg-neutral-800/70 backdrop-blur-lg border border-neutral-700 rounded-2xl shadow-lg hover:shadow-violet-500/40 transition-all duration-300 h-full flex flex-col"
        style={{ minHeight: '450px' }} // ✅ Ensures consistent card height
      >
        {/* Project Image with Overlay */}
        <div className="relative w-full h-[230px] rounded-t-2xl overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-t-2xl"
          />
          {/* Overlay with Buttons */}
          <div className="absolute inset-0 flex justify-center items-center gap-4 bg-black/60 opacity-0 hover:opacity-100 transition duration-300">
            {live_demo_link && (
              <button
                onClick={() => window.open(live_demo_link, '_blank')}
                className="bg-white text-black font-semibold px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-200 transition"
              >
                Live <FaExternalLinkAlt />
              </button>
            )}
            {source_code_link && (
              <button
                onClick={() => window.open(source_code_link, '_blank')}
                className="bg-violet-600 text-white font-semibold px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-violet-700 transition"
              >
                Code <FaGithub />
              </button>
            )}
          </div>
        </div>

        {/* Project Info */}
        <div className="p-5 flex flex-col justify-between flex-1">
          <div>
            <h3 className="text-white font-bold text-2xl font-space-grotesk">
              {name}
            </h3>
            <p className="mt-2 text-neutral-300 text-sm font-poppins">
              {description}
            </p>
          </div>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag.name}
                className={`text-sm font-medium px-2 py-1 rounded-lg bg-neutral-700/50 ${tag.color}`}
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
