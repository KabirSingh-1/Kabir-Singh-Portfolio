import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
  isActive = false, // New prop to indicate active slide
}) => {
  return (
    // Outer container for padding and consistent spacing in the slider
    <div className="px-2 sm:px-3 py-3">
      {/* Main card container with conditional glowing effect */}
      <div
        className={`relative bg-neutral-800/70 backdrop-blur-lg border border-neutral-700 rounded-2xl shadow-lg
        hover:shadow-violet-500/40 transition-all duration-300 h-full flex flex-col
        ${isActive ? 'glow-card' : ''} // Apply glow class if active
        `}
        style={{
          transform: isActive ? 'scale(1.05)' : 'scale(1)', // Slight scale for active card
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        {/* Project Image with Overlay */}
        <div className="relative w-full h-[160px] xs:h-[180px] sm:h-[200px] md:h-[230px] rounded-t-2xl overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-t-2xl"
            loading="lazy"
          />
          {/* Overlay with Buttons */}
          <div
            className="absolute inset-0 flex justify-center items-center gap-3 sm:gap-4 bg-black/60 opacity-0
                       group-hover:opacity-100 transition-opacity duration-300" // Use group-hover for parent hover
          >
            {live_demo_link && (
              <button
                onClick={() => window.open(live_demo_link, '_blank')}
                className="bg-purple-600 text-white text-sm sm:text-base font-semibold px-4 py-2 rounded-lg
                           flex items-center gap-2 hover:bg-purple-700 transition whitespace-nowrap shadow-lg
                           focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75"
              >
                Live <FaExternalLinkAlt className="text-sm" />
              </button>
            )}
            {source_code_link && (
              <button
                onClick={() => window.open(source_code_link, '_blank')}
                className="bg-gray-700 text-white text-sm sm:text-base font-semibold px-4 py-2 rounded-lg
                           flex items-center gap-2 hover:bg-gray-600 transition whitespace-nowrap shadow-lg
                           focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75"
              >
                Code <FaGithub className="text-sm" />
              </button>
            )}
          </div>
        </div>

        {/* Project Info */}
        <div className="p-4 sm:p-5 md:p-6 flex flex-col justify-between flex-1">
          <div>
            <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl font-space-grotesk line-clamp-1">
              {name}
            </h3>
            <p className="mt-2 text-neutral-300 text-xs sm:text-sm font-poppins leading-relaxed line-clamp-3">
              {description}
            </p>
          </div>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag.name}
                className={`text-xs px-3 py-1 rounded-full bg-neutral-700/60 text-white/80 border border-neutral-600 ${tag.color}`}
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;