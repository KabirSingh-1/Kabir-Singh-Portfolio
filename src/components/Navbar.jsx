import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, Events, scrollSpy } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';
import { navLinks } from '../constants';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);

    // react-scroll active section
    Events.scrollEvent.register('begin', () => { });
    Events.scrollEvent.register('end', () => { });
    scrollSpy.update();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const navBgClasses = scrolled
    ? 'bg-neutral-900/70 backdrop-blur-lg shadow-lg border-b border-neutral-800/50'
    : 'bg-transparent';

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${navBgClasses}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">

        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-4 cursor-pointer"
        >
          <motion.a
            href="#"
            onClick={() => {
              setActive('');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2"
          >
            <p className="text-white text-lg font-bold font-space-grotesk">
              Kabir Singh
            </p>
          </motion.a>

          {/* ✅ Download Resume Button */}
          <motion.a
            href="/Kabir_Singh_Resume.pdf" // replace with your resume file path
            download="Kabir_Singh_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg hover:opacity-90 transition"
          >
            Download Resume
          </motion.a>
        </motion.div>


        {/* Desktop Menu */}
        <ul className="hidden sm:flex flex-row gap-8 relative">
          {navLinks.map((link) => (
            <li key={link.id} className="relative group">
              <Link
                to={link.id}
                spy={true}
                smooth={true}
                duration={600}
                offset={-80}
                onSetActive={() => setActive(link.title)}
                className={`cursor-pointer ${active === link.title ? 'text-white' : 'text-neutral-300'
                  } hover:text-white text-base font-medium transition-colors duration-200`}
              >
                {link.title}
              </Link>
              {/* Underline hover effect */}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-violet-500 transition-all duration-300 group-hover:w-full"></span>
              {active === link.title && (
                <motion.span
                  layoutId="active-underline"
                  className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-violet-500"
                  transition={{ type: 'spring', stiffness: 300 }}
                />
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-3xl focus:outline-none"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 80 }}
            className="fixed top-0 right-0 h-screen w-3/4 bg-neutral-900/95 backdrop-blur-lg flex flex-col items-center justify-center z-50"
          >
            <ul className="flex flex-col gap-8 text-white text-xl">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.id}
                    spy={true}
                    smooth={true}
                    duration={600}
                    offset={-80}
                    onClick={() => {
                      setActive(link.title);
                      setMenuOpen(false);
                    }}
                    className="hover:text-violet-400 cursor-pointer transition-colors duration-200"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
