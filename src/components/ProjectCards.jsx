import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// We will no longer use the fadeIn variant directly on the ProjectCard
// as react-slick will handle the entry animation.
// The ProjectCard component itself will just be the structure of a single card.

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <div className="px-3 py-2"> {/* Added padding for spacing between carousel items */}
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.3}
        scale={1.05}
        transitionSpeed={250}
        className="bg-neutral-800/70 backdrop-blur-lg border border-neutral-700 rounded-2xl shadow-lg hover:shadow-violet-500/40 transition-all duration-300 h-full flex flex-col"
        style={{ minHeight: '450px' }} // Ensures consistent card height
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
    </div>
  );
};

export default ProjectCard;