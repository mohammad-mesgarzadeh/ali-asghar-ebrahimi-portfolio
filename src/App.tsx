import { useEffect, useRef } from 'react';
import {
  Navbar,
  Hero,
  Stats,
  About,
  Experience,
  Projects,
  Skills,
  Software,
  Education,
  Contact,
  Footer,
} from './components';
import './index.css';

function App() {
  const sectionRefs = {
    about: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    software: useRef<HTMLDivElement>(null),
    education: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  /**
   * Scroll to top of the page
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  /**
   * Scroll to a specific section
   */
  const handleNavClick = (sectionId: string) => {
    // Home / Logo
    if (sectionId === 'home') {
      scrollToTop();
      return;
    }

    const ref =
      sectionRefs[sectionId as keyof typeof sectionRefs];

    if (!ref?.current) return;

    const navbarHeight = 80;

    const topPosition =
      ref.current.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: topPosition,
      behavior: 'smooth',
    });
  };

  /**
   * Hero CTA buttons
   */
  const handleCtaClick = (
    type: 'portfolio' | 'contact'
  ) => {
    if (type === 'contact') {
      handleNavClick('contact');
      return;
    }

    if (type === 'portfolio') {
      handleNavClick('experience');
    }
  };

  /**
   * Set Persian RTL document
   */
  useEffect(() => {
    const htmlElement = document.documentElement;

    htmlElement.setAttribute('lang', 'fa');
    htmlElement.setAttribute('dir', 'rtl');
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-white overflow-x-hidden">
      <Navbar onNavClick={handleNavClick} />

      <main>
        {/* HOME */}
        <section id="home">
          <Hero onCtaClick={handleCtaClick} />
        </section>

        {/* STATS */}
        <Stats />

        {/* ABOUT */}
        <div ref={sectionRefs.about} id="about">
          <About />
        </div>

        {/* EXPERIENCE */}
        <div ref={sectionRefs.experience} id="experience">
          <Experience />
        </div>

        {/* PROJECTS */}
        <div ref={sectionRefs.projects} id="projects">
          <Projects />
        </div>

        {/* SKILLS */}
        <div ref={sectionRefs.skills} id="skills">
          <Skills />
        </div>

        {/* SOFTWARE */}
        <div ref={sectionRefs.software} id="software">
          <Software />
        </div>

        {/* EDUCATION */}
        <div ref={sectionRefs.education} id="education">
          <Education />
        </div>

        {/* CONTACT */}
        <div ref={sectionRefs.contact} id="contact">
          <Contact />
        </div>
      </main>

      <Footer onNavClick={handleNavClick} />
    </div>
  );
}

export default App;