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
   <motion.div
  variants={textVariant()}
  className="text-center mb-8" // 👈 centers text + adds spacing below
>
  <p className="sm:text-lg text-base text-neutral-400 uppercase tracking-wider font-poppins">
    What I have done so far
  </p>
  <h2 className="text-white font-black md:text-6xl sm:text-5xl xs:text-4xl text-3xl font-space-grotesk mt-2">
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
