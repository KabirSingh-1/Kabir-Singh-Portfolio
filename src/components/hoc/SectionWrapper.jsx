
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
        className="max-w-7xl mx-auto relative z-0 px-4 sm:px-6 lg:px-8 py-10 sm:py-16"
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

