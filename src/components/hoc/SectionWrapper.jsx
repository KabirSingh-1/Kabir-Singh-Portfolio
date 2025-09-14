import React, { memo } from "react";
import { motion } from "framer-motion";

const staggerContainer = (staggerChildren = 0.2, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const SectionWrapper = (
  Component,
  idName,
  options = { staggerChildren: 0.2, delayChildren: 0 }
) => {
  const WrappedComponent = () => {
    return (
      <motion.section
        variants={staggerContainer(options.staggerChildren, options.delayChildren)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        // Adjusted padding for the section to give more room for the marquee
        className="max-w-full mx-auto relative z-0 px-0 sm:px-0 lg:px-0 py-10 sm:py-16 overflow-hidden" // Removed horizontal padding and added overflow-hidden
      >
        {idName && (
          <span className="hash-span" id={idName} aria-hidden="true">
            &nbsp;
          </span>
        )}
        <Component />
      </motion.section>
    );
  };

  WrappedComponent.displayName = `SectionWrapper(${Component.displayName || Component.name || "Component"})`;

  return memo(WrappedComponent);
};

// --- END OF FILE SectionWrapper.jsx ---

