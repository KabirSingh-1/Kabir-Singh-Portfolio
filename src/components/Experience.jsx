import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import { SectionWrapper } from './hoc/SectionWrapper';
import { experiences } from '../constants';
import ErrorBoundary from './ErrorBoundary';

const textVariant = (delay = 0) => {
  return {
    hidden: { y: -50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", duration: 1.25, delay },
    },
  };
};

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain rounded-full"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-2xl font-bold font-space-grotesk">
        {experience.title}
      </h3>
      <p
        className="text-neutral-400 text-base font-semibold"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-sm pl-1 tracking-wider font-poppins"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sm:text-lg text-base text-neutral-400 uppercase tracking-wider font-poppins">
          What I have done so far
        </p>
        <h2 className="text-white font-black md:text-6xl sm:text-5xl xs:text-4xl text-3xl font-space-grotesk">
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#6d28d9">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'experience');

// import React from 'react';
// import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// import { motion } from 'framer-motion';
// import { SectionWrapper } from './hoc/sectionWrapper';
// import { experiences } from '../constants';
// import ErrorBoundary from './ErrorBoundary';
// import 'react-vertical-timeline-component/style.min.css';

// const textVariant = (delay = 0) => ({
//   hidden: { y: -50, opacity: 0 },
//   show: {
//     y: 0,
//     opacity: 1,
//     transition: { type: "spring", duration: 1.25, delay },
//   },
// });

// const fadeIn = (delay = 0) => ({
//   hidden: { opacity: 0, y: 30 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.8, delay },
//   },
// });

// const ExperienceCard = ({ experience, index }) => (
//   <motion.div variants={fadeIn(index * 0.2)}>
//     <VerticalTimelineElement
//       contentStyle={{
//         background: 'linear-gradient(135deg, #1d1836, #232631)',
//         color: '#fff',
//         borderRadius: '12px',
//         boxShadow: '0 4px 14px rgba(0,0,0,0.4)',
//       }}
//       contentArrowStyle={{ borderRight: '7px solid #6d28d9' }}
//       date={experience.date}
//       iconStyle={{ background: experience.iconBg }}
//       icon={
//         <motion.div
//           className="flex justify-center items-center w-full h-full"
//           whileHover={{ scale: 1.15 }}
//           transition={{ type: 'spring', stiffness: 200 }}
//         >
//           <img
//             src={experience.icon}
//             alt={experience.company_name}
//             className="w-[60%] h-[60%] object-contain rounded-full"
//           />
//         </motion.div>
//       }
//     >
//       <div>
//         <h3 className="text-white text-2xl font-bold font-space-grotesk">
//           {experience.title}
//         </h3>
//         <p className="text-violet-400 text-base font-semibold" style={{ margin: 0 }}>
//           {experience.company_name}
//         </p>
//       </div>
//       <ul className="mt-5 list-disc ml-5 space-y-2">
//         {experience.points.map((point, index) => (
//           <li
//             key={`experience-point-${index}`}
//             className="text-neutral-200 text-sm pl-1 leading-relaxed tracking-wide font-poppins hover:text-white transition-colors duration-300"
//           >
//             {point}
//           </li>
//         ))}
//       </ul>
//     </VerticalTimelineElement>
//   </motion.div>
// );

// const Experience = () => {
//   return (
//     <ErrorBoundary>
//       <motion.div variants={textVariant()}>
//         <p className="sm:text-lg text-base text-neutral-400 uppercase tracking-wider font-poppins">
//           What I have done so far
//         </p>
//         <h2 className="text-white font-black md:text-6xl sm:text-5xl text-4xl font-space-grotesk">
//           Work Experience
//         </h2>
//       </motion.div>

//       <div className="mt-16 flex flex-col">
//         <VerticalTimeline lineColor="#6d28d9">
//           {experiences.map((experience, index) => (
//             <ExperienceCard key={index} experience={experience} index={index} />
//           ))}
//         </VerticalTimeline>
//       </div>
//     </ErrorBoundary>
//   );
// };

// export default SectionWrapper(Experience, 'experience');
