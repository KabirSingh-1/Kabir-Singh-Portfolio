import React from 'react';
import Tilt from 'react-parallax-tilt';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ name, description, tags, image, source_code_link, live_demo_link }) => (
  <div className="px-2 py-4 sm:px-3 sm:py-2">
    <Tilt
      glareEnable
      glareMaxOpacity={0.3}
      scale={1.03}
      transitionSpeed={250}
      className="uniform-card glow-card hover:scale-[1.02] transition-transform"
    >
      {/* Image (fixed height) */}
      <div className="relative w-full h-[180px] sm:h-[230px] rounded-t-2xl overflow-hidden flex-shrink-0">
        <img src={image} alt={name} className="w-full h-full object-cover rounded-t-2xl" loading="lazy" />
        <div className="absolute inset-0 flex justify-center items-center gap-3 sm:gap-4 bg-black/60 opacity-0 hover:opacity-100 transition duration-300">
          {live_demo_link && (
            <button
              onClick={() => window.open(live_demo_link, '_blank')}
              className="bg-white text-black text-sm sm:text-base font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg flex items-center gap-1.5 sm:gap-2 hover:bg-gray-200 transition"
            >
              Live <FaExternalLinkAlt className="text-xs sm:text-base" />
            </button>
          )}
          {source_code_link && (
            <button
              onClick={() => window.open(source_code_link, '_blank')}
              className="bg-violet-600 text-white text-sm sm:text-base font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg flex items-center gap-1.5 sm:gap-2 hover:bg-violet-700 transition"
            >
              Code <FaGithub className="text-xs sm:text-base" />
            </button>
          )}
        </div>
      </div>

      {/* Info (flex grows to fill space) */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 overflow-hidden">
        <div className="flex-1">
          <h3 className="text-white font-bold text-lg sm:text-2xl font-space-grotesk line-clamp-1">{name}</h3>
          <p className="mt-2 text-neutral-300 text-sm font-poppins leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Tags (stick to bottom) */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag.name}
              className={`text-xs sm:text-sm font-medium px-2 py-1 rounded-lg bg-neutral-700/50 ${tag.color} line-clamp-1`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
    </Tilt>
  </div>
);

export default ProjectCard;
