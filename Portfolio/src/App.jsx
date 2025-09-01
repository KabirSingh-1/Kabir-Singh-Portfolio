
import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero';
import About from './components/about.jsx';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import StarsCanvas from './components/canvas/Stars';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="relative z-0 bg-neutral-900 text-white font-sans">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Skills />
      <Projects />
      <Experience />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
        <Footer />
      </div>
    </div>
  );
};

export default App;
