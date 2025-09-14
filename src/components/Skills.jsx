import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "./hoc/SectionWrapper";
import { skills } from "../constants";

const textVariant = (delay = 0) => ({
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1.25, delay },
  },
});

const Skills = () => {
  // Split skills into two rows
  const mid = Math.ceil(skills.length / 2);
  const row1 = skills.slice(0, mid);
  const row2 = skills.slice(mid);

  const repeatRow = (row) => [...row, ...row];

  return (
    <>
      {/* Heading */}
      <motion.div
        variants={textVariant(0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center px-4"
      >
        <p className="sm:text-lg text-base text-neutral-400 uppercase tracking-wider font-poppins">
          My Abilities
        </p>
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 font-black md:text-6xl sm:text-5xl text-3xl font-space-grotesk mt-2">
          Tech Stack
        </h2>
      </motion.div>

      {/* Two Marquee Rows */}
      <div className="mt-12 space-y-8 overflow-hidden">
        {/* Row 1 (left to right) */}
        <div className="overflow-hidden py-4 border-t border-b border-neutral-700/50">
          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
          >
            {repeatRow(row1).map((skill, i) => (
              <motion.div
                key={`row1-${i}`}
                whileHover={{ scale: 1.15, rotate: 5 }}
                className="flex flex-col items-center min-w-[6rem] sm:min-w-[7rem]"
              >
                <div className="flex items-center justify-center p-4 rounded-2xl bg-neutral-800/60 shadow-lg shadow-cyan-500/20 hover:shadow-purple-500/30 transition-all duration-300">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <p className="mt-3 text-neutral-300 text-sm font-poppins text-center">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 (right to left) */}
        <div className="overflow-hidden py-4 border-b border-neutral-700/50">
          <motion.div
            className="flex gap-8"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {repeatRow(row2).map((skill, i) => (
              <motion.div
                key={`row2-${i}`}
                whileHover={{ scale: 1.15, rotate: -5 }}
                className="flex flex-col items-center min-w-[6rem] sm:min-w-[7rem]"
              >
                <div className="flex items-center justify-center p-4 rounded-2xl bg-neutral-800/60 shadow-lg shadow-pink-500/20 hover:shadow-cyan-500/30 transition-all duration-300">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <p className="mt-3 text-neutral-300 text-sm font-poppins text-center">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
