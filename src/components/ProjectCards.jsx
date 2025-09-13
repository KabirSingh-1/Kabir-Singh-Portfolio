import React from 'react';
import { motion } from 'framer-motion'; // Still good for potential future use or if Tilt uses it internally
import Tilt from 'react-parallax-tilt';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  return (
    // Outer padding for spacing between cards in the carousel, especially on mobile where they stack.
    <div className="px-2 py-4 sm:px-3 sm:py-2">
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.3}
        scale={1.03} // Slightly reduced scale for less exaggerated effect on smaller screens
        transitionSpeed={250}
        className="bg-neutral-800/70 backdrop-blur-lg border border-neutral-700 rounded-2xl shadow-lg hover:shadow-violet-500/40 transition-all duration-300 h-full flex flex-col"
        // minHeight helps maintain layout consistency, but let's make it slightly more flexible
        // by removing the hardcoded value and letting content dictate height more on mobile.
        // We'll rely on flex-1 for the content area.
      >
        {/* Project Image with Overlay */}
        <div className="relative w-full h-[180px] sm:h-[230px] rounded-t-2xl overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-t-2xl"
            loading="lazy" // Added lazy loading for performance
          />
          {/* Overlay with Buttons */}
          <div className="absolute inset-0 flex justify-center items-center gap-3 sm:gap-4 bg-black/60 opacity-0 hover:opacity-100 transition duration-300">
            {live_demo_link && (
              <button
                onClick={() => window.open(live_demo_link, '_blank')}
                className="bg-white text-black text-sm sm:text-base font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg flex items-center gap-1.5 sm:gap-2 hover:bg-gray-200 transition whitespace-nowrap"
              >
                Live <FaExternalLinkAlt className="text-xs sm:text-base" />
              </button>
            )}
            {source_code_link && (
              <button
                onClick={() => window.open(source_code_link, '_blank')}
                className="bg-violet-600 text-white text-sm sm:text-base font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg flex items-center gap-1.5 sm:gap-2 hover:bg-violet-700 transition whitespace-nowrap"
              >
                Code <FaGithub className="text-xs sm:text-base" />
              </button>
            )}
          </div>
        </div>

        {/* Project Info */}
        <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
          <div>
            <h3 className="text-white font-bold text-xl sm:text-2xl font-space-grotesk">
              {name}
            </h3>
            <p className="mt-2 text-neutral-300 text-sm font-poppins leading-relaxed">
              {description}
            </p>
          </div>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag.name}
                className={`text-xs sm:text-sm font-medium px-2 py-1 rounded-lg bg-neutral-700/50 ${tag.color}`}
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default ProjectCard;