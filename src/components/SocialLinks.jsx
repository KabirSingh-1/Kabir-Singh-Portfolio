import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="mt-4 flex justify-center gap-6">
      <a href="https://github.com/KabirSingh-1" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-white text-3xl hover:text-violet-500 transition" />
      </a>
      <a href="https://www.linkedin.com/in/kabir-singh-9193k/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-white text-3xl hover:text-violet-500 transition" />
      </a>
      <a href="https://x.com/Mrkabirsingh12" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-white text-3xl hover:text-violet-500 transition" />
      </a>
    </div>
  );
};

export default SocialLinks;
