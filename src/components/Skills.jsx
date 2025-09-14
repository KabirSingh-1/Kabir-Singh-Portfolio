import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from './hoc/SectionWrapper';
import BallCanvas from './canvas/Ball';
import { skills } from '../constants';

const textVariant = (delay = 0) => ({
  hidden: { y: -50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: 'spring', duration: 1.25, delay } },
});

const Skills = () => {
  // Split skills into two halves for two rows
  const mid = Math.ceil(skills.length / 2);
  const row1 = skills.slice(0, mid);
  const row2 = skills.slice(mid);

  return (
    <>
      {/* Heading */}
      <motion.div variants={textVariant(0)} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center">
        <p className="sm:text-lg text-base text-neutral-400 uppercase tracking-wider font-poppins">My Abilities</p>
        {/* Adjusted gradient for "Tech Stack" to match image */}
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 font-black md:text-6xl sm:text-5xl text-3xl font-space-grotesk">
          Tech Stack
        </h2>
      </motion.div>

      {/* Skills Marquee Rows */}
      <div className="mt-12 space-y-8 overflow-hidden">
        {/* Row 1 (left to right) */}
        <div className="overflow-hidden py-4 border-t border-b border-neutral-700/50"> {/* Added padding and subtle borders for visual separation */}
          <div className="marquee-row marquee-left animation-[marquee-left_20s_linear_infinite] flex items-center">
            {[...row1, ...row1].map((skill, i) => (
              <div key={`row1-${i}`} className="flex flex-col items-center mx-6 min-w-[7rem]"> {/* min-w to prevent shrinking */}
                {/* Applied 'glow-shield' class for the new visual style */}
                <div className="skill-ball glow-shield flex items-center justify-center p-2 rounded-full transform hover:scale-105 transition-transform duration-300">
                  <BallCanvas icon={skill.icon} />
                </div>
                <p className="mt-3 text-neutral-300 text-sm font-poppins text-center">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 (right to left) */}
        <div className="overflow-hidden py-4 border-b border-neutral-700/50"> {/* Added padding and subtle border */}
          <div className="marquee-row marquee-right animation-[marquee-right_22s_linear_infinite] flex items-center">
            {[...row2, ...row2].map((skill, i) => (
              <div key={`row2-${i}`} className="flex flex-col items-center mx-6 min-w-[7rem]"> {/* min-w to prevent shrinking */}
                {/* Applied 'glow-shield' class for the new visual style */}
                <div className="skill-ball glow-shield flex items-center justify-center p-2 rounded-full transform hover:scale-105 transition-transform duration-300">
                  <BallCanvas icon={skill.icon} />
                </div>
                <p className="mt-3 text-neutral-300 text-sm font-poppins text-center">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Skills, 'skills');
