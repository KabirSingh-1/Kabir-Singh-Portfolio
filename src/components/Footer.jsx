// components/Footer.jsx
import React from 'react';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="bg-black/70 border-t border-neutral-700 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center">
        <h3 className="text-lg text-white font-semibold mb-4">Follow Me</h3>
        <SocialLinks />
        <p className="text-neutral-400 text-sm mt-4">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
